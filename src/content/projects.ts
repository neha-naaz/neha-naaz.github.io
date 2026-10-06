/**
 * ─────────────────────────────────────────────────────────────
 *  ADDING A PROJECT = adding one object to this array.
 *  A page at /projects/<slug> is generated automatically and the
 *  card shows up on the home page + /projects. No other file to touch.
 * ─────────────────────────────────────────────────────────────
 */

export type ProjectStatus = "shipped" | "building" | "idea";
export type ProjectKind = "original" | "clone";

export type Project = {
  slug: string; // used in the URL: /projects/<slug>
  title: string;
  kind: ProjectKind; // "clone" shows a "Clone of …" label
  cloneOf?: string; // e.g. "Spotify"
  status: ProjectStatus;
  year: number;
  summary: string; // one line, shown on cards
  description?: string[]; // paragraphs on the detail page
  highlights?: string[]; // bullet points on the detail page
  stack: string[];
  featured?: boolean; // featured projects appear on the home page
  links?: { repo?: string; demo?: string };
};

// TODO: replace these samples with your real projects.
export const projects: Project[] = [
  {
    slug: "gotrip-ai",
    title: "GoTrip AI",
    kind: "original",
    status: "building",
    year: 2026,
    summary: "An AI-assisted trip planner. Placeholder description until you fill it in.",
    description: [
      "Describe the problem, who it's for, and why you built it.",
      "Then describe the interesting engineering decisions you made along the way.",
    ],
    highlights: ["Something technically interesting", "Something you learned", "A trade-off you made"],
    stack: ["TypeScript", "React", "Node.js"],
    featured: true,
  },
  {
    slug: "example-clone",
    title: "Example Clone",
    kind: "clone",
    cloneOf: "Some Popular App",
    status: "idea",
    year: 2026,
    summary: "A placeholder for the first clone you build. Delete or replace me.",
    stack: ["Next.js", "Tailwind", "PostgreSQL"],
    featured: true,
  },
];
