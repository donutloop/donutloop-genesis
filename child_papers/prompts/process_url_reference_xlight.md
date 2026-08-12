# Instructions: XLight URL Reference Processing & Child Paper Management

## Context
This workflow manages reference URL processing, deep item-by-item web content extraction, technical insight integration, and reference index updates **strictly within the `child_papers/` directory** for the dedicated company paper [`child_papers/xlight.md`](../xlight.md).

Root repository files (`README.md`, `README.de.md`, `references.md`, `reference_coverage.md`, `coverage.md`, `CHANGELOG.md`) are isolated and MUST NOT be modified during child paper reference processing.

---

## Input Parameter
The workflow receives an XLight URL parameter supplied via prompt invocation:
`URL parameter is <URL>` (e.g. `https://www.xlight.com/news`)

---

## Execution Rules & Pipeline Workflow

### MANDATORY EXHAUSTIVE MULTI-PAGE & API CRAWLING RULE
- **CRITICAL DIRECTIVE:** NEVER assume that page 1 or initial single-page fetching contains all links.
- Always check for pagination parameters (`?page=N`, `?offset=TIMESTAMP`), underlying REST APIs (e.g. WordPress `/wp-json/wp/v2/posts?per_page=100`, Squarespace JSON feeds `?format=json`), or paginated Webflow collections.
- Exhaustively crawl and parse ALL pages until reaching the final historical archive link or specified verification landmark.
- **ZERO OMISSION RULE:** Retain 100% of all extracted newsroom/press release links in Section 6 (*Complete Chronological Press & Reference Index*) without dropping, omitting, or truncating any link under any circumstances.


### 1. Target Input Check
- Target URL: `https://www.xlight.com/news`
- Ensure all news items and press releases are exhaustively crawled across all archive pages.

### 2. Deep Item-by-Item Analysis & Insight Extraction
- Inspect each target reference URL individually to extract every specific technical fact, contract value, award, facility location, hardware specification, date, partner name, software feature, and executive title:
  - **Free-Electron Laser (FEL) & Energy Recovery Linac (ERL) EUV Sources:** Next-generation Extreme Ultraviolet (EUV) and High-NA EUV light sources for sub-2nm semiconductor chip lithography, particle accelerator-driven ERLs, gigawatt peak optical power, sub-13.5 nm wavelength control.
  - **Semiconductor Foundry & Lithography Scaling:** High-volume manufacturing (HVM) wafer throughput scaling for leading-edge semiconductor foundries (Intel, TSMC, Samsung, ASML ecosystem).
  - **U.S. CHIPS and Science Act & Federal Funding:** CHIPS Act funding awards, U.S. Department of Energy (DOE) National Accelerator Laboratory co-developments (SLAC, Fermilab, Brookhaven).
  - **Corporate Leadership & Private Capital:** Executive leadership, venture capital funding, strategic backing, and commercial R&D expansion.

### 3. Comprehensive Narrative & Index Integration into `child_papers/xlight.md`
- **Deep Narrative Enrichment:** Weave extracted technical insights item-by-item into the thematic narrative sections:
  - `## 1. Executive Summary & Accelerator-Based EUV Technology Roadmap`
  - `## 2. Free-Electron Laser (FEL) & Energy Recovery Linac (ERL) Architecture`
  - `## 3. Sub-2nm Semiconductor Lithography & High-NA EUV Wavelength Control`
  - `## 4. U.S. CHIPS Act, DOE National Accelerator Labs & Federal Infrastructure`
  - `## 5. Enterprise Foundry Alliances & High-Volume Manufacturing (HVM)`
- **100% Complete Index Retention:** Retain all extracted newsroom release links in Section 6 (*Complete Chronological Press & Reference Index*) strictly without dropping or omitting any link:
  `| **YYYY-MM-DD** | [Article Title](URL) | Category / Topic | Primary Technical Focus |`

### 4. Git Commit & Release
- Stage modified child paper files:
  `git add child_papers/`
- Commit with a clear Conventional Commit message:
  ```bash
  git commit -m "feat(child-paper): deep-analyze XLight references in child_papers/xlight.md"
  ```
