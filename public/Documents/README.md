Place PDFs here so Astro serves them from `/Documents/…` on the live site.

**Two resumes** (paths must match `src/site.config.ts` → `resumes` → `file`):

| File | Used for |
|------|-----------|
| `Minor Jones Resume Software Engineer.pdf` | Software tab — download / open |
| `Minor Jones Resume Game Designer.pdf` | Games tab — download / open |

**Inline preview** uses images under `public/Images/` (`previewImage` in `site.config.ts`). Defaults expect `Minor Jones Resume Software Engineer.png` and `Minor Jones Resume Game Designer.png` next to your PDFs—adjust `previewImage` if your filenames differ. Spaces in names are fine (URLs are encoded automatically).

If your files use different names, either rename them to match or edit `file` / `previewImage` in `src/site.config.ts`.
