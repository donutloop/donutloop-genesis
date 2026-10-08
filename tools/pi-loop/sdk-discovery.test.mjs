/**
 * Unit tests for tools/pi-loop/sdk-discovery.mjs — how pi-loop finds the pi SDK.
 *
 * Run: node --test tools/pi-loop/
 *
 * The bug these guard against is the hard-coded absolute path: pi's managed
 * installer owns ~/.pi/agent/install/releases/<version>/ and removes the old
 * global npm package, so a fixed path breaks on `pi update`. Every ambient
 * input is injected here (env, cwd, homedir, PATH, require) so the discovery
 * ORDER is what is under test, not the machine running the tests.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { ConfigError } from "./models-config.mjs";
import { PI_SDK_ENTRY, PI_SDK_PACKAGE, resolveSdkPath, sdkCandidatePaths } from "./sdk-discovery.mjs";

const NO_NODE_RESOLUTION = { resolve: () => { throw new Error("not resolvable"); } };

function withTree(files, fn) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "pi-loop-sdk-"));
  for (const [rel, text] of Object.entries(files)) {
    const file = path.join(root, rel);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    if (typeof text === "string") fs.writeFileSync(file, text);
    else text(file); // e.g. a symlink/mode creator
  }
  try {
    return fn(root);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

const entryOf = (pkgDir) => path.join(pkgDir, "dist", "index.js");
const managed = (home, version) =>
  entryOf(path.join(home, ".pi", "agent", "install", "releases", version, "node_modules", PI_SDK_PACKAGE));

/** A minimal on-disk SDK package: dist/index.js + package.json with the right name. */
function sdkAt(pkgDir, version = "9.9.9") {
  return () => {
    fs.mkdirSync(path.join(pkgDir, "dist"), { recursive: true });
    fs.writeFileSync(entryOf(pkgDir), "export const createAgentSession = () => {};\n");
    fs.writeFileSync(path.join(pkgDir, "package.json"), JSON.stringify({ name: PI_SDK_PACKAGE, version, main: PI_SDK_ENTRY }));
  };
}

test("explicit PI_LOOP_SDK_PATH wins, and beats PI_SDK_PATH", () => {
  withTree({ "sdk-a/dist/index.js": "x", "sdk-b/dist/index.js": "x" }, (root) => {
    const a = path.join(root, "sdk-a", "dist", "index.js");
    const b = path.join(root, "sdk-b", "dist", "index.js");
    const resolved = resolveSdkPath({
      env: { PI_LOOP_SDK_PATH: a, PI_SDK_PATH: b },
      cwd: root,
      requireImpl: NO_NODE_RESOLUTION,
      homedir: path.join(root, "no-home"),
      pathEnv: "",
    });
    assert.equal(resolved.path, a);
    assert.equal(resolved.source, "$PI_LOOP_SDK_PATH");
  });
});

test("an explicit but missing PI_SDK_PATH is reported by name", () => {
  withTree({ "empty/.keep": "" }, (root) => {
    assert.throws(
      () =>
        resolveSdkPath({
          env: { PI_SDK_PATH: path.join(root, "gone", "dist", "index.js") },
          cwd: root,
          requireImpl: NO_NODE_RESOLUTION,
          homedir: path.join(root, "no-home"),
          pathEnv: "",
        }),
      (e) => e instanceof ConfigError && /PI_SDK_PATH/.test(e.message) && /gone\/dist\/index\.js/.test(e.message)
    );
  });
});

test("a node dependency of the tool dir beats the managed install", () => {
  withTree(
    {
      "dep/dist/index.js": "dep",
      ".pi/agent/install/current-version": "1.1.0",
      ".pi/agent/install/releases/1.1.0/node_modules/@earendil-works/pi-coding-agent/dist/index.js": "managed",
    },
    (root) => {
      const resolved = resolveSdkPath({
        env: {},
        cwd: "/nonexistent-project",
        scriptDir: path.join(root, "tool"),
        requireImpl: { resolve: () => path.join(root, "dep", "dist", "index.js") },
        homedir: root,
        pathEnv: "",
      });
      assert.equal(resolved.path, path.join(root, "dep", "dist", "index.js"));
      assert.equal(resolved.source, "node resolution from the pi-loop tool dir");
    }
  );
});

test("the managed install is read through current-version", () => {
  withTree(
    {
      [path.join(".pi/agent/install/current-version")]: "1.1.0\n",
      ".pi/agent/install/releases/1.0.4/node_modules/@earendil-works/pi-coding-agent/dist/index.js": "old",
      ".pi/agent/install/releases/1.1.0/node_modules/@earendil-works/pi-coding-agent/dist/index.js": "new",
    },
    (home) => {
      const resolved = resolveSdkPath({
        env: {},
        cwd: "/nonexistent-project",
        requireImpl: NO_NODE_RESOLUTION,
        homedir: home,
        pathEnv: "",
      });
      assert.equal(resolved.path, managed(home, "1.1.0"));
      assert.match(resolved.source, /current-version=1\.1\.0/);
    }
  );
});

test("without current-version the newest release wins", () => {
  withTree(
    {
      ".pi/agent/install/releases/1.0.4/node_modules/@earendil-works/pi-coding-agent/dist/index.js": "old",
      ".pi/agent/install/releases/1.10.0/node_modules/@earendil-works/pi-coding-agent/dist/index.js": "newest",
      ".pi/agent/install/releases/1.9.0/node_modules/@earendil-works/pi-coding-agent/dist/index.js": "new",
    },
    (home) => {
      const resolved = resolveSdkPath({
        env: {},
        cwd: "/nonexistent-project",
        requireImpl: NO_NODE_RESOLUTION,
        homedir: home,
        pathEnv: "",
      });
      assert.equal(resolved.path, managed(home, "1.10.0"));
      assert.match(resolved.source, /releases\/1\.10\.0/);
    }
  );
});

test("PI_MANAGED_INSTALL_ROOT (exported by the pi launcher) is honoured", () => {
  withTree({ "custom/releases/2.0.1/node_modules/@earendil-works/pi-coding-agent/dist/index.js": "x" }, (root) => {
    const resolved = resolveSdkPath({
      env: { PI_MANAGED_INSTALL_ROOT: path.join(root, "custom") },
      cwd: "/nonexistent-project",
      requireImpl: NO_NODE_RESOLUTION,
      homedir: path.join(root, "no-home"),
      pathEnv: "",
    });
    assert.equal(resolved.path, path.join(root, "custom/releases/2.0.1/node_modules/@earendil-works/pi-coding-agent/dist/index.js"));
    assert.equal(resolved.version, "");
  });
});

test("`pi` on PATH is resolved through its package directory", () => {
  withTree({ "bin/.keep": "" }, (root) => {
    const pkgDir = path.join(root, "lib", "node_modules", PI_SDK_PACKAGE);
    sdkAt(pkgDir, "1.1.0")();
    fs.mkdirSync(path.join(pkgDir, "dist", "bundle"), { recursive: true });
    const cli = path.join(pkgDir, "dist", "bundle", "cli.js");
    fs.writeFileSync(cli, "#!/usr/bin/env node\n");
    fs.chmodSync(cli, 0o755);
    // a global-style install: PATH points at a dir holding a symlinked `pi`
    fs.symlinkSync(cli, path.join(root, "bin", "pi"));
    const resolved = resolveSdkPath({
      env: {},
      cwd: "/nonexistent-project",
      requireImpl: NO_NODE_RESOLUTION,
      homedir: path.join(root, "no-home"),
      pathEnv: path.join(root, "bin"),
    });
    assert.equal(resolved.path, entryOf(pkgDir));
    assert.equal(resolved.version, "1.1.0");
    assert.match(resolved.source, /`pi` on PATH/);
  });
});

test("the managed launcher on PATH resolves through install/", () => {
  withTree(
    {
      ".pi/agent/bin/pi": "#!/bin/sh\nexec true\n",
      ".pi/agent/install/current-version": "1.1.0",
      ".pi/agent/install/releases/1.1.0/node_modules/@earendil-works/pi-coding-agent/dist/index.js": "x",
    },
    (home) => {
      const resolved = resolveSdkPath({
        env: {},
        cwd: "/nonexistent-project",
        requireImpl: NO_NODE_RESOLUTION,
        homedir: home,
        pathEnv: path.join(home, ".pi/agent/bin"),
      });
      assert.equal(resolved.path, managed(home, "1.1.0"));
    }
  );
});

test("a global npm prefix is the tail fallback", () => {
  withTree({ "npm-global/lib/node_modules/@earendil-works/pi-coding-agent/dist/index.js": "x" }, (root) => {
    const resolved = resolveSdkPath({
      env: { PI_LOOP_NPM_GLOBAL_ROOT: path.join(root, "npm-global", "lib", "node_modules") },
      cwd: "/nonexistent-project",
      requireImpl: NO_NODE_RESOLUTION,
      homedir: path.join(root, "no-home"),
      pathEnv: "",
    });
    assert.equal(
      resolved.path,
      path.join(root, "npm-global/lib/node_modules/@earendil-works/pi-coding-agent/dist/index.js")
    );
  });
});

test("a miss lists every source tried, including the managed-install shape", () => {
  withTree({ "empty/.keep": "" }, (root) => {
    assert.throws(
      () =>
        resolveSdkPath({
          env: {},
          cwd: "/nonexistent-project",
          requireImpl: NO_NODE_RESOLUTION,
          homedir: path.join(root, "no-home"),
          pathEnv: "",
        }),
      (e) => {
        assert.ok(e instanceof ConfigError);
        assert.match(e.message, /pi SDK/);
        assert.match(e.message, /PI_LOOP_SDK_PATH/); // tells the operator the way out
        assert.match(e.message, /releases\/<version>\/node_modules/); // shows what it looked for
        return true;
      }
    );
  });
});

test("candidates are deduped and ordered (explicit first)", () => {
  const cands = sdkCandidatePaths({
    env: { PI_LOOP_SDK_PATH: "/explicit/index.js", PI_SDK_PATH: "/other/index.js" },
    cwd: "/nonexistent-project",
    requireImpl: NO_NODE_RESOLUTION,
    homedir: "/nonexistent-home",
    pathEnv: "",
  });
  assert.deepEqual(cands.slice(0, 2).map((c) => c.path), ["/explicit/index.js", "/other/index.js"]);
  assert.equal(new Set(cands.map((c) => c.path)).size, cands.length);
  assert.ok(cands.every((c) => typeof c.source === "string" && c.source.length > 0));
});
