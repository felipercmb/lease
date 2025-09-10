import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-16 md:px-6 md:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight text-[var(--lease-primary)] md:text-5xl">
              Aluguel sem dor de cabeça na Grande sua cidade.
            </h1>
            <p className="mb-8 max-w-xl text-lg text-[var(--lease-muted)]">
              Imóveis verificados, processo transparente e atendimento próximo.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/imoveis"
                className="inline-flex items-center rounded-xl bg-[var(--lease-primary)] px-5 py-3 text-white shadow-sm transition hover:brightness-110"
              >
                Ver imóveis para alugar
              </Link>
              <a
                href="https://wa.me/5500000000000?text=Quero%20alugar%20um%20im%C3%B3vel%20com%20a%20LEASE&utm_source=site&utm_medium=hero&utm_campaign=cta_whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-[var(--lease-primary)] px-5 py-3 text-[var(--lease-primary)] transition hover:bg-[var(--lease-primary)]/5"
              >
                Falar com um especialista
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[var(--color-border)]">
            <form className="grid gap-3 md:grid-cols-2">
              <input className="rounded-lg border border-[var(--color-border)] px-4 py-3" placeholder="Bairro" />
              <select className="rounded-lg border border-[var(--color-border)] px-4 py-3">
                <option>Tipo</option>
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Sala/Loja</option>
              </select>
              <select className="rounded-lg border border-[var(--color-border)] px-4 py-3">
                <option>Quartos</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
              </select>
              <select className="rounded-lg border border-[var(--color-border)] px-4 py-3">
                <option>Faixa de preço</option>
                <option>Até R$ 2.000</option>
                <option>R$ 2.000 a R$ 4.000</option>
                <option>R$ 4.000+</option>
              </select>
              <select className="rounded-lg border border-[var(--color-border)] px-4 py-3">
                <option>Vagas</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>
              <label className="flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-4 py-3">
                <input type="checkbox" /> Pet-friendly
              </label>
              <button className="col-span-full mt-2 inline-flex items-center justify-center rounded-xl bg-[var(--lease-primary)] px-5 py-3 font-medium text-white">
                Buscar imóveis
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
