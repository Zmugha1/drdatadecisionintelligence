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
const directIndex = path.join(target, 'index.html');
const legacyIndex = path.join(bniOut, 'index.html');

if (fs.existsSync(legacyIndex)) {
  fs.rmSync(target, { recursive: true, force: true });
  fs.cpSync(bniOut, target, { recursive: true });
  console.log('Copied bni-chapter-app/dist -> dist/bni/');
} else if (fs.existsSync(directIndex)) {
  console.log('BNI already at dist/bni/ (Vite outDir); skipping copy.');
} else {
  console.error('Missing BNI build output. Build bni-chapter-app first.');
  process.exit(1);
}
