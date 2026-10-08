/**
 * link-queue.mjs — the raw-link source for pi-loop.
 *
 * `raw_links.md` is the loop's work queue: one URL per bullet, top to bottom.
 * The harness (NOT the agent) owns that file:
 *
 *   1. pi-loop picks the FIRST still-pending link in the file,
 *   2. removes that entry from `raw_links.md` atomically (tmp file + rename),
 *   3. journals the claim in `.pi-loop-queue.json` (url, canonical, round,
 *      status, commit, the exact line text it removed),
 *   4. hands the URL to one fresh pi agent session, which runs
 *      `prompts/process_url_reference.md` for exactly that URL.
 *
 * A picked link is therefore always removed the moment it is picked, before the
 * agent sees it — the file only ever holds work that has not been dispatched.
 * The removed line stays recoverable through the journal (`--requeue-failed`).
 *
 * Everything except the four `*File`/`*Path` functions is pure, so the whole
 * claiming rule set is unit tested (see link-queue.test.mjs).
 */
import fs from "node:fs";
import path from "node:path";

export const JOURNAL_VERSION = 1;

/** Claim lifecycle. Every status other than `failed` consumes the queue entry. */
export const STATUS = {
  CLAIMED: "claimed",                   // dispatched to a round, not finished yet
  PROCESSED: "processed",               // round produced a new commit
  DEQUEUED_NO_COMMIT: "dequeued-no-commit", // agent committed nothing; harness dequeued the line
  ABORTED: "aborted",                   // the agent turn threw / never produced a turn
  DUPLICATE: "duplicate",               // already indexed in references.md / reference_coverage.md
  ALREADY_CLAIMED: "already-claimed",   // seen in this file more than once, or claimed before
  INVALID: "invalid",                   // not a usable http(s) URL
  RESTORED: "restored",                 // put back into raw_links.md by --requeue-failed
};

/** Statuses that block a re-claim unless the operator asked for a retry. */
export const BLOCKED = new Set([
  STATUS.CLAIMED,
  STATUS.PROCESSED,
  STATUS.DEQUEUED_NO_COMMIT,
  STATUS.ABORTED,
  STATUS.DUPLICATE,
  STATUS.ALREADY_CLAIMED,
  STATUS.INVALID,
]);

const TRACKING_QUERY = /^(utm_|mc_|ref$|ref_src$|ref_url$|hl$|_ga$|_gl$|fbclid$|gclid$|msclkid$|tt_medium$|tt_campaign$|spm$|ivk$|cmpid$|si$)/i;

/**
 * Canonical form used for every dedup decision: lower-cased scheme/host, no
 * fragment, no tracking params, no trailing slash, no `www.`, no default port.
 */
export function canonicalizeUrl(raw) {
  let s = String(raw ?? "").trim().replace(/^<+|>+$/g, "").replace(/[)\]'".,;:!?`]+$/, "");
  if (!s) return null;
  if (/^www\d*\./i.test(s) || /^[a-z]+\./i.test(s)) s = `https://${s}`;
  if (!/^https?:\/\//i.test(s)) return null;
  let url;
  try {
    url = new URL(s);
  } catch {
    return null;
  }
  url.protocol = url.protocol.toLowerCase();
  url.hostname = url.hostname.toLowerCase().replace(/^www\d+\./, "").replace(/^www\./, "");
  if ((url.protocol === "http:" && url.port === "80") || (url.protocol === "https:" && url.port === "443")) url.port = "";
  url.hash = "";
  const kept = [...url.searchParams.entries()].filter(([k]) => !TRACKING_QUERY.test(k));
  url.search = kept.length ? new URLSearchParams(kept).toString() : "";
  let out = url.toString();
  if (out.endsWith("/") && !url.search) out = out.slice(0, -1);
  return out.replace(/[?&]$/, "");
}

/** Pull the first http(s) URL out of a queue line, dropping markdown/ prose. */
export function extractUrl(line) {
  const m = /https?:\/\/[^\s<>"'`()\[\]{},|]+/i.exec(String(line ?? ""));
  if (!m) return null;
  let url = m[0];
  // markdown link: [Title](https://x/y) — the regex already stops at ')'.
  url = url.replace(/[.,;:!?]+$/, "");
  const canon = canonicalizeUrl(url);
  return canon ? { url, canonical: canon } : null;
}

/**
 * Parse the queue file. Every line is kept (so comments, headers and blank lines
 * survive a rewrite); lines carrying a URL become queue entries.
 * Returns { lines, entries } with entry.line pointing at the 1-based line index.
 */
export function parseQueue(text) {
  const lines = String(text ?? "").split(/\r?\n/);
  const entries = [];
  lines.forEach((line, i) => {
    if (/^\s*#/.test(line)) return; // markdown header / comment — not a link
    const found = extractUrl(line);
    if (!found) return;
    entries.push({ index: entries.length, line: i + 1, text: line, url: found.url, canonical: found.canonical });
  });
  return { lines, entries };
}

/**
 * Canonical URLs already registered in the repository (step 1 of
 * prompts/process_url_reference.md aborts on those, so the loop does not burn a
 * round on them). `level` 1 compares the canonical URL, `level` 2 additionally
 * ignores the query string.
 */
export function buildKnownUrlIndex({ texts = [], level = 1 } = {}) {
  const exact = new Set();
  const pathOnly = new Set();
  for (const text of texts) {
    for (const m of String(text ?? "").matchAll(/https?:\/\/[^\s<>"'`()\[\]{},|]+/gi)) {
      const canon = canonicalizeUrl(m[0]);
      if (!canon) continue;
      exact.add(canon);
      if (level >= 2) pathOnly.add(canon.split("?")[0]);
    }
  }
  return {
    has(url) {
      const canon = canonicalizeUrl(url) ?? url;
      return exact.has(canon) || (level >= 2 && pathOnly.has(canon.split("?")[0]));
    },
    size: () => exact.size,
    exact,
  };
}

// ---- journal -----------------------------------------------------------------

export function emptyJournal(source) {
  return { version: JOURNAL_VERSION, source, claims: [] };
}

export function loadJournal(journalPath, source = "raw_links.md") {
  try {
    const parsed = JSON.parse(fs.readFileSync(journalPath, "utf8"));
    if (!Array.isArray(parsed?.claims)) return emptyJournal(source);
    return { version: parsed.version ?? JOURNAL_VERSION, source: parsed.source ?? source, claims: parsed.claims };
  } catch {
    return emptyJournal(source);
  }
}

export function saveJournal(journalPath, journal) {
  writeFileAtomic(journalPath, `${JSON.stringify(journal, null, 2)}\n`);
}

export function latestClaims(journal) {
  const map = new Map();
  for (const claim of journal?.claims ?? []) map.set(claim.canonical, claim);
  return map;
}

export function recordClaim(journal, claim) {
  const claims = [...(journal.claims ?? [])];
  const i = claims.findIndex((c) => c.canonical === claim.canonical);
  const entry = { ...(i >= 0 ? claims[i] : {}), ...claim, at: claim.at ?? new Date().toISOString() };
  if (i >= 0) claims[i] = entry;
  else claims.push(entry);
  return { ...journal, claims };
}

/** Canonicals the operator put back in play with --retry-failed / --requeue-failed. */
export function retrySet(journal, { enabled = false, statusFilter = [STATUS.DEQUEUED_NO_COMMIT, STATUS.ABORTED, STATUS.INVALID] } = {}) {
  if (!enabled) return new Set();
  const out = new Set();
  for (const claim of journal?.claims ?? []) {
    if (statusFilter.includes(claim.status)) out.add(claim.canonical);
  }
  return out;
}

// ---- the claiming rule --------------------------------------------------------

/**
 * Decide what the next round works on and rewrite the queue file without it.
 *
 * Pure: takes the queue text + journal + known index, returns the new text plus a
 * report. The caller writes the file only when `claimed` (or `consumed`) is set.
 */
export function planClaim({ text, journal, known = { has: () => false }, retry = new Set(), skipKnown = true, now = new Date().toISOString() }) {
  const { lines, entries } = parseQueue(text);
  const claimedBefore = latestClaims(journal);
  const removed = new Set();       // 0-based line indices to drop
  const consumed = [];             // journal entries written for the removed lines
  const skipped = [];              // left in the file, reported to the operator
  const seen = new Set();
  const dispatched = new Set(); // canonicals whose LINE leaves the queue in this plan
  let claimed = null;

  for (const entry of entries) {
    if (removed.has(entry.line - 1)) continue;
    if (seen.has(entry.canonical)) {
      // Extra copy of a URL this plan already dequeues (typically the copy of the
      // link being dispatched) — consumed with it. Copies of a URL still waiting
      // further down stay in the file so they cannot block their own dispatch.
      if (dispatched.has(entry.canonical)) {
        removed.add(entry.line - 1);
        consumed.push(claimFrom(entry, STATUS.ALREADY_CLAIMED, { at: now, reason: "duplicate line in queue" }));
      } else {
        skipped.push({ ...entry, reason: "duplicate of an earlier line" });
      }
      continue;
    }
    seen.add(entry.canonical);

    const prior = claimedBefore.get(entry.canonical);
    const retryable = retry.has(entry.canonical);
    if (prior && BLOCKED.has(prior.status) && !retryable) {
      skipped.push({ ...entry, reason: `already ${prior.status} in journal (round ${prior.round ?? "?"})` });
      continue;
    }
    if (skipKnown && known.has(entry.url)) {
      removed.add(entry.line - 1);
      dispatched.add(entry.canonical);
      consumed.push(claimFrom(entry, STATUS.DUPLICATE, { at: now, reason: "already indexed in references.md / reference_coverage.md" }));
      continue;
    }
    if (claimed) {
      // One link per round: everything after the pick stays untouched in the file.
      continue;
    }
    removed.add(entry.line - 1);
    dispatched.add(entry.canonical);
    consumed.push(claimFrom(entry, STATUS.CLAIMED, { at: now }));
    claimed = { ...entry };
  }

  const kept = lines.filter((_, i) => !removed.has(i));
  return { claimed, consumed, skipped, text: kept.join("\n"), remaining: parseQueue(kept.join("\n")).entries.length };
}

function claimFrom(entry, status, extra = {}) {
  return { url: entry.url, canonical: entry.canonical, status, lineText: entry.text, line: entry.line, ...extra };
}

// ---- filesystem helpers -------------------------------------------------------

export function writeFileAtomic(file, text) {
  fs.mkdirSync(path.dirname(path.resolve(file)), { recursive: true });
  const tmp = `${file}.tmp-${process.pid}-${Date.now()}`;
  fs.writeFileSync(tmp, text);
  fs.renameSync(tmp, file);
}

export function readTextOr(file, fallback = "") {
  try {
    return fs.readFileSync(file, "utf8");
  } catch {
    return fallback;
  }
}

/**
 * Claim the next pending link: journal the claim, remove the line from the queue
 * file, and return the URL the next round must process.
 *
 * The claim is persisted BEFORE the file is rewritten, so a crash between the two
 * writes can never hand the same URL to two rounds.
 */
export function claimNext({ linksFile, journalPath, knownFiles = [], skipKnown = true, retry = new Set(), level = 1, round, now = new Date().toISOString() }) {
  const text = readTextOr(linksFile);
  if (!text.trim()) {
    return { claimed: null, consumed: [], skipped: [], remaining: 0, reason: "queue file is missing or empty", text };
  }
  const known = buildKnownUrlIndex({
    texts: knownFiles.map((f) => readTextOr(f)),
    level: Number(level) || 1,
  });
  const journal = loadJournal(journalPath, path.basename(linksFile));
  const plan = planClaim({ text, journal, known, retry, skipKnown, now });

  let nextJournal = journal;
  // The live CLAIMED entry must win over the duplicate-bookkeeping entries that
  // share its canonical, so it is recorded last.
  const ordered = [
    ...plan.consumed.filter((c) => c.status !== STATUS.CLAIMED),
    ...plan.consumed.filter((c) => c.status === STATUS.CLAIMED),
  ];
  for (const c of ordered) nextJournal = recordClaim(nextJournal, { ...c, round });

  if (plan.consumed.length) {
    saveJournal(journalPath, nextJournal);
    writeFileAtomic(linksFile, plan.text);
  }
  return { ...plan, journal: nextJournal };
}

/**
 * Put queue entries back into raw_links.md (append, in journal order) and mark
 * them restored — the escape hatch for links a round lost.
 */
export function requeueClaims({ linksFile, journalPath, filter = (c) => [STATUS.DEQUEUED_NO_COMMIT, STATUS.ABORTED, STATUS.INVALID].includes(c.status), now = new Date().toISOString() }) {
  const journal = loadJournal(journalPath, path.basename(linksFile));
  const restored = [];
  let next = journal;
  for (const claim of journal.claims) {
    if (!filter(claim) || claim.status === STATUS.RESTORED) continue;
    restored.push(claim);
    next = recordClaim(next, { canonical: claim.canonical, status: STATUS.RESTORED, at: now, reason: "requeued into the queue file" });
  }
  if (!restored.length) return { restored: [], text: readTextOr(linksFile) };
  const lines = restored.map((c) => (c.lineText ?? `* ${c.url}`).trim());
  const existing = readTextOr(linksFile).replace(/\s*$/, "");
  const sep = existing.length && !existing.endsWith("\n") ? "\n" : existing.length ? "" : "";
  writeFileAtomic(linksFile, `${existing}${sep}${lines.join("\n")}\n`);
  saveJournal(journalPath, next);
  return { restored, text: readTextOr(linksFile) };
}

/** Machine path: what would the next round pick, without touching anything. */
export function peekNext({ linksFile, journalPath, knownFiles = [], skipKnown = true, retry = new Set(), level = 1 }) {
  const text = readTextOr(linksFile);
  const known = buildKnownUrlIndex({ texts: knownFiles.map((f) => readTextOr(f)), level: Number(level) || 1 });
  const journal = loadJournal(journalPath, path.basename(linksFile));
  const plan = planClaim({ text, journal, known, retry, skipKnown });
  return {
    claimed: plan.claimed,
    wouldConsume: plan.consumed.map(({ text: _t, ...rest }) => rest),
    skipped: plan.skipped.map(({ text: _t, ...rest }) => rest),
    remaining: plan.remaining,
    queued: parseQueue(text).entries.length,
  };
}
