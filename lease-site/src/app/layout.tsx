import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import RevealObserver from "@/components/RevealObserver";

const titleFont = DM_Sans({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aluguel em Goiânia — LEASE IMÓVEIS",
    template: "%s • LEASE IMÓVEIS",
  },
  description:
    "Aluguel de imóveis em Goiânia com atendimento próximo. Setor Bueno, Marista, Oeste, Jardim Goiás e Alto da Glória.",
  metadataBase: new URL("https://lease-imoveis.example"),
  openGraph: {
    title: "Aluguel em Goiânia — LEASE IMÓVEIS",
    description:
      "Imóveis verificados e locação transparente em Goiânia.",
    type: "website",
    locale: "pt_BR",
    siteName: "LEASE IMÓVEIS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aluguel em Goiânia — LEASE IMÓVEIS",
    description: "Imóveis verificados e locação transparente em Goiânia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
        <GoogleAnalytics />
        <RevealObserver />
        <Header />
        {children}
        <Footer />
        <CookieBanner />
        {/* JSON-LD Organization/LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'LEASE IMÓVEIS',
              url: 'https://lease-imoveis.example',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rua 9, Setor Marista',
                addressLocality: 'Goiânia',
                addressRegion: 'GO',
                addressCountry: 'BR',
              },
              areaServed: 'Goiânia',
              sameAs: ['https://wa.me/5562999999999'],
            }),
          }}
        />
      </body>
    </html>
  );
}
