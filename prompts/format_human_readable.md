# Instructions: Human-Readable Research Paper Redrafting & Formatting

## Context
Research papers, technical whitepapers, and national initiative documentation frequently accumulate dense walls of text, multi-clause run-on sentences, and crammed lists of grants, solicitations, and citations. While rich in data, these dense blocks create severe cognitive overload for human readers. This workflow prompt establishes standard rules for restructuring and redrafting paper sections into highly accessible, beautifully formatted, human-readable layouts without sacrificing a single technical detail, metric, link, or citation.

## Task
Audit and restructure designated research paper sections (e.g., Abstract, Section 1: Introduction & Context, Section 2: Technical Pillars, etc.) across both English (`README.md`) and German (`README.de.md`) editions into clear, structured, human-readable formats with transparent narrative pacing, sub-bulleted categories, and numbered breakdowns.

---

## Core Formatting Rules & Principles

### 1. Zero Data Loss Guarantee
- **Preserve 100% of Facts**: Never delete, summarize away, or aggregate out quantitative metrics, FOA numbers, grant totals, hardware specifications, institutional counts, or policy citations.
- **Preserve All Hyperlinks & References**: Retain every markdown link, URL, PDF reference, Federal Register citation, and domain-specific software tool name (`[link text](URL)`).

### 2. Narrative Paragraph Breakdowns
- **Eliminate Walls of Text**: Divide long, multi-topic opening blocks into distinct thematic paragraphs (e.g., Paragraph 1: Problem & Executive Mandate; Paragraph 2: Legal Codification & Policy Scope; Paragraph 3: Core National Platform Anchors).
- **Logical Pacing**: Ensure each paragraph introduces one central theme before transitioning to the next.

### 3. Sub-Bulleted Categories for Complex Entities
- **De-Clutter Multi-Announcement Lists**: When a bullet point or agency entry (such as OSTP, DOE, NSF, NIH, or DOD) contains multiple grants, FOAs, initiatives, or milestones, break its internal text down into structured sub-bullets.
- **Bold Sub-Header Labels**: Prefix sub-bullets with descriptive bold/italic labels:
  - `- *Funding & Solicitations*: ...`
  - `- *Defense Mobilization*: ...`
  - `- *Consortium & Partner Commitments*: ...`
  - `- *Workforce & Diversity Partnerships*: ...`

### 4. Explicit Numbered Breakdowns for Taxonomies & Objectives
- **Sequential & Categorical Numbering**: Use clear 1–N numbered lists for foundries, quantum modalities, core strategic objectives, and target scientific domains.
- **Bold Topic Titles**: Start each numbered item with a bold title (e.g., `1. **Convergent Heterogeneous Compute Substrate & Federated Grid:**`).

### 5. Bilingual Parity (`README.md` & `README.de.md`)
- **1:1 Structural Alignment**: Ensure that every header, bullet point, sub-bullet, and numbered list in the English edition (`README.md`) has an exact 1:1 structural equivalent in the German edition (`README.de.md`).
- **Domain Terminology Accuracy**: Translate narrative structures into natural, academic German while maintaining exact technical proper nouns, platform names, and URL links.

---

## Step-by-Step Execution Workflow

### Step 1: Section Audit & Density Analysis
- Inspect the targeted section using `view_file`.
- Identify unbroken paragraphs exceeding 6–8 lines, jammed lists containing 5+ distinct announcements, and unstructured objectives.

### Step 2: Content Categorization & Outline Strategy
- Group information into clear structural tiers:
  1. **Narrative Text**: Intro background, legal mandates, executive goals.
  2. **Platform & Ecosystem Summary**: Bulleted list of core platforms (**AmSC**, **HPDF**, **OPAL**, **ModCon**).
  3. **Institutional & Agency Portfolios**: Sub-bulleted agency breakdowns.
  4. **System Architecture & Flow**: Foundries, orchestration layers, and execution nodes.
  5. **Strategic Objectives & Domains**: Numbered lists with bold titles and sub-bullet details.

### Step 3: Redrafting English & German Editions
- Apply edits to [`README.md`](file:///home/donutloop/Workspace/donutloop-genesis/README.md) using `replace_file_content`.
- Apply identical structural edits to [`README.de.md`](file:///home/donutloop/Workspace/donutloop-genesis/README.de.md).

### Step 4: Version Bump & Changelog Update
- Increment patch version (`vX.Y.Z`) on Line 1 of `README.md` and `README.de.md`.
- Document changes in `CHANGELOG.md` under a new `## [X.Y.Z] - YYYY-MM-DD` entry.

### Step 5: Git Commit, Tag, and Push
- Stage, commit with Conventional Commits (`docs(human-readable): ...`), create annotated tag `vX.Y.Z`, and push to remote `origin main` using `run_command` with `BypassSandbox: true`.

---

## Example Transformation

### Before (Dense Text Wall):
```markdown
* **U.S. Department of Energy (DOE) & NNSA:** Leads overall mission execution, funding solicitations (DE-FOA-0003612), exascale computing facility orchestration, and national lab hub operations. Through Grants.gov DOE administers DE-FOA-0003612 providing Phase I ($500k–$750k) and Phase II ($6M–$15M) grants. In the NNSA announcement NNSA mobilized defense labs (LANL, LLNL, SNL), fielded the Aires Tide flight vehicle (7x faster), deployed AWS Secret Cloud, and commissioned LANL's Mission supercomputer. DOE executed agreements with 24 corporate leaders, launched the Genesis Mission Consortium, established 33 S&T Challenges, and Under Secretary Chris Wright announced 278 project awards.
```

### After (Human-Readable Sub-Bulleted Layout):
```markdown
* **U.S. Department of Energy (DOE) & NNSA — Office of Science & CMEI:** Leads overall mission execution, funding solicitations (DE-FOA-0003612), exascale facility orchestration, and national lab hub operations:
  - *Funding Solicitations & FOA Administration*: Through Grants.gov ([simpler.grants.gov/...](https://simpler.grants.gov/...)), DOE administers DE-FOA-0003612 (*The Genesis Mission: Transforming Science and Energy with AI*) across ASCR, BES, BER, FES, HEP, and NP offices, providing Phase I ($500k–$750k) and Phase II ($6M–$15M) grants.
  - *NNSA Defense Mobilization*: Mobilized defense labs (LANL, LLNL, SNL, NNSS, KCNSC), fielded the **Aires Tide** flight vehicle (7x faster, 15x cheaper), deployed the Secret/Restricted Data Enterprise Cloud with AWS, and commissioned LANL's *Mission* and *Vision* supercomputers.
  - *Funding & Corporate Agreements*: Launched the **$293 Million** solicitation DE-FOA-0003612 and executed formal agreements with 24 founding corporate leaders (Microsoft, Google, NVIDIA, AWS, Oracle, IBM, OpenAI, Anthropic, Cerebras).
  - *Consortium & Project Selection*: Launched the **Genesis Mission Consortium** with the Partnership Exchange Portal, established 33 National S&T Challenges, secured **$800 Million+** in partner support, and selected **278 research project awards** across 342 institutions.
```
