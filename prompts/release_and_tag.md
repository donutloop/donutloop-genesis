# Instructions: Git Release Tagging & Remote Publishing

## Context
The Genesis Mission repository enforces strict semantic versioning across all documentation (`README.md`, `README.de.md`, `CHANGELOG.md`, `coverage.md`, and `reference_coverage.md`). Release management and Git tagging are centralized in this workflow prompt to ensure version consistency, audited release notes, and controlled remote synchronization.

## Task
Perform a formal project release by verifying version strings, updating `CHANGELOG.md`, creating an annotated Git tag matching the target release version, and pushing the commit and tag to the remote repository (`origin`).

## Execution Rules

### 1. Controlled Release Invocation
- **Dedicated Release Execution:** Git tagging (`git tag`) and remote pushing (`git push origin main vX.Y.Z`) MUST NOT be executed automatically during general prompt runs (such as link formatting, reference discovery, company profile expansion, or reference index processing).
- **Trigger:** Execute release tagging only when this prompt is invoked or when the user explicitly requests a release publication.

### 2. Version Verification
- Check line 1 of `README.md` and `README.de.md` to ensure version strings are identical and properly incremented according to Semantic Versioning (`vX.Y.Z`).
- Verify that `coverage.md` and `reference_coverage.md` reflect the current repository state.

### 3. Changelog Synchronization
- Ensure `CHANGELOG.md` contains a top-level release section corresponding to the target version:
  ```markdown
  ## [X.Y.Z] - YYYY-MM-DD

  ### Added / Changed / Fixed
  - Summary of notable updates, reference additions, or paper enrichments.
  ```

### 4. Git Commit, Tag & Push Execution
- Stage and commit all pending repository changes:
  ```bash
  git add .
  git commit -m "chore(release): bump version to vX.Y.Z and update CHANGELOG"
  ```
- Create an annotated Git release tag:
  ```bash
  git tag -a vX.Y.Z -m "Release vX.Y.Z: Summary of release updates"
  ```
- Publish commit and tag to the remote repository:
  ```bash
  git push origin main vX.Y.Z
  ```
