import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/**
 * GitHub Pages project site: set SITE_URL and BASE_PATH in env or adjust defaults.
 * User site (username.github.io): use base: "/" and your user URL.
 */
const site =
  process.env.SITE_URL ?? "https://cooperjones.github.io/CooperJones-Portfolio/";
const base = process.env.BASE_PATH ?? "/CooperJones-Portfolio/";

export default defineConfig({
  site,
  base: base.endsWith("/") ? base : `${base}/`,
  integrations: [sitemap()],
  build: {
    format: "file",
    assets: "_assets",
  },
});
