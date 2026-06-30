# STZ Architecture Decision Record Log

Decisions are numbered sequentially starting at ADR-0001. The next new decision takes the next number. Format per entry: Date, Decision, Layer, Context, Consequence, Never do.

---

## ADR-0001: Keep this repository outside OneDrive-synced paths

**Date:** 2026-06-30
**Layer:** Tech
**Decision:** This repository lives at the local path `C:\Users\zumah\Documents\drdatadecisionintelligence` and is never placed under `C:\Users\zumah\OneDrive\Documents` or any OneDrive-synced folder.
**Context:** OneDrive continuously syncs file changes. When high-churn build folders and `node_modules` sit inside a synced directory, OneDrive locks files mid-build. This was documented in AgentPulse_Jason ADR-004, where OneDrive sync locked `target/` and `node_modules` during Tauri builds. The same lock mechanism applies to this Vite site's `node_modules` (~247 MB across subprojects) and `dist/`. Compounding risk on this machine: the Windows shell Documents folder is registry-redirected to `C:\Users\zumah\OneDrive\Documents`, so a clone made by navigating to "Documents" lands on OneDrive silently. This repo avoided that by living in the local Documents tree.
**Consequence:** Repo kept at the local Documents path, outside OneDrive sync. No build lock incidents have occurred in this repo. If OneDrive locking is ever hit again, the established fix (per ADR-004) is to relocate the repo out of the synced path to local Documents.
**Never do:** Never clone, init, move, or build a git repository inside `C:\Users\zumah\OneDrive\Documents` or any OneDrive-synced folder. Never let `.git`, `node_modules`, or build output (`dist/`, `target/`) live under OneDrive sync. Verify the physical path is not under `%OneDrive%` before cloning.
