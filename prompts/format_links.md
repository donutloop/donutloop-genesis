# Instructions: Processing `references.md`

## Context
The file `references.md` contains a temporary `WIP` section at the bottom with raw, unformatted links and data. 

## Task
Process all entries from the `WIP` section and integrate them into their correct existing locations throughout `references.md`.

## Execution Rules
- **Scope:** Process ONLY items currently listed in the `WIP` section. Do NOT add external links, new URLs, or extra data.
- **Deduplication & Skip Policy:** Check every link in the `WIP` section against existing entries in `references.md`. If ANY link in `WIP` is found to be a duplicate of an existing entry, **skip the duplicate entry**. Process all other valid, non-duplicate links normally, increment version strings in `README.md` and `README.de.md`, update `CHANGELOG.md`, create a Git release tag if applicable, and report any skipped duplicate URLs and their existing locations directly to the user without removing them.
- **Coverage Check (MANDATORY):** After integrating WIP entries into `references.md`, check if any newly integrated links introduce entities (companies, universities, labs, organizations) that do **not** already appear in `coverage.md`. If new entities are found:
  1. Add each new entity to the correct section of `coverage.md` (e.g., "Cloud, AI & Compute Infrastructure", "Research Universities", etc.) with status `❌ Not Covered` and a brief note like `(reference only)`.
  2. Renumber all subsequent rows in the affected section and in "Additional Academic & Research Organizations".
  3. Update **all** summary tables: "By Entity Type" totals, "By Coverage Level" counts and percentages, and the header scope/status lines at the top of the file.
  4. This step is **not optional** — every run of this workflow must verify `coverage.md` is synchronized.
- **Coverage Reference Check (MANDATORY & STRICT UNPROCESSED RULE):** After integrating WIP entries into `references.md`, extend `reference_coverage.md` to include every newly added link:
  1. **STRICT UNPROCESSED MANDATE:** Add new index rows to the master reference link table in `reference_coverage.md` with sequential numbering and **EXPLICITLY `Unprocessed` status**.
     > [!CRITICAL]
     > **NEVER MARK NEWLY INTEGRATED WIP LINKS AS `Processed` IN `reference_coverage.md` DURING THIS WORKFLOW.**
     > This workflow's sole responsibility is formatting, deduplication, and registering raw link stubs into `reference_coverage.md` as `Unprocessed` (and `coverage.md` as `❌ Not Covered`). The actual paper enrichment, deep insight extraction, and status transition from `Unprocessed` -> `Processed` is strictly reserved for [`process_reference_index.md`](./process_reference_index.md).
  2. **Row Sequential Renumbering:** Renumber all subsequent rows across all sections of `reference_coverage.md` to maintain a continuous, unbroken sequence from 1 to N.
  3. **Executive Summary Metrics Sync:** Update all executive summary metrics in Section 1 of `reference_coverage.md`: total reference links, unique target domains, web portals & press releases count, section distribution table (link counts, share percentages), and the **Processing Status ratio** (e.g., `384 / 387 Processed (3 Unprocessed, 384 Processed)`).
- **Version Update:** Increment the patch version string on line 1 of `README.md` (e.g., `**Version**: 0.2.9-alpha` → `**Version**: 0.2.10-alpha`) whenever documentation updates are integrated.
- **Changelog Update:** Update `CHANGELOG.md` under the active release version section to log the processed WIP reference integrations, deduplication results, and scratchpad decommissioning.
- **Release Management Policy:** Do NOT execute `git tag` or `git push` commands directly during this workflow prompt. Release tagging and publishing are outsourced to [`prompts/release_and_tag.md`](./release_and_tag.md) and should only be performed when a release step is explicitly requested by the user.

- **Structure:** Preserve the existing section hierarchy. Do NOT create, delete, or rename any headers or sections.
- **Formatting:** Keep the exact formatting style of the target sections. 
- **Output:** Output ONLY the updated content for `references.md`. Do not include conversational filler, explanations, or meta-commentary.

Formatting templates:
```
* [Company Name](URL): [Product Name] - [Description of how it relates to the Genesis Mission]
```

Formatting example:

```
* [IBM](https://www.ibm.com): [IBM Quantum System Two](https://www.ibm.com/quantum) - IBM's quantum computing platform, which is being used to develop quantum algorithms for scientific research.
```
