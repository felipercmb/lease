"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("lease:cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] mx-auto max-w-4xl rounded-t-2xl border border-[var(--color-border)] bg-white p-4 shadow-lg">
      <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-[var(--lease-muted)]">
          Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa política de privacidade.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => {
              localStorage.setItem("lease:cookie-consent", "accepted");
              setVisible(false);
            }}
            className="rounded-lg bg-[var(--lease-primary)] px-4 py-2 text-white"
          >
            Aceitar
          </button>
          <button onClick={() => setVisible(false)} className="rounded-lg border border-[var(--color-border)] px-4 py-2">
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
}




