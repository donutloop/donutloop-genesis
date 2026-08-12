# Instructions: D-Wave URL Reference Processing & Child Paper Management

## Context
This workflow manages reference URL processing, deep item-by-item web content extraction, technical insight integration, and reference index updates **strictly within the `child_papers/` directory** for the dedicated company paper [`child_papers/d-wave.md`](../d-wave.md).

Root repository files (`README.md`, `README.de.md`, `references.md`, `reference_coverage.md`, `coverage.md`, `CHANGELOG.md`) are isolated and MUST NOT be modified during child paper reference processing.

---

## Input Parameter
The workflow receives a D-Wave URL parameter supplied via prompt invocation:
`URL parameter is <URL>`

---

## Execution Rules & Pipeline Workflow

### MANDATORY EXHAUSTIVE MULTI-PAGE & API CRAWLING RULE
- **CRITICAL DIRECTIVE:** NEVER assume that page 1 or initial single-page fetching contains all links.
- Always check for pagination parameters (`?page=N`, `?offset=TIMESTAMP`), underlying REST APIs (e.g. WordPress `/wp-json/wp/v2/posts?per_page=100`, Squarespace JSON feeds `?format=json`), or paginated Webflow collections.
- Exhaustively crawl and parse ALL pages until reaching the final historical archive link or specified verification landmark.
- **ZERO OMISSION RULE:** Retain 100% of all extracted newsroom/press release links in Section 6 (*Complete Chronological Press & Reference Index*) without dropping, omitting, or truncating any link under any circumstances.


### 1. Target Input & Deduplication Check
- Extract the target `<URL>` from the input prompt parameter.
- **Deduplication Check:** Search [`child_papers/d-wave.md`](../d-wave.md) for the exact URL or canonical path.
  - If the URL is found to be a **duplicate** of an existing entry in `child_papers/d-wave.md`, report the location and proceed to verify deep content enrichment.

### 2. Deep Item-by-Item Analysis & Insight Extraction
- Inspect each target reference URL individually to extract every specific technical fact, contract value, award, facility location, hardware specification, date, partner name, software feature, and executive title:
  - **Quantum Annealing Systems:** Advantage and Advantage2 flux-qubit architectures, qubit/coupler counts, Pegasus 15-way and Zephyr 20-way topologies, coherence times, thermal noise mitigation, multi-chip 3D packaging.
  - **Gate-Model Superconducting Architecture:** Flux-qubit charge-noise immunity, dual-rail quantum error detection, physical error correction hardware demonstrations, error-aware simulation tools, 100-logical-qubit milestones.
  - **Hybrid Cloud Infrastructure:** Leap quantum cloud service (>99.9% uptime), Ocean SDK (`dwave-ocean-sdk`), QUBO/CQM formulation, classical-quantum hybrid solvers.
  - **Federal, Academic & Industrial Traction:** NRC Canada funding awards, CHIPS Act $100M LOI, DOE National Laboratory co-simulations (LANL, ORNL, NREL ARIES), enterprise partnerships (Nasdaq Verafin anti-crime, Pattison Food Group logistics, Davidson Technologies defense).

### 3. Comprehensive Narrative & Index Integration into `child_papers/d-wave.md`
- **Deep Narrative Enrichment:** Weave extracted technical insights item-by-item into the thematic narrative sections:
  - `## 1. Executive Summary & Quantum Technology Roadmap`
  - `## 2. Quantum Annealing Hardware (Advantage & Advantage2 Systems)`
  - `## 3. Gate-Model Superconducting Architecture & Fault-Tolerance`
  - `## 4. Hybrid Cloud Infrastructure (Leap & Ocean SDK)`
  - `## 5. Federal, National Laboratory & Enterprise Applications`
- **100% Complete Index Retention:** Retain all extracted newsroom release links in Section 6 (*Complete Chronological Press & Reference Index*) without dropping or omitting any link:
  `| **YYYY-MM-DD** | [Article Title](URL) | Category / Topic | Primary Technical Focus |`

### 4. Git Commit & Release
- Stage modified child paper files:
  `git add child_papers/`
- Commit with a clear Conventional Commit message:
  ```bash
  git commit -m "feat(child-paper): deep-analyze D-Wave reference <Title> in child_papers/d-wave.md"
  ```
