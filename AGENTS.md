# AGENTS.md — Genesis Mission reference-intake loop

This repository is a research paper on the **U.S. DOE Genesis Mission** (English
`README.md`, German `README.de.md`) plus its citation apparatus:
`references.md` (curated bibliography), `reference_coverage.md` (master audit of
every link), `coverage.md` (entity coverage matrix) and `CHANGELOG.md` (release log).

`tools/pi-loop/pi-loop.mjs` drives this work as an **endless loop**. Each round it
claims one unprocessed URL from `raw_links.md` and gives it to a brand-new pi agent
session. This file is the contract that session must follow — the loop is not a
one-off task, so follow it exactly and leave the repository in a state where the
next round can start immediately.

## The loop, in one round

```
raw_links.md ──(harness claims + removes one URL)──▶ .pi-loop-queue.json
     │
     └─▶ fresh pi session ─▶ prompts/process_url_reference.md for that ONE URL
                     │
                     ├─ references.md          (add the citation under its section)
                     ├─ coverage.md            (new entities: bottom of the table, ❌ Not Covered)
                     ├─ reference_coverage.md  (master index row + Section 1–3 metrics)
                     ├─ README.md + README.de.md (factual enrichment, English + German parity)
                     ├─ version bump + CHANGELOG entry
                     └─ git add . && git commit && git tag -a vX.Y.Z
```

One round = one URL = one commit = one tag. Never batch two links into a round.

## Ownership: what you must not touch

- **`raw_links.md` belongs to the loop harness.** It is the work queue. The harness
  removes the entry for the current URL *before* the round starts and journals the
  claim in `.pi-loop-queue.json`. Never edit, restore, reorder, "clean up",
  `git checkout` or re-add anything in `raw_links.md`. If you find yourself about
  to write to it, stop — that is the harness's job.
- `.pi-loop-state.json`, `.pi-loop-queue.json` and `.pi/` are loop state and are
  git-ignored. Leave them alone; never commit them.
- Never rewrite history: no `git rebase`, `git reset`, `git commit --amend`,
  no force-push, no branch switching, no deleting tags or branches. This repository
  has hundreds of release tags; they are the audit trail.
- Do not push unless the round prompt explicitly says to push.

## Working the URL

Execute `prompts/process_url_reference.md` from top to bottom for exactly the URL
the round prompt hands you (`URL parameter is <url>`). Its steps are the definition
of done:

1. **Strict dedup check first.** Search `references.md` and `reference_coverage.md`
   for the URL / canonical path. If it is already there, abort the round without
   editing anything and report where the existing entry lives.
2. **Read the source before writing about it.** Use the `webfetch` tool (or
   `node tools/pi-loop/webfetch.mjs <url>` via `bash`). For PDFs, download and
   extract text. If the page is unreachable after two attempts, still register the
   link but state only what the host and title support and mark it as unverified.
   **Never invent** numbers, dollar amounts, dates, people, job titles or product
   names. Every technical/strategic claim you add to the papers must come from the
   fetched content or from an existing entry in this repository.
3. `references.md` — one entry in the correct section, repository format.
4. `coverage.md` — new entities appended at the **bottom** of their table with
   `❌ Not Covered` and the `(reference only)` note, plus the summary tables.
5. `reference_coverage.md` — append the master-index row (`Status: Processed`) at
   the **bottom** of the Section 4 table, then sync Section 1 metrics, the Section 2
   distribution (counts + share %) and Section 3 top-domain counts.
6. `README.md` **and** `README.de.md` — merge the extracted insights into the
   matching section (§2 architecture, §3 institutional framework, §4 governance,
   appendix). The German paper gets the same structural and factual depth.
7. Bump **only the patch** version on line 1 of both papers, add the
   `## [X.Y.Z] - YYYY-MM-DD` entry at the top of `CHANGELOG.md` (read only the first
   existing entry to learn the format — it is a huge file).
8. Conventional-Commits commit + annotated tag `vX.Y.Z`, as the workflow file shows.

## Non-negotiable quality rules

- **Merge only.** Existing statements are never deleted, softened or rewritten to
  fit a new source. Additive edits only; append table rows at the bottom.
- **Language parity.** Any factual addition to `README.md` gets its counterpart in
  `README.de.md` in the same section, in German.
- **Provenance.** A reference that is not actually about the Genesis Mission is not
  forced into the paper. Say so in the round report instead of padding a section.
- **Numbers must reconcile.** If you add a link, the counts in `reference_coverage.md`
  (Total Links, `N / N Processed`, distribution shares, domain counts) and the entity
  counts in `coverage.md` must move with it. Recompute, do not guess.
- Keep line 1 of the papers limited to the version string change; do not touch the
  document headline.
- Do not create new top-level files, do not reformat unrelated files, and do not
  introduce build tooling: this is a documentation repository.

## Machine paths (use them, do not reinvent them)

| need | command |
|------|---------|
| next link the loop would claim | `node tools/pi-loop/pi-loop.mjs . --next` |
| queue + journal summary | `node tools/pi-loop/pi-loop.mjs . --status` |
| resolved model / endpoint / SDK | `node tools/pi-loop/pi-loop.mjs . --describe` |
| read a reference as text | `node tools/pi-loop/webfetch.mjs <url> [--max-chars=N] [--links] [--json]` |
| run the loop's unit tests | `node --test tools/pi-loop/*.test.mjs` |

A round is complete when `git status --porcelain` is clean, `HEAD` carries a new
commit with an annotated tag, and the round report names the URL, the title, the
files/sections changed and the new version. If you cannot finish, commit nothing
half-done: report the blocker in one line and let the harness journal the round.
