export default function ContatoPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <h1 className="mb-4 text-3xl font-semibold text-[var(--lease-primary)]">Contato</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <p className="text-[var(--lease-muted)]">WhatsApp: (00) 00000-0000</p>
          <p className="text-[var(--lease-muted)]">Telefone: (00) 0000-0000</p>
          <p className="text-[var(--lease-muted)]">Endereço: Rua Exemplo, 123 — Sua Cidade</p>
          <div className="mt-4 aspect-video w-full rounded-2xl bg-[#eef2f5]" />
        </div>
        <form className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[var(--color-border)]">
          <div className="grid gap-3 md:grid-cols-2">
            <input className="rounded-lg border border-[var(--color-border)] px-4 py-3" placeholder="Seu nome" />
            <input className="rounded-lg border border-[var(--color-border)] px-4 py-3" placeholder="E-mail" />
            <input className="rounded-lg border border-[var(--color-border)] px-4 py-3" placeholder="Telefone" />
            <input className="rounded-lg border border-[var(--color-border)] px-4 py-3" placeholder="Assunto" />
            <textarea className="md:col-span-2 h-32 rounded-lg border border-[var(--color-border)] px-4 py-3" placeholder="Mensagem" />
            <div className="md:col-span-2 flex items-center gap-2 text-sm text-[var(--lease-muted)]">
              <input type="checkbox" /> Concordo em ser contatado.
            </div>
            <button className="md:col-span-2 mt-2 inline-flex items-center justify-center rounded-xl bg-[var(--lease-primary)] px-5 py-3 font-medium text-white">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}




