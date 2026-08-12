# Instructions: PsiQuantum URL Reference Processing & Child Paper Management

## Context
This workflow manages reference URL processing, deep item-by-item web content extraction, technical insight integration, and reference index updates **strictly within the `child_papers/` directory** for the dedicated company paper [`child_papers/psiquantum.md`](../psiquantum.md).

Root repository files (`README.md`, `README.de.md`, `references.md`, `reference_coverage.md`, `coverage.md`, `CHANGELOG.md`) are isolated and MUST NOT be modified during child paper reference processing.

---

## Input Parameter
The workflow receives a PsiQuantum URL parameter supplied via prompt invocation:
`URL parameter is <URL>` (e.g. `https://www.psiquantum.com/news`)

---

## Execution Rules & Pipeline Workflow

### 1. Target Input & Verification Point Check
- Target URL: `https://www.psiquantum.com/news`
- **Verification Point:** Ensure all news items are crawled down to the last page until reaching **Jan 30, 2023** / COMPANY: `[PsiQuantum Announces Breakthrough in Architectures for Error-Corrected Quantum Computing](https://www.psiquantum.com/news-import/psiquantum-announces-breakthrough-in-architectures-for-error-corrected-quantum-computing)`.

### 2. Deep Item-by-Item Analysis & Insight Extraction
- Inspect each target reference URL individually to extract every specific technical fact, contract value, award, facility location, hardware specification, date, partner name, software feature, and executive title:
  - **Photonic Quantum Hardware & Fusion-Based Architecture:** Fusion-Based Quantum Computing (FBQC), single-photon source generation, Superconducting Nanowire Single-Photon Detectors (SNSPDs), high-speed electro-optic switches, 1M+ physical qubit fault-tolerant target.
  - **Semiconductor Foundry & 300mm Silicon Photonics:** Strategic foundry partnerships with GlobalFoundries and SkyWater Technology for 300mm silicon photonics wafer lines and cryogenic detector integration.
  - **Government Utility Facilities & Scaling Hubs:** A$940M Australian Federal & Queensland State Government investment for Brisbane Quantum Utility Facility; Illinois Quantum & Microelectronics Park (Chicago) 1M qubit site.
  - **Federal Alliances & DARPA/DOE:** DARPA Quantum Benchmarking Initiative (QBI) Stage A/B, U.S. Department of Energy (DOE Genesis Mission) awards, Air Force Research Laboratory (AFRL) contracts.
  - **Corporate Governance & Investors:** Founded by Dr. Jeremy O'Brien, Dr. Terry Rudolph, Dr. Mark Thompson, and Dr. Pete Shadbolt. Strategic backing from BlackRock, Baillie Gifford, M12 (Microsoft), Temasek, and Playground Global.

### 3. Comprehensive Narrative & Index Integration into `child_papers/psiquantum.md`
- **Deep Narrative Enrichment:** Weave extracted technical insights item-by-item into the thematic narrative sections:
  - `## 1. Executive Summary & Photonic Technology Roadmap`
  - `## 2. Silicon Photonics Semiconductor Foundry & Chip Packaging`
  - `## 3. Fusion-Based Quantum Computing (FBQC) & SNSPD Detectors`
  - `## 4. Fault-Tolerant Quantum Error Correction & Architecture Breakthroughs`
  - `## 5. Global Utility Facilities, Defense & Federal Applications`
- **100% Complete Index Retention:** Retain all extracted newsroom release links in Section 6 (*Complete Chronological Press & Reference Index*) strictly down to Jan 30, 2023 without dropping or omitting any link:
  `| **YYYY-MM-DD** | [Article Title](URL) | Category / Topic | Primary Technical Focus |`

### 4. Git Commit & Release
- Stage modified child paper files:
  `git add child_papers/`
- Commit with a clear Conventional Commit message:
  ```bash
  git commit -m "feat(child-paper): deep-analyze PsiQuantum references in child_papers/psiquantum.md down to Jan 30, 2023"
  ```
