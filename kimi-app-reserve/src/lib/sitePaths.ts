/**
 * Base-aware URLs for this SPA (Vite `import.meta.env.BASE_URL`).
 * Use instead of hardcoded `/?page=...` so blog and other pages work when deployed under a subpath.
 */
export function hrefPage(page: string): string {
  const base = import.meta.env.BASE_URL;
  if (page === 'home') {
    return base === './' ? './' : base;
  }
  const q = `?page=${encodeURIComponent(page)}`;
  if (base === './') {
    return `./${q}`;
  }
  const sep = base.endsWith('/') ? base : `${base}/`;
  return `${sep}${q}`;
}

/** Hash link on the home page (e.g. services, cta). */
export function hrefHomeHash(hash: string): string {
  const h = hash.replace(/^#/, '');
  const home = hrefPage('home');
  if (home === './') {
    return `./#${h}`;
  }
  const trimmed = (home.endsWith('/') ? home.slice(0, -1) : home) || '/';
  return `${trimmed}#${h}`;
}
