# Cooper Jones — Portfolio

Hybrid **software engineer + game developer** portfolio built with [Astro](https://astro.build/) and deployed as static HTML to **GitHub Pages**.

## Local development

```bash
npm install
npm run dev
```

Visit the dev server (defaults to `http://localhost:4321/` with the configured `base` path).

## Build

```bash
npm run build
npm run preview
```

Output is written to `dist/`. Point GitHub Pages at that folder (Actions artifact) or publish `dist` to the `gh-pages` branch.

## GitHub Pages configuration

1. **Repository Pages** (`https://<user>.github.io/<repo>/`): defaults are set in [`astro.config.mjs`](astro.config.mjs) as `site` + `base` (`/CooperJones-Portfolio/`).
2. **User/organization site** (`https://<user>.github.io/`): set `site` to your user URL and `base: "/"` (or `BASE_PATH=/`).

Override without editing files:

```bash
set SITE_URL=https://example.com/
set BASE_PATH=/
npm run build
```

(PowerShell: `$env:SITE_URL="..."; $env:BASE_PATH="/"; npm run build`)

## Assets

Add media and PDFs under [`public/`](public/) so URLs stay stable:

- `public/Images/*` — referenced from [`src/data/projects.ts`](src/data/projects.ts)
- `public/Documents/resume-software-engineering.pdf` — software tab on [`src/pages/resume.astro`](src/pages/resume.astro)
- `public/Documents/resume-game-development.pdf` — game dev tab (same page; paths configured in [`src/site.config.ts`](src/site.config.ts))

Legacy root `Documents/` only contained notes; production PDFs should live in `public/Documents/`.

## Customize

- Identity & social links: [`src/site.config.ts`](src/site.config.ts)
- Projects: [`src/data/projects.ts`](src/data/projects.ts)
- Skills / experience blurbs: [`src/data/skills.ts`](src/data/skills.ts), [`src/data/experience.ts`](src/data/experience.ts)

## Phase 2 backlog (not implemented yet)

- **Case study routes** — MD/MDX per project with shared frontmatter schema
- **Blog / devlog** — Astro content collections + RSS
- **GitHub activity** — bake in at build time via Action or small static JSON to avoid client rate limits
- **Testimonials** — optional data file + small section component
- **View Transitions API** — progressive enhancement between routes
- **Project spotlight carousel** — CSS scroll-snap, no autoplay by default
- **Contact form** — Formspree / Getform / Google Forms embed (Pages has no server)

## License

Private portfolio repository — adjust as needed.
