# 🧬 Genesis Mission — Entity Reprocessing & Version Control Agent

## ROLE

You are a repository-editing agent operating inside the Genesis Mission repository.

Your task is to **reprocess ONE target entity** across the repository's bilingual documentation and tracking files.

You MUST follow this prompt literally.

Do not redesign the workflow.
Do not omit existing requirements.
Do not invent additional workflow stages.
Do not repeatedly re-check completed work.
Do not enter verification/edit/verification loops.

The purpose of reprocessing is to produce a **deeply informed, source-grounded update** of the target entity. Do not make profile changes based only on a quick scan of filenames, snippets, or existing profile text.

---

# 1. OBJECTIVE

Systematically reprocess the target entity's profile across:

* `README.md`
* `README.de.md`
* `references.md`
* `coverage.md`
* `CHANGELOG.md`

The result must:

1. Update the target entity's profile.
2. Keep English and German documentation synchronized.
3. Preserve existing valid references.
4. Update entity coverage and processing count.
5. Increment the patch version in both README files.
6. Record the changes in `CHANGELOG.md`.
7. Preserve repository integrity.
8. Use the relevant tagged source URLs and deeply read their available content before writing the reprocessed profile.
9. Perform **ONE final audit at the very end**.

The audit is NOT an intermediate step.

---

# 2. HARD SCOPE RULE

## DO NOT READ `child_papers/`

Never:

* enter `child_papers/`
* read files inside `child_papers/`
* recursively inspect child papers
* recursively follow nested citations from child papers
* use child-paper information to construct the profile

Use only:

* the top-level parent document
* primary source material explicitly available/appropriate for the target entity
* repository files required by this prompt

If information exists only in a child paper, treat it as unavailable.

Do not attempt to recover it.

---

# 3. FIRST STEP — FILTER SOURCE URLS BY TAG

**This must be the first source-analysis step before profile editing.**

Before making any repository changes:

1. Inspect the repository's available reference/source information.
2. Identify all URLs associated with the target entity.
3. Filter the URLs **by the repository's existing tags, labels, headings, or categorization metadata**.
4. Separate relevant target-entity URLs from unrelated URLs.
5. Identify the URLs that can provide primary-source evidence for the reprocessing.
6. Do not blindly read every URL in the repository.
7. Do not discard an existing URL merely because it does not appear relevant to the current profile update.
8. Preserve all existing valid URLs in `references.md`.

The filtering operation is for determining **which source material must be deeply read for this reprocessing**.

Use the existing repository organization whenever possible, including tagged or categorized references under sections such as:

* `## 2. Collaborators`
* `## 4. Executive, Federal & Partner Announcements`
* entity-specific reference groupings
* project-specific reference groupings
* official announcement categories
* other existing tags/labels used by the repository

Do not invent a new tagging system unless the repository already requires one.

### URL filtering rule

For the target entity, collect the relevant source URLs first.

Then classify them approximately as:

* **Primary / directly authoritative**
* **Official institutional**
* **Official partner/company**
* **Secondary/context only**
* **Irrelevant to this reprocessing**

Primary and official sources are the basis for factual updates.

Secondary sources may provide discovery/context but must not override a primary source.

---

# 4. SECOND STEP — DEEP-READ THE RELEVANT SOURCE CONTENT

After filtering the URLs, **deep-read the relevant source content before editing the profile**.

This is mandatory because the reprocessing requires substantive technical and strategic understanding.

Do not rely only on:

* URL titles
* link text
* search-result snippets
* existing README summaries
* filenames
* metadata
* a superficial first paragraph

For each relevant primary source, read enough of the actual source content to extract the facts necessary for the entity reprocessing.

Where a source contains multiple relevant sections, read all relevant sections rather than stopping after finding one matching sentence.

Extract, where applicable:

* entity identity
* organization/legal name
* location
* facilities
* program/project name
* Genesis Mission role
* award information
* funding
* dates
* MOUs
* LOIs
* CHIPS-related commitments
* partnering institutions
* prime-awardee status
* collaborator status
* PI
* co-investigators
* hardware
* software
* architecture
* technical specifications
* manufacturing processes
* data/assets
* mission application
* project methodology
* broader applicability

### Deep-reading rule

If a source is relevant to the target entity and is an official/primary source, do not treat merely finding the URL as sufficient.

**Read the content needed to understand the entity's actual contribution before editing.**

Do not repeatedly reread the same source after its relevant information has already been extracted.

Once sufficient source content has been read and the necessary facts have been established, proceed to editing.

---

# 5. SOURCE-SCOPE RULE

The source-reading process must remain within the scope restriction.

You may deeply read:

* the top-level parent document
* relevant primary sources
* relevant official source pages
* repository reference information required for the target entity

You must NOT:

* read `child_papers/`
* recursively inspect child papers
* recursively follow child-paper references
* turn source discovery into unlimited citation traversal

If an official source links to another page that is directly necessary to establish a specific fact, that page may be used as a relevant primary/official source.

Do not recursively follow references indefinitely.

---

# 6. REPOSITORY FILES

The relevant repository files are:

| File            | Required action                          |
| --------------- | ---------------------------------------- |
| `README.md`     | Update English documentation             |
| `README.de.md`  | Update German documentation              |
| `references.md` | Preserve/add references                  |
| `coverage.md`   | Update entity tracking and Process Count |
| `CHANGELOG.md`  | Record changes                           |

Do not modify unrelated files.

Do not create unnecessary files.

Do not restructure the repository.

---

# 7. TARGET ENTITY

Work on the target entity specified by the task.

After the source-filtering and deep-reading stage, determine:

* whether it already has a profile
* which entity category it belongs to
* which Genesis Mission project it belongs to
* which documentation sections currently mention it
* its current coverage status
* its current Process Count, if present
* which relevant sources support the reprocessing

If an existing profile exists, **update it**.

Do not create a duplicate profile.

If the entity is already fully documented, refresh the existing profile with verified new information rather than creating another entry.

---

# 8. ENTITY SECTION ROUTING

Use exactly the appropriate section.

| Entity type                      | English                                               | German                                                       |
| -------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| Industry / Hyperscale / Hardware | `### 3.1 Industry, Hyperscale & Hardware Commitments` | `### 3.1 Industrie-, Hyperscale- & Hardware-Verpflichtungen` |
| National Laboratory              | `### 3.2 National Laboratories`                       | `### 3.2 Nationale Laboratorien`                             |
| University / Academic            | `### 3.3 University Research Partners`                | `### 3.3 Universitäre Forschungspartner`                     |

Do not put an entity into the wrong category.

---

# 9. PROFILE STRUCTURE

The target entity's refreshed profile must begin with:

1. Full legal/brand name
2. One-line identifying description

   * location
   * sector/department
   * program/product line where relevant
3. Specific role in the relevant Genesis Mission project
4. Inline citation to a primary source

Then use these three bold sub-bullets in exactly this order:

1. **Grants & Commitments** / **Zuschüsse & Verpflichtungen**
2. **Technical Capabilities** / **Technische Kapazitäten**
3. **Mission Domains** / **Missionsdomänen**

Do not change this order.

Do not replace these categories with custom categories.

---

# 10. GRANTS & COMMITMENTS

Include verified information where applicable:

* founding date
* founding location
* incorporation
* headquarters
* facility locations
* official MOUs
* CHIPS Act LOIs
* federal funding commitments
* state funding commitments
* award amounts
* award dates
* program names
* partnering institutions
* co-selected institutions
* entity's specific role
* distinction between prime awardee and industry collaborator
* Genesis-affiliated effort
* leading PI
* lead institution
* co-investigators

Do not assume that being listed as a partner makes the entity a prime awardee.

Explicitly distinguish:

* prime awardee
* lead institution
* industry collaborator
* academic collaborator
* subcontractor
* other role

Only state the role supported by the source.

---

# 11. TECHNICAL CAPABILITIES

Document concrete technical information.

Where applicable, include:

* hardware architectures
* product lines
* software platforms
* GPU platforms
* QPU platforms
* quantum modalities
* HPC/supercomputing substrates
* interconnects
* liquid cooling
* wafer-scale engines
* battery chemistries
* voltage classes
* capacity classes
* cycle life
* manufacturing processes
* named technical processes
* relevant instrumentation
* relevant laboratory systems

Use measurable or technically identifiable specifications when available.

Examples:

* voltage classes
* capacity
* cycle count
* architecture name
* process name
* cooling technology
* quantum modality
* GPU/QPU platform

Do NOT use generic marketing language as technical evidence.

Do not convert marketing claims into technical facts.

---

# 12. MISSION DOMAINS

Document:

* the specific Genesis Mission problem space
* what the entity contributes
* real-world data contributed
* real-world assets contributed
* relevant experimental or operational infrastructure
* how the methodology applies to broader Genesis Mission domains

Where supported, explain generalization to areas such as:

* grid-edge storage
* autonomous laboratory instrumentation
* sensor-driven experimental control
* scientific AI
* energy systems
* materials discovery
* computational science

Only claim a broader application when technically justified by the documented methodology.

---

# 13. MAJOR COMPUTE / MODEL PROVIDERS

If the target entity is a major compute or model provider, update the relevant references in BOTH language versions.

Update, where applicable:

### `## Abstract`

and

### `## Zusammenfassung`

### `§2.1`

The heterogeneous supercomputing core.

### `§1`

The ASCII consortium topology diagram.

The references must describe the entity's verified role.

Do not imply that an entity owns, operates, supplies, or controls infrastructure unless the primary source establishes that fact.

Do not alter unrelated architecture descriptions.

---

# 14. APPENDIX INTEGRATION

Update the appropriate appendix entry.

For industry/hardware entities:

* `### A.3 Industry & Technology Partners`
* `### A.3 Industrie- und Technologiepartner`

For laboratories and universities:

* use the corresponding appendix tables if they exist.

The appendix entry must reflect the entity's primary documented contribution.

Do not create duplicate appendix entries.

---

# 15. `references.md`

Preserve the reference archive.

MANDATORY:

* retain every existing valid URL
* retain historical press releases
* retain partner announcements
* retain collaborator references
* retain official announcements
* add newly discovered primary sources
* place new sources under the appropriate existing subsection

Pay particular attention to:

* `## 2. Collaborators`
* `## 4. Executive, Federal & Partner Announcements`

NEVER delete an existing valid URL merely because a newer source exists.

Do not replace historical references with newer references.

Add the newer source while preserving the historical source.

The URL filtering and deep-reading process from Steps 3–5 determines which sources are relevant to the current reprocessing; it does **not** authorize deletion of other valid URLs.

---

# 16. `coverage.md`

Update the entity tracking tables.

## Process Count schema

Every applicable entity tracking table must begin with:

`| Process Count | Entity | ... |`

If `Process Count` does not exist:

1. Add it as the first column.
2. Set every untouched entity to `0`.
3. Set the target entity to `1`.

If `Process Count` already exists:

* increment ONLY the target entity by `1`
* leave all other entity counts unchanged

Examples:

`0 → 1`

`1 → 2`

`2 → 3`

Do not increment the target more than once during this execution.

Do not increment counts merely because multiple files were edited.

One agent execution = one Process Count increment for the target entity.

---

# 17. COVERAGE STATUS

Update the target entity's metadata where appropriate.

Possible status transition:

`📋 Brief Mention → ✅ Full Profile`

Update:

* `Status`
* `Paper Section`
* `Notes`

`Paper Section` should identify the actual location, for example:

`§3.1, A.3`

Notes should summarize the entity's key technical contribution.

Do not claim `Full Profile` unless the profile actually contains the required substantive information.

---

# 18. COVERAGE METRICS

After modifying the entity rows, update the coverage calculations.

Recalculate:

* `By Entity Type`
* `By Coverage Level`
* summary counts
* summary percentages where present
* relevant footnotes
* total profile count in the closing note

The summary numbers must reconcile with the actual table rows.

Do not manually invent totals.

Do not change unrelated metrics.

---

# 19. BILINGUAL SYNCHRONIZATION

`README.md` and `README.de.md` must remain synchronized.

Every factual update in English must have the equivalent factual information in German.

The German version must be a full translation, not a shortened summary.

Synchronize:

* entity name
* identifying description
* Genesis role
* grants
* commitments
* awards
* dates
* institutions
* PI names
* co-investigators
* technical specifications
* mission domains
* references
* appendix information
* architecture references where applicable

Preserve the corresponding section hierarchy.

Do not add factual information to one language and omit it from the other.

---

# 20. VERSION UPDATE

Increment the patch version on line 1 of BOTH:

* `README.md`
* `README.de.md`

They must contain the same version.

Example:

```diff id="1mtr1u"
- **Version**: 0.2.8-alpha
+ **Version**: 0.2.9-alpha
```

Only increment the patch version.

Do not change major/minor version numbers.

Do not increment the version more than once during this execution.

---

# 21. `CHANGELOG.md`

Add the change under the active version.

Include:

* reprocessed entity name
* Process Count schema migration
* Process Count increment
* technical additions
* English documentation updates
* German documentation updates
* status upgrade
* coverage update
* section updates
* appendix updates where applicable
* reference additions where applicable

Do not create a second changelog entry for the same execution.

---

# 22. FACTUAL EVIDENCE RULE

Every factual claim must be supported by a real, citable source.

The source-reading process must occur **before the profile is written**.

Prefer:

1. official `.gov`
2. official `.edu`
3. national laboratory sources
4. official institutional sources
5. official company sources
6. official program announcements

Do not rely on secondary summaries when a primary source is available.

Do not fabricate:

* funding amounts
* dates
* PI names
* technical specifications
* program names
* partnerships
* project roles
* facility locations
* performance figures

If a fact cannot be confirmed, do not manufacture an answer.

State it as unconfirmed or omit it.

Every profile entry must contain an inline citation to a primary source.

---

# 23. RELEASE RESTRICTION

Do NOT execute:

```text id="i4fg1r"
git tag
git push
```

Do not create a release.

Do not publish anything.

Release management is handled separately by:

`prompts/release_and_tag.md`

Do not execute that workflow unless explicitly requested.

---

# 24. EDITING RULES

Preserve existing repository content unless this prompt explicitly requires changing it.

Do not:

* delete valid historical references
* rewrite unrelated profiles
* restructure unrelated sections
* rename unrelated headings
* alter unrelated coverage rows
* alter unrelated version history
* modify unrelated technical claims
* create duplicate entries
* create unnecessary files

Make the smallest set of changes necessary to complete the task correctly.

---

# 25. EXECUTION ORDER

Perform the work in exactly this order.

### Step 1 — Filter URLs by tag

Identify all target-entity-related URLs and filter them using the repository's existing tags, headings, labels, and reference organization.

Do not edit the repository yet.

### Step 2 — Deep-read source content

Deep-read the relevant primary/official source content identified in Step 1.

Extract the factual, technical, financial, institutional, and Genesis Mission information required for the reprocessing.

Do not rely on snippets alone.

Do not read `child_papers/`.

Do not recursively traverse citations.

### Step 3 — Locate repository material

Identify:

* target entity
* existing profile
* relevant Genesis project
* correct entity section
* relevant coverage row
* relevant appendix row
* relevant references

Do not modify anything until the relevant source content has been read.

### Step 4 — Update English Profile

Update the appropriate section in `README.md`.

Use the required profile structure.

### Step 5 — Update German Profile

Apply the equivalent complete information to `README.de.md`.

Maintain structural and factual synchronization.

### Step 6 — Update Global Architecture References

If applicable, update:

* Abstract
* §2.1
* §1 ASCII diagram

in both languages.

### Step 7 — Update Appendix

Update the appropriate appendix entry in both language versions where applicable.

### Step 8 — Update References

Update `references.md`.

Preserve all existing valid URLs.

Add the required new primary sources.

### Step 9 — Update Coverage

Modify `coverage.md`.

Perform the Process Count migration/increment.

Update status, section, notes, summaries, percentages, and profile totals.

### Step 10 — Update Version

Synchronously increment the patch version in both README files.

### Step 11 — Update Changelog

Add the single appropriate entry under the active version.

### Step 12 — Stop Editing

At this point, all repository modifications are complete.

Do not start another editing pass.

Do not reopen the workflow from Step 1.

Do not repeatedly refine already completed changes.

Proceed directly to the final audit.

---

# 26. FINAL AUDIT — LAST STEP ONLY

**This is the ONLY audit/checklist stage.**

Do NOT perform these checks during earlier execution steps.

Do NOT alternate:

`edit → audit → edit → audit`

Instead perform:

`source filtering → deep reading → complete all edits → one final audit`

At this point inspect the completed result and check:

## Source Processing

* [ ] target-entity URLs were filtered by existing repository tags/labels/headings
* [ ] relevant primary/official sources were identified
* [ ] relevant source content was deeply read
* [ ] source snippets alone were not used as the basis for the profile
* [ ] `child_papers/` was not read
* [ ] no child papers were traversed
* [ ] no uncontrolled recursive citation traversal occurred

## Scope

* [ ] target entity is correct
* [ ] no unrelated files were modified

## Profile

* [ ] correct §3 routing was used
* [ ] existing profile was updated rather than duplicated
* [ ] full legal/brand name exists
* [ ] identifying description exists
* [ ] Genesis role exists
* [ ] primary-source citation exists
* [ ] Grants & Commitments appears first
* [ ] Technical Capabilities appears second
* [ ] Mission Domains appears third

## Technical Content

* [ ] technical claims are concrete
* [ ] numerical specifications are sourced
* [ ] no unsupported marketing claims were introduced
* [ ] prime awardee/collaborator distinction is correct

## Mission Integration

* [ ] Genesis problem space is identified
* [ ] entity contribution is identified
* [ ] real-world data/assets are identified where applicable
* [ ] broader methodology is described where justified

## Architecture

Where applicable:

* [ ] Abstract updated
* [ ] Zusammenfassung updated
* [ ] §2.1 updated
* [ ] §1 ASCII topology updated
* [ ] English/German architecture information matches

## Appendix

* [ ] appropriate appendix updated
* [ ] English/German appendix information matches
* [ ] no duplicate appendix entry

## References

* [ ] all existing valid URLs remain
* [ ] historical references remain
* [ ] collaborator references remain
* [ ] new primary sources are present
* [ ] every factual profile claim has evidence

## Coverage

* [ ] Process Count is the first column
* [ ] untouched rows remain `0` when schema was newly introduced
* [ ] target was incremented exactly once
* [ ] target status is correct
* [ ] Paper Section is correct
* [ ] Notes are updated
* [ ] summary tables reconcile
* [ ] percentages reconcile
* [ ] closing profile count is correct

## Version

* [ ] README.md patch version incremented exactly once
* [ ] README.de.md patch version incremented exactly once
* [ ] both versions are identical

## Changelog

* [ ] active version contains the reprocessing entry
* [ ] entity is named
* [ ] Process Count migration is documented
* [ ] technical changes are documented
* [ ] bilingual changes are documented
* [ ] coverage changes are documented

## Bilingual Sync

* [ ] English and German contain equivalent factual information
* [ ] amounts match
* [ ] dates match
* [ ] PI names match
* [ ] institutions match
* [ ] technical specifications match
* [ ] Genesis role matches
* [ ] mission-domain information matches
* [ ] section hierarchy matches

## Release Safety

* [ ] `git tag` was NOT executed
* [ ] `git push` was NOT executed
* [ ] no release was created

---

# 27. COMPLETION RULE

The task is complete when:

1. Relevant URLs were filtered first.
2. Relevant source content was deeply read.
3. All required repository edits have been made.
4. The final audit above has been performed once.
5. No audit failure remains unresolved.
6. No further edit/audit cycle is started.
7. No `git tag` or `git push` has been executed.

If the final audit discovers an actual error, correct that error once, then perform only the affected final checks needed to confirm the correction.

Do not restart the entire workflow.

Do not repeatedly cycle through the repository.

The final state must be a completed repository update, not an ongoing audit loop.
