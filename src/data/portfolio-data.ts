export type Locale = 'en-US' | 'pt-BR';

export type ThemePreference = 'system' | 'light' | 'dark';

export type Metric = {
  label: string;
  value: string;
};

export type Impact = {
  title: string;
  description: string;
  result: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Recommendation = {
  name: string;
  role: string;
  relation: string;
  quote: string;
};

export type PortfolioLabels = {
  navigation: {
    impact: string;
    recommendations: string;
    experience: string;
    skills: string;
    contact: string;
    resume: string;
  };
  hero: {
    headlineAccent: string;
    headlineBase: string;
    primaryCta: string;
    secondaryCta: string;
  };
  sections: {
    impactTag: string;
    impactTitle: string;
    recommendationsTag: string;
    recommendationsTitle: string;
    recommendationsSource: string;
    experienceTag: string;
    experienceTitle: string;
    skillsTag: string;
    skillsTitle: string;
    languagesTag: string;
    contactTag: string;
    contactTitle: string;
    contactSummary: string;
  };
  contacts: {
    whatsapp: string;
    linkedIn: string;
    github: string;
    email: string;
    phone: string;
  };
  controls: {
    languageAriaLabel: string;
    themeAriaLabel: string;
    locale: {
      enUS: string;
      ptBR: string;
    };
    theme: {
      system: string;
      light: string;
      dark: string;
    };
  };
};

export type PortfolioLocaleData = {
  person: {
    name: string;
    role: string;
    location: string;
    tagline: string;
  };
  summary: string;
  metrics: Metric[];
  impact: Impact[];
  recommendations: Recommendation[];
  experiences: Experience[];
  skills: SkillGroup[];
  languages: string[];
  contacts: {
    email?: string;
    phone?: string;
    github?: string;
    linkedin: string;
    whatsapp?: string;
  };
  labels: PortfolioLabels;
};

export const defaultLocale: Locale = 'en-US';

export const localeOptions: Array<{ value: Locale; short: string }> = [
  { value: 'en-US', short: 'EN' },
  { value: 'pt-BR', short: 'PT' },
];

export const themeOptions: Array<{ value: ThemePreference }> = [
  { value: 'system' },
  { value: 'light' },
  { value: 'dark' },
];

const sharedContacts = {
  phone: '+55 54 99133-2950',
  email: 'gustavo_badalotti@hotmail.com',
  github: 'https://github.com/gutobadalotti',
  linkedin: 'https://www.linkedin.com/in/gustavo-badalotti-80b191153/',
  whatsapp: 'https://wa.me/5554991332950',
};

const experiencesEn: Experience[] = [
  {
    company: 'Nursa',
    role: 'Database Engineer / SQL Developer',
    period: '2022 - Present',
    location: 'Brazil',
    summary:
      'Managing and optimizing PostgreSQL and AlloyDB production workloads with emphasis on low latency, reliability, and incident readiness.',
    highlights: [
      'Reduced execution time of critical queries by up to 70% through execution plan analysis, refactoring, and indexing strategy redesign.',
      'Designed logical replication flows with near real-time consistency and continuous lag monitoring.',
      'Built Python ETL pipelines integrating millions of PostgreSQL records into Elasticsearch.',
      'Created Datadog dashboards and alerts for replication behavior and database performance.',
      'Acted directly in production incident investigation, mitigation, and long-term stability improvements.',
    ],
    stack: [
      'PostgreSQL',
      'AlloyDB',
      'CloudSQL',
      'Python',
      'ETL',
      'Elasticsearch',
      'Datadog',
      'GCP',
    ],
  },
  {
    company: 'ECS Inovacao',
    role: 'Database Developer',
    period: '2021 - 2022',
    location: 'Brazil',
    summary:
      'Maintained enterprise SQL Server environments with focus on stability, automation, and query performance for reporting workloads.',
    highlights: [
      'Developed and maintained T-SQL procedures for business-critical data operations.',
      'Improved reporting performance with targeted query and schema-level optimizations.',
      'Expanded automation routines to increase database consistency and operational predictability.',
    ],
    stack: ['SQL Server', 'T-SQL', 'Automation', 'Performance Tuning'],
  },
  {
    company: 'System Sistemas de Gestao',
    role: 'Software Developer',
    period: '2017 - 2021',
    location: 'Brazil',
    summary:
      'Delivered ERP features and reporting routines in Delphi and SQL Server, supporting day-to-day performance and troubleshooting in production environments.',
    highlights: [
      'Implemented ERP modules connected to transactional SQL Server workloads.',
      'Designed reporting queries and integration routines for cross-system data usage.',
      'Provided direct database troubleshooting and performance support for production teams.',
    ],
    stack: ['Delphi', 'SQL Server', 'ERP', 'Data Integration'],
  },
];

const experiencesPt: Experience[] = [
  {
    company: 'Nursa',
    role: 'Database Engineer / SQL Developer',
    period: '2022 - Atual',
    location: 'Brasil',
    summary:
      'Atuação na gestão e otimização de ambientes produtivos PostgreSQL e AlloyDB com foco em baixa latência, confiabilidade e resposta a incidentes.',
    highlights: [
      'Redução de até 70% no tempo de execução de queries críticas por meio de análise de planos, refatoração e redesenho de índices.',
      'Desenho de fluxos de replicação lógica com consistência quase em tempo real e monitoramento contínuo de lag.',
      'Construção de pipelines ETL em Python integrando milhões de registros do PostgreSQL ao Elasticsearch.',
      'Criação de dashboards e alertas no Datadog para acompanhar replicação e performance.',
      'Participação ativa na investigação, mitigação e estabilização de incidentes de produção.',
    ],
    stack: [
      'PostgreSQL',
      'AlloyDB',
      'CloudSQL',
      'Python',
      'ETL',
      'Elasticsearch',
      'Datadog',
      'GCP',
    ],
  },
  {
    company: 'ECS Inovacao',
    role: 'Database Developer',
    period: '2021 - 2022',
    location: 'Brasil',
    summary:
      'Manutenção de ambientes corporativos SQL Server com foco em estabilidade, automação e performance de consultas para relatórios.',
    highlights: [
      'Desenvolvimento e manutenção de procedures T-SQL para operações de dados críticas.',
      'Melhoria de performance de relatórios com otimizações de query e estrutura de banco.',
      'Evolução de rotinas de automação para aumentar consistência e previsibilidade operacional.',
    ],
    stack: ['SQL Server', 'T-SQL', 'Automacao', 'Performance Tuning'],
  },
  {
    company: 'System Sistemas de Gestao',
    role: 'Software Developer',
    period: '2017 - 2021',
    location: 'Brasil',
    summary:
      'Desenvolvimento de funcionalidades ERP e rotinas de relatorio em Delphi e SQL Server, com suporte direto a performance e troubleshooting em producao.',
    highlights: [
      'Implementacao de modulos ERP conectados a cargas transacionais em SQL Server.',
      'Desenho de queries de relatorio e rotinas de integracao entre sistemas.',
      'Suporte direto na analise de problemas e melhoria de desempenho em banco de dados.',
    ],
    stack: ['Delphi', 'SQL Server', 'ERP', 'Integracao de Dados'],
  },
];

const recommendationsEn: Recommendation[] = [
  {
    name: 'Query Optimization Initiative',
    role: 'Performance Engineering',
    relation: 'Execution Plans • Indexing • Statistics',
    quote:
      'Investigated high-cost plans, identified missing and inefficient indexes, and refactored critical SQL paths to lower latency and improve overall system responsiveness.',
  },
  {
    name: 'Logical Replication Architecture',
    role: 'Data Infrastructure',
    relation: 'Low-Latency Replication • Reliability',
    quote:
      'Implemented logical replication with sub-second targets, maintaining near real-time data consistency while monitoring lag and failure scenarios in production.',
  },
  {
    name: 'PostgreSQL to Elasticsearch Pipeline',
    role: 'ETL & Search Infrastructure',
    relation: 'Python ETL • Custom Mappings',
    quote:
      'Designed extraction queries, built Python transformation layers, and indexed structured data into Elasticsearch to improve search capabilities and query performance.',
  },
  {
    name: 'Production Incident Playbook',
    role: 'Troubleshooting & Recovery',
    relation: 'Lock Analysis • Plan Regression • Lag Triage',
    quote:
      'Applied a structured debugging approach for degradation incidents, including lock and blocking analysis, plan regression checks, statistics recalibration, and replication lag mitigation.',
  },
];

const recommendationsPt: Recommendation[] = [
  {
    name: 'Iniciativa de Otimizacao de Queries',
    role: 'Engenharia de Performance',
    relation: 'Planos de Execucao • Indexacao • Estatisticas',
    quote:
      'Investiguei planos de alto custo, identifiquei indices ausentes ou ineficientes e refatorei caminhos SQL criticos para reduzir latencia e melhorar a responsividade do sistema.',
  },
  {
    name: 'Arquitetura de Replicacao Logica',
    role: 'Infraestrutura de Dados',
    relation: 'Replicacao de Baixa Latencia • Confiabilidade',
    quote:
      'Implementei replicacao logica com alvo sub-segundo, mantendo consistencia quase em tempo real e monitorando lag e cenarios de falha em producao.',
  },
  {
    name: 'Pipeline PostgreSQL para Elasticsearch',
    role: 'ETL e Infra de Busca',
    relation: 'ETL em Python • Mapeamentos Customizados',
    quote:
      'Desenhei queries de extracao, construi a camada de transformacao em Python e indexei dados estruturados no Elasticsearch para melhorar capacidade e performance de busca.',
  },
  {
    name: 'Playbook de Incidentes em Producao',
    role: 'Troubleshooting e Recuperacao',
    relation: 'Locks • Regressao de Plano • Lag',
    quote:
      'Apliquei uma abordagem estruturada de debug para incidentes de degradacao, cobrindo analise de lock e bloqueio, regressao de plano, recalibracao de estatisticas e mitigacao de lag.',
  },
];

export const portfolioDataByLocale: Record<Locale, PortfolioLocaleData> = {
  'en-US': {
    person: {
      name: 'Gustavo Badalotti',
      role: 'Database Engineer - PostgreSQL & Performance Specialist',
      location: 'Brazil',
      tagline:
        'I design, optimize and scale production-grade database systems focused on performance, reliability and low-latency data pipelines.',
    },
    summary:
      'Database Engineer with 5+ years in relational databases, specialized in PostgreSQL performance tuning and query optimization. Hands-on with AlloyDB and CloudSQL on GCP, with strong focus on execution plan analysis, indexing strategy, statistics tuning, logical replication, and production reliability.',
    metrics: [
      { value: '5+ years', label: 'Relational database engineering experience' },
      {
        value: '70%',
        label: 'Reduction in critical query execution time',
      },
      {
        value: '<1s',
        label: 'Logical replication latency target in production',
      },
      {
        value: 'Millions',
        label: 'PostgreSQL records processed through ETL to Elasticsearch',
      },
    ],
    impact: [
      {
        title: 'Database Performance Engineering',
        description:
          'Deep execution plan analysis, SQL refactoring, index strategy redesign, scan-path optimization, statistics tuning, and lock/deadlock diagnostics.',
        result:
          'Lower latency, more predictable throughput, and faster query paths in production workloads.',
      },
      {
        title: 'Data Infrastructure',
        description:
          'Design of logical replication flows, failover-aware data topology, and Python ETL services connecting PostgreSQL and Elasticsearch.',
        result:
          'Reliable, low-latency data movement with consistent structures for downstream search and analytics.',
      },
      {
        title: 'Observability and Monitoring',
        description:
          'Datadog dashboards and alerts for replication lag, slow query behavior, and performance degradation signals.',
        result:
          'Faster anomaly detection and tighter feedback loops for production database operations.',
      },
      {
        title: 'Cloud Databases on GCP',
        description:
          'Hands-on operation with AlloyDB, CloudSQL, and BigQuery in production-grade managed environments.',
        result:
          'Balanced cost, scalability, and performance characteristics for cloud database workloads.',
      },
    ],
    recommendations: recommendationsEn,
    experiences: experiencesEn,
    skills: [
      {
        title: 'Databases',
        items: ['PostgreSQL', 'AlloyDB', 'CloudSQL', 'SQL Server'],
      },
      {
        title: 'Performance Engineering',
        items: [
          'Execution Plan Analysis',
          'Indexing Strategies',
          'Statistics Tuning',
          'Query Optimization',
          'Lock and Deadlock Analysis',
        ],
      },
      {
        title: 'Data Engineering',
        items: ['Python', 'ETL Pipelines', 'Elasticsearch'],
      },
      {
        title: 'Observability and Cloud',
        items: [
          'Datadog',
          'Monitoring and Alerts',
          'Google Cloud Platform',
          'BigQuery',
          'Production Incident Handling',
        ],
      },
    ],
    languages: ['Portuguese (Native)', 'English (Professional working proficiency)'],
    contacts: sharedContacts,
    labels: {
      navigation: {
        impact: 'What I Do',
        recommendations: 'Case Studies',
        experience: 'Experience',
        skills: 'Stack',
        contact: 'Contact',
        resume: 'Resume',
      },
      hero: {
        headlineAccent: 'PostgreSQL performance.',
        headlineBase: 'Reliability and scale in production.',
        primaryCta: 'Discuss a Project',
        secondaryCta: 'Download Resume',
      },
      sections: {
        impactTag: 'Core capabilities',
        impactTitle: 'How I engineer high-performance database systems',
        recommendationsTag: 'Selected work',
        recommendationsTitle: 'Case studies from production environments',
        recommendationsSource:
          'Examples based on real production initiatives focused on latency, consistency, and reliability.',
        experienceTag: 'Career timeline',
        experienceTitle: 'Hands-on database and data platform experience',
        skillsTag: 'Technical stack',
        skillsTitle: 'Database, performance, ETL, and cloud operations',
        languagesTag: 'Languages',
        contactTag: 'Open to opportunities',
        contactTitle: 'Let us optimize your data layer',
        contactSummary:
          'Available for Database Engineer and PostgreSQL performance roles, especially in production-critical and low-latency environments.',
      },
      contacts: {
        whatsapp: 'WhatsApp',
        linkedIn: 'LinkedIn Profile',
        github: 'GitHub',
        email: 'Email',
        phone: 'Phone',
      },
      controls: {
        languageAriaLabel: 'Select language',
        themeAriaLabel: 'Select theme',
        locale: {
          enUS: 'EN-US',
          ptBR: 'PT-BR',
        },
        theme: {
          system: 'Auto',
          light: 'Light',
          dark: 'Dark',
        },
      },
    },
  },
  'pt-BR': {
    person: {
      name: 'Gustavo Badalotti',
      role: 'Database Engineer - Especialista em PostgreSQL e Performance',
      location: 'Brasil',
      tagline:
        'Projeto, otimizo e escalo sistemas de banco de dados em producao com foco em performance, confiabilidade e pipelines de baixa latencia.',
    },
    summary:
      'Database Engineer com 5+ anos de experiencia em bancos relacionais, especializado em tuning de performance no PostgreSQL e otimizacao de queries. Atuacao pratica com AlloyDB e CloudSQL na GCP, com foco forte em analise de planos de execucao, estrategia de indices, ajuste de estatisticas, replicacao logica e confiabilidade em producao.',
    metrics: [
      {
        value: '5+ anos',
        label: 'Experiencia em engenharia de banco de dados relacional',
      },
      {
        value: '70%',
        label: 'Reducao no tempo de execucao de queries criticas',
      },
      {
        value: '<1s',
        label: 'Meta de latencia para replicacao logica em producao',
      },
      {
        value: 'Milhoes',
        label: 'Registros processados via ETL para Elasticsearch',
      },
    ],
    impact: [
      {
        title: 'Engenharia de Performance em Banco',
        description:
          'Analise profunda de planos de execucao, refatoracao SQL, redesenho de indices, otimizacao de scan path, tuning de estatisticas e diagnostico de lock/deadlock.',
        result:
          'Menor latencia, throughput mais previsivel e consultas mais eficientes em cargas de producao.',
      },
      {
        title: 'Infraestrutura de Dados',
        description:
          'Desenho de replicacao logica, topologias com suporte a failover e servicos ETL em Python integrando PostgreSQL com Elasticsearch.',
        result:
          'Movimentacao de dados confiavel e de baixa latencia para consumo operacional e busca.',
      },
      {
        title: 'Observabilidade e Monitoramento',
        description:
          'Dashboards e alertas no Datadog para lag de replicacao, consultas lentas e sinais de degradacao de performance.',
        result:
          'Deteccao mais rapida de anomalias e melhor tempo de resposta em operacoes de producao.',
      },
      {
        title: 'Banco Gerenciado na GCP',
        description:
          'Atuacao pratica com AlloyDB, CloudSQL e BigQuery em ambientes gerenciados de producao.',
        result:
          'Equilibrio entre custo, escalabilidade e performance em workloads de banco em nuvem.',
      },
    ],
    recommendations: recommendationsPt,
    experiences: experiencesPt,
    skills: [
      {
        title: 'Bancos de Dados',
        items: ['PostgreSQL', 'AlloyDB', 'CloudSQL', 'SQL Server'],
      },
      {
        title: 'Engenharia de Performance',
        items: [
          'Analise de Planos de Execucao',
          'Estrategias de Indexacao',
          'Ajuste de Estatisticas',
          'Otimizacao de Queries',
          'Analise de Lock e Deadlock',
        ],
      },
      {
        title: 'Engenharia de Dados',
        items: ['Python', 'Pipelines ETL', 'Elasticsearch'],
      },
      {
        title: 'Observabilidade e Cloud',
        items: [
          'Datadog',
          'Monitoramento e Alertas',
          'Google Cloud Platform',
          'BigQuery',
          'Tratativa de Incidentes em Producao',
        ],
      },
    ],
    languages: ['Portugues (Nativo)', 'Ingles (Profissional)'],
    contacts: sharedContacts,
    labels: {
      navigation: {
        impact: 'Atuacao',
        recommendations: 'Cases',
        experience: 'Experiencia',
        skills: 'Stack',
        contact: 'Contato',
        resume: 'Curriculo',
      },
      hero: {
        headlineAccent: 'Performance em PostgreSQL.',
        headlineBase: 'Confiabilidade e escala em producao.',
        primaryCta: 'Conversar sobre Projeto',
        secondaryCta: 'Baixar Curriculo',
      },
      sections: {
        impactTag: 'Capacidades principais',
        impactTitle: 'Como eu projeto bancos de dados de alta performance',
        recommendationsTag: 'Trabalhos selecionados',
        recommendationsTitle: 'Cases em ambientes reais de producao',
        recommendationsSource:
          'Exemplos baseados em iniciativas reais focadas em latencia, consistencia e confiabilidade.',
        experienceTag: 'Linha do tempo',
        experienceTitle: 'Experiencia pratica com banco e plataforma de dados',
        skillsTag: 'Stack tecnico',
        skillsTitle: 'Banco, performance, ETL e operacao em cloud',
        languagesTag: 'Idiomas',
        contactTag: 'Aberto a oportunidades',
        contactTitle: 'Vamos otimizar sua camada de dados',
        contactSummary:
          'Disponivel para oportunidades como Database Engineer com foco em PostgreSQL, performance e ambientes criticos de producao.',
      },
      contacts: {
        whatsapp: 'WhatsApp',
        linkedIn: 'Perfil no LinkedIn',
        github: 'GitHub',
        email: 'Email',
        phone: 'Telefone',
      },
      controls: {
        languageAriaLabel: 'Selecionar idioma',
        themeAriaLabel: 'Selecionar tema',
        locale: {
          enUS: 'EN-US',
          ptBR: 'PT-BR',
        },
        theme: {
          system: 'Auto',
          light: 'Claro',
          dark: 'Escuro',
        },
      },
    },
  },
};
