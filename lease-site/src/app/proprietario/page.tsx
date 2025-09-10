export default function OwnerPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="mb-3 text-3xl font-semibold text-[var(--lease-primary)]">
          Seu imóvel alugado rápido, com segurança jurídica e gestão completa.
        </h1>
        <p className="text-[var(--lease-muted)]">
          Avaliação gratuita, vistoria, fotos profissionais, jurídico, seguro-fiança e análise de crédito.
        </p>
      </section>

      <section className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
        {[
          "Análise de crédito",
          "Seguro-fiança",
          "Vistoria detalhada",
          "Fotos profissionais",
          "Contratos digitais",
          "Divulgação multicanais",
        ].map((b) => (
          <div key={b} className="rounded-2xl border border-[var(--color-border)] bg-white p-4">
            <p className="font-medium">{b}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-12 max-w-3xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[var(--color-border)]">
        <h2 className="mb-4 text-xl font-semibold">Quero alugar meu imóvel com a LEASE</h2>
        <form className="grid gap-3 md:grid-cols-2">
          <input className="rounded-lg border border-[var(--color-border)] px-4 py-3" placeholder="Seu nome" />
          <input className="rounded-lg border border-[var(--color-border)] px-4 py-3" placeholder="E-mail" />
          <input className="rounded-lg border border-[var(--color-border)] px-4 py-3" placeholder="Telefone" />
          <input className="rounded-lg border border-[var(--color-border)] px-4 py-3" placeholder="Bairro do imóvel" />
          <div className="md:col-span-2 grid gap-2">
            <label className="text-sm text-[var(--lease-muted)]">Anexos (fotos/contas IPTU)</label>
            <input type="file" multiple className="rounded-lg border border-[var(--color-border)] px-4 py-2" />
          </div>
          <div className="md:col-span-2 flex items-center gap-2 text-sm text-[var(--lease-muted)]">
            <input type="checkbox" /> Concordo com a política de privacidade.
          </div>
          <button className="md:col-span-2 mt-2 inline-flex items-center justify-center rounded-xl bg-[var(--lease-primary)] px-5 py-3 font-medium text-white">
            Enviar proposta
          </button>
        </form>
      </section>
    </main>
  );
}




