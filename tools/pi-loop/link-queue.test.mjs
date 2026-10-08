import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  STATUS,
  buildKnownUrlIndex,
  canonicalizeUrl,
  claimNext,
  emptyJournal,
  extractUrl,
  loadJournal,
  parseQueue,
  peekNext,
  planClaim,
  recordClaim,
  requeueClaims,
} from "./link-queue.mjs";

function tmp() {
  return fs.mkdtempSync(path.join(os.tmpdir(), "pi-loop-queue-"));
}

const queueFile = (dir, text) => {
  const file = path.join(dir, "raw_links.md");
  fs.writeFileSync(file, text);
  return file;
};

test("canonicalizeUrl normalises scheme, host, fragment and tracking params", () => {
  assert.equal(canonicalizeUrl("HTTPS://WWW.Example.com/a/?hl=en-US#frag"), "https://example.com/a");
  assert.equal(canonicalizeUrl("http://example.com:80/a/"), "http://example.com/a");
  assert.equal(canonicalizeUrl("example.com/a"), "https://example.com/a");
  assert.equal(canonicalizeUrl("https://example.com/a?utm_source=x&ref=y&a=1"), "https://example.com/a?a=1");
  assert.equal(canonicalizeUrl("https://example.com/a"), "https://example.com/a");
  assert.equal(canonicalizeUrl("not a url"), null);
  assert.equal(canonicalizeUrl(""), null);
});

test("extractUrl strips markdown and prose around the link", () => {
  assert.equal(extractUrl("* https://a.example/x")?.canonical, "https://a.example/x");
  assert.equal(extractUrl("[Title](https://a.example/x)")?.canonical, "https://a.example/x");
  assert.equal(extractUrl("See https://a.example/x.")?.canonical, "https://a.example/x");
  assert.equal(extractUrl("no link here"), null);
});

test("parseQueue keeps every line and numbers URL lines", () => {
  const { lines, entries } = parseQueue("# Headers\n\n* https://a.example/1\n* https://a.example/2\n");
  assert.equal(lines.length, 5);
  assert.deepEqual(entries.map((e) => [e.line, e.url]), [[3, "https://a.example/1"], [4, "https://a.example/2"]]);
});

test("planClaim picks the first pending link and removes exactly its line", () => {
  const text = "# Queue\n\n* https://a.example/1\n* https://a.example/2\n* https://a.example/3\n";
  const plan = planClaim({ text, journal: emptyJournal("raw_links.md") });
  assert.equal(plan.claimed.url, "https://a.example/1");
  assert.equal(plan.text, "# Queue\n\n* https://a.example/2\n* https://a.example/3\n");
  assert.equal(plan.remaining, 2);
  assert.equal(plan.consumed.length, 1);
  assert.equal(plan.consumed[0].status, STATUS.CLAIMED);
  assert.equal(plan.consumed[0].lineText, "* https://a.example/1");
});

test("planClaim consumes nothing when the queue is empty or has no links", () => {
  assert.equal(planClaim({ text: "", journal: emptyJournal() }).claimed, null);
  assert.equal(planClaim({ text: "# TODO later\n", journal: emptyJournal() }).claimed, null);
});

test("an already claimed link is never re-dispatched and blocks the round", () => {
  const text = "* https://a.example/1\n* https://a.example/2\n";
  let journal = emptyJournal();
  journal = recordClaim(journal, { canonical: "https://a.example/1", url: "https://a.example/1", status: STATUS.CLAIMED, round: 1 });
  const plan = planClaim({ text, journal });
  assert.equal(plan.claimed.url, "https://a.example/2");
  assert.equal(plan.skipped.length, 1);
  assert.match(plan.skipped[0].reason, /already claimed/);
  assert.equal(plan.text, "* https://a.example/1\n", "a blocked link stays in the file for the operator");
});

test("an already indexed link is dequeued as a duplicate without a round", () => {
  const text = "* https://a.example/1\n* https://a.example/2\n";
  const known = buildKnownUrlIndex({ texts: ["see [x](https://www.a.example/1?hl=en-US)"] });
  const plan = planClaim({ text, journal: emptyJournal(), known });
  assert.equal(plan.claimed.url, "https://a.example/2");
  assert.deepEqual(plan.consumed.map((c) => [c.canonical, c.status]), [
    ["https://a.example/1", STATUS.DUPLICATE],
    ["https://a.example/2", STATUS.CLAIMED],
  ]);
  assert.equal(plan.text, "", "the duplicate and the dispatched link both leave the queue");
});

test("--skip-known=0 hands already indexed links to the agent anyway", () => {
  const text = "* https://a.example/1\n";
  const known = buildKnownUrlIndex({ texts: ["https://a.example/1"] });
  const plan = planClaim({ text, journal: emptyJournal(), known, skipKnown: false });
  assert.equal(plan.claimed.url, "https://a.example/1");
  assert.equal(plan.consumed[0].status, STATUS.CLAIMED);
});

test("duplicate lines for the same canonical URL are consumed with the first pick", () => {
  const text = "* https://a.example/x\n* https://www.a.example/x/\n* https://a.example/y\n";
  const plan = planClaim({ text, journal: emptyJournal() });
  assert.equal(plan.claimed.url, "https://a.example/x");
  assert.equal(plan.consumed.length, 2, "both copies of the URL leave the queue in one go");
  assert.equal(plan.consumed[1].status, STATUS.ALREADY_CLAIMED);
  assert.equal(plan.text, "* https://a.example/y\n");
});

test("a duplicate of a link that has not been dispatched yet stays in the queue", () => {
  const text = "* https://a.example/x\n* https://a.example/y\n* https://a.example/y\n";
  const plan = planClaim({ text, journal: emptyJournal() });
  assert.equal(plan.claimed.url, "https://a.example/x");
  assert.equal(plan.consumed.length, 1, "only the dispatched link is dequeued this round");
  assert.equal(plan.text, "* https://a.example/y\n* https://a.example/y\n");
  assert.equal(plan.skipped[0].reason, "duplicate of an earlier line");

  // Next round: the first y is dispatched and its copy goes with it.
  const next = planClaim({ text: plan.text, journal: emptyJournal() });
  assert.equal(next.claimed.url, "https://a.example/y");
  assert.equal(next.consumed.length, 2);
  assert.equal(next.text, "");
});

test("retry set releases journal-blocked links", () => {
  const text = "* https://a.example/1\n* https://a.example/2\n";
  let journal = emptyJournal();
  journal = recordClaim(journal, { canonical: "https://a.example/1", url: "https://a.example/1", status: STATUS.ABORTED, round: 1 });
  const blocked = planClaim({ text, journal });
  assert.equal(blocked.claimed.url, "https://a.example/2");
  const retried = planClaim({ text, journal, retry: new Set(["https://a.example/1"]) });
  assert.equal(retried.claimed.url, "https://a.example/1");
});

test("level 2 known index matches on the path alone", () => {
  const known = buildKnownUrlIndex({ texts: ["https://a.example/news.php?a=1"], level: 2 });
  assert.equal(known.has("https://a.example/news.php?a=1"), true);
  assert.equal(known.has("https://a.example/news.php?a=2"), true, "level 2 ignores the query");
  const level1 = buildKnownUrlIndex({ texts: ["https://a.example/news.php?a=1"], level: 1 });
  assert.equal(level1.has("https://a.example/news.php?a=2"), false);
});

test("claimNext writes the journal before rewriting the file, and survives a rerun", () => {
  const dir = tmp();
  const linksFile = queueFile(dir, "* https://a.example/1\n* https://a.example/2\n");
  const journalPath = path.join(dir, ".pi-loop-queue.json");
  fs.writeFileSync(path.join(dir, "references.md"), "nothing yet");

  const first = claimNext({ linksFile, journalPath, knownFiles: [path.join(dir, "references.md")], round: 1 });
  assert.equal(first.claimed.url, "https://a.example/1");
  assert.equal(fs.readFileSync(linksFile, "utf8"), "* https://a.example/2\n");
  assert.equal(loadJournal(journalPath).claims[0].status, STATUS.CLAIMED);
  assert.equal(loadJournal(journalPath).claims[0].round, 1);

  const second = claimNext({ linksFile, journalPath, knownFiles: [path.join(dir, "references.md")], round: 2 });
  assert.equal(second.claimed.url, "https://a.example/2");

  const third = claimNext({ linksFile, journalPath, knownFiles: [path.join(dir, "references.md")], round: 3 });
  assert.equal(third.claimed, null);
  assert.equal(third.remaining, 0);

  // A crashed round leaves its claim in the journal, so the URL is never re-run.
  fs.writeFileSync(linksFile, "* https://a.example/2\n");
  const again = claimNext({ linksFile, journalPath, knownFiles: [path.join(dir, "references.md")], round: 4 });
  assert.equal(again.claimed, null);
  assert.equal(again.skipped.length, 1);
});

test("claimNext is atomic: no temp files are left behind and headers survive", () => {
  const dir = tmp();
  const linksFile = queueFile(dir, "# Raw links\n\n* https://a.example/1\n");
  const journalPath = path.join(dir, "nested", ".pi-loop-queue.json");
  claimNext({ linksFile, journalPath, knownFiles: [], round: 1 });
  assert.deepEqual(fs.readdirSync(dir).filter((f) => f.includes(".tmp-")), []);
  assert.equal(fs.readFileSync(linksFile, "utf8"), "# Raw links\n\n");
  assert.equal(fs.existsSync(journalPath), true);
});

test("peekNext reports the pick without touching the queue", () => {
  const dir = tmp();
  const linksFile = queueFile(dir, "* https://a.example/1\n* https://a.example/2\n");
  const journalPath = path.join(dir, ".pi-loop-queue.json");
  const peeked = peekNext({ linksFile, journalPath, knownFiles: [] });
  assert.equal(peeked.claimed.url, "https://a.example/1");
  assert.equal(peeked.queued, 2);
  assert.equal(fs.readFileSync(linksFile, "utf8"), "* https://a.example/1\n* https://a.example/2\n");
  assert.equal(fs.existsSync(journalPath), false, "peek never creates the journal");
});

test("requeueClaims puts lost links back into raw_links.md", () => {
  const dir = tmp();
  const linksFile = queueFile(dir, "* https://a.example/1\n* https://a.example/keep\n");
  const journalPath = path.join(dir, ".pi-loop-queue.json");
  const first = claimNext({ linksFile, journalPath, knownFiles: [], round: 1 });
  assert.equal(first.claimed.url, "https://a.example/1");
  const before = loadJournal(journalPath);
  before.claims[0].status = STATUS.ABORTED;
  fs.writeFileSync(journalPath, JSON.stringify(before));

  const out = requeueClaims({ linksFile, journalPath });
  assert.equal(out.restored.length, 1);
  assert.match(fs.readFileSync(linksFile, "utf8"), /\* https:\/\/a\.example\/1/);
  assert.equal(loadJournal(journalPath).claims[0].status, STATUS.RESTORED);

  // The untouched `keep` link is still first in line; the restored link is back at
  // the bottom of the queue and claimable again.
  const next = claimNext({ linksFile, journalPath, knownFiles: [], round: 2 });
  assert.equal(next.claimed.url, "https://a.example/keep");
  const after = claimNext({ linksFile, journalPath, knownFiles: [], round: 3 });
  assert.equal(after.claimed.url, "https://a.example/1", "a restored entry is claimable again");
});
