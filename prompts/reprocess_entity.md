# Instructions: Expanding Entity Coverage and Profile Integration

## Context

The Genesis Mission repository maintains a central research paper in English (`README.md`) and German (`README.de.md`), a curated reference index (`references.md`), and an ecosystem coverage tracker (`coverage.md`). When expanding or formally documenting an entity's role within the Genesis Mission ecosystem, updates must be systematically applied across both language versions of the documentation as well as tracking files to ensure architectural consistency, metric accuracy, and reference integrity.

## Task

Systematically document a target entity's technical and strategic role within the Genesis Mission ecosystem by updating `README.md` and `README.de.md` synchronously, preserving references in `references.md`, updating `coverage.md`, and incrementing the project patch version across all primary files.

## REPROCESS

When the task is **REPROCESS**, reprocess **ONE existing target entity** using the requirements already defined in this file.

### Minimal Steps

1. **IDENTIFY** — Identify the target entity and exact target tag.
2. **FILTER** — Filter `reference_coverage.md` to URLs carrying the exact target tag.
3. **READ** — Deep-read only the filtered primary sources; do not read child papers or expand source discovery.
4. **UPDATE** — Update the existing entity across the required files and both languages.
5. **SYNC** — Update references, coverage, version, Process Count, and changelog.
6. **AUDIT** — Perform one final audit, then stop.

**REPROCESS = IDENTIFY → FILTER → READ → UPDATE → SYNC → AUDIT → STOP**

### REPROCESS Rules

* Reprocess **one entity only**.
* Identify the exact target tag **before source analysis**.
* `SOURCE SET = URLs WHERE URL_TAG == TARGET_TAG`.
* Only URLs carrying the exact target tag may be used for new source discovery and source analysis.
* Do not expand the source set through untagged URLs, snippets, titles, metadata, child papers, sub-references, or nested citations.
* Deep-read all URLs in the filtered source set.
* After all tagged URLs have been deep-read, **stop source discovery**.
* Existing valid URLs already present in `reference_coverage.md` must be preserved even when they are outside the target tag.
* Update the existing entity; do **not** create a duplicate.
* Keep English and German synchronized.
* Increment the patch version exactly once.
* Increment Process Count exactly once for the target entity.
* Do not modify unrelated content.
* Do not repeat or restart the workflow.
* Do not run `git tag` or `git push`.

## Execution Rules

### 1. Scope Restriction: Paper Traversal

* **Do Not Read Child Papers:** Confine all analysis, technical updates, and reference extractions strictly to the top-level parent document and primary source material provided. Under no circumstances should child papers, sub-references, or nested citations be recursively fetched, read, or traversed.

### 2. Dual-Language Profile Integration (`README.md` and `README.de.md`)

* **Strict Bilingual Sync:** Every update made to `README.md` must have an exact, fully translated counterpart applied in `README.de.md` under matching section hierarchies.
* **Section Routing:** Determine the correct target section by entity type before drafting the profile:

  * **Industry, hyperscale, and hardware entities** (companies, compute/model providers, manufacturers, industry collaborators) → `### 3.1 Industry, Hyperscale & Hardware Commitments` (`README.md`) / `### 3.1 Industrie-, Hyperscale- & Hardware-Verpflichtungen` (`README.de.md`).
  * **National Laboratories** (DOE national labs, federally funded R&D centers operated on the government's behalf) → `### 3.2 National Laboratories` (`README.md`) / `### 3.2 Nationale Laboratorien` (`README.de.md`).
  * **Universities and academic research entities** (universities, university labs, PI-led academic teams, national-lab academic partnerships) → `### 3.3 University Research Partners` (`README.md`) / `### 3.3 Universitäre Forschungspartner` (`README.de.md`).
* **Detailed Profile:** Add a dedicated entry for the entity under the section determined above in both language files. Each entry must open with a lead-in line giving the entity's full legal/brand name, a one-line identifying description (location, sector or academic department, program/product lines), its specific role on the relevant Genesis Mission project, and an inline citation with source name and link to the primary announcement or program page. The entry must then continue with the following bold sub-bullets, in this order:

  * **Grants & Commitments** / **Zuschüsse & Verpflichtungen:** Corporate background (founding date/location, incorporation, HQ, facility locations), official MOUs, CHIPS Act LOIs, or federal/state funding commitments, including award amounts, award dates, program names, co-selected/partnering institutions, and the entity's specific role (e.g., prime awardee vs. industry collaborator) on any Genesis-affiliated effort, naming the leading PI/institution and co-investigators where applicable.
  * **Technical Capabilities** / **Technische Kapazitäten:** Specific hardware architectures, product lines, software platforms, quantum modalities, or HPC/supercomputing substrates the entity supplies or operates (e.g., GPU/QPU platforms, liquid cooling, wafer-scale engines, battery chemistries, manufacturing processes), described with concrete specifications (voltage/capacity classes, cycle life, process names, etc.) rather than generic marketing language.
  * **Mission Domains** / **Missionsdomänen:** The specific Genesis Mission problem space the entity's contribution addresses (e.g., adversarial robustness, federated learning, sensor/telemetry integrity, thermal/safety modeling), what real-world data or assets the entity contributes to that effort, and how the resulting methodology generalizes to broader Genesis Mission domains (e.g., grid-edge storage, autonomous lab instrumentation, sensor-driven experimental control).
* **Abstract & Technical Framework (§1 & §2.1):** For major compute or model providers, incorporate concise references into the Abstract (`## Abstract` / `## Zusammenfassung`), heterogeneous supercomputing core (`§2.1`), and ASCII consortium topology diagram (`§1`) across both `README.md` and `README.de.md`.
* **Appendix Table:** Ensure the entity is listed with its primary contribution in the appropriate category table in both files — industry/hardware entities under `### A.3 Industry & Technology Partners` / `### A.3 Industrie- und Technologiepartner`; national laboratories and universities/academic entities under their corresponding appendix tables, if present.

**Reference structure (English):**

> Clean Republic SODO, LLC (Hill Topper / Dakota Lithium): Seattle-based lithium battery and light electric mobility manufacturer ([electric-bike-kit.com](https://www.electric-bike-kit.com/)) participating as the industry partner on the Phase I Genesis Mission project Adversarial Robustness Framework for AI Models in Battery Management and Energy Science Workflows, the only inaugural-cohort award led from North Dakota (UND Selected for Inaugural U.S. Department of Energy Genesis Mission Project, [blogs.und.edu/und-today/2026/07/und-selected-for-inaugural-u-s-department-of-energy-genesis-mission-project/](https://blogs.und.edu/und-today/2026/07/und-selected-for-inaugural-u-s-department-of-energy-genesis-mission-project/)).
>
> * **Grants & Commitments:** Founded in Seattle around 2008 and incorporated in Washington State in 2012, the company operates the Hill Topper electric-bike conversion kit line and the Dakota Lithium lithium iron phosphate (LFP) battery brand, with a research and pilot-manufacturing presence in Grand Forks, North Dakota co-located with the University of North Dakota (UND). Prior federal and state support includes a $2 Million DOE award (December 2024) under the $25 Million Platform Technologies for Transformative Battery Manufacturing program — one of eleven selections, executed with Boise State University and Savannah River National Laboratory — and a North Dakota Industrial Commission Renewable Energy Program grant of $238,366 to UND matched by $457,873 in company funds. Under Genesis the company contributes as an industry collaborator rather than prime awardee on the nine-month Phase I effort led by UND Assistant Professor Jielun Zhang (Electrical Engineering & Computer Science) with co-investigator Jueming Hu (Mechanical Engineering), Feng Ye (University of Wisconsin–Madison) and Fuhao Li (La Sierra University).
> * **Technical Capabilities:** Supplies the applied battery substrate for the project — LiFePO4 deep-cycle packs across 12 V, 24 V and 48 V classes for marine, RV, solar, powersports and light-EV duty, each with an integrated battery management system (BMS) performing cell balancing, over-charge/over-discharge and short-circuit protection and thermal management, alongside the Hill Topper kit line. Its Dakota Lithium Materials arm develops long-cycle-life iron-phosphate cathode powders (targeting 6,000–10,000 cycles against the ~2,000-cycle commercial baseline) using a dry-process resonant acoustic mixing (RAM) route, and the December 2024 DOE award extends that process to sodium iron phosphate cathodes for sodium-ion cells that avoid lithium and cobalt supply-chain exposure.
> * **Mission Domains:** The project targets the adversarial attack surface of AI-based battery management — manipulated sensor telemetry, poisoned training data and cyber intrusion that can mask cell degradation, hide thermal-runaway precursors or induce unsafe charge/discharge commands — and delivers standardized adversarial testing methods for BMS models, compromised-data detection techniques and federated learning frameworks that train robust models across organizations without centralizing proprietary battery telemetry. Clean Republic's fielded pack, cell and BMS data give the framework real operating records rather than synthetic traces, and the resulting robustness methodology generalizes from electric-vehicle and stationary storage to the wider energy science workflows — grid-edge storage, autonomous laboratory instrumentation and sensor-driven experimental control — that depend on trustworthy AI under adversarial conditions.

**Reference structure (German counterpart):**

> Clean Republic SODO, LLC (Hill Topper / Dakota Lithium): In Seattle ansässiger Hersteller von Lithiumbatterien und Leicht-Elektromobilität ([electric-bike-kit.com](https://www.electric-bike-kit.com/)), der als Industriepartner am Phase-I-Genesis-Missionsprojekt „Adversarial Robustness Framework for AI Models in Battery Management and Energy Science Workflows“ teilnimmt – der einzigen Auszeichnung der ersten Kohorte unter Leitung aus North Dakota (UND Selected for Inaugural U.S. Department of Energy Genesis Mission Project, [blogs.und.edu/und-today/2026/07/und-selected-for-inaugural-u-s-department-of-energy-genesis-mission-project/](https://blogs.und.edu/und-today/2026/07/und-selected-for-inaugural-u-s-department-of-energy-genesis-mission-project/)).
>
> * **Zuschüsse & Verpflichtungen:** Gegründet um 2008 in Seattle und 2012 im US-Bundesstaat Washington eingetragen, betreibt das Unternehmen die E-Bike-Umrüstsatzlinie Hill Topper und die Lithium-Eisenphosphat-(LFP)-Batteriemarke Dakota Lithium mit einer Forschungs- und Pilotfertigungspräsenz in Grand Forks, North Dakota, in Kooperation mit der University of North Dakota (UND). Zu den bisherigen Bundes- und Landesförderungen zählen eine DOE-Förderung in Höhe von 2 Mio. USD (Dezember 2024) im Rahmen des mit 25 Mio. USD dotierten Programms „Platform Technologies for Transformative Battery Manufacturing“ – eine von elf Auszeichnungen, die gemeinsam mit der Boise State University und dem Savannah River National Laboratory realisiert wurde – sowie ein Zuschuss des North Dakota Industrial Commission Renewable Energy Program in Höhe von 238.366 USD an die UND, ergänzt durch 457.873 USD an Eigenmitteln des Unternehmens. Im Rahmen von Genesis agiert das Unternehmen als Industriepartner und nicht als Hauptzuwendungsempfänger im neunmonatigen Phase-I-Projekt unter der Leitung von UND-Assistant Professor Jielun Zhang (Electrical Engineering & Computer Science) gemeinsam mit Co-Investigator Jueming Hu (Mechanical Engineering), Feng Ye (University of Wisconsin–Madison) und Fuhao Li (La Sierra University).
> * **Technische Kapazitäten:** Liefert das angewandte Batteriesubstrat für das Projekt – LiFePO4-Deep-Cycle-Packs der 12-V-, 24-V- und 48-V-Klassen für Marine-, Wohnmobil-, Solar-, Powersport- und Leicht-EV-Einsätze, jeweils mit integriertem Batteriemanagementsystem (BMS) für Zellbalancing, Überlade-/Tiefentlade- sowie Kurzschlussschutz und Thermomanagement, neben der Hill Topper-Bausatzlinie. Der Unternehmensteil Dakota Lithium Materials entwickelt langlebige Eisenphosphat-Kathodenpulver (Ziel: 6.000–10.000 Zyklen gegenüber dem kommerziellen Ausgangswert von ~2.000 Zyklen) im Trockenverfahren mittels resonanter akustischer Mischung (RAM). Die DOE-Förderung vom Dezember 2024 erweitert dieses Verfahren auf Natrium-Eisenphosphat-Kathoden für Natrium-Ionen-Zellen, um Rohstoffabhängigkeiten bei Lithium und Kobalt zu vermeiden.
> * **Missionsdomänen:** Das Projekt adressiert die Angriffsfläche des KI-gestützten Batteriemanagements – manipulierte Sensortelemetrie, vergiftete Trainingsdaten und Cyberangriffe, die Zelldegradation verschleiern, Vorläufer eines thermischen Durchgehens maskieren oder unsichere Lade-/Entladebefehle auslösen können. Es liefert standardisierte Testverfahren gegen Adversarial Attacks für BMS-Modelle, Erkennungsverfahren für manipulierte Daten sowie Federated-Learning-Architekturen zum organisationsübergreifenden Modelltraining ohne Offenlegung proprietärer Telemetrie. Die realen Batteriepack-, Zell- und BMS-Betriebsdaten von Clean Republic stellen praxisnahe Profile statt synthetischer Spuren bereit; die Methodik lässt sich von EV- und stationären Speichern auf breitere Workflows der Energiewissenschaften übertragen (z. B. dezentrale Netzspeicherung, autonome Laborinstrumentierung, sensorgeführte experimentelle Steuerung).

### 3. Preserve References in `references.md`

* **Link Integrity:** Verify and retain all official links, press releases, and collaborator entries for the entity in `references.md` (e.g., under `## 2. Collaborators` and `## 4. Executive, Federal & Partner Announcements`). **Do NOT remove existing reference URLs.**

### 4. Update Ecosystem Coverage Tracker (`coverage.md`)

* **Status Upgrade:** Change the entity's row status from `📋 Brief Mention` to `✅ Full Profile`, update the `Paper Section` column (e.g., `§3.1, A.3`), and summarize key technical highlights in `Notes`.
* **Metrics Recalculation:** Recalculate and update both summary tables:

  * **By Entity Type:** Increment `✅ Full` and decrement `📋 Brief` for the entity category (e.g., Industry Partners).
  * **By Coverage Level:** Update the total `✅ Full Profile` and `📋 Brief Mention` counts and percentages.
  * **Footnote:** Update the total entity profile count in the closing note.
* **Process Count:** Every applicable entity tracking table must begin with a `| Process Count | Entity | ... |` column structure.

  * If `Process Count` is absent, insert it as the first column.
  * Set all untouched entities to `0`.
  * Set the target entity to `1` for the current execution.
  * If the target entity already has a Process Count, increment only that entity by `1`.
  * One REPROCESS execution = exactly one Process Count increment for the target entity.

### 5. Version Increment Across Language Readmes

* **Version Bump:** Increment the patch version string on line 1 in both `README.md` and `README.de.md` synchronously (e.g., `**Version**: 0.2.7-alpha` → `**Version**: 0.2.8-alpha`).
* Increment the patch version **exactly once per execution**.

### 6. Changelog Update

* **Changelog Entry:** Update `CHANGELOG.md` under the active release version section to log the newly expanded entity profile, status upgrade in `coverage.md`, Process Count update, and corresponding section updates applied in both `README.md` and `README.de.md`.

### 7. Release Management Policy

* **Outsourced Tagging:** Do NOT execute `git tag` or `git push` commands directly during this workflow prompt. Release tagging and publishing are outsourced to `prompts/release_and_tag.md` and should only be performed when a release step is explicitly requested by the user.

## Final Audit

Perform **one final audit only after all editing is complete**.

Verify:

* The correct target entity was reprocessed.
* The exact target tag was identified before source analysis.
* Only URLs matching `URL_TAG == TARGET_TAG` were used for new source analysis.
* All tagged sources were deep-read before source discovery stopped.
* No child papers, nested citations, or untagged source expansion were used.
* Existing valid `references.md` URLs were preserved.
* The entity appears once in the appropriate profile section.
* English and German updates are synchronized.
* Required architecture/Abstract/§2.1 updates were made where applicable.
* Required appendix entry was updated.
* `coverage.md` status, section, notes, metrics, and Process Count are correct.
* Process Count increased exactly once for the target entity.
* Patch version increased exactly once in both README files.
* `CHANGELOG.md` records the update.
* No unrelated content was modified.
* No `git tag` or `git push` was executed.

If an audit error is found, **correct only that specific error**, recheck only the affected audit item, and stop. Do not restart the full workflow.

**REPROCESS = IDENTIFY → FILTER → READ → UPDATE → SYNC → AUDIT → STOP**
