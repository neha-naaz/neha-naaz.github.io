export const THEME_KEY = "theme";

/** Runs before first paint (inlined in layout.tsx) so there is no light/dark flash. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_KEY}');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`;

export function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch {}
}
