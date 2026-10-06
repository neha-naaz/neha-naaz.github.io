import Link from "next/link";
import type { Project, ProjectStatus } from "@/content/projects";

const statusDot: Record<ProjectStatus, string> = {
  shipped: "bg-emerald-500",
  building: "bg-amber-500 animate-pulse",
  idea: "bg-muted",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
      <span className={`h-2 w-2 rounded-full ${statusDot[status]}`} />
      {status}
    </span>
  );
}

export default function ProjectCard({ project: p }: { project: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group flex h-full flex-col rounded-xl border border-line bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[6px_6px_0_var(--accent)]"
    >
      <div className="flex items-center justify-between">
        <StatusBadge status={p.status} />
        <span className="font-mono text-xs text-muted">{p.year}</span>
      </div>
      <h3 className="mt-4 font-serif text-2xl font-medium leading-tight">{p.title}</h3>
      {p.kind === "clone" && (
        <p className="mt-1 font-mono text-xs text-accent">clone of {p.cloneOf}</p>
      )}
      <p className="mt-3 flex-1 text-muted">{p.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <li key={s} className="rounded border border-line px-1.5 py-0.5 font-mono text-[11px] text-muted">
            {s}
          </li>
        ))}
      </ul>
      <span className="mt-4 font-mono text-xs opacity-0 transition-opacity group-hover:opacity-100">open →</span>
    </Link>
  );
}
