# 🧬 Genesis Mission — Entity Reprocessing, Profile Integration & Version Control Protocol

> **Purpose:** Systematically reprocess a target entity's profile across bilingual documentation, formally integrate or refresh its technical and strategic role within the Genesis Mission ecosystem, track processing iterations, maintain reference integrity, and preserve repository-wide architectural consistency — with rigorous fact-checking as a non-negotiable requirement.

---

## 📋 Context

The **Genesis Mission** repository maintains parallel documentation:

| File            | Purpose                                   |
| --------------- | ----------------------------------------- |
| `README.md`     | Primary English documentation             |
| `README.de.md`  | German counterpart (strict sync required) |
| `references.md` | Source link archive                       |
| `coverage.md`   | Entity tracking & metrics                 |
| `CHANGELOG.md`  | Version history                           |

When an entity requires initial profile integration or reprocessing — including updated hardware specifications, refreshed MOUs, expanded technical frameworks, corrected metrics, newly verified partnerships, or expanded Genesis Mission responsibilities — the update must propagate **synchronously** across both language versions while incrementing the entity's processing counter.

---

## ⚙️ Execution Rules

### 1️⃣ Scope Restriction — Paper Traversal

> 🚫 **Do NOT read the `child_papers/` folder.**

Confine all analysis, technical updates, and reference extraction strictly to the **top-level parent document** and **primary source material provided or independently verified from authoritative sources**.

Under no circumstances should child papers, sub-references, or nested citations be recursively fetched, read, or traversed.

Primary sources may include official `.gov`, `.edu`, institutional, program, laboratory, university, or company announcement pages where required for factual verification.

---

### 2️⃣ Target Entity Identification & Profile Integration

Before modifying the repository:

1. Identify the exact target entity and its entity type:

   * Industry / hyperscale / hardware
   * National laboratory
   * University / academic research entity
2. Determine whether the entity currently has:

   * no profile,
   * a brief mention,
   * an existing full profile requiring reprocessing.
3. Locate all existing references to the entity across:

   * `README.md`
   * `README.de.md`
   * `references.md`
   * `coverage.md`
   * `CHANGELOG.md`
4. Preserve all valid historical information unless primary-source verification demonstrates that it is inaccurate, obsolete, or incorrectly attributed.
5. Do not create duplicate entity entries. If a profile already exists, **refresh and expand the existing entry** in place.

The resulting profile must document both the entity's **technical capabilities** and its **specific strategic role within the Genesis Mission ecosystem**, rather than merely describing the organization.

---

### 3️⃣ Schema Migration & Counter Increment (`coverage.md`)

* ✅ **First-Column Insertion:** Every entity tracking table must lead with:

  `| Process Count | Entity | ... |`

* ✅ **Initial Baseline:** If the column does not exist yet, insert it across **all applicable entity-tracking tables**, defaulting untouched rows to `0`.

* ✅ **Counter Logic for the Reprocessed Entity:**

  | Scenario               | Action                                                      |
  | ---------------------- | ----------------------------------------------------------- |
  | Column already existed | Increment by `1` (e.g. `0 → 1`, `1 → 2`)                    |
  | Column newly added     | Set the target entity to `1`; untouched entities remain `0` |

* ✅ **Status & Metadata:** Update the target entity's:

  * `Status`
  * `Paper Section`
  * `Notes`

  Example status transition:

  `📋 Brief Mention` → `✅ Full Profile`

* ✅ **Architectural Context:** The `Notes` field must summarize the entity's concrete technical contribution, Genesis Mission role, and relevant system-level relationship.

* ✅ **Metrics Recalculation:** Recalculate all coverage summary tables and footnotes after the schema migration and entity status update.

---

### 4️⃣ Dual-Language Profile Integration

> 🌐 **Strict Bilingual Sync:** Every update made to `README.md` must have a complete, accurate, fully translated counterpart in `README.de.md` under the matching section hierarchy.

### 🧭 Section Routing

| Entity Type                      | English Section                                       | German Section                                               |
| -------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| Industry / Hyperscale / Hardware | `### 3.1 Industry, Hyperscale & Hardware Commitments` | `### 3.1 Industrie-, Hyperscale- & Hardware-Verpflichtungen` |
| National Laboratories            | `### 3.2 National Laboratories`                       | `### 3.2 Nationale Laboratorien`                             |
| Universities / Academic          | `### 3.3 University Research Partners`                | `### 3.3 Universitäre Forschungspartner`                     |

A profile must be added or refreshed under the appropriate section.

### 📝 Required Profile Structure

Each entity entry must begin with a concise lead-in containing:

* Full legal or recognized brand name
* One-line identifying description

  * location,
  * sector or academic department,
  * relevant program/product lines
* The entity's **specific role on the relevant Genesis Mission project**
* An **inline citation to a primary announcement or program page**, including source name and working link

The entry must then contain the following bold sub-bullets, **in exactly this order**:

#### **Grants & Commitments** / **Zuschüsse & Verpflichtungen**

Document, where verifiable:

* founding date and location;
* incorporation information;
* headquarters and relevant facilities;
* official MOUs or partnership agreements;
* CHIPS Act LOIs or other federal/state commitments;
* DOE or other federal awards;
* award amounts and dates;
* program names;
* selected or partnering institutions;
* whether the entity is:

  * prime awardee,
  * subawardee,
  * industry collaborator,
  * technology provider,
  * research partner, or another explicitly documented role;
* Genesis Mission project name and phase;
* project duration where documented;
* leading PI and institution;
* co-investigators and their institutions where applicable.

Do **not** infer that an entity is a prime awardee merely because it participates in a project.

#### **Technical Capabilities** / **Technische Kapazitäten**

Document concrete, technically verifiable capabilities rather than marketing descriptions.

Depending on entity type, include relevant specifications such as:

* CPU/GPU/NPU architectures;
* accelerator platforms;
* QPU architectures and quantum modalities;
* memory/interconnect technologies;
* HPC and supercomputing substrates;
* liquid or other cooling technologies;
* wafer-scale engines;
* semiconductor manufacturing processes;
* battery chemistries;
* voltage/capacity classes;
* cycle-life figures;
* manufacturing processes;
* software or AI platforms;
* scientific instrumentation;
* sensor systems;
* laboratory automation infrastructure.

Every numerical specification must be supported by a primary source.

#### **Mission Domains** / **Missionsdomänen**

Explicitly explain:

1. the Genesis Mission problem space addressed by the entity;
2. the entity's concrete contribution;
3. the real-world data, hardware, software, infrastructure, experimental assets, or operational records it contributes;
4. the scientific or computational methodology enabled by that contribution;
5. how the resulting methodology generalizes to broader Genesis Mission domains.

Examples include:

* adversarial robustness;
* federated learning;
* sensor and telemetry integrity;
* thermal/safety modeling;
* battery-management systems;
* autonomous laboratory instrumentation;
* experimental control;
* grid-edge storage;
* scientific AI;
* materials discovery;
* quantum/HPC workflows.

Do not claim that a methodology generalizes to another domain unless the connection is technically defensible.

---

### 5️⃣ Global Integration for Major Compute / Model Providers

For **major compute providers, model providers, hyperscalers, accelerator manufacturers, or other entities that materially contribute to the heterogeneous computing architecture**, integrate concise references to the entity throughout both language versions.

The entity must be incorporated, where technically applicable, into:

#### `## Abstract` / `## Zusammenfassung`

Add a concise reference describing the provider's strategic or computational contribution to the Genesis Mission ecosystem.

#### `§2.1` — Heterogeneous Supercomputing Core

Explain where the entity's:

* compute architecture,
* accelerator,
* model platform,
* HPC substrate,
* cloud infrastructure,
* interconnect,
* or related technology

fits into the heterogeneous computing architecture.

Do not imply exclusive use or formal architectural ownership unless explicitly documented.

#### `§1` — ASCII Consortium / Ecosystem Topology Diagram

Update the ASCII topology diagram where the entity materially changes the documented ecosystem relationship.

The English and German diagrams must remain structurally synchronized.

---

### 6️⃣ Appendix Verification

Cross-check the target entity against the relevant appendix table.

#### Industry / Hardware Entities

Update:

`### A.3 Industry & Technology Partners`

and the German counterpart:

`### A.3 Industrie- und Technologiepartner`

#### National Laboratories

Update the corresponding national-laboratory appendix table if present.

#### Universities / Academic Entities

Update the corresponding university or academic appendix table if present.

The appendix entry must summarize the entity's **primary verified Genesis Mission contribution**, not simply repeat its name.

---

### 7️⃣ Reference Integrity (`references.md`)

* ✅ Retain **all existing valid URLs** associated with the target entity.
* ✅ Never remove historical press releases, partner announcements, institutional pages, program pages, or collaboration URLs merely because newer sources exist.
* ✅ Verify that retained links remain attributable to the correct entity.
* ✅ Append newly verified sources under the appropriate existing sub-header.
* ✅ Add primary sources for newly documented:

  * awards,
  * MOUs,
  * LOIs,
  * technical specifications,
  * Genesis Mission participation,
  * PI/project information,
  * institutional partnerships.
* 🚫 Do not recursively traverse citations from those sources into child papers or nested research documents.

Where possible, prioritize:

1. DOE / federal `.gov` sources
2. university `.edu` sources
3. national laboratory sources
4. official company sources
5. official program announcements

---

### 8️⃣ Version Increment

Bump the patch version on **line 1** of both:

* `README.md`
* `README.de.md`

The versions must remain synchronized.

Example:

```diff
- **Version**: 0.2.8-alpha
+ **Version**: 0.2.9-alpha
```

Do not modify the major or minor version unless explicitly instructed.

---

### 9️⃣ Changelog Update (`CHANGELOG.md`)

Under the active release version, add a changelog entry documenting:

* the target entity;
* the entity's profile integration or reprocessing;
* the new/incremented `Process Count`;
* the `coverage.md` schema migration, if applicable;
* status transition, if applicable;
* updated `Paper Section`;
* technical additions;
* Genesis Mission role clarification;
* updates made to **both** `README.md` and `README.de.md`;
* reference additions or verification performed in `references.md`.

The changelog must distinguish between newly verified facts and previously documented information that was merely retained.

---

### 🔟 Fact-Checking Requirement — Mandatory

> 🔬 **This is science- and policy-adjacent documentation. Every factual claim must be verifiable.**

Before adding or modifying a factual statement:

* ✅ Verify award amounts against primary sources.
* ✅ Verify dates against primary sources.
* ✅ Verify PI names and institutional affiliations.
* ✅ Verify program titles.
* ✅ Verify project names and Genesis Mission roles.
* ✅ Verify technical specifications such as:

  * cycle life,
  * voltage,
  * capacity,
  * processor architecture,
  * QPU modality,
  * process technology,
  * cooling technology,
  * manufacturing process.
* ✅ Verify whether the entity is a prime awardee, collaborator, subawardee, or technology provider.
* ✅ Prefer official `.gov`, `.edu`, national-laboratory, institutional, and company sources.

🚫 **Never fabricate or extrapolate an unverified figure.**

⚠️ If a requested fact cannot be confirmed from a real, citable primary source, explicitly state that the fact is **unconfirmed** rather than inserting a plausible value.

Every entity profile must contain at least one inline citation to a primary announcement, institutional announcement, official program page, or equivalent authoritative source.

---

### 1️⃣1️⃣ Bilingual Accuracy & Synchronization Verification

After making all changes:

* Confirm the English and German profiles contain the same factual claims.
* Confirm every technical specification appears consistently in both languages.
* Confirm award amounts and dates match.
* Confirm PI and institution names match.
* Confirm Genesis Mission project names and roles match.
* Confirm section hierarchy is equivalent.
* Confirm appendix entries are synchronized.
* Confirm §1 and §2.1 changes are synchronized where applicable.
* Confirm no English-only technical claims remain untranslated in the German profile.
* Confirm German translation does not introduce claims absent from the English version.

The German version must be a **faithful technical translation**, not an abbreviated summary.

---

### 1️⃣2️⃣ Coverage Metrics Verification

After modifying `coverage.md`, recalculate:

#### By Entity Type

Update the relevant entity category by:

* incrementing `✅ Full`;
* decrementing `📋 Brief` where the entity transitions from brief to full;
* leaving totals unchanged where the entity was already full and is merely reprocessed.

#### By Coverage Level

Update:

* total `✅ Full Profile`;
* total `📋 Brief Mention`;
* percentages;
* total tracked entities where necessary.

Ensure percentages are mathematically consistent with the underlying counts.

#### Footnote

Update the closing note to reflect the correct total number of entity profiles.

The `Process Count` column itself must **not** be included as a new entity in any coverage calculation.

---

### 1️⃣3️⃣ Repository Integrity

Before completion, verify:

* `README.md` remains internally consistent.
* `README.de.md` remains internally consistent.
* Both README versions have the same patch version.
* `references.md` contains all historical and newly verified references.
* `coverage.md` has valid table formatting.
* All tracking rows contain a `Process Count`.
* Untouched entities have `Process Count = 0` when the schema is newly introduced.
* The target entity has the correct incremented process count.
* Coverage metrics reconcile with entity rows.
* `CHANGELOG.md` reflects the completed work.
* No duplicate entity profile was introduced.
* No existing valid reference URL was removed.
* No child paper was read or traversed.

---

## 🚫 Release Management Policy

> **Do NOT execute `git tag` or `git push`.**

Release tagging and publishing remain isolated to:

`prompts/release_and_tag.md`

Only perform tagging or publishing when a release step is explicitly requested by the user.

---

## 🧾 Reference Profile Structure

The resulting profile should follow this structure, adapted to the verified facts for the target entity:

### English

> **[Entity Name]:** [Location]-based [sector/entity type] [identifying description], participating as [specific Genesis role] in [Genesis Mission project/program] ([Primary Source Name], [primary source link]).
>
> * **Grants & Commitments:** [Verified organizational background, funding, awards, MOUs/LOIs, partners, project role, PI/investigators.]
> * **Technical Capabilities:** [Concrete hardware/software/scientific capabilities and verified specifications.]
> * **Mission Domains:** [Specific Genesis Mission problem space, contributed assets/data, methodology, and technically justified broader applicability.]

### German

> **[Entity Name]:** [Standort]-basierter/-e [Sektor/Entitätstyp] [identifizierende Beschreibung], der/die als [spezifische Genesis-Rolle] am [Genesis-Missionsprojekt/-programm] beteiligt ist ([Name der Primärquelle], [Link zur Primärquelle]).
>
> * **Zuschüsse & Verpflichtungen:** [Verifizierter organisatorischer Hintergrund, Förderungen, Auszeichnungen, MOUs/LOIs, Partner, Projektrolle, PI/Co-Investigatoren.]
> * **Technische Kapazitäten:** [Konkrete Hardware-/Software-/wissenschaftliche Kapazitäten und verifizierte Spezifikationen.]
> * **Missionsdomänen:** [Spezifischer Genesis-Missionsbereich, beigesteuerte Daten/Assets, Methodik und technisch begründete Übertragbarkeit.]

---

## ✅ Pre-Flight Checklist

* [ ] Target entity identified
* [ ] Entity type determined
* [ ] Existing entity mentions located across all five repository files
* [ ] Top-level parent document confirmed
* [ ] `child_papers/` not read
* [ ] No child paper or nested citation recursively traversed
* [ ] Primary sources identified
* [ ] All award amounts verified
* [ ] All dates verified
* [ ] PI and investigator information verified
* [ ] Genesis Mission role verified
* [ ] Technical specifications verified
* [ ] Existing valid references preserved
* [ ] New primary references added
* [ ] Full profile integrated or existing profile refreshed
* [ ] English profile updated
* [ ] German profile fully translated and synchronized
* [ ] §1 updated where applicable
* [ ] §2.1 updated where applicable
* [ ] Appendix updated
* [ ] `Process Count` column added across tracking tables if absent
* [ ] Untouched rows initialized to `0` where applicable
* [ ] Target entity process count incremented correctly
* [ ] Entity status updated
* [ ] Paper Section updated
* [ ] Coverage notes updated
* [ ] Coverage summary metrics recalculated
* [ ] Coverage percentages verified
* [ ] Coverage footnote updated
* [ ] README patch version incremented
* [ ] German README patch version incremented identically
* [ ] `CHANGELOG.md` updated
* [ ] Bilingual factual consistency verified
* [ ] No duplicate profile introduced
* [ ] No existing valid reference URLs removed
* [ ] No `git tag` executed
* [ ] No `git push` executed
