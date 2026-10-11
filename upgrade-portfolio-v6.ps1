$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "=============================================" -ForegroundColor Green
Write-Host " ANDERSON RIBEIRO - PORTFOLIO PREMIUM V6" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green
Write-Host ""

$root = Get-Location

if (-not (Test-Path "$root\package.json")) {
    Write-Host "ERRO: rode este script dentro da pasta portfolio-anderson." -ForegroundColor Red
    exit 1
}

$pagePath    = "$root\app\page.tsx"
$cssPath     = "$root\app\globals.css"
$headerPath  = "$root\components\header.tsx"
$contentPath = "$root\lib\content.ts"

$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$backup = "$root\backup-v5-$timestamp"

New-Item -ItemType Directory -Path $backup | Out-Null

Copy-Item $pagePath "$backup\page.tsx"
Copy-Item $cssPath "$backup\globals.css"
Copy-Item $headerPath "$backup\header.tsx"
Copy-Item $contentPath "$backup\content.ts"

Write-Host "Backup criado: $backup" -ForegroundColor DarkGray

# =========================================================
# GITHUB / LINKS
# =========================================================

$content = Get-Content $contentPath -Raw

$content = $content.Replace(
    "https://github.com/cupidopet8-dev",
    "https://github.com/andersongeraldoribeiro-create"
)

$content = $content.Replace(
    'url: "https://rotaobra.vercel.app",',
    'url: "https://rotaobra.vercel.app/",'
)

$content = $content.Replace(
    'url: "https://academiafacil.vercel.app",',
    'url: "https://academiafacil.vercel.app/",'
)

$content = $content.Replace(
    'url: "https://festadorosarioestrela.com.br",',
    'url: "https://www.festadorosarioestrela.com.br/",'
)

Set-Content $contentPath $content -Encoding UTF8

# =========================================================
# HEADER
# =========================================================

$header = @'
"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Projetos", "projetos"],
  ["Sobre", "sobre"],
  ["Experiência", "experiencia"],
  ["Tecnologias", "stack"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header v6-header">
      <div className="shell nav-shell v6-nav-shell">
        <Link
          href="/#inicio"
          className="brand v6-brand"
          aria-label="Anderson Ribeiro — Portfólio"
        >
          <span className="v6-brand-symbol">/</span>

          <span className="brand-identity">
            <strong>Anderson Ribeiro</strong>
            <small>Portfólio profissional</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Fechar" : "Menu"}</span>
          <i>{open ? "×" : "+"}</i>
        </button>

        <nav
          id="main-nav"
          className={open ? "main-nav open" : "main-nav"}
          aria-label="Navegação principal"
        >
          {links.map(([label, id]) => (
            <Link
              href={`/#${id}`}
              key={id}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link href="/#contato" onClick={() => setOpen(false)}>
            Contato
          </Link>

          <a
            className="nav-cta"
            href="/Anderson-Ribeiro-Curriculo.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Currículo <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
'@

Set-Content $headerPath $header -Encoding UTF8

# =========================================================
# HOME V6
# =========================================================

$page = @'
import Image from "next/image";
import Link from "next/link";
import Visual from "@/components/visual";
import {
  education,
  experience,
  profile,
  projects,
  techGroups,
} from "@/lib/content";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const rotaobra = projects.find((project) => project.slug === "rotaobra")!;
  const netvision = projects.find((project) => project.slug === "netvision")!;

  const otherProjects = projects.filter(
    (project) => !["rotaobra", "netvision"].includes(project.slug)
  );

  return (
    <main id="conteudo" className="v6-home">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section id="inicio" className="v6-hero">
        <div className="v6-grid-bg" />
        <div className="v6-glow v6-glow-a" />
        <div className="v6-glow v6-glow-b" />

        <div className="shell v6-hero-layout">
          <div className="v6-hero-copy">

            <div className="v6-eyebrow">
              <span className="v6-live-dot" />
              Portfólio profissional • 2026
            </div>

            <h1>
              <span>Anderson</span>
              <strong>Ribeiro.</strong>
            </h1>

            <h2>
              Redes, infraestrutura
              <br />
              <span>& software.</span>
            </h2>

            <p className="v6-hero-description">
              Mais de 12 anos conectando experiência de campo,
              infraestrutura e desenvolvimento para transformar
              problemas reais em soluções digitais.
            </p>

            <div className="v6-hero-actions">
              <a
                href="#projetos"
                className="v6-button v6-button-primary"
              >
                Explorar projetos
                <span>↘</span>
              </a>

              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="v6-button v6-button-secondary"
              >
                Ver currículo
                <span>↗</span>
              </a>
            </div>

            <div className="v6-social-row">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href={`mailto:${profile.email}`}>
                E-mail ↗
              </a>
            </div>
          </div>

          <div className="v6-portrait-area">

            <div className="v6-tech-label v6-tech-label-top">
              <span>PROFILE / 01</span>
              <strong>ANDERSON RIBEIRO</strong>
            </div>

            <div className="v6-portrait">
              <Image
                src="/anderson-ribeiro-original.png"
                alt="Foto profissional de Anderson Ribeiro"
                fill
                priority
                sizes="(max-width: 850px) 80vw, 420px"
                className="v6-portrait-image"
              />

              <div className="v6-portrait-gradient" />

              <div className="v6-portrait-caption">
                <span>ESTRELA DO INDAIÁ — MG</span>
                <strong>Disponível para trabalho remoto</strong>
              </div>
            </div>

            <div className="v6-orbit v6-orbit-a" />
            <div className="v6-orbit v6-orbit-b" />

            <div className="v6-floating-panel v6-panel-network">
              <span>NETWORK</span>
              <strong>IPv4 / IPv6</strong>
              <small>MikroTik • FTTH • Wi-Fi</small>
            </div>

            <div className="v6-floating-panel v6-panel-build">
              <span>BUILD</span>
              <strong>Web + Android</strong>
              <small>Kotlin • Supabase • Vercel</small>
            </div>
          </div>
        </div>

        <div className="shell v6-metrics">
          <div>
            <strong>12+</strong>
            <span>
              anos de experiência
              <br />
              em provedores
            </span>
          </div>

          <div>
            <strong>02</strong>
            <span>
              graduações
              <br />
              concluídas
            </span>
          </div>

          <div>
            <strong>05</strong>
            <span>
              projetos autorais
              <br />
              em destaque
            </span>
          </div>

          <div className="v6-remote-metric">
            <i />
            <span>
              disponível para
              <br />
              oportunidades remotas
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS INTRO
      ====================================================== */}

      <section
        id="projetos"
        className="v6-section shell v6-projects"
      >
        <div className="v6-section-intro">

          <div>
            <p className="v6-kicker">
              01 — Projetos selecionados
            </p>

            <h2>
              Problemas reais.
              <br />
              <span>Soluções reais.</span>
            </h2>
          </div>

          <p>
            Produtos criados a partir de necessidades de operação,
            diagnóstico, gestão e serviços técnicos.
          </p>
        </div>

        {/* ===================================================
            ROTAOBRA
        ==================================================== */}

        <article className="v6-case v6-case-rota">

          <div className="v6-case-heading">
            <div>
              <span className="v6-case-number">
                01 / PROJETO PRINCIPAL
              </span>

              <div className="v6-rota-logo">
                Rota<span>Obra</span>
              </div>
            </div>

            <a
              href={rotaobra.url}
              target="_blank"
              rel="noreferrer"
              className="v6-case-site-link"
            >
              rotaobra.vercel.app ↗
            </a>
          </div>

          <div className="v6-rota-layout">

            <div className="v6-rota-visual">
              <div className="v6-rota-main-image">
                <Image
                  src={rotaobra.cover}
                  alt="Dashboard principal do RotaObra"
                  fill
                  sizes="(max-width: 900px) 100vw, 62vw"
                  className="v6-project-image"
                />
              </div>

              <div className="v6-rota-thumbs">

                {rotaobra.images.slice(1, 3).map((image, index) => (
                  <div
                    className="v6-rota-thumb"
                    key={image}
                  >
                    <Image
                      src={image}
                      alt={`Interface RotaObra ${index + 2}`}
                      fill
                      sizes="300px"
                      className="v6-project-image"
                    />
                  </div>
                ))}

              </div>
            </div>

            <div className="v6-case-content">

              <p className="v6-case-label">
                Gestão • Logística • Operação
              </p>

              <h3>
                Da operação no escritório
                <span> ao motorista em campo.</span>
              </h3>

              <p className="v6-case-description">
                {rotaobra.description}
              </p>

              <div className="v6-case-features">
                {rotaobra.features.slice(0, 5).map((feature, index) => (
                  <div key={feature}>
                    <span>
                      0{index + 1}
                    </span>

                    <p>{feature}</p>
                  </div>
                ))}
              </div>

              <div className="v6-case-buttons">
                <Link
                  href="/projetos/rotaobra"
                  className="v6-button v6-button-light"
                >
                  Explorar case
                  <span>→</span>
                </Link>

                <a
                  href={rotaobra.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir sistema ↗
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* ===================================================
            NETVISION
        ==================================================== */}

        <article className="v6-case v6-case-netvision">

          <div className="v6-net-copy">

            <span className="v6-case-number">
              02 / ANDROID + REDES
            </span>

            <div className="v6-net-logo">
              NetVision
              <span>PRO</span>
            </div>

            <h3>
              Diagnóstico técnico
              <br />
              <span>transformado em produto.</span>
            </h3>

            <p>
              {netvision.description}
            </p>

            <div className="v6-net-tags">
              {netvision.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <Link
              href="/projetos/netvision"
              className="v6-button v6-button-light"
            >
              Conhecer NetVision
              <span>→</span>
            </Link>
          </div>

          <div className="v6-phone-stage">

            <div className="v6-phone v6-phone-left">
              <Image
                src={netvision.images[2]}
                alt="Tela de visita técnica do NetVision"
                fill
                sizes="280px"
                className="v6-phone-image"
              />
            </div>

            <div className="v6-phone v6-phone-main">
              <Image
                src={netvision.images[1]}
                alt="NetVision Score"
                fill
                sizes="320px"
                className="v6-phone-image"
              />
            </div>

            <div className="v6-phone v6-phone-right">
              <Image
                src={netvision.images[3]}
                alt="Ferramentas NetVision PRO"
                fill
                sizes="280px"
                className="v6-phone-image"
              />
            </div>

          </div>
        </article>

        {/* ===================================================
            OTHER PROJECTS
        ==================================================== */}

        <div className="v6-small-projects">

          {otherProjects.map((project, index) => (
            <article
              key={project.slug}
              className={`v6-small-project accent-${project.accent}`}
            >

              <div className="v6-small-number">
                0{index + 3}
              </div>

              <div className="v6-small-project-visual">
                <Visual project={project} compact />
              </div>

              <div className="v6-small-project-copy">

                <p>
                  {project.category}
                </p>

                <h3>
                  {project.shortName}
                </h3>

                <span>
                  {project.summary}
                </span>

                <div className="v6-small-actions">

                  <Link href={`/projetos/${project.slug}`}>
                    Case →
                  </Link>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Site ↗
                    </a>
                  )}

                </div>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* =====================================================
          REMOTE / DIFFERENTIALS
      ====================================================== */}

      <section className="v6-section v6-remote-section">
        <div className="shell">

          <div className="v6-remote-top">

            <div>
              <p className="v6-kicker">
                02 — Trabalho remoto
              </p>

              <h2>
                Experiência técnica.
                <br />
                <span>Autonomia para entregar.</span>
              </h2>
            </div>

            <p>
              Busco oportunidades em home office onde experiência
              prática, organização e capacidade de aprender possam
              gerar resultado real para o time.
            </p>
          </div>

          <div className="v6-values-grid">

            <article>
              <span>01</span>
              <h3>Visão prática</h3>
              <p>
                Mais de uma década trabalhando diretamente com
                infraestrutura e conectividade.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Autonomia</h3>
              <p>
                Capacidade de investigar problemas, documentar,
                testar e buscar soluções.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Visão ponta a ponta</h3>
              <p>
                Infraestrutura, redes, suporte, web e Android
                dentro da mesma experiência profissional.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Aprendizado contínuo</h3>
              <p>
                Projetos autorais usados para transformar estudo
                técnico em experiência prática.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section
        id="sobre"
        className="v6-section shell v6-about"
      >

        <div className="v6-about-heading">

          <p className="v6-kicker">
            03 — Perfil profissional
          </p>

          <h2>
            Da fibra óptica
            <br />
            <span>à interface.</span>
          </h2>

          <div className="v6-location">
            {profile.location}
          </div>
        </div>

        <div className="v6-about-content">

          <p className="v6-about-lead">
            Profissional de Tecnologia da Informação com mais de
            12 anos de experiência contínua em provedores de internet.
          </p>

          <p>
            Minha atuação reúne infraestrutura, redes, suporte,
            monitoramento e desenvolvimento de sistemas.
          </p>

          <p>
            Trabalho com ambientes FTTH, MikroTik, PPPoE, VPN,
            IPv4/IPv6, Windows Server e equipamentos de diferentes
            fabricantes.
          </p>

          <p>
            O desenvolvimento nasceu como extensão natural dessa
            experiência: construir ferramentas para diagnóstico,
            gestão e acompanhamento de serviços técnicos.
          </p>

          <div className="v6-about-signature">
            <strong>Anderson Ribeiro</strong>
            <span>
              Redes • Infraestrutura • Desenvolvimento
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ====================================================== */}

      <section
        id="experiencia"
        className="v6-section v6-experience-section"
      >
        <div className="shell">

          <div className="v6-section-intro">

            <div>
              <p className="v6-kicker">
                04 — Experiência
              </p>

              <h2>
                Mais de uma década
                <br />
                <span>em operação real.</span>
              </h2>
            </div>

            <p>
              Uma trajetória contínua em infraestrutura,
              suporte e redes em ambiente de provedor.
            </p>

          </div>

          <div className="v6-experience-layout">

            <div className="v6-timeline">

              {experience.map((item, index) => (
                <article
                  key={`${item.company}-${item.period}`}
                  className="v6-timeline-item"
                >

                  <div className="v6-timeline-marker">
                    <span>
                      0{index + 1}
                    </span>
                  </div>

                  <div className="v6-timeline-period">
                    {item.period}
                  </div>

                  <div className="v6-timeline-content">

                    <h3>
                      {item.role}
                    </h3>

                    <strong>
                      {item.company}
                    </strong>

                    <p>
                      {item.description}
                    </p>

                  </div>

                </article>
              ))}

            </div>

            <aside className="v6-education">

              <p className="v6-kicker">
                Formação
              </p>

              {education.map((item) => (
                <div
                  className="v6-degree"
                  key={item.course}
                >
                  <span>✓</span>

                  <div>
                    <h3>{item.course}</h3>
                    <p>
                      {item.institution}
                      <br />
                      {item.period}
                    </p>
                  </div>
                </div>
              ))}

              <div className="v6-education-stat">
                <strong>02</strong>
                <span>
                  graduações concluídas
                  <br />
                  em 2025
                </span>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* =====================================================
          STACK
      ====================================================== */}

      <section
        id="stack"
        className="v6-section shell v6-stack"
      >

        <div className="v6-section-intro">

          <div>
            <p className="v6-kicker">
              05 — Tecnologias
            </p>

            <h2>
              Ferramentas para
              <br />
              <span>diagnosticar e construir.</span>
            </h2>
          </div>

          <p>
            Tecnologias que fazem parte da minha atuação
            profissional e dos projetos desenvolvidos.
          </p>

        </div>

        <div className="v6-stack-grid">

          {techGroups.map((group) => (
            <article
              className="v6-stack-card"
              key={group.number}
            >

              <span className="v6-stack-number">
                {group.number}
              </span>

              <h3>
                {group.title}
              </h3>

              <div className="v6-stack-tags">

                {group.items.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}

              </div>

            </article>
          ))}

        </div>
      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section
        id="contato"
        className="v6-section shell v6-contact"
      >

        <div className="v6-contact-grid" />

        <div className="v6-contact-copy">

          <p className="v6-kicker">
            06 — Vamos conversar
          </p>

          <h2>
            Tem um problema
            <br />
            <span>que tecnologia pode resolver?</span>
          </h2>

          <p>
            Estou disponível para oportunidades remotas em
            redes, infraestrutura, suporte, desenvolvimento
            e projetos técnicos.
          </p>

        </div>

        <div className="v6-contact-links">

          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="v6-contact-primary"
          >
            <span>WhatsApp</span>
            <strong>Vamos conversar</strong>
            <b>↗</b>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <span>↗</span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <span>↗</span>
          </a>

          <a href={`mailto:${profile.email}`}>
            E-mail
            <span>↗</span>
          </a>

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            Currículo
            <span>↓</span>
          </a>

        </div>
      </section>

    </main>
  );
}
'@

Set-Content $pagePath $page -Encoding UTF8

# =========================================================
# CSS PREMIUM V6
# Mantém CSS das páginas internas e adiciona V6 no final.
# =========================================================

$css = Get-Content $cssPath -Raw

$marker = "/* === ANDERSON RIBEIRO PREMIUM V6 === */"

$markerIndex = $css.IndexOf($marker)

if ($markerIndex -ge 0) {
    $css = $css.Substring(0, $markerIndex)
}

$v6css = @'

/* === ANDERSON RIBEIRO PREMIUM V6 === */

:root {
  --v6-bg: #080d0d;
  --v6-bg-2: #0b1211;
  --v6-panel: #101817;
  --v6-panel-2: #131d1b;
  --v6-text: #f4f7f5;
  --v6-muted: #a0aeaa;
  --v6-dim: #74817d;
  --v6-green: #87f5ad;
  --v6-green-strong: #56ef91;
  --v6-green-dark: #193326;
  --v6-orange: #ff771f;
  --v6-violet: #8d7bff;
  --v6-border: rgba(189, 223, 205, 0.14);
  --v6-border-strong: rgba(189, 223, 205, 0.25);
}

body {
  background:
    radial-gradient(circle at 70% -10%, rgba(80, 180, 124, .08), transparent 28%),
    #080d0d;
}

/* HEADER */

.v6-header {
  background: rgba(8, 13, 13, .78);
  border-color: rgba(180, 220, 200, .11);
}

.v6-nav-shell {
  height: 86px;
}

.v6-brand {
  gap: 13px;
}

.v6-brand-symbol {
  display: grid;
  place-items: center;
  width: 39px;
  height: 39px;
  color: #07100b;
  background: var(--v6-green);
  border-radius: 11px;
  font-weight: 1000;
  font-size: 22px;
}

.v6-brand .brand-identity {
  display: grid;
}

.v6-brand .brand-identity strong {
  color: #f2f7f4;
  font-size: 15px;
  letter-spacing: -.25px;
}

.v6-brand .brand-identity small {
  margin-top: 4px;
  color: #81908a;
  font-size: 11px;
  letter-spacing: .7px;
  text-transform: uppercase;
}

.v6-header .main-nav {
  gap: 32px;
}

.v6-header .main-nav > a:not(.nav-cta) {
  font-size: 14px;
  color: #adbbb6;
}

.v6-header .main-nav > a:not(.nav-cta):hover {
  color: var(--v6-green);
}

.v6-header .nav-cta {
  min-height: 43px;
  padding-inline: 17px;
  font-size: 13px;
  border-color: rgba(135,245,173,.22);
}

/* GENERAL */

.v6-home {
  overflow: clip;
}

.v6-section {
  padding-top: 150px;
}

.v6-kicker {
  margin: 0 0 24px;
  color: var(--v6-green);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 1.1px;
  text-transform: uppercase;
}

.v6-section-intro {
  display: grid;
  grid-template-columns: 1fr 370px;
  gap: 70px;
  align-items: end;
  margin-bottom: 62px;
}

.v6-section-intro h2,
.v6-remote-top h2,
.v6-about-heading h2,
.v6-contact-copy h2 {
  margin: 0;
  color: var(--v6-text);
  font-size: clamp(48px, 5vw, 78px);
  line-height: .98;
  letter-spacing: -4px;
}

.v6-section-intro h2 span,
.v6-remote-top h2 span,
.v6-about-heading h2 span,
.v6-contact-copy h2 span {
  color: var(--v6-green);
}

.v6-section-intro > p,
.v6-remote-top > p {
  margin: 0;
  color: var(--v6-muted);
  font-size: 16px;
  line-height: 1.75;
}

/* HERO */

.v6-hero {
  position: relative;
  min-height: calc(100svh - 86px);
  overflow: hidden;
  border-bottom: 1px solid var(--v6-border);
}

.v6-grid-bg {
  position: absolute;
  inset: 0;
  opacity: .26;
  background-image:
    linear-gradient(rgba(140, 190, 163, .06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(140, 190, 163, .06) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(to bottom, #000 0%, transparent 88%);
}

.v6-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
}

.v6-glow-a {
  width: 400px;
  height: 400px;
  right: 8%;
  top: 20%;
  background: rgba(80, 240, 145, .09);
}

.v6-glow-b {
  width: 360px;
  height: 360px;
  right: 33%;
  bottom: 5%;
  background: rgba(69, 131, 110, .08);
}

.v6-hero-layout {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.12fr .88fr;
  align-items: center;
  min-height: 710px;
  gap: 80px;
  padding-block: 68px;
}

.v6-eyebrow {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 31px;
  color: #a1b2ab;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.1px;
}

.v6-live-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--v6-green);
  box-shadow: 0 0 18px rgba(135,245,173,.65);
}

.v6-hero-copy h1 {
  margin: 0;
  display: grid;
  font-size: clamp(70px, 7.2vw, 112px);
  line-height: .82;
  letter-spacing: -7px;
  text-transform: uppercase;
}

.v6-hero-copy h1 span {
  color: #f3f7f5;
  font-weight: 800;
}

.v6-hero-copy h1 strong {
  color: var(--v6-green);
  font-weight: 900;
}

.v6-hero-copy h2 {
  margin: 37px 0 0;
  font-size: clamp(25px, 2.5vw, 39px);
  line-height: 1.1;
  letter-spacing: -1.8px;
  font-weight: 660;
}

.v6-hero-copy h2 span {
  color: #7e8e88;
}

.v6-hero-description {
  max-width: 690px;
  margin: 27px 0 0;
  color: #a8b6b1;
  font-size: 17px;
  line-height: 1.78;
}

.v6-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.v6-button {
  min-height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  padding: 0 20px;
  border: 1px solid var(--v6-border-strong);
  border-radius: 10px;
  font-size: 14px;
  font-weight: 800;
  transition: .22s ease;
}

.v6-button:hover {
  transform: translateY(-2px);
}

.v6-button-primary {
  color: #051008;
  background: var(--v6-green);
  border-color: var(--v6-green);
  box-shadow: 0 16px 50px rgba(90,240,147,.14);
}

.v6-button-primary:hover {
  background: #a0fac0;
}

.v6-button-secondary {
  color: #e5ece8;
  background: rgba(255,255,255,.02);
}

.v6-button-secondary:hover {
  border-color: rgba(135,245,173,.45);
}

.v6-button-light {
  color: #06100b;
  background: #f3f6f4;
  border-color: #f3f6f4;
}

.v6-social-row {
  display: flex;
  gap: 26px;
  margin-top: 35px;
  padding-top: 25px;
  border-top: 1px solid var(--v6-border);
}

.v6-social-row a {
  color: #87948f;
  font-size: 14px;
  font-weight: 700;
}

.v6-social-row a:hover {
  color: var(--v6-green);
}

/* PORTRAIT */

.v6-portrait-area {
  position: relative;
  min-height: 590px;
  display: grid;
  place-items: center;
}

.v6-portrait {
  position: relative;
  z-index: 4;
  width: min(390px, 82%);
  aspect-ratio: .80;
  overflow: hidden;
  border: 1px solid rgba(135,245,173,.24);
  border-radius: 24px;
  background: #111816;
  box-shadow:
    0 35px 90px rgba(0,0,0,.38),
    0 0 80px rgba(91,222,139,.05);
}

.v6-portrait-image {
  object-fit: cover;
  object-position: center 25%;
}

.v6-portrait-gradient {
  position: absolute;
  inset: 45% 0 0;
  background: linear-gradient(transparent, rgba(5,10,8,.9));
}

.v6-portrait-caption {
  position: absolute;
  z-index: 3;
  left: 22px;
  right: 22px;
  bottom: 22px;
  display: grid;
  gap: 5px;
}

.v6-portrait-caption span {
  color: var(--v6-green);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.1px;
}

.v6-portrait-caption strong {
  color: white;
  font-size: 15px;
}

.v6-tech-label {
  position: absolute;
  z-index: 6;
  left: 0;
  top: 10%;
  display: grid;
  gap: 5px;
  padding: 15px 17px;
  border: 1px solid var(--v6-border);
  border-radius: 12px;
  background: rgba(10,17,15,.78);
  backdrop-filter: blur(15px);
}

.v6-tech-label span,
.v6-floating-panel span {
  color: var(--v6-green);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
}

.v6-tech-label strong {
  font-size: 14px;
}

.v6-floating-panel {
  position: absolute;
  z-index: 6;
  display: grid;
  gap: 5px;
  padding: 16px 18px;
  border: 1px solid var(--v6-border);
  border-radius: 14px;
  background: rgba(8,15,13,.79);
  backdrop-filter: blur(17px);
}

.v6-floating-panel strong {
  color: #ecf4ef;
  font-size: 15px;
}

.v6-floating-panel small {
  color: #80908a;
  font-size: 12px;
}

.v6-panel-network {
  left: -2%;
  bottom: 19%;
}

.v6-panel-build {
  right: -3%;
  bottom: 7%;
}

.v6-orbit {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(135,245,173,.13);
}

.v6-orbit-a {
  width: 480px;
  height: 480px;
}

.v6-orbit-b {
  width: 560px;
  height: 560px;
  border-style: dashed;
  opacity: .5;
}

/* METRICS */

.v6-metrics {
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  border-top: 1px solid var(--v6-border);
}

.v6-metrics > div {
  min-height: 125px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding-inline: 27px;
  border-right: 1px solid var(--v6-border);
}

.v6-metrics > div:first-child {
  padding-left: 0;
}

.v6-metrics > div:last-child {
  border-right: 0;
}

.v6-metrics strong {
  color: var(--v6-text);
  font-size: 34px;
  letter-spacing: -2px;
}

.v6-metrics span {
  color: #8d9b96;
  font-size: 13px;
  line-height: 1.55;
}

.v6-remote-metric i {
  width: 12px;
  height: 12px;
  flex: none;
  border-radius: 50%;
  background: var(--v6-green);
  box-shadow: 0 0 22px rgba(135,245,173,.72);
}

/* PROJECTS */

.v6-case {
  margin-bottom: 32px;
  overflow: hidden;
  border: 1px solid var(--v6-border);
  border-radius: 25px;
}

.v6-case-rota {
  padding: 38px;
  background:
    radial-gradient(circle at 95% 10%, rgba(255,119,31,.08), transparent 32%),
    #0e1514;
}

.v6-case-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 30px;
  margin-bottom: 35px;
}

.v6-case-number {
  color: #899892;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1.1px;
}

.v6-rota-logo {
  margin-top: 15px;
  color: #fff;
  font-size: 62px;
  font-weight: 900;
  letter-spacing: -4px;
}

.v6-rota-logo span {
  color: var(--v6-orange);
}

.v6-case-site-link {
  color: #adb9b4;
  font-size: 14px;
  font-weight: 700;
}

.v6-case-site-link:hover {
  color: white;
}

.v6-rota-layout {
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 37px;
}

.v6-rota-visual {
  min-width: 0;
}

.v6-rota-main-image {
  position: relative;
  min-height: 500px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 18px;
  background: #09100f;
}

.v6-project-image {
  object-fit: cover;
}

.v6-rota-thumbs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 12px;
}

.v6-rota-thumb {
  position: relative;
  min-height: 185px;
  overflow: hidden;
  border-radius: 13px;
  border: 1px solid rgba(255,255,255,.08);
}

.v6-case-content {
  padding: 18px 0;
}

.v6-case-label {
  margin: 0 0 21px;
  color: var(--v6-orange);
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
}

.v6-case-content h3,
.v6-net-copy h3 {
  margin: 0;
  color: white;
  font-size: clamp(34px,3.5vw,52px);
  line-height: 1.05;
  letter-spacing: -2.5px;
}

.v6-case-content h3 span,
.v6-net-copy h3 span {
  color: #85918d;
}

.v6-case-description,
.v6-net-copy > p {
  margin: 24px 0 0;
  color: #9caaa5;
  font-size: 15px;
  line-height: 1.78;
}

.v6-case-features {
  margin-top: 31px;
  border-top: 1px solid var(--v6-border);
}

.v6-case-features > div {
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 10px;
  padding: 16px 0;
  border-bottom: 1px solid var(--v6-border);
}

.v6-case-features span {
  color: var(--v6-orange);
  font-size: 12px;
  font-weight: 800;
}

.v6-case-features p {
  margin: 0;
  color: #b4c0bb;
  font-size: 14px;
  line-height: 1.5;
}

.v6-case-buttons {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 28px;
}

.v6-case-buttons > a:not(.v6-button) {
  color: #a5b2ad;
  font-size: 14px;
  font-weight: 700;
}

/* NETVISION */

.v6-case-netvision {
  min-height: 700px;
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  background:
    radial-gradient(circle at 74% 50%, rgba(99,83,255,.16), transparent 38%),
    linear-gradient(135deg,#0b1116,#10121d);
}

.v6-net-copy {
  padding: 65px 48px;
  align-self: center;
}

.v6-net-logo {
  margin: 25px 0;
  color: #fff;
  font-size: 57px;
  font-weight: 900;
  letter-spacing: -3.7px;
}

.v6-net-logo span {
  display: inline-block;
  margin-left: 8px;
  padding: 5px 9px;
  border: 1px solid #9b80ff;
  border-radius: 999px;
  color: #bdacff;
  font-size: 14px;
  vertical-align: 10px;
  letter-spacing: 0;
}

.v6-net-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 28px 0 31px;
}

.v6-net-tags span {
  padding: 8px 10px;
  border: 1px solid rgba(150,130,255,.2);
  border-radius: 999px;
  background: rgba(140,110,255,.06);
  color: #bcb6d6;
  font-size: 12px;
}

.v6-phone-stage {
  position: relative;
  min-height: 700px;
}

.v6-phone {
  position: absolute;
  overflow: hidden;
  border: 8px solid #151a20;
  border-radius: 34px;
  background: #080b10;
  box-shadow: 0 30px 70px rgba(0,0,0,.4);
}

.v6-phone-main {
  width: 300px;
  height: 610px;
  left: 50%;
  top: 50%;
  z-index: 4;
  transform: translate(-50%,-50%);
}

.v6-phone-left {
  width: 250px;
  height: 515px;
  left: 5%;
  top: 16%;
  transform: rotate(-7deg);
  opacity: .78;
}

.v6-phone-right {
  width: 250px;
  height: 515px;
  right: 5%;
  top: 18%;
  transform: rotate(7deg);
  opacity: .78;
}

.v6-phone-image {
  object-fit: cover;
  object-position: top center;
}

/* SMALL PROJECTS */

.v6-small-projects {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 17px;
}

.v6-small-project {
  overflow: hidden;
  border: 1px solid var(--v6-border);
  border-radius: 20px;
  background: #0d1413;
  transition: .25s ease;
}

.v6-small-project:hover {
  transform: translateY(-5px);
  border-color: rgba(135,245,173,.3);
}

.v6-small-number {
  padding: 17px 19px;
  color: #788681;
  font-size: 13px;
  font-weight: 800;
  border-bottom: 1px solid var(--v6-border);
}

.v6-small-project-visual {
  height: 235px;
  overflow: hidden;
  border-bottom: 1px solid var(--v6-border);
}

.v6-small-project-copy {
  padding: 24px;
}

.v6-small-project-copy > p {
  margin: 0 0 11px;
  color: var(--v6-green);
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
}

.v6-small-project-copy h3 {
  margin: 0 0 14px;
  font-size: 25px;
  letter-spacing: -1px;
}

.v6-small-project-copy > span {
  min-height: 58px;
  display: block;
  color: #95a39e;
  font-size: 14px;
  line-height: 1.6;
}

.v6-small-actions {
  display: flex;
  gap: 17px;
  margin-top: 21px;
}

.v6-small-actions a {
  color: #d6dedb;
  font-size: 13px;
  font-weight: 800;
}

/* REMOTE */

.v6-remote-section {
  margin-top: 150px;
  padding-bottom: 130px;
  border-block: 1px solid var(--v6-border);
  background:
    radial-gradient(circle at 15% 100%, rgba(103,240,151,.09), transparent 35%),
    #0b1211;
}

.v6-remote-top {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 80px;
  align-items: end;
  margin-bottom: 60px;
}

.v6-values-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  border: 1px solid var(--v6-border);
  border-radius: 20px;
  overflow: hidden;
}

.v6-values-grid article {
  min-height: 300px;
  padding: 30px 25px;
  border-right: 1px solid var(--v6-border);
}

.v6-values-grid article:last-child {
  border-right: 0;
}

.v6-values-grid article > span {
  color: var(--v6-green);
  font-size: 13px;
  font-weight: 800;
}

.v6-values-grid h3 {
  margin: 58px 0 17px;
  font-size: 23px;
  letter-spacing: -.7px;
}

.v6-values-grid p {
  margin: 0;
  color: #93a19c;
  font-size: 14px;
  line-height: 1.7;
}

/* ABOUT */

.v6-about {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 110px;
}

.v6-about-heading {
  align-self: start;
  position: sticky;
  top: 125px;
}

.v6-location {
  width: fit-content;
  margin-top: 35px;
  padding: 10px 13px;
  border: 1px solid var(--v6-border);
  border-radius: 999px;
  color: #9aa7a2;
  font-size: 13px;
  font-weight: 700;
}

.v6-about-lead {
  color: #eef4f1 !important;
  font-size: 27px !important;
  line-height: 1.5 !important;
  letter-spacing: -.6px;
}

.v6-about-content > p {
  color: #98a6a1;
  font-size: 16px;
  line-height: 1.85;
}

.v6-about-signature {
  margin-top: 45px;
  padding-top: 25px;
  display: grid;
  gap: 5px;
  border-top: 1px solid var(--v6-border);
}

.v6-about-signature strong {
  font-size: 17px;
}

.v6-about-signature span {
  color: #80908a;
  font-size: 13px;
}

/* EXPERIENCE */

.v6-experience-section {
  margin-top: 145px;
  padding-bottom: 130px;
  border-block: 1px solid var(--v6-border);
  background: #0a1110;
}

.v6-experience-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 45px;
}

.v6-timeline {
  border-top: 1px solid var(--v6-border);
}

.v6-timeline-item {
  display: grid;
  grid-template-columns: 60px 160px 1fr;
  gap: 20px;
  padding: 35px 0;
  border-bottom: 1px solid var(--v6-border);
}

.v6-timeline-marker span {
  color: var(--v6-green);
  font-size: 13px;
  font-weight: 800;
}

.v6-timeline-period {
  color: #85938e;
  font-size: 13px;
  font-weight: 700;
}

.v6-timeline-content h3 {
  margin: 0 0 7px;
  font-size: 22px;
  letter-spacing: -.8px;
}

.v6-timeline-content strong {
  display: block;
  margin-bottom: 14px;
  color: #b1bdb8;
  font-size: 14px;
}

.v6-timeline-content p {
  max-width: 690px;
  margin: 0;
  color: #93a19c;
  font-size: 14px;
  line-height: 1.75;
}

.v6-education {
  height: fit-content;
  padding: 27px;
  border: 1px solid var(--v6-border);
  border-radius: 20px;
  background: #101817;
}

.v6-degree {
  display: flex;
  gap: 14px;
  padding: 20px 0;
  border-bottom: 1px solid var(--v6-border);
}

.v6-degree > span {
  color: var(--v6-green);
}

.v6-degree h3 {
  margin: 0 0 6px;
  font-size: 16px;
}

.v6-degree p {
  margin: 0;
  color: #8b9994;
  font-size: 13px;
  line-height: 1.5;
}

.v6-education-stat {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 24px;
  padding: 17px;
  border-radius: 13px;
  background: rgba(135,245,173,.05);
}

.v6-education-stat strong {
  color: var(--v6-green);
  font-size: 31px;
}

.v6-education-stat span {
  color: #9ba8a3;
  font-size: 12px;
  line-height: 1.5;
}

/* STACK */

.v6-stack-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  overflow: hidden;
  border: 1px solid var(--v6-border);
  border-radius: 20px;
}

.v6-stack-card {
  min-height: 370px;
  padding: 29px 25px;
  border-right: 1px solid var(--v6-border);
}

.v6-stack-card:last-child {
  border-right: 0;
}

.v6-stack-number {
  color: var(--v6-green);
  font-size: 13px;
  font-weight: 800;
}

.v6-stack-card h3 {
  margin: 55px 0 28px;
  font-size: 22px;
  letter-spacing: -.7px;
}

.v6-stack-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.v6-stack-tags span {
  padding: 8px 10px;
  border: 1px solid var(--v6-border);
  border-radius: 9px;
  color: #a0ada8;
  font-size: 12px;
}

/* CONTACT */

.v6-contact {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  gap: 70px;
  overflow: hidden;
  margin-top: 150px;
  margin-bottom: 90px;
  padding: 70px;
  border: 1px solid rgba(135,245,173,.24);
  border-radius: 27px;
  background:
    radial-gradient(circle at 0% 100%, rgba(135,245,173,.13), transparent 35%),
    #0e1715;
}

.v6-contact-grid {
  position: absolute;
  inset: 0;
  opacity: .17;
  background-image:
    linear-gradient(rgba(140,190,163,.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(140,190,163,.1) 1px, transparent 1px);
  background-size: 55px 55px;
}

.v6-contact-copy,
.v6-contact-links {
  position: relative;
  z-index: 2;
}

.v6-contact-copy > p:last-child {
  max-width: 630px;
  margin: 27px 0 0;
  color: #99a6a1;
  font-size: 15px;
  line-height: 1.75;
}

.v6-contact-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px;
  align-content: center;
}

.v6-contact-links > a {
  min-height: 67px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 18px;
  border: 1px solid var(--v6-border);
  border-radius: 12px;
  background: rgba(255,255,255,.018);
  color: #b7c2be;
  font-size: 14px;
  font-weight: 800;
}

.v6-contact-links > a:hover {
  color: white;
  border-color: rgba(135,245,173,.35);
  transform: translateY(-2px);
}

.v6-contact-primary {
  grid-column: 1 / -1;
  min-height: 95px !important;
  display: grid !important;
  grid-template-columns: 1fr auto;
  background: rgba(135,245,173,.07) !important;
}

.v6-contact-primary > span {
  color: var(--v6-green);
  font-size: 12px;
  text-transform: uppercase;
}

.v6-contact-primary strong {
  font-size: 18px;
}

.v6-contact-primary b {
  grid-column: 2;
  grid-row: 1 / 3;
  color: var(--v6-green);
  font-size: 28px;
}

/* FOOTER UPSCALE */

.footer {
  min-height: 180px;
}

.footer-brand strong {
  font-size: 16px !important;
}

.footer-brand span {
  font-size: 13px !important;
}

.footer-links a,
.footer-top {
  font-size: 13px !important;
}

.footer-status strong {
  font-size: 13px !important;
}

.footer-status span {
  font-size: 12px !important;
}

/* TABLET */

@media (max-width: 1050px) {

  .v6-hero-layout {
    grid-template-columns: 1fr .78fr;
    gap: 35px;
  }

  .v6-hero-copy h1 {
    font-size: clamp(68px,8vw,94px);
  }

  .v6-rota-layout {
    grid-template-columns: 1fr;
  }

  .v6-case-content {
    max-width: 760px;
  }

  .v6-values-grid {
    grid-template-columns: 1fr 1fr;
  }

  .v6-values-grid article:nth-child(2) {
    border-right: 0;
  }

  .v6-values-grid article:nth-child(-n+2) {
    border-bottom: 1px solid var(--v6-border);
  }

  .v6-stack-grid {
    grid-template-columns: 1fr 1fr;
  }

  .v6-stack-card:nth-child(2) {
    border-right: 0;
  }

  .v6-stack-card:nth-child(-n+2) {
    border-bottom: 1px solid var(--v6-border);
  }
}

/* MOBILE / TABLET */

@media (max-width: 850px) {

  .v6-header .main-nav.open {
    display: grid;
  }

  .v6-hero-layout {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-top: 70px;
  }

  .v6-hero-copy {
    max-width: 720px;
  }

  .v6-portrait-area {
    min-height: 600px;
    width: min(100%,620px);
    margin-inline: auto;
  }

  .v6-portrait {
    width: min(370px,75%);
  }

  .v6-metrics {
    grid-template-columns: 1fr 1fr;
  }

  .v6-metrics > div:nth-child(2) {
    border-right: 0;
  }

  .v6-metrics > div:nth-child(-n+2) {
    border-bottom: 1px solid var(--v6-border);
  }

  .v6-section {
    padding-top: 105px;
  }

  .v6-section-intro,
  .v6-remote-top {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .v6-case-rota {
    padding: 25px;
  }

  .v6-rota-main-image {
    min-height: 410px;
  }

  .v6-case-netvision {
    grid-template-columns: 1fr;
  }

  .v6-phone-stage {
    min-height: 680px;
  }

  .v6-small-projects {
    grid-template-columns: 1fr;
  }

  .v6-small-project-visual {
    height: 330px;
  }

  .v6-about {
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .v6-about-heading {
    position: static;
  }

  .v6-experience-layout {
    grid-template-columns: 1fr;
  }

  .v6-education {
    max-width: 580px;
  }

  .v6-contact {
    grid-template-columns: 1fr;
    gap: 45px;
    padding: 45px;
  }
}

/* PHONE */

@media (max-width: 620px) {

  .v6-nav-shell {
    height: 74px;
  }

  .v6-brand .brand-identity strong {
    font-size: 13px;
  }

  .v6-brand .brand-identity small {
    font-size: 9px;
  }

  .v6-hero-layout {
    padding-top: 51px;
    gap: 30px;
  }

  .v6-eyebrow {
    font-size: 12px;
  }

  .v6-hero-copy h1 {
    font-size: clamp(54px,16vw,74px);
    letter-spacing: -4px;
  }

  .v6-hero-copy h2 {
    font-size: 26px;
  }

  .v6-hero-description {
    font-size: 15px;
  }

  .v6-hero-actions {
    display: grid;
  }

  .v6-button {
    width: 100%;
  }

  .v6-social-row {
    justify-content: space-between;
    gap: 10px;
  }

  .v6-social-row a {
    font-size: 12px;
  }

  .v6-portrait-area {
    min-height: 510px;
  }

  .v6-portrait {
    width: min(300px,78%);
  }

  .v6-orbit-a {
    width: 350px;
    height: 350px;
  }

  .v6-orbit-b {
    width: 430px;
    height: 430px;
  }

  .v6-tech-label {
    left: 0;
  }

  .v6-panel-network {
    left: 0;
  }

  .v6-panel-build {
    right: 0;
  }

  .v6-floating-panel {
    padding: 11px 12px;
  }

  .v6-floating-panel strong {
    font-size: 12px;
  }

  .v6-floating-panel small {
    font-size: 10px;
  }

  .v6-metrics > div {
    min-height: 105px;
    padding: 14px 9px;
    gap: 10px;
  }

  .v6-metrics strong {
    font-size: 27px;
  }

  .v6-metrics span {
    font-size: 11px;
  }

  .v6-section {
    padding-top: 80px;
  }

  .v6-section-intro h2,
  .v6-remote-top h2,
  .v6-about-heading h2,
  .v6-contact-copy h2 {
    font-size: clamp(40px,12vw,55px);
    letter-spacing: -2.7px;
  }

  .v6-kicker {
    font-size: 13px;
  }

  .v6-case-heading {
    align-items: start;
    flex-direction: column;
  }

  .v6-rota-logo {
    font-size: 49px;
  }

  .v6-rota-main-image {
    min-height: 300px;
  }

  .v6-rota-thumb {
    min-height: 120px;
  }

  .v6-case-content h3,
  .v6-net-copy h3 {
    font-size: 34px;
  }

  .v6-net-copy {
    padding: 35px 23px;
  }

  .v6-net-logo {
    font-size: 44px;
  }

  .v6-phone-stage {
    min-height: 560px;
    transform: scale(.88);
    margin: -30px;
  }

  .v6-phone-main {
    width: 250px;
    height: 510px;
  }

  .v6-phone-left,
  .v6-phone-right {
    width: 205px;
    height: 430px;
  }

  .v6-small-project-visual {
    height: 260px;
  }

  .v6-remote-section {
    margin-top: 90px;
    padding-bottom: 80px;
  }

  .v6-values-grid {
    grid-template-columns: 1fr;
  }

  .v6-values-grid article,
  .v6-values-grid article:nth-child(2) {
    min-height: 230px;
    border-right: 0;
    border-bottom: 1px solid var(--v6-border);
  }

  .v6-values-grid article:last-child {
    border-bottom: 0;
  }

  .v6-values-grid h3 {
    margin-top: 32px;
  }

  .v6-about-lead {
    font-size: 22px !important;
  }

  .v6-about-content > p {
    font-size: 15px;
  }

  .v6-experience-section {
    margin-top: 90px;
    padding-bottom: 80px;
  }

  .v6-timeline-item {
    grid-template-columns: 37px 1fr;
  }

  .v6-timeline-period {
    grid-column: 2;
    grid-row: 1;
  }

  .v6-timeline-content {
    grid-column: 2;
  }

  .v6-stack-grid {
    grid-template-columns: 1fr;
  }

  .v6-stack-card,
  .v6-stack-card:nth-child(2) {
    min-height: auto;
    border-right: 0;
    border-bottom: 1px solid var(--v6-border);
  }

  .v6-stack-card:last-child {
    border-bottom: 0;
  }

  .v6-stack-card h3 {
    margin-top: 30px;
  }

  .v6-contact {
    margin-top: 95px;
    padding: 31px 21px;
  }

  .v6-contact-links {
    grid-template-columns: 1fr;
  }

  .v6-contact-primary {
    grid-column: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    transition: none !important;
    animation: none !important;
  }
}
'@

$cssFinal = $css.TrimEnd() + "`r`n`r`n" + $v6css

Set-Content $cssPath $cssFinal -Encoding UTF8

Write-Host ""
Write-Host "V6 instalada com sucesso." -ForegroundColor Green
Write-Host ""
Write-Host "Principais upgrades:" -ForegroundColor Cyan
Write-Host " - Hero completamente novo"
Write-Host " - Foto profissional menor e proporcional"
Write-Host " - Tipografia maior"
Write-Host " - RotaObra em formato de case premium"
Write-Host " - NetVision PRO com 3 telas"
Write-Host " - Secao dedicada a trabalho remoto"
Write-Host " - Experiencia em timeline"
Write-Host " - Stack redesenhada"
Write-Host " - Contato premium"
Write-Host " - GitHub principal atualizado"
Write-Host " - Layout mobile renovado"
Write-Host ""
Write-Host "Agora execute:" -ForegroundColor Yellow
Write-Host ""
Write-Host "npm run dev" -ForegroundColor White
Write-Host ""