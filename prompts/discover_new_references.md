# Instructions: Discovering New Official References

## Context
The Genesis Mission repository maintains a central curated reference index (`references.md`), an ecosystem coverage tracker (`coverage.md`), and a main research paper (`README.md`). As the Genesis Mission evolves, new official announcements, research grants, and institutional partnerships are regularly published across government, laboratory, academic, and industrial newsrooms.

## Task
Search the internet to discover newly published, high-authority official links related to the Genesis Mission ecosystem, verify them against existing entries in `references.md` to prevent duplicate additions, and queue or format them for integration.

## Execution Rules

### 1. Official Link Criteria (Strict Source Validation)
Only collect links from verified primary and official institutional sources:
- **Government & Agency Outlets:** `.gov` or `.mil` domains (e.g., `energy.gov`, `nist.gov`, `nsf.gov`, `whitehouse.gov`).
- **DOE National Laboratories:** Official laboratory news centers and portals (e.g., `anl.gov`, `lbl.gov`, `llnl.gov`, `ornl.gov`, `lanl.gov`, `sandia.gov`, `inl.gov`, `bnl.gov`, `fnal.gov`, `pppl.gov`, `srnl.gov`, `nlr.gov`/`nrel.gov`, `netl.doe.gov`, `slac.stanford.edu`, `ameslab.gov`).
- **Research Universities:** Official university press releases, news centers, office of research portals, and departmental domains (`.edu`).
- **Official Corporate Statements & Industry Partners:** Official company press releases, corporate statements, investor relations releases, product blogs, and company newsrooms (e.g., `blogs.nvidia.com`, `newsroom.ibm.com`, `newsroom.accenture.com`, `deepmind.google`, `techcommunity.microsoft.com`, `gf.com`, `sambanova.ai`).
- **REJECT:** Unverified third-party blogs, secondary news aggregators, social media posts, opinion pieces, forum posts, or unofficial summaries.

### 2. Strict Deduplication Against `references.md`
- **Existing URL Check:** Cross-reference every candidate URL against all indexed links in `references.md`.
- **URL Normalization:** Check for URL variations (e.g., http/https, trailing slashes, tracking query params, alternative path aliases for the same article).
- **Content Deduplication:** Verify that the press release or announcement is not already represented by an existing link in `references.md` for that entity.

### 3. Targeted Search Strategy
When performing web searches, use targeted domain-restricted and topic-specific queries such as:
- `"Genesis Mission" site:.gov`
- `"Genesis Mission" site:.edu`
- `"Genesis Mission" (site:newsroom.* OR site:press.* OR site:blogs.* OR "press release")`
- `"Genesis Mission" AND ("AI for Science" OR "Quantum" OR "CHIPS Act")`

### 4. Integration & Queue Management
- Add newly discovered, validated links either to the temporary `wip:` section at the bottom of `references.md` or directly format and insert them into their respective section (`Section 4: Executive & Partner Announcements`, `Section 5: Collaborators`, etc.).
- Maintain standard link formatting:
  ```markdown
  * **[Entity Name]:** [[Article / Announcement Title]](URL)
  ```
  or sub-bullet style for entities with multiple references:
  ```markdown
  * **[Entity Name]:**
    * [[Article / Announcement Title]](URL)
  ```

### 5. Ecosystem Coverage Check
- Whenever new entities (laboratories, universities, agencies, or industrial partners) are introduced via new references, evaluate whether `coverage.md` and `README.md` Appendix A need to be extended to track the newly identified ecosystem participants.

### 6. Version Update
- **Version Bump:** Increment the patch version string on line 1 of `README.md` (e.g., `**Version**: 0.2.9-alpha` → `**Version**: 0.2.10-alpha`) whenever repository documentation is updated.
