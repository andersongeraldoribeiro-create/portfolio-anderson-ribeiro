import Image from "next/image";
import Link from "next/link";
import Visual from "@/components/visual";
import { education, experience, profile, projects, techGroups } from "@/lib/content";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  const rotaobra = projects.find((project) => project.slug === "rotaobra")!;
  const netvision = projects.find((project) => project.slug === "netvision")!;
  const otherProjects = projects.filter((project) => !["rotaobra", "netvision"].includes(project.slug));

  return (
    <main id="conteudo" className="v6-home">
      <section id="inicio" className="v6-hero">
        <div className="v6-grid-bg" />
        <div className="v6-glow v6-glow-a" />
        <div className="v6-glow v6-glow-b" />

        <div className="shell v6-hero-layout">
          <div className="v6-hero-copy">
            <div className="v6-eyebrow"><span className="v6-live-dot" /> Portfólio profissional • 2026</div>
            <h1><span>Anderson</span><strong>Ribeiro.</strong></h1>
            <h2>Redes, infraestrutura <span>& software.</span></h2>
            <p className="v6-hero-description">
              Mais de 12 anos conectando experiência de campo, infraestrutura e desenvolvimento para transformar problemas reais em soluções digitais.
            </p>

            <div className="v6-hero-actions">
              <a href="#projetos" className="v6-button v6-button-primary">Explorar projetos <span>↘</span></a>
              <a href={profile.resume} target="_blank" rel="noreferrer" className="v6-button v6-button-secondary">Ver currículo <span>↗</span></a>
            </div>

            <div className="v6-social-row">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={`mailto:${profile.email}`}>E-mail ↗</a>
            </div>
          </div>

          <div className="v6-portrait-area">
            <div className="v6-portrait">
              <Image
                src="/anderson-ribeiro-original.png"
                alt="Foto profissional de Anderson Ribeiro"
                fill
                priority
                sizes="(max-width: 850px) 82vw, 420px"
                className="v6-portrait-image"
              />
              <div className="v6-portrait-gradient" />
              <div className="v6-portrait-caption">
                <span>ANDERSON RIBEIRO</span>
                <strong>Disponível para oportunidades remotas</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="shell v6-metrics" aria-label="Resumo profissional">
          <div><strong>12+</strong><span>anos de experiência<br />em provedores</span></div>
          <div><strong>02</strong><span>graduações<br />concluídas</span></div>
          <div><strong>05</strong><span>projetos autorais<br />em destaque</span></div>
          <div className="v6-remote-metric"><i /><span>disponível para<br />oportunidades remotas</span></div>
        </div>
      </section>

      <section id="projetos" className="v6-section shell v6-projects">
        <div className="v6-section-intro">
          <div>
            <p className="v6-kicker">01 — Projetos selecionados</p>
            <h2>Problemas reais.<br /><span>Soluções reais.</span></h2>
          </div>
          <p>Produtos criados a partir de necessidades de operação, diagnóstico, gestão e serviços técnicos.</p>
        </div>

        <article className="v6-case v6-case-rota">
          <div className="v6-case-heading">
            <div>
              <span className="v6-case-number">01 / PROJETO PRINCIPAL</span>
              <div className="v6-rota-logo">Rota<span>Obra</span></div>
            </div>
            <a href={rotaobra.url} target="_blank" rel="noreferrer" className="v6-case-site-link">rotaobra.vercel.app ↗</a>
          </div>

          <div className="v6-rota-layout">
            <div className="v6-rota-visual">
              <div className="v6-rota-main-image">
                <Image src={rotaobra.cover} alt="Dashboard principal do RotaObra" fill sizes="(max-width: 900px) 100vw, 62vw" className="v6-project-image" />
              </div>
              <div className="v6-rota-thumbs">
                {rotaobra.images.slice(1, 3).map((image, index) => (
                  <div className="v6-rota-thumb" key={image}>
                    <Image src={image} alt={`Interface RotaObra ${index + 2}`} fill sizes="300px" className="v6-project-image" />
                  </div>
                ))}
              </div>
            </div>

            <div className="v6-case-content">
              <p className="v6-case-label">Gestão • Logística • Operação</p>
              <h3>Da operação no escritório <span>ao motorista em campo.</span></h3>
              <p className="v6-case-description">{rotaobra.description}</p>

              <div className="v6-case-features">
                {rotaobra.features.slice(0, 5).map((feature, index) => (
                  <div key={feature}><span>0{index + 1}</span><p>{feature}</p></div>
                ))}
              </div>

              <div className="v6-case-buttons">
                <Link href="/projetos/rotaobra" className="v6-button v6-button-light">Explorar case <span>→</span></Link>
                <a href={rotaobra.url} target="_blank" rel="noreferrer">Abrir sistema ↗</a>
              </div>
            </div>
          </div>
        </article>

        <article className="v6-case v6-case-netvision">
          <div className="v6-net-copy">
            <span className="v6-case-number">02 / ANDROID + REDES</span>
            <div className="v6-net-logo">NetVision <span>PRO</span></div>
            <h3>Diagnóstico técnico <span>transformado em produto.</span></h3>
            <p>{netvision.description}</p>

            <div className="v6-net-tags">
              {netvision.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>

            <Link href="/projetos/netvision" className="v6-button v6-button-light">Conhecer NetVision <span>→</span></Link>
          </div>

          <div className="v6-phone-stage">
            <div className="v6-phone v6-phone-left">
              <Image src={netvision.images[2]} alt="Tela de visita técnica do NetVision" fill sizes="280px" className="v6-phone-image" />
            </div>
            <div className="v6-phone v6-phone-main">
              <Image src={netvision.images[1]} alt="NetVision Score" fill sizes="320px" className="v6-phone-image" />
            </div>
            <div className="v6-phone v6-phone-right">
              <Image src={netvision.images[3]} alt="Ferramentas NetVision PRO" fill sizes="280px" className="v6-phone-image" />
            </div>
          </div>
        </article>

        <div className="v6-small-projects">
          {otherProjects.map((project, index) => (
            <article key={project.slug} className={`v6-small-project accent-${project.accent}`}>
              <div className="v6-small-number">0{index + 3}</div>
              <div className="v6-small-project-visual"><Visual project={project} compact /></div>
              <div className="v6-small-project-copy">
                <p>{project.category}</p>
                <h3>{project.shortName}</h3>
                <span>{project.summary}</span>
                <div className="v6-small-actions">
                  <Link href={`/projetos/${project.slug}`}>Case →</Link>
                  {project.url && <a href={project.url} target="_blank" rel="noreferrer">Site ↗</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="v6-section v6-remote-section">
        <div className="shell">
          <div className="v6-remote-top">
            <div>
              <p className="v6-kicker">02 — Trabalho remoto</p>
              <h2>Experiência técnica.<br /><span>Autonomia para entregar.</span></h2>
            </div>
            <p>Busco oportunidades em home office onde experiência prática, organização e capacidade de aprender possam gerar resultado real para o time.</p>
          </div>

          <div className="v6-values-grid">
            <article><span>01</span><h3>Visão prática</h3><p>Mais de uma década trabalhando diretamente com infraestrutura e conectividade.</p></article>
            <article><span>02</span><h3>Autonomia</h3><p>Capacidade de investigar problemas, documentar, testar e buscar soluções.</p></article>
            <article><span>03</span><h3>Visão ponta a ponta</h3><p>Infraestrutura, redes, suporte, web e Android dentro da mesma experiência profissional.</p></article>
            <article><span>04</span><h3>Aprendizado contínuo</h3><p>Projetos autorais usados para transformar estudo técnico em experiência prática.</p></article>
          </div>
        </div>
      </section>

      <section id="sobre" className="v6-section shell v6-about">
        <div className="v6-about-heading">
          <p className="v6-kicker">03 — Perfil profissional</p>
          <h2>Da rede<br /><span>à solução.</span></h2>
          <div className="v6-location">{profile.location}</div>
        </div>

        <div className="v6-about-content">
          <p className="v6-about-lead">Profissional de Tecnologia da Informação com mais de 12 anos de experiência contínua em provedores de internet.</p>
          <p>Minha atuação reúne infraestrutura, redes, suporte, monitoramento e desenvolvimento de sistemas.</p>
          <p>Trabalho com ambientes FTTH, MikroTik, PPPoE, VPN, IPv4/IPv6, Windows Server e equipamentos de diferentes fabricantes.</p>
          <p>O desenvolvimento nasceu como extensão natural dessa experiência: construir ferramentas para diagnóstico, gestão e acompanhamento de serviços técnicos.</p>
          <div className="v6-about-signature"><strong>Anderson Ribeiro</strong><span>Redes • Infraestrutura • Desenvolvimento</span></div>
        </div>
      </section>

      <section id="experiencia" className="v6-section v6-experience-section">
        <div className="shell">
          <div className="v6-section-intro">
            <div>
              <p className="v6-kicker">04 — Experiência</p>
              <h2>Mais de uma década<br /><span>em operação real.</span></h2>
            </div>
            <p>Uma trajetória contínua em infraestrutura, suporte e redes em ambiente de provedor.</p>
          </div>

          <div className="v6-experience-layout">
            <div className="v6-timeline">
              {experience.map((item, index) => (
                <article key={`${item.company}-${item.period}`} className="v6-timeline-item">
                  <div className="v6-timeline-marker"><span>0{index + 1}</span></div>
                  <div className="v6-timeline-period">{item.period}</div>
                  <div className="v6-timeline-content"><h3>{item.role}</h3><strong>{item.company}</strong><p>{item.description}</p></div>
                </article>
              ))}
            </div>

            <aside className="v6-education">
              <p className="v6-kicker">Formação</p>
              {education.map((item) => (
                <div className="v6-degree" key={item.course}>
                  <span>✓</span><div><h3>{item.course}</h3><p>{item.institution}<br />{item.period}</p></div>
                </div>
              ))}
              <div className="v6-education-stat"><strong>02</strong><span>graduações concluídas<br />em 2025</span></div>
            </aside>
          </div>
        </div>
      </section>

      <section id="stack" className="v6-section shell v6-stack">
        <div className="v6-section-intro">
          <div>
            <p className="v6-kicker">05 — Tecnologias</p>
            <h2>Ferramentas para<br /><span>diagnosticar e construir.</span></h2>
          </div>
          <p>Tecnologias que fazem parte da minha atuação profissional e dos projetos desenvolvidos.</p>
        </div>

        <div className="v6-stack-grid">
          {techGroups.map((group) => (
            <article className="v6-stack-card" key={group.number}>
              <span className="v6-stack-number">{group.number}</span>
              <h3>{group.title}</h3>
              <div className="v6-stack-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="v6-section shell v6-contact">
        <div className="v6-contact-grid" />
        <div className="v6-contact-copy">
          <p className="v6-kicker">06 — Vamos conversar</p>
          <h2>Tem um problema<br /><span>que tecnologia pode resolver?</span></h2>
          <p>Estou disponível para oportunidades remotas em redes, infraestrutura, suporte, desenvolvimento e projetos técnicos.</p>
        </div>

        <div className="v6-contact-links">
          <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="v6-contact-primary"><span>WhatsApp</span><strong>Vamos conversar</strong><b>↗</b></a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          <a href={`mailto:${profile.email}`}>E-mail <span>↗</span></a>
          <a href={profile.resume} target="_blank" rel="noreferrer">Currículo <span>↓</span></a>
        </div>
      </section>
    </main>
  );
}
