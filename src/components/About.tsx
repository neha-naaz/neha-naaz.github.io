import { profile, skills, education } from "@/content/site";
import Section from "./Section";

/** Skills are rendered as a package.json: a nod to how engineers actually describe their stack. */
export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-lg leading-relaxed">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="font-mono text-sm text-muted">📍 {profile.location}</p>
          <div className="pt-4">
            <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">Education</h3>
            {education.map((e) => (
              <div key={e.school} className="text-base">
                <div className="font-medium">{e.degree}</div>
                <div className="text-muted">
                  {e.school} · {e.period}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="self-start overflow-hidden rounded-xl border border-line bg-card font-mono text-[13px]">
          {/* window title bar */}
          <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="ml-2 text-xs text-muted">package.json</span>
          </div>

          <div className="space-y-3 p-5 leading-6">
            <div className="text-muted">{"{"}</div>
            <div className="pl-4">
              <span className="text-accent">&quot;name&quot;</span>: &quot;
              {profile.name.toLowerCase().replace(" ", "-")}&quot;,
            </div>
            <div className="pl-4">
              <span className="text-accent">&quot;dependencies&quot;</span>: {"{"}
            </div>

            {Object.entries(skills).map(([group, list]) => (
              <div key={group} className="pl-8">
                <div className="text-accent">&quot;{group}&quot;:</div>
                <ul className="mt-1.5 flex flex-wrap gap-1.5">
                  {list.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-line bg-paper px-2 py-0.5 text-xs transition-colors hover:border-accent hover:text-accent"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="pl-4">{"}"}</div>
            <div className="text-muted">{"}"}</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
