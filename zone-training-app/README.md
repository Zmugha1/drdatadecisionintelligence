# Zone Training (STZ eLearning)

React + Vite app: **Working in the Zone** (Dr. Data STZ Framework). Progress is stored in the browser under the key `drdata_zone_v1`.

## Requirements

- Node.js 18+ recommended

## Setup

```bash
cd zone-training-app
npm install
```

## Development

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). Routes include `/overview` (Program Overview: terminal objective, performance objectives, 4-level alignment, assessment architecture).

## Production build

```bash
npm run build
```

Static output is written to `dist/`. Deploy `dist/` to any static host (Netlify, GitHub Pages, S3, etc.). The app uses `base: "./"` in Vite so asset paths work from subpaths.

## Preview production build locally

```bash
npm run preview
```

## Repository

Source for this product lives in [STZ_Training on GitHub](https://github.com/Zmugha1/STZ_Training).
