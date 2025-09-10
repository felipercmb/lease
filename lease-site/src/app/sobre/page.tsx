export default function SobrePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <h1 className="mb-4 text-3xl font-semibold text-[var(--lease-primary)]">Sobre a LEASE</h1>
      <p className="max-w-3xl text-[var(--lease-muted)]">
        História curta, missão, cobertura de bairros e nosso compromisso com atendimento próximo. Atuamos com foco em
        locação residencial e comercial, garantindo segurança jurídica e transparência.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {["CRECI 00000", "Parceiro X", "Seguro Y"].map((s) => (
          <div key={s} className="rounded-2xl border border-[var(--color-border)] bg-white p-4 text-center">
            <p className="text-sm">{s}</p>
          </div>
        ))}
      </div>
    </main>
  );
}




