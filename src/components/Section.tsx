import Reveal from "./Reveal";

/** Numbered section wrapper: "§ 02 — Changelog". */
export default function Section({
  id,
  index,
  title,
  children,
  aside,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <Reveal>
        <div className="mb-10 flex items-baseline justify-between gap-4 border-b border-line pb-3">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span className="text-accent">§ {index}</span> — {title}
          </h2>
          {aside}
        </div>
        {children}
      </Reveal>
    </section>
  );
}
