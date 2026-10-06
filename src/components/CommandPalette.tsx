"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toggleTheme } from "@/lib/theme";

export type PaletteAction =
  | { type: "link"; href: string; external?: boolean }
  | { type: "copy"; text: string }
  | { type: "theme" };

export type PaletteItem = {
  id: string;
  label: string;
  hint?: string;
  group: string;
  action: PaletteAction;
};

export default function CommandPalette({ items }: { items: PaletteItem[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) => `${i.label} ${i.hint ?? ""} ${i.group}`.toLowerCase().includes(q));
  }, [items, query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const run = useCallback(
    async (item: PaletteItem) => {
      close();
      const a = item.action;
      if (a.type === "theme") toggleTheme();
      else if (a.type === "copy") {
        await navigator.clipboard.writeText(a.text).catch(() => {});
        setToast("Copied to clipboard");
        setTimeout(() => setToast(null), 1800);
      } else if (a.external) window.open(a.href, "_blank", "noopener");
      else router.push(a.href);
    },
    [close, router],
  );

  // global shortcut: ⌘K / Ctrl+K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      run(results[active]);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
        className="flex items-center gap-2 rounded-md border border-line bg-card px-2.5 py-1.5 font-mono text-xs text-muted transition-colors hover:text-ink"
      >
        <span>Search</span>
        <kbd className="rounded border border-line px-1 text-[10px]">⌘K</kbd>
      </button>

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-md bg-ink px-3 py-2 font-mono text-xs text-paper">
          {toast}
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-4 pt-[15vh] backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Command menu"
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-xl border border-line bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActive(0);
              }}
              onKeyDown={onInputKey}
              placeholder="Type a command or search…"
              className="w-full border-b border-line bg-transparent px-4 py-3.5 font-mono text-sm outline-none placeholder:text-muted"
            />
            <ul className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted">No results</li>}
              {results.map((item, i) => {
                const showGroup = i === 0 || results[i - 1].group !== item.group;
                return (
                  <li key={item.id}>
                    {showGroup && (
                      <div className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-widest text-muted">
                        {item.group}
                      </div>
                    )}
                    <button
                      onMouseMove={() => setActive(i)}
                      onClick={() => run(item)}
                      className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm ${
                        i === active ? "bg-accent text-accent-ink" : ""
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.hint && (
                        <span className={`font-mono text-xs ${i === active ? "opacity-80" : "text-muted"}`}>{item.hint}</span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
