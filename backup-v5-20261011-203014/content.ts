export const profile = {
  name: "Anderson Ribeiro",
  role: "Analista de Redes e Infraestrutura | Desenvolvimento Web & Android",
  location: "Estrela do Indaiá - MG",
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
    category: "Gestão • Logística • Locações • Web",
    year: "2026",
    accent: "orange",
    description:
      "Plataforma para gestão de equipamentos e operações de obra, conectando clientes, locações, entregas, retiradas, motoristas, rotas, vistorias e controle operacional em um único fluxo.",
    summary:
      "Do escritório ao motorista em campo: uma operação organizada, rastreável e com evidências digitais.",
    tags: ["Gestão", "Logística", "Locações", "Web", "Android"],
    features: [
      "Gestão de equipamentos, clientes, locações e operações",
      "Aplicativo do motorista com rotas, checklist e status",
      "Fotos de entrega, comprovantes digitais e assinatura",
      "Vistorias 360° com fotos, avarias e histórico",
      "Mapa e rotas para acompanhamento da operação",
      "Equipe, perfis de acesso e permissões",
      "Controle financeiro e relatórios operacionais",
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
    category: "Android • Redes • Diagnóstico profissional",
    year: "2026",
    accent: "violet",
    description:
      "Aplicativo Android em Kotlin para diagnóstico de redes e gestão de atendimentos técnicos, com coleta de evidências, histórico por cliente, operação offline e sincronização com Supabase.",
    summary:
      "Um diagnóstico técnico padronizado, visual e documentado para redes Wi‑Fi e Internet.",
    tags: ["Kotlin", "Android", "Supabase", "Wi‑Fi", "IPv6", "GPS"],
    features: [
      "Wi‑Fi 4/5/6/7, SSID, sinal e canais",
      "IPv4/IPv6, CGNAT, IP e Link Speed",
      "Scanner e identificação de dispositivos",
      "Análise de portas e cobertura por cômodo",
      "Download/upload, ping e jitter",
      "Comparação antes/depois e com o plano contratado",
      "Clientes, visitas, histórico técnico, fotos e assinaturas",
      "Relatórios PDF, geolocalização e NetVision Score",
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
    name: "Academia Fácil",
    shortName: "Academia Fácil",
    category: "SaaS • Gestão • Automação",
    year: "2026",
    accent: "green",
    description:
      "SaaS para academias de artes marciais, com administração de alunos, planos, turmas, financeiro, cobranças, presença, relatórios e comunicação via WhatsApp.",
    summary: "Gestão centralizada para simplificar a rotina administrativa de academias.",
    tags: ["Gestão", "Automação", "Web", "Banco de dados"],
    features: [
      "Gestão de alunos, planos e turmas",
      "Financeiro, cobranças e presença",
      "Relatórios administrativos",
      "Comunicação via WhatsApp",
    ],
    url: "https://academiafacil.vercel.app/",
    repository: "",
    cover: "",
    images: [],
  },
  {
    slug: "festa-do-rosario",
    name: "Portal Oficial da Festa do Rosário de Estrela do Indaiá",
    shortName: "Festa do Rosário",
    category: "Web • História • Cultura",
    year: "2026",
    accent: "cyan",
    description:
      "Portal institucional completo para preservar e divulgar a história da celebração, com arquitetura de conteúdo, páginas temáticas e experiência responsiva.",
    summary: "Tecnologia a serviço da preservação da memória cultural de Estrela do Indaiá.",
    tags: ["HTML", "CSS", "JavaScript", "Conteúdo histórico"],
    features: [
      "Arquitetura de conteúdo histórico",
      "Páginas temáticas e navegação responsiva",
      "Apresentação institucional da Festa do Rosário e da Congada",
      "Projeto voltado à preservação e divulgação da memória local",
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
    category: "Redes • Monitoramento • Diagnóstico",
    year: "2026",
    accent: "amber",
    description:
      "Solução de monitoramento para verificar conectividade, acompanhar latência e facilitar a identificação de falhas e instabilidades de rede.",
    summary: "Visibilidade rápida sobre disponibilidade e comportamento da conexão.",
    tags: ["Redes", "Monitoramento", "Diagnóstico"],
    features: [
      "Verificação de conectividade",
      "Acompanhamento de latência",
      "Apoio à identificação de falhas e instabilidades",
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
    period: "2020 — Atual",
    description:
      "Instalação, configuração, manutenção e diagnóstico de redes em ambiente de provedor. Atuação com MikroTik, PPPoE, VPN, Wi‑Fi, IPv4/IPv6, ONU FiberHome, roteadores Huawei, TP‑Link e Intelbras, além de monitoramento e suporte técnico.",
  },
  {
    role: "Infraestrutura e Suporte de Redes",
    company: "Estrela do Indaiá Telecomunicações Ltda.",
    period: "2013 — 2020",
    description:
      "Instalação e manutenção de equipamentos e infraestrutura de redes, configuração de roteadores, suporte técnico, diagnóstico de falhas de conectividade e apoio à expansão dos serviços do provedor.",
  },
];

export const education = [
  { course: "Ciência da Computação", institution: "Estácio", period: "Conclusão em 2025" },
  { course: "Defesa Cibernética", institution: "Estácio", period: "Conclusão em 2025" },
];

export const techGroups = [
  {
    number: "01",
    title: "Redes & Infra",
    items: ["MikroTik", "TCP/IP", "IPv4/IPv6", "PPPoE", "VPN", "Wi‑Fi", "FTTH", "NAT", "DHCP", "RDP"],
  },
  {
    number: "02",
    title: "Sistemas & Servidores",
    items: ["Linux", "Windows", "Windows Server", "Monitoramento", "Diagnóstico"],
  },
  {
    number: "03",
    title: "Desenvolvimento",
    items: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Java", "Kotlin", "Android", "Node.js / npm"],
  },
  {
    number: "04",
    title: "Dados & Entrega",
    items: ["Supabase Auth / Storage", "Git", "GitHub", "Vercel", "Android Studio", "Gradle", "VS Code", "Geolocalização", "Relatórios PDF"],
  },
];

