"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GlobalSearch from "@/components/GlobalSearch";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding: '0.75rem 1rem'}}>
        <Link href="/" aria-label="Ir para a home" className="brand">
          <span className="mark" aria-hidden />
          <span>LEASE IMÓVEIS</span>
        </Link>

        <nav className="nav hidden md:flex items-center gap-6 text-sm font-medium">
          <GlobalSearch />
          <Link
            href="/imoveis"
            className={`underline-link ${pathname === "/imoveis" ? "active" : ""}`}
          >
            Imóveis
          </Link>
          <Link
            href="/proprietario"
            className={`underline-link ${pathname === "/proprietario" ? "active" : ""}`}
          >
            Para proprietário
          </Link>
          <Link
            href="/sobre"
            className={`underline-link ${pathname === "/sobre" ? "active" : ""}`}
          >
            Sobre
          </Link>
          <Link
            href="/contato"
            className={`underline-link ${pathname === "/contato" ? "active" : ""}`}
          >
            Contato
          </Link>
          <a
            href="https://wa.me/5562999999999?text=Quero%20alugar%20um%20im%C3%B3vel%20com%20a%20LEASE&utm_source=site&utm_medium=header&utm_campaign=cta_whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            aria-label="Falar no WhatsApp"
          >
            WhatsApp
          </a>
          {/* Toggle dark sem JS usando :has */}
          <label htmlFor="toggle-dark" className="sr-only">Alternar tema</label>
          <input id="toggle-dark" type="checkbox" aria-label="Alternar tema escuro" style={{display:'none'}} />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}


