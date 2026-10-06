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

export const projects: Project[] = [
  {
    slug: "tripflow",
    title: "Tripflow (GoTrip AI)",
    kind: "original",
    status: "building",
    year: 2026,
    summary: "A group-travel marketplace: agencies publish trips, travelers book with a deposit, and confirmed members join a trip group chat.",
    description: [
      "Agencies create and publish trips; travelers book a seat, pay a deposit, and once confirmed are added to a group chat for that trip.",
      "It's a modular monolith with clear module boundaries (auth, agency, trip, booking, payment, group, chat), which keeps the domain clean without the overhead of microservices.",
    ],
    highlights: [
      "Seat holds and a booking → payment → confirmed → group membership flow",
      "Webhook-driven payment confirmation",
      "Real-time group chat over STOMP WebSocket",
      "Integration tests against embedded Postgres",
    ],
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "Flyway", "JWT", "WebSocket", "React", "TypeScript", "Docker"],
    featured: true,
    links: { repo: "https://github.com/neha-naaz/GoTrip-AI" },
  },
  // Add your next project or clone here. Example:
  // {
  //   slug: "spotify-clone", title: "Spotify Clone", kind: "clone", cloneOf: "Spotify",
  //   status: "idea", year: 2026, summary: "…", stack: ["Next.js"], featured: true,
  // },
];
