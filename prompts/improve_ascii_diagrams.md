# Instructions: ASCII Architecture Diagram Audit & Refinement

## Context
The Genesis Mission technical documentation (`README.md`, `README.de.md`) features complex ASCII architecture diagrams illustrating executive governance, dual-foundry HPC/Quantum substrates, federated orchestration layers, and multi-institutional execution nodes. This prompt standardizes the workflow for auditing, updating, aligning, and formatting ASCII drawings across all documentation versions.

## Task
Audit, refine, and synchronize ASCII architecture diagrams across technical documentation files to ensure 100% fidelity with the surrounding text specifications, precise character geometry, and cross-language visual alignment.

## Execution Rules

### 1. Content & System Completeness Audit
- **Text Alignment:** Compare diagram components against surrounding text specifications (e.g., Section 1.2 System Topology, Section 2 Technical Framework).
- **Hardware & Software Ingestion:** Verify that all computing hardware (e.g., exascale GPUs, RDUs, Wafer-Scale WSE, deterministic LPUs, HBM3e/4 memory), quantum modalities (all 7 QPU modalities, foundries, FEL EUV prototypes), software platforms (open models GS1, SPOTTER-AI, AmSC), governance bodies (AAU, OSTP), and node counts (e.g., 22 lab/NNSA sites, 58 universities) are accurately represented in the diagram.
- **Label Precision:** Replace generic placeholders with exact technical terms and abbreviations where applicable.

### 2. Geometry & Character Alignment Rules
- **Box Border Calculation:** Calculate exact character column widths for every box boundary (`+----------------------+`).
- **Right Border Line Alignment:** Ensure right-hand vertical borders (`|`) align across every single row without character overflow or misalignment.
- **Multi-Column Heights:** Equalize vertical row counts across side-by-side columnar boxes to ensure clean horizontal alignment.
- **Padding Consistency:** Maintain uniform inner padding (1 space padding inside left/right borders).

### 3. Multi-Language Parity
- **Layout Mirroring:** Synchronize diagram geometry between the English master (`README.md`) and localized editions (`README.de.md`).
- **Localized Label Padding:** Adjust character spacing for translated text labels to fit inside identical box dimensions without distorting layout borders.

### 4. Verification & Commit
- Perform visual diff checks (`git diff`) on modified diagram blocks to verify border alignment and line length consistency.
- Stage changes and document diagram updates in `CHANGELOG.md`.
