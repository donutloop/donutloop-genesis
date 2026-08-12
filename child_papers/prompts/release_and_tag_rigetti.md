# Instructions: Rigetti Computing Child Paper Release & Tagging Workflow

## Context
This workflow governs versioning, milestone validation, release stamping, and git tagging for the dedicated Rigetti Computing child paper [`child_papers/rigetti.md`](../rigetti.md) **strictly within the `child_papers/` directory**.

Root repository files (`README.md`, `README.de.md`, `references.md`, `reference_coverage.md`, `coverage.md`, `CHANGELOG.md`) are isolated and MUST NOT be modified during child paper release execution.

---

## Input Parameter
The workflow receives a release version parameter supplied via prompt invocation:
`VERSION is <VERSION>` (e.g. `1.0.0` or `v1.0.0`)

---

## Execution Rules & Pipeline Workflow

### 1. Document Integrity & Deep Analysis Readiness Verification
- Inspect [`child_papers/rigetti.md`](../rigetti.md) to ensure all core technical sections are present, deeply analyzed, and fully populated:
  1. `Executive Summary & Quantum Technology Roadmap`
  2. `Superconducting Transmon Hardware & Fab-1 Foundry`
  3. `Modular Multi-Chip Scaling & 3D Packaging (Ankaa & Cepheus)`
  4. `Quantum Cloud Services (QCS), Quil & PyQuil Software`
  5. `Federal, National Laboratory & Enterprise Applications`
  6. `Complete Chronological Press & Reference Index`
- Confirm that 100% of all newsroom press release links extracted are retained in Section 6 without omission.

### 2. Release Stamping
- Stamp the version header in [`child_papers/rigetti.md`](../rigetti.md) under the document metadata block:
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
  git commit -m "release(rigetti): release version <VERSION> of rigetti.md child paper"
  ```
- Create an annotated Git tag for the child paper release:
  ```bash
  git tag -a rigetti-v<VERSION> -m "rigetti.md child paper release v<VERSION>"
  ```

---

## Output Summary
Provide a clear summary to the user indicating:
- Release Version (e.g. `rigetti-v1.0.0`)
- Tag created in Git
- Summary of technical sections and total press release references included in the release.
