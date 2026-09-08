# 🧬 Genesis Mission — Entity Reprocessing & Version Control Protocol

> **Purpose:** Systematically reprocess a target entity's profile across bilingual documentation, track processing iterations, and maintain repository integrity — with rigorous fact-checking as a non-negotiable requirement.

---

## 📋 Context

The **Genesis Mission** repository maintains parallel documentation:

| File | Purpose |
|---|---|
| `README.md` | Primary English documentation |
| `README.de.md` | German counterpart (strict sync required) |
| `references.md` | Source link archive |
| `coverage.md` | Entity tracking & metrics |
| `CHANGELOG.md` | Version history |

When an entity requires reprocessing — updated hardware specs, refreshed MOUs, expanded technical frameworks, or corrected metrics — the update must propagate **synchronously** across both language versions while incrementing a processing counter.

---

## ⚙️ Execution Rules

### 1️⃣ Scope Restriction — Paper Traversal

> 🚫 **Do NOT** read the `child_papers/` folder.

Confine all analysis, technical updates, and reference extraction strictly to the **top-level parent document** and primary source material provided. Never recursively fetch, read, or traverse child papers, sub-references, or nested citations.

---

### 2️⃣ Schema Migration & Counter Increment (`coverage.md`)

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

### 3️⃣ Dual-Language Profile Updates

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

### 4️⃣ Reference Integrity (`references.md`)

- ✅ Retain **all** historical press releases, partner announcements, and collaboration URLs.
- ✅ Append newly sourced links under appropriate sub-headers.
- 🚫 Never remove existing valid links.

---

### 5️⃣ Version Increment

Bump the patch version on **line 1** of both `README.md` and `README.de.md` synchronously:

```diff
- **Version**: 0.2.8-alpha
+ **Version**: 0.2.9-alpha
```

---

### 6️⃣ Changelog Entry (`CHANGELOG.md`)

Document under the active version:
- The reprocessed entity name
- The `Process Count` schema migration
- Specific technical additions applied to **both** English and German docs

---

### 7️⃣ Release Management Policy

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

---

## 🧾 Reference Structure — Worked Example

<details>
<summary><strong>🇺🇸 English</strong></summary>

> Clean Republic SODO, LLC (Hill Topper / Dakota Lithium): Seattle-based lithium battery and light electric mobility manufacturer ([electric-bike-kit.com](https://www.electric-bike-kit.com/)) participating as the industry partner on the Phase I Genesis Mission project *Adversarial Robustness Framework for AI Models in Battery Management and Energy Science Workflows*, the only inaugural-cohort award led from North Dakota (UND Selected for Inaugural U.S. Department of Energy Genesis Mission Project, [blogs.und.edu/...](https://blogs.und.edu/und-today/2026/07/und-selected-for-inaugural-u-s-department-of-energy-genesis-mission-project/)).
>
> * **Grants & Commitments:** Founded in Seattle around 2008, incorporated in Washington State in 2012; operates the Hill Topper e-bike kit line and Dakota Lithium LFP battery brand with R&D/pilot manufacturing in Grand Forks, ND, co-located with UND. Prior support: $2M DOE award (Dec 2024) under the $25M Platform Technologies for Transformative Battery Manufacturing program (with Boise State University and Savannah River National Laboratory); ND Industrial Commission grant of $238,366 to UND, matched by $457,873 in company funds. Under Genesis: industry collaborator (not prime awardee) on the nine-month Phase I effort led by UND Assistant Professor Jielun Zhang, with co-investigators Jueming Hu, Feng Ye (UW–Madison), and Fuhao Li (La Sierra University).
> * **Technical Capabilities:** LiFePO4 deep-cycle packs (12V/24V/48V classes) with integrated BMS (cell balancing, over-charge/discharge & short-circuit protection, thermal management). Dakota Lithium Materials develops long-cycle-life iron-phosphate cathode powders (6,000–10,000 cycle target vs. ~2,000-cycle baseline) via dry-process resonant acoustic mixing (RAM); the Dec 2024 DOE award extends this to sodium iron phosphate cathodes.
> * **Mission Domains:** Targets adversarial attacks on AI-based battery management (manipulated telemetry, poisoned training data, cyber intrusion). Delivers standardized adversarial testing, compromised-data detection, and federated learning across organizations without centralizing proprietary telemetry. Real fielded pack/cell/BMS data ground the framework; methodology generalizes to grid-edge storage, autonomous lab instrumentation, and sensor-driven experimental control.

</details>

<details>
<summary><strong>🇩🇪 Deutsch</strong></summary>

> Clean Republic SODO, LLC (Hill Topper / Dakota Lithium): In Seattle ansässiger Hersteller von Lithiumbatterien und Leicht-Elektromobilität ([electric-bike-kit.com](https://www.electric-bike-kit.com/)), der als Industriepartner am Phase-I-Genesis-Missionsprojekt „Adversarial Robustness Framework for AI Models in Battery Management and Energy Science Workflows" teilnimmt.
>
> * **Zuschüsse & Verpflichtungen:** Gegründet um 2008 in Seattle, 2012 in Washington eingetragen; betreibt Hill Topper und die Marke Dakota Lithium mit Forschungs-/Pilotfertigung in Grand Forks, ND, in Kooperation mit der UND. Bisherige Förderung: 2 Mio. USD DOE-Förderung (Dez. 2024) im 25-Mio.-USD-Programm „Platform Technologies for Transformative Battery Manufacturing"; ND-Zuschuss von 238.366 USD, ergänzt durch 457.873 USD Eigenmittel. Im Rahmen von Genesis: Industriepartner (nicht Hauptzuwendungsempfänger) unter Leitung von UND-Assistant Professor Jielun Zhang.
> * **Technische Kapazitäten:** LiFePO4-Deep-Cycle-Packs (12V/24V/48V) mit integriertem BMS. Dakota Lithium Materials entwickelt langlebige Eisenphosphat-Kathodenpulver (Ziel: 6.000–10.000 Zyklen) via Trocken-RAM-Verfahren; Erweiterung auf Natrium-Eisenphosphat-Kathoden.
> * **Missionsdomänen:** Adressiert Angriffsflächen des KI-gestützten Batteriemanagements; liefert Testverfahren, Erkennung manipulierter Daten und Federated-Learning-Architekturen. Überträgt sich auf dezentrale Netzspeicherung, autonome Laborinstrumentierung, sensorgeführte experimentelle Steuerung.

</details>

---

## ✅ Pre-Flight Checklist

- [ ] Repository files accessible (README.md, README.de.md, coverage.md, references.md, CHANGELOG.md)
- [ ] Target entity identified
- [ ] Primary source document confirmed (top-level only, no child papers)
- [ ] All facts verified against primary sources
- [ ] Bilingual sync confirmed
- [ ] Version bumped in both README files
- [ ] Changelog entry drafted
- [ ] No `git tag` / `git push` executed
