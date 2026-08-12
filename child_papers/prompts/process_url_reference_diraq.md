# Instructions: Diraq URL Reference Processing & Child Paper Management

## Context
This workflow manages reference URL processing, deep item-by-item web content extraction, technical insight integration, and reference index updates **strictly within the `child_papers/` directory** for the dedicated company paper [`child_papers/diraq.md`](../diraq.md).

Root repository files (`README.md`, `README.de.md`, `references.md`, `reference_coverage.md`, `coverage.md`, `CHANGELOG.md`) are isolated and MUST NOT be modified during child paper reference processing.

---

## Input Parameter
The workflow receives a Diraq URL parameter supplied via prompt invocation:
`URL parameter is <URL>` (e.g. `https://www.diraq.com/newsdesk`)

---

## Execution Rules & Pipeline Workflow

### MANDATORY EXHAUSTIVE MULTI-PAGE & API CRAWLING RULE
- **CRITICAL DIRECTIVE:** NEVER assume that page 1 or initial single-page fetching contains all links.
- Always check for pagination parameters (`?page=N`, `?offset=TIMESTAMP`), underlying REST APIs (e.g. WordPress `/wp-json/wp/v2/posts?per_page=100`, Squarespace JSON feeds `?format=json`), or paginated Webflow collections.
- Exhaustively crawl and parse ALL pages until reaching the final historical archive link or specified verification landmark.
- **ZERO OMISSION RULE:** Retain 100% of all extracted newsroom/press release links in Section 6 (*Complete Chronological Press & Reference Index*) without dropping, omitting, or truncating any link under any circumstances.


### 1. Target Input & Verification Point Check
- Target URL: `https://www.diraq.com/newsdesk` (pages 1 through 4)
- **Verification Point:** Ensure all news items are crawled across all 4 pages down to the Page 4 last link landmark: `[Behind the paper: On-demand electrical control of spin qubits](https://www.diraq.com/newsdesk/blog-post-title-one-sfk9t-4k2ns)`.

### 2. Deep Item-by-Item Analysis & Insight Extraction
- Inspect each target reference URL individually to extract every specific technical fact, contract value, award, facility location, hardware specification, date, partner name, software feature, and executive title:
  - **Silicon Quantum Dot Spin Qubits:** CMOS silicon quantum dot electron spin qubits in silicon-28 ($^{28}\text{Si}$) isotopically purified substrates, single-electron spin manipulation, exchange coupling, Electric Dipole Spin Resonance (EDSR).
  - **CMOS Foundry Manufacturing & Integration:** Fabrication on commercial CMOS semiconductor foundry lines (finFET and Fully-Depleted Silicon-on-Insulator [FDSOI]), integrated cryo-CMOS control electronics operating at sub-1 Kelvin dilution temperatures.
  - **Scaling Roadmap to 1 Billion Qubits:** 1 Billion qubit silicon quantum processor roadmap, high density 2D qubit arrays, fault-tolerant surface code layout.
  - **Capital & Executive Leadership:** CEO & Founder Prof. Andrew Dzurak, Head of Quantum Hardware Dr. Henry Yang, strategic funding ($120M+ Series A/B capital, Main Sequence Ventures, Taronga Ventures, U.S. and Australian Government grants).

### 3. Comprehensive Narrative & Index Integration into `child_papers/diraq.md`
- **Deep Narrative Enrichment:** Weave extracted technical insights item-by-item into the thematic narrative sections:
  - `## 1. Executive Summary & Silicon Spin Qubit Technology Roadmap`
  - `## 2. CMOS Semiconductor Foundry & FinFET/FDSOI Integration`
  - `## 3. Quantum Dot Physics, EDSR & Cryo-CMOS Electronics`
  - `## 4. Fault-Tolerant Surface Codes & 1-Billion Qubit Scaling`
  - `## 5. Defense, Federal & Enterprise Applications`
- **100% Complete Index Retention:** Retain all extracted newsdesk release links across all 4 pages in Section 6 (*Complete Chronological Press & Reference Index*) down to the verification landmark `https://www.diraq.com/newsdesk/blog-post-title-one-sfk9t-4k2ns` without dropping or omitting any link:
  `| **YYYY-MM-DD** | [Article Title](URL) | Category / Topic | Primary Technical Focus |`

### 4. Git Commit & Release
- Stage modified child paper files:
  `git add child_papers/`
- Commit with a clear Conventional Commit message:
  ```bash
  git commit -m "feat(child-paper): deep-analyze Diraq references in child_papers/diraq.md down to Page 4 verification landmark"
  ```
