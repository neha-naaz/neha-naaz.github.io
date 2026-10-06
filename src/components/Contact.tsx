import { profile } from "@/content/site";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" index="04" title="Contact">
      <h2 className="max-w-2xl font-serif text-4xl font-medium leading-tight sm:text-5xl">
        Have something to build, or just want to say hi?
      </h2>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block border-b-2 border-accent font-mono text-lg transition-colors hover:text-accent"
      >
        {profile.email}
      </a>
      <div className="mt-8 flex gap-5 font-mono text-sm text-muted">
        {profile.socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            {s.label} ↗
          </a>
        ))}
      </div>
    </Section>
  );
}
