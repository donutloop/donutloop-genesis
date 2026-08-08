# Instructions: Processing `references.md`

## Context
The file `references.md` contains a temporary `WIP` section at the bottom with raw, unformatted links and data. 

## Task
Process all entries from the `WIP` section and integrate them into their correct existing locations throughout `references.md`.

## Execution Rules
- **Scope:** Process ONLY items currently listed in the `WIP` section. Do NOT add external links, new URLs, or extra data.
- **Deduplication & Abort Policy:** Check every link in the `WIP` section against existing entries in `references.md`. If ANY link in `WIP` is found to be a duplicate of an existing entry, **ABORT the process immediately**. Do NOT process the link, do NOT increment version strings in `README.md` or `README.de.md`, do NOT update `CHANGELOG.md`, do NOT create a Git release tag, and do NOT remove the duplicate entry without explicit user confirmation. Report the duplicate URL and its existing line/section location directly to the user.
- **Coverage Check:** Check if the coverage report (`coverage.md`) needs to be extended when new entities or references are introduced from the `WIP` section.
- **Version Update:** Increment the patch version string on line 1 of `README.md` (e.g., `**Version**: 0.2.9-alpha` → `**Version**: 0.2.10-alpha`) whenever documentation updates are integrated.
- **Changelog Update:** Update `CHANGELOG.md` under the active release version section to log the processed WIP reference integrations, deduplication results, and scratchpad decommissioning.
- **Release Tag & Publish:** Whenever `CHANGELOG.md` is updated or modified, a corresponding Git release tag matching the updated version string (e.g. `v1.0.3`) MUST be created and published to origin (`git tag -a vX.Y.Z -m "Release vX.Y.Z: ..." && git push origin main vX.Y.Z`).

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
