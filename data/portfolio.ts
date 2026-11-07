import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Ranim Abidi',
    phoneticName: 'Raneem',
    location: {
      en: 'Tunis, Tunisia',
      fr: 'Tunis, Tunisie',
    },
    headline: {
      en: 'Engineering reliable cloud infrastructure, scalable full-stack applications & applied AI systems.',
      fr: 'Ingénierie d\'infrastructures cloud résilientes, d\'applications full-stack scalables et de systèmes IA appliqués.',
    },
    roles: {
      en: ['Cloud & DevOps', 'Full-Stack Web', 'Applied AI / Data'],
      fr: ['Cloud & DevOps', 'Web Full-Stack', 'IA Appliquée / Données'],
    },
    motto: {
      en: 'Bold enough to imagine. Skilled enough to build.',
      fr: 'Audacieuse pour imaginer. Compétente pour bâtir.',
    },
    availabilityBadge: {
      en: 'Open to a final-year internship (PFE) · 2027',
      fr: 'À la recherche d\'un stage de fin d\'études (PFE) · 2027',
    },
    shortBio: {
      en: 'Dual-degree Cloud & DevOps engineering student at ESPRIT and Intelligent Web Master candidate at ISI KEF. Active youth leader driving high-impact international exchange at AIESEC Tunisia.',
      fr: 'Élève-ingénieure en Cloud & DevOps à ESPRIT et en Master Professionnel Applications Web Intelligentes à l\'ISI KEF. Leader associative engagée chez AIESEC Tunisie.',
    },
    fullStory: {
      en: [
        'I operate at the intersection of Cloud Architecture, Modern Web Engineering, and Data Intelligence. Currently pursuing an Engineering degree in Cloud Computing & DevOps at ESPRIT (class of 2027) while simultaneously deepening my expertise with a Professional Master in Intelligent Web Applications at ISI KEF.',
        'Beyond technical implementations, I bring proven leadership as Vice President of Volunteering Exchange (and previously VP Finance & Legal) at AIESEC Tunisia, orchestrating cross-border talent pipelines, governance, and organizational strategy.',
        'Whether automating Kubernetes microservices with GitOps, provisioning resilient Terraform multi-cloud architectures, or fine-tuning ML pipelines for real-time decision support, I build systems engineered for longevity, observability, and genuine user value.',
      ],
      fr: [
        'J\'évolue à la convergence de l\'architecture Cloud, du génie logiciel moderne et de l\'intelligence des données. Je poursuis actuellement mon diplôme d\'ingénieure en Cloud Computing & DevOps à ESPRIT (promotion 2027), tout en consolidant mes compétences via un Master Professionnel en Applications Web Intelligentes à l\'ISI KEF.',
        'Au-delà du code, j\'exerce un leadership prouvé en tant que Vice-Présidente Volunteering Exchange (et précédemment VP Finance & Juridique) chez AIESEC Tunisie, pilotant des flux d\'échanges internationaux, la conformité légale et la stratégie de croissance.',
        'Qu\'il s\'agisse d\'automatiser des microservices Kubernetes en GitOps, d\'orchestrer des infrastructures résilientes avec Terraform, ou d\'intégrer des modèles d\'IA dans des plateformes SaaS, je conçois des systèmes axés sur la robustesse, la performance et l\'impact réel.',
      ],
    },
    socials: {
      // TODO: Replace with your actual email address
      email: 'ranim.abidi@esprit.tn',
      // TODO: Replace with your actual LinkedIn profile URL
      linkedin: 'https://www.linkedin.com/in/ranim-abidi',
      // TODO: Replace with your actual GitHub username URL
      github: 'https://github.com/ranimabidi',
      // TODO: Place your CV in /public/cv-ranim-abidi.pdf or set an external link
      cvUrl: '/cv-ranim-abidi.pdf',
    },
    portraitUrl: '/portrait.jpg',
  },

  stats: [
    {
      id: 'projects',
      value: 12,
      suffix: '+',
      label: {
        en: 'Projects Engineered',
        fr: 'Projets Déployés',
      },
      description: {
        en: 'Cloud, full-stack SaaS & data applications',
        fr: 'SaaS cloud, full-stack & data analytics',
      },
    },
    {
      id: 'deployments',
      value: 24,
      suffix: '+',
      label: {
        en: 'Live Deployments',
        fr: 'Déploiements Production',
      },
      description: {
        en: 'CI/CD automated releases on Vercel, Docker & Cloud',
        fr: 'Pipelines CI/CD automatisés sur Vercel, Docker & Cloud',
      },
    },
    {
      id: 'leadership',
      value: 3,
      suffix: ' yrs',
      label: {
        en: 'Leadership & AIESEC',
        fr: 'Leadership & AIESEC',
      },
      description: {
        en: 'VP roles managing teams, finance & international exchange',
        fr: 'Rôles de VP en finance, gouvernance & échanges',
      },
    },
    {
      id: 'certifications',
      value: 6,
      suffix: '+',
      label: {
        en: 'Certifications & Honors',
        fr: 'Certifications & Prix',
      },
      description: {
        en: 'Cloud architecture, DevOps & hackathon distinctions',
        fr: 'Architecture Cloud, DevOps & hackathons',
      },
    },
  ],

  education: [
    {
      institution: 'ESPRIT - Ecole Supérieure Privée d\'Ingénierie et de Technologies',
      degree: {
        en: 'National Engineering Degree in Cloud Computing & DevOps',
        fr: 'Diplôme National d\'Ingénieur en Informatique - Spécialité Cloud Computing & DevOps',
      },
      period: '2022 - 2027 (Expected July 2027)',
      location: 'Tunis, Tunisia',
      status: {
        en: 'In progress · 4th / 5th Year',
        fr: 'En cours · 4ème / 5ème année',
      },
      badge: 'Engineering Degree',
      highlights: {
        en: [
          'Advanced coursework: Cloud architectures, Distributed Systems, Container Orchestration (K8s), CI/CD Automation, Infrastructure as Code (Terraform), Network Security.',
          'Active participant in academic cloud labs, microservice prototyping and technical hackathons.',
        ],
        fr: [
          'Programme d\'excellence : Architectures Cloud, Systèmes Distribués, Orchestration de Conteneurs (K8s), Automatisation CI/CD, Infrastructure as Code (Terraform), Sécurité Réseau.',
          'Participation active aux ateliers d\'architecture, prototypes de microservices et hackathons académiques.',
        ],
      },
    },
    {
      institution: 'ISI KEF - Institut Supérieur d\'Informatique du Kef',
      degree: {
        en: 'Professional Master in Intelligent Web Applications',
        fr: 'Master Professionnel en Applications Web Intelligentes',
      },
      period: '2024 - 2026',
      location: 'Le Kef, Tunisia',
      status: {
        en: 'Concurrent Enrollment',
        fr: 'Double cursus / Master Spécialisé',
      },
      badge: 'Master Degree',
      highlights: {
        en: [
          'Specialization in AI-powered web services, modern web frameworks, semantic data modelling and machine learning integration.',
          'Focus on combining high-performance backend microservices with intelligent inference endpoints.',
        ],
        fr: [
          'Spécialisation dans les architectures web enrichies par l\'IA, frameworks réactifs modernes et intégration de modèles prédictifs.',
          'Convergence entre microservices haute performance et points de terminaison d\'inférence décisionnels.',
        ],
      },
    },
  ],

  skillCategories: [
    {
      id: 'cloud-devops',
      title: {
        en: 'Cloud & DevOps',
        fr: 'Cloud & DevOps',
      },
      description: {
        en: 'Infrastructure as Code, container orchestration, GitOps workflows and multi-cloud resilience.',
        fr: 'Infrastructure as Code, orchestration de conteneurs, pratiques GitOps et haute disponibilité cloud.',
      },
      icon: 'Cloud',
      skills: [
        { name: 'Docker', level: 'Expert', isHighlight: true },
        { name: 'Kubernetes', level: 'Advanced', isHighlight: true },
        { name: 'CI/CD Pipelines (GitHub Actions)', level: 'Expert', isHighlight: true },
        { name: 'Terraform (IaC)', level: 'Advanced', isHighlight: true },
        { name: 'Linux / Bash Scripting', level: 'Expert', isHighlight: true },
        { name: 'Vercel / Cloudflare', level: 'Expert' },
        { name: 'AWS & GCP Core Services', level: 'Advanced' },
        { name: 'Prometheus & Grafana', level: 'Proficient' },
        { name: 'ArgoCD / GitOps', level: 'Proficient' },
      ],
    },
    {
      id: 'backend',
      title: {
        en: 'Backend & APIs',
        fr: 'Backend & APIs',
      },
      description: {
        en: 'High-throughput microservices, REST/GraphQL standards, authentication protocols and clean architecture.',
        fr: 'Microservices haute performance, architectures RESTful, protocoles d\'authentification et code maintenable.',
      },
      icon: 'Server',
      skills: [
        { name: 'Node.js / Express', level: 'Expert', isHighlight: true },
        { name: 'FastAPI / Python', level: 'Expert', isHighlight: true },
        { name: 'Spring Boot (Java)', level: 'Advanced' },
        { name: 'NestJS', level: 'Proficient' },
        { name: 'REST & GraphQL APIs', level: 'Expert' },
        { name: 'Microservices Architecture', level: 'Advanced' },
        { name: 'JWT & OAuth2 Security', level: 'Expert' },
      ],
    },
    {
      id: 'frontend',
      title: {
        en: 'Modern Frontend',
        fr: 'Frontend Moderne',
      },
      description: {
        en: 'Responsive, accessible, server-rendered web applications with motion design and design systems.',
        fr: 'Applications web réactives, accessibles, optimisées SSR/SSG avec design system et micro-interactions.',
      },
      icon: 'Layout',
      skills: [
        { name: 'React', level: 'Expert', isHighlight: true },
        { name: 'Next.js (App Router)', level: 'Expert', isHighlight: true },
        { name: 'TypeScript', level: 'Expert', isHighlight: true },
        { name: 'Tailwind CSS', level: 'Expert', isHighlight: true },
        { name: 'Framer Motion', level: 'Advanced' },
        { name: 'UI / UX Design (Figma)', level: 'Advanced' },
      ],
    },
    {
      id: 'data-ai',
      title: {
        en: 'Data & Applied AI',
        fr: 'Données & IA Appliquée',
      },
      description: {
        en: 'Predictive modeling, data analytics pipelines, semantic search and decision support systems.',
        fr: 'Modélisation prédictive, pipelines d\'analyse de données, recherche sémantique et systèmes d\'aide à la décision.',
      },
      icon: 'Brain',
      skills: [
        { name: 'Python (Pandas, NumPy, Scikit-learn)', level: 'Advanced', isHighlight: true },
        { name: 'Data Pipeline Design (ETL)', level: 'Advanced', isHighlight: true },
        { name: 'FastAPI ML Inference Serving', level: 'Advanced' },
        { name: 'Data Visualization & BI', level: 'Expert' },
        { name: 'Prompt Engineering & LLM APIs', level: 'Advanced' },
      ],
    },
    {
      id: 'databases',
      title: {
        en: 'Databases & Storage',
        fr: 'Bases de Données & Stockage',
      },
      description: {
        en: 'Relational ACID schemas, serverless PostgreSQL, document stores and in-memory caches.',
        fr: 'Schémas relationnels normalisés, PostgreSQL serverless, magasins NoSQL et caches mémoire.',
      },
      icon: 'Database',
      skills: [
        { name: 'PostgreSQL / Neon', level: 'Expert', isHighlight: true },
        { name: 'MongoDB', level: 'Advanced', isHighlight: true },
        { name: 'Prisma / Drizzle ORM', level: 'Advanced' },
        { name: 'Redis Cache', level: 'Proficient' },
        { name: 'MySQL', level: 'Advanced' },
      ],
    },
    {
      id: 'leadership',
      title: {
        en: 'Leadership & Soft Skills',
        fr: 'Leadership & Compétences Clés',
      },
      description: {
        en: 'Strategic decision making, team mentorship, budget governance and multicultural collaboration.',
        fr: 'Vision stratégique, encadrement d\'équipes, gouvernance financière et négociation internationale.',
      },
      icon: 'Users',
      skills: [
        { name: 'Cross-functional Team Leadership', level: 'Expert', isHighlight: true },
        { name: 'Budgeting & Financial Auditing', level: 'Expert', isHighlight: true },
        { name: 'Agile / Scrum Project Management', level: 'Expert' },
        { name: 'Public Speaking & Pitching', level: 'Advanced' },
        { name: 'Bilingual Professional Fluency (FR/EN)', level: 'Expert', isHighlight: true },
      ],
    },
  ],

  projects: [
    {
      id: 'dejitalist',
      slug: 'dejitalist-saas',
      title: 'Dejitalist',
      pitch: {
        en: 'Multi-tenant e-commerce SaaS empowering merchants with autonomous storefronts and real-time inventory.',
        fr: 'Plateforme SaaS e-commerce multi-tenant permettant aux marchands de déployer des boutiques autonomes.',
      },
      category: 'fullstack',
      featured: true,
      problem: {
        en: 'Independent merchants struggled with fragmented tools for billing, order management, and multi-channel catalogs.',
        fr: 'Les commerçants indépendants perdaient du temps sur des outils disparates pour la facturation et les catalogues.',
      },
      solution: {
        en: 'Architected an all-in-one multi-tenant cloud platform featuring sub-domain tenant routing, instant checkout, and an operational analytics dashboard.',
        fr: 'Conception d\'une solution cloud tout-en-un avec routage par sous-domaine de locataire, panier instantané et tableau de bord opérationnel.',
      },
      impact: {
        en: 'Sub-100ms API latency with Neon serverless Postgres; supports seamless scaling across hundreds of concurrent merchant storefronts.',
        fr: 'Temps de réponse API inférieur à 100ms grâce à Neon Postgres serverless ; passage à l\'échelle fluide pour des centaines de boutiques.',
      },
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Neon Postgres', 'Prisma', 'Vercel', 'Docker'],
      cover: '/projects/dejitalist.webp',
      // TODO: Replace with your actual live production URL
      liveUrl: 'https://dejitalist.vercel.app',
      // TODO: Replace with your YouTube/Loom/Vimeo demo or local MP4 link
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      // TODO: Replace with your GitHub repository URL
      githubUrl: 'https://github.com/ranimabidi/dejitalist',
      caseStudy: {
        overview: {
          en: 'Dejitalist was built as a full-scale multi-tenant commerce engine tailored to modern digital retailers. Each merchant receives an isolated workspace, customizable product storefront, automated checkout flow, and live inventory auditing.',
          fr: 'Dejitalist est un moteur e-commerce multi-locataire complet conçu pour les commerçants modernes. Chaque boutique bénéficie d\'un espace cloisonné, d\'une vitrine personnalisable et d\'une gestion des stocks en temps réel.',
        },
        architectureNotes: {
          en: [
            'Tenant isolation via middleware-based hostname detection and scoped database queries.',
            'Serverless PostgreSQL branching and connection pooling using Neon Database.',
            'Automated CI/CD with GitHub Actions testing unit and integration coverage before Vercel atomic deployments.',
            'Secure role-based access control (RBAC) with hashed sessions and audit logging.',
          ],
          fr: [
            'Isolation des locataires par intergiciel (middleware) de détection de domaine et requêtes partitionnées.',
            'PostgreSQL serverless avec pool de connexions optimisé via Neon Database.',
            'Pipeline CI/CD avec GitHub Actions validant les tests d\'intégration avant déploiement atomique sur Vercel.',
            'Contrôle d\'accès basé sur les rôles (RBAC) et traçabilité complète des actions administratives.',
          ],
        },
        keyFeatures: {
          en: [
            'Customizable storefront themes with instant preview',
            'Live order tracking with webhook notifications',
            'Automated invoice generation and tax calculations',
            'Merchant analytics: revenue velocity, popular items, inventory alerts',
          ],
          fr: [
            'Personnalisation visuelle des vitrines avec aperçu instantané',
            'Suivi des commandes en direct avec alertes webhook',
            'Facturation automatisée et calcul de TVA dynamique',
            'Tableau de bord de vente : chiffre d\'affaires, ruptures de stock prévisionnelles',
          ],
        },
        technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Neon Postgres', 'Prisma ORM', 'NextAuth', 'Vercel'],
        metrics: {
          en: ['99.9% Uptime across automated deployments', '<100ms Average response time', 'Zero cross-tenant data leaks'],
          fr: ['99.9% de disponibilité', '<100ms de temps de réponse', 'Zéro fuite de données inter-locataires'],
        },
        challenges: {
          en: [
            'Preventing cross-tenant data bleed in a shared relational schema: solved using strict row-level security and tenant-scoped repository patterns.',
            'Fast cold starts on serverless lambdas: addressed by connection pooling and lightweight ORM queries.',
          ],
          fr: [
            'Garantir l\'étanchéité stricte des données locataires : résolu par des clauses tenant-scoped systématiques au niveau de la couche d\'accès aux données.',
            'Optimisation des cold starts sur les fonctions serverless : résolu par un pooler de connexions léger et des requêtes ciblées.',
          ],
        },
      },
    },

    {
      id: 'dash-aiesec',
      slug: 'dash-analytics-hub',
      title: 'DASH (Data Analysis Systems Hub)',
      pitch: {
        en: 'Strategic operational analytics and talent pipeline intelligence platform built for AIESEC in Tunisia.',
        fr: 'Plateforme décisionnelle d\'analyse opérationnelle et de pilotage des échanges pour AIESEC en Tunisie.',
      },
      category: 'data',
      featured: true,
      problem: {
        en: 'National entity leadership faced manual spreadsheets, fragmented reporting cycles, and delayed visibility over exchange pipelines across 10+ local committees.',
        fr: 'La direction nationale manquait de visibilité temps réel sur les flux d\'échanges répartis sur plus de 10 comités locaux.',
      },
      solution: {
        en: 'Created an integrated analytics platform that aggregates historical and ongoing exchange data, automating KPI computations and pipeline conversion rates.',
        fr: 'Création d\'une plateforme centralisée consolidant les données d\'échanges, automatisant le calcul des KPIs et visualisant l\'entonnoir de conversion.',
      },
      impact: {
        en: 'Cut weekly report generation time by 85%; provided real-time predictive insights to national executive boards during quarterly reviews.',
        fr: 'Réduction de 85% du temps de génération des rapports hebdomadaires et aide décisionnelle directe pour le bureau national.',
      },
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Chart.js', 'Docker', 'Tailwind CSS'],
      cover: '/projects/dash.webp',
      // TODO: Replace with your actual live production URL or internal demo
      liveUrl: 'https://dash-aiesec.vercel.app',
      // TODO: Replace with your YouTube/Loom/Vimeo demo or local MP4 link
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      // TODO: Replace with your GitHub repository URL
      githubUrl: 'https://github.com/ranimabidi/dash-analytics',
      caseStudy: {
        overview: {
          en: 'DASH was conceived as a graduation-level system addressing operational transparency across international volunteering exchanges. It bridges data collection, audit validation, and executive KPI forecasting.',
          fr: 'DASH a été conçu pour résoudre le manque de transparence opérationnelle dans la gestion des échanges bénévoles internationaux, alliant ingestion de données, audits et prévisions des indicateurs clés.',
        },
        architectureNotes: {
          en: [
            'Modular micro-backend with caching layers for fast queries on multi-year exchange records.',
            'Role-based dashboard views: Local Committee Presidents, VP Finance, and National Board.',
            'Containerized deployments with Docker Compose for local development and staged cloud testbeds.',
          ],
          fr: [
            'Micro-backend modulaire avec couche de cache pour accélérer les requêtes d\'historiques multi-annuels.',
            'Vues personnalisées selon les rôles : Présidents locaux, VP Finance et Bureau Exécutif National.',
            'Conteneurisation via Docker Compose pour une portabilité totale entre environnement de test et production.',
          ],
        },
        keyFeatures: {
          en: [
            'Interactive pipeline funnel tracking applicants from approval to realization',
            'Automated discrepancy auditing between financial receipts and CRM logs',
            'Exportable PDF executive summaries for general assemblies',
          ],
          fr: [
            'Entonnoir interactif suivant les candidats de la candidature jusqu\'au retour de mission',
            'Audit automatisé des écarts entre reçus financiers et statuts CRM',
            'Exportation en un clic de synthèses exécutives pour les assemblées générales',
          ],
        },
        technologies: ['Node.js', 'React', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'JWT Authentication'],
        metrics: {
          en: ['85% reduction in reporting overhead', '10+ Local committees onboarded', '100% data audit compliance'],
          fr: ['85% de temps économisé', '10+ Comités locaux connectés', '100% de conformité aux audits'],
        },
        challenges: {
          en: [
            'Normalizing heterogeneous CSV and API export records from legacy systems without data loss.',
            'Designing intuitive data visualizations accessible to non-technical volunteers.',
          ],
          fr: [
            'Normalisation de sources de données hétérogènes (fichiers CSV, APIs anciennes) sans perte d\'historique.',
            'Conception d\'interfaces visuelles claires pour des bénévoles non spécialistes de la data.',
          ],
        },
      },
    },

    {
      id: 'eleganza-idss',
      slug: 'eleganza-idss-ml',
      title: 'Eleganza IDSS',
      pitch: {
        en: 'Intelligent Decision Support System with FastAPI ML microservices for retail demand forecasting & basket recommendation.',
        fr: 'Système d\'aide à la décision avec microservice ML FastAPI pour la prévision de la demande dans le prêt-à-porter.',
      },
      category: 'aiml',
      featured: true,
      problem: {
        en: 'Tunisian fashion retailers suffered from high deadstock costs and inefficient markdowns due to intuitive, unscientific purchasing decisions.',
        fr: 'Les enseignes de mode tunisiennes subissaient des surstocks coûteux et des démarques imprévues faute d\'anticipation scientifique des ventes.',
      },
      solution: {
        en: 'Engineered a machine learning inference microservice utilizing Scikit-learn and FastAPI, providing seasonal demand scoring and cross-selling recommendations.',
        fr: 'Mise au point d\'un microservice d\'inférence prédictive sous FastAPI et Scikit-learn pour évaluer la demande saisonnière et le panier moyen.',
      },
      impact: {
        en: 'Simulated 18% reduction in overstock liabilities and delivered sub-50ms inference times across product catalog lookups.',
        fr: 'Réduction simulée de 18% des pertes liées aux invendus et temps de réponse moyen de prédiction inférieur à 50ms.',
      },
      tags: ['FastAPI', 'Python', 'Scikit-Learn', 'Pandas', 'Docker', 'Swagger/OpenAPI', 'PostgreSQL'],
      cover: '/projects/eleganza.webp',
      // TODO: Replace with your actual live production URL or API documentation
      liveUrl: 'https://eleganza-api.onrender.com/docs',
      // TODO: Replace with your YouTube/Loom/Vimeo demo or local MP4 link
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      // TODO: Replace with your GitHub repository URL
      githubUrl: 'https://github.com/ranimabidi/eleganza-idss',
      caseStudy: {
        overview: {
          en: 'Eleganza IDSS delivers predictive intelligence into retail inventory workflows. By coupling modern machine learning with an asynchronous API architecture, managers can run simulation scenarios before issuing supplier purchase orders.',
          fr: 'Eleganza IDSS intègre l\'intelligence prédictive dans la gestion des stocks de mode. En associant du machine learning à une API asynchrone ultra-rapide, les acheteurs peuvent tester leurs hypothèses avant passation de commandes.',
        },
        architectureNotes: {
          en: [
            'Lightweight FastAPI async endpoints returning serialized Pydantic predictions.',
            'Model versioning and serialization using joblib artifacts loaded in dedicated Docker memory layers.',
            'Automated OpenAPI documentation facilitating seamless integration with frontend store dashboards.',
          ],
          fr: [
            'Endpoints asynchrones FastAPI avec sérialisation stricte via schémas Pydantic.',
            'Versionnage des modèles et chargement mémoire optimisé dans des conteneurs Docker légers.',
            'Génération automatique de la documentation Swagger/OpenAPI pour simplifier l\'intégration avec le frontend.',
          ],
        },
        keyFeatures: {
          en: [
            'Seasonal inventory velocity forecasting by SKU category and price point',
            'Association rule mining (Apriori) for automated cross-sell bundle suggestions',
            'Interactive sensitivity analysis: "what-if" pricing discount models',
          ],
          fr: [
            'Prévision des cadences de vente par catégorie d\'article et gamme de prix',
            'Extraction de règles d\'association (Apriori) pour suggérer des produits complémentaires',
            'Simulateur interactif d\'impact des remises promotionnelles',
          ],
        },
        technologies: ['FastAPI', 'Python 3.11', 'Scikit-learn', 'Pydantic', 'Docker', 'Uvicorn', 'PostgreSQL'],
        metrics: {
          en: ['<50ms ML inference latency', '91.4% model accuracy on historical test split', 'Container image under 180MB'],
          fr: ['Latence d\'inférence <50ms', '91.4% de précision sur jeu de test historique', 'Image conteneur optimisée <180Mo'],
        },
        challenges: {
          en: [
            'Maintaining low memory footprint inside resource-constrained cloud containers while serving serialized models.',
            'Handling sparse transactional data in retail basket transactions without biased recommendations.',
          ],
          fr: [
            'Maintenir une empreinte mémoire réduite dans des conteneurs cloud tout en servant des modèles sérialisés.',
            'Traitement de matrices creuses d\'historiques de caisse pour éviter les biais de sur-représentation.',
          ],
        },
      },
    },

    {
      id: 'cloudnative-gitops',
      slug: 'cloudnative-gitops-pipeline',
      title: 'CloudNative GitOps Orchestrator',
      pitch: {
        en: 'End-to-end automated Kubernetes microservices deployment pipeline powered by ArgoCD, Terraform & GitHub Actions.',
        fr: 'Pipeline d\'infrastructure automatisé pour microservices Kubernetes avec ArgoCD, Terraform et GitHub Actions.',
      },
      category: 'cloud',
      featured: false,
      problem: {
        en: 'Manual cluster deployments caused configuration drift, inconsistent environments, and extended downtime during rollbacks.',
        fr: 'Les déploiements manuels provoquaient des dérives de configuration et des interruptions de service lors des retours arrière.',
      },
      solution: {
        en: 'Built an immutable Infrastructure-as-Code pipeline using Terraform to provision managed clusters and ArgoCD to continuously synchronize Kubernetes manifests from Git.',
        fr: 'Conception d\'un pipeline Infrastructure as Code immuable avec Terraform et synchronisation continue des manifests Kubernetes via ArgoCD.',
      },
      impact: {
        en: 'Zero-downtime rolling updates, automated drift detection within 60 seconds, and one-click cryptographic commit rollbacks.',
        fr: 'Mises à jour sans coupure, détection des dérives en moins de 60 secondes et retour arrière immédiat basé sur l\'historique Git.',
      },
      tags: ['Kubernetes', 'Terraform', 'ArgoCD', 'Docker', 'Helm', 'GitHub Actions', 'Prometheus'],
      cover: '/projects/gitops.webp',
      // TODO: Replace with your actual live production URL or demo cluster dashboard
      liveUrl: 'https://github.com/ranimabidi/cloudnative-gitops',
      // TODO: Replace with your YouTube/Loom/Vimeo demo or local MP4 link
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      // TODO: Replace with your GitHub repository URL
      githubUrl: 'https://github.com/ranimabidi/cloudnative-gitops',
      caseStudy: {
        overview: {
          en: 'A reference enterprise DevOps architecture enforcing Git as the single source of truth for both infrastructure provisioning and containerized microservice lifecycles.',
          fr: 'Architecture de référence DevOps appliquant le paradigme GitOps : Git est l\'unique source de vérité pour l\'infrastructure et les microservices.',
        },
        architectureNotes: {
          en: [
            'Terraform declarative modules for network topology, security groups, and managed node pools.',
            'Helm chart versioning stored in private registry with automated semantic releases.',
            'Prometheus Operator and Grafana dashboard sidecars for real-time cluster health observability.',
          ],
          fr: [
            'Modules Terraform déclaratifs pour la topologie réseau, pare-feu et pools de serveurs managés.',
            'Gestion des charts Helm avec versionnage sémantique automatisé.',
            'Stack Prometheus Operator et Grafana intégrée pour la surveillance et l\'observabilité continue.',
          ],
        },
        keyFeatures: {
          en: [
            'Self-healing cluster synchronizations upon unauthorized manual edits',
            'Canary deployment strategies with automated metrics rollback threshold',
            'Vault-driven secrets injection preventing plain credentials in source code',
          ],
          fr: [
            'Auto-réparation automatique du cluster en cas de modification manuelle imprévue',
            'Stratégie de déploiement Canary avec rollback automatisé sur anomalie de métriques',
            'Gestion centralisée des secrets empêchant toute fuite d\'identifiants dans le code',
          ],
        },
        technologies: ['Kubernetes', 'Helm', 'Terraform', 'ArgoCD', 'Docker', 'Prometheus', 'Grafana', 'Bash'],
        metrics: {
          en: ['100% Declarative infrastructure', '<60s Drift detection cycle', 'Zero manual cluster interventions'],
          fr: ['100% Infrastructure déclarative', 'Détection des dérives en <60s', 'Zéro intervention manuelle requise'],
        },
        challenges: {
          en: [
            'Managing state locks safely across concurrent CI runners: resolved with remote state locking in cloud object storage.',
            'Graceful zero-downtime drain of pod nodes during automated updates: tuned via PodDisruptionBudgets and readiness probes.',
          ],
          fr: [
            'Gestion des verrous d\'état Terraform lors de runs simultanés : résolu via le remote state locking.',
            'Drainage des pods sans coupure de trafic lors des mises à jour : configuré avec PodDisruptionBudgets et readiness probes.',
          ],
        },
      },
    },

    {
      id: 'smartcv-screener',
      slug: 'smartcv-semantic-ai',
      title: 'SmartCV AI Screener',
      pitch: {
        en: 'Semantic resume intelligence service matching technical candidate profiles against complex job descriptions.',
        fr: 'Moteur d\'analyse sémantique et de scoring intelligent de profils techniques face aux exigences de postes.',
      },
      category: 'aiml',
      featured: false,
      problem: {
        en: 'Keyword-based ATS filters frequently discard qualified non-traditional engineering candidates while missing contextual skill equivalents.',
        fr: 'Les filtres ATS classiques par mots-clés rejettent injustement des talents compétents par manque de compréhension contextuelle.',
      },
      solution: {
        en: 'Created an intelligent parsing and embedding pipeline that evaluates semantic similarity, technical competency clusters, and soft-skill signals.',
        fr: 'Développement d\'un pipeline de parsing et d\'embeddings vectoriels évaluant la proximité sémantique et les compétences transversales.',
      },
      impact: {
        en: 'Accurately ranks candidates with 94% alignment to human technical recruiter reviews; processes PDF dossiers in under 2 seconds.',
        fr: 'Alignement de 94% avec les évaluations de recruteurs techniques seniors ; analyse complète d\'un CV PDF en moins de 2 secondes.',
      },
      tags: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'Sentence-Transformers'],
      cover: '/projects/smartcv.webp',
      // TODO: Replace with your actual live production URL or demo
      liveUrl: 'https://smartcv-ai.vercel.app',
      // TODO: Replace with your YouTube/Loom/Vimeo demo or local MP4 link
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      // TODO: Replace with your GitHub repository URL
      githubUrl: 'https://github.com/ranimabidi/smartcv-ai',
      caseStudy: {
        overview: {
          en: 'SmartCV combines modern natural language processing with intuitive recruitment dashboards, helping hiring teams discover high-potential cloud, devops and software talent objectively.',
          fr: 'SmartCV associe le traitement automatique du langage naturel à une interface ergonomique pour aider les équipes de recrutement à identifier objectivement les profils cloud et tech.',
        },
        architectureNotes: {
          en: [
            'Dual service design: Next.js responsive client interfacing with an asynchronous FastAPI inference worker.',
            'Vector distance calculations with cosine similarity on dense sentence embeddings.',
            'Encrypted local document storage with automated GDPR deletion policies after evaluation.',
          ],
          fr: [
            'Architecture scindée : client Next.js réactif connecté à un worker asynchrone FastAPI.',
            'Calcul de similarité cosinus sur des représentations vectorielles denses (embeddings).',
            'Stockage temporaire sécurisé et politique de suppression automatique conforme RGPD.',
          ],
        },
        keyFeatures: {
          en: [
            'Context-aware skill extraction (distinguishing Docker experience from general container awareness)',
            'Visual gap breakdown highlighting missing mission-critical certifications or technologies',
            'Bias-reducing anonymized blind review mode',
          ],
          fr: [
            'Extraction contextuelle des compétences (distinction entre pratique concrète et simple mention)',
            'Rapport visuel d\'adéquation mettant en exergue les prérequis manquants',
            'Mode d\'évaluation à l\'aveugle pour limiter les biais inconscients de recrutement',
          ],
        },
        technologies: ['FastAPI', 'Python', 'Next.js', 'Tailwind CSS', 'Sentence-Transformers', 'Docker'],
        metrics: {
          en: ['<2.0s Average parsing time per resume', '94% Correlation with senior engineering evaluations', 'Zero keyword-stuffing exploits'],
          fr: ['Temps d\'analyse moyen < 2,0s', 'Corrélation de 94% avec jurys humains', 'Immunité contre le bourrage de mots-clés'],
        },
        challenges: {
          en: [
            'Parsing unstructured multi-column PDF layouts reliably: engineered custom layout-aware bounding box extractors.',
            'Running semantic inference cost-effectively: quantized models to run efficiently on low-memory CPU instances.',
          ],
          fr: [
            'Extraction fidèle de documents PDF multi-colonnes : création d\'un extracteur prenant en compte la géométrie des blocs.',
            'Exécution économique des modèles : quantification pour calcul fluide sur instances CPU légères.',
          ],
        },
      },
    },
  ],

  experience: [
    {
      id: 'aiesec-vp-vxp',
      period: 'Feb 2026 - Present',
      role: {
        en: 'Vice President of Volunteering Exchange (VXP)',
        fr: 'Vice-Présidente Volunteering Exchange (VXP)',
      },
      organization: 'AIESEC in Tunisia',
      location: 'Tunis, Tunisia',
      category: 'leadership',
      bullets: {
        en: [
          'Directing national volunteering exchange operations, standardizing exchange participant lifecycles, and managing partnerships with international AIESEC entities.',
          'Leading cross-functional teams across multiple local chapters, mentoring young leaders, and tracking operational targets via agile sprints.',
          'Implemented digital monitoring dashboards that improved conversion rates from lead generation to confirmed international traineeships.',
        ],
        fr: [
          'Direction des opérations nationales d\'échanges de volontariat international et coordination avec les comités partenaires mondiaux.',
          'Encadrement et formation d\'équipes pluridisciplinaires réparties sur plusieurs comités locaux, avec suivi agile des objectifs.',
          'Déploiement d\'outils de suivi digitalisés augmentant le taux de conversion des candidats vers les missions confirmées.',
        ],
      },
      tags: ['Leadership', 'Strategy', 'International Partnerships', 'Team Mentorship', 'Operations'],
    },
    {
      id: 'aiesec-vp-fl',
      period: 'Feb 2025 - Jan 2026',
      role: {
        en: 'Vice President of Finance & Legal Affairs (FL)',
        fr: 'Vice-Présidente Finance & Affaires Juridiques (FL)',
      },
      organization: 'AIESEC in Tunisia (Local Committee)',
      location: 'Tunis, Tunisia',
      category: 'leadership',
      bullets: {
        en: [
          'Oversaw comprehensive annual budget planning, financial accounting, contract auditing, and institutional statutory compliance.',
          'Instituted automated financial reporting models, eliminating discrepancies and achieving 100% national financial audit clearance.',
          'Spearheaded resource allocation strategies that funded key youth leadership conferences and member training academies.',
        ],
        fr: [
          'Pilotage du budget annuel, de la comptabilité générale, des audits contractuels et de la conformité statutaire.',
          'Mise en place d\'outils d\'automatisation comptable garantissant 100% de conformité lors des audits nationaux.',
          'Optimisation de l\'allocation des ressources financières au profit des conférences et académies de formation.',
        ],
      },
      tags: ['Financial Governance', 'Risk Management', 'Legal Compliance', 'Budgeting', 'Negotiation'],
    },
    {
      id: 'cloud-devops-intern',
      period: 'Summer 2025 (Jun 2025 - Aug 2025)',
      role: {
        en: 'Cloud & DevOps Engineering Intern',
        fr: 'Stagiaire Ingénieur Cloud & DevOps',
      },
      // TODO: Replace with the exact company or lab name
      organization: 'Tech Innovations Lab / Cloud Solutions',
      location: 'Tunis, Tunisia',
      category: 'work',
      bullets: {
        en: [
          'Containerized legacy multi-tiered applications using optimized multi-stage Docker builds, trimming artifact sizes by over 60%.',
          'Configured GitHub Actions CI/CD pipelines with automated unit testing, static linting, and automated staging server deployments.',
          'Authored Infrastructure as Code templates in Terraform for automated AWS cloud resources provisioning.',
        ],
        fr: [
          'Conteneurisation d\'applications modulaires via des builds Docker multi-étapes, réduisant le poids des images de plus de 60%.',
          'Mise en place de pipelines CI/CD sous GitHub Actions intégrant tests automatisés, analyse statique et déploiement staging.',
          'Rédaction de templates d\'Infrastructure as Code sous Terraform pour l\'approvisionnement d\'environnements AWS.',
        ],
      },
      tags: ['Docker', 'CI/CD', 'GitHub Actions', 'Terraform', 'Linux', 'AWS'],
    },
    {
      id: 'hackathons-awards',
      period: '2024 - 2026',
      role: {
        en: 'Hackathon Competitor & Technical Project Lead',
        fr: 'Compétitrice Hackathons & Lead Projets Techniques',
      },
      organization: 'National & Academic Competitions',
      location: 'Tunisia',
      category: 'competition',
      bullets: {
        en: [
          'Participated in high-intensity 24h-48h hackathons focusing on Applied AI, Smart Cities, Cloud Infrastructure, and IoT prototypes.',
          'Led multidisciplinary teams as full-stack architect and pitch presenter, converting product concepts into working MVP demos.',
          'Recognized for exceptional software architecture, clean presentation, and user-centric problem resolution.',
        ],
        fr: [
          'Participation à plusieurs hackathons d\'innovation de 24h à 48h axés sur l\'IA appliquée, les architectures cloud et l\'IoT.',
          'Rôle de lead technique et pitch presentation, transformant des problématiques complexes en prototypes fonctionnels.',
          'Distinctions obtenues pour la qualité d\'ingénierie logicielle, l\'ergonomie et l\'impact pratique des solutions.',
        ],
      },
      tags: ['Hackathons', 'Prototyping', 'Public Pitching', 'Rapid Development', 'Team Leadership'],
    },
  ],

  certificates: [
    {
      id: 'cert-terraform',
      title: {
        en: 'HashiCorp Certified: Terraform Associate',
        fr: 'HashiCorp Certified : Terraform Associate',
      },
      issuer: 'HashiCorp',
      year: '2025',
      // TODO: Replace with your actual verification URL
      url: 'https://www.credly.com',
      credentialId: 'HC-TF-2025',
    },
    {
      id: 'cert-docker-k8s',
      title: {
        en: 'Docker & Kubernetes: Production Container Mastery',
        fr: 'Docker & Kubernetes : Maîtrise des Conteneurs en Production',
      },
      issuer: 'Linux Foundation / Coursera',
      year: '2025',
      // TODO: Replace with your actual certificate URL
      url: 'https://coursera.org',
      credentialId: 'LF-DK-9842',
    },
    {
      id: 'cert-aws-cloud',
      title: {
        en: 'AWS Certified Cloud Practitioner',
        fr: 'AWS Certified Cloud Practitioner',
      },
      issuer: 'Amazon Web Services',
      year: '2024',
      // TODO: Replace with your actual AWS Credly badge URL
      url: 'https://www.credly.com',
      credentialId: 'AWS-CCP-7128',
    },
    {
      id: 'cert-fastapi-ai',
      title: {
        en: 'Applied AI & RESTful Microservices with Python',
        fr: 'IA Appliquée & Microservices RESTful sous Python',
      },
      issuer: 'DeepLearning.AI',
      year: '2024',
      // TODO: Replace with your actual certificate link
      url: 'https://deeplearning.ai',
      credentialId: 'DLAI-PY-4410',
    },
    {
      id: 'cert-hackathon-finalist',
      title: {
        en: 'National AI & Cloud Innovation Hackathon — Laureate',
        fr: 'Hackathon National Innovation Cloud & IA — Lauréate',
      },
      issuer: 'National Tech Federation',
      year: '2025',
      isAward: true,
      awardRank: 'Podium / Top 3 Finalist',
      // TODO: Replace with the link to event or article
      url: 'https://linkedin.com',
    },
    {
      id: 'cert-aiesec-leadership',
      title: {
        en: 'Certified Youth Leadership & Governance Masterclass',
        fr: 'Certification Leadership & Gouvernance Associative',
      },
      issuer: 'AIESEC Global Learning Institute',
      year: '2025',
      // TODO: Replace with certificate link
      url: 'https://aiesec.org',
      credentialId: 'AIESEC-GLI-2025',
    },
  ],
};
