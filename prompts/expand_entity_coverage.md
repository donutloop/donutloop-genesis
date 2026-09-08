# Instructions: Expanding Entity Coverage and Profile Integration

## Context
The Genesis Mission repository maintains a central research paper (`README.md`), a curated reference index (`references.md`), and an ecosystem coverage tracker (`coverage.md`). When expanding or formally documenting an entity's role within the Genesis Mission ecosystem, updates must be systematically applied across all three files to ensure architectural consistency, metric accuracy, and reference integrity.

## Task
Systematically document a target entity's technical and strategic role within the Genesis Mission ecosystem by updating `README.md`, preserving references in `references.md`, updating `coverage.md`, and incrementing the project version.

## Execution Rules

### 1. Scope Restriction: Paper Traversal
* **Do Not Read Child Papers:** Confine all analysis, technical updates, and reference extractions strictly to the top-level parent document and primary source material provided. Under no circumstances should child papers, sub-references, or nested citations be recursively fetched, read, or traversed.

### 2. Integrate Entity Profile in `README.md`
* **Section Routing:** Determine the correct target section by entity type before drafting the profile:
  * **Industry, hyperscale, and hardware entities** (companies, compute/model providers, manufacturers, industry collaborators) → `### 3.1 Industry, Hyperscale & Hardware Commitments`.
  * **National Laboratories** (DOE national labs, federally funded R&D centers operated on the government's behalf) → `### 3.2 National Laboratories`.
  * **Universities and academic research entities** (universities, university labs, PI-led academic teams, national-lab academic partnerships) → `### 3.3 University Research Partners`.
* **Detailed Profile:** Add a dedicated entry for the entity under the section determined above. Each entry must open with a lead-in line giving the entity's full legal/brand name, a one-line identifying description (location, sector or academic department, program/product lines), its specific role on the relevant Genesis Mission project, and an inline citation with source name and link to the primary announcement or program page. The entry must then continue with the following bold sub-bullets, in this order:
  * **Grants & Commitments:** Corporate background (founding date/location, incorporation, HQ, facility locations), official MOUs, CHIPS Act LOIs, or federal/state funding commitments, including award amounts, award dates, program names, co-selected/partnering institutions, and the entity's specific role (e.g., prime awardee vs. industry collaborator) on any Genesis-affiliated effort, naming the leading PI/institution and co-investigators where applicable.
  * **Technical Capabilities:** Specific hardware architectures, product lines, software platforms, quantum modalities, or HPC/supercomputing substrates the entity supplies or operates (e.g., GPU/QPU platforms, liquid cooling, wafer-scale engines, battery chemistries, manufacturing processes), described with concrete specifications (voltage/capacity classes, cycle life, process names, etc.) rather than generic marketing language.
  * **Mission Domains:** The specific Genesis Mission problem space the entity's contribution addresses (e.g., adversarial robustness, federated learning, sensor/telemetry integrity, thermal/safety modeling), what real-world data or assets the entity contributes to that effort, and how the resulting methodology generalizes to broader Genesis Mission domains (e.g., grid-edge storage, autonomous lab instrumentation, sensor-driven experimental control).
* **Abstract & Technical Framework (§1 & §2.1):** For major compute or model providers, incorporate concise references into the Abstract (`## Abstract`), heterogeneous supercomputing core (`§2.1`), and ASCII consortium topology diagram (`§1`).
* **Appendix Table:** Ensure the entity is listed with its primary contribution in the appropriate category table — industry/hardware entities under `### A.3 Industry & Technology Partners`; national laboratories and universities/academic entities under their corresponding appendix tables, if present.

**Reference structure** (do not reuse this content verbatim for a different entity — it illustrates the required level of specificity, lead-in framing, and sub-bullet structure only):

> Clean Republic SODO, LLC (Hill Topper / Dakota Lithium): Seattle-based lithium battery and light electric mobility manufacturer ([electric-bike-kit.com](https://www.electric-bike-kit.com/)) participating as the industry partner on the Phase I Genesis Mission project Adversarial Robustness Framework for AI Models in Battery Management and Energy Science Workflows, the only inaugural-cohort award led from North Dakota (UND Selected for Inaugural U.S. Department of Energy Genesis Mission Project, [blogs.und.edu/und-today/2026/07/und-selected-for-inaugural-u-s-department-of-energy-genesis-mission-project/](https://blogs.und.edu/und-today/2026/07/und-selected-for-inaugural-u-s-department-of-energy-genesis-mission-project/)).
>
> * **Grants & Commitments:** Founded in Seattle around 2008 and incorporated in Washington State in 2012, the company operates the Hill Topper electric-bike conversion kit line and the Dakota Lithium lithium iron phosphate (LFP) battery brand, with a research and pilot-manufacturing presence in Grand Forks, North Dakota co-located with the University of North Dakota (UND). Prior federal and state support includes a $2 Million DOE award (December 2024) under the $25 Million Platform Technologies for Transformative Battery Manufacturing program — one of eleven selections, executed with Boise State University and Savannah River National Laboratory — and a North Dakota Industrial Commission Renewable Energy Program grant of $238,366 to UND matched by $457,873 in company funds. Under Genesis the company contributes as an industry collaborator rather than prime awardee on the nine-month Phase I effort led by UND Assistant Professor Jielun Zhang (Electrical Engineering & Computer Science) with co-investigator Jueming Hu (Mechanical Engineering), Feng Ye (University of Wisconsin–Madison) and Fuhao Li (La Sierra University).
> * **Technical Capabilities:** Supplies the applied battery substrate for the project — LiFePO4 deep-cycle packs across 12 V, 24 V and 48 V classes for marine, RV, solar, powersports and light-EV duty, each with an integrated battery management system (BMS) performing cell balancing, over-charge/over-discharge and short-circuit protection and thermal management, alongside the Hill Topper kit line. Its Dakota Lithium Materials arm develops long-cycle-life iron-phosphate cathode powders (targeting 6,000–10,000 cycles against the ~2,000-cycle commercial baseline) using a dry-process resonant acoustic mixing (RAM) route, and the December 2024 DOE award extends that process to sodium iron phosphate cathodes for sodium-ion cells that avoid lithium and cobalt supply-chain exposure.
> * **Mission Domains:** The project targets the adversarial attack surface of AI-based battery management — manipulated sensor telemetry, poisoned training data and cyber intrusion that can mask cell degradation, hide thermal-runaway precursors or induce unsafe charge/discharge commands — and delivers standardized adversarial testing methods for BMS models, compromised-data detection techniques and federated learning frameworks that train robust models across organizations without centralizing proprietary battery telemetry. Clean Republic's fielded pack, cell and BMS data give the framework real operating records rather than synthetic traces, and the resulting robustness methodology generalizes from electric-vehicle and stationary storage to the wider energy science workflows — grid-edge storage, autonomous laboratory instrumentation and sensor-driven experimental control — that depend on trustworthy AI under adversarial conditions.

### 3. Preserve References in `references.md`
* **Link Integrity:** Verify and retain all official links, press releases, and collaborator entries for the entity in `references.md` (e.g., under `## 2. Collaborators` and `## 4. Executive, Federal & Partner Announcements`). **Do NOT remove existing reference URLs.**

### 4. Update Ecosystem Coverage Tracker (`coverage.md`)
* **Status Upgrade:** Change the entity's row status from `📋 Brief Mention` to `✅ Full Profile`, update the `Paper Section` column (e.g., `§3.1, A.3`), and summarize key technical highlights in `Notes`.
* **Metrics Recalculation:** Recalculate and update both summary tables:
  * **By Entity Type:** Increment `✅ Full` and decrement `📋 Brief` for the entity category (e.g., Industry Partners).
  * **By Coverage Level:** Update the total `✅ Full Profile` and `📋 Brief Mention` counts and percentages.
  * **Footnote:** Update the total entity profile count in the closing note.

### 5. Version Increment
* **Version Bump:** Increment the patch version string on line 1 of `README.md` (e.g., `**Version**: 0.2.7-alpha` → `**Version**: 0.2.8-alpha`).

### 6. Changelog Update
* **Changelog Entry:** Update `CHANGELOG.md` under the active release version section to log the newly expanded entity profile, status upgrade in `coverage.md`, and corresponding section updates in `README.md`.

### 7. Release Management Policy
* **Outsourced Tagging:** Do NOT execute `git tag` or `git push` commands directly during this workflow prompt. Release tagging and publishing are outsourced to [`prompts/release_and_tag.md`](./release_and_tag.md) and should only be performed when a release step is explicitly requested by the user.
