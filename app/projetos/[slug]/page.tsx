import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Projeto não encontrado" };
  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: { title: `${project.name} | Anderson Ribeiro`, description: project.description, url: `/projetos/${project.slug}`, images: ["/opengraph-image"] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.indexOf(project);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main id="conteudo" className={`case-page accent-${project.accent}`}>
      <section className="case-hero shell">
        <Link className="back-link" href="/#projetos">← Voltar aos projetos</Link>
        <div className="case-heading-row">
          <div>
            <p className="section-kicker">CASE {String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</p>
            <h1>{project.name}</h1>
          </div>
          <div className="case-meta">
            <span>{project.year}</span>
            <span>{project.category}</span>
          </div>
        </div>
        <p className="case-lead">{project.summary}</p>
        <div className="case-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </section>

      {project.cover ? (
        <section className="case-cover shell-wide">
          <div className="case-cover-inner">
            <Image src={project.cover} alt={`Apresentação visual do projeto ${project.name}`} fill sizes="100vw" className="case-cover-image" priority />
          </div>
        </section>
      ) : (
        <section className="case-placeholder shell-wide" aria-hidden="true">
          <div className="placeholder-grid" />
          <div className="placeholder-mark">{project.shortName.slice(0, 2).toUpperCase()}</div>
          <span>{project.shortName} / Projeto autoral</span>
        </section>
      )}

      <section className="case-overview shell">
        <div className="case-overview-title">
          <p className="section-kicker">VISÃO DO PROJETO</p>
          <h2>Do contexto<br />à <span>solução.</span></h2>
        </div>
        <div className="case-overview-copy">
          <p className="large-text">{project.description}</p>
          <ul className="case-feature-list">
            {project.features.map((feature, index) => (
              <li key={feature}><span>{String(index + 1).padStart(2, "0")}</span>{feature}</li>
            ))}
          </ul>
          <div className="case-actions">
            {project.url && <a className="btn btn-primary" href={project.url} target="_blank" rel="noreferrer">Acessar projeto <span>↗</span></a>}
            {project.repository && <a className="btn btn-ghost" href={project.repository} target="_blank" rel="noreferrer">Ver código <span>↗</span></a>}
          </div>
        </div>
      </section>

      {project.images.length > 1 && (
        <section className="gallery-section shell">
          <div className="gallery-heading">
            <p className="section-kicker">GALERIA / PRODUTO</p>
            <h2>Detalhes da <span>experiência.</span></h2>
          </div>
          <div className={`case-gallery ${project.slug === "rotaobra" ? "gallery-rotaobra" : "gallery-netvision"}`}>
            {project.images.map((image, index) => (
              <figure key={image} className={`gallery-item gallery-item-${index + 1}`}>
                <Image src={image} alt={`${project.name} — tela ${index + 1}`} fill sizes="(max-width: 800px) 100vw, 50vw" className="gallery-image" />
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="next-case shell">
        <span>PRÓXIMO PROJETO</span>
        <Link href={`/projetos/${nextProject.slug}`}>
          <strong>{nextProject.shortName}</strong>
          <i>↗</i>
        </Link>
      </section>
    </main>
  );
}
