/**
 * models-config.mjs — model/provider configuration for pi-loop.
 *
 * pi-loop no longer hard-codes an endpoint. It reads a config written in the
 * EXACT format pi itself reads from `<agentDir>/models.json`:
 *
 *   {
 *     "providers": {
 *       "local-vllm": {
 *         "baseUrl": "http://localhost:8888/v1",
 *         "api": "openai-completions",
 *         "apiKey": "dummy",
 *         "compat": { "supportsDeveloperRole": false, "supportsReasoningEffort": false },
 *         "models": [ { "id": "qwen3.8-flash-next", "contextWindow": 262144 } ]
 *       }
 *     }
 *   }
 *
 * Those files live in the repo's `setup/` dir (e.g. setup/pi_qwen3.8-flash-next.json),
 * so dropping a new config there re-points the loop at a new model with no code
 * change — and the same file also configures the `pi` CLI for humans.
 *
 * Everything here is side-effect free at import time so it can be unit tested
 * (see models-config.test.mjs); pi-loop.mjs performs the actual writes.
 */
import fs from "node:fs";
import path from "node:path";

/** A configuration problem the operator must fix — reported as a fatal error. */
export class ConfigError extends Error {
  constructor(message, options) {
    super(message, options);
    this.name = "ConfigError";
  }
}

/** Config file names considered inside a setup dir, newest first. */
export function listSetupConfigs(setupDir) {
  let entries = [];
  try {
    entries = fs.readdirSync(setupDir);
  } catch {
    return [];
  }
  return entries
    .filter((f) => /^pi.*\.json$/i.test(f))
    .map((f) => {
      const full = path.join(setupDir, f);
      let mtime = 0;
      try {
        mtime = fs.statSync(full).mtimeMs;
      } catch {}
      return { path: full, name: f, mtime };
    })
    .filter((f) => f.mtime > 0)
    // Newest config wins; `pi.json` is the generic fallback profile, so a named
    // profile (pi_<model>.json) always beats it regardless of mtime.
    .sort((a, b) => rank(a) - rank(b) || b.mtime - a.mtime);
}

function rank(entry) {
  return entry.name === "pi.json" ? 1 : 0;
}

/**
 * Find the models config to use.
 * Priority: --models-config=PATH > $PI_MODELS_CONFIG > newest named profile in
 * $PI_SETUP_DIR / <cwd>/setup / <scriptDir>/../../setup.
 */
export function discoverModelsConfig({ explicitPath, env = process.env, setting, setupDirs = [] } = {}) {
  const read = setting ?? makeSettingReader(env);
  const pinned = [
    explicitPath ? { path: path.resolve(explicitPath), source: "--models-config" } : null,
    read("MODELS_CONFIG") ? { path: path.resolve(read("MODELS_CONFIG")), source: "PI_LOOP_MODELS_CONFIG/PI_MODELS_CONFIG" } : null,
  ].filter(Boolean);
  for (const cand of pinned) {
    if (!fs.existsSync(cand.path)) {
      throw new ConfigError(`models config not found: ${cand.path} (from ${cand.source})`);
    }
    return { ...cand, dir: path.dirname(cand.path) };
  }
  for (const dir of setupDirs) {
    const found = listSetupConfigs(dir);
    if (found.length) {
      return {
        path: found[0].path,
        source: "auto-discovered",
        dir,
        candidates: found.map((f) => f.path),
      };
    }
  }
  throw new ConfigError(
    `no models config found. Expected setup/pi*.json in ${setupDirs.join(" or ")} — or pin one with --models-config=PATH / PI_MODELS_CONFIG.`
  );
}

/** Read + validate a models config file. */
export function loadModelsConfigFile(file) {
  let raw;
  try {
    raw = fs.readFileSync(file, "utf8");
  } catch (e) {
    throw new ConfigError(`cannot read models config ${file}: ${e.message}`);
  }
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    throw new ConfigError(`invalid JSON in models config ${file}: ${e.message}`);
  }
  const providers = parsed?.providers;
  if (!providers || typeof providers !== "object" || !Object.keys(providers).length) {
    throw new ConfigError(`models config ${file} has no "providers" entries`);
  }
  return parsed;
}

/** All `provider/model` ids a config declares. */
export function availableModelIds(config) {
  return Object.entries(config.providers).flatMap(([pid, p]) => (p?.models ?? []).map((m) => `${pid}/${m?.id}`));
}

/**
 * Choose provider + model from a config, honouring optional selectors
 * (--provider/--model, PI_PROVIDER/PI_MODEL). Defaults to the first model of
 * the first provider that declares one.
 */
export function selectModel(config, { file = "models config", provider, model } = {}) {
  const entries = Object.entries(config.providers);
  if (provider && !config.providers[provider]) {
    throw new ConfigError(
      `provider "${provider}" is not in ${file} (available: ${Object.keys(config.providers).join(", ")})`
    );
  }
  if (model) {
    const match = entries.find(
      ([pid, p]) => (provider ? pid === provider : true) && (p?.models ?? []).some((m) => m?.id === model)
    );
    if (!match) {
      throw new ConfigError(`model "${model}" is not in ${file} (available: ${availableModelIds(config).join(", ")})`);
    }
    return { providerId: match[0], modelId: model, providerCfg: config.providers[match[0]], modelCfg: match[1].models.find((m) => m?.id === model) };
  }
  const match = entries.find(([pid, p]) => (provider ? pid === provider : true) && (p?.models ?? []).length);
  if (!match) {
    throw new ConfigError(`${file} declares no models${provider ? ` for provider "${provider}"` : ""}`);
  }
  return { providerId: match[0], modelId: match[1].models[0].id, providerCfg: match[1], modelCfg: match[1].models[0] };
}

const toInt = (v) => {
  if (v == null || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? Math.trunc(n) : null;
};

/**
 * Read pi-loop settings.
 *
 * `PI_LOOP_<NAME>` always wins. The plain `PI_<NAME>` spelling is accepted too,
 * EXCEPT for the variables pi itself exports into every shell command it runs
 * (`PI_MODEL`, `PI_PROVIDER`): when pi-loop is started from inside a pi session
 * (`PI_CODING_AGENT=true`) those name the *parent* session's model, not what the
 * loop should run, so they are ignored there and reported by `ignored()` instead
 * of silently hijacking the endpoint.
 */
export function makeSettingReader(env = process.env) {
  const insidePiSession = /^(1|true|yes)$/i.test(String(env.PI_CODING_AGENT ?? ""));
  const piOwned = new Set(["MODEL", "PROVIDER"]);
  const ignored = [];
  const read = (name) => {
    const pinned = env[`PI_LOOP_${name}`];
    if (pinned !== undefined && pinned !== "") return pinned;
    const plain = env[`PI_${name}`];
    if (plain === undefined || plain === "") return undefined;
    if (insidePiSession && piOwned.has(name)) {
      ignored.push(`PI_${name}=${plain}`);
      return undefined;
    }
    return plain;
  };
  read.ignored = () => ignored;
  read.insidePiSession = insidePiSession;
  return read;
}

/**
 * Numeric limits for the session model: explicit setting > config value >
 * endpoint-reported `max_model_len` > derived default. Also reports where each
 * value came from, so callers only override the SDK-resolved model when the
 * operator (or the config) actually asked for a specific number.
 */
export function modelLimits({ modelCfg = {}, env = process.env, setting, serverMaxModelLen = null } = {}) {
  const read = setting ?? makeSettingReader(env);
  const envContextWindow = toInt(read("CONTEXT_WINDOW"));
  const envMaxTokens = toInt(read("MAX_TOKENS"));
  const contextWindow =
    envContextWindow ?? toInt(modelCfg.contextWindow) ?? toInt(serverMaxModelLen) ?? 262144;
  const maxTokens =
    envMaxTokens ?? toInt(modelCfg.maxTokens) ?? Math.min(131072, Math.floor(contextWindow / 2));
  const origin = (envValue, configValue, endpointValue) =>
    envValue != null ? "setting" : configValue != null ? "config" : endpointValue != null ? "endpoint" : "default";
  return {
    contextWindow,
    maxTokens,
    contextWindowFrom: origin(envContextWindow, toInt(modelCfg.contextWindow), toInt(serverMaxModelLen)),
    maxTokensFrom: origin(envMaxTokens, toInt(modelCfg.maxTokens), null),
  };
}

/**
 * Merge the resolved limits onto an SDK-resolved model WITHOUT inflating pi's
 * own defaults: only numbers the operator (PI_LOOP_*), the config, or the
 * endpoint itself stated are applied. pi's defaults (128k context / 16k output)
 * are safe for vLLM-style servers that reject prompt_tokens + max_tokens >
 * max_model_len, so an invented guess must not replace them. Re-stating a config
 * value is a no-op when pi already read it from models.json, and keeps the
 * session honest if that file was stale.
 */
export function applyLimits(model, limits) {
  if (!model) return model;
  const out = { ...model };
  if (["setting", "config", "endpoint"].includes(limits.contextWindowFrom)) {
    out.contextWindow = limits.contextWindow;
  }
  if (["setting", "config"].includes(limits.maxTokensFrom)) {
    out.maxTokens = limits.maxTokens;
  }
  return out;
}

/**
 * Merge the setup config into <agentDir>/models.json so the SDK (and the pi CLI
 * itself, `/model`) see exactly the same provider definitions.
 *
 * pi validates models.json strictly and rejects the WHOLE file when a root key
 * is unknown — only "providers" and "modelOverrides" are legal — so this also
 * drops the legacy top-level "models" map older pi-loop versions wrote (that
 * stray key silently disabled the entire file).
 */
export function mergeModelsJson(existingText, config) {
  let existing = {};
  if (existingText) {
    try {
      existing = JSON.parse(existingText);
    } catch {
      existing = {};
    }
    if (!existing || typeof existing !== "object") existing = {};
  }
  const droppedLegacy = Object.prototype.hasOwnProperty.call(existing, "models");
  const merged = { ...existing, providers: { ...(existing.providers ?? {}), ...config.providers } };
  if (existing.modelOverrides) merged.modelOverrides = existing.modelOverrides;
  delete merged.models;
  return { merged, droppedLegacy };
}

export function writeAgentModelsJson(modelsJsonPath, config) {
  let existingText = null;
  try {
    existingText = fs.readFileSync(modelsJsonPath, "utf8");
  } catch {}
  const { merged, droppedLegacy } = mergeModelsJson(existingText, config);
  fs.writeFileSync(modelsJsonPath, JSON.stringify(merged, null, 2));
  return { modelsJsonPath, droppedLegacy };
}

/** Minimal model object for when the SDK runtime cannot resolve the config. */
export function inlineModel({ providerId, modelId, providerCfg, modelCfg = {}, contextWindow, maxTokens }) {
  // The SDK does NOT auto-fill baseUrl/api for an inline model object — the
  // openai-completions provider reads model.baseUrl.* (detectCompat) and posts
  // to model.baseUrl, so they MUST be present or every agent turn crashes with
  // "Cannot read properties of undefined (reading 'includes')".
  return {
    provider: providerId,
    id: modelId,
    name: modelCfg.name ?? modelId,
    baseUrl: modelCfg.baseUrl ?? providerCfg.baseUrl,
    api: modelCfg.api ?? providerCfg.api,
    reasoning: modelCfg.reasoning ?? false,
    input: modelCfg.input ?? ["text"],
    compat: { ...(providerCfg.compat ?? {}), ...(modelCfg.compat ?? {}) },
    cost: modelCfg.cost ?? { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow,
    maxTokens,
    headers: modelCfg.headers ?? {},
  };
}

/**
 * Ask the endpoint which models it serves, so a wrong/absent model id fails
 * immediately instead of after a whole round of agent work.
 */
export async function probeEndpoint({ baseUrl, apiKey, modelId, timeoutMs = 5000, fetchImpl = globalThis.fetch }) {
  const base = String(baseUrl ?? "").replace(/\/+$/, "");
  if (!base) return { skipped: false, reachable: false, error: "no baseUrl" };
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetchImpl(`${base}/models`, {
      signal: controller.signal,
      headers: apiKey ? { authorization: `Bearer ${apiKey}` } : {},
    });
    if (!res.ok) return { skipped: false, reachable: false, error: `HTTP ${res.status} from ${base}/models` };
    const body = await res.json().catch(() => null);
    const listed = Array.isArray(body?.data) ? body.data : Array.isArray(body?.models) ? body.models : [];
    const entry = listed.find((m) => m?.id === modelId);
    return {
      skipped: false,
      reachable: true,
      served: listed.map((m) => m?.id).filter(Boolean),
      modelListed: listed.length === 0 || !!entry,
      serverMaxModelLen: entry?.max_model_len ?? null,
    };
  } catch (e) {
    const why = e?.name === "AbortError" ? `timed out after ${timeoutMs}ms` : String(e?.cause?.code ?? e?.message ?? e);
    return { skipped: false, reachable: false, error: `${why} (${base}/models)` };
  } finally {
    clearTimeout(timer);
  }
}

export const HELP = `pi-loop — drive the AGENTS.md loop through a local pi agent session.

usage: node tools/pi-loop/pi-loop.mjs [cwd] [options]

  [cwd]                    project directory to drive (default: process.cwd())
  --rounds=N               number of rounds (default: Infinity)
  --once                   shorthand for --rounds=1
  --force-reset            ignore .pi-loop-state.json and restart at round 1
  --models-config=PATH     models config to use (default: auto-discover setup/pi*.json)
  --provider=ID            provider selector inside that config
  --model=ID               model selector inside that config
  --dry-run                one connectivity round (no progress state, no git checks)
  --describe               print the resolved configuration as JSON and exit
  --help                   this help

env: PI_LOOP_SDK_PATH / PI_SDK_PATH — override SDK discovery; otherwise the pi SDK is
     auto-discovered from the pi managed install (~/.pi/agent/install/releases/<v>/),
     the pi binary on PATH, a node dependency, or a global npm prefix, in that
     order. PI_AGENT_DIR, PI_SETUP_DIR, PI_MODELS_CONFIG, PI_PROVIDER, PI_MODEL,
     PI_THINKING_LEVEL, PI_CONTEXT_WINDOW, PI_MAX_TOKENS, PI_SKIP_MODEL_CHECK,
     PI_MODEL_CHECK_TIMEOUT_MS, PI_LOOP_DELAY_SECONDS
     — each also accepts the PI_LOOP_<NAME> spelling, which always wins. Inside a
       pi session (PI_CODING_AGENT=true) the inherited PI_MODEL / PI_PROVIDER
       name the parent session and are ignored; use PI_LOOP_MODEL / --model=.

tests: node --test tools/pi-loop/*.test.mjs   (or: npm test --prefix tools/pi-loop)
`;
