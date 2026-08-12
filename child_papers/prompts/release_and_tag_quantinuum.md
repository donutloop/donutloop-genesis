# Instructions: Quantinuum Child Paper Release & Tagging Workflow

## Context
This workflow governs versioning, milestone validation, release stamping, and git tagging for the dedicated Quantinuum child paper [`child_papers/quantinuum.md`](../quantinuum.md) **strictly within the `child_papers/` directory**.

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


### 1. Document Integrity & Deep Analysis Readiness Verification
- Inspect [`child_papers/quantinuum.md`](../quantinuum.md) to ensure all core technical sections are present, deeply analyzed, and fully populated:
  1. `Executive Summary & Quantum Technology Roadmap`
  2. `Trapped-Ion QCCD Hardware & Optical Shuttle Architecture`
  3. `Record Gate Fidelities, Logical Qubits & Error Correction`
  4. `Quantum Software Suite (TKET, InQuanto & Quantum Origin)`
  5. `Federal, National Laboratory & Enterprise Applications`
  6. `Complete Chronological Press & Reference Index`
- Confirm that 100% of all newsroom press release links extracted are retained in Section 6 without omission.

### 2. Release Stamping
- Stamp the version header in [`child_papers/quantinuum.md`](../quantinuum.md) under the document metadata block:
  ```markdown
  > **Child Paper Overview:**
  > ...
  > **Version:** v<VERSION> (Released YYYY-MM-DD)
  ```

### 3. Git Staging, Commit & Tagging
- Stage child paper updates:
  ```bash
  git add child_papers/
  ```
- Commit the release with Conventional Commits syntax:
  ```bash
  git commit -m "release(quantinuum): release version <VERSION> of quantinuum.md child paper"
  ```
- Create an annotated Git tag for the child paper release:
  ```bash
  git tag -a quantinuum-v<VERSION> -m "quantinuum.md child paper release v<VERSION>"
  ```

---

## Output Summary
Provide a clear summary to the user indicating:
- Release Version (e.g. `quantinuum-v1.0.0`)
- Tag created in Git
- Summary of technical sections and total press release references included in the release.
