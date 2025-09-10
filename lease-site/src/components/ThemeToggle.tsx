"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("lease:theme");
    const initial = saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", initial);
    setTheme(initial);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("lease:theme", next);
    setTheme(next);
  }

  if (!theme) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Alternar tema"
      className="rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm"
    >
      {theme === "dark" ? "Claro" : "Escuro"}
    </button>
  );
}




