/**
 * Unit tests for tools/pi-loop/models-config.mjs.
 *
 * Run: node --test tools/pi-loop/
 *
 * These cover the config layer that decides which model the loop talks to:
 * discovery order in setup/, provider/model selection, limit precedence,
 * the <agentDir>/models.json merge (including the legacy-key trap), the inline
 * model fallback, and the endpoint pre-flight probe.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  ConfigError,
  applyLimits,
  availableModelIds,
  discoverModelsConfig,
  inlineModel,
  listSetupConfigs,
  loadModelsConfigFile,
  makeSettingReader,
  mergeModelsJson,
  modelLimits,
  probeEndpoint,
  selectModel,
} from "./models-config.mjs";

// The config that ships in setup/ today — kept as the reference fixture so the
// tests fail if the shipped config stops being loadable/complete.
const LIVE_CONFIG = {
  providers: {
    "local-vllm": {
      baseUrl: "http://localhost:8888/v1",
      api: "openai-completions",
      apiKey: "dummy",
      compat: { supportsDeveloperRole: false, supportsReasoningEffort: false },
      models: [{ id: "qwen3.8-flash-next", contextWindow: 262144 }],
    },
  },
};

function withSetupDir(files, fn) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "pi-loop-setup-"));
  for (const [name, text] of Object.entries(files)) fs.writeFileSync(path.join(dir, name), text);
  try {
    return fn(dir);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function setMtime(file, msAgo) {
  const t = new Date(Date.now() - msAgo);
  fs.utimesSync(file, t, t);
}

test("setup dir discovery prefers the newest named profile", () => {
  withSetupDir(
    {
      "pi.json": JSON.stringify(LIVE_CONFIG),
      "pi_old.json": JSON.stringify(LIVE_CONFIG),
      "pi_new.json": JSON.stringify(LIVE_CONFIG),
      "notes.txt": "ignored",
    },
    (dir) => {
      setMtime(path.join(dir, "pi.json"), 0);
      setMtime(path.join(dir, "pi_old.json"), 60_000);
      setMtime(path.join(dir, "pi_new.json"), 30_000);
      assert.deepEqual(
        listSetupConfigs(dir).map((f) => f.name),
        ["pi_new.json", "pi_old.json", "pi.json"]
      );
      const found = discoverModelsConfig({ env: {}, setupDirs: [dir] });
      assert.equal(path.basename(found.path), "pi_new.json");
    }
  );
});

test("setup dir discovery treats pi.json as the fallback profile", () => {
  withSetupDir(
    { "pi.json": JSON.stringify(LIVE_CONFIG), "pi_qwen.json": JSON.stringify(LIVE_CONFIG) },
    (dir) => {
      // pi.json is newest, but a named profile still wins.
      setMtime(path.join(dir, "pi.json"), 0);
      setMtime(path.join(dir, "pi_qwen.json"), 120_000);
      const found = discoverModelsConfig({ env: {}, setupDirs: [dir] });
      assert.equal(path.basename(found.path), "pi_qwen.json");
      assert.ok(found.candidates.length === 2);
    }
  );
});

test("explicit config path wins over auto-discovery", () => {
  withSetupDir({ "pi.json": JSON.stringify(LIVE_CONFIG), "pi_pinned.json": "{}" }, (dir) => {
    const pinned = path.join(dir, "pi_pinned.json");
    assert.equal(discoverModelsConfig({ explicitPath: pinned, env: {}, setupDirs: [dir] }).path, pinned);
    assert.match(discoverModelsConfig({ env: { PI_MODELS_CONFIG: pinned }, setupDirs: [dir] }).source, /MODELS_CONFIG/);
    assert.equal(discoverModelsConfig({ env: { PI_LOOP_MODELS_CONFIG: pinned }, setupDirs: [dir] }).path, pinned);
    assert.throws(() => discoverModelsConfig({ explicitPath: path.join(dir, "nope.json"), env: {}, setupDirs: [] }), ConfigError);
  });
});

test("missing config is a clear fatal error", () => {
  assert.throws(
    () => discoverModelsConfig({ env: {}, setupDirs: ["/nonexistent/setup"] }),
    /no models config found/
  );
});

test("config validation rejects unusable files", () => {
  withSetupDir({ "pi.json": "{ not json" }, (dir) => {
    assert.throws(() => loadModelsConfigFile(path.join(dir, "pi.json")), /invalid JSON in models config/);
  });
  withSetupDir({ "pi.json": '{"providers":{}}' }, (dir) => {
    assert.throws(() => loadModelsConfigFile(path.join(dir, "pi.json")), /no "providers" entries/);
  });
  assert.throws(() => loadModelsConfigFile("/nonexistent/pi.json"), /cannot read models config/);
});

test("the shipped setup config selects the live model", () => {
  const repoRoot = path.resolve(import.meta.dirname, "..", "..");
  const file = path.join(repoRoot, "setup", "pi_qwen3.8-flash-next.json");
  const config = loadModelsConfigFile(file);
  const picked = selectModel(config, { file });
  assert.equal(picked.providerId, "local-vllm");
  assert.equal(picked.modelId, "qwen3.8-flash-next");
  assert.equal(picked.providerCfg.api, "openai-completions");
  assert.equal(picked.modelCfg.contextWindow, 262144);
  assert.deepEqual(availableModelIds(config), ["local-vllm/qwen3.8-flash-next"]);
});

test("model selection honours selectors and reports typos", () => {
  const config = {
    providers: {
      a: { baseUrl: "http://x/v1", api: "openai-completions", models: [{ id: "m1" }, { id: "m2" }] },
      b: { baseUrl: "http://y/v1", api: "openai-completions", models: [{ id: "m2" }] },
    },
  };
  const picked = selectModel(config, {});
  assert.equal(picked.providerId, "a");
  assert.equal(picked.modelId, "m1");
  assert.equal(selectModel(config, { model: "m2" }).providerId, "a");
  assert.equal(selectModel(config, { model: "m2", provider: "b" }).providerId, "b");
  assert.equal(selectModel(config, { provider: "b" }).modelId, "m2");
  assert.throws(() => selectModel(config, { model: "nope" }), /model "nope" is not in .*available: a\/m1, a\/m2, b\/m2/);
  assert.throws(() => selectModel(config, { provider: "zzz" }), /provider "zzz" is not in/);
});

test("limit precedence is setting > config > endpoint > default", () => {
  const limits = (opts) => modelLimits({ env: {}, ...opts });
  const flat = (l) => [l.contextWindow, l.maxTokens, l.contextWindowFrom, l.maxTokensFrom];

  assert.deepEqual(flat(limits({ modelCfg: { contextWindow: 262144 } })), [262144, 131072, "config", "default"]);
  assert.deepEqual(flat(limits({ modelCfg: {} })), [262144, 131072, "default", "default"]);
  assert.deepEqual(flat(limits({ modelCfg: {}, serverMaxModelLen: 32768 })), [32768, 16384, "endpoint", "default"]);
  assert.deepEqual(
    flat(limits({ modelCfg: { contextWindow: 262144, maxTokens: 4096 }, env: { PI_CONTEXT_WINDOW: "8192", PI_MAX_TOKENS: "1024" } })),
    [8192, 1024, "setting", "setting"]
  );
  // PI_LOOP_* beats the plain spelling for the same knob.
  assert.equal(limits({ modelCfg: {}, env: { PI_CONTEXT_WINDOW: "8192", PI_LOOP_CONTEXT_WINDOW: "4096" } }).contextWindow, 4096);
  // A small context window must not yield more output tokens than half of it.
  assert.equal(limits({ modelCfg: { contextWindow: 1000 } }).maxTokens, 500);
});

test("applyLimits never inflates the SDK-resolved model with invented numbers", () => {
  const resolved = { id: "m", provider: "p", contextWindow: 128000, maxTokens: 16384 };

  // Nothing stated anywhere: keep pi's conservative defaults.
  assert.deepEqual(applyLimits(resolved, modelLimits({ modelCfg: {}, env: {} })), resolved);
  assert.equal(applyLimits(resolved, modelLimits({ modelCfg: {}, env: {} })) !== resolved, true);

  // The config stated the window (pi already read it from models.json).
  assert.equal(applyLimits(resolved, modelLimits({ modelCfg: { contextWindow: 262144 }, env: {} })).contextWindow, 262144);
  // The endpoint reported max_model_len and the config omitted the window.
  assert.equal(
    applyLimits(resolved, modelLimits({ modelCfg: {}, env: {}, serverMaxModelLen: 262144 })).contextWindow,
    262144
  );
  // Operator overrides always win, including the output budget.
  const forced = applyLimits(resolved, modelLimits({ modelCfg: {}, env: { PI_LOOP_CONTEXT_WINDOW: "4096", PI_LOOP_MAX_TOKENS: "512" } }));
  assert.equal(forced.contextWindow, 4096);
  assert.equal(forced.maxTokens, 512);
  // ...and the source model object is never mutated.
  assert.equal(resolved.contextWindow, 128000);
  assert.equal(resolved.maxTokens, 16384);
});

test("settings reader ignores a parent pi session's PI_MODEL/PI_PROVIDER", () => {
  const outside = makeSettingReader({ PI_MODEL: "m1", PI_PROVIDER: "p1" });
  assert.equal(outside("MODEL"), "m1");
  assert.equal(outside("PROVIDER"), "p1");
  assert.deepEqual(outside.ignored(), []);

  const inside = makeSettingReader({ PI_CODING_AGENT: "true", PI_MODEL: "parent-model", PI_PROVIDER: "parent" });
  assert.equal(inside("MODEL"), undefined);
  assert.equal(inside("PROVIDER"), undefined);
  assert.deepEqual(inside.ignored(), ["PI_MODEL=parent-model", "PI_PROVIDER=parent"]);

  // An explicit PI_LOOP_* always wins, inside pi sessions included.
  const pinned = makeSettingReader({ PI_CODING_AGENT: "true", PI_MODEL: "parent-model", PI_LOOP_MODEL: "loop-model" });
  assert.equal(pinned("MODEL"), "loop-model");
  assert.deepEqual(pinned.ignored(), []);

  // Non-clashing pi-loop settings keep working inside a pi session.
  const knobs = makeSettingReader({ PI_CODING_AGENT: "true", PI_SKIP_MODEL_CHECK: "1", PI_LOOP_THINKING_LEVEL: "low" });
  assert.equal(knobs("SKIP_MODEL_CHECK"), "1");
  assert.equal(knobs("THINKING_LEVEL"), "low");
  assert.equal(knobs("NOT_SET"), undefined);
});

test("models.json merge keeps other providers and drops the legacy root key", () => {
  const existing = JSON.stringify({
    providers: { ollama: { baseUrl: "http://localhost:11434/v1", api: "openai-completions", models: [{ id: "qwen" }] } },
    models: { "deepseek-v4-flash": { provider: "local-vllm" } },
    modelOverrides: { "some-model": { name: "renamed" } },
  });
  const { merged, droppedLegacy } = mergeModelsJson(existing, LIVE_CONFIG);
  assert.equal(droppedLegacy, true);
  assert.equal(merged.models, undefined);
  assert.deepEqual(Object.keys(merged.providers).sort(), ["local-vllm", "ollama"]);
  assert.deepEqual(merged.modelOverrides, { "some-model": { name: "renamed" } });
  // The setup config wins for the provider it defines.
  assert.equal(merged.providers["local-vllm"].baseUrl, "http://localhost:8888/v1");
  assert.deepEqual(mergeModelsJson("", LIVE_CONFIG).merged.providers["local-vllm"].models[0].id, "qwen3.8-flash-next");
  assert.equal(mergeModelsJson("garbage", LIVE_CONFIG).merged.providers["local-vllm"].api, "openai-completions");
});

test("inline model fallback merges provider and model compat", () => {
  const picked = selectModel(LIVE_CONFIG, {});
  const model = inlineModel({ ...picked, contextWindow: 262144, maxTokens: 131072 });
  assert.equal(model.provider, "local-vllm");
  assert.equal(model.id, "qwen3.8-flash-next");
  assert.equal(model.baseUrl, "http://localhost:8888/v1");
  assert.equal(model.api, "openai-completions");
  assert.deepEqual(model.compat, { supportsDeveloperRole: false, supportsReasoningEffort: false });
  assert.deepEqual(model.input, ["text"]);
  assert.equal(model.contextWindow, 262144);
  assert.equal(model.maxTokens, 131072);
  assert.equal(model.cost.total ?? model.cost.input, 0);
});

test("endpoint probe classifies reachable, unknown model, and dead servers", async () => {
  const ok = { status: 200, ok: true, json: async () => ({ data: [{ id: "qwen3.8-flash-next", max_model_len: 262144 }] }) };
  const res = await probeEndpoint({ baseUrl: "http://x/v1/", apiKey: "dummy", modelId: "qwen3.8-flash-next", fetchImpl: async () => ok });
  assert.equal(res.reachable, true);
  assert.equal(res.modelListed, true);
  assert.equal(res.serverMaxModelLen, 262144);
  assert.deepEqual(res.served, ["qwen3.8-flash-next"]);

  const other = await probeEndpoint({
    baseUrl: "http://x/v1",
    modelId: "qwen3.8-flash-next",
    fetchImpl: async () => ({ status: 200, ok: true, json: async () => ({ data: [{ id: "deepseek-v4-flash" }] }) }),
  });
  assert.equal(other.reachable, true);
  assert.equal(other.modelListed, false);

  const http500 = await probeEndpoint({ baseUrl: "http://x/v1", modelId: "m", fetchImpl: async () => ({ ok: false, status: 500 }) });
  assert.equal(http500.reachable, false);
  assert.match(http500.error, /HTTP 500/);

  const dead = await probeEndpoint({ baseUrl: "http://x/v1", modelId: "m", fetchImpl: async () => { throw new Error("ECONNREFUSED"); } });
  assert.equal(dead.reachable, false);
  assert.match(dead.error, /ECONNREFUSED/);

  assert.equal((await probeEndpoint({ baseUrl: "", modelId: "m" })).reachable, false);

  const slow = await probeEndpoint({
    baseUrl: "http://x/v1",
    modelId: "m",
    timeoutMs: 20,
    fetchImpl: (url, opts) =>
      new Promise((_, reject) =>
        opts.signal.addEventListener("abort", () => {
          const e = new Error("aborted");
          e.name = "AbortError";
          reject(e);
        })
      ),
  });
  assert.equal(slow.reachable, false);
  assert.match(slow.error, /timed out after 20ms/);
});
