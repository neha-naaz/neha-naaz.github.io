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

        <pre className="overflow-x-auto rounded-xl border border-line bg-card p-5 font-mono text-[13px] leading-6">
          <code>
            <span className="text-muted">{"{"}</span>
            {"\n"}
            {"  "}
            <span className="text-accent">&quot;name&quot;</span>: <span>&quot;{profile.name.toLowerCase().replace(" ", "-")}&quot;</span>,{"\n"}
            {"  "}
            <span className="text-accent">&quot;dependencies&quot;</span>: {"{"}
            {"\n"}
            {Object.entries(skills).map(([group, list], gi, arr) => (
              <span key={group}>
                {"    "}
                <span className="text-accent">&quot;{group}&quot;</span>: [{list.map((s, i) => (
                  <span key={s}>
                    &quot;{s}&quot;{i < list.length - 1 ? ", " : ""}
                  </span>
                ))}]{gi < arr.length - 1 ? "," : ""}
                {"\n"}
              </span>
            ))}
            {"  "}
            {"}"}
            {"\n"}
            <span className="text-muted">{"}"}</span>
          </code>
        </pre>
      </div>
    </Section>
  );
}
