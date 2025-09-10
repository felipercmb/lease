import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-[60vh] place-items-center px-4 py-16 text-center">
      <div>
        <h1 className="mb-2 text-3xl font-semibold text-[var(--lease-primary)]">Página não encontrada</h1>
        <p className="mb-6 text-[var(--lease-muted)]">Use a busca para encontrar um imóvel ou volte para a página inicial.</p>
        <Link href="/" className="rounded-xl bg-[var(--lease-primary)] px-4 py-2 text-white">Voltar para a Home</Link>
      </div>
    </main>
  );
}




