/**
 * Mirrors dist/index.html and dist/assets to repo root (README / static hosting).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');
const distHtml = path.join(dist, 'index.html');
const distAssets = path.join(dist, 'assets');

if (!fs.existsSync(distHtml)) {
  console.error('Missing dist/index.html');
  process.exit(1);
}

fs.copyFileSync(distHtml, path.join(root, 'index.html'));

const assetsRoot = path.join(root, 'assets');
fs.rmSync(assetsRoot, { recursive: true, force: true });
if (fs.existsSync(distAssets)) {
  fs.cpSync(distAssets, assetsRoot, { recursive: true });
}
console.log('Synced dist -> ./index.html and ./assets/');
