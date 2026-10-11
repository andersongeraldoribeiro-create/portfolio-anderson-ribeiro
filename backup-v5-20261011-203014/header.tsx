"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Sobre", "sobre"],
  ["Projetos", "projetos"],
  ["Experiência", "experiencia"],
  ["Tecnologias", "stack"],
  ["Contato", "contato"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link href="/#inicio" className="brand" aria-label="Anderson Ribeiro — início">
          <span className="brand-line" />
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
          <i aria-hidden="true">{open ? "×" : "+"}</i>
        </button>

        <nav id="main-nav" className={open ? "main-nav open" : "main-nav"} aria-label="Navegação principal">
          {links.map(([label, id]) => (
            <Link href={`/#${id}`} key={id} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <a className="nav-cta" href="/Anderson-Ribeiro-Curriculo.pdf" target="_blank" rel="noreferrer">
            Currículo <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
