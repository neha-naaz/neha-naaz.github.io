import type { Metadata } from "next";
import { projects } from "@/content/projects";
import ProjectFilter from "@/components/ProjectFilter";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);
  return (
    <div className="py-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        <span className="text-accent">§</span> The lab
      </p>
      <h1 className="mb-3 mt-3 font-serif text-5xl font-medium">Projects &amp; clones</h1>
      <p className="mb-10 max-w-xl text-muted">
        Things I&rsquo;ve built to learn, to ship, or just because I wanted to know how they work.
      </p>
      <ProjectFilter projects={sorted} />
    </div>
  );
}
