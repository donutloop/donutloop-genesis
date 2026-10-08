/**
 * sdk-discovery.mjs — find the pi SDK (`@earendil-works/pi-coding-agent`) on disk.
 *
 * pi-loop is built on the pi SDK, which has to be `require`d from an absolute
 * path. There is no single canonical place for it:
 *
 *   1. an explicit override            $PI_LOOP_SDK_PATH / $PI_SDK_PATH
 *   2. a node dependency               tools/pi-loop/node_modules/… (dev checkout,
 *                                      or pi-loop installed next to the SDK)
 *   3. a pi *managed install*          ~/.pi/agent/install/current-version →
 *                                      ~/.pi/agent/install/releases/<v>/node_modules/…
 *                                      (this is what `pi update` produces, and what
 *                                      the pi installer writes; the launcher exports
 *                                      PI_MANAGED_INSTALL_ROOT for exactly this)
 *   4. the `pi` executable on PATH     realpath of the launcher / of the release bin
 *   5. a global npm install            <prefix>/lib/node_modules/… (the historical
 *                                      layout, and the one that disappears when pi
 *                                      migrates to the managed installer)
 *
 * A hard-coded path — the way this tool used to do it — breaks the moment pi
 * updates itself, because the managed installer removes the global package. So
 * discovery is ordered, every candidate is labelled with where it came from, and
 * a miss prints the whole list instead of a bare MODULE_NOT_FOUND stack.
 *
 * Side-effect free at import time; every ambient input (env, cwd, homedir, PATH,
 * require) is injectable so this is unit testable (see sdk-discovery.test.mjs).
 */
import { createRequire } from "node:module";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { ConfigError } from "./models-config.mjs";

/** The package pi-loop links against. */
export const PI_SDK_PACKAGE = "@earendil-works/pi-coding-agent";

/** The SDK entry point inside a package directory. */
export const PI_SDK_ENTRY = path.join("dist", "index.js");

const isFile = (p) => {
  try {
    return !!p && fs.statSync(p).isFile();
  } catch {
    return false;
  }
};

const isDir = (p) => {
  try {
    return !!p && fs.statSync(p).isDirectory();
  } catch {
    return false;
  }
};

const readFileOrNull = (p) => {
  try {
    return fs.readFileSync(p, "utf8");
  } catch {
    return null;
  }
};

/** Turn a package directory (or anything inside it) into <pkg>/dist/index.js. */
function sdkEntryFromPackageDir(dir) {
  if (!dir) return null;
  const entry = path.join(dir, PI_SDK_ENTRY);
  return isFile(entry) ? entry : null;
}

/**
 * Walk up from `start` looking for the SDK's own package.json. Used on
 * realpath'd bin scripts: `<pkg>/dist/bundle/cli.js` and `<pkg>/bin/pi` both
 * land inside the package, whatever prefix it was installed under.
 */
function packageDirAbove(start) {
  let dir = start;
  for (let i = 0; dir && i < 12; i++) {
    const pkgJson = readFileOrNull(path.join(dir, "package.json"));
    if (pkgJson) {
      try {
        if (JSON.parse(pkgJson)?.name === PI_SDK_PACKAGE) return dir;
      } catch {
        /* not ours, keep walking */
      }
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return null;
}

/** Newest-first ordering of managed-install release directory names. */
function compareReleaseNames(a, b) {
  const na = String(a).split(/[._-]/).map((part) => (/^\d+$/.test(part) ? Number(part) : part));
  const nb = String(b).split(/[._-]/).map((part) => (/^\d+$/.test(part) ? Number(part) : part));
  for (let i = 0; i < Math.max(na.length, nb.length); i++) {
    const x = na[i];
    const y = nb[i];
    if (x === y) continue;
    if (x === undefined) return 1;
    if (y === undefined) return -1;
    if (typeof x === "number" && typeof y === "number") return y - x;
    if (typeof x === "number") return -1;
    if (typeof y === "number") return 1;
    return String(y).localeCompare(String(x));
  }
  return 0;
}

/** Candidates contributed by one managed-install root (…/install with releases/). */
function managedInstallCandidates(installRoot, source) {
  const found = [];
  const releases = path.join(installRoot, "releases");
  if (!isDir(installRoot)) {
    // Still list the shape it *would* have taken — the miss report is the only
    // diagnosis an operator gets when pi is not installed where we look.
    found.push({
      path: path.join(releases, "<version>", "node_modules", PI_SDK_PACKAGE, PI_SDK_ENTRY),
      source: `${source} (not present)`,
    });
    return found;
  }
  const current = (readFileOrNull(path.join(installRoot, "current-version")) || "").trim();
  if (current) {
    found.push({
      path: path.join(releases, current, "node_modules", PI_SDK_PACKAGE, PI_SDK_ENTRY),
      source: `${source} (current-version=${current})`,
    });
  }
  let names = [];
  try {
    names = fs.readdirSync(releases, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name);
  } catch {
    names = [];
  }
  for (const name of [...names].sort(compareReleaseNames)) {
    found.push({
      path: path.join(releases, name, "node_modules", PI_SDK_PACKAGE, PI_SDK_ENTRY),
      source: `${source} (releases/${name})`,
    });
  }
  return found;
}

/** The first executable named `name` on PATH (symlinks resolved). */
function findOnPath(name, pathEnv) {
  for (const dir of (pathEnv || "").split(path.delimiter)) {
    if (!dir) continue;
    const candidate = path.join(dir, name);
    if (!isFile(candidate)) continue;
    try {
      fs.accessSync(candidate, fs.constants.X_OK);
    } catch {
      continue;
    }
    return path.resolve(candidate);
  }
  return null;
}

/**
 * Ordered candidate list. Nothing is required here — the caller picks the first
 * entry whose `path` is a real file, and prints the rest on a miss.
 */
export function sdkCandidatePaths({
  env = process.env,
  cwd = process.cwd(),
  scriptDir = "",
  homedir = os.homedir(),
  requireImpl,
  pathEnv = env.PATH,
} = {}) {
  const candidates = [];
  const add = (p, source) => {
    if (p) candidates.push({ path: p, source });
  };

  // 1. Explicit override — PI_LOOP_* always wins over PI_*.
  add(env.PI_LOOP_SDK_PATH, "$PI_LOOP_SDK_PATH");
  add(env.PI_SDK_PATH, "$PI_SDK_PATH");

  // 2. A real node dependency of the tool dir or of the driven project.
  for (const [from, label] of [
    [scriptDir, "node resolution from the pi-loop tool dir"],
    [cwd, "node resolution from the project dir"],
  ]) {
    if (!from) continue;
    try {
      const req = requireImpl ?? createRequire(path.join(from, "noop.js"));
      add(req.resolve(PI_SDK_PACKAGE), label);
    } catch {
      /* not resolvable from there */
    }
  }

  // 3. The pi managed install. PI_MANAGED_INSTALL_ROOT is exported by the pi
  //    launcher itself, so a run started from a pi shell lands on the same
  //    release the session is using.
  const installRoots = [];
  if (env.PI_LOOP_INSTALL_ROOT) installRoots.push([env.PI_LOOP_INSTALL_ROOT, "$PI_LOOP_INSTALL_ROOT"]);
  if (env.PI_MANAGED_INSTALL_ROOT) installRoots.push([env.PI_MANAGED_INSTALL_ROOT, "$PI_MANAGED_INSTALL_ROOT"]);
  const agentDirs = [];
  if (env.PI_LOOP_AGENT_DIR) agentDirs.push(env.PI_LOOP_AGENT_DIR);
  if (env.PI_AGENT_DIR) agentDirs.push(env.PI_AGENT_DIR);
  agentDirs.push(path.join(homedir, ".pi", "agent"));
  for (const dir of agentDirs) installRoots.push([path.join(dir, "install"), `${dir}/install`]);
  const seenRoots = new Set();
  for (const [root, label] of installRoots) {
    const abs = path.resolve(root);
    if (seenRoots.has(abs)) continue;
    seenRoots.add(abs);
    for (const cand of managedInstallCandidates(abs, label)) add(cand.path, cand.source);
  }

  // 4. Whatever `pi` on PATH is.
  const piBin = findOnPath(process.platform === "win32" ? "pi.exe" : "pi", pathEnv);
  if (piBin) {
    let resolved = piBin;
    try {
      resolved = fs.realpathSync(piBin);
    } catch {
      /* keep the unrealy path */
    }
    const pkgDir = packageDirAbove(path.dirname(resolved));
    if (pkgDir) {
      add(sdkEntryFromPackageDir(pkgDir), `\`pi\` on PATH (${piBin})`);
    } else {
      // The managed launcher is <agentDir>/bin/pi; its sibling install/ holds
      // the releases. (It reads install/current-version itself.)
      const binDir = path.dirname(resolved);
      const agentDir = path.dirname(binDir);
      for (const cand of managedInstallCandidates(path.join(agentDir, "install"), `\`pi\` launcher ${piBin}`)) {
        add(cand.path, cand.source);
      }
    }
  }

  // 5. Global npm prefixes (the historical layout, kept as the tail fallback).
  const prefixes = [
    env.NPM_CONFIG_PREFIX && path.join(env.NPM_CONFIG_PREFIX, "lib", "node_modules"),
    env.PREFIX && path.join(env.PREFIX, "lib", "node_modules"),
    env.PI_LOOP_NPM_GLOBAL_ROOT,
    path.join(homedir, ".npm-global", "lib", "node_modules"),
    path.join(homedir, ".bun", "install", "global", "node_modules"),
    "/usr/local/lib/node_modules",
    "/usr/lib/node_modules",
    "/opt/homebrew/lib/node_modules",
  ].filter(Boolean);
  for (const root of prefixes) {
    const abs = path.resolve(root);
    if (seenRoots.has(abs)) continue;
    seenRoots.add(abs);
    add(path.join(abs, PI_SDK_PACKAGE, PI_SDK_ENTRY), `${abs}`);
  }

  const seen = new Set();
  return candidates.filter((c) => {
    if (!c.path || seen.has(c.path)) return false;
    seen.add(c.path);
    return true;
  });
}

/** Package version of the SDK a candidate lives in ("" when unreadable). */
function sdkVersionFor(entryPath) {
  const pkgDir = path.dirname(path.dirname(entryPath));
  const pkgJson = readFileOrNull(path.join(pkgDir, "package.json"));
  try {
    return JSON.parse(pkgJson)?.version ?? "";
  } catch {
    return "";
  }
}

/**
 * Resolve the SDK entry point. Returns
 * `{ path, source, packageDir, version, candidates }` or throws ConfigError
 * listing every candidate that was tried.
 */
export function resolveSdkPath(opts = {}) {
  const env = opts.env ?? process.env;
  const candidates = sdkCandidatePaths(opts);
  for (const cand of candidates) {
    if (isFile(cand.path)) {
      return {
        path: cand.path,
        source: cand.source,
        packageDir: path.dirname(path.dirname(cand.path)),
        version: sdkVersionFor(cand.path),
        candidates,
      };
    }
  }
  const tried = candidates.map((c) => `    - ${c.path}  [${c.source}]`).join("\n") || "    (no candidates — no PATH, no home dir?)";
  throw new ConfigError(
    `cannot find the pi SDK (${PI_SDK_PACKAGE}/${PI_SDK_ENTRY}).\n` +
      `  pi-loop drives the language toolchain through the pi SDK; install pi (https://pi.dev — \`pi update\` keeps it\n` +
      `  current) or point pi-loop at an existing checkout with PI_LOOP_SDK_PATH=/abs/path/to/dist/index.js.\n` +
      `  Tried, in order:\n${tried}`
  );
}
