export type ExperienceItem = {
  id: string;
  title: string;
  org: string;
  period: string;
  summary: string;
  highlights: string[];
};

/** Used on About and Resume; structure is recruiter-scannable. */
export const experience: ExperienceItem[] = [
  {
    id: "swe-focus",
    title: "Software Engineering & Interactive Systems",
    org: "Personal, Academic, & Collaborative Projects",
    period: "Ongoing",
    summary:
      "Developing full-stack applications, AI-assisted tools, and interactive systems with a focus on usability, maintainability, and practical problem solving.",
    highlights: [
      "Collaborated on an AI-powered stylist platform for a Charleston small business, contributing to both frontend and backend development",
      "Built an iOS-focused fitness tracking GitHub Pages application to organize workouts and improve personal consistency",
      "Developed an email management web application integrating Outlook and Gmail accounts with Ollama and RAG pipelines for inbox organization and AI-generated summaries",
      "Experience using AI-assisted development workflows for rapid prototyping, debugging, iteration, and feature implementation",
    ],
  },

  {
    id: "games-focus",
    title: "Game Development & Technical Design",
    org: "Solo and Collaborative Projects",
    period: "Ongoing",
    summary:
      "Designing and developing interactive gameplay experiences in Unity with a focus on player interaction, technical systems, and iterative development.",
    highlights: [
      "Developed gameplay systems, level flow, and narrative-driven interactions for solo 2D platformer projects",
      "Built VR interaction prototypes and gameplay systems through collaborative research and development work",
      "Experience balancing technical implementation with player experience, usability, and iteration through testing",
    ],
  },
];
