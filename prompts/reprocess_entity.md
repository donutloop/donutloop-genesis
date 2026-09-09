# 🧬 Genesis Mission — Entity Reprocessing & Version Control Protocol

> **Purpose:** Systematically reprocess a target entity across the repository's bilingual documentation, using the existing scope restrictions and filters, while maintaining strict synchronization, reference integrity, and version control.

## ⚙️ Execution Rules

### 0️⃣ Scope, Files & Filters — Mandatory

Work **only** with the following repository files:

* `README.md` — Primary English documentation
* `README.de.md` — German counterpart
* `reference_coverage.md` — Tagged Master Reference Link Index
* `coverage.md` — Entity tracking & metrics
* `CHANGELOG.md` — Version history

The following existing filters and restrictions remain mandatory:

* **Do NOT read or traverse `child_papers/`.**
* Analysis and source extraction are restricted to the **top-level parent document** and permitted primary sources.
* In `reference_coverage.md`, extract and process URLs from the **entire `Link` column**, not only links already tagged for the target entity.
* Use the existing **entity tags** in `reference_coverage.md` to identify the target entity's relevant references once the links have been processed.
* Preserve the existing taxonomy and filters for:

  * `company:<Name>`
  * `university:<Name>`
  * `lab:<Name>`
* Do not invent tags for ambiguous entities.
* Maintain strict bilingual synchronization between `README.md` and `README.de.md`.

No additional repository files should be modified unless they are directly required by the existing protocol.

---

## 1️⃣ Reprocessing Workflow

Complete all normal reprocessing work first:

1. Read and process the permitted source material.
2. Extract and classify entities using the existing tagging taxonomy.
3. Update `reference_coverage.md`.
4. Update `coverage.md`, including `Process Count`, status, metadata, and metrics.
5. Update the target entity in both `README.md` and `README.de.md`.
6. Apply the existing global-reference and appendix requirements.
7. Increment the version synchronously in both README files.
8. Update `CHANGELOG.md`.
9. Complete all other normal reprocessing requirements.

**Do not perform the final audit yet.**

---

# 🔍 FINAL STEP — Audit & Dead-Link Cleanup

> **The audit MUST be performed as the final step of the entire workflow. No full audit or dead-link cleanup should be performed before all normal reprocessing changes are complete.**

Only after steps 1–9 are finished:

### A. Run the final audit

Audit the resulting state of the files:

* `README.md`
* `README.de.md`
* `reference_coverage.md`
* `coverage.md`
* `CHANGELOG.md`

Verify:

* Existing and newly added factual claims.
* Primary-source citations.
* Bilingual synchronization.
* Entity tags and filtering.
* Process counts and metrics.
* Version numbers.
* Changelog entries.
* Reference integrity.
* Compliance with the `child_papers/` restriction.

### B. Detect dead links

Check the URLs that are actually present in the resulting documentation.

If a link returns **HTTP 404 / Not Found**:

* Treat it as a dead link.
* Remove that dead link from **all documents where it appears**.
* Do not leave the 404 URL in another repository file.
* Do not guess a replacement URL.
* Only replace it if a new destination can be independently verified as the correct authoritative source.

### C. One isolated Git commit per dead link

**Every individual dead link must receive its own isolated Git commit.**

For example, if these three URLs are dead:

```text
https://example.com/dead-a
https://example.com/dead-b
https://example.com/dead-c
```

create three separate commits:

```text
chore: remove dead link example.com/dead-a
chore: remove dead link example.com/dead-b
chore: remove dead link example.com/dead-c
```

If the **same dead URL occurs in multiple files**, remove all occurrences in those files within **one commit for that URL**.

Do **not** combine different dead URLs into the same commit.

Each dead-link commit must contain only the changes necessary to remove that specific dead link and its directly associated reference metadata.

### D. Final verification

After all isolated dead-link commits have been created:

* Verify that no identified 404 URLs remain.
* Verify that every dead link has exactly one dedicated commit.
* Verify that dead-link commits contain no unrelated changes.
* Verify `README.md` and `README.de.md` remain synchronized.
* Verify the existing filters and entity-tag structure remain intact.
* Verify the five designated files remain internally consistent.
* Do not modify or inspect `child_papers/`.
* Do **not** run `git tag`.
* Do **not** run `git push`.

> **Critical ordering rule:** The audit is the **last processing step**. Finish all entity reprocessing, filtering, tagging, documentation, versioning, and changelog work first. Only then audit the final repository state, remove 404 links, create one isolated commit per dead link, and perform the final verification.
