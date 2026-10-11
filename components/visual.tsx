import Image from "next/image";
import type { Project } from "@/lib/content";

export default function Visual({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (project.cover) {
    return (
      <div className={`media-frame accent-${project.accent} ${compact ? "compact" : ""}`}>
        <div className="media-topline">
          <span>{project.shortName}</span>
          <span>{project.year}</span>
        </div>
        <div className="media-image-wrap">
          <Image
            src={project.cover}
            alt={`Apresentação visual do projeto ${project.name}`}
            fill
            sizes={compact ? "(max-width: 800px) 100vw, 48vw" : "(max-width: 900px) 100vw, 55vw"}
            className="media-image"
            priority={project.slug === "rotaobra"}
          />
        </div>
        <div className="media-bottomline">
          <span>{project.category}</span>
          <span>Projeto autoral ↗</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`abstract-visual accent-${project.accent} ${compact ? "compact" : ""}`} aria-hidden="true">
      <span className="abstract-index">{project.year}</span>
      <div className="abstract-orbit orbit-a" />
      <div className="abstract-orbit orbit-b" />
      <div className="abstract-core">{project.shortName.slice(0, 2).toUpperCase()}</div>
      <div className="abstract-label">{project.shortName}</div>
    </div>
  );
}
