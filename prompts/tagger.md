# 🧬 Genesis Mission — Entity Reprocessing & Version Control Protocol

> **Purpose:** Systematically reprocess a target entity's profile across bilingual documentation, track processing iterations, and maintain repository integrity — with rigorous fact-checking as a non-negotiable requirement.

---

## 📋 Context

The **Genesis Mission** repository maintains parallel documentation:

| File | Purpose |
|---|---|
| `README.md` | Primary English documentation |
| `README.de.md` | German counterpart (strict sync required) |
| `reference_coverage.md` | Tagged Master Reference Link Index (entity-tagged source archive) |
| `coverage.md` | Entity tracking & metrics |
| `CHANGELOG.md` | Version history |

When an entity requires reprocessing — updated hardware specs, refreshed MOUs, expanded technical frameworks, or corrected metrics — the update must propagate **synchronously** across both language versions while incrementing a processing counter.

---

## ⚙️ Execution Rules

### 0️⃣ Pre-Execution Verification Pass (Mandatory — Run Before Any Other Step)

> 🔍 **Before touching any file, verify every existing factual claim tied to the target entity — not just the new material being added.**

- ✅ **Audit first, edit second:** Before starting the reprocessing workflow, re-verify every factual claim currently in the entity's existing profile (README.md / README.de.md / coverage.md), not only the facts being newly introduced. Corporate status, ownership, award amounts, PI names, and technical specs can all go stale between reprocessing passes.
- ✅ **Corporate/entity status check:** Confirm the entity's current legal name, ownership, and operating status against a primary source (SEC filings, company press releases, state business registries) before reusing a prior profile's framing. Mergers, acquisitions, bankruptcies, rebrands, or dissolutions must be reflected — do not assume a previously documented entity structure still holds.
- ✅ **Living-document assumption:** Treat every existing sentence in the repository as a claim to be re-checked, not as ground truth inherited from a prior pass. A fact that was true at last reprocessing may no longer be true.
- 🚫 **Remove, don't preserve, disproven facts:** If verification shows an existing statement is inaccurate, outdated, or unconfirmed against a primary source, it must be corrected or removed from the profile — in both languages — even if it was already published in a prior version. Silently carrying forward a stale or false claim is a protocol violation, not a neutral default.
- ⚠️ **Flag ambiguity, don't guess:** If verification is inconclusive (source unavailable, conflicting reports, no primary confirmation), mark the claim as unconfirmed in-line rather than deleting it outright or leaving it stated as fact.
- 📌 **Document what changed:** Any correction or removal made during this pass must be logged in `CHANGELOG.md` under a "Corrections" note, separate from new content added during reprocessing.

---

### 1️⃣ Scope Restriction — Paper Traversal

> 🚫 **Do NOT** read the `child_papers/` folder.

Confine all analysis, technical updates, and reference extraction strictly to the **top-level parent document** and primary source material provided. Never recursively fetch, read, or traverse child papers, sub-references, or nested citations.

---

### 2️⃣ Entity Extraction & Tagging Taxonomy (`reference_coverage.md`)

> 🏷️ **Links are now tracked by entity tag in `reference_coverage.md`, not as a flat list in `references.md`.**

For every existing row in the Master Reference Link Index (`reference_coverage.md`), examine the combined context of:

- `Category / Section`
- `Entity / Subject`
- `Title`
- `Domain`
- `Link` (via deep-dive scan of linked content)

Extract and classify all matching entities using the following taxonomy.

**A. Involved Companies (`company:<Name>`)**
Scope: Commercial entities, industrial partners, compute/cloud hyperscalers, semiconductor foundries, startups, and utilities.
Normalization: Use standard commercial aliases, such as:
`company:NVIDIA`, `company:Microsoft`, `company:AWS`, `company:IBM`, `company:Google`, `company:Anthropic`, `company:OpenAI`, `company:GlobalFoundries`, `company:Cerebras`, `company:Groq`, `company:Atom Computing`, `company:PsiQuantum`, `company:Quantinuum`, `company:Rigetti Computing`, `company:Diraq`, `company:D-Wave`, `company:Infleqtion`, `company:SambaNova`, `company:Siemens`, `company:Everstar`, `company:Cognition`, `company:Armada`, `company:Deep Isolation`, `company:Rescale`, `company:Chemspeed`, `company:eXoZymes`, `company:TVA`, `company:ComEd`

Include other clearly identifiable commercial entities when they are explicitly involved in the row or linked destination.

**B. Involved Universities (`university:<Name>`)**
Scope: Higher education institutions, colleges, academic institutes, and university-affiliated research departments.
Normalization: Use standard university names, such as:
`university:MIT`, `university:Stanford University`, `university:Purdue University`, `university:Penn State`, `university:Columbia University`, `university:UC Berkeley`, `university:UT Austin`, `university:Carnegie Mellon University`, `university:University of Washington`, `university:Duke University`, `university:University of Florida`, `university:UConn`, `university:Brown University`, `university:University of Colorado Boulder`, `university:Rice University`, `university:Harvard University`

Include other clearly identifiable universities or academic institutions when they are explicitly involved in the row or linked destination.

**C. Involved National Labs & Research Centers (`lab:<Name>`)**
Scope: U.S. Department of Energy National Laboratories, FFRDCs, and major international research laboratories.
Use standard abbreviations or facility names:
`lab:ANL` (Argonne), `lab:ORNL` (Oak Ridge), `lab:LBNL` (Lawrence Berkeley), `lab:INL` (Idaho), `lab:BNL` (Brookhaven), `lab:FNAL` (Fermi), `lab:PPPL` (Princeton Plasma Physics), `lab:SLAC`, `lab:LLNL` (Lawrence Livermore), `lab:LANL` (Los Alamos), `lab:NETL` (National Energy Technology Lab), `lab:NREL` (National Renewable Energy Lab), `lab:SRNL` (Savannah River), `lab:Ames Lab`, `lab:Jefferson Lab`, `lab:CERN`, `lab:RIKEN`

**Tagging mechanics:**
- ✅ Apply one or more tags per row — a row may legitimately carry `company:`, `university:`, and `lab:` tags simultaneously if the linked content involves a multi-party collaboration.
- ✅ Store tags in a dedicated `Tags` column in `reference_coverage.md`, comma-separated.
- ✅ When reprocessing an entity (Step 3 below), locate its relevant links by filtering `reference_coverage.md` on its tag rather than scanning a flat, untagged list.
- 🚫 Do not invent a tag for an entity that isn't clearly identifiable from the row's context or linked content — leave ambiguous rows untagged and flag them rather than guessing.

---

### 3️⃣ Schema Migration & Counter Increment (`coverage.md`)

- ✅ **First-Column Insertion:** Every entity tracking table must lead with `Process Count`:
  `| Process Count | Entity | ... |`
- ✅ **Initial Baseline:** If the column doesn't exist yet, insert it across all headers/rows, defaulting untouched rows to `0`.
- ✅ **Counter Logic for the Reprocessed Entity:**
  | Scenario | Action |
  |---|---|
  | Column already existed | Increment by `1` (e.g. `0 → 1`, `1 → 2`) |
  | Column newly added | Set to `1` |
- ✅ **Status & Metadata:** Update `Status` (e.g. `📋 Brief Mention` → `✅ Full Profile`), `Paper Section`, and `Notes` with refreshed architectural context.
- ✅ **Metrics Recalculation:** Update summary tables and footnotes to reflect accurate coverage counts.

---

### 4️⃣ Dual-Language Profile Updates

> 🌐 **Strict Bilingual Sync:** Every `README.md` update requires an exact, fully translated counterpart in `README.de.md` under matching section hierarchies.

#### 🧭 Section Routing (by entity type)

| Entity Type | English Section | German Section |
|---|---|---|
| Industry / Hyperscale / Hardware | `### 3.1 Industry, Hyperscale & Hardware Commitments` | `### 3.1 Industrie-, Hyperscale- & Hardware-Verpflichtungen` |
| National Laboratories | `### 3.2 National Laboratories` | `### 3.2 Nationale Laboratorien` |
| Universities / Academic | `### 3.3 University Research Partners` | `### 3.3 Universitäre Forschungspartner` |

#### 📝 Entry Structure

Each refreshed entry must open with:
- Full legal/brand name
- One-line identifying description (location, sector/department, program/product lines)
- Specific role on the relevant Genesis Mission project
- Inline citation (source name + link to primary announcement/program page)

Followed by three bold sub-bullets, **in this order**:

1. **Grants & Commitments** / *Zuschüsse & Verpflichtungen*
   Corporate background, LOIs/MOUs/CHIPS Act commitments, award amounts & dates, program names, partnering institutions, entity's role (prime awardee vs. collaborator), leading PI/co-investigators.

2. **Technical Capabilities** / *Technische Kapazitäten*
   Concrete hardware/software specs — chip architectures, quantum modalities, interconnects, cooling systems, battery chemistries, manufacturing processes. **No marketing language** — voltage classes, cycle life, process names only.

3. **Mission Domains** / *Missionsdomänen*
   The specific Genesis Mission problem space addressed, real-world data/assets contributed, and how the methodology generalizes to broader mission domains.

#### 🌍 Global References

For major compute/model providers, thread references through:
- `## Abstract` / `## Zusammenfassung`
- `§2.1` (heterogeneous supercomputing core)
- `§1` (ASCII consortium topology diagram)

#### 📎 Appendix Verification

Cross-check the reprocessed entity's contributions against:
- `### A.3 Industry & Technology Partners` / `### A.3 Industrie- und Technologiepartner` (industry/hardware)
- Corresponding lab/university appendix tables, where present

---

### 5️⃣ Reference Integrity (`reference_coverage.md`)

- ✅ Retain **all** historical press releases, partner announcements, and collaboration URLs.
- ✅ Append newly sourced links under the appropriate entity tag(s), per the Section 2 taxonomy — not under a flat sub-header list.
- ✅ When reprocessing an entity, pull its full link set by filtering on its tag(s) rather than searching an untagged file.
- 🚫 Never remove existing valid links. (This does not override Step 0 — a link can be retained for its historical record while the *claim* it was cited for is corrected or flagged elsewhere in the entry.)

---

### 6️⃣ Version Increment

Bump the patch version on **line 1** of both `README.md` and `README.de.md` synchronously:

```diff
- **Version**: 0.2.8-alpha
+ **Version**: 0.2.9-alpha
```

---

### 7️⃣ Changelog Entry (`CHANGELOG.md`)

Document under the active version:
- The reprocessed entity name
- The `Process Count` schema migration
- The tag(s) applied/updated in `reference_coverage.md` for this entity
- Specific technical additions applied to **both** English and German docs
- Any corrections or removals made during the Step 0 verification pass

---

### 8️⃣ Release Management Policy

> 🚫 Do **NOT** run `git tag` or `git push`.

Tagging and release deployment remain isolated to `prompts/release_and_tag.md`.

---

## 🔬 Fact-Checking Requirement (Mandatory)

> **This is science- and policy-adjacent documentation. Every factual claim must be verifiable.**

- ✅ Verify all award amounts, dates, PI names, program titles, and technical specs (cycle life, voltage classes, process names) against **primary sources** before writing them into a profile.
- ✅ Prefer official announcements, `.gov`/`.edu` sources, and company press releases over secondary summaries.
- 🚫 Never fabricate or extrapolate unverified figures.
- ⚠️ If a specific number or fact cannot be confirmed from a real, citable source, state that it is unconfirmed rather than inserting a plausible-sounding value.
- 📌 Every entry must carry an inline citation (source name + working link) to its primary announcement or program page.
- 🔁 This requirement applies retroactively per Step 0: existing entries are not grandfathered in as "already verified" simply because they were written in a prior pass.

---

## 🧾 Reference Structure — Worked Example

<details>
<summary><strong>🇺🇸 English</strong></summary>

> Clean Republic SODO, LLC (Hill Topper / Dakota Lithium): Seattle-based lithium battery and light electric mobility manufacturer ([electric-bike-kit.com](https://www.electric-bike-kit.com/)) participating as the industry partner on the Phase I Genesis Mission project *Adversarial Robustness Framework for AI Models in Battery Management and Energy Science Workflows*, the only inaugural-cohort award led from North Dakota (UND Selected for Inaugural U.S. Department of Energy Genesis Mission Project, [blogs.und.edu/...](https://blogs.und.edu/und-today/2026/07/und-selected-for-inaugural-u-s-department-of-energy-genesis-mission-project/)).
>
> * **Grants & Commitments:** Founded in Seattle around 2008, incorporated in Washington State in 2012; operates the Hill Topper e-bike kit line and Dakota Lithium LFP battery brand with R&D/pilot manufacturing in Grand Forks, ND, co-located with UND. Prior support: $2M DOE award (Dec 2024) under the $25M Platform Technologies for Transformative Battery Manufacturing program (with Boise State University and Savannah River National Laboratory); ND Industrial Commission grant of $238,366 to UND, matched by $457,873 in company funds. Under Genesis: industry collaborator (not prime awardee) on the nine-month Phase I effort led by UND Assistant Professor Jielun Zhang, with co-investigators Jueming Hu, Feng Ye (UW–Madison), and Fuhao Li (La Sierra University).
> * **Technical Capabilities:** LiFePO4 deep-cycle packs (12V/24V/48V classes) with integrated BMS (cell balancing, over-charge/discharge & short-circuit protection, thermal management). Dakota Lithium Materials develops long-cycle-life iron-phosphate cathode powders (6,000–10,000 cycle target vs. ~2,000-cycle baseline) via dry-process resonant acoustic mixing (RAM); the Dec 2024 DOE award extends this to sodium iron phosphate cathodes.
> * **Mission Domains:** Targets adversarial attacks on AI-based battery management (manipulated telemetry, poisoned training data, cyber intrusion). Delivers standardized adversarial testing, compromised-data detection, and federated learning across organizations without centralizing proprietary telemetry. Real fielded pack/cell/BMS data ground the framework; methodology generalizes to grid-edge storage, autonomous lab instrumentation, and sensor-driven experimental control.
>
> **Tags (`reference_coverage.md`):** `company:Dakota Lithium`, `lab:SRNL`, `university:Boise State University`

> ⚠️ **Illustrative note (added by verification pass):** This worked example is a template for format only. If used as a live entry, re-verify current corporate status before publishing — company ownership and operating structure can change between processing passes (see Step 0), and a profile written at one point in time may not reflect the entity's status at the time of reprocessing.

</details>

<details>
<summary><strong>🇩🇪 Deutsch</strong></summary>

> Clean Republic SODO, LLC (Hill Topper / Dakota Lithium): In Seattle ansässiger Hersteller von Lithiumbatterien und Leicht-Elektromobilität ([electric-bike-kit.com](https://www.electric-bike-kit.com/)), der als Industriepartner am Phase-I-Genesis-Missionsprojekt „Adversarial Robustness Framework for AI Models in Battery Management and Energy Science Workflows" teilnimmt.
>
> * **Zuschüsse & Verpflichtungen:** Gegründet um 2008 in Seattle, 2012 in Washington eingetragen; betreibt Hill Topper und die Marke Dakota Lithium mit Forschungs-/Pilotfertigung in Grand Forks, ND, in Kooperation mit der UND. Bisherige Förderung: 2 Mio. USD DOE-Förderung (Dez. 2024) im 25-Mio.-USD-Programm „Platform Technologies for Transformative Battery Manufacturing"; ND-Zuschuss von 238.366 USD, ergänzt durch 457.873 USD Eigenmittel. Im Rahmen von Genesis: Industriepartner (nicht Hauptzuwendungsempfänger) unter Leitung von UND-Assistant Professor Jielun Zhang.
> * **Technische Kapazitäten:** LiFePO4-Deep-Cycle-Packs (12V/24V/48V) mit integriertem BMS. Dakota Lithium Materials entwickelt langlebige Eisenphosphat-Kathodenpulver (Ziel: 6.000–10.000 Zyklen) via Trocken-RAM-Verfahren; Erweiterung auf Natrium-Eisenphosphat-Kathoden.
> * **Missionsdomänen:** Adressiert Angriffsflächen des KI-gestützten Batteriemanagements; liefert Testverfahren, Erkennung manipulierter Daten und Federated-Learning-Architekturen. Überträgt sich auf dezentrale Netzspeicherung, autonome Laborinstrumentierung, sensorgeführte experimentelle Steuerung.
>
> **Tags (`reference_coverage.md`):** `company:Dakota Lithium`, `lab:SRNL`, `university:Boise State University`

> ⚠️ **Hinweis (aus der Verifizierungsprüfung):** Dieses Beispiel dient nur als Formatvorlage. Bei Verwendung als aktiver Eintrag muss der aktuelle Unternehmensstatus vor Veröffentlichung erneut geprüft werden — Eigentumsverhältnisse und Unternehmensstruktur können sich zwischen Verarbeitungsdurchläufen ändern (siehe Schritt 0).

</details>

---

## ✅ Pre-Flight Checklist

- [ ] **Step 0 verification pass completed:** all existing facts for the target entity re-checked against primary sources, not just new additions
- [ ] Any disproven, outdated, or unconfirmed existing claims corrected, removed, or flagged in both languages
- [ ] Corrections logged separately in `CHANGELOG.md`
- [ ] Repository files accessible (README.md, README.de.md, coverage.md, reference_coverage.md, CHANGELOG.md)
- [ ] Target entity identified
- [ ] Primary source document confirmed (top-level only, no child papers)
- [ ] All new facts verified against primary sources
- [ ] Target entity's links located in `reference_coverage.md` via its tag(s), not by scanning a flat list
- [ ] Any newly sourced links appended under the correct tag(s)
- [ ] Bilingual sync confirmed
- [ ] Version bumped in both README files
- [ ] Changelog entry drafted
- [ ] No `git tag` / `git push` executed
