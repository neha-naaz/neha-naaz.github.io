import Link from "next/link";
import { projects } from "@/content/projects";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Changelog from "@/components/Changelog";
import Contact from "@/components/Contact";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />
      <Highlights />
      <About />
      <Changelog />
      <Section
        id="projects"
        index="03"
        title="Projects"
        aside={
          <Link href="/projects" className="font-mono text-xs text-muted hover:text-accent">
            all projects →
          </Link>
        }
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>
      <Contact />
    </>
  );
}
