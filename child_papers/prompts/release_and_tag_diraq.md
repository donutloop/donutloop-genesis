# Instructions: Diraq Child Paper Release & Tagging Workflow

## Context
This workflow governs versioning, milestone validation, release stamping, and git tagging for the dedicated Diraq child paper [`child_papers/diraq.md`](../diraq.md) **strictly within the `child_papers/` directory**.

Root repository files (`README.md`, `README.de.md`, `references.md`, `reference_coverage.md`, `coverage.md`, `CHANGELOG.md`) are isolated and MUST NOT be modified during child paper release execution.

---

## Input Parameter
The workflow receives a release version parameter supplied via prompt invocation:
`VERSION is <VERSION>` (e.g. `1.0.0` or `v1.0.0`)

---

## Execution Rules & Pipeline Workflow

### 1. Document Integrity & Deep Analysis Readiness Verification
- Inspect [`child_papers/diraq.md`](../diraq.md) to ensure all core technical sections are present, deeply analyzed, and fully populated:
  1. `Executive Summary & Silicon Spin Qubit Technology Roadmap`
  2. `CMOS Semiconductor Foundry & FinFET/FDSOI Integration`
  3. `Quantum Dot Physics, EDSR & Cryo-CMOS Electronics`
  4. `Fault-Tolerant Surface Codes & 1-Billion Qubit Scaling`
  5. `Defense, Federal & Enterprise Applications`
  6. `Complete Chronological Press & Reference Index`
- Confirm that 100% of all newsdesk press release links across all 4 pages down to Page 4 last link landmark `https://www.diraq.com/newsdesk/blog-post-title-one-sfk9t-4k2ns` are retained in Section 6 without omission.

### 2. Release Stamping
- Stamp the version header in [`child_papers/diraq.md`](../diraq.md) under the document metadata block:
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
  git commit -m "release(diraq): release version <VERSION> of diraq.md child paper"
  ```
- Create an annotated Git tag for the child paper release:
  ```bash
  git tag -a diraq-v<VERSION> -m "diraq.md child paper release v<VERSION>"
  ```

---

## Output Summary
Provide a clear summary to the user indicating:
- Release Version (e.g. `diraq-v1.0.0`)
- Tag created in Git
- Summary of technical sections and total press release references included across all 4 pages down to the Page 4 verification landmark.
