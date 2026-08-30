# Instructions: Expanding Key Individual Coverage and Leadership Integration

## Context
The Genesis Mission repository maintains a central research paper (`README.md`), a curated reference index (`references.md`), and an ecosystem coverage tracker (`coverage.md`). When documenting key individuals (e.g., scientific directors, federal advisors, consortium leads, or principal investigators) involved in the Genesis Mission ecosystem, updates must be systematically applied across all three files, creating any missing dedicated sections where necessary to maintain documentation integrity.

## Task
Systematically document a target individual's leadership, scientific, and strategic role within the Genesis Mission ecosystem by updating `README.md` (creating dedicated leadership sections if missing), preserving references in `references.md`, updating `coverage.md`, and incrementing the project version.

## Execution Rules

### 1. Integrate Individual Profile in `README.md`
- **Section §3.5 Leadership & Scientific Direction (Create if Missing):** Check if `### 3.5 Key Leadership & Scientific Direction` (or designated individual subsection) exists. If missing, create the section header under `## 3. Governance, Ecosystem & Implementation`.
- **Detailed Profile:** Add a dedicated entry for the individual structured with bold sub-bullets detailing:
  - **Role & Institutional Affiliation:** Current title, federal advisory appointments, national lab assignments, or consortium steering committees.
  - **Strategic & Scientific Contributions:** Specific research areas, policy contributions, architectural oversight, or quantum/AI initiative leadership.
- **Appendix A.4 Leadership & Key Contributors (Create if Missing):** Ensure an appendix table `### A.4 Leadership & Scientific Personnel` exists. If missing, create the table with columns `| Name | Role | Primary Affiliation | Focus Area |` and insert the target individual's entry.

### 2. Preserve References in `references.md`
- **Link Integrity:** Verify and retain all official bios, appointment announcements, speeches, congressional testimonies, and white papers in `references.md` under `## 2. Collaborators` and `## 4. Executive, Federal & Partner Announcements`.
- **Append Sourced Profiles:** Add newly verified external links, personal publications, or institutional profile links without removing existing reference URLs.

### 3. Update Ecosystem Coverage Tracker (`coverage.md`)
- **Key Individuals Table (Create if Missing):** Check if the `Key Individuals` or `Leadership & Scientific Direction` tracking table exists. If missing, create the table matching the standard schema (`| Process Count | Individual | Affiliation | Status | Paper Section | Notes |`).
- **Status Upgrade:** Change the individual's row status from `📋 Brief Mention` to `✅ Full Profile`, update the `Paper Section` column (e.g., `§3.5, A.4`), and summarize key leadership focus in `Notes`.
- **Metrics Recalculation:** Recalculate and update both summary tables:
  - **By Entity Type:** Increment `✅ Full` and decrement `📋 Brief` for the Key Individuals category (adding the category row if newly introduced).
  - **By Coverage Level:** Update the total `✅ Full Profile` and `📋 Brief Mention` counts and percentages.
  - **Footnote:** Update the total profile count in the closing note.

### 4. Version Increment
- **Version Bump:** Increment the patch version string on line 1 of `README.md` (e.g., `**Version**: 0.2.7-alpha` → `**Version**: 0.2.8-alpha`).

### 5. Changelog Update
- **Changelog Entry:** Update `CHANGELOG.md` under the active release version section to log the added/expanded individual profile, creation of any new leadership sections/tables, status upgrade in `coverage.md`, and corresponding section updates in `README.md`.

### 6. Release Management Policy
- **Outsourced Tagging:** Do NOT execute `git tag` or `git push` commands directly during this workflow prompt. Release tagging and publishing are outsourced to [`prompts/release_and_tag.md`](./release_and_tag.md) and should only be performed when a release step is explicitly requested by the user.
