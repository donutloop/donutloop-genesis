# Instructions: Atom Computing Child Paper Release & Tagging Workflow

## Context
This workflow governs versioning, milestone validation, release stamping, and git tagging for the dedicated Atom Computing child paper [`child_papers/atom_computing.md`](../atom_computing.md) **strictly within the `child_papers/` directory**.

Root repository files (`README.md`, `README.de.md`, `references.md`, `reference_coverage.md`, `coverage.md`, `CHANGELOG.md`) are isolated and MUST NOT be modified during child paper release execution.

---

## Input Parameter
The workflow receives a release version parameter supplied via prompt invocation:
`VERSION is <VERSION>` (e.g. `1.0.0` or `v1.0.0`)

---

## Execution Rules & Pipeline Workflow

### 1. Document Integrity & Deep Analysis Readiness Verification
- Inspect [`child_papers/atom_computing.md`](../atom_computing.md) to ensure all core technical sections are present, deeply analyzed, and fully populated:
  1. `Executive Summary & Neutral Atom Technology Roadmap`
  2. `3D Optical Tweezer Arrays & Ytterbium-171 Nuclear Spin Qubits`
  3. `Rydberg Entangling Gates & Optical Clock Laser Control`
  4. `Microsoft Azure Quantum Logical Qubit Architecture`
  5. `Federal Labs, DARPA QBI & Defense Applications`
  6. `Complete Chronological Press & Reference Index`
- Confirm that 100% of all newsroom press release links are retained in Section 6 without omission.

### 2. Release Stamping
- Stamp the version header in [`child_papers/atom_computing.md`](../atom_computing.md) under the document metadata block:
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
  git commit -m "release(atom-computing): release version <VERSION> of atom_computing.md child paper"
  ```
- Create an annotated Git tag for the child paper release:
  ```bash
  git tag -a atom_computing-v<VERSION> -m "atom_computing.md child paper release v<VERSION>"
  ```

---

## Output Summary
Provide a clear summary to the user indicating:
- Release Version (e.g. `atom_computing-v1.0.0`)
- Tag created in Git
- Summary of technical sections and total press release references included.
