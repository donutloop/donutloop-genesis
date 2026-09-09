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
8. Use the relevant **tag-filtered source URLs** and deeply read their available content before writing the reprocessed profile.
9. Perform **ONE final audit at the very end**.

The audit is NOT an intermediate step.

---

# 2. HARD SCOPE RULE — `child_papers/`

> 🚫 **DO NOT READ THE `child_papers/` FOLDER.**

Never:

* enter `child_papers/`
* read files inside `child_papers/`
* recursively inspect child papers
* recursively follow nested citations from child papers
* use child-paper information to construct the profile

Confine analysis to:

* the top-level parent document
* source material permitted by the target tag
* repository files required by this prompt

If information exists only in a child paper, treat it as unavailable.

Do not attempt to recover it.

---

# 3. FIRST STEP — FILTER URLS STRICTLY BY TAG

**This MUST be the first source-analysis operation.**

Before editing any repository content:

1. Identify the **exact target tag** associated with the reprocessing task.
2. Inspect the repository's existing URL/reference organization.
3. Filter the source collection using that exact tag.
4. Extract **ONLY URLs carrying that exact tag**.
5. The resulting tagged URL set is the **only source set for this reprocessing**.

### HARD RULE

> **Only URLs belonging to the specified tag are in scope for source analysis.**

Use:

```text
SOURCE SET = URLs WHERE URL_TAG == TARGET_TAG
```

Do NOT use:

```text
SOURCE SET = URLs mentioning TARGET_ENTITY
```

Do NOT use:

```text
SOURCE SET = all URLs that appear relevant
```

Do NOT use:

```text
SOURCE SET = TARGET_TAG + manually discovered URLs
```

A URL that mentions the target entity but does **not** carry the target tag is **out of scope for this reprocessing**.

Do not:

* broaden the tag filter
* substitute another tag
* add URLs because they look useful
* search for additional untagged sources
* silently expand the source set later

The tag is the hard source boundary.

### Important distinction

The tag filter controls **which sources are used for this reprocessing**.

It does NOT authorize deletion of other existing valid URLs from `references.md`.

Existing valid URLs must remain preserved even if they are outside the current tag.

---

# 4. SECOND STEP — DEEP-READ ONLY THE FILTERED URL CONTENT

After filtering by the exact target tag, deeply read the content of the tagged sources.

This is mandatory.

The reprocessing depends on understanding the actual source content, not merely finding matching URLs.

For each relevant tagged URL:

* read the actual source content
* understand its relevant context
* extract the facts required for reprocessing
* identify technical information
* identify strategic/project information
* identify funding information
* identify institutional relationships
* identify the entity's actual Genesis Mission role
* identify concrete specifications
* identify data/assets and mission relevance

Do not rely only on:

* URL titles
* link text
* search-result snippets
* filenames
* metadata
* existing README summaries

### Deep-reading requirement

Read enough of the tagged source content to understand the relevant facts completely.

Where a tagged source contains several relevant sections, read those sections rather than stopping after the first matching sentence.

Extract, where applicable:

* legal/brand name
* founding information
* incorporation
* headquarters
* facility locations
* program/project name
* Genesis Mission role
* project phase
* award information
* funding
* dates
* MOUs
* LOIs
* CHIPS-related commitments
* partner institutions
* co-selected institutions
* prime-awardee status
* collaborator status
* PI
* co-investigators
* hardware
* software
* architecture
* GPU/QPU platforms
* HPC substrates
* quantum modality
* manufacturing processes
* cooling systems
* battery chemistry
* technical specifications
* real-world data/assets
* mission application
* project methodology
* broader applicability

### Source boundary

If a source does not carry the target tag:

> **Do not read it for this reprocessing.**

If a relevant fact appears to be missing from the tag-filtered sources:

> **Do not expand the source set merely to fill the gap.**

Instead, mark the fact as unconfirmed or omit it.

Do not manufacture missing information.

---

# 5. SOURCE PROCESSING STOP CONDITION

Once all URLs carrying the target tag have been identified and their relevant content has been deeply read:

1. Stop source discovery.
2. Stop expanding the URL set.
3. Do not search for additional sources.
4. Do not add untagged URLs to the working source set.
5. Proceed to repository editing.

Do not enter:

```text
filter → search more → filter again → search more
```

Do not enter:

```text
read → discover URL → read → discover URL → read indefinitely
```

The intended flow is:

```text
TARGET TAG
    ↓
FILTER ONLY TAGGED URLS
    ↓
DEEP-READ TAGGED CONTENT
    ↓
STOP SOURCE DISCOVERY
    ↓
EDIT REPOSITORY
    ↓
FINAL AUDIT
```

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

Determine:

* whether it already has a profile
* which entity category it belongs to
* which Genesis Mission project it belongs to
* which documentation sections currently mention it
* its current coverage status
* its current Process Count, if present
* which tag-filtered sources support the reprocessing

If an existing profile exists, **update it**.

Do not create a duplicate profile.

If the entity is already fully documented, refresh the existing profile with verified new information rather than creating another entry.

---

# 8. ENTITY SECTION ROUTING

Use exactly the appropriate section.

| Entity type                      | English                                               | German                                                       |
| -------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| Industry / Hyperscale / Hardware | `### 3.1 Industry, Hyperscale & Hardware Commitments` | `### 3.1 Industrie-, Hyperscale- & Hardware-Verpflichtungen` |
| National Laboratories            | `### 3.2 National Laboratories`                       | `### 3.2 Nationale Laboratorien`                             |
| Universities / Academic          | `### 3.3 University Research Partners`                | `### 3.3 Universitäre Forschungspartner`                     |

Do not put an entity into the wrong category.

---

# 9. PROFILE ENTRY STRUCTURE

Each refreshed entry must open with:

* Full legal/brand name
* One-line identifying description:

  * location
  * sector/department
  * program/product lines where relevant
* Specific role on the relevant Genesis Mission project
* Inline citation using the applicable primary/tagged source

Follow with these three bold sub-bullets in **exactly this order**:

1. **Grants & Commitments** / *Zuschüsse & Verpflichtungen*
2. **Technical Capabilities** / *Technische Kapazitäten*
3. **Mission Domains** / *Missionsdomänen*

Do not change the order.

Do not replace these categories with custom categories.

---

# 10. GRANTS & COMMITMENTS / ZUSCHÜSSE & VERPFLICHTUNGEN

Include verified information where applicable:

* corporate background
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
* prime awardee vs. industry collaborator distinction
* Genesis-affiliated effort
* leading PI
* lead institution
* co-investigators

Do not assume that being listed as a partner makes an entity a prime awardee.

Explicitly distinguish:

* prime awardee
* lead institution
* industry collaborator
* academic collaborator
* subcontractor
* other documented role

Only state the role supported by the tag-filtered source material.

---

# 11. TECHNICAL CAPABILITIES / TECHNISCHE KAPAZITÄTEN

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
* instrumentation
* laboratory systems

Use measurable or technically identifiable specifications where available.

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

# 12. MISSION DOMAINS / MISSIONSDOMÄNEN

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

Only claim broader applicability when technically justified by the source material.

---

# 13. GLOBAL REFERENCES FOR MAJOR COMPUTE / MODEL PROVIDERS

For major compute/model providers, thread the entity's verified role through BOTH language versions.

Update, where applicable:

* `## Abstract`
* `## Zusammenfassung`
* `§2.1` heterogeneous supercomputing core
* `§1` ASCII consortium topology diagram

Do not imply that an entity owns, operates, supplies, or controls infrastructure unless the tag-filtered source material establishes that fact.

Do not alter unrelated architecture descriptions.

---

# 14. APPENDIX VERIFICATION / INTEGRATION

Update the appropriate appendix table.

For industry/hardware entities:

* `### A.3 Industry & Technology Partners`
* `### A.3 Industrie- und Technologiepartner`

For national laboratories and universities:

* use the corresponding appendix tables where present.

The appendix entry must reflect the entity's primary documented contribution.

Do not create duplicate appendix entries.

---

# 15. `references.md`

Preserve the reference archive.

MANDATORY:

* retain all existing valid URLs
* retain historical press releases
* retain partner announcements
* retain collaborator references
* retain official announcements
* add newly applicable tagged sources where required
* place references under the appropriate existing subsections

Pay particular attention to:

* `## 2. Collaborators`
* `## 4. Executive, Federal & Partner Announcements`

**Never remove an existing valid URL merely because it is outside the current tag.**

The current tag determines the source set used for this reprocessing.

It does not determine which historical references are allowed to remain in the repository.

Do not replace historical references with newer references.

---

# 16. `coverage.md`

Update the entity tracking tables.

## Process Count schema

Every applicable entity tracking table must lead with:

`| Process Count | Entity | ... |`

If the column does not exist:

1. Insert it as the first column.
2. Set all untouched rows to `0`.
3. Set the target entity to `1`.

If the column already exists:

* increment ONLY the target entity by `1`
* leave all other entity counts unchanged

Examples:

```text
0 → 1
1 → 2
2 → 3
```

Do not increment the target more than once.

Do not increment because multiple files were edited.

**One agent execution = one Process Count increment for the target entity.**

---

# 17. COVERAGE STATUS & METADATA

Update the target entity where appropriate.

Example transition:

`📋 Brief Mention → ✅ Full Profile`

Update:

* `Status`
* `Paper Section`
* `Notes`

`Paper Section` should identify the actual documentation location, for example:

`§3.1, A.3`

Notes should summarize key technical highlights and the entity's Genesis contribution.

Do not claim `Full Profile` unless the profile contains the required substantive information.

---

# 18. COVERAGE METRICS

After modifying the entity rows, update:

* `By Entity Type`
* `By Coverage Level`
* summary counts
* summary percentages
* relevant footnotes
* total profile count in the closing note

The summary numbers must reconcile with the actual entity rows.

Do not manually invent totals.

Do not modify unrelated metrics.

---

# 19. BILINGUAL SYNCHRONIZATION

`README.md` and `README.de.md` must remain synchronized.

Every factual update in English must have equivalent factual information in German.

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

Preserve corresponding section hierarchy.

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

# 22. FACT-CHECKING REQUIREMENT

This is science- and policy-adjacent documentation.

Every factual claim must be supported by the **tag-filtered source material**.

Prefer primary/official sources among the URLs carrying the target tag.

Verify:

* award amounts
* dates
* PI names
* program titles
* technical specifications
* cycle life
* voltage classes
* process names
* project roles
* facility information
* partnership claims
* Genesis Mission relationships

Do not fabricate or extrapolate.

If a fact cannot be confirmed from the tag-filtered source material:

> State it as unconfirmed or omit it.

Do not obtain a replacement fact from an untagged URL.

---

# 23. RELEASE MANAGEMENT POLICY

> 🚫 **Do NOT run `git tag` or `git push`.**

Do not:

* create tags
* push commits
* publish releases
* execute release deployment

Release management remains isolated to:

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
* use untagged sources as evidence for the reprocessing

Make the smallest set of changes necessary to complete the task correctly.

---

# 25. EXECUTION ORDER

Perform the work in **exactly this order**.

### Step 1 — Identify the exact target tag

Determine the exact tag associated with the requested reprocessing.

Do not interpret the tag loosely.

### Step 2 — Filter URLs by the exact tag

Filter the repository's URL/reference collection.

Use **ONLY URLs carrying the exact target tag**.

Do not add untagged URLs.

### Step 3 — Deep-read the tagged source content

Deep-read the relevant content from the filtered URLs.

Do not rely on snippets or titles.

Do not read `child_papers/`.

Do not recursively expand the source set.

### Step 4 — Stop source discovery

Once all tagged sources have been processed:

* stop searching
* stop expanding the source set
* do not add untagged sources
* proceed to repository editing

### Step 5 — Locate repository material

Identify:

* target entity
* existing profile
* relevant Genesis project
* correct entity section
* relevant coverage row
* relevant appendix row
* relevant tagged references

### Step 6 — Update English profile

Update `README.md`.

### Step 7 — Update German profile

Update `README.de.md`.

### Step 8 — Update global architecture references

If applicable, update:

* Abstract
* Zusammenfassung
* §2.1
* §1 ASCII topology

in both languages.

### Step 9 — Update appendix

Update the applicable appendix entries.

### Step 10 — Update `references.md`

Preserve all existing valid URLs and update applicable references.

Do not use untagged URLs as source evidence.

### Step 11 — Update `coverage.md`

Perform the Process Count migration/increment and update coverage metadata and metrics.

### Step 12 — Update versions

Synchronously increment the patch version in both README files.

### Step 13 — Update `CHANGELOG.md`

Add the single appropriate active-version entry.

### Step 14 — STOP EDITING

All repository modifications are now complete.

Do not start another editing pass.

Do not restart from Step 1.

Do not rediscover sources.

Do not perform an intermediate audit.

Proceed directly to the final audit.

---

# 26. FINAL AUDIT — LAST STEP ONLY

> **This is the ONLY audit/checklist stage.**

Do NOT audit during source filtering.

Do NOT audit during deep reading.

Do NOT audit between file edits.

Do NOT alternate:

```text
edit → audit → edit → audit
```

The required workflow is:

```text
EXACT TAG
    ↓
FILTER ONLY TAGGED URLS
    ↓
DEEP-READ TAGGED CONTENT
    ↓
STOP SOURCE DISCOVERY
    ↓
COMPLETE ALL REPOSITORY EDITS
    ↓
ONE FINAL AUDIT
    ↓
DONE
```

Perform the following audit **once, at the very end**.

## Source Processing

* [ ] Exact target tag was identified.
* [ ] URLs were filtered by the exact tag.
* [ ] Only URLs carrying that tag were used as source evidence.
* [ ] Relevant tagged sources were deeply read.
* [ ] Source snippets were not used as a substitute for reading.
* [ ] No untagged URL was introduced into the source set.
* [ ] Source discovery did not expand beyond the target tag.
* [ ] `child_papers/` was not read.
* [ ] No child papers were traversed.
* [ ] No uncontrolled recursive citation traversal occurred.

## Profile

* [ ] Target entity is correct.
* [ ] Correct §3 routing was used.
* [ ] Existing profile was updated rather than duplicated.
* [ ] Full legal/brand name exists.
* [ ] Identifying description exists.
* [ ] Genesis role exists.
* [ ] Primary/tagged-source citation exists.
* [ ] Grants & Commitments appears first.
* [ ] Technical Capabilities appears second.
* [ ] Mission Domains appears third.

## Technical Content

* [ ] Technical claims are concrete.
* [ ] Numerical specifications are supported.
* [ ] No unsupported marketing claims were introduced.
* [ ] Prime-awardee/collaborator distinction is correct.
* [ ] Hardware/software/architecture claims are supported.
* [ ] Manufacturing/process claims are supported.

## Mission Integration

* [ ] Genesis problem space is identified.
* [ ] Entity contribution is identified.
* [ ] Real-world data/assets are identified where applicable.
* [ ] Broader methodology is described only where justified.

## Architecture

Where applicable:

* [ ] Abstract updated.
* [ ] Zusammenfassung updated.
* [ ] §2.1 updated.
* [ ] §1 ASCII topology updated.
* [ ] English/German architecture information matches.

## Appendix

* [ ] Appropriate appendix updated.
* [ ] English/German appendix information matches.
* [ ] No duplicate appendix entry.

## References

* [ ] All existing valid URLs remain.
* [ ] Historical references remain.
* [ ] Collaborator references remain.
* [ ] Applicable tagged sources are represented.
* [ ] No untagged source was used as factual evidence.
* [ ] Every factual profile claim has supporting evidence.

## Coverage

* [ ] Process Count is the first column.
* [ ] Untouched rows remain `0` when the schema was newly introduced.
* [ ] Target Process Count was incremented exactly once.
* [ ] Target status is correct.
* [ ] Paper Section is correct.
* [ ] Notes are updated.
* [ ] Summary tables reconcile.
* [ ] Percentages reconcile.
* [ ] Closing profile count is correct.

## Version

* [ ] `README.md` patch version incremented exactly once.
* [ ] `README.de.md` patch version incremented exactly once.
* [ ] Both versions are identical.

## Changelog

* [ ] Active version contains the reprocessing entry.
* [ ] Entity is named.
* [ ] Process Count migration is documented.
* [ ] Technical changes are documented.
* [ ] English/German changes are documented.
* [ ] Coverage changes are documented.

## Bilingual Sync

* [ ] English and German contain equivalent factual information.
* [ ] Amounts match.
* [ ] Dates match.
* [ ] PI names match.
* [ ] Institutions match.
* [ ] Technical specifications match.
* [ ] Genesis role matches.
* [ ] Mission-domain information matches.
* [ ] Section hierarchy matches.
* [ ] German profile is not an abbreviated version.

## Release Safety

* [ ] `git tag` was NOT executed.
* [ ] `git push` was NOT executed.
* [ ] No release was created.

---

# 27. COMPLETION RULE

The task is complete when:

1. The exact target tag was identified.
2. Only URLs carrying that tag were used for source analysis.
3. The tagged source content was deeply read.
4. Source discovery was stopped after the tagged source set was processed.
5. All required repository edits were completed.
6. The final audit was performed **once and only at the end**.
7. No unresolved audit failure remains.
8. No further edit/audit cycle is started.
9. No `git tag` or `git push` was executed.

If the final audit discovers an actual error:

1. Correct only that specific error.
2. Recheck only the affected audit item.
3. Stop.

Do NOT restart the workflow.

Do NOT perform another full source-discovery cycle.

Do NOT repeat the entire audit.

**The task ends after the final audit.**
