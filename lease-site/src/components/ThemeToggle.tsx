"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // Mantém componente para compatibilidade, mas usa checkbox global #toggle-dark
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  function onToggle() {
    const el = document.getElementById('toggle-dark') as HTMLInputElement | null;
    if (!el) return;
    el.checked = !el.checked;
  }

  return (
    <button onClick={onToggle} aria-label="Alternar tema" className="btn" type="button">
      Tema
    </button>
  );
}




