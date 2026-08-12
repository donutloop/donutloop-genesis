# Instructions: D-Wave Child Paper Release & Tagging Workflow

## Context
This workflow governs versioning, milestone validation, release stamping, and git tagging for the dedicated D-Wave Quantum child paper [`chhild_papers/d-wave.md`](../d-wave.md) **strictly within the `chhild_papers/` directory**.

Root repository files (`README.md`, `README.de.md`, `references.md`, `reference_coverage.md`, `coverage.md`, `CHANGELOG.md`) are isolated and MUST NOT be modified during child paper release execution.

---

## Input Parameter
The workflow receives a release version parameter supplied via prompt invocation:
`VERSION is <VERSION>` (e.g. `1.0.0` or `v1.0.0`)

---

## Execution Rules & Pipeline Workflow

### MANDATORY EXHAUSTIVE MULTI-PAGE & API CRAWLING RULE
- **CRITICAL DIRECTIVE:** NEVER assume that page 1 or initial single-page fetching contains all links.
- Always check for pagination parameters (`?page=N`, `?offset=TIMESTAMP`), underlying REST APIs (e.g. WordPress `/wp-json/wp/v2/posts?per_page=100`, Squarespace JSON feeds `?format=json`), or paginated Webflow collections.
- Exhaustively crawl and parse ALL pages until reaching the final historical archive link or specified verification landmark.
- **ZERO OMISSION RULE:** Retain 100% of all extracted newsroom/press release links in Section 6 (*Complete Chronological Press & Reference Index*) without dropping, omitting, or truncating any link under any circumstances.


### 1. Document Integrity & Readiness Verification
- Inspect [`chhild_papers/d-wave.md`](../d-wave.md) to ensure all core technical sections are present and fully populated:
  1. `Executive Summary & Quantum Technology Roadmap`
  2. `Quantum Annealing Hardware (Advantage & Advantage2 Systems)`
  3. `Gate-Model Superconducting Architecture & Fault-Tolerance`
  4. `Hybrid Cloud Infrastructure (Leap & Ocean SDK)`
  5. `Federal, National Laboratory & Enterprise Applications`
  6. `Complete Chronological Press & Reference Index`
- Confirm that all press releases and reference links are valid and formatted with markdown file links where appropriate.

### 2. Release Stamping
- Stamp the version header in [`chhild_papers/d-wave.md`](../d-wave.md) under the document metadata block:
  ```markdown
  > **Child Paper Overview:**
  > ...
  > **Version:** v<VERSION> (Released YYYY-MM-DD)
  ```

### 3. Git Staging, Commit & Tagging
- Stage child paper updates:
  ```bash
  git add chhild_papers/
  ```
- Commit the release with Conventional Commits syntax:
  ```bash
  git commit -m "release(d-wave): release version <VERSION> of d-wave.md child paper"
  ```
- Create a annotated Git tag for the child paper release:
  ```bash
  git tag -a dwave-v<VERSION> -m "d-wave.md child paper release v<VERSION>"
  ```

---

## Output Summary
Provide a clear summary to the user indicating:
- Release Version (e.g. `dwave-v1.0.0`)
- Tag created in Git
- Summary of technical sections and total press release references included in the release.
