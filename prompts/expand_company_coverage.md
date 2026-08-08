# Instructions: Expanding Company Coverage and Profile Integration

## Context
The Genesis Mission repository maintains a central research paper (`README.md`), a curated reference index (`references.md`), and an ecosystem coverage tracker (`coverage.md`). When expanding or formally documenting a company's role within the Genesis Mission ecosystem, updates must be systematically applied across all three files to ensure architectural consistency, metric accuracy, and reference integrity.

## Task
Systematically document a target company's technical and strategic role within the Genesis Mission ecosystem by updating `README.md`, preserving references in `references.md`, updating `coverage.md`, and incrementing the project version.

## Execution Rules

### 1. Integrate Company Profile in `README.md`
- **Detailed Profile (§3.1):** Add a dedicated entry for the company under `### 3.1 Industry, Hyperscale & Hardware Commitments` structured with bold sub-bullets detailing:
  - **MOUs & Grants:** Official MOUs, CHIPS Act LOIs, or federal funding commitments.
  - **Technical Capabilities:** Specific hardware architectures, software platforms, quantum modalities, or HPC supercomputing substrates (e.g., GPU/QPU platforms, liquid cooling, wafer-scale engines).
- **Abstract & Technical Framework (§1 & §2.1):** For major compute or model providers, incorporate concise references into the Abstract (`## Abstract`), heterogenous supercomputing core (`§2.1`), and ASCII consortium topology diagram (`§1`).
- **Appendix A.3 Table:** Ensure the company is listed with its primary contribution in the appropriate category table under `### A.3 Industry & Technology Partners`.

### 2. Preserve References in `references.md`
- **Link Integrity:** Verify and retain all official links, press releases, and collaborator entries for the company in `references.md` (e.g., under `## 2. Collaborators` and `## 4. Executive, Federal & Partner Announcements`). **Do NOT remove existing reference URLs.**

### 3. Update Ecosystem Coverage Tracker (`coverage.md`)
- **Status Upgrade:** Change the company's row status from `📋 Brief Mention` to `✅ Full Profile`, update the `Paper Section` column (e.g., `§3.1, A.3`), and summarize key technical highlights in `Notes`.
- **Metrics Recalculation:** Recalculate and update both summary tables:
  - **By Entity Type:** Increment `✅ Full` and decrement `📋 Brief` for the entity category (e.g., Industry Partners).
  - **By Coverage Level:** Update the total `✅ Full Profile` and `📋 Brief Mention` counts and percentages.
  - **Footnote:** Update the total entity profile count in the closing note.

### 4. Version Increment
- **Version Bump:** Increment the patch version string on line 1 of `README.md` (e.g., `**Version**: 0.2.7-alpha` → `**Version**: 0.2.8-alpha`).

### 5. Changelog Update
- **Changelog Entry:** Update `CHANGELOG.md` under the active release version section to log the newly expanded company profile, status upgrade in `coverage.md`, and corresponding section updates in `README.md`.

### 6. Git Release Tag & Publish
- **Mandatory Release Tag:** Whenever `CHANGELOG.md` is updated or modified, a corresponding Git release tag matching the updated version string (e.g. `v1.0.3`) MUST be created and published to the remote repository (`git tag -a vX.Y.Z -m "Release vX.Y.Z: ..." && git push origin main vX.Y.Z`).


