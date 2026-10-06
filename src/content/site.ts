/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE to change what the site says about you.
 *  Everything marked TODO(resume) is placeholder until it is
 *  filled in from your resume.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Neha Naazneen",
  role: "Software Engineer",
  // TODO(resume): one-line pitch
  tagline: "I build reliable software and turn rough ideas into things people actually use.",
  // TODO(resume): short bio paragraphs
  about: [
    "I'm a software engineer who likes the whole loop: understanding the problem, designing the system, shipping it, and living with it in production.",
    "Outside of work I build side projects and clones of products I admire, because the fastest way to understand how something works is to rebuild it.",
  ],
  location: "India", // TODO(resume)
  email: "hello@example.com", // TODO(resume)
  availability: "Open to interesting conversations",
  socials: [
    { label: "GitHub", href: "https://github.com/" }, // TODO(resume)
    { label: "LinkedIn", href: "https://linkedin.com/" }, // TODO(resume)
  ],
  resumeUrl: "/resume.pdf", // drop your PDF at public/resume.pdf
};

/** The "Now" card: what you're up to these days. */
export const now = {
  building: "This portfolio, plus a few product clones",
  learning: "Distributed systems & system design",
  reading: "Designing Data-Intensive Applications",
};

export type ChangeType = "shipped" | "improved" | "fixed";

export type Release = {
  version: string; // e.g. "v3.0.0"; newest first
  company: string;
  title: string;
  period: string;
  summary?: string;
  changes: { type: ChangeType; text: string }[];
};

// TODO(resume): replace with real experience. Newest first.
export const releases: Release[] = [
  {
    version: "v2.0.0",
    company: "Company Name",
    title: "Software Engineer",
    period: "2023 – Present",
    summary: "Short line about the team / product you work on.",
    changes: [
      { type: "shipped", text: "A feature or service you built, with the outcome (numbers help)." },
      { type: "improved", text: "Something you made faster, cheaper, or more reliable." },
      { type: "fixed", text: "A hard bug or incident you tracked down and resolved." },
    ],
  },
  {
    version: "v1.0.0",
    company: "Previous Company",
    title: "Associate Software Engineer",
    period: "2021 – 2023",
    changes: [
      { type: "shipped", text: "First big thing you delivered." },
      { type: "improved", text: "Process or performance improvement." },
    ],
  },
];

// TODO(resume): skills grouped like a package.json
export const skills: Record<string, string[]> = {
  languages: ["Java", "TypeScript", "Python", "SQL"],
  frameworks: ["Spring Boot", "React", "Next.js", "Node.js"],
  data: ["PostgreSQL", "MySQL", "Redis"],
  tooling: ["Docker", "AWS", "Git", "CI/CD"],
};

// TODO(resume): education
export const education = [
  { school: "University Name", degree: "B.Tech, Computer Science", period: "2017 – 2021" },
];
