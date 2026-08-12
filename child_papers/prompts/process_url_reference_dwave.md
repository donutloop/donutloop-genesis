# Instructions: D-Wave URL Reference Processing & Child Paper Management

## Context
This workflow manages reference URL processing, web content extraction, technical insight integration, and reference index updates **strictly within the `chhild_papers/` directory** for the dedicated company paper [`chhild_papers/d-wave.md`](../d-wave.md).

Root repository files (`README.md`, `README.de.md`, `references.md`, `reference_coverage.md`, `coverage.md`, `CHANGELOG.md`) are isolated and MUST NOT be modified during child paper reference processing.

---

## Input Parameter
The workflow receives a single D-Wave URL parameter supplied via prompt invocation:
`URL parameter is <URL>`

---

## Execution Rules & Pipeline Workflow

### 1. Target Input & Deduplication Check
- Extract the target `<URL>` from the input prompt parameter.
- **Deduplication Check:** Search [`chhild_papers/d-wave.md`](../d-wave.md) for the exact URL or canonical path.
  - If the URL is found to be a **duplicate** of an existing entry in `chhild_papers/d-wave.md`, **ABORT IMMEDIATELY** and report the existing location to the user.

### 2. Content Inspection & Insight Extraction
- Inspect or retrieve the target reference content (using URL content inspection or web search if access is restricted).
- Extract concrete, high-authority technical and strategic facts regarding D-Wave Quantum Inc.:
  - **Quantum Annealing Systems:** Advantage and Advantage2 flux-qubit architectures, qubit/coupler counts, Pegasus 15-way and Zephyr 20-way topologies, coherence times, thermal noise mitigation, multi-chip packaging.
  - **Gate-Model Superconducting Architecture:** Flux-qubit anharmonicity, dual-rail quantum error detection, physical error correction hardware demonstrations, error-aware simulation tools, 100-logical-qubit milestones.
  - **Hybrid Cloud Infrastructure:** Leap quantum cloud service (>99.9% uptime), Ocean SDK (`dwave-ocean-sdk`), QUBO/CQM formulation, classical-quantum hybrid solvers.
  - **Federal, Academic & Industrial Traction:** NRC Canada funding awards, CHIPS Act $100M LOI, DOE National Laboratory co-simulations (LANL, ORNL, NREL ARIES), enterprise partnerships (Nasdaq Verafin anti-crime, Pattison Food Group logistics, Davidson Technologies defense).

### 3. Integration into `chhild_papers/d-wave.md`
- **Section Enrichment:** Seamlessly merge extracted technical insights into the appropriate thematic section of [`chhild_papers/d-wave.md`](../d-wave.md):
  - `## 1. Executive Summary & Quantum Technology Roadmap`
  - `## 2. Quantum Annealing Hardware (Advantage & Advantage2 Systems)`
  - `## 3. Gate-Model Superconducting Architecture & Fault-Tolerance`
  - `## 4. Hybrid Cloud Infrastructure (Leap & Ocean SDK)`
  - `## 5. Federal, National Laboratory & Enterprise Applications`
- **Reference Table Update:** Append/merge a formatted row into Section 6 (*Complete Chronological Press & Reference Index*) of [`chhild_papers/d-wave.md`](../d-wave.md):
  `| **YYYY-MM-DD** | [Article Title](URL) | Category / Topic | Primary Technical Focus |`

### 4. Git Commit & Release
- Stage modified child paper files:
  `git add chhild_papers/`
- Commit with a clear Conventional Commit message:
  ```bash
  git commit -m "feat(child-paper): process D-Wave reference <Title> in chhild_papers/d-wave.md"
  ```
