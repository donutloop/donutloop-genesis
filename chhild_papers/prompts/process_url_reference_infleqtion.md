# Instructions: Infleqtion URL Reference Processing & Child Paper Management

## Context
This workflow manages reference URL processing, web content extraction, technical insight integration, and reference index updates **strictly within the `chhild_papers/` directory** for the dedicated company paper [`chhild_papers/infleqtion.md`](../infleqtion.md).

Root repository files (`README.md`, `README.de.md`, `references.md`, `reference_coverage.md`, `coverage.md`, `CHANGELOG.md`) are isolated and MUST NOT be modified during child paper reference processing.

---

## Input Parameter
The workflow receives an Infleqtion URL parameter supplied via prompt invocation:
`URL parameter is <URL>`

---

## Execution Rules & Pipeline Workflow

### 1. Target Input & Deduplication Check
- Extract the target `<URL>` from the input prompt parameter.
- **Deduplication Check:** Search [`chhild_papers/infleqtion.md`](../infleqtion.md) for the exact URL or canonical path.
  - If the URL is found to be a **duplicate** of an existing entry in `chhild_papers/infleqtion.md`, **ABORT IMMEDIATELY** and report the existing location to the user.

### 2. Content Inspection & Insight Extraction
- Inspect or retrieve the target reference content (using URL content inspection or web search if access is restricted).
- Extract concrete, high-authority technical and strategic facts regarding Infleqtion Inc. (ColdQuanta, Inc.):
  - **Neutral Atom Architecture & Neutral Atom Quantum Computing:** SqORPIOS neutral atom quantum processors, Rubidium-87 ($^{87}\text{Rb}$) and Cesium-133 ($^{133}\text{Cs}$) optical tweezer arrays, 100+ to 1,000+ physical atom traps, 30+ logical qubit roadmaps.
  - **Quantum Sensors & Precision Timing:** Tiqker™ atomic clocks, Compact Quantum RF (QRF) receivers, optical atomic clocks, ultra-cold atom gravimeters and inertial sensors.
  - **Quantum Software & Cloud Platforms:** Superstaq™ deep-compiler quantum software platform, pulse-level quantum control, multi-framework compilation (Qiskit, Cirq, PyQuil).
  - **Federal, Academic & Commercial Alliances:** DOE Genesis Mission awards, DARPA ONISQ & SAVaNT programs, UK National Quantum Computing Centre (NQCC) deployments (IQMP 2027), Texas A&M & University of Colorado Boulder collaborations.

### 3. Integration into `chhild_papers/infleqtion.md`
- **Section Enrichment:** Seamlessly merge extracted technical insights into the appropriate thematic section of [`chhild_papers/infleqtion.md`](../infleqtion.md):
  - `## 1. Executive Summary & Quantum Technology Roadmap`
  - `## 2. Neutral Atom Quantum Computing Hardware & Optical Tweezers`
  - `## 3. Quantum Sensing, Atomic Clocks (Tiqker) & Quantum RF`
  - `## 4. Software Infrastructure (Superstaq & Quantum Control)`
  - `## 5. Federal, National Laboratory & Enterprise Applications`
- **Reference Table Update:** Append/merge a formatted row into Section 6 (*Complete Chronological Press & Reference Index*) of [`chhild_papers/infleqtion.md`](../infleqtion.md):
  `| **YYYY-MM-DD** | [Article Title](URL) | Category / Topic | Primary Technical Focus |`

### 4. Git Commit & Release
- Stage modified child paper files:
  `git add chhild_papers/`
- Commit with a clear Conventional Commit message:
  ```bash
  git commit -m "feat(child-paper): process Infleqtion reference <Title> in chhild_papers/infleqtion.md"
  ```
