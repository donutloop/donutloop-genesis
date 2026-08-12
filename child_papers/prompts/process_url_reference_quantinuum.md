# Instructions: Quantinuum URL Reference Processing & Child Paper Management

## Context
This workflow manages reference URL processing, deep item-by-item web content extraction, technical insight integration, and reference index updates **strictly within the `child_papers/` directory** for the dedicated company paper [`child_papers/quantinuum.md`](../quantinuum.md).

Root repository files (`README.md`, `README.de.md`, `references.md`, `reference_coverage.md`, `coverage.md`, `CHANGELOG.md`) are isolated and MUST NOT be modified during child paper reference processing.

---

## Input Parameter
The workflow receives a Quantinuum URL parameter supplied via prompt invocation:
`URL parameter is <URL>` (e.g. `https://www.quantinuum.com/news/news#press-release`)

---

## Execution Rules & Pipeline Workflow

### MANDATORY EXHAUSTIVE MULTI-PAGE & API CRAWLING RULE
- **CRITICAL DIRECTIVE:** NEVER assume that page 1 or initial single-page fetching contains all links.
- Always check for pagination parameters (`?page=N`, `?offset=TIMESTAMP`), underlying REST APIs (e.g. WordPress `/wp-json/wp/v2/posts?per_page=100`, Squarespace JSON feeds `?format=json`), or paginated Webflow collections.
- Exhaustively crawl and parse ALL pages until reaching the final historical archive link or specified verification landmark.
- **ZERO OMISSION RULE:** Retain 100% of all extracted newsroom/press release links in Section 6 (*Complete Chronological Press & Reference Index*) without dropping, omitting, or truncating any link under any circumstances.


### 1. Target Input & Deduplication Check
- Extract the target `<URL>` from the input prompt parameter.
- **Deduplication Check:** Search [`child_papers/quantinuum.md`](../quantinuum.md) for the exact URL or canonical path.
  - If the URL is found to be a **duplicate** of an existing entry in `child_papers/quantinuum.md`, report the location and proceed to verify deep content enrichment.

### 2. Deep Item-by-Item Analysis & Insight Extraction
- Inspect each target reference URL individually to extract every specific technical fact, contract value, award, facility location, hardware specification, date, partner name, software feature, and executive title:
  - **Trapped-Ion QCCD Hardware Architecture:** System Model H1-1, H1-2, and H2-1 (powered by Honeywell), Quantum Charge-Coupled Device (QCCD) ion shuttle architecture, Ytterbium-171 ($^{171}\text{Yb}^+$) and Barium ($^{137}\text{Ba}^+$) dual-species traps, 56+ physical qubits, all-to-all optical connectivity.
  - **Record Gate Fidelities & Quantum Error Correction:** 99.999% single-qubit fidelity, 99.9% 2-qubit fidelity, 48+ logical qubits demonstrated in partnership with Microsoft, fault-tolerant color codes and transversal gates.
  - **Quantum Software & Chemistry:** TKET open-source SDK and optimizing compiler, InQuanto computational chemistry platform for molecular dynamics, materials science, and battery chemistry (BMW, Airbus, Mitsui).
  - **Cybersecurity & Quantum Origin:** Quantum Origin cryptographic key generation platform, true quantum randomness, post-quantum cryptography (PQC) integration.
  - **Federal, Academic & Industrial Traction:** DOE Genesis Mission awards, NASA JPL collaborations, JP Morgan Chase, Honeywell ownership, SEC filings, and corporate leadership (CEO Rajeeb Hazra, Founder/President Ilyas Khan).

### 3. Comprehensive Narrative & Index Integration into `child_papers/quantinuum.md`
- **Deep Narrative Enrichment:** Weave extracted technical insights item-by-item into the thematic narrative sections:
  - `## 1. Executive Summary & Quantum Technology Roadmap`
  - `## 2. Trapped-Ion QCCD Hardware & Optical Shuttle Architecture`
  - `## 3. Record Gate Fidelities, Logical Qubits & Error Correction`
  - `## 4. Quantum Software Suite (TKET, InQuanto & Quantum Origin)`
  - `## 5. Federal, National Laboratory & Enterprise Applications`
- **100% Complete Index Retention:** Retain all extracted newsroom release links in Section 6 (*Complete Chronological Press & Reference Index*) without dropping or omitting any link:
  `| **YYYY-MM-DD** | [Article Title](URL) | Category / Topic | Primary Technical Focus |`

### 4. Git Commit & Release
- Stage modified child paper files:
  `git add child_papers/`
- Commit with a clear Conventional Commit message:
  ```bash
  git commit -m "feat(child-paper): deep-analyze Quantinuum reference <Title> in child_papers/quantinuum.md"
  ```
