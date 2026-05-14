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
  about: string;
  designGoal: string;
  keyContributions: string[];
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
      "A fast, accessible multi-page portfolio designed for both software and game development roles.",
    about:
      "Designed and built a multi-page portfolio with a focus on clear navigation, strong information hierarchy, and distinct pathways for software and game work.",
    designGoal:
      "Create a fast, accessible portfolio with clear information architecture, strong visual hierarchy, and dedicated entry points for different types of work.",
    keyContributions:
      [
        "Designed UI layout system focused on clarity, hierarchy, and scanability across pages",
        "Structured portfolio into distinct software and game sections with consistent navigation patterns",
        "Implemented project card system with filtering, tagging, and media previews for quick evaluation",
        "Shaped overall UX flow to support fast browsing and reduced cognitive load for recruiters",
      ],
    stack: ["Astro", "TypeScript", "Vite", "GitHub Pages", "AI-Assisted Development"],
    tags: [
      "Astro",
      "TypeScript",
      "Vite",
      "Static Site",
      "GitHub Pages",
      "SEO",
      "Accessibility",
      "AI-Assisted Development",
    ],
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
      "Don't Stop Climbing is a 2D narrative-driven platformer where players guide Alaric through the base of a mysterious mountain while learning core movement mechanics and exploring unsettling environments. The game focuses on themes of persistence and psychological struggle, framing death not as failure but as a brief pause in an ongoing climb.",
    about:
      "While building Don't Stop Climbing, I focused on how level structure and mechanics could reinforce the theme of persistence. Although the overall progression is vertical, many sections require players to move horizontally or briefly descend before continuing upward, emphasizing that progress is not always a straight climb. I also designed the feather collectible system to encourage exploration. Feathers are placed slightly off the main path, often requiring players to experiment with movement or approach areas from different angles. Collecting them rewards players with additional currency and, in later versions of the project, will unlock additional rewards. This system helps reinforce the idea that slowing down and exploring the mountain can be just as valuable as pushing upward as quickly as possible.",
    designGoal:
      "Communicate persistence through layout and mechanics: readable movement, non-linear vertical routing, and an exploration-first collectible economy.",
    keyContributions: [
      "Solo development: gameplay systems, player controller, level design, narrative triggers, and onboarding flow. Art and audio assets sourced externally.",
    ],
    stack: ["Unity", "C#", "Level Design"],
    tags: ["Unity", "C#", "Level Design", "Solo Dev"],
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
      "Dolly's World is a VR escape-room experience on the Oculus Quest, set inside a surreal 1990s/early 2000s children's TV show. Players solve puzzles to uncover the story of Bee and Jess, exploring themes of queer relationships, labor, and class through immersive interactions and environmental storytelling.",
    about:
      "My focus in building Dolly's World was on technical implementation and interactive design, particularly the claw machine and prize systems. I worked on how these systems would interact with players as they explored the environment and pursued achievements. These systems were built to be flexible, allowing other developers to place them within designed spaces or anywhere in the world while still maintaining meaningful challenge, curiosity, and reward for the player.",
    designGoal:
      "Deliver flexible, authorable interaction systems (claw machine and prizes) on Quest that support progression, achievements, and designer-placed props without rewriting core logic.",
    keyContributions: [
        "Implemented the claw machine interaction and prize reward systems in Unity, including interaction logic and reward behavior.",
        "Contributed to the design of how these systems tie into player progression, achievements, and exploration within the VR experience.",
      ],
    stack: ["Unity", "C#", "OpenXR / Quest", "VR UX"],
    tags: ["Unity", "C#", "VR", "Research"],
    links: [],
    gallery: [
      { src: "Images/DW1.png", alt: "Dolly's World VR screenshot 1" },
      { src: "Images/DW2.png", alt: "Dolly's World VR screenshot 2" },
      { src: "Images/DW3.png", alt: "Dolly's World VR screenshot 3" },
    ],
  },
  {
    slug: "vinland",
    title: "Vinland",
    kind: "Cross-platform app",
    tracks: ["software"],
    featured: true,
    role: "Solo engineer with AI-Assisted Development",
    tagline:
      "A fitness and nutrition journal that syncs across iOS, Android, and the web.",
    about:
      "Vinland helps people plan workouts, log daily training and nutrition, run interval timers, and see trends over time. Users authenticate with email and password; data lives in Supabase (PostgreSQL) with row-level security so each person only sees their own journal, templates, and profile. The same codebase ships native builds through Expo and a static web bundle hosted on GitHub Pages.",
    designGoal:
      "Keep logging fast on a phone (today’s checklist, week planning, timer) while still feeling trustworthy for long-term data—clear locks for one-per-day fields, read-only past days where it matters, and a guided first-launch onboarding so the app never feels empty or confusing after sign-up.",
    keyContributions: [
      "Modeled and migrated a Supabase schema (profiles, journal days/tasks, workout templates) with RLS aligned to auth users.",
      "Implemented a storage facade over Supabase so screens load on focus and persist with full-journal / full-library replace patterns consistent with the original local-first design.",
      "Built a one-time AsyncStorage → cloud migration for legacy installs, with a gate so the UI never reads an empty journal mid-import.",
      "Added account deletion via a Supabase Edge Function using the service role, with client wiring and deploy scripting in the repo.",
      "Shipped static web export to GitHub Pages (including .nojekyll for `_expo` assets) and an explicit configuration-missing screen when build-time env vars are absent.",
    ],
    stack: [
      "TypeScript",
      "React Native",
      "Supabase",
      "GitHub Pages",
    ],
    tags: [
      "TypeScript",
      "React Native",
      "Supabase",
      "GitHub Pages",
      "AI-Assisted Development",
    ],
    links: [
      {
        label: "View live",
        href: "https://sud523.github.io/Vinland-App/",
        external: true,
      },
      {
        label: "Source",
        href: "https://github.com/Sud523/Vinland-app",
        external: true,
      },
    ],
    // video: { title: "Walkthrough", src: "/videos/vinland.mp4" },
    gallery: [
      // Add files under your portfolio `public/` tree, e.g.:
      // { src: "Images/vinland-home.png", alt: "Home: today’s workout and nutrition checklist" },
      // { src: "Images/vinland-week.png", alt: "Week view with scheduled workouts" },
      // { src: "Images/vinland-stats.png", alt: "Stats: streaks and weight trend" },
    ],
  },
    {
    slug: "brew-mail",
    title: "Brew Mail",
    kind: "Web · AI-Assisted Development",
    tracks: [
      "software",
    ],
    featured: true,
    role: "Solo engineer with AI-Assisted Development",
    tagline:
      "A unified inbox for Gmail and Outlook, with local LLM summarization and RAG Q&A over your own mail.",
    about:
      "Brew Mail is a portfolio-grade AI inbox assistant: connect Google and Microsoft mailboxes, sync into a normalized store, and use retrieval-augmented generation (pgvector) plus local Ollama models for classification, summaries, folder suggestions, and grounded “ask my inbox” chat. The web app is a React SPA with a three-column inbox (folders, list, reading pane), account switching, search, and settings for connected accounts and optional filters.",
    designGoal:
      "Ship a calm, readable productivity UI—warm neutrals, cream surfaces, and soft depth—so dense email workflows feel approachable without looking like a generic admin dashboard.",
    keyContributions: [
      "Designed a small monorepo so the full OAuth → sync → RAG → UI story is easy to review and maintain.",
      "Implemented a provider-agnostic mail model and API so Gmail and Microsoft Graph payloads are normalized before the UI or RAG pipeline sees them.",
      "Built ingestion and retrieval: clean and chunk bodies, embed with Ollama, store vectors in Supabase, and answer questions with top-k similarity search plus grounded prompts.",
      "Delivered end-user flows in the SPA: OAuth login/callback, inbox sync and summarize, AI tag filters, folder rail with AI organize, ask inbox chat, and accounts/settings.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Node.js",
      "Supabase",
      "AI-Assisted Development",
      "Ollama",
      "Google API",
      "Microsoft Graph API",
      "JWT Authentication",
    ],
    tags: [
      "RAG",
      "Vector Database",
      "OAuth2",
      "LLM",
      "TypeScript",
      "AI-Assisted Development",
    ],
    links: [],
    gallery: [
      // Add files under your portfolio `public/` tree, e.g.:
      // { src: "Images/vinland-home.png", alt: "Home: today’s workout and nutrition checklist" },
      // { src: "Images/vinland-week.png", alt: "Week view with scheduled workouts" },
      // { src: "Images/vinland-stats.png", alt: "Stats: streaks and weight trend" },
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

/** Unique tags from projects on a given track (for page-scoped filters). */
export function allProjectTagsForTrack(track: Track): string[] {
  const set = new Set<string>();
  for (const p of projects) {
    if (!p.tracks.includes(track)) continue;
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
