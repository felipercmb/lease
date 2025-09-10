"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GlobalSearch() {
  const [q, setQ] = useState("");
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (q) params.set("q", q);
        router.push(`/imoveis?${params.toString()}`);
      }}
      className="hidden w-full max-w-sm items-center rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 md:flex"
    >
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Buscar bairro, rua, tipo..."
        aria-label="Buscar imóveis"
        className="w-full bg-transparent outline-none placeholder:text-[var(--lease-muted)]"
      />
    </form>
  );
}




