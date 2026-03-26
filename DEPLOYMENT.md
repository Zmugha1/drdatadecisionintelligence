# Deployment Notes — Dr. Data Decision Intelligence
## CRITICAL — Read Before Any Build Changes

### Build Command (never modify without reading this first)
`npm run build` at repo root — see `package.json`.

### Why Each Step Exists
1. **kimi-app-reserve** — `npm run build` (tsc + vite) produces the **full dynamic** main site (React Router, sections, modals, etc.) into `kimi-app-reserve/dist/`.
2. **scripts/copy-kimi-to-dist.mjs** — copies that output to **`dist/`** (Netlify publish dir).
3. **bni-chapter-app** — builds the BNI member app to `bni-chapter-app/dist/`.
4. **scripts/copy-bni-to-dist.mjs** — copies that output to **`dist/bni/`**.
5. **scripts/sync-root-static.mjs** — mirrors `dist/index.html` and `dist/assets/` to repo root **`./index.html`** and **`./assets/`** (for README / static hosting parity).

**Note:** `src/` at repo root (legacy Vite app) is **not** used in production. Use **`npm run dev --prefix kimi-app-reserve`** (or `npm run dev` from root) to edit the live layout. **Legacy:** `npm run build:legacy-root-vite` uses the old root `src/` build if you ever need it.

### Netlify Settings
- Base directory: (blank — leave empty)
- Build command: npm run build
- Publish directory: dist
- netlify.toml lives at repo root — controls everything

### Final dist/ Structure After Build
dist/
├── index.html          ← Dr. Data main site
├── assets/             ← Dr. Data assets
└── bni/
    ├── index.html      ← BNI member form
    └── assets/         ← BNI assets

### Live URLs
- drdatadecisionintelligence.com → Dr. Data site
- drdatadecisionintelligence.com/bni → BNI member form
- drdatadecisionintelligence.com/bni/host → Host dashboard

### Adding a New Client POC
NEVER add client work to this repo.
Each client gets their own separate repo and Netlify project.

### Recovery
If site breaks: git log --oneline to find last good commit
Recover a file: git checkout [commit] -- [filepath]

### Homepage / Hero — do not repeat this mistake
- **Never** hide above-the-fold hero content behind `opacity-0` until `useEffect` runs. If JS is slow, blocked, or transitions fail, users see a **blank band** under the nav.
- Avoid `overflow-hidden` on the hero wrapper unless you have tested production builds; it can clip content with transforms.
- Prefer simple Tailwind classes like `min-h-screen` over exotic arbitrary values like `min-h-[min(100dvh,920px)]` that may not emit CSS consistently across builds.
- Large images in `public/` (e.g. `service-icons.png`) must use explicit `max-h-*` / `object-contain` so they cannot dominate the viewport.
