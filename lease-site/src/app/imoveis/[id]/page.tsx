import type { Metadata } from "next";

type Params = { params: { id: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  return {
    title: `Imóvel ${params.id}`,
  };
}

export default function PropertyPage({ params }: Params) {
  const id = params.id;
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="grid gap-8 md:grid-cols-3">
        <section className="md:col-span-2 space-y-4">
          <div className="aspect-[16/9] w-full rounded-2xl bg-[#eef2f5]" />
          <div className="grid grid-cols-2 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[16/9] w-full rounded-xl bg-[#f6f8fa]" />
            ))}
          </div>
        </section>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[var(--color-border)]">
            <h1 className="mb-2 text-2xl font-semibold">Título do imóvel #{id}</h1>
            <p className="text-[var(--lease-muted)]">Bairro • 75 m² • 2 dorm • 1 vaga</p>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-2xl font-semibold">R$ 3.200</span>
              <span className="text-sm text-[var(--lease-muted)]">+ cond. R$ 680 • IPTU R$ 120</span>
            </div>
            <div className="mt-4 grid gap-2">
              <a className="inline-flex items-center justify-center rounded-xl bg-[var(--lease-primary)] px-4 py-3 text-white" href="#">WhatsApp</a>
              <a className="inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] px-4 py-3" href="#">Ligar agora</a>
              <a className="inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] px-4 py-3" href="#">Agendar visita</a>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[var(--color-border)]">
            <h2 className="mb-3 font-semibold">Como alugar este imóvel</h2>
            <ol className="list-inside list-decimal space-y-1 text-sm text-[var(--lease-muted)]">
              <li>Envie seus dados e comprove renda</li>
              <li>Escolha a garantia locatícia</li>
              <li>Assine digitalmente o contrato</li>
              <li>Receba as chaves</li>
            </ol>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[var(--color-border)]">
            <h2 className="mb-2 font-semibold">Destaques</h2>
            <div className="flex flex-wrap gap-2">
              {["Pet", "Sol da manhã", "Próx. metrô"].map((t) => (
                <span key={t} className="rounded-full border border-[var(--color-border)] px-2 py-1 text-xs text-[var(--lease-muted)]">{t}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <section className="mx-auto mt-10 max-w-7xl">
        <h3 className="mb-4 text-lg font-semibold">Você pode gostar</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <article key={i} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[var(--color-border)]">
              <div className="aspect-[16/9] w-full bg-[#eef2f5]" />
              <div className="space-y-1 p-4">
                <h4 className="font-medium">Apartamento bem iluminado</h4>
                <p className="text-sm text-[var(--lease-muted)]">Centro • 68 m² • 2 dorm</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}




