# Instructions: Atom Computing URL Reference Processing & Child Paper Management

## Context
This workflow manages reference URL processing, deep item-by-item web content extraction, technical insight integration, and reference index updates **strictly within the `child_papers/` directory** for the dedicated company paper [`child_papers/atom_computing.md`](../atom_computing.md).

Root repository files (`README.md`, `README.de.md`, `references.md`, `reference_coverage.md`, `coverage.md`, `CHANGELOG.md`) are isolated and MUST NOT be modified during child paper reference processing.

---

## Input Parameter
The workflow receives an Atom Computing URL parameter supplied via prompt invocation:
`URL parameter is <URL>` (e.g. `https://atom-computing.com/news-resources/`)

---

## Execution Rules & Pipeline Workflow

### MANDATORY EXHAUSTIVE MULTI-PAGE & API CRAWLING RULE
- **CRITICAL DIRECTIVE:** NEVER assume that page 1 or initial single-page fetching contains all links.
- Always check for pagination parameters (`?page=N`, `?offset=TIMESTAMP`), underlying REST APIs (e.g. WordPress `/wp-json/wp/v2/posts?per_page=100`, Squarespace JSON feeds `?format=json`), or paginated Webflow collections.
- Exhaustively crawl and parse ALL pages until reaching the final historical archive link or specified verification landmark.
- **ZERO OMISSION RULE:** Retain 100% of all extracted newsroom/press release links in Section 6 (*Complete Chronological Press & Reference Index*) without dropping, omitting, or truncating any link under any circumstances.


### 1. Target Input Check
- Target URL: `https://atom-computing.com/news-resources/` (and press release archives)
- Ensure all news items and press releases are exhaustively crawled across all archive pages.

### 2. Deep Item-by-Item Analysis & Insight Extraction
- Inspect each target reference URL individually to extract every specific technical fact, contract value, award, facility location, hardware specification, date, partner name, software feature, and executive title:
  - **Neutral Atom Architecture & 3D Optical Tweezers:** Neutral Ytterbium-171 ($^{171}\text{Yb}$) nuclear spin qubits, 3D optical tweezer arrays holding 1,180+ physical qubits in a single QPU, 1,225 site traps, wireless optical control, Rydberg state entangling gates, nuclear spin coherence times ($T_2 > 40\text{ seconds}$).
  - **Microsoft Commercial Partnership:** Strategic joint commercial partnership with Microsoft to build the world's most powerful logical quantum computer combining Atom Computing 1,000+ neutral atom hardware with Microsoft Azure Quantum fault-tolerant error correction.
  - **Federal & Defense Programs:** DARPA Underexplored Systems for Utility-Scale Quantum Computing (US2QC) and Quantum Benchmarking Initiative (QBI) Stage A/B/C awards, U.S. Department of Energy (DOE Genesis Mission) co-simulation projects.
  - **Corporate Leadership & Capital:** CEO Rob Hays (former Intel VP), Founder & CTO Dr. Ben Bloom, Chief Product Officer Justin Ging. Series B funding round ($60M+) led by Innovation Endeavors, Playground Global, and Venture Reality Fund.

### 3. Comprehensive Narrative & Index Integration into `child_papers/atom_computing.md`
- **Deep Narrative Enrichment:** Weave extracted technical insights item-by-item into the thematic narrative sections:
  - `## 1. Executive Summary & Neutral Atom Technology Roadmap`
  - `## 2. 3D Optical Tweezer Arrays & Ytterbium-171 Nuclear Spin Qubits`
  - `## 3. Rydberg Entangling Gates & Optical Clock Laser Control`
  - `## 4. Microsoft Azure Quantum Logical Qubit Architecture`
  - `## 5. Federal Labs, DARPA QBI & Defense Applications`
- **100% Complete Index Retention:** Retain all extracted news-resources release links in Section 6 (*Complete Chronological Press & Reference Index*) strictly without dropping or omitting any link:
  `| **YYYY-MM-DD** | [Article Title](URL) | Category / Topic | Primary Technical Focus |`

### 4. Git Commit & Release
- Stage modified child paper files:
  `git add child_papers/`
- Commit with a clear Conventional Commit message:
  ```bash
  git commit -m "feat(child-paper): deep-analyze Atom Computing references in child_papers/atom_computing.md"
  ```
