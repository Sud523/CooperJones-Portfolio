Place PDFs here so Astro serves them from `/Documents/…` on the live site.

**Two resumes** (paths must match `src/site.config.ts` → `resumes` → `file`):

| File | Used for |
|------|-----------|
| `Minor Jones Resume Software Engineer.pdf` | Software tab — download / open |
| `Minor Jones Resume Game Designer.pdf` | Games tab — download / open |

**Inline preview** uses raster or SVG images from `public/Images/` (`previewImage` in `site.config.ts`). Export each resume as PNG or WebP (recommended ~1600px wide) and point `previewImage` at those files so the page does not embed the PDF (which triggers the browser’s PDF UI). Starter placeholders: `resume-software-preview.svg`, `resume-games-preview.svg`.

If your files use different names, either rename them to match or edit `file` / `previewImage` in `src/site.config.ts`.
