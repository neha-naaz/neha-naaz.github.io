import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { StatusBadge } from "@/components/ProjectCard";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p?.title, description: p?.summary };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <article className="mx-auto max-w-2xl py-16">
      <Link href="/projects" className="font-mono text-xs text-muted hover:text-accent">
        ← all projects
      </Link>
      <div className="mt-8 flex items-center gap-4">
        <StatusBadge status={p.status} />
        <span className="font-mono text-xs text-muted">{p.year}</span>
        {p.kind === "clone" && <span className="font-mono text-xs text-accent">clone of {p.cloneOf}</span>}
      </div>
      <h1 className="mt-3 font-serif text-5xl font-medium leading-tight">{p.title}</h1>
      <p className="mt-4 text-xl text-muted">{p.summary}</p>

      <div className="mt-6 flex flex-wrap gap-3 font-mono text-sm">
        {p.links?.demo && (
          <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="rounded-md bg-ink px-4 py-2 text-paper">
            Live demo ↗
          </a>
        )}
        {p.links?.repo && (
          <a href={p.links.repo} target="_blank" rel="noopener noreferrer" className="rounded-md border border-line bg-card px-4 py-2">
            Source ↗
          </a>
        )}
      </div>

      <div className="mt-10 space-y-4 text-lg leading-relaxed">
        {p.description?.map((para) => <p key={para}>{para}</p>)}
      </div>

      {p.highlights && (
        <>
          <h2 className="mb-3 mt-10 font-mono text-xs uppercase tracking-widest text-muted">Highlights</h2>
          <ul className="space-y-2">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span className="text-accent">▸</span>
                {h}
              </li>
            ))}
          </ul>
        </>
      )}

      <h2 className="mb-3 mt-10 font-mono text-xs uppercase tracking-widest text-muted">Stack</h2>
      <ul className="flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <li key={s} className="rounded border border-line bg-card px-2 py-1 font-mono text-xs">
            {s}
          </li>
        ))}
      </ul>
    </article>
  );
}
