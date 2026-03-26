/** Vite-safe URL for files in /public (works with any base path). */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  const p = path.replace(/^\//, '');
  return base.endsWith('/') ? `${base}${p}` : `${base}/${p}`;
}
