"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GlobalSearch from "@/components/GlobalSearch";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border,#e5e7eb)] bg-[var(--lease-bg)]/90 backdrop-blur supports-[backdrop-filter]:bg-[var(--lease-bg)]/60 dark:bg-black/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" aria-label="Ir para a home">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo.png"
              alt="LEASE IMÓVEIS"
              width={140}
              height={40}
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <GlobalSearch />
          <Link
            href="/imoveis"
            className={`transition-colors hover:text-black/80 dark:hover:text-white/80 ${
              pathname === "/imoveis" ? "text-black dark:text-white" : "text-black/60 dark:text-white/60"
            }`}
          >
            Imóveis
          </Link>
          <Link
            href="/proprietario"
            className={`transition-colors hover:text-black/80 dark:hover:text-white/80 ${
              pathname === "/proprietario" ? "text-black dark:text-white" : "text-black/60 dark:text-white/60"
            }`}
          >
            Para proprietário
          </Link>
          <Link
            href="/sobre"
            className={`transition-colors hover:text-black/80 dark:hover:text-white/80 ${
              pathname === "/sobre" ? "text-black dark:text-white" : "text-black/60 dark:text-white/60"
            }`}
          >
            Sobre
          </Link>
          <Link
            href="/contato"
            className={`transition-colors hover:text-black/80 dark:hover:text-white/80 ${
              pathname === "/contato" ? "text-black dark:text-white" : "text-black/60 dark:text-white/60"
            }`}
          >
            Contato
          </Link>
          <a
            href="https://wa.me/5500000000000?text=Quero%20alugar%20um%20im%C3%B3vel%20com%20a%20LEASE&utm_source=site&utm_medium=header&utm_campaign=cta_whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-[var(--lease-primary)] px-4 py-2 text-white shadow-sm transition hover:brightness-110"
          >
            WhatsApp
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}


