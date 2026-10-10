/**
 * round-prompt.mjs — the instruction one fresh pi session receives per round.
 *
 * Kept separate from pi-loop.mjs so the loop contract is unit testable: it is the
 * only thing standing between the loop and an agent that "helpfully" re-adds the
 * link it was just dispatched, or that edits the queue file instead of the paper.
 */

/**
 * @param {object} o
 * @param {number} o.round           1-based round number
 * @param {number} o.maxRounds       Infinity when the loop is unbounded
 * @param {string} o.url             the claimed URL — the only work for this round
 * @param {string} o.linksFile       queue file shown to the agent
 * @param {string} o.journalFile     claim journal shown to the agent
 * @param {string} o.agentsFile      loop contract the agent must read
 * @param {string} o.promptFile      workflow file executed for this URL
 * @param {boolean} [o.push]         allow `git push` in step 6
 */
export function buildRoundPrompt({ round, maxRounds, url, linksFile, journalFile, agentsFile, promptFile, push = false }) {
  const show = (p, fallback) => String(p ?? "").trim() || fallback;
  return [
    `Round ${round} of ${maxRounds === Infinity ? "\u221E" : maxRounds} of the Genesis Mission reference-intake loop.`,
    "",
    `Read \`${show(agentsFile, "AGENTS.md")}\` and follow it STRICTLY, then execute the workflow in`,
    `\`${show(promptFile, "prompts/process_url_reference.md")}\` end-to-end for exactly one URL:`,
    "",
    `URL parameter is ${url}`,
    "",
    "Non-negotiable loop rules (they override anything in the workflow file that conflicts):",
    `1. \`${show(linksFile, "raw_links.md")}\` is the harness-owned work queue. The line for this URL was already`,
    `   removed and journaled in \`${show(journalFile, ".pi-loop-queue.json")}\` before this round started. Do NOT read, edit,`,
    "   restore or re-add anything in that file, and never revert it. If you are about to touch it, stop.",
    "2. Work the workflow file's steps in order: strict dedup check → content extraction → references.md",
    "   → coverage.md → reference_coverage.md master index → README.md + README.de.md parity → patch",
    "   version bump + CHANGELOG entry → conventional commit + annotated tag.",
    "3. Retrieve the page with the `webfetch` tool. If it fails twice, fetch it through `bash` with",
    "   `node tools/pi-loop/webfetch.mjs <url>`; if that fails too, cite the link from its host and",
    "   title and flag it as unverified in the reference_coverage.md index row, never in the",
    "   references.md entry. Never invent facts, numbers, dollar amounts or names, and never copy",
    "   marketing claims as established facts.",
    "4. Merge only: never delete or rewrite existing statements in references.md, coverage.md,",
    "   reference_coverage.md, README.md or README.de.md. Append entries at the bottom of tables.",
    "   In references.md an entry is a bare markdown link (`* [Title](URL)`) — never add",
    "   descriptions, quotations or verification notes there; they go in reference_coverage.md.",
    "   Never write retrieval telemetry into any repository file — no HTTP/response codes, content",
    "   types, byte counts, timings, tool or relay names, anti-bot interstitials, server or CMS",
    "   headers. State only the verification outcome in plain prose.",
    "5. Commit at the end with `git add .` + a Conventional Commits message + `git tag -a` on the",
    "   bumped version (the queue removal rides along in that commit).",
    push
      ? "6. Then `git push origin main <tag>`."
      : "6. Do NOT push; publishing stays a human decision.",
    "7. Never rewrite history: no rebase, no reset, no amend, no force-push, no branch switching.",
    "8. Finish with one short report: the URL, the title, which files/sections changed, the new",
    "   version string and the tag name. If you aborted, say why in one line.",
  ].join("\n");
}
