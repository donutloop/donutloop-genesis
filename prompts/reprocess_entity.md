# Instructions: Reprocessing Entity Profile and Incrementing Processing Counter

## Context
The Genesis Mission repository maintains `README.md`, `references.md`, and `coverage.md`. When an existing entity requires reprocessing (e.g., updating hardware specs, refreshing MOUs, expanding technical frameworks, or fixing metrics), the update must be applied systematically across all documentation while tracking the processing iteration count.

## Task
Reprocess a target entity within the Genesis Mission ecosystem, ensure the tracking table in `coverage.md` includes a `Process Count` column as the first column, increment that entity's counter (starting at `0` for the initial run if the column is missing), apply technical updates to `README.md`, preserve links in `references.md`, and bump the repository patch version.

## Execution Rules

### 1. Scope Restriction: Paper Traversal
* **Do Not Read Child Papers:** Confine all analysis, technical updates, and reference extractions strictly to the top-level parent document and primary source material provided. Under no circumstances should child papers, sub-references, or nested citations be recursively fetched, read, or traversed.

### 2. Schema Migration & Counter Increment in `coverage.md`
* **First-Column Insertion:** Ensure every entity tracking table in `coverage.md` includes `Process Count` as the very first column (`| Process Count | Entity | ... |`).
* **Initial Baseline:** If the `Process Count` column does not exist, insert it into all table headers and data rows, setting the default value to `0` for all untouched rows.
* **Reprocess Entity Counter Update:** For the target entity being reprocessed:
  * If the column already existed: Increment the numeric value by `1` (e.g., `0` → `1`, `1` → `2`).
  * If the column was newly added: Set the reprocessed entity's counter to `1`.
* **Status & Details:** Update the reprocessed entity's `Status` (e.g., `📋 Brief Mention` → `✅ Full Profile`), `Paper Section`, and `Notes` with the refreshed architectural context.
* **Metrics Recalculation:** Recalculate and update the summary tables and footnote in `coverage.md` to reflect coverage counts accurately.

### 3. Update Reprocessed Entity Profile in `README.md`
* **Section §3.1 Updates:** Refresh the entry under `### 3.1 Industry, Hyperscale & Hardware Commitments` with updated technical sub-bullets:
  * **MOUs & Grants:** Updated state/federal LOIs, grants, or collaborative frameworks.
  * **Technical Capabilities:** Newly added chip architectures, quantum hardware modalities, cluster interconnects, or liquid cooling systems.
* **Global References (§1 & §2.1):** For major compute or model providers, incorporate concise references into the Abstract (`## Abstract`), heterogeneous supercomputing core (`§2.1`), and ASCII consortium topology diagram (`§1`).
* **Appendix A.3:** Verify the reprocessed entity's contributions match the latest reprocessed scope in `### A.3 Industry & Technology Partners`.

### 4. Maintain Integrity in `references.md`
* Retain all historical press releases, partner announcements, and collaboration URLs.
* Append newly sourced reference links under the appropriate sub-headers without removing existing valid links.

### 5. Version Increment
* Increment the patch version string on line 1 of `README.md` (e.g., `**Version**: 0.2.8-alpha` → `**Version**: 0.2.9-alpha`).

### 6. Changelog Update
* Add a changelog entry to `CHANGELOG.md` under the active version documenting the reprocessed entity, schema migration of the `Process Count` column, and specific technical additions.

### 7. Release Management Policy
* Do NOT run `git tag` or `git push`. Tagging and release deployment remain isolated to `prompts/release_and_tag.md`.
