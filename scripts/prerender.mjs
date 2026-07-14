/**
 * Prerenders PAGE_META routes into kimi-app-reserve/dist after Vite client build.
 * Uses a Vite SSR bundle so App.tsx / pageMeta.ts can run under Node.
 *
 * Usage (after client build):
 *   node scripts/prerender.mjs
 */
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const kimiRoot = path.join(root, 'kimi-app-reserve');
const distDir = path.join(kimiRoot, 'dist');
const tmpDir = path.join(kimiRoot, '.prerender-tmp');
const ssrOutDir = path.join(tmpDir, 'out');
const entryFile = path.join(tmpDir, 'entry.tsx');

const requireKimi = createRequire(path.join(kimiRoot, 'package.json'));

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function applyMeta(shellHtml, meta, siteUrl) {
  const canonical = `${siteUrl}${meta.path}`;
  const title = escapeAttr(meta.title);
  const description = escapeAttr(meta.description);
  const canonicalEsc = escapeAttr(canonical);

  let html = shellHtml;
  // Use function replacers so "$" in titles/descriptions is not treated as
  // String.replace special patterns ($$, $&, $1, …).
  html = html.replace(/<title>[^<]*<\/title>/, () => `<title>${title}</title>`);
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    () => `<meta name="description" content="${description}" />`,
  );
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    () => `<link rel="canonical" href="${canonicalEsc}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    () => `<meta property="og:url" content="${canonicalEsc}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    () => `<meta property="og:title" content="${title}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    () => `<meta property="og:description" content="${description}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
    () => `<meta name="twitter:title" content="${title}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    () => `<meta name="twitter:description" content="${description}" />`,
  );
  return html;
}

function injectRoot(html, markup) {
  if (!html.includes('<div id="root"></div>')) {
    throw new Error('Shell HTML is missing empty <div id="root"></div>');
  }
  // Function replacer required: markup contains "$$$" taglines; a string
  // replacement would collapse "$$$" → "$$" via replace's $$ semantics.
  return html.replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`);
}

/** Nested pages need ../assets when the client shell uses base: './'. */
function rewriteAssetPathsForDepth(html, depth) {
  if (depth <= 0) return html;
  const prefix = `${'../'.repeat(depth)}assets/`;
  return html
    .replace(/(src|href)="\.\/assets\//g, `$1="${prefix}`)
    .replace(/(src|href)="assets\//g, `$1="${prefix}`);
}

function outputPathForRoute(metaPath) {
  if (metaPath === '/') {
    return { file: path.join(distDir, 'index.html'), depth: 0 };
  }
  const cleaned = metaPath.replace(/^\//, '').replace(/\/$/, '');
  return {
    file: path.join(distDir, cleaned, 'index.html'),
    depth: cleaned.split('/').length,
  };
}

async function buildSsrBundle() {
  fs.rmSync(tmpDir, { recursive: true, force: true });
  fs.mkdirSync(tmpDir, { recursive: true });

  fs.writeFileSync(
    entryFile,
    `export { default as App } from '../src/App';\n` +
      `export { PAGE_META, SITE_URL } from '../src/lib/pageMeta';\n`,
    'utf8',
  );

  const { build } = await import(
    pathToFileURL(path.join(kimiRoot, 'node_modules', 'vite', 'dist', 'node', 'index.js')).href
  );
  const reactPlugin = (
    await import(
      pathToFileURL(
        path.join(kimiRoot, 'node_modules', '@vitejs', 'plugin-react', 'dist', 'index.js'),
      ).href
    )
  ).default;

  // Use a dedicated SSR config: keep @ alias + react, skip kimi-plugin-inspect-react
  // (that plugin breaks Node SSR with a missing Babel decorator dependency).
  await build({
    configFile: false,
    root: kimiRoot,
    base: './',
    logLevel: 'warn',
    plugins: [reactPlugin()],
    resolve: {
      alias: {
        '@': path.join(kimiRoot, 'src'),
      },
    },
    build: {
      ssr: entryFile,
      outDir: ssrOutDir,
      emptyOutDir: true,
      sourcemap: false,
      minify: false,
    },
    ssr: {
      // Keep react / react-dom external so renderToString and App share one instance.
      // App source and local modules are still bundled by the SSR build.
      external: ['react', 'react-dom', 'react-dom/server', 'react/jsx-runtime'],
    },
  });

  const outFiles = fs.readdirSync(ssrOutDir).filter((f) => f.endsWith('.js') || f.endsWith('.mjs'));
  if (outFiles.length === 0) {
    throw new Error(`SSR build produced no JS in ${ssrOutDir}`);
  }
  // Prefer entry.* if present; otherwise take the only (or first) JS file.
  const entryName =
    outFiles.find((f) => f.startsWith('entry.')) ??
    outFiles.find((f) => f === 'entry.js') ??
    outFiles[0];
  return path.join(ssrOutDir, entryName);
}

async function main() {
  const shellPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(shellPath)) {
    throw new Error(
      `Missing ${shellPath}. Run "npx vite build" in kimi-app-reserve first.`,
    );
  }
  const shellHtml = fs.readFileSync(shellPath, 'utf8');

  const React = requireKimi('react');
  const { renderToString } = requireKimi('react-dom/server');

  let ssrModulePath;
  try {
    ssrModulePath = await buildSsrBundle();
    const mod = await import(pathToFileURL(ssrModulePath).href);
    const App = mod.App ?? mod.default?.App;
    const PAGE_META = mod.PAGE_META ?? mod.default?.PAGE_META;
    const SITE_URL = mod.SITE_URL ?? mod.default?.SITE_URL;

    if (!App || !PAGE_META || !SITE_URL) {
      throw new Error(
        `SSR module missing exports. Got keys: ${Object.keys(mod).join(', ')}`,
      );
    }

    const written = [];

    for (const [key, meta] of Object.entries(PAGE_META)) {
      let markup;
      try {
        markup = renderToString(React.createElement(App, { initialPath: meta.path }));
      } catch (err) {
        const detail = err instanceof Error ? err.stack || err.message : String(err);
        throw new Error(
          `Prerender failed for route "${key}" (path ${meta.path}), component App:\n${detail}`,
        );
      }

      let html = injectRoot(shellHtml, markup);
      html = applyMeta(html, meta, SITE_URL);
      const { file, depth } = outputPathForRoute(meta.path);
      html = rewriteAssetPathsForDepth(html, depth);

      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, html, 'utf8');
      written.push(file);
      console.log(`prerender: wrote ${path.relative(root, file)} [${key}]`);
    }

    console.log(`prerender: done (${written.length} routes)`);
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
