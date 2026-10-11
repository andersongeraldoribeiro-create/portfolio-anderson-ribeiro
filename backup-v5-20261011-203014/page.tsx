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
    <main id="conteudo" className="neo-home">
      <section id="inicio" className="neo-hero">
        <div className="neo-hero-topline">
          <span className="neo-accent-line" />
          <span>ANDERSON RIBEIRO / PORTFÓLIO PROFISSIONAL</span>
        </div>

        <div className="neo-hero-grid">
          <div className="neo-hero-copy">
            <p className="neo-kicker"><span /> Desenvolvedor & especialista em redes</p>
            <h1>
              <span className="neo-name-light">Anderson</span>
              <span className="neo-name-accent">Ribeiro</span>
            </h1>
            <h2>Redes, infraestrutura e<br />desenvolvimento.</h2>
            <p className="neo-remote">Disponível para trabalho remoto</p>

            <div className="neo-actions">
              <a className="neo-btn neo-btn-primary" href={profile.whatsapp} target="_blank" rel="noreferrer">
                <span className="neo-chat-dot">●</span> Vamos conversar <b>→</b>
              </a>
              <a className="neo-btn neo-btn-outline" href={profile.resume} target="_blank" rel="noreferrer">
                <span>▣</span> Ver currículo <b>↓</b>
              </a>
            </div>

            <div className="neo-quick-links">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={`mailto:${profile.email}`}>E-mail ↗</a>
            </div>
          </div>

          <div className="neo-portrait-zone">
            <div className="neo-portrait-orbit neo-orbit-one" />
            <div className="neo-portrait-orbit neo-orbit-two" />
            <div className="neo-portrait-card">
              <Image
                src="/anderson-ribeiro-original.png"
                alt="Foto profissional de Anderson Ribeiro"
                fill
                sizes="(max-width: 900px) 86vw, 430px"
                className="neo-portrait-image"
                priority
              />
              <div className="neo-photo-caption">
                <span>ANDERSON RIBEIRO</span>
                <strong>Redes • Infraestrutura • Desenvolvimento</strong>
              </div>
            </div>
            <div className="neo-portrait-meta">
              <span>12+ ANOS</span>
              <span>REMOTO / HOME OFFICE</span>
              <span>ESTRELA DO INDAIÁ — MG</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="neo-section neo-projects">
        <div className="shell">
          <div className="neo-section-heading">
            <div>
              <p className="neo-kicker"><span /> Meus trabalhos</p>
              <h2>Projetos em <strong>destaque</strong></h2>
            </div>
            <p>Soluções reais que conectam tecnologia às necessidades do dia a dia.</p>
          </div>

          <div className="neo-featured-grid">
            <article className="neo-project-card neo-rotaobra-card">
              <div className="neo-card-copy">
                <p className="neo-project-index">01 / CASE PRINCIPAL</p>
                <div className="neo-rota-brand">Rota<span>Obra</span></div>
                <h3>Controle equipamentos, locações, operações e equipe em um só lugar.</h3>
                <span className="neo-pill neo-pill-orange">SISTEMA WEB</span>
                <div className="neo-card-actions">
                  <Link href="/projetos/rotaobra">Ver projeto <b>→</b></Link>
                  <a href={rotaobra.url} target="_blank" rel="noreferrer">Acessar site ↗</a>
                </div>
              </div>
              <div className="neo-card-media neo-card-media-rota">
                <Image src={rotaobra.cover} alt="Painel do RotaObra" fill sizes="(max-width: 900px) 100vw, 50vw" className="neo-card-image" />
              </div>
            </article>

            <article className="neo-project-card neo-netvision-card">
              <div className="neo-card-copy">
                <p className="neo-project-index">02 / ANDROID & REDES</p>
                <div className="neo-net-brand">NetVision <span>PRO</span></div>
                <h3>Score, diagnóstico e dispositivos da sua rede em um só lugar.</h3>
                <span className="neo-pill neo-pill-green">APLICATIVO ANDROID</span>
                <div className="neo-card-actions">
                  <Link href="/projetos/netvision">Ver projeto <b>→</b></Link>
                </div>
              </div>
              <div className="neo-card-media neo-card-media-net">
                <Image src={netvision.cover} alt="NetVision PRO mostrando o NetVision Score" fill sizes="(max-width: 900px) 100vw, 50vw" className="neo-card-image neo-net-image" />
              </div>
            </article>
          </div>

          <div className="neo-other-grid">
            {otherProjects.map((project, index) => (
              <article className={`neo-mini-project accent-${project.accent}`} key={project.slug}>
                <div className="neo-mini-head">
                  <span>0{index + 3}</span>
                  <span>↗</span>
                </div>
                <div className="neo-mini-visual"><Visual project={project} compact /></div>
                <div className="neo-mini-copy">
                  <p>{project.category}</p>
                  <h3>{project.shortName}</h3>
                  <span>{project.summary}</span>
                  <div className="neo-mini-links">
                    <Link href={`/projetos/${project.slug}`}>Ver case →</Link>
                    {project.url && <a href={project.url} target="_blank" rel="noreferrer">Abrir site ↗</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="neo-section neo-about">
        <div className="shell neo-about-grid">
          <div className="neo-about-title">
            <p className="neo-kicker"><span /> Sobre mim</p>
            <h2>Experiência de campo.<br /><strong>Visão de produto.</strong></h2>
          </div>
          <div className="neo-about-copy">
            <p className="neo-about-lead">Profissional de Tecnologia da Informação com mais de 12 anos de experiência contínua em provedores de internet.</p>
            <p>Minha atuação reúne infraestrutura, redes, suporte, monitoramento e desenvolvimento de sistemas. Trabalho com ambientes FTTH, MikroTik, PPPoE, VPN, IPv4/IPv6, Windows Server e equipamentos de diferentes fabricantes.</p>
            <p>O desenvolvimento entrou como uma extensão natural dessa experiência: transformar necessidades operacionais em ferramentas úteis, documentadas e fáceis de usar.</p>

            <div className="neo-values">
              <div><span>01</span><strong>Problema primeiro</strong><p>Entender a operação antes de escolher a tecnologia.</p></div>
              <div><span>02</span><strong>Entrega prática</strong><p>Software e infraestrutura com foco em clareza e estabilidade.</p></div>
              <div><span>03</span><strong>Aprendizado contínuo</strong><p>Curiosidade técnica aplicada a projetos reais.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="neo-section neo-experience">
        <div className="shell">
          <div className="neo-section-heading">
            <div>
              <p className="neo-kicker"><span /> Experiência</p>
              <h2>Trajetória que virou <strong>repertório.</strong></h2>
            </div>
            <p>Atuação contínua em provedores, somada à formação em Computação e Defesa Cibernética.</p>
          </div>

          <div className="neo-experience-grid">
            <div className="neo-timeline">
              {experience.map((item, index) => (
                <article key={`${item.company}-${item.period}`} className="neo-exp-row">
                  <div className="neo-exp-index">0{index + 1}</div>
                  <div className="neo-exp-period">{item.period}</div>
                  <div className="neo-exp-body">
                    <h3>{item.role}</h3>
                    <strong>{item.company}</strong>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <aside className="neo-education-card">
              <p className="neo-kicker"><span /> Formação</p>
              {education.map((item) => (
                <div className="neo-education-item" key={item.course}>
                  <span>✓</span>
                  <div><h3>{item.course}</h3><p>{item.institution} · {item.period}</p></div>
                </div>
              ))}
              <div className="neo-stat-block"><strong>12+</strong><span>anos em operação real</span></div>
              <div className="neo-stat-block"><strong>02</strong><span>graduações concluídas em 2025</span></div>
            </aside>
          </div>
        </div>
      </section>

      <section id="stack" className="neo-section neo-stack">
        <div className="shell">
          <div className="neo-section-heading">
            <div>
              <p className="neo-kicker"><span /> Tecnologias</p>
              <h2>Da camada física<br /><strong>à aplicação.</strong></h2>
            </div>
            <p>Ferramentas usadas na atuação profissional e nos projetos autorais.</p>
          </div>

          <div className="neo-stack-grid">
            {techGroups.map((group) => (
              <article key={group.number} className="neo-stack-card">
                <span>{group.number}</span>
                <h3>{group.title}</h3>
                <div>{group.items.map((item) => <i key={item}>{item}</i>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="neo-section neo-differentials">
        <div className="shell">
          <div className="neo-section-heading">
            <div>
              <p className="neo-kicker"><span /> Diferenciais</p>
              <h2>Experiência técnica com<br /><strong>visão de solução.</strong></h2>
            </div>
            <p>Uma combinação construída entre operação de provedor, infraestrutura, diagnóstico e desenvolvimento de produtos próprios.</p>
          </div>

          <div className="neo-differentials-grid">
            <article>
              <span>01</span>
              <h3>12+ anos em provedores</h3>
              <p>Experiência contínua com conectividade, suporte, infraestrutura e diagnóstico em ambientes reais.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Redes + desenvolvimento</h3>
              <p>Capacidade de conectar conhecimento de infraestrutura a soluções web e Android.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Projetos autorais</h3>
              <p>RotaObra, NetVision PRO e outras soluções criadas a partir de problemas concretos de operação.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Formação multidisciplinar</h3>
              <p>Ciência da Computação e Defesa Cibernética concluídas em 2025.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="remoto" className="neo-section neo-remote-section">
        <div className="shell neo-remote-panel">
          <div>
            <p className="neo-kicker"><span /> Disponibilidade profissional</p>
            <h2>Pronto para o próximo<br /><strong>desafio remoto.</strong></h2>
            <p>Busco oportunidades home office em redes, infraestrutura, suporte técnico e desenvolvimento web ou Android.</p>
          </div>
          <div className="neo-remote-actions">
            <a className="neo-btn neo-btn-primary" href={`mailto:${profile.email}?subject=Oportunidade%20de%20trabalho%20remoto`}>Falar sobre uma vaga <b>→</b></a>
            <a className="neo-btn neo-btn-outline" href={profile.github} target="_blank" rel="noreferrer">Ver GitHub <b>↗</b></a>
          </div>
        </div>
      </section>

      <section id="contato" className="neo-section neo-contact">
        <div className="shell neo-contact-grid">
          <div>
            <p className="neo-kicker"><span /> Contato</p>
            <h2>Vamos construir<br /><strong>algo útil.</strong></h2>
          </div>
          <div className="neo-contact-links">
            <a href={`mailto:${profile.email}`}><span>E-mail</span><strong>{profile.email}</strong><b>↗</b></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Perfil profissional</strong><b>↗</b></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><strong>andersongeraldoribeiro-create</strong><b>↗</b></a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>Conversar agora</strong><b>↗</b></a>
          </div>
        </div>
      </section>
    </main>
  );
}
