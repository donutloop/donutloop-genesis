# 🧬 Genesis Mission — Entity Reprocessing & Version Control Protocol

> **Purpose:** Systematically reprocess a target entity across the repository's bilingual documentation, using the existing scope restrictions, entity taxonomy, and filters, while maintaining strict synchronization, reference integrity, and version control.

---

## 🔒 0️⃣ Branch Restriction — Mandatory

All Genesis Mission work MUST be performed **only on the `main` branch**.

* Do NOT switch to, inspect, merge from, or modify any other branch.
* Do NOT create feature, working, temporary, or detached branches.
* All reprocessing, documentation updates, auditing, and dead-link cleanup must be performed on `main`.
* Do NOT run `git tag`.
* Do NOT run `git push`.

---

## ⚙️ 1️⃣ Scope, Files & Filters — Mandatory

Work **only** with the following repository files:

* `README.md` — Primary English documentation
* `README.de.md` — German counterpart
* `reference_coverage.md` — Tagged Master Reference Link Index
* `coverage.md` — Entity tracking & metrics
* `CHANGELOG.md` — Version history

The following restrictions are mandatory:

* **Do NOT read, inspect, traverse, or process `child_papers/`.**
* Analysis and source extraction are restricted to the **top-level parent document** and explicitly permitted primary sources.
* Do not inspect additional repository files unless they are directly required by this protocol.
* Do not modify additional repository files unless they are directly required by the existing protocol.

### Existing Entity Taxonomy

Preserve and use the existing taxonomy and filters:

* `company:<Name>`
* `university:<Name>`
* `lab:<Name>`

Do not invent, rename, or alter tags.

Do not create tags for ambiguous entities.

---

## 🔎 2️⃣ Reference Filtering — Mandatory Before Source Processing

When processing `reference_coverage.md`, the **entire `Link` column MUST be read and filtered using the existing entity taxonomy and filters before source material is processed**.

The workflow MUST be:

1. Read the URLs from the **entire `Link` column** of `reference_coverage.md`.
2. Apply the repository's existing entity tags and filters:

   * `company:<Name>`
   * `university:<Name>`
   * `lab:<Name>`
3. Identify the references relevant to the target entity using those existing tags and filters.
4. Process only the filtered, permitted references relevant to the target entity, together with the permitted top-level parent document and explicitly permitted primary sources.
5. Preserve all existing entity tags and filtering structure.
6. Do not infer or invent a tag solely because a URL appears potentially related to the target entity.
7. Do not process links merely because they appear in the `Link` column if they are excluded by the existing filters.
8. Do not traverse `child_papers/` under any circumstances.

### Important distinction

> **Read the entire `Link` column → apply the existing entity filters/taxonomy → identify the target entity's relevant permitted references → process only those filtered references.**

The requirement to read the entire `Link` column does **not** mean that every link must be processed as source material. The existing filters determine which references are relevant for entity reprocessing.

---

# 🔄 3️⃣ Reprocessing Workflow

Complete **all normal reprocessing work first**.

**Do NOT perform the final audit or dead-link cleanup until every step below has been completed.**

### Step 1 — Read and Process Permitted Source Material

* Process the permitted top-level parent document.
* Process the references identified through the filtering procedure in `reference_coverage.md`.
* Use only permitted primary sources.
* Do not read or traverse `child_papers/`.
* Extract factual information relevant to the target entity.

### Step 2 — Extract and Classify Entities

Extract entities using the existing tagging taxonomy:

* `company:<Name>`
* `university:<Name>`
* `lab:<Name>`

Apply existing filters consistently.

Do not invent tags for ambiguous entities.

### Step 3 — Update `reference_coverage.md`

* Process the entire `Link` column as specified above.
* Apply the existing filters and entity tags.
* Add or update the target entity's relevant references.
* Preserve the existing structure, taxonomy, tagging conventions, and reference metadata.
* Do not remove valid references merely because they were not previously tagged.
* Do not add unsupported or speculative entity tags.

### Step 4 — Update `coverage.md`

Update the target entity's tracking information, including where applicable:

* `Process Count`
* status
* metadata
* reference metrics
* coverage metrics
* other existing entity-tracking fields required by the repository's established format

Keep the existing structure and conventions intact.

### Step 5 — Update `README.md`

Update the target entity in the primary English documentation.

Ensure:

* factual claims are supported by permitted sources;
* relevant primary-source references are included;
* entity references are consistent with `reference_coverage.md`;
* existing global-reference requirements are preserved;
* required appendix/reference material is updated;
* the target entity's information reflects the newly processed sources.

### Step 6 — Update `README.de.md`

Update the German counterpart to correspond exactly to the English documentation.

Maintain strict bilingual synchronization in:

* entity information;
* factual claims;
* references;
* relevant metrics;
* structure;
* version number;
* appendix/global-reference requirements.

The German document must represent the same underlying information as `README.md`, translated appropriately rather than independently diverging from it.

### Step 7 — Apply Global-Reference and Appendix Requirements

Apply all existing repository requirements concerning:

* global references;
* reference placement;
* appendices;
* entity-reference sections;
* cross-document consistency.

Do not introduce a new taxonomy or reference structure.

### Step 8 — Increment Version Synchronously

Increment the version in:

* `README.md`
* `README.de.md`

The version must be identical in both files.

Do not leave the two README files at different versions.

### Step 9 — Update `CHANGELOG.md`

Add the appropriate version-history entry describing the completed entity reprocessing.

The changelog entry must accurately reflect the changes actually made.

---

# ⛔ 4️⃣ Critical Ordering Rule

The following actions MUST NOT happen before Steps 1–9 are complete:

* full repository audit;
* final reference audit;
* dead-link cleanup;
* dead-link commits.

**Finish all entity reprocessing, filtering, tagging, documentation, metrics, versioning, appendix/global-reference work, and changelog work first.**

Only then proceed to the final audit.

---

# 🔍 5️⃣ FINAL STEP — Audit & Dead-Link Cleanup

The audit MUST be the **final processing phase of the entire workflow**.

After Steps 1–9 are completely finished, audit the resulting state of exactly these five designated files:

* `README.md`
* `README.de.md`
* `reference_coverage.md`
* `coverage.md`
* `CHANGELOG.md`

## A. Final Audit

Verify:

* existing factual claims;
* newly added factual claims;
* primary-source citations;
* bilingual synchronization;
* entity tags;
* entity filtering;
* `Process Count`;
* status and metadata;
* coverage metrics;
* version numbers;
* changelog entries;
* reference integrity;
* global-reference requirements;
* appendix requirements;
* consistency between the five designated files;
* compliance with the `child_papers/` restriction;
* compliance with the `main`-branch restriction.

Do not inspect or traverse `child_papers/`.

---

# 🔗 6️⃣ Dead-Link Detection

Check the URLs that are **actually present in the resulting documentation**.

The dead-link audit applies to URLs appearing in:

* `README.md`
* `README.de.md`
* `reference_coverage.md`
* `coverage.md`
* `CHANGELOG.md`

If a URL returns **HTTP 404 / Not Found**, treat it as a dead link.

### Dead-Link Rules

For every confirmed 404 URL:

* Remove that dead URL from **all designated documents where it appears**.
* Do not leave the same 404 URL elsewhere in the repository's designated files.
* Do not guess a replacement URL.
* Only replace a dead URL if the new destination can be independently verified as the correct authoritative source.
* Preserve the surrounding valid reference metadata where possible.
* Do not make unrelated changes as part of a dead-link cleanup commit.

---

# 🧹 7️⃣ One Isolated Git Commit Per Dead Link

**Every individual dead URL MUST receive its own isolated Git commit.**

For example, if these URLs are confirmed dead:

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

### Commit Rules

* One dead URL = exactly one dedicated commit.
* If the same dead URL occurs in multiple designated files, remove all occurrences in those files within **one commit for that URL**.
* Never combine different dead URLs into the same commit.
* Each dead-link commit must contain only:

  * removal of that specific dead URL;
  * directly associated reference metadata that must be removed because of that URL.
* Do not include unrelated documentation, versioning, formatting, or entity changes in a dead-link commit.

The normal entity-reprocessing changes must already be complete before the dead-link commits begin.

---

# ✅ 8️⃣ Final Verification

After all isolated dead-link commits have been created, perform the final verification.

Verify:

1. No identified 404 URLs remain in the designated documentation.
2. Every identified dead URL has exactly one dedicated Git commit.
3. No dead-link commit contains unrelated changes.
4. `README.md` and `README.de.md` remain synchronized.
5. Their version numbers remain identical.
6. Existing entity filters remain intact.
7. Existing entity-tag structure remains intact.
8. `Process Count`, status, metadata, and metrics remain consistent.
9. `reference_coverage.md` remains consistent with the README references.
10. `CHANGELOG.md` accurately reflects the completed work.
11. The five designated files remain internally consistent.
12. No `child_papers/` content was inspected or traversed.
13. All work remains on the `main` branch.
14. No `git tag` command was run.
15. No `git push` command was run.

---

# 🚨 9️⃣ Absolute Restrictions

At no point during this workflow:

* Do NOT inspect or traverse `child_papers/`.
* Do NOT use another Git branch.
* Do NOT create another Git branch.
* Do NOT process unfiltered `reference_coverage.md` links as entity sources.
* Do NOT ignore the entire `Link` column when filtering.
* Do NOT invent entity tags.
* Do NOT alter the existing taxonomy.
* Do NOT create unsupported replacements for dead URLs.
* Do NOT combine different dead links into one commit.
* Do NOT perform the final audit before all normal reprocessing changes are complete.
* Do NOT run `git tag`.
* Do NOT run `git push`.

## Final Required Order

The complete operation MUST follow this order:

**`main` branch → read entire `Link` column → apply existing entity filters → identify permitted target references → process permitted sources → extract/classify entities → update `reference_coverage.md` → update `coverage.md` → update `README.md` → update `README.de.md` → apply global references/appendices → synchronize version → update `CHANGELOG.md` → complete all normal reprocessing → ONLY THEN perform final audit → detect 404s → remove each dead URL → create one isolated commit per dead URL → final verification.**
