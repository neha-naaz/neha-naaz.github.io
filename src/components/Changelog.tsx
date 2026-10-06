import { releases, type ChangeType } from "@/content/site";
import Section from "./Section";

const typeStyle: Record<ChangeType, string> = {
  shipped: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  improved: "bg-sky-500/15 text-sky-700 dark:text-sky-400",
  fixed: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
};

/** Work experience told as release notes: one "version" per role. */
export default function Changelog() {
  return (
    <Section id="changelog" index="02" title="Changelog" aside={<span className="font-mono text-xs text-muted">newest first</span>}>
      <ol className="space-y-12">
        {releases.map((r) => (
          <li key={r.version} className="grid gap-4 md:grid-cols-[170px_1fr] md:gap-10">
            <div className="font-mono text-sm">
              <span className="rounded-md border border-line bg-card px-2 py-1 text-accent">{r.version}</span>
              <p className="mt-3 text-muted">{r.period}</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-medium">
                {r.title} <span className="text-muted">@ {r.company}</span>
              </h3>
              {r.summary && <p className="mt-1 text-muted">{r.summary}</p>}
              <ul className="mt-4 space-y-2.5">
                {r.changes.map((c) => (
                  <li key={c.text} className="flex items-baseline gap-3">
                    <span className={`shrink-0 rounded px-1.5 py-0.5 font-mono text-[11px] uppercase ${typeStyle[c.type]}`}>
                      {c.type}
                    </span>
                    <span className="leading-relaxed">{c.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
