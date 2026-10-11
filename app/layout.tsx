import { siteUrl } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import Header from "@/components/header";
import Link from "next/link";
import { profile } from "@/lib/content";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anderson Ribeiro | Redes, Infraestrutura & Desenvolvimento",
    template: "%s | Anderson Ribeiro",
  },
  description:
    "Portfólio profissional de Anderson Ribeiro: mais de 12 anos em redes e infraestrutura, projetos web e Android como RotaObra e NetVision PRO. Disponível para trabalho remoto/home office.",
  keywords: [
    "Anderson Ribeiro",
    "Analista de Redes",
    "Infraestrutura",
    "MikroTik",
    "FTTH",
    "IPv6",
    "Android",
    "Kotlin",
    "NetVision",
    "RotaObra",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Anderson Ribeiro | Redes, Infraestrutura & Desenvolvimento",
    description: "Redes, infraestrutura e desenvolvimento. Disponível para trabalho remoto.",
    siteName: "Portfólio — Anderson Ribeiro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anderson Ribeiro | Redes, Infraestrutura & Desenvolvimento",
    description: "Redes, infraestrutura e desenvolvimento. Disponível para trabalho remoto.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0e0f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Analista de Redes e Infraestrutura",
    email: `mailto:${profile.email}`,
    url: siteUrl,
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: ["MikroTik", "FTTH", "IPv4", "IPv6", "Android", "Kotlin", "Supabase", "Desenvolvimento Web"],
  };

  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <Header />
        {children}
        <footer className="footer shell">
          <div className="footer-brand">
            <span className="footer-line" />
            <div>
              <strong>Anderson Ribeiro</strong>
              <span>Redes • Infraestrutura • Desenvolvimento</span>
            </div>
          </div>

          <div className="footer-links" aria-label="Links profissionais">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={`mailto:${profile.email}`}>E-mail ↗</a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
          </div>

          <div className="footer-status">
            <span className="footer-status-dot" />
            <div>
              <strong>Disponível para oportunidades remotas</strong>
              <span>Home office • Tecnologia • Infraestrutura</span>
            </div>
          </div>

          <Link className="footer-top" href="/#inicio">Voltar ao topo ↑</Link>
        </footer>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
