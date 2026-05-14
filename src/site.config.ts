/** Update these for your profiles and hosting URL. */
export const person = {
  name: "Cooper Jones",
  headline: "Software engineer & game developer",
  subroles:
    "Gameplay programming · Unity & C# · Systems & tools · VR / XR · Technical design",
  email: "mjones52303@gmail.com",
  /** Full URLs for JSON-LD sameAs */
  sameAs: [
    "https://github.com/Sud523",
    "https://www.linkedin.com/in/cooper-jones-6b3289224/",
  ],
  github: "https://github.com/Sud523",
  linkedin: "https://www.linkedin.com/in/cooper-jones-6b3289224/",
  itch: "https://sud523.itch.io/",
} as const;

/** PDFs for download / open in tab; `previewImage` is shown inline (PNG/SVG/WebP) to avoid the browser PDF UI. */
export const resumes = [
  {
    id: "software" as const,
    label: "Software engineering",
    shortLabel: "Software",
    blurb: "Tailored for software engineering, tools, and generalist technical roles.",
    file: "Images/Minor Jones Resume Software Engineer.png",
    previewImage: "Images/resume-software-preview.png",
  },
  {
    id: "games" as const,
    label: "Game development",
    shortLabel: "Games",
    blurb: "Tailored for gameplay programming, Unity, technical design, and game design roles.",
    file: "Images/Minor Jones Resume Game Designer.png",
    previewImage: "Images/resume-games-preview.png",
  },
] as const;

export type ResumeId = (typeof resumes)[number]["id"];
