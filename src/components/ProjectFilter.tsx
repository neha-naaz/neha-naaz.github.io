"use client";

import { useState } from "react";
import type { Project } from "@/content/projects";
import ProjectCard from "./ProjectCard";

const filters = ["all", "original", "clone", "building", "shipped", "idea"] as const;

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");

  const visible = projects.filter(
    (p) => filter === "all" || p.kind === filter || p.status === filter,
  );

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2 font-mono text-xs">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-3 py-1 transition-colors ${
              filter === f ? "border-accent bg-accent text-accent-ink" : "border-line text-muted hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      {visible.length === 0 && <p className="text-muted">Nothing here yet.</p>}
    </>
  );
}
