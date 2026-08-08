# Changelog

All notable changes to the Genesis Mission documentation repository will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.4] - 2026-08-08

### Changed
- **Paper Enrichment (Entry #6 - AMD)**: Processed reference entry #6 (`AMD`, `www.amd.com`). Enriched Section 3.1 B in `README.md` and `README.de.md` with explicit technical details on AMD powering the inaugural Genesis AI supercomputer **Lux** (Instinct GPUs, EPYC CPUs, Pensando DPUs) and planned exascale supercomputer **Discovery**, alongside ROCm open software ecosystem expansion across national laboratory networks.
- **Index Status Update**: Marked Entry #6 status to `Processed` in `reference_coverage.md` and updated executive metrics to `6 / 337 Processed`.
- **Version Bump**: Incremented patch version to `1.1.4` in `README.md` and `README.de.md`.

---

## [1.1.3] - 2026-08-08

### Changed
- **Paper Enrichment (Entry #5 - Amazon Web Services / AWS)**: Processed reference entry #5 (`Amazon Web Services (AWS)`, `aws.amazon.com`). Enriched Section 3.1 A in `README.md` and `README.de.md` with explicit technical details on AWS $100M public sector cloud HPC credits, Graviton4 ARM instances, Trainium2/Inferentia2 AI accelerators, post-quantum cryptographic TLS/KEM security, and hosting INL nuclear SMR digital twin cloud infrastructure and FAIR datasets.
- **Index Status Update**: Marked Entry #5 status to `Processed` in `reference_coverage.md` and updated executive metrics to `5 / 337 Processed`.
- **Version Bump**: Incremented patch version to `1.1.3` in `README.md` and `README.de.md`.

---

## [1.1.2] - 2026-08-08

### Changed
- **Paper Enrichment (Entry #3 - ATLAS Experiment at CERN)**: Processed reference entry #3 (`ATLAS experiment at CERN`, `atlas.cern`). Enriched Section 2.3 A in `README.md` and `README.de.md` with explicit technical details on international ATLAS collaboration integration across 44 U.S. universities and DOE National Laboratories (BNL, ANL, LBNL) for HL-LHC computing readiness.
- **Index Status Update**: Marked Entry #3 status to `Processed` in `reference_coverage.md` and updated executive metrics to `4 / 337 Processed`.
- **Version Bump**: Incremented patch version to `1.1.2` in `README.md` and `README.de.md`.

---

## [1.1.1] - 2026-08-08

### Changed
- **Paper Enrichment (Entry #2 - U.S. ATLAS IB Meeting)**: Processed reference entry #2 (`U.S. ATLAS Institutional Board Meeting`, Indico Event 1662511). Enriched Section 2.3 A in `README.md` and `README.de.md` with explicit details on DOE-HEP computing briefings (Jeremy Love, DOE-HEP), multi-terabit real-time sensor processing, High-Level Trigger (HLT) candidate selection, and graph neural network (GNN) jet reconstruction for HL-LHC computing readiness.
- **Index Status Update**: Marked Entry #2 status to `Processed` in `reference_coverage.md` and updated executive metrics to `3 / 337 Processed`.
- **Version Bump**: Incremented patch version to `1.1.1` in `README.md` and `README.de.md`.

---

## [1.1.0] - 2026-08-08

### Fixed
- **Reference Index Deduplication**: Cleaned up all 20 duplicate URLs across `references.md` and `reference_coverage.md`. Pointed Collaborators (Section 2) company entries to canonical corporate homepages, redirected Quantum Leadership (Section 3) LOI entries to technical platform/hardware pages, removed redundant press releases from Section 4 and Section 5, and resolved all URL collisions.
- **Master Coverage Audit Index Synchronized**: Rebuilt `reference_coverage.md` to reflect 337 unique external reference links (0 duplicates, 100% validated) with updated section distribution and processing status (`2 / 337 Processed`).

---

## [1.0.9] - 2026-08-08

### Changed
- **Paper Enrichment (Entry #2 - Albemarle)**: Processed reference entry #2 (`Albemarle`) from `www.albemarle.com`. Enriched Section 2.3 D and Section 3.1 C in `README.md` and `README.de.md` with concrete technical details on Direct Lithium Extraction (DLE) chemical processes, high-purity battery-grade lithium hydroxide/carbonate refining, solid-state electrolyte substrate R&D, and critical mineral supply chain security in collaboration with DOE National Laboratories (Ames, NETL, PNNL).
- **Index Status Update**: Marked Entry #2 status to `Processed` in `reference_coverage.md` and updated processing metric to `2 / 338 Processed`.
- **Version Bump**: Incremented patch version to `1.0.9` in `README.md` and `README.de.md`.

---

## [1.0.8] - 2026-08-08

### Added
- **Centralized Release Management Prompt**: Added [`prompts/release_and_tag.md`](file:///home/donutloop/Workspace/donutloop-genesis/prompts/release_and_tag.md) to isolate and standardize Git release tagging (`git tag -a vX.Y.Z`) and remote publishing (`git push origin main vX.Y.Z`).

### Changed
- **Workflow Prompt Alignment**: Updated all repository workflow prompts ([`prompts/process_reference_index.md`](file:///home/donutloop/Workspace/donutloop-genesis/prompts/process_reference_index.md), [`prompts/discover_new_references.md`](file:///home/donutloop/Workspace/donutloop-genesis/prompts/discover_new_references.md), [`prompts/expand_company_coverage.md`](file:///home/donutloop/Workspace/donutloop-genesis/prompts/expand_company_coverage.md), and [`prompts/format_links.md`](file:///home/donutloop/Workspace/donutloop-genesis/prompts/format_links.md)) to outsource release tagging to `prompts/release_and_tag.md` and explicitly mandate that releases are not executed directly by command during standard prompt execution.
- **Version Bump**: Incremented patch version to `1.0.8` in `README.md` and `README.de.md`.

---

## [1.0.7] - 2026-08-08

### Added
- **Workflow Prompt for Reference Index Processing**: Added [`prompts/process_reference_index.md`](file:///home/donutloop/Workspace/donutloop-genesis/prompts/process_reference_index.md) establishing an iterative reference processing and research paper enrichment workflow.

### Changed
- **Paper Enrichment (Entry #1 - High Energy Physics)**: Processed reference entry #1 (`Genesis Mission and HEP - LHC (PDF)`) from `indico.cern.ch`. Enriched §2.3 A in `README.md` and `README.de.md` with concrete technical details on High-Luminosity LHC (HL-LHC) compute scaling, High-Level Trigger (HLT) candidate filtering, GNN particle jet reconstruction, and detector digital twin calibration.
- **Index Status Update**: Marked Entry #1 status to `Processed` in `reference_coverage.md` and updated processing metric to `1 / 340 Processed`.
- **Version Bump**: Incremented patch version to `1.0.7` in `README.md` and `README.de.md`.

---

## [1.0.6] - 2026-08-08

### Added
- **Status Tracking in Coverage Report**: Injected a `Status` column in [`reference_coverage.md`](file:///home/donutloop/Workspace/donutloop-genesis/reference_coverage.md) Section 4 (*Master Reference Link Index Table*), initializing all 340 entries to `Unprocessed` to track integration status across documentation workflows.
- **Executive Processing Metrics**: Updated Section 1 metrics table in `reference_coverage.md` with real-time processing counters (`0 / 340 Processed`).

### Changed
- **Version Bump**: Incremented patch version to `1.0.6` in `README.md` and `README.de.md`.

---

## [1.0.5] - 2026-08-08

### Added
- **Reference Coverage Report**: Added [`reference_coverage.md`](file:///home/donutloop/Workspace/donutloop-genesis/reference_coverage.md), providing a comprehensive coverage analysis, section distribution, publisher domain classification (194 domains), resource format taxonomy (326 web portals, 14 PDFs), and full 340-row master audit index of all external links in `references.md`.

### Changed
- **Version Bump**: Incremented patch version to `1.0.5` in `README.md` and `README.de.md`.

---

## [1.0.4] - 2026-08-08

### Changed
- **Reference Hygiene**: Removed duplicate Meta AI LBNL entry from `references.md` WIP scratchpad following explicit user confirmation (verifying existing indexing at line 146).
- **Version Bump**: Incremented patch version to `1.0.4` in `README.md` and `README.de.md`.


---

## [1.0.3] - 2026-08-08

### Added
- **Genesis Open Models Integration**: Incorporated explicit architectural references and links to the Argonne National Laboratory **Genesis Open Models** portal (`https://genesisopenmodels.anl.gov/`) across both the English (`README.md`) and German (`README.de.md`) research papers (§2.1, §3.2, and Appendix A.2).
- **Reference Integration**: Processed raw `WIP` entry for Genesis Open Models into `references.md` under Section 5 (Argonne National Laboratory).

### Changed
- **Reference Hygiene**: Decommissioned temporary `WIP` scratchpad section in `references.md`.
- **Version Bump**: Incremented patch version to `1.0.3` in `README.md` and `README.de.md`.

---

## [1.0.2] - 2026-08-08

### Added
- **Workflow Prompt Rules**: Added explicit `CHANGELOG.md` update execution rules across all workflow prompts (`expand_company_coverage.md`, `format_links.md`, and `discover_new_references.md`) to standardize repository changelog maintenance across future automated updates.

### Changed
- **Version Bump**: Incremented patch version to `1.0.2` in `README.md` and `README.de.md`.

---

## [1.0.1] - 2026-08-08

### Added
- **German Documentation Translation**: Created complete German translation (`README.de.md`) matching `README.md` structure, section hierarchy, tables, ASCII system diagrams, and technical terminology.

### Changed
- **Reference Integration**: Processed raw entries from the temporary `WIP` section in `references.md` into their corresponding thematic categories (Georgia Tech Newswise coverage & Genesis Mission presentation video).
- **Deduplication**: Deduplicated references across Auburn, UW-Madison, and RPI sections, and decommissioned the temporary `wip:` header scratchpad.
- **Version Bump**: Incremented patch version to `1.0.1` in `README.md` and `README.de.md`.

---

## [1.0.0] - 2026-08-08

### Initial Major Release — The Genesis Mission Reference Architecture

The **v1.0.0** release establishes the definitive, open-source technical reference paper and ecosystem topology index for the **Genesis Mission**: a multi-billion-dollar federal initiative coupling Artificial Intelligence (AI), fault-tolerant quantum computing, and exascale high-performance computing (HPC).

### Key Highlights
- **100% Ecosystem Coverage (148 Core Flagship Nodes)**:
  - **17 DOE National Laboratories**: Complete technical profile for ANL, BNL, INL, LBNL, LLNL, LANL, NETL, NREL, ORNL, PNNL, PPPL, SNL, SRNL, SLAC, TJNAF, Fermilab, and Ames.
  - **61 Industry & Hyperscale Partners**: Architectural integration covering AWS, Google DeepMind, Microsoft, NVIDIA, AMD, Dell Technologies, HPE, IBM Quantum, SambaNova Systems, Cerebras, Anthropic, OpenAI, Meta AI, Scale AI, Hugging Face, FutureHouse, LILA, Applied Materials, Synopsys, Siemens, xLight, and key critical materials/energy partners.
  - **9 Federal Agencies & Executive Bodies**: Governance overview spanning White House OSTP, DOE Office of Science, DOC NIST/CHIPS R&D Office, NSF, NIH/HHS, NASA, DOD (Department of War), DHS S&T, and DOI.
  - **4 Specialized Research & Healthcare Hubs**: Profiles for Cleveland Clinic, Johns Hopkins University APL, AI Tennessee Initiative, and RTI International.
  - **57 Awardee Research Universities**: Categorized academic nodes across quantum science, AI/SciML, materials discovery, nuclear physics, and grid decarbonization.
- **Three Core Technical Pillars**:
  1. *Heterogeneous HPC Substrate*: Exascale supercomputers (*Frontier*, *Aurora*, *El Capitan*, *Solstice*, *Equinox*, *Lux*, *Discovery*), Dell AI Factory, and SambaNova Reconfigurable Dataflow RDUs.
  2. *Quantum Leadership & CHIPS Act Foundries*: Over $2B in DOE quantum leadership programs matched by $2B+ Commerce CHIPS Act LOIs spanning 7 modalities (superconducting, trapped-ion, neutral-atom, photonic, silicon spin, and cross-modality foundries).
  3. *Closed-Loop Agentic Scientific Workflows*: Autonomous AI agents orchestrating quantum-classical algorithms, robotic wet labs, and real-time sensor streams (synchrotrons, tokamaks, accelerators).
- **Strategic Capital Mechanics**: Detailed allocation architecture tracking >$3.5 Billion across FOA grants, national security challenges, CHIPS Act incentives, and hyperscaler compute credits.
- **Curated Reference Index**: Comprehensive external citation index in `references.md` mapping federal releases, FOA solicitations, lab disclosures, and corporate announcements.
