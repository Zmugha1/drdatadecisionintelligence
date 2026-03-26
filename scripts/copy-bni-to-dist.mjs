/**
 * Nests BNI app build at dist/bni/ (SPA routes + Netlify redirects).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const bniOut = path.join(root, 'bni-chapter-app', 'dist');
const target = path.join(root, 'dist', 'bni');

if (!fs.existsSync(bniOut)) {
  console.error('Missing bni-chapter-app/dist. Build BNI first.');
  process.exit(1);
}

fs.rmSync(target, { recursive: true, force: true });
fs.cpSync(bniOut, target, { recursive: true });
console.log('Copied bni-chapter-app/dist -> dist/bni/');
