# Instructions: Single-Pass URL Reference Processing, Enrichment & Git Release

## Context
The Genesis Mission repository maintains a curated reference database ([`references.md`](../references.md)), a master audit report ([`reference_coverage.md`](../reference_coverage.md)), an entity coverage matrix ([`coverage.md`](../coverage.md)), and flagship research papers ([`README.md`](../README.md) and [`README.de.md`](../README.de.md)). 

This workflow unifies link formatting, master index registration, web content extraction, research paper enrichment, coverage matrix audit, semantic versioning, and Git commit/tag creation into a single end-to-end pipeline for any provided target URL parameter.

## Input Parameter
The workflow receives a single URL parameter supplied via prompt invocation:
`URL parameter is <URL>`

---

## Execution Rules & Pipeline Workflow

### 1. Target Input & Strict Deduplication Check
- Extract the target `<URL>` from the input prompt parameter.
- **Strict Deduplication Check:** Search `references.md` and `reference_coverage.md` for the exact URL or canonical path.
  - If the URL is found to be a **duplicate** of an existing entry, **ABORT IMMEDIATELY**, revert any pending edits, and report the existing location to the user.

### 2. Content Inspection & Insight Extraction
- Inspect or retrieve the target reference content (using URL content inspection or web search if access is restricted).
- Extract concrete, high-authority technical and strategic facts, such as:
  - Hardware specifications, supercomputing node counts, liquid cooling, interconnect fabrics.
  - Quantum modalities, qubit counts, fault-tolerance milestones, quantum foundries.
  - Scientific AI foundation models, automated lab orchestration platforms, robotics workflows.
  - Federal funding allocations, agency MOUs, CHIPS Act incentives, or executive directives.

### 3. Format & Integrate into `references.md`
- Identify the correct section in `references.md` (e.g., Section 2 *Collaborators*, Section 4 *Executive, Federal & Partner Announcements*, Section 5 *National Labs & University Coverage*, etc.).
- Format the entry according to repository standards:
  - Standard reference: `* [Title](URL)`
  - Partner/Entity reference: `* [Entity Name](URL): [Title](URL) - Description`
- Insert the formatted entry under its corresponding category/header in `references.md`.

### 4. Coverage Matrix Audit (`coverage.md`)
- Check if the reference introduces an entity (company, university, laboratory, or organization) not currently listed in `coverage.md`.
- If new entities are present:
  1. Add each entity to the appropriate section of `coverage.md` with status `❌ Not Covered` and note `(reference only)`. Always append new entries to the bottom of the table to avoid large updates.
  2. Update all summary tables ("By Entity Type", "By Coverage Level", and header metrics).

### 5. Register & Update Master Index (`reference_coverage.md`)
- Register the newly added reference link in Section 4 (*Master Reference Link Index*) of `reference_coverage.md`:
  - Assign Category/Section, Entity/Subject, Title, Host Domain, Resource Type, URL, and set `Status` to **`Processed`**. Always append new entries to the bottom of the table to avoid large updates.
- **Executive Summary Metrics Sync:** Update all Section 1 metrics (Total Links, Web Portals/PDFs, Processing Status `N / N Processed`), Section 2 distribution table (counts and share percentages), and Section 3 top domain counts.

### 6. Enrich Research Papers (`README.md` & `README.de.md`)
- **English Paper (`README.md`):** Seamlessly merge extracted technical/strategic insights into the relevant section (e.g., §2 Technical Architecture, §3 Institutional Framework, §4 Governance, or Appendix).
- **German Parity (`README.de.md`):** Apply complete language-parity updates to `README.de.md` with identical structural and factual depth.
- **Merge Only:** NEVER overwrite or erase existing document content; append and integrate additively.

### 7. Version Bump & Changelog Synchronization
- **Version Bump:** Increment only the patch version string on line 1 of both `README.md` and `README.de.md` (e.g., `**Version**: 2.4.10` → `**Version**: 2.4.11`).
- **Headline Preservation Rule:** Do not modify the main document headline while updating the version. Keep the blank line after the version and leave line 3 in both files unchanged.
- **Changelog Format Hint:** Stop reading `CHANGELOG.md` after seeing the first entry; this is sufficient to understand the changelog format and saves tokens.
- **Changelog Entry:** Add a new release section `## [X.Y.Z] - YYYY-MM-DD` in `CHANGELOG.md` logging:
  - The processed reference link (Title, Host Domain).
  - Specific paper sections enriched.
  - The updated index completion ratio (**N / N Processed, 100% Complete**).

### 8. Create Understandable Git Commit & Tag
- Stage all modified repository files:
  `git add .`
- Generate a clear, human-understandable, and descriptive Git commit message following Conventional Commits format:
  ```bash
  git commit -m "feat(ref): process <Entity/Title> (<Domain>)

  - Integrated reference link into references.md under <Section Header>
  - Registered & processed Master Index Entry in reference_coverage.md
  - Enriched §<Section> in README.md and README.de.md with <key technical detail>
  - Bumped version string to vX.Y.Z and updated CHANGELOG.md"
  ```
- Create an annotated release tag matching the incremented version:
  ```bash
  git tag -a vX.Y.Z -m "Release vX.Y.Z: Processed <Title> (<Domain>)"
  ```
- **Remote Push Rule:** Execute `git push origin main vX.Y.Z` when remote publishing is requested or configured.
