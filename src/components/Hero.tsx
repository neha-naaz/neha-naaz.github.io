import Link from "next/link";
import { profile, now } from "@/content/site";

export default function Hero() {
  return (
    <section className="grid gap-12 pb-8 pt-16 sm:pt-24 lg:grid-cols-[1.6fr_1fr] lg:items-end">
      <div>
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 font-mono text-xs text-muted">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          {profile.availability}
        </p>
        <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
          Hi, I&rsquo;m {profile.name.split(" ")[0]}.
          <br />
          <span className="italic text-accent">{profile.role}</span>
          <span className="caret ml-2" aria-hidden />
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
          <Link
            href="/projects"
            className="rounded-md bg-ink px-4 py-2.5 text-paper transition-transform hover:-translate-y-0.5"
          >
            See what I&rsquo;ve built →
          </Link>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-line bg-card px-4 py-2.5 transition-transform hover:-translate-y-0.5"
          >
            Résumé ↗
          </a>
        </div>
      </div>

      {/* "now" card */}
      <aside className="rotate-1 rounded-xl border border-line bg-card p-5 font-mono text-sm shadow-[6px_6px_0_var(--line)] transition-transform hover:rotate-0">
        <div className="mb-4 flex items-center justify-between text-xs text-muted">
          <span>now.md</span>
          <span>updated {new Date().toLocaleString("en", { month: "short", year: "numeric" })}</span>
        </div>
        <dl className="space-y-3">
          {Object.entries(now).map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs uppercase tracking-widest text-accent">{k}</dt>
              <dd className="mt-0.5 leading-snug">{v}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}
