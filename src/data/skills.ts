export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & runtime",
    items: ["C#", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Game & real-time",
    items: ["Unity (2D & VR)", "Gameplay systems", "XR interaction", "Level design"],
  },
  {
    title: "Software & delivery",
    items: ["Git", "Astro", "APIs & tooling", "Documentation", "Agile / Scrum"],
  },
  {
    title: "Design craft",
    items: ["Technical game design", "Encounter flow", "Onboarding", "Systems thinking"],
  },
];
