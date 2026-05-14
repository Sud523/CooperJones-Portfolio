/** Absolute path from site root including Astro `base` (GitHub Pages subpath). */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  const clean = path.replace(/^\//, "");
  const encoded = clean
    .split("/")
    .filter((s) => s.length > 0)
    .map((seg) => encodeURIComponent(seg))
    .join("/");
  return `${base}${encoded}`;
}
