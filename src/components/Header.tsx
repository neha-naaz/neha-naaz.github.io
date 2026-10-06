import Link from "next/link";
import { profile } from "@/content/site";
import { projects } from "@/content/projects";
import CommandPalette, { type PaletteItem } from "./CommandPalette";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#changelog", label: "Changelog" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  // The palette is built from the same data as the page, so new projects show up automatically.
  const items: PaletteItem[] = [
    ...nav.map((n) => ({ id: n.href, label: `Go to ${n.label}`, group: "Navigate", action: { type: "link" as const, href: n.href } })),
    ...projects.map((p) => ({
      id: `project-${p.slug}`,
      label: p.title,
      hint: p.kind === "clone" ? `clone of ${p.cloneOf}` : p.status,
      group: "Projects",
      action: { type: "link" as const, href: `/projects/${p.slug}` },
    })),
    ...profile.socials.map((s) => ({
      id: `social-${s.label}`,
      label: `Open ${s.label}`,
      group: "Links",
      action: { type: "link" as const, href: s.href, external: true },
    })),
    { id: "resume", label: "Open résumé (PDF)", group: "Links", action: { type: "link", href: profile.resumeUrl, external: true } },
    { id: "copy-email", label: "Copy email address", hint: profile.email, group: "Actions", action: { type: "copy", text: profile.email } },
    { id: "theme", label: "Toggle light / dark theme", group: "Actions", action: { type: "theme" } },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-paper/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>
        <nav className="hidden items-center gap-6 font-mono text-xs uppercase tracking-wider text-muted sm:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="transition-colors hover:text-ink">
              {n.label}
            </Link>
          ))}
        </nav>
        <CommandPalette items={items} />
      </div>
    </header>
  );
}
