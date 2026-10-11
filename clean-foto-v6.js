const fs = require("fs");

const pagePath = "app/page.tsx";
const cssPath = "app/globals.css";

let page = fs.readFileSync(pagePath, "utf8");
let css = fs.readFileSync(cssPath, "utf8");

// Remove PROFILE / 01
page = page.replace(
  /<div className="v6-tech-label v6-tech-label-top">[\s\S]*?<\/div>\s*/g,
  ""
);

// Remove orbitas
page = page.replace(
  /<div className="v6-orbit v6-orbit-a"\s*\/>\s*/g,
  ""
);

page = page.replace(
  /<div className="v6-orbit v6-orbit-b"\s*\/>\s*/g,
  ""
);

// Remove NETWORK
page = page.replace(
  /<div className="v6-floating-panel v6-panel-network">[\s\S]*?<\/div>\s*/g,
  ""
);

// Remove BUILD
page = page.replace(
  /<div className="v6-floating-panel v6-panel-build">[\s\S]*?<\/div>\s*/g,
  ""
);

// Atualiza legenda da foto
page = page.replace(
  /<div className="v6-portrait-caption">[\s\S]*?<\/div>/,
  `<div className="v6-portrait-caption">
    <span>ANDERSON RIBEIRO</span>
    <strong>Disponível para oportunidades remotas</strong>
  </div>`
);

fs.writeFileSync(pagePath, page, "utf8");

// CSS novo para area da foto
css += `

/* =========================================================
   FOTO HERO CLEAN PREMIUM
========================================================= */

.v6-portrait-area {
  min-height: 590px !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
}

.v6-portrait {
  width: min(410px, 82%) !important;
  aspect-ratio: 0.82 !important;
  border-radius: 28px !important;
  border: 1px solid rgba(135, 245, 173, 0.25) !important;
  box-shadow:
    0 35px 90px rgba(0,0,0,.45),
    0 0 0 1px rgba(255,255,255,.025),
    0 0 70px rgba(86,239,145,.07) !important;
}

.v6-portrait::before {
  content: "";
  position: absolute;
  z-index: 3;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.025);
}

.v6-portrait-image {
  object-fit: cover !important;
  object-position: center 22% !important;
}

.v6-portrait-gradient {
  inset: 58% 0 0 !important;
  background:
    linear-gradient(
      180deg,
      transparent,
      rgba(6,12,10,.20) 15%,
      rgba(6,12,10,.92) 100%
    ) !important;
}

.v6-portrait-caption {
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  padding: 52px 26px 24px !important;
  gap: 7px !important;
  background:
    linear-gradient(
      180deg,
      transparent,
      rgba(6,12,10,.84)
    );
}

.v6-portrait-caption span {
  color: var(--v6-green) !important;
  font-size: 13px !important;
  font-weight: 900 !important;
  letter-spacing: .8px !important;
}

.v6-portrait-caption strong {
  color: #fff !important;
  font-size: 17px !important;
  font-weight: 750 !important;
}

/* Esconde definitivamente os antigos elementos flutuantes */
.v6-tech-label,
.v6-floating-panel,
.v6-orbit {
  display: none !important;
}

@media (max-width: 850px) {
  .v6-portrait-area {
    min-height: 540px !important;
  }

  .v6-portrait {
    width: min(390px, 76%) !important;
  }
}

@media (max-width: 620px) {
  .v6-portrait-area {
    min-height: 450px !important;
  }

  .v6-portrait {
    width: min(310px, 82%) !important;
    border-radius: 22px !important;
  }

  .v6-portrait-caption {
    padding: 42px 18px 18px !important;
  }

  .v6-portrait-caption span {
    font-size: 12px !important;
  }

  .v6-portrait-caption strong {
    font-size: 14px !important;
  }
}
`;

fs.writeFileSync(cssPath, css, "utf8");

console.log("");
console.log("Foto do hero limpa com sucesso.");
console.log("Removidos: PROFILE, NETWORK, BUILD e orbitas.");
console.log("");