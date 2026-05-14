export type ExperienceItem = {
  id: string;
  title: string;
  org: string;
  period: string;
  summary: string;
  highlights: string[];
};

/** Replace with your real timeline; structure is recruiter-scannable. */
export const experience: ExperienceItem[] = [
  {
    id: "swe-focus",
    title: "Software engineering focus",
    org: "Personal & academic projects",
    period: "Ongoing",
    summary:
      "Building reliable tools, gameplay systems, and web experiences with an emphasis on clarity, performance, and maintainability.",
    highlights: [
      "Static sites and small full-stack utilities",
      "Unity/C# gameplay and interaction systems",
      "Collaboration using Git and iterative delivery",
    ],
  },
  {
    id: "games-focus",
    title: "Game development & technical design",
    org: "Solo and team projects",
    period: "Ongoing",
    summary:
      "Shipped playable experiences end-to-end: mechanics, level flow, onboarding, and technical implementation in Unity (2D and VR).",
    highlights: [
      "Solo 2D platformer: systems, levels, narrative triggers",
      "VR research build: interaction and reward systems",
    ],
  },
];
