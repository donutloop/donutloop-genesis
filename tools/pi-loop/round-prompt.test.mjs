import test from "node:test";
import assert from "node:assert/strict";
import { buildRoundPrompt } from "./round-prompt.mjs";

const base = {
  linksFile: "raw_links.md",
  journalFile: ".pi-loop-queue.json",
  agentsFile: "AGENTS.md",
  promptFile: "prompts/process_url_reference.md",
};

test("the round prompt carries exactly one URL parameter", () => {
  const p = buildRoundPrompt({ ...base, round: 3, maxRounds: 10, url: "https://example.com/a" });
  assert.match(p, /^Round 3 of 10/m);
  assert.match(p, /^URL parameter is https:\/\/example\.com\/a$/m);
  assert.equal(p.match(/URL parameter is/g).length, 1);
});

test("it orders the agent to leave the queue file alone", () => {
  const p = buildRoundPrompt({ ...base, round: 1, maxRounds: Infinity, url: "https://example.com/a" });
  assert.match(p, /`raw_links\.md` is the harness-owned work queue/);
  assert.match(p, /Do NOT read, edit,/);
  assert.match(p, /never revert it/);
  assert.match(p, /`.pi-loop-queue\.json`/);
  assert.match(p, /∞/);
});

test("it names every artefact the workflow must touch", () => {
  const p = buildRoundPrompt({ ...base, round: 1, maxRounds: 1, url: "https://example.com/a" });
  for (const artefact of ["references.md", "coverage.md", "reference_coverage.md", "README.de.md", "CHANGELOG", "annotated tag", "AGENTS.md", "process_url_reference.md"]) {
    assert.match(p, new RegExp(artefact.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), artefact);
  }
});

test("push stays off unless the loop was started with --push", () => {
  const off = buildRoundPrompt({ ...base, round: 1, maxRounds: 1, url: "u" });
  assert.match(off, /Do NOT push/);
  assert.doesNotMatch(off, /git push origin main/);
  const on = buildRoundPrompt({ ...base, round: 1, maxRounds: 1, url: "u", push: true });
  assert.match(on, /git push origin main <tag>/);
});

test("history rewriting stays forbidden", () => {
  const p = buildRoundPrompt({ ...base, round: 1, maxRounds: 1, url: "u" });
  assert.match(p, /no rebase, no reset, no amend, no force-push/);
  assert.match(p, /Never invent/);
});
