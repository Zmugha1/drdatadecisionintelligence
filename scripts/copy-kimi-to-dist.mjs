/**
 * Puts the Kimi app production build into ./dist (Netlify publish dir).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const kimiDist = path.join(root, 'kimi-app-reserve', 'dist');
const out = path.join(root, 'dist');

if (!fs.existsSync(kimiDist)) {
  console.error('Missing kimi-app-reserve/dist. Run: cd kimi-app-reserve && npm run build');
  process.exit(1);
}

fs.rmSync(out, { recursive: true, force: true });
fs.cpSync(kimiDist, out, { recursive: true });
console.log('Copied kimi-app-reserve/dist -> dist/');
