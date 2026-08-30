# Instructions: Reprocessing Key Individual Profile and Incrementing Processing Counter

## Context
The Genesis Mission repository maintains `README.md`, `references.md`, and `coverage.md`. When an existing key individual requires reprocessing (e.g., updating institutional appointments, refreshing leadership scopes, expanding scientific contributions, or correcting affiliations), the update must be applied systematically across all documentation while tracking the processing iteration count and ensuring required sections exist.

## Task
Reprocess a target individual within the Genesis Mission ecosystem, ensure the leadership tracking table in `coverage.md` includes a `Process Count` column as the first column, increment that individual's counter (starting at `0` for the initial run if the column is missing), apply technical/strategic updates to `README.md` (creating missing sections if needed), preserve links in `references.md`, and bump the repository patch version.

## Execution Rules

### 1. Schema Migration & Counter Increment in `coverage.md`
- **First-Column Insertion:** Ensure the individual/leadership tracking table in `coverage.md` includes `Process Count` as the very first column (`| Process Count | Individual | ... |`). If the entire table is missing, create it using standard headers.
- **Initial Baseline:** If the `Process Count` column does not exist, insert it into all table headers and data rows, setting the default value to `0` for all untouched rows.
- **Reprocess Individual Counter Update:** For the target individual being reprocessed:
  - If the column already existed: Increment the numeric value by `1` (e.g., `0` → `1`, `1` → `2`).
  - If the column was newly added: Set the reprocessed individual's counter to `1`.
- **Status & Details:** Update the reprocessed individual's `Status` (e.g., `📋 Brief Mention` → `✅ Full Profile`), `Paper Section`, and `Notes` with the refreshed leadership and scientific context.
- **Metrics Recalculation:** Recalculate and update the summary tables and footnote in `coverage.md` to reflect coverage counts accurately.

### 2. Update Reprocessed Individual Profile in `README.md`
- **Section §3.5 Leadership & Scientific Direction (Create if Missing):** Check if `### 3.5 Key Leadership & Scientific Direction` (or designated individual subsection) exists under `## 3. Governance, Ecosystem & Implementation`. If missing, create it.
- **Detailed Profile Updates:** Refresh the entry for the individual with structured bold sub-bullets:
  - **Role & Institutional Affiliation:** Updated titles, federal advisory positions, national lab roles, or steering committees.
  - **Strategic & Scientific Contributions:** Expanded research initiatives, policy direction, architectural oversight, or quantum/AI roadmap governance.
- **Appendix A.4 Leadership & Key Contributors (Create if Missing):** Verify the individual's entry matches the latest scope in `### A.4 Leadership & Scientific Personnel`. If the table is missing, create it (`| Name | Role | Primary Affiliation | Focus Area |`) and insert the record.

### 3. Maintain Integrity in `references.md`
- Retain all historical bios, appointment notices, white papers, and collaboration links.
- Append newly sourced reference links, profiles, or public statements under the appropriate sub-headers without removing existing valid links.

### 4. Version Increment
- Increment the patch version string on line 1 of `README.md` (e.g., `**Version**: 0.2.8-alpha` → `**Version**: 0.2.9-alpha`).

### 5. Changelog Update
- Add a changelog entry to `CHANGELOG.md` under the active version documenting the reprocessed individual, schema migration of the `Process Count` column, and specific section/appendix additions in `README.md`.

### 6. Release Management Policy
- Do NOT run `git tag` or `git push`. Tagging and release deployment remain isolated to `prompts/release_and_tag.md`.
