#!/usr/bin/env node
/**
 * pi-loop — a CLI built on the pi SDK that drives the Genesis Mission
 * reference-intake loop through LOCAL pi agent sessions, one round per link.
 *
 * Ported from donutloop/gusty `tools/pi-loop` (AGENTS.md loop driver with
 * resume-on-stop) and specialised for this repository:
 *
 *   the work queue is `raw_links.md`, the contract is `AGENTS.md`, and the
 *   workflow each round executes is `prompts/process_url_reference.md`.
 *
 * Each round:
 *   1. The HARNESS claims the next pending link: it is removed from
 *      `raw_links.md` (atomic rewrite) and journaled in `.pi-loop-queue.json`
 *      BEFORE the agent is created. The agent never touches the queue file.
 *   2. A brand-new pi agent session is created (new session id, new session
 *      log) and prompted to read AGENTS.md and execute
 *      prompts/process_url_reference.md for exactly that one URL.
 *   3. The turn is awaited, the round is verified (new commit? tag? queue line
 *      committed?) and the result is journaled + persisted.
 *   4. The session is disposed — nothing carries into the next round.
 *
 * Stop/resume:
 *   On SIGINT, error or target reached, {round, lastCommit} is persisted to
 *   `.pi-loop-state.json`. Next run RESUMES at the next round when HEAD still
 *   matches the persisted commit and the tree is clean, otherwise it RESTARTS
 *   the loop at round 1. Claims survive either way: a link that was dispatched
 *   is never dispatched twice (see the journal).
 *
 * Model config (never hard-coded):
 *   discover a pi models.json-shaped config under setup/, publish it to
 *   <agentDir>/models.json, resolve it through the SDK's own ModelRuntime and
 *   probe the endpoint before round 1. See models-config.mjs.
 *
 * Usage:
 *   node tools/pi-loop/pi-loop.mjs [cwd] [--rounds N] [--once] [--force-reset]
 *                                 [--links=raw_links.md] [--prompt=prompts/process_url_reference.md]
 *                                 [--next] [--status] [--requeue-failed] [--retry-failed]
 *                                 [--push] [--dry-run] [--describe] [--help]
 */
import { createRequire } from "node:module";
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  ConfigError,
  HELP,
  availableModelIds,
  applyLimits,
  discoverModelsConfig,
  inlineModel,
  loadModelsConfigFile,
  makeSettingReader,
  modelLimits,
  probeEndpoint,
  selectModel,
  writeAgentModelsJson,
} from "./models-config.mjs";
import { resolveSdkPath } from "./sdk-discovery.mjs";
import {
  STATUS,
  claimNext,
  latestClaims,
  loadJournal,
  parseQueue,
  peekNext,
  recordClaim,
  requeueClaims,
  saveJournal,
} from "./link-queue.mjs";
import { fetchReference, formatReference } from "./webfetch.mjs";
import { buildRoundPrompt } from "./round-prompt.mjs";

const require = createRequire(import.meta.url);

// ---- console UI (copied in spirit from upstream pi-loop) ----------------------
const ansi = {
  reset: "\x1b[0m", bold: "\x1b[1m", dim: "\x1b[2m", cyan: "\x1b[36m", green: "\x1b[32m",
  yellow: "\x1b[33m", magenta: "\x1b[35m", blue: "\x1b[34m", gray: "\x1b[90m", red: "\x1b[31m",
};
const paint = (s, code) => (code ? `${code}${s}${ansi.reset}` : s);

function fmtTime(iso) {
  const d = iso ? new Date(iso) : new Date();
  return [d.getHours(), d.getMinutes(), d.getSeconds()].map((n) => String(n).padStart(2, "0")).join(":");
}
function fmtTokens(n) {
  if (n == null) return null;
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
}
function fmtUsage(usage) {
  if (!usage) return null;
  const parts = [];
  const inTok = usage.input ?? usage.input_tokens ?? usage.prompt_tokens;
  const outTok = usage.output ?? usage.output_tokens ?? usage.completion_tokens;
  if (inTok != null) parts.push(`${fmtTokens(inTok)} in`);
  if (outTok != null) parts.push(`${fmtTokens(outTok)} out`);
  if (usage.reasoning != null) parts.push(`${fmtTokens(usage.reasoning)} think`);
  if (usage.cacheRead != null) parts.push(`${fmtTokens(usage.cacheRead)} cached`);
  const total = usage.totalTokens ?? usage.total_tokens;
  if (total != null) parts.push(`${fmtTokens(total)} total`);
  return parts.length ? `↗ ${parts.join(" · ")}` : null;
}
function roleBadge(role) {
  switch (role) {
    case "user": return paint("you", ansi.cyan);
    case "assistant": return paint("agent", ansi.magenta);
    case "toolResult": return paint("tool", ansi.yellow);
    case "system": return paint("system", ansi.gray);
    default: return paint(String(role), ansi.gray);
  }
}
function oneLine(text, limit = 200) {
  const s = String(text ?? "").replace(/\s+/g, " ").trim();
  return s.length > limit ? `${s.slice(0, limit)}…` : s;
}
function shortJson(value, limit = 160) {
  if (value == null) return "";
  let s;
  try { s = JSON.stringify(value); } catch { s = String(value); }
  return s.length > limit ? `${s.slice(0, limit)}…}` : s;
}
function renderText(content) {
  if (content == null) return "";
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return content.map((c) => {
      if (typeof c === "string") return c;
      if (c && typeof c === "object") {
        if (c.type === "text" || c.text) return String(c.text ?? "");
        if (c.type === "thinking" || c.thinking) return paint(`think  ${oneLine(c.thinking)}`, ansi.dim);
        if (c.type === "toolCall" || c.toolCall) return paint(`call ${c.name ?? "?"} ${shortJson(c.arguments)}`, ansi.blue);
        if (c.type === "image" || c.image) return "[image]";
        try { return JSON.stringify(c); } catch { return "[object]"; }
      }
      return String(c);
    }).join("\n");
  }
  try { return JSON.stringify(content); } catch { return "[object]"; }
}
function renderMessage(m) {
  const role = m?.role ?? "message";
  const body = renderText(m?.content).replace(/\n/g, "\n  ");
  const usage = fmtUsage(m?.usage);
  const head = `${paint(fmtTime(m?.timestamp), ansi.dim)} ${roleBadge(role)}${usage ? `  ${paint(usage, ansi.dim)}` : ""}`;
  return `  ${head}\n  ${body}`;
}
function renderEvent(badge, text) {
  return `  ${paint(fmtTime(), ansi.dim)} ${badge}${text ? `  ${text}` : ""}`;
}

/**
 * SessionManager that persists the SDK's own JSONL log AND mirrors every entry
 * to the console, so the operator sees exactly what the session sees.
 */
function createConsoleMirrorSessionManager(cwd, agentDir) {
  const sm = SessionManager.create(cwd, getDefaultSessionDir(cwd, agentDir));
  const orig = {
    appendMessage: sm.appendMessage.bind(sm),
    appendThinkingLevelChange: sm.appendThinkingLevelChange.bind(sm),
    appendModelChange: sm.appendModelChange.bind(sm),
    appendCompaction: sm.appendCompaction.bind(sm),
    appendCustomEntry: sm.appendCustomEntry.bind(sm),
    appendSessionInfo: sm.appendSessionInfo.bind(sm),
    appendCustomMessageEntry: sm.appendCustomMessageEntry.bind(sm),
    appendLabelChange: sm.appendLabelChange.bind(sm),
  };
  sm.appendMessage = (message) => { console.log(renderMessage(message)); return orig.appendMessage(message); };
  sm.appendThinkingLevelChange = (level) => { console.log(renderEvent(paint("thought", ansi.blue), String(level))); return orig.appendThinkingLevelChange(level); };
  sm.appendModelChange = (provider, modelId) => { console.log(renderEvent(paint("model", ansi.green), `${provider}/${modelId}`)); return orig.appendModelChange(provider, modelId); };
  sm.appendCompaction = (summary) => { console.log(renderEvent(`${paint("context", ansi.yellow)} ${paint("compacted", ansi.bold)}`, renderText(summary))); return orig.appendCompaction(summary); };
  sm.appendCustomEntry = (customType, data) => { console.log(renderEvent(paint(String(customType), ansi.gray), typeof data === "string" ? data : renderText(data))); return orig.appendCustomEntry(customType, data); };
  sm.appendSessionInfo = (name) => { console.log(renderEvent(paint("session", ansi.green), String(name))); return orig.appendSessionInfo(name); };
  sm.appendCustomMessageEntry = (customType, content, display, details) => { console.log(renderEvent(paint(String(customType), ansi.gray), renderText(content))); return orig.appendCustomMessageEntry(customType, content, display, details); };
  sm.appendLabelChange = (targetId, label) => { console.log(renderEvent(paint("label", ansi.gray), `${targetId} -> ${label ?? "(cleared)"}`)); return orig.appendLabelChange(targetId, label); };
  return sm;
}

// ---- arguments ---------------------------------------------------------------
const args = process.argv.slice(2);
const cwd = path.resolve(args.find((a) => !a.startsWith("--")) || process.cwd());
const roundsArg = args.find((a) => a.startsWith("--rounds=")) ?? "Infinity";
const rounds = roundsArg === "Infinity" ? Infinity : parseInt(roundsArg.slice(9), 10);
const once = args.includes("--once") ? 1 : rounds;
const forceReset = args.includes("--force-reset");
const dryRun = args.includes("--dry-run");
const pushEnabled = args.includes("--push") || /^(1|true|yes)$/i.test(String(process.env.PI_LOOP_PUSH ?? ""));
const wantDescribe = args.includes("--describe") || args.includes("--json");
const wantNext = args.includes("--next");
const wantStatus = args.includes("--status");
const wantRequeue = args.includes("--requeue-failed");
const retryFailed = args.includes("--retry-failed");

const setting = makeSettingReader(process.env);
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const TOOL_VERSION = (() => {
  try { return JSON.parse(fs.readFileSync(path.join(scriptDir, "package.json"), "utf8")).version ?? "0.0.0"; } catch { return "0.0.0"; }
})();

const flagValue = (prefix) => {
  const hit = args.find((a) => a.startsWith(prefix));
  return hit ? hit.slice(prefix.length) : undefined;
};

// The queue and the workflow being looped. All of them are harness-owned: the
// agent is told never to edit raw_links.md.
const linksFile = path.resolve(flagValue("--links=") || setting("LINKS") || path.join(cwd, "raw_links.md"));
const promptFile = path.resolve(flagValue("--prompt=") || setting("PROMPT") || path.join(cwd, "prompts", "process_url_reference.md"));
const journalPath = path.resolve(flagValue("--journal=") || setting("JOURNAL") || path.join(cwd, ".pi-loop-queue.json"));
const STATE_FILE = path.resolve(flagValue("--state=") || setting("STATE") || path.join(cwd, ".pi-loop-state.json"));
const knownFiles = (flagValue("--known=") || setting("KNOWN") || "references.md,reference_coverage.md")
  .split(",")
  .map((f) => path.resolve(cwd, f.trim()))
  .filter(Boolean);
const skipKnown = !/^(0|false|no)$/i.test(String(flagValue("--skip-known=") ?? setting("SKIP_KNOWN") ?? "1"));
const knownLevel = Number(flagValue("--known-level=") ?? setting("KNOWN_LEVEL") ?? 1) || 1;
const delaySeconds = parseInt(setting("DELAY_SECONDS") ?? "60", 10) || 0;

const LOCAL_HELP = `  --links=PATH             raw link queue (default <cwd>/raw_links.md) — the loop dequeues from it
  --prompt=PATH              workflow to execute per round (default prompts/process_url_reference.md)
  --journal=PATH             claim journal (default <cwd>/.pi-loop-queue.json)
  --state=PATH               progress state  (default <cwd>/.pi-loop-state.json)
  --known=A,B                files scanned for already-indexed URLs (default references.md,reference_coverage.md)
  --skip-known=0             dispatch links even when they are already indexed
  --known-level=2            also treat "same path, different query" as indexed
  --retry-failed             release links that ended aborted/no-commit for a re-dispatch
  --requeue-failed           append failed links back into the queue file and exit
  --next                     print the link the next round would claim (JSON) and exit
  --status                   print the queue/journal summary (JSON) and exit
  --push                     let rounds publish with \`git push origin main vX.Y.Z\`
  env: PI_LOOP_LINKS, PI_LOOP_PROMPT, PI_LOOP_JOURNAL, PI_LOOP_STATE, PI_LOOP_KNOWN,
       PI_LOOP_SKIP_KNOWN, PI_LOOP_KNOWN_LEVEL, PI_LOOP_PUSH, PI_LOOP_DELAY_SECONDS
       (plus every upstream pi-loop variable — PI_LOOP_<NAME> always wins)
`;

if (args.includes("--help") || args.includes("-h")) {
  console.log(`${HELP}\nloop-specific flags (this fork):\n${LOCAL_HELP}`);
  process.exit(0);
}

function die(msg, code = 1) {
  console.error(`${paint("pi-loop: fatal", ansi.red)} ${msg}`);
  process.exit(code);
}

// ---- git helpers ------------------------------------------------------------
function git(argsArr) {
  return new Promise((resolve) => {
    const p = spawn("git", argsArr, { cwd });
    let out = "";
    p.stdout.on("data", (d) => (out += d));
    p.stderr.on("data", (d) => (out += d));
    p.on("close", () => resolve(out.trim()));
  });
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const hostOf = (url) => {
  try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return String(url).slice(0, 40); }
};

function loadState() {
  try { return JSON.parse(fs.readFileSync(STATE_FILE, "utf8")); } catch { return null; }
}
function saveState(state) {
  try {
    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
    console.log(`pi-loop: persisted progress ${JSON.stringify(state)} -> ${STATE_FILE}`);
  } catch (e) {
    console.error("pi-loop: failed to persist state:", e.message);
  }
}

// ---- queue-only entry points (no model needed) -------------------------------
const queueSummary = () => {
  const journal = loadJournal(journalPath, path.basename(linksFile));
  const claims = [...latestClaims(journal).values()];
  const byStatus = {};
  for (const c of claims) byStatus[c.status] = (byStatus[c.status] ?? 0) + 1;
  return {
    linksFile,
    journalPath,
    promptFile,
    promptExists: fs.existsSync(promptFile),
    queued: parseQueue(fs.existsSync(linksFile) ? fs.readFileSync(linksFile, "utf8") : "").entries.length,
    claimed: claims.length,
    byStatus,
  };
};

if (wantNext) {
  const peeked = peekNext({ linksFile, journalPath, knownFiles, skipKnown, retry: retryFailed ? new Set([...latestClaims(loadJournal(journalPath)).values()].filter((c) => [STATUS.DEQUEUED_NO_COMMIT, STATUS.ABORTED, STATUS.INVALID].includes(c.status)).map((c) => c.canonical)) : new Set(), level: knownLevel });
  console.log(JSON.stringify({ ok: true, ...queueSummary(), next: peeked.claimed ? { url: peeked.claimed.url, line: peeked.claimed.line } : null, wouldConsume: peeked.wouldConsume, skipped: peeked.skipped }, null, 2));
  process.exit(0);
}
if (wantStatus) {
  console.log(JSON.stringify({ ok: true, ...queueSummary() }, null, 2));
  process.exit(0);
}
if (wantRequeue) {
  const out = requeueClaims({ linksFile, journalPath });
  console.log(`pi-loop: requeued ${out.restored.length} link(s) into ${linksFile}`);
  process.exit(0);
}

// ---- pi SDK + model config (as upstream) --------------------------------------
let SDK;
try {
  SDK = resolveSdkPath({ cwd, scriptDir });
} catch (e) {
  die(e instanceof ConfigError ? e.message : `pi SDK discovery failed: ${e?.stack || e}`);
}
const sdkPath = SDK.path;
const SDK_DIR = path.dirname(sdkPath);

const sdkModule = await (async () => {
  try {
    return require(sdkPath);
  } catch (e) {
    if (e?.code === "ERR_REQUIRE_ESM" || e?.code === "ERR_REQUIRE_ASYNC_MODULE") return import(pathToFileURL(sdkPath).href);
    throw e;
  }
})();
const { createAgentSession, ModelRuntime, defineTool } = sdkModule;

const sessionModule = (() => {
  try { return require(path.join(SDK_DIR, "core", "session-manager.js")); } catch { return null; }
})();
const SessionManager = sdkModule.SessionManager ?? sessionModule?.SessionManager;
const getDefaultSessionDir = sdkModule.getDefaultSessionDir ?? sessionModule?.getDefaultSessionDir;
if (typeof SessionManager?.create !== "function" || typeof getDefaultSessionDir !== "function") {
  die(`the pi SDK at ${sdkPath} does not export SessionManager/getDefaultSessionDir; update pi or set PI_LOOP_SDK_PATH.`);
}

// stdout carries only JSON with --describe; human banners go to stderr.
const printOut = console.log.bind(console);
if (wantDescribe) console.log = (...a) => console.error(...a);

// Keep the loop's own state out of the repository: pi writes models.json and the
// session log into agentDir, and rounds commit with `git add .`.
const agentDir = path.resolve(setting("AGENT_DIR") || path.join(cwd, ".pi", "agent"));
fs.mkdirSync(agentDir, { recursive: true });

// A project-local agent dir has no credentials of its own; borrow the user's pi
// auth file once so a custom provider keeps working (PI_LOOP_COPY_AUTH=0 disables).
if (setting("COPY_AUTH") !== "0" && !fs.existsSync(path.join(agentDir, "auth.json"))) {
  const userAuth = path.join(process.env.HOME ?? "", ".pi", "agent", "auth.json");
  if (userAuth !== path.join(agentDir, "auth.json") && fs.existsSync(userAuth)) {
    fs.copyFileSync(userAuth, path.join(agentDir, "auth.json"));
    console.log(`pi-loop: seeded ${path.join(agentDir, "auth.json")} from ${userAuth} (PI_LOOP_COPY_AUTH=0 to keep them separate)`);
  }
}

let CONFIG;
try {
  const found = discoverModelsConfig({
    explicitPath: flagValue("--models-config="),
    setting,
    setupDirs: [setting("SETUP_DIR"), path.join(cwd, "setup"), path.resolve(scriptDir, "..", "..", "setup")].filter(Boolean),
  });
  const config = loadModelsConfigFile(found.path);
  const picked = selectModel(config, {
    file: found.path,
    provider: flagValue("--provider=") ?? setting("PROVIDER"),
    model: flagValue("--model=") ?? setting("MODEL"),
  });
  CONFIG = { ...found, config, ...picked };
} catch (e) {
  die(e instanceof ConfigError ? e.message : `models config error: ${e?.stack || e}`);
}

const MODELS_JSON = path.join(agentDir, "models.json");
const { providerId, modelId, providerCfg, modelCfg } = CONFIG;
const thinkingLevel = setting("THINKING_LEVEL") || "max";

const written = writeAgentModelsJson(MODELS_JSON, CONFIG.config);
if (written.droppedLegacy) console.log(`pi-loop: dropped the legacy top-level "models" key from ${MODELS_JSON}`);

const endpoint = setting("SKIP_MODEL_CHECK") === "1"
  ? { skipped: true }
  : await probeEndpoint({
      baseUrl: providerCfg.baseUrl,
      apiKey: providerCfg.apiKey,
      modelId,
      timeoutMs: Number(setting("MODEL_CHECK_TIMEOUT_MS")) || 5000,
    });

const limits = modelLimits({ modelCfg, setting, serverMaxModelLen: endpoint.serverMaxModelLen ?? null });
const rel = (p) => {
  const r = path.relative(cwd, p);
  return r && !r.startsWith("..") ? r : p;
};
const where = CONFIG.source === "auto-discovered" ? `auto-discovered in ${rel(CONFIG.dir)}` : CONFIG.source;

const ignoredSettings = setting.ignored();
if (ignoredSettings.length) {
  console.log(`pi-loop: ignoring ${ignoredSettings.join(", ")} inherited from the parent pi session — use --model= / PI_LOOP_MODEL to choose the loop's model`);
}

const MODEL_RUNTIME = await ModelRuntime.create({ modelsPath: MODELS_JSON, allowModelNetwork: false });
const runtimeError = MODEL_RUNTIME.getError?.();
if (runtimeError) console.warn(`pi-loop: ${runtimeError}`);

const resolvedModel = MODEL_RUNTIME.getPhysicalModel?.(providerId, modelId) ?? MODEL_RUNTIME.getModel?.(providerId, modelId);
const SESSION_MODEL = resolvedModel
  ? applyLimits(resolvedModel, limits)
  : inlineModel({ providerId, modelId, providerCfg, modelCfg, contextWindow: limits.contextWindow, maxTokens: limits.maxTokens });
if (!resolvedModel) console.warn(`pi-loop: SDK could not resolve ${providerId}/${modelId} from ${MODELS_JSON}; using an inline model definition.`);

console.log(
  `pi-loop: models config ${rel(CONFIG.path)} (${where}) → ${paint(`${providerId}/${modelId}`, ansi.green)} @ ${SESSION_MODEL.baseUrl} ` +
  `(context ${SESSION_MODEL.contextWindow}, maxTokens ${SESSION_MODEL.maxTokens}, thinking ${thinkingLevel}${SESSION_MODEL.reasoning ? "" : ", server default effort"})`
);

if (endpoint.skipped) {
  console.log("pi-loop: endpoint check skipped (PI_SKIP_MODEL_CHECK=1)");
} else if (!endpoint.reachable) {
  die(`endpoint ${providerCfg.baseUrl} is not reachable (${endpoint.error}). Start the local model server (setup/boot_agent.sh) or set PI_SKIP_MODEL_CHECK=1.`);
} else if (!endpoint.modelListed) {
  die(`${providerCfg.baseUrl} does not serve "${modelId}" (it serves: ${endpoint.served.join(", ") || "nothing"}). Pick one with --model=ID / PI_LOOP_MODEL.`);
}

if (wantDescribe) {
  printOut(JSON.stringify({
    ok: true,
    tool: "pi-loop-genesis",
    version: TOOL_VERSION,
    sdk: { path: sdkPath, source: SDK.source, packageDir: SDK.packageDir, version: SDK.version },
    cwd, agentDir,
    modelsConfig: CONFIG.path,
    modelsConfigSource: CONFIG.source,
    modelsJson: MODELS_JSON,
    provider: providerId,
    model: modelId,
    baseUrl: SESSION_MODEL.baseUrl,
    api: SESSION_MODEL.api,
    contextWindow: SESSION_MODEL.contextWindow,
    maxTokens: SESSION_MODEL.maxTokens,
    thinkingLevel,
    input: SESSION_MODEL.input ?? ["text"],
    availableModels: availableModelIds(CONFIG.config),
    ignoredInheritedSettings: ignoredSettings,
    endpoint,
    loop: queueSummary(),
    push: pushEnabled,
  }, null, 2));
  process.exit(0);
}

// ---- the round prompt ---------------------------------------------------------
const agentsMdPath = path.join(cwd, "AGENTS.md");
if (!fs.existsSync(agentsMdPath)) console.warn(`pi-loop: ${agentsMdPath} not found — the round prompt still names the workflow, but the loop contract is missing.`);
if (!fs.existsSync(promptFile)) die(`workflow prompt not found: ${promptFile} (--prompt=PATH to override)`);
if (!fs.existsSync(linksFile)) console.warn(`pi-loop: queue file ${linksFile} does not exist — nothing to dispatch.`);

const retrySet = retryFailed
  ? new Set([...latestClaims(loadJournal(journalPath)).values()].filter((c) => [STATUS.DEQUEUED_NO_COMMIT, STATUS.ABORTED, STATUS.INVALID].includes(c.status)).map((c) => c.canonical))
  : new Set();

/**
 * The instruction handed to one fresh session. It points at AGENTS.md (the loop
 * contract) and executes the repository workflow for exactly one URL. Built by
 * round-prompt.mjs, which is unit tested.
 */
const roundPrompt = (params) =>
  buildRoundPrompt({
    linksFile: rel(linksFile),
    journalFile: rel(journalPath),
    agentsFile: rel(agentsMdPath),
    promptFile: rel(promptFile),
    push: pushEnabled,
    ...params,
  });

// ---- the webfetch tool (step 2 of the workflow) --------------------------------
const Type = (() => {
  try { return require("typebox").Type; } catch { return null; }
})();

function makeWebFetchTool() {
  if (!Type || typeof defineTool !== "function") return [];
  return [
    defineTool({
      name: "webfetch",
      label: "Fetch reference",
      description:
        "Fetch one URL and return its readable text plus title/description for the reference entry. " +
        "Use this for step 2 of the workflow. Handles redirects, HTML and PDFs; returns bounded text.",
      promptSnippet: "webfetch(url, maxChars?) — read a web reference",
      promptGuidelines: ["Use webfetch before writing any claim about a reference's content."],
      parameters: Type.Object({
        url: Type.String({ description: "Absolute http(s) URL to fetch" }),
        maxChars: Type.Optional(Type.Number({ description: "Maximum characters of extracted text (default 12000)" })),
        links: Type.Optional(Type.Boolean({ description: "Keep link targets as 'text (url)'" })),
      }),
      async execute(_id, params) {
        const result = await fetchReference(params.url, { maxChars: params.maxChars ?? 12000, links: !!params.links });
        return { content: [{ type: "text", text: formatReference(result) }], details: { url: result.finalUrl ?? params.url, status: result.status, ok: result.ok } };
      },
    }),
  ];
}

// ---- rounds -------------------------------------------------------------------
let currentSession = null;
let currentClaim = null;

async function createRoundSession() {
  const sessionManager = createConsoleMirrorSessionManager(cwd, agentDir);
  const created = await createAgentSession({
    cwd,
    agentDir,
    model: SESSION_MODEL,
    modelRuntime: MODEL_RUNTIME,
    sessionManager,
    thinkingLevel,
    ...(dryRun ? { noTools: "all" } : {}),
    ...(!dryRun ? { customTools: makeWebFetchTool() } : {}),
  });
  const session = created.session ?? created;
  session.subscribe((event) => {
    if (event.type !== "message_update") return;
    const ev = event.assistantMessageEvent;
    const delta = ev?.type === "text_delta" ? ev.delta : (event.assistantMessage?.textDelta ?? event.delta ?? "");
    if (delta) process.stdout.write(paint(delta, ansi.dim));
  });
  return session;
}

function journalPatch(patch) {
  if (!currentClaim) return;
  const journal = loadJournal(journalPath, path.basename(linksFile));
  saveJournal(journalPath, recordClaim(journal, { canonical: currentClaim.canonical, url: currentClaim.url, ...patch }));
}

async function finishRound({ status, commit, tag, note }) {
  journalPatch({ status, commit: commit ?? null, tag: tag ?? null, note: note ?? null, finishedAt: new Date().toISOString() });
}

/**
 * Guarantee the queue line leaves the repository dirty-state: if the round never
 * committed (duplicate abort, model hiccup, selective git add), the harness
 * commits the queue file alone so the link can never be dispatched twice.
 */
async function ensureQueueCommitted() {
  const dirty = await git(["status", "--porcelain", "--", linksFile]);
  if (!dirty) return { committed: false };
  const msg = `chore(loop): dequeue ${currentClaim ? hostOf(currentClaim.url) : "link"} from ${path.basename(linksFile)}`;
  await git(["add", "--", linksFile]);
  await git(["commit", "-m", msg]);
  return { committed: true, head: await git(["rev-parse", "HEAD"]) };
}

async function runRound(round, maxRounds) {
  let claim = null;
  if (!dryRun) {
    claim = claimNext({ linksFile, journalPath, knownFiles, skipKnown, retry: retrySet, level: knownLevel, round });
    for (const c of claim.consumed ?? []) {
      if (c.status === STATUS.DUPLICATE) console.log(`pi-loop: [round ${round}] skipped ${c.url} — already indexed (dequeued, no round spent)`);
      if (c.status === STATUS.ALREADY_CLAIMED) console.log(`pi-loop: [round ${round}] dropped duplicate line for ${c.url}`);
    }
    for (const s of claim.skipped ?? []) console.log(`pi-loop: [round ${round}] left ${s.url} in the queue — ${s.reason}`);
    if (!claim.claimed) {
      const left = claim.remaining ?? 0;
      console.log(`pi-loop: queue drained — ${left} link(s) left in ${rel(linksFile)}, none dispatchable (use --retry-failed / --requeue-failed).`);
      return { stop: true };
    }
    currentClaim = claim.claimed;
    console.log(
      `\n${paint("=== pi-loop: round " + round, ansi.bold)} — claimed ${paint(claim.claimed.url, ansi.green)} ` +
      `(${claim.remaining} link(s) left in ${rel(linksFile)})`
    );
  }

  const headBefore = await git(["rev-parse", "HEAD"]);
  const prompt = dryRun
    ? "Connectivity check only — reply with exactly PI_LOOP_OK. Do not read, edit or run anything."
    : roundPrompt({ round, maxRounds, url: claim.claimed.url });

  currentSession = await createRoundSession();
  console.log(`pi-loop: connected to local pi agent session (${agentDir}) on ${providerId}/${modelId}`);

  let promptError = null;
  try {
    await currentSession.prompt(prompt);
  } catch (e) {
    promptError = e;
    console.error(`\n=== pi-loop: prompt threw ===\n${e?.stack || e}`);
  }
  console.log(`\n=== pi-loop: round ${round} agent turn complete ===`);

  const headAfter = await git(["rev-parse", "HEAD"]);
  const newCommit = headAfter !== headBefore;
  const tag = (await git(["tag", "--points-at", "HEAD"])) || "";
  if (!dryRun) {
    const q = await ensureQueueCommitted();
    const head = q.committed ? q.head : headAfter;
    const status = promptError ? STATUS.ABORTED : newCommit ? STATUS.PROCESSED : STATUS.DEQUEUED_NO_COMMIT;
    await finishRound({ status, commit: newCommit || q.committed ? head : null, tag: tag || null, note: promptError ? String(promptError?.message ?? promptError).slice(0, 200) : null });
    const statusLine = status === STATUS.PROCESSED
      ? `${paint(STATUS.PROCESSED, ansi.green)} commit ${(head || "").slice(0, 8)}${tag ? ` tag ${paint(tag, ansi.green)}` : paint(" (no tag)", ansi.yellow)}`
      : paint(status, ansi.yellow);
    console.log(`pi-loop: [round ${round}] ${rel(linksFile)} clean, ${statusLine}`);
    if (!newCommit && !q.committed) console.warn(`pi-loop: [round ${round}] the round produced no commit and the queue line was already committed.`);
    else if (!newCommit) console.warn(`pi-loop: [round ${round}] the agent committed nothing — harness committed the dequeue only.`);
    else if (!tag) console.warn(`pi-loop: [round ${round}] new commit has no annotated tag (workflow step 8 asks for one).`);
    return { stop: false, head, status, tag };
  }
  return { stop: false, head: headAfter, status: "dry-run", tag: "" };
}

// ---- resume decision (upstream semantics) -------------------------------------
let state = loadState();
let round = 1;
if (dryRun) {
  console.log("pi-loop: DRY RUN — one connectivity round; queue, state and git are untouched");
} else if (!forceReset && state) {
  const head = await git(["rev-parse", "HEAD"]);
  const dirty = await git(["status", "--porcelain"]);
  if (state.lastCommit && state.lastCommit === head && !dirty) {
    round = state.round;
    console.log(`pi-loop: RESUMING with current progress — continuing from round ${round} (HEAD ${head.slice(0, 8)})`);
  } else {
    console.log(`pi-loop: progress out of sync (state.lastCommit=${state.lastCommit?.slice(0, 8) ?? "none"}, HEAD=${head.slice(0, 8)}, dirty=${!!dirty}) — RE-EXECUTING AGENTS.md`);
    round = 1;
    state = null;
  }
} else {
  console.log("pi-loop: no committed progress — RE-EXECUTING AGENTS.md (fresh round 1)");
}

const target = dryRun ? 1 : once || rounds;
const maxRounds = target === Infinity ? Infinity : target;

function shutdown(code) {
  if (state && !dryRun) saveState(state);
  if (currentSession) {
    try { currentSession.dispose(); } catch {}
  }
  process.exit(code);
}
process.on("SIGINT", () => {
  console.log("\npi-loop: interrupted; persisting progress and disconnecting...");
  if (currentClaim) journalPatch({ status: STATUS.ABORTED, note: "interrupted by SIGINT" });
  shutdown(130);
});

try {
  while (round <= maxRounds) {
    if (currentSession) { currentSession.dispose(); currentSession = null; }
    currentClaim = null;

    const result = await runRound(round, maxRounds);
    if (result.stop) break;

    if (!dryRun) {
      state = {
        round: round + 1,
        lastCommit: result.head,
        lastUrl: currentClaim?.url ?? null,
        lastStatus: result.status ?? null,
        lastTag: result.tag || null,
        finishedAt: new Date().toISOString(),
      };
      saveState(state);
    }
    if (currentSession) { currentSession.dispose(); currentSession = null; }
    console.log(`pi-loop: round ${round} completed; discarding session, executing AGENTS.md loop for next round...`);
    round += 1;
    if (dryRun) continue;
    if (delaySeconds > 0 && round <= maxRounds) {
      console.log(`pi-loop: waiting ${delaySeconds}s before round ${round}...`);
      await sleep(delaySeconds * 1000);
    }
  }
  console.log(`pi-loop: finished rounds=${round - 1} — ${queueSummary().queued} link(s) still queued in ${rel(linksFile)}`);
} catch (e) {
  console.error("pi-loop: fatal:", e?.stack || e?.message || e);
  if (currentClaim) journalPatch({ status: STATUS.ABORTED, note: String(e?.message ?? e).slice(0, 200) });
  shutdown(1);
}
