export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--color-border)] bg-white/60">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-4 md:px-6">
        <div className="col-span-2">
          <p className="font-semibold">LEASE IMÓVEIS</p>
          <p className="mt-2 text-sm text-[var(--lease-muted)]">Locação residencial e comercial com transparência.</p>
        </div>
        <nav>
          <ul className="space-y-2 text-sm">
            <li><a href="/imoveis" className="hover:underline">Imóveis</a></li>
            <li><a href="/proprietario" className="hover:underline">Para proprietário</a></li>
            <li><a href="/sobre" className="hover:underline">Sobre</a></li>
            <li><a href="/contato" className="hover:underline">Contato</a></li>
          </ul>
        </nav>
        <div className="text-sm text-[var(--lease-muted)]">
          <p>CRECI 000000</p>
          <p>Política de privacidade • Termos</p>
        </div>
      </div>
    </footer>
  );
}




