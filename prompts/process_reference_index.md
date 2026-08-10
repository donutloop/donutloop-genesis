# Instructions: Iterative Reference Index Processing & Paper Enrichment

## Context
The Genesis Mission repository maintains a comprehensive coverage report [`reference_coverage.md`](../reference_coverage.md) featuring a **Master Reference Link Index** of all 340 external reference sources compiled in `references.md`. To systematically digest these resources and continuously elevate the authority of the flagship research papers (`README.md` and `README.de.md`), this workflow iteratively inspects unprocessed reference entries, extracts high-value technical/strategic insights, enriches the documentation, and maintains index state tracking.

## Task
Process the next `Unprocessed` entry in `reference_coverage.md` (starting from Entry #1), extract meaningful scientific, architectural, or strategic details, incorporate those insights into `README.md` and `README.de.md`, update the coverage status index, bump project versioning, update `CHANGELOG.md`, and publish a Git release.

## Execution Rules

### 1. Strict Content Manipulation Policy
- **Merge and Extend Only:** NEVER overwrite, wipe out, or completely replace existing document content.
- **Additive Updates:** Seamlessly integrate and append extracted insights into the existing structure while preserving all current facts and context.
- **Strict Single-Link Limit:** Process strictly **one (1)** link/entry per execution prompt—never two or more at a time—even if this instructions prompt is executed in a continuous loop.
- **Single Commit Rule:** Exactly **one (1)** Git commit per processed link, regardless of multiple prompt triggers.
- **Prohibited Phrasing:** Never write the exact string `- extension` anywhere in commit messages, version tags, changelogs, or documentation updates.

### 2. Locate Next Unprocessed Reference Entry
- Read `reference_coverage.md` Section 4 (*Master Reference Link Index*).
- Identify the **first entry** (starting from Entry #1 downwards) where the `Status` column is set to `Unprocessed`.
- Extract the entry metadata: Index `#`, Category/Section, Entity/Subject, Title, Host Domain, Resource Type, URL, and current Status.

### 3. Content Analysis & Insight Extraction
- Inspect or retrieve the target reference content (via web search/URL inspection tools or title/context analysis).
- Extract concrete, high-authority information, such as:
  - Hardware specifications, supercomputing node counts, liquid cooling, interconnect fabrics.
  - Quantum modalities, qubit counts, fault-tolerance milestones, quantum foundry investments.
  - Scientific AI models, domain-specific foundation models, automated lab orchestration platforms.
  - Federal funding amounts, agency MOUs, CHIPS Act incentives, or strategic executive directives.

### 4. Enrich Research Papers (`README.md` & `README.de.md`)
- **English Paper (`README.md`):** Merge extracted insights into the relevant section (e.g., `§2 Technical Architecture`, `§3 Institutional Framework`, `§4 Governance & Permitting`, or `Appendix A`).
- **German Parity (`README.de.md`):** Apply identical structural and technical updates to `README.de.md` to ensure complete language parity.
- **Quality Standard:** Only add meaningful, factual technical and strategic details. Avoid generic prose or placeholder text.

### 5. Update Index Status in `reference_coverage.md`
- **Row Status Update:** Change the target entry's `Status` column from `Unprocessed` to `Processed`.
- **Metrics Recalculation:** Update Section 1 (*Executive Summary & Key Metrics*) `Processing Status` row to reflect the new count of processed vs. unprocessed links (e.g., `1 / 340 Processed (339 Unprocessed)`).

### 6. Strict Deduplication & Abort Policy
- If during analysis or editing any duplicate link or reference is detected, the AI **MUST IMMEDIATELY ABORT** the execution, revert pending edits, and report the duplication to the user.

### 7. Version Bump & Changelog Update
- **Version Bump:** Increment the patch version on line 1 of both `README.md` and `README.de.md` (e.g., `1.0.6` → `1.0.7`).
- **Changelog Entry:** Add a new release section in `CHANGELOG.md` documenting:
  - The processed reference link (Index `#`, Title, and Domain).
  - The specific paper sections enriched with new technical facts.
  - The updated index status in `reference_coverage.md`.

### 8. Release Management Policy
- **Outsourced Tagging:** Do NOT execute `git tag` or `git push` commands directly during this workflow prompt. Release tagging and publishing are outsourced to [`prompts/release_and_tag.md`](./release_and_tag.md) and should only be performed when a release step is explicitly requested by the user.