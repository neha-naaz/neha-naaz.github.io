import { profile } from "@/content/site";

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto mt-10 w-full max-w-5xl px-6 pb-10">
      <div className="flex flex-col justify-between gap-2 border-t border-line pt-6 font-mono text-xs text-muted sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>
          Press <kbd className="rounded border border-line px-1.5 py-0.5">⌘ K</kbd> to jump anywhere
        </span>
      </div>
    </footer>
  );
}
