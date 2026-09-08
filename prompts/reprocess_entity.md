# Instructions: Reprocessing Entity Profile and Incrementing Processing Counter

## Context
The Genesis Mission repository maintains `README.md`, `references.md`, and `coverage.md`. When an existing entity requires reprocessing (e.g., updating hardware specs, refreshing MOUs, expanding technical frameworks, or fixing metrics), the update must be applied systematically across all documentation while tracking the processing iteration count.

## Task
Reprocess a target entity within the Genesis Mission ecosystem, ensure the tracking table in `coverage.md` includes a `Process Count` column as the first column, increment that entity's counter (starting at `0` for the initial run if the column is missing), apply technical updates to `README.md`, preserve links in `references.md`, and bump the repository patch version.

## Execution Rules

### 1. Scope Restriction: Paper Traversal
* **Do Not Read Child Papers 'child_papers' folder:** Confine all analysis, technical updates, and reference extractions strictly to the top-level parent document and primary source material provided. Under no circumstances should child papers, sub-references, or nested citations be recursively fetched, read, or traversed.

### 2. Schema Migration & Counter Increment in `coverage.md`
* **First-Column Insertion:** Ensure every entity tracking table in `coverage.md` includes `Process Count` as the very first column (`| Process Count | Entity | ... |`).
* **Initial Baseline:** If the `Process Count` column does not exist, insert it into all table headers and data rows, setting the default value to `0` for all untouched rows.
* **Reprocess Entity Counter Update:** For the target entity being reprocessed:
  * If the column already existed: Increment the numeric value by `1` (e.g., `0` → `1`, `1` → `2`).
  * If the column was newly added: Set the reprocessed entity's counter to `1`.
* **Status & Details:** Update the reprocessed entity's `Status` (e.g., `📋 Brief Mention` → `✅ Full Profile`), `Paper Section`, and `Notes` with the refreshed architectural context.
* **Metrics Recalculation:** Recalculate and update the summary tables and footnote in `coverage.md` to reflect coverage counts accurately.

### 3. Update Reprocessed Entity Profile in `README.md`
* **Section §3.1 Updates:** Refresh the entry under `### 3.1 Industry, Hyperscale & Hardware Commitments`. The refreshed entry must open with a lead-in line giving the entity's full legal/brand name, a one-line identifying description (location, sector, product lines), its specific role on the relevant Genesis Mission project, and an inline citation with source name and link to the primary announcement or program page. The entry must then continue with the following bold sub-bullets, in this order, each rewritten to reflect the latest available information:
  * **Grants & Commitments:** Corporate background (founding date/location, incorporation, HQ, facility locations), updated state/federal LOIs, MOUs, CHIPS Act LOIs, or federal/state funding commitments, including award amounts, award dates, program names, co-selected/partnering institutions, and the entity's specific role (e.g., prime awardee vs. industry collaborator) on any Genesis-affiliated effort, naming the leading PI/institution and co-investigators where applicable.
  * **Technical Capabilities:** Specific hardware architectures, product lines, software platforms, quantum modalities, or HPC/supercomputing substrates the entity supplies or operates (e.g., newly added chip architectures, quantum hardware modalities, cluster interconnects, liquid cooling systems, battery chemistries, manufacturing processes), described with concrete specifications (voltage/capacity classes, cycle life, process names, etc.) rather than generic marketing language.
  * **Mission Domains:** The specific Genesis Mission problem space the entity's contribution addresses (e.g., adversarial robustness, federated learning, sensor/telemetry integrity, thermal/safety modeling), what real-world data or assets the entity contributes to that effort, and how the resulting methodology generalizes to broader Genesis Mission domains (e.g., grid-edge storage, autonomous lab instrumentation, sensor-driven experimental control).
* **Global References (§1 & §2.1):** For major compute or model providers, incorporate concise references into the Abstract (`## Abstract`), heterogeneous supercomputing core (`§2.1`), and ASCII consortium topology diagram (`§1`).
* **Appendix A.3:** Verify the reprocessed entity's contributions match the latest reprocessed scope in `### A.3 Industry & Technology Partners`.

**Reference structure** (do not reuse this content verbatim for a different entity — it illustrates the required level of specificity, lead-in framing, and sub-bullet structure only):

> Clean Republic SODO, LLC (Hill Topper / Dakota Lithium): Seattle-based lithium battery and light electric mobility manufacturer ([electric-bike-kit.com](https://www.electric-bike-kit.com/)) participating as the industry partner on the Phase I Genesis Mission project Adversarial Robustness Framework for AI Models in Battery Management and Energy Science Workflows, the only inaugural-cohort award led from North Dakota (UND Selected for Inaugural U.S. Department of Energy Genesis Mission Project, [blogs.und.edu/und-today/2026/07/und-selected-for-inaugural-u-s-department-of-energy-genesis-mission-project/](https://blogs.und.edu/und-today/2026/07/und-selected-for-inaugural-u-s-department-of-energy-genesis-mission-project/)).
>
> * **Grants & Commitments:** Founded in Seattle around 2008 and incorporated in Washington State in 2012, the company operates the Hill Topper electric-bike conversion kit line and the Dakota Lithium lithium iron phosphate (LFP) battery brand, with a research and pilot-manufacturing presence in Grand Forks, North Dakota co-located with the University of North Dakota (UND). Prior federal and state support includes a $2 Million DOE award (December 2024) under the $25 Million Platform Technologies for Transformative Battery Manufacturing program — one of eleven selections, executed with Boise State University and Savannah River National Laboratory — and a North Dakota Industrial Commission Renewable Energy Program grant of $238,366 to UND matched by $457,873 in company funds. Under Genesis the company contributes as an industry collaborator rather than prime awardee on the nine-month Phase I effort led by UND Assistant Professor Jielun Zhang (Electrical Engineering & Computer Science) with co-investigator Jueming Hu (Mechanical Engineering), Feng Ye (University of Wisconsin–Madison) and Fuhao Li (La Sierra University).
> * **Technical Capabilities:** Supplies the applied battery substrate for the project — LiFePO4 deep-cycle packs across 12 V, 24 V and 48 V classes for marine, RV, solar, powersports and light-EV duty, each with an integrated battery management system (BMS) performing cell balancing, over-charge/over-discharge and short-circuit protection and thermal management, alongside the Hill Topper kit line. Its Dakota Lithium Materials arm develops long-cycle-life iron-phosphate cathode powders (targeting 6,000–10,000 cycles against the ~2,000-cycle commercial baseline) using a dry-process resonant acoustic mixing (RAM) route, and the December 2024 DOE award extends that process to sodium iron phosphate cathodes for sodium-ion cells that avoid lithium and cobalt supply-chain exposure.
> * **Mission Domains:** The project targets the adversarial attack surface of AI-based battery management — manipulated sensor telemetry, poisoned training data and cyber intrusion that can mask cell degradation, hide thermal-runaway precursors or induce unsafe charge/discharge commands — and delivers standardized adversarial testing methods for BMS models, compromised-data detection techniques and federated learning frameworks that train robust models across organizations without centralizing proprietary battery telemetry. Clean Republic's fielded pack, cell and BMS data give the framework real operating records rather than synthetic traces, and the resulting robustness methodology generalizes from electric-vehicle and stationary storage to the wider energy science workflows — grid-edge storage, autonomous laboratory instrumentation and sensor-driven experimental control — that depend on trustworthy AI under adversarial conditions.

### 4. Maintain Integrity in `references.md`
* Retain all historical press releases, partner announcements, and collaboration URLs.
* Append newly sourced reference links under the appropriate sub-headers without removing existing valid links.

### 5. Version Increment
* Increment the patch version string on line 1 of `README.md` (e.g., `**Version**: 0.2.8-alpha` → `**Version**: 0.2.9-alpha`).

### 6. Changelog Update
* Add a changelog entry to `CHANGELOG.md` under the active version documenting the reprocessed entity, schema migration of the `Process Count` column, and specific technical additions.

### 7. Release Management Policy
* Do NOT run `git tag` or `git push`. Tagging and release deployment remain isolated to `prompts/release_and_tag.md`.
