import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
    default: "LEASE IMÓVEIS — Locação sem dor de cabeça",
    template: "%s • LEASE IMÓVEIS",
  },
  description:
    "Imóveis verificados, processo transparente e atendimento próximo. Locação residencial e comercial.",
  metadataBase: new URL("https://www.lease-imoveis.example"),
  openGraph: {
    title: "LEASE IMÓVEIS — Locação sem dor de cabeça",
    description:
      "Imóveis verificados, processo transparente e atendimento próximo. Locação residencial e comercial.",
    type: "website",
    locale: "pt_BR",
    siteName: "LEASE IMÓVEIS",
  },
  twitter: {
    card: "summary_large_image",
    title: "LEASE IMÓVEIS",
    description:
      "Imóveis verificados, processo transparente e atendimento próximo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
