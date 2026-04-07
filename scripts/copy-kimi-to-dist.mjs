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
const rootRedirects = path.join(root, '_redirects');
if (fs.existsSync(rootRedirects)) {
  fs.copyFileSync(rootRedirects, path.join(out, '_redirects'));
  console.log('Copied repo _redirects -> dist/_redirects');
}

function copyStaticDir(name) {
  const src = path.join(root, name);
  const dest = path.join(out, name);
  if (fs.existsSync(src)) {
    fs.cpSync(src, dest, { recursive: true });
    console.log(`Copied ${name}/ -> dist/${name}/`);
  }
}

copyStaticDir('workshop');
copyStaticDir('find-your-zone');
