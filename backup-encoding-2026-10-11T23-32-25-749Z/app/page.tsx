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
              PortfÃ³lio profissional â€¢ 2026
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
              Mais de 12 anos conectando experiÃªncia de campo,
              infraestrutura e desenvolvimento para transformar
              problemas reais em soluÃ§Ãµes digitais.
            </p>

            <div className="v6-hero-actions">
              <a
                href="#projetos"
                className="v6-button v6-button-primary"
              >
                Explorar projetos
                <span>â†˜</span>
              </a>

              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="v6-button v6-button-secondary"
              >
                Ver currÃ­culo
                <span>â†—</span>
              </a>
            </div>

            <div className="v6-social-row">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub â†—
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn â†—
              </a>

              <a href={`mailto:${profile.email}`}>
                E-mail â†—
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
                <span>ESTRELA DO INDAIÃ â€” MG</span>
                <strong>DisponÃ­vel para trabalho remoto</strong>
              </div>
            </div>

            <div className="v6-orbit v6-orbit-a" />
            <div className="v6-orbit v6-orbit-b" />

            <div className="v6-floating-panel v6-panel-network">
              <span>NETWORK</span>
              <strong>IPv4 / IPv6</strong>
              <small>MikroTik â€¢ FTTH â€¢ Wi-Fi</small>
            </div>

            <div className="v6-floating-panel v6-panel-build">
              <span>BUILD</span>
              <strong>Web + Android</strong>
              <small>Kotlin â€¢ Supabase â€¢ Vercel</small>
            </div>
          </div>
        </div>

        <div className="shell v6-metrics">
          <div>
            <strong>12+</strong>
            <span>
              anos de experiÃªncia
              <br />
              em provedores
            </span>
          </div>

          <div>
            <strong>02</strong>
            <span>
              graduaÃ§Ãµes
              <br />
              concluÃ­das
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
              disponÃ­vel para
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
              01 â€” Projetos selecionados
            </p>

            <h2>
              Problemas reais.
              <br />
              <span>SoluÃ§Ãµes reais.</span>
            </h2>
          </div>

          <p>
            Produtos criados a partir de necessidades de operaÃ§Ã£o,
            diagnÃ³stico, gestÃ£o e serviÃ§os tÃ©cnicos.
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
              rotaobra.vercel.app â†—
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
                GestÃ£o â€¢ LogÃ­stica â€¢ OperaÃ§Ã£o
              </p>

              <h3>
                Da operaÃ§Ã£o no escritÃ³rio
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
                  <span>â†’</span>
                </Link>

                <a
                  href={rotaobra.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir sistema â†—
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
              DiagnÃ³stico tÃ©cnico
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
              <span>â†’</span>
            </Link>
          </div>

          <div className="v6-phone-stage">

            <div className="v6-phone v6-phone-left">
              <Image
                src={netvision.images[2]}
                alt="Tela de visita tÃ©cnica do NetVision"
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
                    Case â†’
                  </Link>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Site â†—
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
                02 â€” Trabalho remoto
              </p>

              <h2>
                ExperiÃªncia tÃ©cnica.
                <br />
                <span>Autonomia para entregar.</span>
              </h2>
            </div>

            <p>
              Busco oportunidades em home office onde experiÃªncia
              prÃ¡tica, organizaÃ§Ã£o e capacidade de aprender possam
              gerar resultado real para o time.
            </p>
          </div>

          <div className="v6-values-grid">

            <article>
              <span>01</span>
              <h3>VisÃ£o prÃ¡tica</h3>
              <p>
                Mais de uma dÃ©cada trabalhando diretamente com
                infraestrutura e conectividade.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Autonomia</h3>
              <p>
                Capacidade de investigar problemas, documentar,
                testar e buscar soluÃ§Ãµes.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>VisÃ£o ponta a ponta</h3>
              <p>
                Infraestrutura, redes, suporte, web e Android
                dentro da mesma experiÃªncia profissional.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Aprendizado contÃ­nuo</h3>
              <p>
                Projetos autorais usados para transformar estudo
                tÃ©cnico em experiÃªncia prÃ¡tica.
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
            03 â€” Perfil profissional
          </p>

          <h2>
            Da fibra Ã³ptica
            <br />
            <span>Ã  interface.</span>
          </h2>

          <div className="v6-location">
            {profile.location}
          </div>
        </div>

        <div className="v6-about-content">

          <p className="v6-about-lead">
            Profissional de Tecnologia da InformaÃ§Ã£o com mais de
            12 anos de experiÃªncia contÃ­nua em provedores de internet.
          </p>

          <p>
            Minha atuaÃ§Ã£o reÃºne infraestrutura, redes, suporte,
            monitoramento e desenvolvimento de sistemas.
          </p>

          <p>
            Trabalho com ambientes FTTH, MikroTik, PPPoE, VPN,
            IPv4/IPv6, Windows Server e equipamentos de diferentes
            fabricantes.
          </p>

          <p>
            O desenvolvimento nasceu como extensÃ£o natural dessa
            experiÃªncia: construir ferramentas para diagnÃ³stico,
            gestÃ£o e acompanhamento de serviÃ§os tÃ©cnicos.
          </p>

          <div className="v6-about-signature">
            <strong>Anderson Ribeiro</strong>
            <span>
              Redes â€¢ Infraestrutura â€¢ Desenvolvimento
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
                04 â€” ExperiÃªncia
              </p>

              <h2>
                Mais de uma dÃ©cada
                <br />
                <span>em operaÃ§Ã£o real.</span>
              </h2>
            </div>

            <p>
              Uma trajetÃ³ria contÃ­nua em infraestrutura,
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
                FormaÃ§Ã£o
              </p>

              {education.map((item) => (
                <div
                  className="v6-degree"
                  key={item.course}
                >
                  <span>âœ“</span>

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
                  graduaÃ§Ãµes concluÃ­das
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
              05 â€” Tecnologias
            </p>

            <h2>
              Ferramentas para
              <br />
              <span>diagnosticar e construir.</span>
            </h2>
          </div>

          <p>
            Tecnologias que fazem parte da minha atuaÃ§Ã£o
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
            06 â€” Vamos conversar
          </p>

          <h2>
            Tem um problema
            <br />
            <span>que tecnologia pode resolver?</span>
          </h2>

          <p>
            Estou disponÃ­vel para oportunidades remotas em
            redes, infraestrutura, suporte, desenvolvimento
            e projetos tÃ©cnicos.
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
            <b>â†—</b>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <span>â†—</span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <span>â†—</span>
          </a>

          <a href={`mailto:${profile.email}`}>
            E-mail
            <span>â†—</span>
          </a>

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            CurrÃ­culo
            <span>â†“</span>
          </a>

        </div>
      </section>

    </main>
  );
}
