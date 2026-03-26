# Kimi App Reserve – Full Source for Dynamic Site

**Source:** `Kimi_Agent_Detailed Dr. Data Services (9)/app/`  
**Copied:** March 2026

## Purpose

This folder holds the full Kimi app structure that produces the dynamic layout on the live site. The live site’s built assets (`index-DO7f9YlZ.js`, `index-DnQgCMAk.css`) were built from this structure.

## When to Use

Use this when you need to:

- Change the main site layout or structure
- Add or change components (LeadCaptureModal, SurveyCTA, etc.)
- Rebuild the main site from source while keeping the dynamic layout

## Structure

- **src/components/** – LeadCaptureModal, SurveyCTA, UniversalNav, ui/
- **src/sections/** – Hero, HowItWorks, Services, Problem, WhyDrData, CTA
- **src/pages/** – All page components
- **src/hooks/**, **src/lib/** – Utilities

## How to Build

1. `cd kimi-app-reserve`
2. `npm install`
3. `npm run build`
4. Copy `dist/index.html` and `dist/assets/*` to project root
5. Update root `index.html` to reference the new asset filenames

## Note

The main project’s `src/` is a different structure (from dr-data-source). Building from that produces a different layout. Use this reserve when you need the full dynamic layout.

**Home page:** `src/pages/Home.tsx` must **compose** the modules under `src/sections/` and `src/components/` (e.g. `UniversalNav`, `Hero`, `Problem`, `HowItWorks`, `Services`, …). A monolithic copy-paste of the marketing page in `Home.tsx` will ignore those files and look like a flat, simplified site even after a correct build.
