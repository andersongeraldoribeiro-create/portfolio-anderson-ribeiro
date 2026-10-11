const fs = require("fs");

const cssPath = "app/globals.css";

let css = fs.readFileSync(cssPath, "utf8");

css += `

/* =========================================================
   FIX PREMIUM - PERFIL PROFISSIONAL
========================================================= */

html,
body {
  max-width: 100%;
  overflow-x: hidden;
}

.v6-about {
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr) !important;
  gap: clamp(55px, 7vw, 105px) !important;
  align-items: start !important;
}

.v6-about-heading,
.v6-about-content {
  min-width: 0 !important;
}

.v6-about-heading h2 {
  max-width: 650px !important;
  font-size: clamp(52px, 5.2vw, 82px) !important;
  line-height: 0.96 !important;
  letter-spacing: -4px !important;
}

.v6-about-content {
  max-width: 720px !important;
  padding-top: 54px !important;
}

.v6-about-lead {
  max-width: 690px !important;
  font-size: clamp(23px, 2vw, 30px) !important;
  line-height: 1.45 !important;
}

.v6-about-content > p:not(.v6-about-lead) {
  max-width: 680px !important;
  font-size: 16px !important;
  line-height: 1.8 !important;
}

.v6-location {
  margin-top: 31px !important;
  font-size: 14px !important;
  padding: 11px 15px !important;
}

@media (max-width: 980px) {
  .v6-about {
    grid-template-columns: 1fr !important;
    gap: 35px !important;
  }

  .v6-about-heading {
    position: static !important;
  }

  .v6-about-content {
    padding-top: 0 !important;
    max-width: 760px !important;
  }
}

@media (max-width: 620px) {
  .v6-about-heading h2 {
    font-size: clamp(43px, 13vw, 60px) !important;
    letter-spacing: -3px !important;
  }

  .v6-about-lead {
    font-size: 21px !important;
  }

  .v6-about-content > p:not(.v6-about-lead) {
    font-size: 15px !important;
  }
}
`;

fs.writeFileSync(cssPath, css, "utf8");

console.log("");
console.log("Layout da secao Sobre corrigido.");
console.log("Overflow horizontal removido.");
console.log("");