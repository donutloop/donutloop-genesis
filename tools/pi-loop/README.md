# pi-loop (Genesis Mission fork)

A CLI built on the **pi SDK** (`@earendil-works/pi-coding-agent`) that connects to a
**local pi agent** session and drives the repository's **reference-intake loop** —
ported from [`donutloop/gusty` `tools/pi-loop`](https://github.com/donutloop/gusty/tree/main/tools/pi-loop)
and specialised: the AGENTS.md feature loop became the `raw_links.md` →
`prompts/process_url_reference.md` pipeline, with the same **fresh-session-per-round**
and **resume-on-stop** semantics.

## What a round does

```
1. claim      the harness takes the FIRST pending URL out of raw_links.md,
              removes that line (tmp file + rename) and journals the claim in
              .pi-loop-queue.json   ← the agent never sees the queue step
2. session    a brand-new pi session is created (new id, new session log) and
              prompted: read AGENTS.md, then execute
              prompts/process_url_reference.md for `URL parameter is <URL>`
3. tools      read/edit/write/bash/grep/find/ls + `webfetch` (this dir's fetcher)
4. verify     git HEAD moved? annotated tag present? queue line committed?
5. persist    journal status + .pi-loop-state.json, dispose the session, wait
              PI_LOOP_DELAY_SECONDS (default 60 s) and start round N+1
```

Rules that make the loop safe to leave running:

- **`raw_links.md` is harness-owned.** A link is removed the moment it is picked —
  never by the agent, never after the fact. The removed line is kept in the journal
  (`lineText`) so it can be put back with `--requeue-failed`.
- **A link is never dispatched twice.** The journal is written *before* the file is
  rewritten, so even a crash between the two writes cannot re-run a URL.
- **Already-indexed links cost no round.** URLs found in `references.md` /
  `reference_coverage.md` (step 1 of the workflow aborts on those anyway) are
  dequeued as `duplicate` without waking the model. Canonical matching ignores
  `utm_*`, `hl`, fragments, `www.`, trailing slashes and the default port;
  `--known-level=2` additionally ignores the query string.
- **Progress is monotone.** If a round commits nothing, the harness commits the
  dequeue itself (`chore(loop): dequeue <host> from raw_links.md`) and journals the
  round as `dequeued-no-commit`, so one broken round cannot stall or loop the run.

## Model config — comes from `setup/`, never hard-coded

Identical to upstream pi-loop: a config in the exact format pi reads from
`<agentDir>/models.json` lives in the repo's `setup/` dir, and pointing the loop at
a new model is a file drop there — no code change.

1. **Discover**: `--models-config=PATH` > `PI_LOOP_MODELS_CONFIG` / `PI_MODELS_CONFIG`
   > newest *named* profile `setup/pi_*.json` (`setup/pi.json` is the generic
   fallback) in `PI_LOOP_SETUP_DIR`, `<cwd>/setup`, then `tools/../setup`.
2. **Select**: `--provider/--model` > `PI_LOOP_PROVIDER`/`PI_LOOP_MODEL` > first
   model of the first provider.
3. **Publish** to `<agentDir>/models.json` (merged, unrelated providers and
   `modelOverrides` preserved, legacy top-level `models` key dropped).
4. **Resolve** through the SDK's own `ModelRuntime`, falling back to an inline model.
5. **Probe** `<baseUrl>/models` and fail fast (exit 1) when the server is down or
   does not serve the selected id (`PI_LOOP_SKIP_MODEL_CHECK=1` to skip).

`agentDir` defaults to `<cwd>/.pi/agent` (upstream used the repo root) so that
`models.json`, the auth copy and the session logs stay out of the paper commits —
`.gitignore` covers `.pi/`, `.pi-loop-state.json` and `.pi-loop-queue.json`.

Inside another pi session: pi exports `PI_MODEL`/`PI_PROVIDER` into every command it
runs; pi-loop ignores those two when `PI_CODING_AGENT=true` and says so. Use
`--model=ID` / `PI_LOOP_MODEL` to be explicit. Any setting also accepts the
clash-free `PI_LOOP_<NAME>` spelling, which always wins.

## Usage

```sh
node tools/pi-loop/pi-loop.mjs                       # loop over raw_links.md forever
node tools/pi-loop/pi-loop.mjs . --once               # exactly one link
node tools/pi-loop/pi-loop.mjs . --rounds=5           # five links
node tools/pi-loop/pi-loop.mjs . --force-reset        # ignore saved progress, restart at round 1
node tools/pi-loop/pi-loop.mjs . --push               # allow rounds to publish (default: never)
node tools/pi-loop/pi-loop.mjs . --next               # JSON: the link the next round would claim
node tools/pi-loop/pi-loop.mjs . --status             # JSON: queue + journal summary
node tools/pi-loop/pi-loop.mjs . --requeue-failed     # put lost links back into the queue
node tools/pi-loop/pi-loop.mjs . --retry-failed       # also re-dispatch aborted/no-commit links
node tools/pi-loop/pi-loop.mjs . --dry-run            # connectivity round, no tools, no queue, no state
node tools/pi-loop/pi-loop.mjs . --describe           # resolved config as JSON (pipe to jq)
node tools/pi-loop/pi-loop.mjs --help                 # full flag list (upstream + loop flags)
```

| flag | meaning |
|------|---------|
| `[cwd]` | repository to drive (default `process.cwd()`) |
| `--rounds=N` / `--once` | number of links to process (default `Infinity`) |
| `--force-reset` | ignore `.pi-loop-state.json`, restart at round 1 |
| `--links=PATH` | queue file (default `<cwd>/raw_links.md`) |
| `--prompt=PATH` | workflow per round (default `<cwd>/prompts/process_url_reference.md`) |
| `--journal=PATH` | claim journal (default `<cwd>/.pi-loop-queue.json`) |
| `--state=PATH` | progress state (default `<cwd>/.pi-loop-state.json`) |
| `--known=A,B` | files scanned for already-indexed URLs (default `references.md,reference_coverage.md`) |
| `--skip-known=0` | dispatch links even when they are already indexed |
| `--known-level=2` | treat "same path, different query" as indexed too |
| `--retry-failed` | release `aborted` / `dequeued-no-commit` / `invalid` claims for re-dispatch |
| `--requeue-failed` | append those links back into `raw_links.md` and exit |
| `--next` / `--status` | machine paths: JSON queue inspection, no side effects |
| `--push` | allow `git push origin main vX.Y.Z` inside a round |
| `--dry-run` / `--describe` / `--help` | as upstream pi-loop |

Env (each also accepted as `PI_LOOP_<NAME>`, which wins; `--flag` beats both):

| var | default |
|-----|---------|
| `PI_LOOP_LINKS` / `PI_LOOP_PROMPT` / `PI_LOOP_JOURNAL` / `PI_LOOP_STATE` | as the flags above |
| `PI_LOOP_KNOWN` / `PI_LOOP_SKIP_KNOWN` / `PI_LOOP_KNOWN_LEVEL` | `references.md,reference_coverage.md` / `1` / `1` |
| `PI_LOOP_PUSH` | `false` |
| `PI_LOOP_AGENT_DIR` | `<cwd>/.pi/agent` |
| `PI_LOOP_COPY_AUTH` | `1` — seed `<agentDir>/auth.json` from `~/.pi/agent/auth.json` when missing |
| `PI_LOOP_DELAY_SECONDS` | `60` between rounds |
| `PI_LOOP_SDK_PATH`, `PI_LOOP_SETUP_DIR`, `PI_LOOP_MODELS_CONFIG`, `PI_LOOP_PROVIDER`, `PI_LOOP_MODEL`, `PI_LOOP_THINKING_LEVEL`, `PI_LOOP_CONTEXT_WINDOW`, `PI_LOOP_MAX_TOKENS`, `PI_LOOP_SKIP_MODEL_CHECK`, `PI_LOOP_MODEL_CHECK_TIMEOUT_MS` | as upstream pi-loop |

## Stop / resume (unchanged from upstream)

A stop — SIGINT, error, or the round target — persists `{ round, lastCommit }` to
`.pi-loop-state.json` before exiting. On the next run:

- committed progress, `lastCommit == HEAD`, clean tree → **RESUMES at the next round**;
- otherwise (no state, `lastCommit != HEAD`, dirty tree) → **RE-EXECUTES AGENTS.md**
  at round 1.

Claims survive both paths: a URL that was dispatched is never dispatched again until
you explicitly `--requeue-failed` / `--retry-failed` it.

## Finding the pi SDK

Unchanged from upstream (`sdk-discovery.mjs`): `$PI_LOOP_SDK_PATH` → a node
dependency → the pi managed install (`$PI_MANAGED_INSTALL_ROOT`, `~/.pi/agent/install`)
→ the `pi` binary on `PATH` → global npm prefixes, with every candidate printed on a
miss.

## Machine paths

| need | command |
|------|---------|
| what would the next round do | `--next` (JSON: `next`, `wouldConsume`, `skipped`, `queued`) |
| how far along is the queue | `--status` (JSON: `queued`, `claimed`, `byStatus`) |
| is the model/endpoint usable | `--describe \| jq .endpoint` |
| read a reference as text | `node tools/pi-loop/webfetch.mjs <url> [--max-chars=N] [--links] [--json] [--raw] [--out=F]` |

`webfetch.mjs` is the same code the round's `webfetch` tool calls, so a script and a
round always see the same extraction.

## Tests

```sh
node --test tools/pi-loop/*.test.mjs          # or: npm test --prefix tools/pi-loop
```

- `link-queue.test.mjs` — claiming rules: FIFO pick + line removal, canonical
  dedup (`www.`, `/`, `hl=`, `utm_`), duplicate lines, journal blocking of
  re-dispatch, `--retry-failed`, known-index pre-filter, atomic write, `--next`,
  `--requeue-failed`.
- `webfetch.test.mjs` — HTML → text, entity decoding, truncation budget, PDF /
  binary / HTTP-error / network-failure paths, citation URL canonicalisation.
- `round-prompt.test.mjs` — the round prompt carries exactly one URL, forbids
  touching `raw_links.md`, names every artefact, keeps push off by default.
- `models-config.test.mjs`, `sdk-discovery.test.mjs` — inherited from upstream.

End-to-end:

```sh
node tools/pi-loop/pi-loop.mjs . --dry-run    # expects PI_LOOP_OK, queue untouched
node tools/pi-loop/pi-loop.mjs . --once       # one real link: commit + tag
```

## Requirements

- pi installed (managed install, global npm package, or `PI_LOOP_SDK_PATH`).
- The local model server up on the `baseUrl` in the chosen `setup/` config
  (`setup/boot_agent.sh`); `--describe` tells you whether it is reachable.

## Loop contract

`AGENTS.md` (repo root) is read by every round and defines the quality bar:
merge-only edits, English/German parity, source-before-claims, count reconciliation,
one commit + one annotated tag per link.
