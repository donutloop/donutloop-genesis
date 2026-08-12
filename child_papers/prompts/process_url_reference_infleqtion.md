# Instructions: Infleqtion URL Reference Processing & Child Paper Management

## Context
This workflow manages reference URL processing, deep item-by-item web content extraction, technical insight integration, and reference index updates **strictly within the `child_papers/` directory** for the dedicated company paper [`child_papers/infleqtion.md`](../infleqtion.md).

Root repository files (`README.md`, `README.de.md`, `references.md`, `reference_coverage.md`, `coverage.md`, `CHANGELOG.md`) are isolated and MUST NOT be modified during child paper reference processing.

---

## Input Parameter
The workflow receives an Infleqtion URL parameter supplied via prompt invocation:
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
- **Deduplication Check:** Search [`child_papers/infleqtion.md`](../infleqtion.md) for the exact URL or canonical path.
  - If the URL is found to be a **duplicate** of an existing entry in `child_papers/infleqtion.md`, report the location and proceed to verify deep content enrichment.

### 2. Deep Item-by-Item Analysis & Insight Extraction
- Inspect each target reference URL individually to extract every specific technical fact, contract value, award, facility location, hardware specification, date, partner name, software feature, and executive title:
  - **Neutral Atom Architecture:** SqORPIOS, Hilbert, and Sqale neutral atom quantum processors, Rubidium-87 ($^{87}\text{Rb}$) and Cesium-133 ($^{133}\text{Cs}$) optical tweezer arrays, 100+ to 1,000+ physical atom traps, 30+ logical qubit roadmaps.
  - **Quantum Sensors & Precision Timing:** Tiqker™ optical atomic clocks, Rydberg Quantum RF (QRF) receivers, miniMOT™ platforms, cold-atom gravimeters and inertial sensors for GPS-denied PNT.
  - **Quantum Software & Deep Compiler:** Superstaq™ deep-compiler platform, pulse-level quantum control, SuperSim circuit cutting, QContext gate decomposition, SupercheQ database verification.
  - **Federal, Academic & Commercial Alliances:** DOE Genesis Mission awards, DARPA ONISQ/SAVaNT/IMPAQT programs, UK National Quantum Computing Centre (NQCC) deployments (IQMP 2027), Texas A&M & University of Colorado Boulder collaborations, Eaton power grid co-simulations, U.S. Navy & Army AI contracts.

### 3. Comprehensive Narrative & Index Integration into `child_papers/infleqtion.md`
- **Deep Narrative Enrichment:** Weave extracted technical insights item-by-item into the thematic narrative sections:
  - `## 1. Executive Summary & Quantum Technology Roadmap`
  - `## 2. Neutral Atom Quantum Computing Hardware & Optical Tweezers`
  - `## 3. Quantum Sensing, Atomic Clocks (Tiqker) & Quantum RF`
  - `## 4. Software Infrastructure (Superstaq & Quantum Control)`
  - `## 5. Federal, National Laboratory & Enterprise Applications`
- **100% Complete Index Retention:** Retain all extracted newsroom release links in Section 6 (*Complete Chronological Press & Reference Index*) without dropping or omitting any link:
  `| **YYYY-MM-DD** | [Article Title](URL) | Category / Topic | Primary Technical Focus |`

### 4. Git Commit & Release
- Stage modified child paper files:
  `git add child_papers/`
- Commit with a clear Conventional Commit message:
  ```bash
  git commit -m "feat(child-paper): deep-analyze Infleqtion reference <Title> in child_papers/infleqtion.md"
  ```
