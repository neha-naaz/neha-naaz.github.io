# Portfolio

Next.js (App Router) + TypeScript + Tailwind v4. Fully static, no backend.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Where things live

| I want to…                         | Edit                                  |
| ---------------------------------- | ------------------------------------- |
| Change name, bio, email, socials   | `src/content/site.ts` (`profile`)     |
| Edit work experience ("changelog") | `src/content/site.ts` (`releases`)    |
| Edit skills / education / "now"    | `src/content/site.ts`                 |
| **Add a project or clone**         | `src/content/projects.ts`             |
| Change colours                     | CSS variables in `src/app/globals.css`|
| Add your résumé PDF                | `public/resume.pdf`                   |

## Adding a project

Append an object to the `projects` array. That's it: it gets a card on the home page (if `featured`),
a card on `/projects`, its own page at `/projects/<slug>`, and an entry in the ⌘K menu.

```ts
{
  slug: "spotify-clone",
  title: "Spotify Clone",
  kind: "clone",
  cloneOf: "Spotify",
  status: "shipped",            // "shipped" | "building" | "idea"
  year: 2026,
  summary: "One line for the card.",
  description: ["Paragraph one", "Paragraph two"],
  highlights: ["Interesting decision"],
  stack: ["Next.js", "Tailwind"],
  featured: true,
  links: { repo: "https://github.com/…", demo: "https://…" },
}
```

## Structure

```
src/
  app/                 routes: / , /projects , /projects/[slug]
  components/          Hero, About, Changelog, ProjectCard, CommandPalette, …
  content/             all the data (site.ts, projects.ts)
  lib/theme.ts         light/dark toggle
```
