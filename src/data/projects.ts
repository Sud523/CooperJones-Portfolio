/** Use both entries for hybrid work, e.g. `["software", "games"]`. */
export type Track = "software" | "games";

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  kind: string;
  tracks: Track[];
  featured: boolean;
  role: string;
  tagline: string;
  problem: string;
  outcomes: string[];
  stack: string[];
  tags: string[];
  links: ProjectLink[];
  video?: { title: string; src: string };
  /** Paths under `public/` (e.g. Images/foo.png) */
  gallery: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "portfolio-site",
    title: "Hybrid portfolio (this site)",
    kind: "Web · static delivery",
    tracks: ["software"],
    featured: true,
    role: "Author",
    tagline:
      "A fast, accessible multi-page portfolio tuned for both software and game hiring pipelines.",
    problem:
      "A single long-scroll page skewed game-only and buried engineering signal; recruiters needed clearer IA and richer previews.",
    outcomes: [
      "Split software and game work into dedicated routes with shared design system",
      "Data-driven project cards with filtering and scoped media lightbox",
      "Per-page SEO, sitemap, and structured data for discoverability",
    ],
    stack: ["Astro", "TypeScript", "CSS", "GitHub Pages"],
    tags: ["Web", "Astro", "TypeScript", "Accessibility", "SEO"],
    links: [
      {
        label: "Source",
        href: "https://github.com/CooperJones/CooperJones-Portfolio",
        external: true,
      },
    ],
    gallery: [],
  },
  {
    slug: "dont-stop-climbing",
    title: "Don't Stop Climbing",
    kind: "2D narrative platformer",
    tracks: ["games"],
    featured: true,
    role: "Technical game designer · Gameplay programmer · Level designer",
    tagline:
      "A narrative-driven climb where level flow and collectibles reinforce persistence—not punishment.",
    problem:
      "Communicate a psychological climb theme through layout and mechanics while keeping movement readable and exploration rewarding.",
    outcomes: [
      "Shipped solo vertical slice: player controller, encounters, narrative triggers, onboarding",
      "Designed feather collectibles off the critical path to reward experimentation and risk",
      "Used non-linear vertical routing (horizontal and brief descents) so “up” never feels one-note",
    ],
    stack: ["Unity", "C#", "2D tooling", "Level blockouts"],
    tags: ["Unity", "C#", "2D", "Level design", "Systems", "Solo dev"],
    links: [
      {
        label: "Play on itch.io",
        href: "https://sud523.itch.io/dont-stop-climbing",
        external: true,
      },
      {
        label: "Design documentation (PDF)",
        href: "Documents/Don't Stop Climbing Portfolio Documentation.pdf",
      },
    ],
    video: {
      title: "Don't Stop Climbing gameplay preview",
      src: "https://www.youtube.com/embed/XD6JsrcEH_w",
    },
    gallery: [
      { src: "Images/DSC1.png", alt: "Don't Stop Climbing key moment screenshot" },
      { src: "Images/DSC2.png", alt: "Don't Stop Climbing level layout comparison" },
      { src: "Images/DSC3.png", alt: "Don't Stop Climbing UI or narrative moment" },
      { src: "Images/DSC4.png", alt: "Don't Stop Climbing screenshot 4" },
      { src: "Images/DSC5.png", alt: "Don't Stop Climbing screenshot 5" },
      { src: "Images/DSC6.png", alt: "Don't Stop Climbing screenshot 6" },
      { src: "Images/DSC7.png", alt: "Don't Stop Climbing screenshot 7" },
      { src: "Images/DSC8.png", alt: "Don't Stop Climbing screenshot 8" },
    ],
  },
  {
    slug: "dollys-world",
    title: "Dolly's World",
    kind: "VR research experience · Quest",
    tracks: ["games"],
    featured: true,
    role: "Technical game designer · Gameplay programmer · VR interaction",
    tagline:
      "VR escape-room set in a surreal children's show—systems built to be placed anywhere while staying legible and rewarding.",
    problem:
      "Deliver flexible, authorable interaction systems (claw machine and prizes) that support progression, achievements, and exploration in VR.",
    outcomes: [
      "Implemented claw machine interaction and prize reward logic in Unity for Quest",
      "Partnered on tying systems into achievements and environmental storytelling beats",
      "Kept systems data-driven so designers could place props without rewriting core logic",
    ],
    stack: ["Unity", "C#", "OpenXR / Quest", "VR UX"],
    tags: ["Unity", "C#", "VR", "XR", "Systems", "Research"],
    links: [],
    gallery: [
      { src: "Images/DW1.png", alt: "Dolly's World VR screenshot 1" },
      { src: "Images/DW2.png", alt: "Dolly's World VR screenshot 2" },
      { src: "Images/DW3.png", alt: "Dolly's World VR screenshot 3" },
    ],
  },
];

export function allProjectTags(): string[] {
  const set = new Set<string>();
  for (const p of projects) {
    for (const t of p.tags) set.add(t);
  }
  return [...set].sort((a, b) => a.localeCompare(b));
}

export function projectsForTrack(track: Track): Project[] {
  return projects.filter((p) => p.tracks.includes(track));
}

export function featuredProjects(): Project[] {
  return projects.filter((p) => p.featured).slice(0, 6);
}
