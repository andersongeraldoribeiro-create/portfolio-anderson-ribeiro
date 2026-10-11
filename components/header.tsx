"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Projetos", "projetos"],
  ["Sobre", "sobre"],
  ["Experiência", "experiencia"],
  ["Tecnologias", "stack"],
  ["Contato", "contato"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header v6-header">
      <div className="shell nav-shell v6-nav-shell">
        <Link href="/#inicio" className="brand v6-brand" aria-label="Anderson Ribeiro — Portfólio">
          <span className="v6-brand-line" aria-hidden="true" />
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
