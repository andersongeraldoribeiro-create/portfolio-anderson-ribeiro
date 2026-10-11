export const profile = {
  name: "Anderson Ribeiro",
  role: "Analista de Redes e Infraestrutura | Desenvolvimento Web & Android",
  location: "Estrela do IndaiÃ¡ - MG",
  email: "andersongeraldoribeiro@gmail.com",
  linkedin: "https://www.linkedin.com/in/anderson-ribeiro-651146341",
  github: "https://github.com/andersongeraldoribeiro-create",
  whatsapp: "https://wa.me/5537984096932",
  resume: "/Anderson-Ribeiro-Curriculo.pdf",
};

export type Project = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  year: string;
  accent: "orange" | "violet" | "cyan" | "green" | "amber";
  description: string;
  summary: string;
  tags: string[];
  features: string[];
  url: string;
  repository: string;
  cover: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "rotaobra",
    name: "RotaObra",
    shortName: "RotaObra",
    category: "GestÃ£o â€¢ LogÃ­stica â€¢ LocaÃ§Ãµes â€¢ Web",
    year: "2026",
    accent: "orange",
    description:
      "Plataforma para gestÃ£o de equipamentos e operaÃ§Ãµes de obra, conectando clientes, locaÃ§Ãµes, entregas, retiradas, motoristas, rotas, vistorias e controle operacional em um Ãºnico fluxo.",
    summary:
      "Do escritÃ³rio ao motorista em campo: uma operaÃ§Ã£o organizada, rastreÃ¡vel e com evidÃªncias digitais.",
    tags: ["GestÃ£o", "LogÃ­stica", "LocaÃ§Ãµes", "Web", "Android"],
    features: [
      "GestÃ£o de equipamentos, clientes, locaÃ§Ãµes e operaÃ§Ãµes",
      "Aplicativo do motorista com rotas, checklist e status",
      "Fotos de entrega, comprovantes digitais e assinatura",
      "Vistorias 360Â° com fotos, avarias e histÃ³rico",
      "Mapa e rotas para acompanhamento da operaÃ§Ã£o",
      "Equipe, perfis de acesso e permissÃµes",
      "Controle financeiro e relatÃ³rios operacionais",
    ],
    url: "https://rotaobra.vercel.app/",
    repository: "",
    cover: "/projects/rotaobra/overview.webp",
    images: [
      "/projects/rotaobra/overview.webp",
      "/projects/rotaobra/operations.webp",
      "/projects/rotaobra/inspection.webp",
      "/projects/rotaobra/routes.webp",
      "/projects/rotaobra/driver-app.webp",
      "/projects/rotaobra/driver-status.webp",
    ],
  },
  {
    slug: "netvision",
    name: "NetVision PRO",
    shortName: "NetVision",
    category: "Android â€¢ Redes â€¢ DiagnÃ³stico profissional",
    year: "2026",
    accent: "violet",
    description:
      "Aplicativo Android em Kotlin para diagnÃ³stico de redes e gestÃ£o de atendimentos tÃ©cnicos, com coleta de evidÃªncias, histÃ³rico por cliente, operaÃ§Ã£o offline e sincronizaÃ§Ã£o com Supabase.",
    summary:
      "Um diagnÃ³stico tÃ©cnico padronizado, visual e documentado para redes Wiâ€‘Fi e Internet.",
    tags: ["Kotlin", "Android", "Supabase", "Wiâ€‘Fi", "IPv6", "GPS"],
    features: [
      "Wiâ€‘Fi 4/5/6/7, SSID, sinal e canais",
      "IPv4/IPv6, CGNAT, IP e Link Speed",
      "Scanner e identificaÃ§Ã£o de dispositivos",
      "AnÃ¡lise de portas e cobertura por cÃ´modo",
      "Download/upload, ping e jitter",
      "ComparaÃ§Ã£o antes/depois e com o plano contratado",
      "Clientes, visitas, histÃ³rico tÃ©cnico, fotos e assinaturas",
      "RelatÃ³rios PDF, geolocalizaÃ§Ã£o e NetVision Score",
      "Supabase Auth/Storage e fila offline",
    ],
    url: "",
    repository: "",
    cover: "/projects/netvision/score.webp",
    images: [
      "/projects/netvision/login.webp",
      "/projects/netvision/score.webp",
      "/projects/netvision/visit.webp",
      "/projects/netvision/tools.webp",
      "/projects/netvision/speed.webp",
    ],
  },
  {
    slug: "academia-facil",
    name: "Academia FÃ¡cil",
    shortName: "Academia FÃ¡cil",
    category: "SaaS â€¢ GestÃ£o â€¢ AutomaÃ§Ã£o",
    year: "2026",
    accent: "green",
    description:
      "SaaS para academias de artes marciais, com administraÃ§Ã£o de alunos, planos, turmas, financeiro, cobranÃ§as, presenÃ§a, relatÃ³rios e comunicaÃ§Ã£o via WhatsApp.",
    summary: "GestÃ£o centralizada para simplificar a rotina administrativa de academias.",
    tags: ["GestÃ£o", "AutomaÃ§Ã£o", "Web", "Banco de dados"],
    features: [
      "GestÃ£o de alunos, planos e turmas",
      "Financeiro, cobranÃ§as e presenÃ§a",
      "RelatÃ³rios administrativos",
      "ComunicaÃ§Ã£o via WhatsApp",
    ],
    url: "https://academiafacil.vercel.app/",
    repository: "",
    cover: "",
    images: [],
  },
  {
    slug: "festa-do-rosario",
    name: "Portal Oficial da Festa do RosÃ¡rio de Estrela do IndaiÃ¡",
    shortName: "Festa do RosÃ¡rio",
    category: "Web â€¢ HistÃ³ria â€¢ Cultura",
    year: "2026",
    accent: "cyan",
    description:
      "Portal institucional completo para preservar e divulgar a histÃ³ria da celebraÃ§Ã£o, com arquitetura de conteÃºdo, pÃ¡ginas temÃ¡ticas e experiÃªncia responsiva.",
    summary: "Tecnologia a serviÃ§o da preservaÃ§Ã£o da memÃ³ria cultural de Estrela do IndaiÃ¡.",
    tags: ["HTML", "CSS", "JavaScript", "ConteÃºdo histÃ³rico"],
    features: [
      "Arquitetura de conteÃºdo histÃ³rico",
      "PÃ¡ginas temÃ¡ticas e navegaÃ§Ã£o responsiva",
      "ApresentaÃ§Ã£o institucional da Festa do RosÃ¡rio e da Congada",
      "Projeto voltado Ã  preservaÃ§Ã£o e divulgaÃ§Ã£o da memÃ³ria local",
    ],
    url: "https://www.festadorosarioestrela.com.br/",
    repository: "",
    cover: "",
    images: [],
  },
  {
    slug: "monitor-de-ping",
    name: "Monitor de Ping",
    shortName: "Monitor de Ping",
    category: "Redes â€¢ Monitoramento â€¢ DiagnÃ³stico",
    year: "2026",
    accent: "amber",
    description:
      "SoluÃ§Ã£o de monitoramento para verificar conectividade, acompanhar latÃªncia e facilitar a identificaÃ§Ã£o de falhas e instabilidades de rede.",
    summary: "Visibilidade rÃ¡pida sobre disponibilidade e comportamento da conexÃ£o.",
    tags: ["Redes", "Monitoramento", "DiagnÃ³stico"],
    features: [
      "VerificaÃ§Ã£o de conectividade",
      "Acompanhamento de latÃªncia",
      "Apoio Ã  identificaÃ§Ã£o de falhas e instabilidades",
    ],
    url: "",
    repository: "",
    cover: "",
    images: [],
  },
];

export const experience = [
  {
    role: "Infraestrutura e Suporte de Redes",
    company: "IndaNet Fibra",
    period: "2020 â€” Atual",
    description:
      "InstalaÃ§Ã£o, configuraÃ§Ã£o, manutenÃ§Ã£o e diagnÃ³stico de redes em ambiente de provedor. AtuaÃ§Ã£o com MikroTik, PPPoE, VPN, Wiâ€‘Fi, IPv4/IPv6, ONU FiberHome, roteadores Huawei, TPâ€‘Link e Intelbras, alÃ©m de monitoramento e suporte tÃ©cnico.",
  },
  {
    role: "Infraestrutura e Suporte de Redes",
    company: "Estrela do IndaiÃ¡ TelecomunicaÃ§Ãµes Ltda.",
    period: "2013 â€” 2020",
    description:
      "InstalaÃ§Ã£o e manutenÃ§Ã£o de equipamentos e infraestrutura de redes, configuraÃ§Ã£o de roteadores, suporte tÃ©cnico, diagnÃ³stico de falhas de conectividade e apoio Ã  expansÃ£o dos serviÃ§os do provedor.",
  },
];

export const education = [
  { course: "CiÃªncia da ComputaÃ§Ã£o", institution: "EstÃ¡cio", period: "ConclusÃ£o em 2025" },
  { course: "Defesa CibernÃ©tica", institution: "EstÃ¡cio", period: "ConclusÃ£o em 2025" },
];

export const techGroups = [
  {
    number: "01",
    title: "Redes & Infra",
    items: ["MikroTik", "TCP/IP", "IPv4/IPv6", "PPPoE", "VPN", "Wiâ€‘Fi", "FTTH", "NAT", "DHCP", "RDP"],
  },
  {
    number: "02",
    title: "Sistemas & Servidores",
    items: ["Linux", "Windows", "Windows Server", "Monitoramento", "DiagnÃ³stico"],
  },
  {
    number: "03",
    title: "Desenvolvimento",
    items: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Java", "Kotlin", "Android", "Node.js / npm"],
  },
  {
    number: "04",
    title: "Dados & Entrega",
    items: ["Supabase Auth / Storage", "Git", "GitHub", "Vercel", "Android Studio", "Gradle", "VS Code", "GeolocalizaÃ§Ã£o", "RelatÃ³rios PDF"],
  },
];


