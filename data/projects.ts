import { ProjectItem } from '@/types/portfolio';

export const projectsData: ProjectItem[] = [
  {
    id: 'dejitalist',
    slug: 'dejitalist-saas',
    title: 'Dejitalist',
    tagline: {
      en: 'Multi-tenant e-commerce SaaS with merchant dashboard and autonomous storefronts.',
      fr: 'Plateforme SaaS e-commerce multi-tenant avec tableau de bord marchand et vitrines autonomes.',
    },
    pitch: {
      en: 'Multi-tenant e-commerce SaaS with merchant dashboard and autonomous storefronts.',
      fr: 'Plateforme SaaS e-commerce multi-tenant avec tableau de bord marchand et vitrines autonomes.',
    },
    description: {
      en: 'Multi-tenant e-commerce SaaS engineered with an isolated merchant back-office and dedicated public storefront per vendor. Features Turkish payment gateways, multi-channel marketplace integrations, unified order management, and KVKK regulatory compliance.',
      fr: 'SaaS e-commerce multi-tenant conçu avec un espace marchand cloisonné et une vitrine publique dédiée par boutique. Intègre les passerelles de paiement turques, les places de marché majeures, une boîte de commande unifiée et la conformité KVKK.',
    },
    role: {
      en: 'Full-Stack & DevOps Engineer',
      fr: 'Ingénieure Full-Stack & DevOps',
    },
    status: 'Live & Operational',
    categories: ['fullstack', 'cloud'],
    category: 'fullstack',
    featured: true,
    featuredRank: 1,
    period: 'Jul – Aug 2026',
    techStack: [
      'NestJS',
      'Next.js',
      'Prisma',
      'PostgreSQL',
      'Turborepo (pnpm)',
      'TypeScript',
      'Vercel',
      'Docker',
    ],
    tags: [
      'NestJS',
      'Next.js',
      'Prisma',
      'PostgreSQL',
      'Turborepo',
      'TypeScript',
      'Vercel',
      'Docker',
    ],
    highlights: {
      en: [
        'Multi-tenant architecture isolating merchant dashboard workspaces and individual store fronts',
        'Direct payment processing (iyzico, PayTR) and marketplace sync (Trendyol, Hepsiburada, N11)',
        'Unified order inbox, automated shipping integration, email notifications, and KVKK privacy compliance',
      ],
      fr: [
        'Architecture multi-tenant isolant l’espace d’administration marchand et les vitrines publiques',
        'Passerelles de paiement (iyzico, PayTR) et synchronisation marketplace (Trendyol, Hepsiburada, N11)',
        'Boîte de réception unifiée, intégration transporteurs, notifications e-mail et conformité KVKK',
      ],
    },
    links: {
      live: 'https://dejitalist.vercel.app',
      repo: 'https://github.com/Ranim-Abidi/dejitalist',
      caseStudy: '/projects/dejitalist-saas',
    },
    liveUrl: 'https://dejitalist.vercel.app',
    healthEndpoint: 'https://dejitalist.vercel.app',
    githubUrl: 'https://github.com/Ranim-Abidi/dejitalist',
    cover: '/projects/dejitalist.webp',
    screenshots: ['/projects/dejitalist.webp'],
    relatedSkillIds: ['nextjs', 'typescript', 'postgresql', 'docker', 'vercel', 'tailwind'],
    problem: {
      en: 'Independent merchants struggled with fragmented tools for billing, order management, and multi-channel catalogs across Turkish marketplaces.',
      fr: 'Les commerçants indépendants perdaient du temps sur des outils disparates pour la facturation, les commandes et les catalogues multi-canaux.',
    },
    solution: {
      en: 'Architected a monorepo multi-tenant cloud platform featuring sub-domain tenant routing, instant checkout, and an operational merchant dashboard.',
      fr: 'Conception d’une solution cloud multi-tenant en monorepo avec routage par sous-domaine, panier instantané et tableau de bord marchand.',
    },
    impact: {
      en: 'Sub-100ms API latency with serverless PostgreSQL; supports seamless scaling across concurrent merchant storefronts with unified order dispatching.',
      fr: 'Latence API inférieure à 100ms sur PostgreSQL serverless ; passage à l’échelle fluide pour de multiples boutiques avec gestion unifiée.',
    },
    caseStudy: {
      overview: {
        en: 'Dejitalist was built as a full-scale multi-tenant commerce engine tailored to modern digital retailers. Each merchant receives an isolated workspace, customizable product storefront, automated checkout flow, and live inventory auditing.',
        fr: 'Dejitalist est un moteur e-commerce multi-locataire complet conçu pour les commerçants modernes. Chaque boutique bénéficie d’un espace cloisonné, d’une vitrine personnalisable et d’une gestion des stocks en temps réel.',
      },
      architectureDiagram: `
+-----------------------------------------------------------+
|               Client Requests / Subdomains                |
|           store1.dejitalist.com | store2...               |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|              Vercel Edge Network / Middleware             |
|          Tenant Resolution, SSL & Rate Limiting           |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|               Turborepo (pnpm) Monorepo Core              |
|        Next.js Storefront  |  NestJS Core Backend         |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|               Prisma ORM & Connection Pool                |
|         Row-Level Security & Multi-Channel APIs           |
|         (iyzico, PayTR, Trendyol, Hepsiburada, N11)       |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|           PostgreSQL Database (Multi-Tenant Scoped)       |
+-----------------------------------------------------------+
      `,
      architectureNotes: {
        en: [
          'Turborepo monorepo orchestrated with pnpm sharing TypeScript models between Next.js and NestJS.',
          'Tenant isolation via Edge middleware hostname resolution and scoped database queries.',
          'Secure JWT authentication, KVKK data governance, and automated shipping/email webhooks.',
          'Payment integrations with iyzico and PayTR plus marketplace APIs (Trendyol, Hepsiburada, N11).',
        ],
        fr: [
          'Monorepo Turborepo avec pnpm partageant les schémas TypeScript entre Next.js et NestJS.',
          'Isolation des locataires par détection de sous-domaine au niveau du middleware Edge.',
          'Authentification JWT sécurisée, conformité réglementaire KVKK et webhooks d’expédition/e-mails.',
          'Intégration des paiements iyzico/PayTR et des APIs de marketplaces (Trendyol, Hepsiburada, N11).',
        ],
      },
      keyFeatures: {
        en: [
          'Autonomous merchant storefront with instant subdomain provisioning',
          'Unified order inbox synchronizing multi-channel sales from external marketplaces',
          'Payment gateways integration (iyzico, PayTR) and automated customer receipt emails',
          'KVKK-compliant data retention and auditing controls',
        ],
        fr: [
          'Vitrines autonomes avec attribution instantanée de sous-domaine',
          'Boîte de commande unifiée synchronisant les ventes multicanales des places de marché',
          'Intégration des passerelles de paiement (iyzico, PayTR) et e-mails transactionnels',
          'Contrôles d’audit et de rétention des données conformes aux normes KVKK',
        ],
      },
      technologies: [
        'NestJS',
        'Next.js',
        'Prisma',
        'PostgreSQL',
        'Turborepo',
        'TypeScript',
        'Vercel',
        'Docker',
      ],
      metrics: {
        en: [
          'Sub-100ms API response time across merchant endpoints',
          'Unified management across 3 major marketplace channels',
          'Zero cross-tenant data leakage',
        ],
        fr: [
          'Temps de réponse API inférieur à 100ms sur les endpoints marchands',
          'Gestion centralisée sur 3 places de marché majeures',
          'Zéro fuite de données inter-locataires',
        ],
      },
      challenges: {
        en: [
          'Synchronizing external marketplace webhook structures into one normalized order schema.',
          'Ensuring strict data isolation for multi-tenant users without incurring database provisioning delays.',
        ],
        fr: [
          'Normalisation des structures de webhooks hétérogènes des marketplaces dans un modèle de commande unique.',
          'Garantie d’étanchéité stricte des données locataires sans surcoût de déploiement de bases séparées.',
        ],
      },
      lessonsLearned: {
        en: [
          'Monorepos with Turborepo significantly speed up type consistency between client and microservice APIs.',
          'Edge middleware routing simplifies multi-tenant domain dispatching before hitting server logic.',
        ],
        fr: [
          'Un monorepo avec Turborepo accélère le partage de types stricts entre le client et l’API backend.',
          'Le routage par middleware Edge simplifie l’aiguillage multi-tenant avant la logique serveur.',
        ],
      },
    },
  },

  {
    id: 'dash-aiesec',
    slug: 'dash-analytics-hub',
    title: 'DASH (Data Analytics System Hub)',
    tagline: {
      en: 'Centralized analytics and performance intelligence platform for AIESEC in Tunisia.',
      fr: 'Plateforme décisionnelle d’analyse opérationnelle pour le réseau AIESEC en Tunisie.',
    },
    pitch: {
      en: 'Centralized analytics and performance intelligence platform for AIESEC in Tunisia.',
      fr: 'Plateforme décisionnelle d’analyse opérationnelle pour le réseau AIESEC en Tunisie.',
    },
    description: {
      en: 'Integrated analytics platform connecting directly to AIESEC’s global EXPA platform via OAuth 2.0. Serves 600+ members in Tunisia and 2,000+ internationally with public rankings, a Global Rank Dashboard, and personalized widget layouts, engineered as an end-of-study project with sole DevOps ownership.',
      fr: 'Plateforme analytique intégrée connectée à la plateforme mondiale EXPA d’AIESEC via OAuth 2.0. Sert plus de 600 membres en Tunisie et 2 000+ à l’international via des classements publics, un Global Rank Dashboard et des widgets personnalisés, réalisée en projet de fin d’études en tant qu’unique ingénieure DevOps.',
    },
    role: {
      en: 'Sole DevOps Engineer & Full-Stack Developer',
      fr: 'Ingénieure DevOps Unique & Développeuse Full-Stack',
    },
    status: 'Live & Operational',
    categories: ['cloud', 'fullstack', 'data'],
    category: 'cloud',
    featured: true,
    featuredRank: 2,
    period: 'Feb – Jul 2026',
    techStack: [
      'React',
      'Node.js',
      'MongoDB',
      'Chart.js',
      'Tailwind CSS',
      'GitHub Actions',
      'Vercel',
      'Docker',
    ],
    tags: [
      'React',
      'Node.js',
      'MongoDB',
      'Chart.js',
      'Tailwind CSS',
      'GitHub Actions',
      'Vercel',
      'Docker',
    ],
    highlights: {
      en: [
        'Integrated with global EXPA API via OAuth 2.0: public rankings, Global Rank, and custom widget dashboard',
        'End-of-study project as sole DevOps engineer architecting the CI/CD pipeline and continuous delivery to Vercel',
        'Currently serves 600+ members across Tunisia and 2,000+ users across the international network',
      ],
      fr: [
        'Intégration à l’API mondiale EXPA via OAuth 2.0 : classements publics, Global Rank et widgets sur mesure',
        'Projet de fin d’études en tant qu’unique ingénieure DevOps : pipeline CI/CD et déploiement continu Vercel',
        'Utilisé par plus de 600 membres en Tunisie et plus de 2 000 utilisateurs dans le réseau international',
      ],
    },
    links: {
      live: 'https://dash-aiesec.vercel.app',
      repo: 'https://github.com/Ranim-Abidi/dash-analytics',
      caseStudy: '/projects/dash-analytics-hub',
    },
    liveUrl: 'https://dash-aiesec.vercel.app',
    healthEndpoint: 'https://dash-aiesec.vercel.app',
    githubUrl: 'https://github.com/Ranim-Abidi/dash-analytics',
    cover: '/projects/dash.webp',
    screenshots: ['/projects/dash.webp'],
    relatedSkillIds: ['nodejs', 'react', 'docker', 'cicd', 'data-pipeline', 'tailwind'],
    problem: {
      en: 'National entity leadership faced manual reporting cycles and delayed visibility over exchange performance across local and international committees.',
      fr: 'La direction nationale manquait de visibilité temps réel sur les flux d’échanges répartis sur les différents comités locaux et internationaux.',
    },
    solution: {
      en: 'Engineered an end-to-end analytics platform with automated OAuth 2.0 ingestion from EXPA, personalized dashboards, and automated CI/CD deployment.',
      fr: 'Développement d’une plateforme analytique complète avec ingestion automatisée OAuth 2.0 depuis EXPA, tableaux de bord personnalisés et CI/CD automatisé.',
    },
    impact: {
      en: 'Empowers 600+ Tunisian members and 2,000+ international users with real-time rankings and transparent data tracking without manual intervention.',
      fr: 'Permet à 600+ membres en Tunisie et 2 000+ utilisateurs internationaux de suivre les classements en temps réel sans intervention manuelle.',
    },
    caseStudy: {
      overview: {
        en: 'DASH was conceived as a graduation-level system addressing operational transparency across international volunteering exchanges. It bridges data collection, audit validation, and executive KPI forecasting for AIESEC Tunisia and international committees.',
        fr: 'DASH a été conçu pour résoudre le manque de transparence opérationnelle dans la gestion des échanges internationaux, alliant ingestion de données, audit et prévisions des indicateurs clés.',
      },
      architectureDiagram: `
+-----------------------------------------------------------+
|       600+ Tunisia Members & 2,000+ Global Users          |
|         Public Leaderboards & Personalized Widgets        |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|          React Single-Page Application (Tailwind)         |
|              Interactive Chart.js Visualizations          |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|          Node.js API & OAuth 2.0 Gateway to EXPA          |
|          Session Management, Caching, & Role RBAC         |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|         GitHub Actions Pipeline (Lint, Test, Deploy)      |
|           Continuous Deployment to Vercel & Docker        |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                MongoDB Document Database                  |
+-----------------------------------------------------------+
      `,
      architectureNotes: {
        en: [
          'OAuth 2.0 handshake with AIESEC global EXPA core API for secure identity and operational data sync.',
          'GitHub Actions workflow automating linting, tests, build verification, security audit, and Vercel release.',
          'Containerized local development and staging environments with Docker Compose.',
          'Dynamic widget dashboard allowing members to customize their individual tracking views.',
        ],
        fr: [
          'Protocole OAuth 2.0 avec l’API mondiale EXPA pour la synchronisation sécurisée des données opérationnelles.',
          'Workflow GitHub Actions automatisant linting, tests, build, audit de sécurité et déploiement Vercel.',
          'Environnements locaux et de recette conteneurisés avec Docker Compose.',
          'Tableau de bord modulaire permettant aux membres de configurer leurs indicateurs personnalisés.',
        ],
      },
      keyFeatures: {
        en: [
          'Public rankings and national Global Rank Dashboard',
          'Personalized widget layouts tailored to individual member responsibilities',
          'Real-time exchange statistics synchronizing directly with EXPA',
          'Automated CI/CD with continuous delivery to Vercel and zero downtime',
        ],
        fr: [
          'Classements publics et tableau de bord national Global Rank',
          'Agencement de widgets personnalisés adapté aux responsabilités de chaque membre',
          'Statistiques d’échanges en temps réel synchronisées avec EXPA',
          'CI/CD automatisé avec déploiement continu sur Vercel sans interruption',
        ],
      },
      technologies: [
        'React',
        'Node.js',
        'MongoDB',
        'Chart.js',
        'Tailwind CSS',
        'GitHub Actions',
        'Vercel',
        'Docker',
      ],
      metrics: {
        en: [
          '600+ active members in Tunisia',
          '2,000+ users across international entities',
          'Automated CI/CD pipeline deployed on every commit',
        ],
        fr: [
          'Plus de 600 membres actifs en Tunisie',
          'Plus de 2 000 utilisateurs dans le réseau international',
          'Pipeline CI/CD automatisé déployé à chaque commit',
        ],
      },
      challenges: {
        en: [
          'Managing rate limits and payload transformations from the external EXPA GraphQL/REST endpoints.',
          'Ensuring responsive charting performance on high-volume multi-year historical datasets.',
        ],
        fr: [
          'Gestion des limites de requêtes et de la transformation des données en provenance des APIs EXPA.',
          'Garantie de performances fluides pour les graphiques sur des historiques volumineux.',
        ],
      },
      lessonsLearned: {
        en: [
          'Decoupling ingestion workers from front-facing APIs guarantees low UI latency even during upstream syncs.',
          'Strict CI/CD automated gates prevent regression bugs in production voluntary operations.',
        ],
        fr: [
          'Découpler l’ingestion de l’API utilisateur garantit la réactivité de l’interface même lors des synchronisations.',
          'Des contrôles stricts en CI/CD éliminent les régressions en production.',
        ],
      },
    },
  },

  {
    id: 'matchy-khedma',
    slug: 'matchy-khedma-cloud',
    title: 'Matchy Khedma (Cloud PI)',
    tagline: {
      en: 'Private cloud infrastructure & AI recruitment platform built on OpenStack and Kubernetes.',
      fr: 'Infrastructure cloud privé & plateforme de recrutement IA sous OpenStack et Kubernetes.',
    },
    pitch: {
      en: 'Private cloud infrastructure & AI recruitment platform built on OpenStack and Kubernetes.',
      fr: 'Infrastructure cloud privé & plateforme de recrutement IA sous OpenStack et Kubernetes.',
    },
    description: {
      en: 'Comprehensive private cloud and intelligent recruitment system built by an academic team of 7 for our Cloud Integrated Project (PI). Combines automated OpenStack provisioning, Kubernetes Helm orchestration, Prometheus/Grafana observability, and Azure IAM RBAC with an AI-driven recruitment portal.',
      fr: 'Système complet de cloud privé et plateforme de recrutement intelligent réalisé en équipe académique de 7 dans le cadre du Projet Intégré (PI) Cloud. Combine provisioning OpenStack automatisé, orchestration Helm Kubernetes, observabilité Prometheus/Grafana et Azure IAM avec un portail IA de recrutement.',
    },
    role: {
      en: 'Cloud & DevOps Architect (Team of 7)',
      fr: 'Architecte Cloud & DevOps (Équipe de 7)',
    },
    status: 'Academic',
    categories: ['cloud', 'fullstack', 'aiml'],
    category: 'cloud',
    featured: true,
    featuredRank: 3,
    period: '2025 – 2026',
    techStack: [
      'OpenStack',
      'Kubernetes',
      'Helm',
      'Terraform',
      'Ansible',
      'Prometheus',
      'Grafana',
      'GitHub Actions',
      'Azure IAM (RBAC)',
      'Angular',
      'Spring Boot',
      'MySQL',
    ],
    tags: [
      'OpenStack',
      'Kubernetes',
      'Helm',
      'Terraform',
      'Ansible',
      'Prometheus',
      'Grafana',
      'GitHub Actions',
      'Azure IAM',
      'Angular',
      'Spring Boot',
      'MySQL',
    ],
    highlights: {
      en: [
        'Automated OpenStack private cloud compute & networking via Terraform and Ansible configuration',
        'Kubernetes container orchestration with Helm releases, Prometheus monitoring, and Grafana dashboards',
        'AI job matching, ATS-optimized CV generation, interview simulation engine, and dedicated freelancer workspace',
      ],
      fr: [
        'Provisioning automatisé de cloud privé OpenStack via Terraform et configuration Ansible',
        'Orchestration conteneurisée Kubernetes via Helm, surveillance Prometheus et tableaux de bord Grafana',
        'Matching d’offres par IA, génération de CV optimisés ATS, simulateur d’entretiens et espace freelance',
      ],
    },
    links: {
      repo: 'https://github.com/Ranim-Abidi/matchy-khedma-cloud',
      caseStudy: '/projects/matchy-khedma-cloud',
    },
    githubUrl: 'https://github.com/Ranim-Abidi/matchy-khedma-cloud',
    cover: '/projects/gitops.webp',
    screenshots: ['/projects/gitops.webp'],
    relatedSkillIds: ['kubernetes', 'terraform', 'ansible', 'prometheus', 'docker', 'cicd'],
    problem: {
      en: 'Recruitment platforms need high availability and scalable compute while handling sensitive candidate dossiers with strict access isolation and AI matching workloads.',
      fr: 'Les plateformes de recrutement requièrent haute disponibilité et élasticité tout en protégeant les données candidats sensibles via un contrôle d’accès strict.',
    },
    solution: {
      en: 'Built an enterprise-grade private cloud on OpenStack automated through Terraform and Ansible, deploying containerized microservices to Kubernetes with Azure IAM RBAC.',
      fr: 'Conception d’un cloud privé d’entreprise sous OpenStack automatisé par Terraform et Ansible, avec déploiement Kubernetes et contrôle d’accès Azure IAM.',
    },
    impact: {
      en: 'High availability private cloud architecture providing automated cluster provisioning, active telemetry, and end-to-end recruitment intelligence.',
      fr: 'Architecture de cloud privé à haute disponibilité offrant un provisioning automatisé, une télémétrie active et des outils d’aide au recrutement par IA.',
    },
    caseStudy: {
      overview: {
        en: 'Matchy Khedma is an integrated cloud and recruitment platform designed by a team of 7 for our Cloud Integrated Project (PI). It merges private cloud infrastructure automation with an intelligent recruitment suite (job matching, ATS CV builder, interview simulation, freelancer module).',
        fr: 'Matchy Khedma est une plateforme intégrée de cloud privé et de recrutement conçue par une équipe de 7 pour notre Projet Intégré (PI) Cloud, combinant automatisation d’infrastructure et suite logicielle intelligente.',
      },
      architectureDiagram: `
+-----------------------------------------------------------+
|              Users: Candidates, Recruiters & Freelancers  |
|            Angular Client  |  Azure IAM RBAC Auth         |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|             Spring Boot Microservices & AI Matcher        |
|          ATS CV Engine | Interview Simulator | MySQL      |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                Kubernetes Cluster (Helm Managed)          |
|      Prometheus Observability  |  Grafana Dashboards      |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|           Terraform & Ansible Infrastructure as Code      |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|         OpenStack Private Cloud Infrastructure (HA)       |
|            Nova Compute | Neutron Network | Cinder        |
+-----------------------------+-----------------------------+
      `,
      architectureNotes: {
        en: [
          'OpenStack private cloud resources defined declaratively via Terraform and provisioned with Ansible playbooks.',
          'Kubernetes microservices deployments packaged into version-controlled Helm charts.',
          'Full observability pipeline with Prometheus metric scrapers and Grafana operational dashboards.',
          'Azure IAM enterprise directory integration enforcing granular Role-Based Access Control (RBAC).',
        ],
        fr: [
          'Ressources du cloud privé OpenStack déclarées avec Terraform et configurées par des playbooks Ansible.',
          'Déploiement des microservices Kubernetes packagé dans des charts Helm versionnés.',
          'Pipeline d’observabilité complet avec métriques Prometheus et tableaux de bord Grafana.',
          'Intégration d’Azure IAM pour un contrôle d’accès basé sur les rôles (RBAC) strict.',
        ],
      },
      keyFeatures: {
        en: [
          'High availability OpenStack compute and network topology',
          'Prometheus & Grafana infrastructure monitoring with custom alerting rules',
          'AI-powered job matching and candidate compatibility scoring',
          'ATS-optimized resume generator and virtual interview simulation engine',
        ],
        fr: [
          'Topologie réseau et calcul OpenStack à haute disponibilité',
          'Surveillance d’infrastructure Prometheus & Grafana avec règles d’alertes ciblées',
          'Matching d’offres d’emploi et scoring de compatibilité par IA',
          'Générateur de CV optimisé pour ATS et moteur de simulation d’entretiens',
        ],
      },
      technologies: [
        'OpenStack',
        'Kubernetes',
        'Helm',
        'Terraform',
        'Ansible',
        'Prometheus',
        'Grafana',
        'GitHub Actions',
        'Azure IAM',
        'Angular',
        'Spring Boot',
        'MySQL',
      ],
      metrics: {
        en: [
          'Private cloud infrastructure automated 100% via code',
          'High availability deployment with zero single points of failure',
          'Full observability coverage across all compute nodes and pods',
        ],
        fr: [
          'Infrastructure cloud privé 100% automatisée par le code',
          'Déploiement haute disponibilité sans point unique de défaillance',
          'Couverture d’observabilité complète sur tous les nœuds et pods',
        ],
      },
      challenges: {
        en: [
          'Orchestrating network topologies across OpenStack Neutron and Kubernetes overlay networks reliably.',
          'Coordinating infrastructure provisioning and application services across a 7-person development team.',
        ],
        fr: [
          'Orchestration fiable des topologies réseau entre OpenStack Neutron et l’overlay Kubernetes.',
          'Coordination du provisioning d’infrastructure et des services applicatifs au sein d’une équipe de 7.',
        ],
      },
      lessonsLearned: {
        en: [
          'Pairing Terraform with Ansible creates clean boundaries between infrastructure creation and machine configuration.',
          'Helm charts ensure reproducible and auditable microservice releases across private cloud environments.',
        ],
        fr: [
          'Associer Terraform et Ansible sépare clairement la création d’infrastructure de sa configuration.',
          'Les charts Helm garantissent des livraisons de microservices reproductibles et auditables.',
        ],
      },
    },
  },

  {
    id: 'eleganza-idss',
    slug: 'eleganza-idss-ml',
    title: 'Eleganza IDSS',
    tagline: {
      en: 'Machine learning intelligence service for retail demand forecasting and basket analysis.',
      fr: 'Service d’intelligence ML pour la prévision de la demande et du panier d’achat retail.',
    },
    pitch: {
      en: 'Machine learning intelligence service for retail demand forecasting and basket analysis.',
      fr: 'Service d’intelligence ML pour la prévision de la demande et du panier d’achat retail.',
    },
    description: {
      en: 'Freelance machine learning service engineered for a Tunisian retail platform to forecast inventory demand and extract shopper purchase patterns. Packaged as a multi-container Docker deployment uniting React, FastAPI, ML services, n8n workflows, and Metabase behind an Nginx reverse proxy.',
      fr: 'Service d’apprentissage automatique freelance développé pour une enseigne retail tunisienne afin de prévoir la demande et segmenter les comportements d’achat. Déployé sous Docker unifiant React, FastAPI, les services ML, les flux n8n et Metabase derrière Nginx.',
    },
    role: {
      en: 'Freelance ML & DevOps Engineer',
      fr: 'Ingénieure ML & DevOps Freelance',
    },
    status: 'Freelance',
    categories: ['aiml', 'cloud', 'data'],
    category: 'aiml',
    featured: false,
    period: '2025',
    techStack: [
      'FastAPI',
      'LightGBM',
      'XGBoost',
      'Optuna',
      'HDBSCAN',
      'UMAP',
      'Docker',
      'Nginx',
      'Metabase',
      'n8n',
      'React',
    ],
    tags: [
      'FastAPI',
      'LightGBM',
      'XGBoost',
      'Optuna',
      'HDBSCAN',
      'UMAP',
      'Docker',
      'Nginx',
      'Metabase',
      'n8n',
    ],
    highlights: {
      en: [
        'Fine-tuned LightGBM and XGBoost quantile regression models with Optuna hyperparameter optimization',
        'Customer segmentation and basket clustering utilizing UMAP dimensionality reduction and HDBSCAN',
        'Dockerized architecture connecting React, FastAPI, ML services, n8n automations, and Metabase behind Nginx',
      ],
      fr: [
        'Modèles de régression quantile LightGBM et XGBoost optimisés avec Optuna',
        'Segmentation client et analyse de paniers via réduction de dimension UMAP et clustering HDBSCAN',
        'Architecture Dockerisée reliant React, FastAPI, services ML, flux n8n et Metabase derrière Nginx',
      ],
    },
    links: {
      repo: 'https://github.com/Ranim-Abidi/eleganza-idss',
      caseStudy: '/projects/eleganza-idss-ml',
    },
    githubUrl: 'https://github.com/Ranim-Abidi/eleganza-idss',
    cover: '/projects/eleganza.webp',
    screenshots: ['/projects/eleganza.webp'],
    relatedSkillIds: ['fastapi', 'python', 'scikit-learn', 'docker', 'data-pipeline'],
    problem: {
      en: 'Retail operations suffered from high deadstock liabilities and unscientific inventory reorders based on guesswork.',
      fr: 'Les opérations retail subissaient des surstocks coûteux et des réapprovisionnements approximatifs.',
    },
    solution: {
      en: 'Engineered an asynchronous FastAPI inference service running gradient boosted regression and clustering models, deployed in a coordinated Docker stack.',
      fr: 'Développement d’un microservice d’inférence FastAPI exécutant des modèles de régression et clustering, déployé sous Docker.',
    },
    impact: {
      en: 'Provides automated predictive demand forecasts and data-backed basket recommendations with sub-50ms model evaluation.',
      fr: 'Fournit des prévisions de demande automatisées et des recommandations de paniers avec inférence sous 50ms.',
    },
    caseStudy: {
      overview: {
        en: 'Eleganza IDSS delivers predictive intelligence into retail inventory workflows. By coupling modern gradient boosted models with an asynchronous API architecture and BI dashboards, managers simulate purchasing scenarios before committing budget.',
        fr: 'Eleganza IDSS intègre l’intelligence prédictive dans la gestion des stocks de mode en associant du machine learning à une API asynchrone et des tableaux de bord décisionnels.',
      },
      architectureDiagram: `
+-----------------------------------------------------------+
|             Client Interface & Store POS (React)          |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                   Nginx Reverse Proxy & SSL               |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|            FastAPI Async Machine Learning Service         |
|         LightGBM & XGBoost Models (Optuna Tuned)          |
|         HDBSCAN & UMAP Basket Segmentation Engine         |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|       n8n Workflow Automation  |  Metabase Analytics      |
+-----------------------------------------------------------+
      `,
      architectureNotes: {
        en: [
          'High-performance asynchronous inference endpoints utilizing FastAPI and Uvicorn.',
          'Quantile regression with LightGBM and XGBoost with automated Optuna parameter sweeps.',
          'UMAP and HDBSCAN pipeline discovering non-linear customer basket groupings.',
          'Complete microservice isolation packaged into Docker containers behind Nginx reverse proxy.',
        ],
        fr: [
          'Endpoints d’inférence asynchrones haute performance avec FastAPI et Uvicorn.',
          'Régression quantile avec LightGBM et XGBoost optimisée automatiquement via Optuna.',
          'Pipeline UMAP et HDBSCAN découvrant les groupements d’achats non linéaires.',
          'Isolation complète des microservices conteneurisés sous Docker derrière un proxy Nginx.',
        ],
      },
      keyFeatures: {
        en: [
          'Seasonal retail demand forecasting with quantile intervals',
          'Unsupervised customer segmentation and association analysis',
          'Automated data workflows via n8n integration',
          'Interactive BI visual reporting powered by Metabase',
        ],
        fr: [
          'Prévision saisonnière de la demande retail avec intervalles quantiles',
          'Segmentation client non supervisée et analyse d’associations',
          'Flux d’automatisation de données via intégration n8n',
          'Rapports visuels décisionnels interactifs sous Metabase',
        ],
      },
      technologies: [
        'FastAPI',
        'LightGBM',
        'XGBoost',
        'Optuna',
        'HDBSCAN',
        'UMAP',
        'Docker',
        'Nginx',
        'Metabase',
        'n8n',
      ],
      metrics: {
        en: [
          'Sub-50ms machine learning inference latency',
          'Comprehensive multi-container Dockerized deployment',
          'Automated n8n notification & data transformation workflows',
        ],
        fr: [
          'Latence d’inférence machine learning inférieure à 50ms',
          'Déploiement conteneurisé multi-services sous Docker',
          'Flux automatisés de notification et transformation avec n8n',
        ],
      },
      challenges: {
        en: [
          'Preventing cold-start latency when deserializing large boosting models on container boot.',
          'Managing data flow between the FastAPI ML service, n8n triggers, and Metabase dashboards.',
        ],
        fr: [
          'Optimisation du temps de démarrage lors du chargement des modèles en mémoire conteneur.',
          'Gestion fluide des flux de données entre l’API FastAPI, les déclencheurs n8n et Metabase.',
        ],
      },
      lessonsLearned: {
        en: [
          'FastAPI paired with Uvicorn handles asynchronous ML scoring with minimal resource overhead.',
          'Docker Compose provides predictable staging-to-production parity for multi-service data applications.',
        ],
        fr: [
          'FastAPI combiné à Uvicorn traite l’inférence ML asynchrone avec une faible consommation de ressources.',
          'Docker Compose assure une parité parfaite entre les environnements de test et de production.',
        ],
      },
    },
  },

  {
    id: 'oxit-smart-agri',
    slug: 'oxit-smart-agriculture',
    title: 'OXIT (Founder)',
    tagline: {
      en: 'IoT and reinforcement learning platform for intelligent irrigation in smart agriculture.',
      fr: 'Plateforme IoT et apprentissage par renforcement pour l’irrigation intelligente.',
    },
    pitch: {
      en: 'IoT and reinforcement learning platform for intelligent irrigation in smart agriculture.',
      fr: 'Plateforme IoT et apprentissage par renforcement pour l’irrigation intelligente.',
    },
    description: {
      en: 'Smart agriculture mobile app and IoT hardware platform utilizing ESP32 soil telemetry and reinforcement learning (PPO) for autonomous predictive irrigation. Recognized with Student Entrepreneur Status (SNEE, cohort #1), incubated at Tomorrow’Startups 2.0, awarded Best Entrepreneurial Initiative at ISI Kef, and won 2nd place in two international AI / AI+IoT competitions.',
      fr: 'Application mobile et plateforme IoT pour l’agriculture intelligente exploitant la télémétrie ESP32 et le RL (PPO) pour l’irrigation prédictive autonome. Labellisé Statut National Étudiant Entrepreneur (SNEE promo #1), incubé Tomorrow’Startups 2.0, Meilleure Initiative Entrepreneuriale à l’ISI Kef et double 2e prix international.',
    },
    role: {
      en: 'Co-Founder & System Architect',
      fr: 'Co-fondatrice & Architecte Système',
    },
    status: 'Founder',
    categories: ['aiml', 'data'],
    category: 'aiml',
    featured: false,
    period: '2022 – 2025',
    techStack: [
      'ESP32',
      'Firebase',
      'Flask',
      'Flutter',
      'Python',
      'Reinforcement Learning (PPO)',
      'IoT Sensors',
    ],
    tags: [
      'ESP32',
      'Firebase',
      'Flask',
      'Flutter',
      'Python',
      'Reinforcement Learning',
      'IoT',
    ],
    highlights: {
      en: [
        'Telemetry loop streaming ESP32 soil humidity and ambient readings through Flask and Firebase into Flutter UI',
        'Reinforcement learning policy (Proximal Policy Optimization - PPO) optimizing automated watering schedules',
        'SNEE Student Entrepreneur Status (cohort #1), Tomorrow’Startups 2.0 incubator, and 2 international awards',
      ],
      fr: [
        'Boucle de télémétrie reliant capteurs ESP32, backend Flask, Firebase et application Flutter',
        'Apprentissage par renforcement (PPO) optimisant dynamiquement les cycles d’irrigation pour économiser l’eau',
        'Statut Étudiant Entrepreneur SNEE (promo #1), incubation Tomorrow’Startups 2.0 et deux prix internationaux',
      ],
    },
    links: {
      repo: 'https://github.com/Ranim-Abidi/oxit-agri',
      caseStudy: '/projects/oxit-smart-agriculture',
    },
    githubUrl: 'https://github.com/Ranim-Abidi/oxit-agri',
    cover: '/projects/eleganza.webp',
    screenshots: ['/projects/eleganza.webp'],
    relatedSkillIds: ['python', 'flutter', 'iot', 'data-pipeline'],
    problem: {
      en: 'Agricultural producers face water scarcity and inefficient manual irrigation schedules leading to resource waste and suboptimal crop yield.',
      fr: 'Les agriculteurs subissent le stress hydrique et des calendriers d’arrosage manuels entraînant un gaspillage d’eau critique.',
    },
    solution: {
      en: 'Engineered an integrated IoT and mobile platform coupling ESP32 soil sensors with a PPO reinforcement learning agent that dynamically adjusts watering volume.',
      fr: 'Conception d’une plateforme IoT et mobile reliant des capteurs ESP32 à un agent d’apprentissage par renforcement (PPO) régulant l’irrigation.',
    },
    impact: {
      en: 'Autonomous closed-loop irrigation based on real-time soil dynamics; recognized across international innovation competitions and startup incubators.',
      fr: 'Irrigation autonome en boucle fermée basée sur l’humidité réelle ; primé dans des concours internationaux et incubateurs.',
    },
    caseStudy: {
      overview: {
        en: 'OXIT bridges hardware engineering, applied machine learning, and mobile design into an autonomous smart farming system. By tracking continuous soil metrics, reinforcement learning agents determine the optimal moment and quantity of water to supply.',
        fr: 'OXIT réunit électronique embarquée, apprentissage automatique et développement mobile pour proposer un système agricole intelligent et autonome.',
      },
      architectureDiagram: `
+-----------------------------------------------------------+
|              Field Soil & Environmental Sensors           |
|            ESP32 Microcontrollers | Telemetry Loop        |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|            Flask Ingestion Backend & Firebase RTDB        |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|             Reinforcement Learning Agent (PPO)            |
|         Dynamic Irrigation Volume & Schedule Policy       |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|               Flutter Cross-Platform Mobile App           |
|          Live Soil Telemetry, Manual Override & Alerts    |
+-----------------------------------------------------------+
      `,
      architectureNotes: {
        en: [
          'ESP32 microcontroller network capturing real-time soil moisture, temperature, and atmospheric metrics.',
          'Flask ingestion microservice processing incoming sensor payloads and syncing state with Firebase.',
          'Reinforcement learning policy trained with Proximal Policy Optimization (PPO) on simulated watering cycles.',
          'Cross-platform Flutter application providing farmers with real-time telemetry charts and alerts.',
        ],
        fr: [
          'Réseau de microcontrôleurs ESP32 captant humidité du sol, température et métriques ambiantes.',
          'Microservice Flask traitant les données de télémétrie et synchronisant l’état avec Firebase.',
          'Agent de renforcement PPO entraîné sur des cycles d’arrosage pour minimiser la consommation hydrique.',
          'Application mobile Flutter multiplateforme fournissant graphiques temps réel et alertes.',
        ],
      },
      keyFeatures: {
        en: [
          'Continuous soil telemetry and environmental monitoring via ESP32 hardware',
          'PPO reinforcement learning model calculating water-conserving irrigation cycles',
          'Cross-platform Flutter mobile interface with real-time push alerts',
          'Manual valve override controls and historical telemetry visualization',
        ],
        fr: [
          'Télémétrie continue de l’humidité du sol via microcontrôleurs ESP32',
          'Modèle de renforcement PPO calculant des cycles d’irrigation économes en eau',
          'Interface mobile Flutter multiplateforme avec notifications en temps réel',
          'Possibilité de reprise manuelle de l’arrosage et historique de consommation',
        ],
      },
      technologies: [
        'ESP32',
        'Firebase',
        'Flask',
        'Flutter',
        'Python',
        'Reinforcement Learning (PPO)',
        'IoT',
      ],
      metrics: {
        en: [
          'SNEE Student Entrepreneur Status (cohort #1)',
          'Tomorrow’Startups 2.0 incubator selection',
          '2nd place in two international AI / AI+IoT competitions',
          'Best Entrepreneurial Initiative award at ISI Kef',
        ],
        fr: [
          'Statut National Étudiant Entrepreneur SNEE (promo #1)',
          'Sélection au programme d’incubation Tomorrow’Startups 2.0',
          '2e place dans deux concours internationaux d’IA / AI+IoT',
          'Prix de la Meilleure Initiative Entrepreneuriale à l’ISI Kef',
        ],
      },
      challenges: {
        en: [
          'Maintaining stable sensor telemetry over intermittent agricultural cellular connections.',
          'Formulating a balanced reward function for the RL agent penalizing both plant water stress and excessive water usage.',
        ],
        fr: [
          'Maintien d’une transmission stable des données sur des réseaux cellulaires ruraux intermittents.',
          'Formulation d’une fonction de récompense équilibrée pénalisant à la fois le stress hydrique et le gaspillage.',
        ],
      },
      lessonsLearned: {
        en: [
          'Hardware-in-the-loop systems require robust edge buffering when field network connectivity drops.',
          'Talking directly to agricultural operators before coding dictates which operational metrics actually matter.',
        ],
        fr: [
          'Les systèmes IoT nécessitent une mise en mémoire tampon locale lors des coupures de réseau.',
          'Échanger sur le terrain avec les agriculteurs avant de coder est essentiel pour cibler les vrais besoins.',
        ],
      },
    },
  },

  {
    id: 'el-tarf-tourism',
    slug: 'el-tarf-eco-tourism',
    title: 'AI-Powered Tourism & Eco-Tourism App',
    tagline: {
      en: 'Mobile eco-tourism exploration guide with an integrated AI discovery chatbot.',
      fr: 'Guide mobile d’éco-tourisme intégrant un chatbot IA pour la découverte personnalisée.',
    },
    pitch: {
      en: 'Mobile eco-tourism exploration guide with an integrated AI discovery chatbot.',
      fr: 'Guide mobile d’éco-tourisme intégrant un chatbot IA pour la découverte personnalisée.',
    },
    description: {
      en: 'Cross-platform mobile application developed with Flutter and Dart dedicated to eco-tourism discovery in the El Tarf region of Algeria. Integrates an AI-powered conversational chatbot that guides visitors with tailored itineraries, localized biodiversity information, and interactive exploration maps.',
      fr: 'Application mobile multiplateforme développée en Flutter/Dart dédiée à la découverte éco-touristique de la région d’El Tarf en Algérie. Intègre un chatbot conversationnel d’IA guidant les visiteurs avec des itinéraires sur mesure, des informations locales et des cartes interactives.',
    },
    role: {
      en: 'Mobile & AI Developer',
      fr: 'Développeuse Mobile & IA',
    },
    status: 'Academic',
    categories: ['aiml'],
    category: 'aiml',
    featured: false,
    period: '2024',
    techStack: [
      'Flutter',
      'Dart',
      'Python',
      'NLP Chatbot',
      'Firebase',
      'Mobile UI',
    ],
    tags: [
      'Flutter',
      'Dart',
      'Python',
      'NLP',
      'Firebase',
    ],
    highlights: {
      en: [
        'Cross-platform Flutter application tailored for eco-tourism destination discovery in El Tarf, Algeria',
        'Integrated AI conversational chatbot assisting visitors with personalized recommendations and travel advice',
        'Rich multimedia catalog of national parks, wetland reserves, historical monuments, and eco-lodges',
      ],
      fr: [
        'Application Flutter multiplateforme dédiée à la découverte des sites éco-touristiques d’El Tarf (Algérie)',
        'Chatbot conversationnel IA guidant les visiteurs avec des conseils et itinéraires personnalisés',
        'Catalogue multimédia interactif des parcs nationaux, zones humides et hébergements écologiques',
      ],
    },
    links: {
      repo: 'https://github.com/Ranim-Abidi/el-tarf-tourism',
      caseStudy: '/projects/el-tarf-eco-tourism',
    },
    githubUrl: 'https://github.com/Ranim-Abidi/el-tarf-tourism',
    cover: '/projects/smartcv.webp',
    screenshots: ['/projects/smartcv.webp'],
    relatedSkillIds: ['flutter', 'python', 'data-pipeline'],
    problem: {
      en: 'Visitors to the natural reserves and biodiversity sites of El Tarf lacked a centralized digital guide with personalized guidance.',
      fr: 'Les visiteurs des réserves naturelles d’El Tarf manquaient d’un guide numérique interactif et personnalisé.',
    },
    solution: {
      en: 'Built an intuitive Flutter mobile application featuring an AI conversational assistant and catalog of local cultural and ecological points of interest.',
      fr: 'Création d’une application mobile Flutter ergonomique dotée d’un assistant conversationnel IA et d’un catalogue local.',
    },
    impact: {
      en: 'Facilitates seamless regional tourism exploration with instant interactive answers and curated eco-trails.',
      fr: 'Facilite la découverte régionale grâce à des réponses interactives instantanées et des circuits guidés.',
    },
    caseStudy: {
      overview: {
        en: 'The El Tarf Eco-Tourism application combines modern cross-platform mobile development with natural language processing. It provides travelers with an interactive companion that understands conversational queries and recommends sustainable tourist itineraries.',
        fr: 'L’application éco-touristique d’El Tarf allie développement mobile Flutter et traitement automatique du langage naturel pour offrir un compagnon de voyage interactif et durable.',
      },
      architectureDiagram: `
+-----------------------------------------------------------+
|               Tourist Mobile Interface (Flutter)          |
|         Interactive Maps  |  Biodiversity Exploration     |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|              Conversational NLP Chatbot Worker            |
|          Intent Detection | Dynamic Itinerary Recommender |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|         Firebase Cloud Store & Local Offline Cache        |
+-----------------------------------------------------------+
      `,
      architectureNotes: {
        en: [
          'Modular Flutter architecture separating UI presentation from state management and network calls.',
          'Conversational NLP service resolving tourist intent and supplying regional knowledge.',
          'Offline caching for crucial map assets and cultural descriptions in areas with low cell coverage.',
        ],
        fr: [
          'Architecture Flutter modulaire séparant l’interface, la gestion d’état et les appels réseau.',
          'Service conversationnel de NLP analysant les intentions pour suggérer des itinéraires pertinents.',
          'Mise en cache hors-ligne pour la consultation des cartes dans les zones isolées.',
        ],
      },
      keyFeatures: {
        en: [
          'AI chatbot answering questions on local wildlife, trails, and lodging',
          'Interactive catalog with images, GPS coordinates, and historical context',
          'Offline mode allowing navigation without uninterrupted internet access',
        ],
        fr: [
          'Chatbot IA répondant aux questions sur la faune, la flore, les sentiers et les hébergements',
          'Catalogue interactif avec visuels, coordonnées GPS et repères historiques',
          'Mode hors-ligne permettant la consultation sans connexion internet continue',
        ],
      },
      technologies: ['Flutter', 'Dart', 'Python', 'NLP', 'Firebase'],
      metrics: {
        en: [
          'Fluid cross-platform execution on Android devices',
          'Instant conversational query responses for eco-tourists',
        ],
        fr: [
          'Exécution multiplateforme fluide sur appareils Android',
          'Réponses conversationnelles instantanées pour les éco-touristes',
        ],
      },
      challenges: {
        en: [
          'Designing an accurate knowledge base for regional biodiversity that responds gracefully to colloquial phrasing.',
        ],
        fr: [
          'Constitution d’une base de connaissances régionale précise réagissant fidèlement aux tournures familières.',
        ],
      },
      lessonsLearned: {
        en: [
          'Mobile caching strategies are paramount for eco-tourism applications where rural connectivity is uneven.',
        ],
        fr: [
          'La mise en cache locale est primordiale pour les applications éco-touristiques en zones rurales.',
        ],
      },
    },
  },

  {
    id: 'chicago-crimes-analytics',
    slug: 'chicago-crimes-analytics',
    title: 'Crimes in Chicago Analytics Dashboard',
    tagline: {
      en: 'Multidimensional time-series forecasting and unsupervised crime clustering dashboard.',
      fr: 'Tableau de bord de prévision temporelle et de clustering non supervisé de la criminalité.',
    },
    pitch: {
      en: 'Multidimensional time-series forecasting and unsupervised crime clustering dashboard.',
      fr: 'Tableau de bord de prévision temporelle et de clustering non supervisé de la criminalité.',
    },
    description: {
      en: 'Academic analytics project conducted over 14 weeks with a team of 6 analyzing multi-year Chicago open crime records. Implements K-Means spatial clustering, Random Forest predictive classification, and interactive Plotly Dash visualization.',
      fr: 'Projet d’analyse décisionnelle réalisé sur 14 semaines en équipe de 6 sur les données ouvertes de la criminalité à Chicago. Implémente le clustering spatial K-Means, la classification Random Forest et des visualisations interactives Plotly Dash.',
    },
    role: {
      en: 'Data & ML Engineer (Team of 6)',
      fr: 'Ingénieure Data & ML (Équipe de 6)',
    },
    status: 'Academic',
    categories: ['data', 'aiml'],
    category: 'data',
    featured: false,
    period: '14 Weeks · Academic (Team of 6)',
    techStack: [
      'Plotly Dash',
      'Scikit-learn',
      'Pandas',
      'Python',
      'K-Means',
      'Random Forest',
      'Time-Series Analysis',
    ],
    tags: [
      'Plotly Dash',
      'Scikit-learn',
      'Pandas',
      'Python',
      'K-Means',
      'Random Forest',
    ],
    highlights: {
      en: [
        'Analyzed longitudinal Chicago open crime data over a 14-week engagement in a collaborative team of 6',
        'Unsupervised K-Means clustering isolating spatial incident hot spots across city police districts',
        'Random Forest classification and time-series modeling deployed in an interactive Plotly Dash dashboard',
      ],
      fr: [
        'Analyse longitudinale des données ouvertes de la criminalité à Chicago sur 14 semaines en équipe de 6',
        'Clustering K-Means non supervisé identifiant les zones critiques à travers les districts policiers',
        'Classification Random Forest et séries temporelles intégrées dans un tableau de bord Plotly Dash',
      ],
    },
    links: {
      repo: 'https://github.com/Ranim-Abidi/chicago-crimes-dash',
      caseStudy: '/projects/chicago-crimes-analytics',
    },
    githubUrl: 'https://github.com/Ranim-Abidi/chicago-crimes-dash',
    cover: '/projects/dash.webp',
    screenshots: ['/projects/dash.webp'],
    relatedSkillIds: ['python', 'scikit-learn', 'data-pipeline'],
    problem: {
      en: 'Understanding high-volume municipal incident trends requires robust feature extraction, spatial clustering, and dynamic filtering across disparate crime categories.',
      fr: 'L’analyse de volumes importants de données d’incidents urbains nécessite une extraction de variables robuste et un clustering spatial dynamique.',
    },
    solution: {
      en: 'Created an end-to-end data processing and machine learning pipeline with interactive dashboards allowing temporal and categorical filtering.',
      fr: 'Développement d’un pipeline complet d’ingestion, nettoyage et modélisation ML avec dashboard interactif.',
    },
    impact: {
      en: 'Reveals clear spatial cluster patterns and seasonal crime velocity across Chicago municipal sectors.',
      fr: 'Met en évidence les regroupements spatiaux et les tendances saisonnières par secteur urbain.',
    },
    caseStudy: {
      overview: {
        en: 'Carried out over 14 weeks by an academic team of 6, this project evaluates the City of Chicago open incident database. By combining unsupervised spatial clustering with supervised classification and temporal regression, the dashboard surfaces actionable crime patterns.',
        fr: 'Mené sur 14 semaines en équipe de 6, ce projet analyse les données d’incidents de Chicago via clustering non supervisé, classification supervisée et séries temporelles.',
      },
      architectureDiagram: `
+-----------------------------------------------------------+
|              Chicago Police Open Data Portal              |
|               Millions of Historical Records              |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|          Data Cleaning, Imputation & Feature Engineering  |
|               Pandas & NumPy Extraction Pipeline          |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|         Machine Learning Models (Scikit-learn)            |
|       Spatial K-Means Clustering  |  Random Forest Model  |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|               Interactive Plotly Dash Web UI              |
|        Dynamic Map Layers, Filter Bars & Time Trends      |
+-----------------------------------------------------------+
      `,
      architectureNotes: {
        en: [
          'High-throughput data cleaning and timestamp parsing across multi-year incident rows with Pandas.',
          'K-Means clustering identifying localized geographic density centroids.',
          'Random Forest classification assessing factors correlating with arrest outcomes.',
          'Interactive Plotly Dash web interface offering dynamic drill-downs by district, beat, and primary type.',
        ],
        fr: [
          'Nettoyage et parsing chronologique sur des millions de lignes d’incidents avec Pandas.',
          'Clustering K-Means identifiant les centroïdes géographiques de forte densité.',
          'Classification Random Forest évaluant les variables corrélées aux arrestations.',
          'Interface Plotly Dash permettant l’exploration par district, secteur et nature d’infraction.',
        ],
      },
      keyFeatures: {
        en: [
          'Interactive spatial scatter and density heatmaps of Chicago police districts',
          'Time-series decomposition highlighting annual, monthly, and hourly incident peaks',
          'Predictive Random Forest evaluation of incident characteristics',
          'Dynamic multi-filter dashboard allowing granular slice-and-dice queries',
        ],
        fr: [
          'Cartographie interactive et cartes de chaleur des districts de police de Chicago',
          'Décomposition chronologique révélant les pics annuels, mensuels et horaires',
          'Évaluation prédictive Random Forest des caractéristiques des incidents',
          'Tableau de bord dynamique permettant des filtres croisés instantanés',
        ],
      },
      technologies: [
        'Plotly Dash',
        'Scikit-learn',
        'Pandas',
        'Python',
        'K-Means',
        'Random Forest',
      ],
      metrics: {
        en: [
          '14-week structured academic team engagement (team of 6)',
          'End-to-end data pipeline processing longitudinal municipal records',
        ],
        fr: [
          'Projet académique structuré sur 14 semaines en équipe de 6',
          'Pipeline de traitement complet sur l’historique municipal',
        ],
      },
      challenges: {
        en: [
          'Handling large raw datasets efficiently inside standard memory constraints without loss of resolution.',
        ],
        fr: [
          'Optimisation du traitement de jeux de données massifs en mémoire vive sans perte de granularité.',
        ],
      },
      lessonsLearned: {
        en: [
          'Feature engineering (day of week, hour blocks, location tags) provides more predictive lift than model complexity.',
        ],
        fr: [
          'L’ingénierie des variables (jour, heure, type de lieu) apporte plus de gain prédictif que la complexité brute des modèles.',
        ],
      },
    },
  },

  {
    id: 'pharmacy-reimbursement',
    slug: 'pharmacy-reimbursement-analytics',
    title: 'Pharmacy Reimbursement Dashboard',
    tagline: {
      en: 'Power BI & Prophet predictive forecasting system across healthcare reimbursement records.',
      fr: 'Système de prévision décisionnelle sous Power BI & Prophet sur les remboursements de santé.',
    },
    pitch: {
      en: 'Power BI & Prophet predictive forecasting system across healthcare reimbursement records.',
      fr: 'Système de prévision décisionnelle sous Power BI & Prophet sur les remboursements de santé.',
    },
    description: {
      en: 'Healthcare business intelligence dashboard tracking reimbursement lifecycles across 55K+ patient records and 36 hospital establishments between 2019 and 2024. Integrates Facebook Prophet time-series models generating projected reimbursement trajectories for 2025–2026.',
      fr: 'Tableau de bord décisionnel de santé analysant les cycles de remboursement de plus de 55 000 dossiers patients et 36 établissements hospitaliers (2019–2024). Intègre des modèles prédictifs Prophet projetant les trajectoires de remboursement pour 2025–2026.',
    },
    role: {
      en: 'Data & BI Analyst',
      fr: 'Analyste Data & Décisionnel',
    },
    status: 'Academic',
    categories: ['data'],
    category: 'data',
    featured: false,
    period: '2024',
    techStack: [
      'Power BI',
      'Prophet',
      'Python',
      'DAX',
      'SQL',
      'Pandas',
      'Business Intelligence',
    ],
    tags: [
      'Power BI',
      'Prophet',
      'Python',
      'DAX',
      'SQL',
      'Pandas',
    ],
    highlights: {
      en: [
        'Analyzed 2019–2024 longitudinal reimbursement data spanning 55,000+ patients across 36 hospitals',
        'Implemented Prophet time-series forecasts projecting reimbursement horizons into 2025–2026',
        'Engineered an interactive Power BI dashboard with dynamic DAX financial measures and variance tracking',
      ],
      fr: [
        'Analyse des données de remboursement 2019–2024 couvrant plus de 55 000 patients et 36 hôpitaux',
        'Modélisation prédictive par séries temporelles Prophet pour les horizons 2025–2026',
        'Conception d’un rapport Power BI interactif avec mesures DAX dynamiques et suivi des écarts',
      ],
    },
    links: {
      repo: 'https://github.com/Ranim-Abidi/pharmacy-reimbursements',
      caseStudy: '/projects/pharmacy-reimbursement-analytics',
    },
    githubUrl: 'https://github.com/Ranim-Abidi/pharmacy-reimbursements',
    cover: '/projects/dash.webp',
    screenshots: ['/projects/dash.webp'],
    relatedSkillIds: ['python', 'data-pipeline', 'bi-tools'],
    problem: {
      en: 'Healthcare administrators lacked long-term visibility into pharmaceutical reimbursement cycles and forward budgetary projections across hospital networks.',
      fr: 'Les gestionnaires de santé manquaient de visibilité sur les cycles de remboursement et les projections budgétaires hospitalières.',
    },
    solution: {
      en: 'Built an integrated data warehouse and Power BI suite coupled with Python Prophet regression to model historical patterns and project 2025–2026 fiscal figures.',
      fr: 'Mise en place d’un modèle de données décisionnel sous Power BI couplé à des régressions Prophet pour anticiper les budgets 2025–2026.',
    },
    impact: {
      en: 'Equips healthcare directors with clear historical performance metrics and reliable forward-looking forecasts across 36 clinical institutions.',
      fr: 'Fournit aux décideurs hospitaliers une vision claire des remboursements passés et des projections fiables sur 36 établissements.',
    },
    caseStudy: {
      overview: {
        en: 'This health data analytics initiative processes multi-year reimbursement filings spanning 2019 to 2024 for over 55,000 patient records across 36 hospitals. It blends enterprise Power BI reporting with automated Facebook Prophet forecasting for 2025–2026.',
        fr: 'Cette initiative d’analyse de données de santé traite les remboursements pharmaceutiques 2019–2024 de plus de 55 000 patients répartis sur 36 hôpitaux, associant Power BI et prévisions Prophet.',
      },
      architectureDiagram: `
+-----------------------------------------------------------+
|          Hospital & Pharmacy Claim Records (2019–2024)    |
|               55,000+ Patients | 36 Hospitals             |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|              Data Wrangling & Time-Series Prep            |
|                   Python (Pandas) & SQL                   |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|             Prophet Time-Series Forecasting Engine        |
|             2025–2026 Budget Trajectory Predictions       |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|            Interactive Power BI Executive Report          |
|         DAX KPIs, Hospital Scorecards & Variance Matrix   |
+-----------------------------+-----------------------------+
      `,
      architectureNotes: {
        en: [
          'Data normalization and aggregation of multi-hospital records spanning 2019 through 2024.',
          'Facebook Prophet time-series regression capturing seasonal variance and projecting 2025–2026.',
          'Sophisticated DAX measures for running totals, year-over-year growth, and claim rejection percentages.',
          'Cross-filterable Power BI reports segmented by hospital tier, prescription category, and patient cohorts.',
        ],
        fr: [
          'Normalisation et agrégation des enregistrements de 36 hôpitaux entre 2019 et 2024.',
          'Modélisation Prophet captant les saisonnalités pour projeter les trajectoires 2025–2026.',
          'Mesures DAX avancées calculant cumuls, évolutions annuelles et taux de rejet.',
          'Rapports Power BI avec filtres croisés par établissement, classe thérapeutique et cohorte.',
        ],
      },
      keyFeatures: {
        en: [
          'Longitudinal reimbursement tracking across 55K+ patients and 36 hospital centers',
          'Prophet time-series regression producing forward forecasts for 2025–2026',
          'Executive KPI cards tracking approval velocity and reimbursement lag times',
          'Granular filtering by medical establishment, drug category, and fiscal period',
        ],
        fr: [
          'Suivi longitudinal des remboursements pour 55K+ patients et 36 établissements',
          'Régression prédictive Prophet produisant les prévisions budgétaires 2025–2026',
          'Indicateurs clés évaluant les délais et taux de validation des remboursements',
          'Filtrage granulaire par hôpital, catégorie de médicament et période fiscale',
        ],
      },
      technologies: [
        'Power BI',
        'Prophet',
        'Python',
        'DAX',
        'SQL',
        'Pandas',
      ],
      metrics: {
        en: [
          '55,000+ patient records audited and modeled',
          '36 hospitals integrated into unified analytics',
          '2-year forward forecast horizon (2025–2026)',
        ],
        fr: [
          'Plus de 55 000 dossiers patients audités et modélisés',
          '36 établissements hospitaliers intégrés au modèle',
          'Horizon prévisionnel de 2 ans (2025–2026)',
        ],
      },
      challenges: {
        en: [
          'Reconciling inconsistent reporting formats and missing claim codes across diverse hospital administrations.',
        ],
        fr: [
          'Harmonisation des formats disparates et codes manquants provenant de 36 administrations hospitalières.',
        ],
      },
      lessonsLearned: {
        en: [
          'Time-series forecasting models must account for statutory policy changes that create structural level shifts.',
        ],
        fr: [
          'Les prévisions chronologiques doivent intégrer les évolutions réglementaires susceptibles de modifier les tendances.',
        ],
      },
    },
  },

  {
    id: 'atb-environmental-platform',
    slug: 'atb-environmental-assessment',
    title: 'Environmental Assessment Platform (ATB)',
    tagline: {
      en: 'Web platform assessing carbon footprints and ecological impacts for bank credit applications.',
      fr: 'Plateforme web d’évaluation d’impact écologique et d’émissions CO2 pour dossiers bancaires.',
    },
    pitch: {
      en: 'Web platform assessing carbon footprints and ecological impacts for bank credit applications.',
      fr: 'Plateforme web d’évaluation d’impact écologique et d’émissions CO2 pour dossiers bancaires.',
    },
    description: {
      en: 'Web platform developed to calculate and evaluate the environmental impact of corporate credit requests for Arab Tunisian Bank (ATB). Computes multicriteria scoring algorithms on CO2 emissions and sustainability indicators to support green financing decisions.',
      fr: 'Plateforme web conçue pour calculer et évaluer l’impact environnemental des demandes de crédit professionnel pour l’Arab Tunisian Bank (ATB). Calcule des scores d’émissions de CO2 et d’indicateurs écologiques via une analyse multicritère.',
    },
    role: {
      en: 'Full-Stack Developer & Analyst',
      fr: 'Développeuse Full-Stack & Analyste',
    },
    status: 'Academic',
    categories: ['data', 'fullstack'],
    category: 'data',
    featured: false,
    period: 'Academic',
    techStack: [
      'JavaScript',
      'Node.js',
      'Express',
      'MySQL',
      'Chart.js',
      'CSS3',
      'REST API',
    ],
    tags: [
      'JavaScript',
      'Node.js',
      'Express',
      'MySQL',
      'Chart.js',
      'REST API',
    ],
    highlights: {
      en: [
        'Multicriteria evaluation engine quantifying CO2 emissions and environmental sustainability for bank loan files',
        'Interactive dashboards presenting scoring matrices and ecological compliance breakdowns to credit officers',
        'Standardized credit intake workflow enabling objective comparison across diverse corporate applicants',
      ],
      fr: [
        'Moteur d’évaluation multicritère quantifiant les émissions de CO2 et la durabilité pour dossiers de prêt',
        'Tableaux de bord interactifs présentant les matrices de score et conformité aux analystes de crédit',
        'Formulaires standardisés facilitant la comparaison objective de dossiers d’entreprises variés',
      ],
    },
    links: {
      repo: 'https://github.com/Ranim-Abidi/atb-environmental-platform',
      caseStudy: '/projects/atb-environmental-assessment',
    },
    githubUrl: 'https://github.com/Ranim-Abidi/atb-environmental-platform',
    cover: '/projects/dejitalist.webp',
    screenshots: ['/projects/dejitalist.webp'],
    relatedSkillIds: ['nodejs', 'javascript', 'data-pipeline'],
    problem: {
      en: 'Financial institutions need systematic, verifiable criteria to assess the ecological footprint and carbon emissions of businesses applying for credit.',
      fr: 'Les institutions financières manquaient de critères objectifs et vérifiables pour évaluer l’empreinte écologique des demandeurs de crédit.',
    },
    solution: {
      en: 'Engineered a web application with dynamic questionnaire scoring, automated CO2 metric calculations, and executive compliance reports.',
      fr: 'Conception d’une application web avec calcul automatisé des métriques de CO2 et génération de rapports de conformité.',
    },
    impact: {
      en: 'Provides structured, data-driven sustainability scoring to inform responsible commercial credit underwriting.',
      fr: 'Fournit une notation de durabilité objective pour guider l’octroi de crédits bancaires éco-responsables.',
    },
    caseStudy: {
      overview: {
        en: 'Developed in collaboration with requirements from Arab Tunisian Bank (ATB), this web platform provides financial analysts with a standardized multicriteria assessment of the carbon intensity and ecological impact of commercial loan applicants.',
        fr: 'Développée selon les exigences de l’Arab Tunisian Bank (ATB), cette plateforme web offre aux analystes financiers une évaluation multicritère standardisée de l’empreinte carbone des entreprises demandeuses de crédit.',
      },
      architectureDiagram: `
+-----------------------------------------------------------+
|          Bank Loan Officers & Corporate Credit Analysts   |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|              Web Client Interface (JavaScript/CSS)        |
|          Credit Intake Forms  |  Chart.js Visualizations  |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|               Node.js & Express REST Backend              |
|        Multicriteria Scoring & CO2 Emission Calculator    |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                MySQL Relational Database                  |
|           Audit Trails, Applicant Metrics & Ratings       |
+-----------------------------+-----------------------------+
      `,
      architectureNotes: {
        en: [
          'RESTful backend architecture built with Node.js and Express handling loan intake and evaluation math.',
          'Multicriteria scoring algorithm factoring direct CO2 output, energy usage, and sector risk profiles.',
          'MySQL database storing audited credit requests, applicant metrics, and historical ratings.',
          'Client-side data visualizations with Chart.js highlighting environmental risk distribution.',
        ],
        fr: [
          'Architecture REST sous Node.js et Express gérant la saisie des dossiers et les calculs d’impact.',
          'Algorithme d’analyse multicritère intégrant émissions directes de CO2, énergie et profils sectoriels.',
          'Base MySQL archivant les dossiers audités, métriques déclarées et scores historiques.',
          'Visualisations Chart.js illustrant la répartition des risques environnementaux.',
        ],
      },
      keyFeatures: {
        en: [
          'Multicriteria ecological assessment engine calculating composite sustainability scores',
          'Automated CO2 emission calculations based on industry benchmarks and company input',
          'Interactive summary reports providing actionable indicators for credit committees',
          'Auditable history of evaluations for compliance monitoring',
        ],
        fr: [
          'Moteur d’évaluation multicritère calculant un score de durabilité composite',
          'Calcul automatisé des émissions de CO2 selon les référentiels sectoriels',
          'Rapports de synthèse interactifs avec indicateurs clairs pour les comités de crédit',
          'Historique auditable des évaluations pour le suivi de conformité',
        ],
      },
      technologies: [
        'JavaScript',
        'Node.js',
        'Express',
        'MySQL',
        'Chart.js',
        'CSS3',
        'REST API',
      ],
      metrics: {
        en: [
          'Multicriteria calculation engine evaluating carbon and ecological indicators',
          'Standardized scoring framework built for bank loan credit evaluation',
        ],
        fr: [
          'Moteur de calcul multicritère évaluant les indicateurs carbone et écologiques',
          'Cadre de notation standardisé pour l’évaluation des crédits bancaires',
        ],
      },
      challenges: {
        en: [
          'Translating complex multi-factor environmental criteria into transparent, interpretable scores for non-specialist loan officers.',
        ],
        fr: [
          'Traduction de critères écologiques multifactoriels en scores simples et compréhensibles pour les analystes bancaires.',
        ],
      },
      lessonsLearned: {
        en: [
          'Simplicity and transparency in scoring methodologies build trust with financial decision makers.',
        ],
        fr: [
          'La simplicité et la transparence des méthodes de calcul renforcent la confiance des décideurs financiers.',
        ],
      },
    },
  },
];
