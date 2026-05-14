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

/** PDFs for download / open in tab; `previewImage` is the inline raster (PNG/WebP) shown on the resume page. */
export const resumes = [
  {
    id: "software" as const,
    label: "Software engineering",
    shortLabel: "Software",
    blurb: "Tailored for software engineering, tools, and generalist technical roles.",
    file: "Documents/Minor Jones Resume Software Engineer.pdf",
    previewImage: "Images/Minor Jones Resume Software Engineer.png",
  },
  {
    id: "games" as const,
    label: "Game development",
    shortLabel: "Games",
    blurb: "Tailored for gameplay programming, Unity, technical design, and game design roles.",
    file: "Documents/Minor Jones Resume Game Designer.pdf",
    previewImage: "Images/Minor Jones Resume Game Designer.png",
  },
] as const;

export type ResumeId = (typeof resumes)[number]["id"];
