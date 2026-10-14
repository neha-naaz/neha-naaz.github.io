import { highlights } from "@/content/site";

/** "By the numbers": big resume metrics right under the hero. */
export default function Highlights() {
  return (
    <section aria-label="Highlights" className="pb-4 pt-12">
      <dl className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((h) => (
          <div key={h.label} className="bg-card p-5">
            <dt className="font-serif text-4xl font-medium text-accent">{h.value}</dt>
            <dd className="mt-1 font-medium">{h.label}</dd>
            <dd className="mt-1 font-mono text-xs leading-snug text-muted">{h.detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
