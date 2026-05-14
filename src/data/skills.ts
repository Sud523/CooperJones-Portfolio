export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & runtime",
    items: ["C#", "TypeScript", "JavaScript", "HTML/CSS", "Python"],
  },
  {
    title: "Game & real-time",
    items: ["Unity", "Gameplay systems", "XR interaction", "Level design"],
  },
  {
    title: "Software & delivery",
    items: ["Git", "APIs & tooling", "Documentation", "Agile / Scrum", "Web development", "Cursor"],
  },
  {
    title: "Design craft",
    items: ["Technical game design", "Encounter flow", "Onboarding", "Systems thinking", "UI/UX design"],
  },
];
