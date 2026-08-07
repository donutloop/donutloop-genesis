# Instructions: Processing `references.md`

## Context
The file `references.md` contains a temporary `WIP` section at the bottom with raw, unformatted links and data. 

## Task
Process all entries from the `WIP` section and integrate them into their correct existing locations throughout `references.md`.

## Execution Rules
- **Scope:** Process ONLY items currently listed in the `WIP` section. Do NOT add external links, new URLs, or extra data.
- **Deduplication:** Avoid adding duplicate entries or links; verify against existing entries and within the `WIP` section, as `WIP` is not guaranteed to be duplicate-free.
- **Coverage Check:** Check if the coverage report (`coverage.md`) needs to be extended when new entities or references are introduced from the `WIP` section.
- **Version Update:** Increment the patch version string on line 1 of `README.md` (e.g., `**Version**: 0.2.9-alpha` → `**Version**: 0.2.10-alpha`) whenever documentation updates are integrated.
- **Structure:** Preserve the existing section hierarchy. Do NOT create, delete, or rename any headers or sections.
- **Formatting:** Keep the exact formatting style of the target sections. 
- **Output:** Output ONLY the updated content for `references.md`. Do not include conversational filler, explanations, or meta-commentary.

Formatting templates:
```
* [Company Name](URL): [Product Name] - [Description of how it relates to the Genesis Mission]
```

Formatting example:

```
* [IBM](https://www.ibm.com): [IBM Quantum System Two](https://www.ibm.com/quantum) - IBM's quantum computing platform, which is being used to develop quantum algorithms for scientific research.
```
