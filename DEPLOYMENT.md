# Deployment Notes — Dr. Data Decision Intelligence
## CRITICAL — Read Before Any Build Changes

### Build Command (never modify without reading this first)
tsc && vite build && node -e "const fs=require('fs');
fs.renameSync('dist/index-build.html','dist/index.html')" 
&& cd bni-chapter-app && npm install && npm run build 
&& cd .. && cp -r bni-chapter-app/dist dist/bni

### Why Each Step Exists
1. tsc — TypeScript check, fails build if type errors exist
2. vite build — builds Dr. Data main site to dist/
3. node rename — CRITICAL: vite outputs index-build.html 
   but Netlify needs index.html — this renames it
   NEVER REMOVE THIS STEP
4. cd bni-chapter-app && npm install && npm run build 
   — builds BNI app to bni-chapter-app/dist/
5. cp -r bni-chapter-app/dist dist/bni 
   — copies BNI build INTO main dist folder at dist/bni/

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
