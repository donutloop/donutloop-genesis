# Instructions: Rigetti Computing URL Reference Processing & Child Paper Management

## Context
This workflow manages reference URL processing, deep item-by-item web content extraction, technical insight integration, and reference index updates **strictly within the `child_papers/` directory** for the dedicated company paper [`child_papers/rigetti.md`](../rigetti.md).

Root repository files (`README.md`, `README.de.md`, `references.md`, `reference_coverage.md`, `coverage.md`, `CHANGELOG.md`) are isolated and MUST NOT be modified during child paper reference processing.

---

## Input Parameter
The workflow receives a Rigetti Computing URL parameter supplied via prompt invocation:
`URL parameter is <URL>` (e.g. `https://www.rigetti.com/rigetti-computing-news/p23`)

---

## Execution Rules & Pipeline Workflow

### 1. Target Input & Deduplication Check
- Extract the target `<URL>` from the input prompt parameter.
- **Deduplication Check:** Search [`child_papers/rigetti.md`](../rigetti.md) for the exact URL or canonical path.
  - If the URL is found to be a **duplicate** of an existing entry in `child_papers/rigetti.md`, report the location and proceed to verify deep content enrichment.

### 2. Deep Item-by-Item Analysis & Insight Extraction
- Inspect each target reference URL individually to extract every specific technical fact, contract value, award, facility location, hardware specification, date, partner name, software feature, and executive title:
  - **Superconducting Transmon Hardware Architectures:** Ankaa™-1, Ankaa™-2, Ankaa™-3 (84-qubit QPUs with tunable couplers and square lattice topology), Cepheus™ (336-qubit multi-chip modular processor), Novera™ 9-qubit QPU, Aspen™-M (80-qubit dual-chip processor), and Aspen™-11.
  - **Fab-1 MEMS Superconducting Foundry:** 200mm cleanroom chip fabrication facility in Fremont, CA, 3D integrated chip packaging, superconducting TSVs (Through-Silicon Vias), and 99.5%+ two-qubit gate fidelity targets.
  - **Quantum Software & Hybrid Cloud Infrastructure:** Quil™ (Quantum Instruction Language), PyQuil Python library, Quilc optimizing compiler, QCS™ (Quantum Cloud Services), pulse-level QPU controls, and cloud access integrations (AWS Braket, Strangeworks, Azure Quantum).
  - **Federal, Academic & Industrial Traction:** DOE Genesis Mission awards, DARPA IMPAQT/ONISQ programs, AFRL (Air Force Research Laboratory) contracts, UK NQCC QPU deployment, NASA Ames research, SEC public filings (NASDAQ: RGTI), and corporate leadership (CEO Dr. Subodh Kulkarni, Founder Dr. Chad Rigetti).

### 3. Comprehensive Narrative & Index Integration into `child_papers/rigetti.md`
- **Deep Narrative Enrichment:** Weave extracted technical insights item-by-item into the thematic narrative sections:
  - `## 1. Executive Summary & Quantum Technology Roadmap`
  - `## 2. Superconducting Transmon Hardware & Fab-1 Foundry`
  - `## 3. Modular Multi-Chip Scaling & 3D Packaging (Ankaa & Cepheus)`
  - `## 4. Quantum Cloud Services (QCS), Quil & PyQuil Software`
  - `## 5. Federal, National Laboratory & Enterprise Applications`
- **100% Complete Index Retention:** Retain all extracted newsroom release links in Section 6 (*Complete Chronological Press & Reference Index*) without dropping or omitting any link:
  `| **YYYY-MM-DD** | [Article Title](URL) | Category / Topic | Primary Technical Focus |`

### 4. Git Commit & Release
- Stage modified child paper files:
  `git add child_papers/`
- Commit with a clear Conventional Commit message:
  ```bash
  git commit -m "feat(child-paper): deep-analyze Rigetti reference <Title> in child_papers/rigetti.md"
  ```
