import { ProjectItem } from '@/types/portfolio';

export const projectsData: ProjectItem[] = [
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
    featuredRank: 1,
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
    screenshots: [
      '/projects/dejitalist.webp',
      '/projects/dejitalist.webp',
    ],
    // TODO: Replace with your actual live production URL
    liveUrl: 'https://dejitalist.vercel.app',
    healthEndpoint: 'https://dejitalist.vercel.app',
    // TODO: Replace with your YouTube/Loom/Vimeo demo or local MP4 link
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    githubUrl: 'https://github.com/Ranim-Abidi/dejitalist',
    relatedSkillIds: ['nextjs', 'typescript', 'postgresql', 'docker', 'vercel', 'tailwind'],
    caseStudy: {
      overview: {
        en: 'Dejitalist was built as a full-scale multi-tenant commerce engine tailored to modern digital retailers. Each merchant receives an isolated workspace, customizable product storefront, automated checkout flow, and live inventory auditing.',
        fr: 'Dejitalist est un moteur e-commerce multi-locataire complet conçu pour les commerçants modernes. Chaque boutique bénéficie d\'un espace cloisonné, d\'une vitrine personnalisable et d\'une gestion des stocks en temps réel.',
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
|                 Next.js 15 App Router Core                |
|       Server Components | React 19 Actions | Auth.js      |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|               Prisma ORM & Connection Pool                |
|            Tenant Row-Level Security Scoping              |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|           Neon Serverless PostgreSQL (Multi-Branch)       |
+-----------------------------------------------------------+
      `,
      architectureNotes: {
        en: [
          'Tenant isolation via Next.js middleware hostname detection and scoped database queries.',
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
      technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Neon Postgres', 'Prisma ORM', 'NextAuth', 'Vercel', 'Docker'],
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
      lessonsLearned: {
        en: [
          'Multi-tenant routing at the edge requires caching domain lookups to avoid hammering the database on static assets.',
          'Prisma client instances must be carefully managed in serverless runtimes to avoid socket exhaustion.',
        ],
        fr: [
          'Le routage multi-tenant à l\'Edge exige un cache sur les domaines pour ne pas surcharger la base de données.',
          'L\'instanciation du client Prisma en environnement serverless doit être optimisée pour prévenir l\'épuisement des sockets.',
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
    featuredRank: 2,
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
    screenshots: [
      '/projects/dash.webp',
    ],
    // TODO: Replace with your actual live production URL or internal demo
    liveUrl: 'https://dash-aiesec.vercel.app',
    healthEndpoint: 'https://dash-aiesec.vercel.app',
    // TODO: Replace with your YouTube/Loom/Vimeo demo or local MP4 link
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    githubUrl: 'https://github.com/Ranim-Abidi/dash-analytics',
    relatedSkillIds: ['nodejs', 'react', 'postgresql', 'docker', 'data-pipeline', 'bi-tools'],
    caseStudy: {
      overview: {
        en: 'DASH was conceived as a graduation-level system addressing operational transparency across international volunteering exchanges. It bridges data collection, audit validation, and executive KPI forecasting.',
        fr: 'DASH a été conçu pour résoudre le manque de transparence opérationnelle dans la gestion des échanges bénévoles internationaux, alliant ingestion de données, audits et prévisions des indicateurs clés.',
      },
      architectureDiagram: `
+-----------------------------------------------------------+
|          10+ AIESEC Local Committee User Interfaces       |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|               Node.js & Express REST Microservice         |
|               JWT Auth & Role Permission Gateway          |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|            ETL Pipeline & KPI Computation Engine          |
|       Funnel Aggregation, Anomaly Detection, Metrics      |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|            PostgreSQL Normalized Data Warehouse           |
+-----------------------------------------------------------+
      `,
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
      technologies: ['Node.js', 'React', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'JWT Authentication', 'Chart.js'],
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
      lessonsLearned: {
        en: [
          'Data validation at the point of entry prevents 90% of downstream reporting anomalies.',
          'User adoption in voluntary organizations depends directly on UI simplicity and instant feedback.',
        ],
        fr: [
          'La validation des données dès l\'entrée évite 90% des anomalies dans les rapports décisionnels.',
          'L\'adoption par des équipes bénévoles dépend directement de la clarté et de la fluidité de l\'interface.',
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
    featuredRank: 3,
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
    screenshots: [
      '/projects/eleganza.webp',
    ],
    // TODO: Replace with your actual live production URL or API documentation
    liveUrl: 'https://eleganza-api.onrender.com/docs',
    healthEndpoint: 'https://eleganza-api.onrender.com/docs',
    // TODO: Replace with your YouTube/Loom/Vimeo demo or local MP4 link
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    githubUrl: 'https://github.com/Ranim-Abidi/eleganza-idss',
    relatedSkillIds: ['fastapi', 'python', 'scikit-learn', 'docker', 'data-pipeline'],
    caseStudy: {
      overview: {
        en: 'Eleganza IDSS delivers predictive intelligence into retail inventory workflows. By coupling modern machine learning with an asynchronous API architecture, managers can run simulation scenarios before issuing supplier purchase orders.',
        fr: 'Eleganza IDSS intègre l\'intelligence prédictive dans la gestion des stocks de mode. En associant du machine learning à une API asynchrone ultra-rapide, les acheteurs peuvent tester leurs hypothèses avant passation de commandes.',
      },
      architectureDiagram: `
+-----------------------------------------------------------+
|               Store Manager Dashboard / POS               |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|          FastAPI High-Performance Async Microservice       |
|             Uvicorn ASGI | Pydantic Request Validation     |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|              Scikit-Learn Inference Pipeline              |
|        Seasonal Regression Model | Apriori Basket Mining  |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|              PostgreSQL Historical Transaction DB         |
+-----------------------------------------------------------+
      `,
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
      lessonsLearned: {
        en: [
          'Asynchronous Python endpoints combined with multi-worker Uvicorn configurations can comfortably handle hundreds of inference requests per second on minimal CPU.',
          'Data cleaning and outliers detection represent 80% of machine learning model reliability in retail.',
        ],
        fr: [
          'L\'asynchronisme de FastAPI couplé à plusieurs workers Uvicorn traite des centaines d\'inférences par seconde avec un CPU minimal.',
          'Le nettoyage des données et le traitement des valeurs aberrantes représentent 80% de la fiabilité d\'un modèle retail.',
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
    screenshots: [
      '/projects/gitops.webp',
    ],
    // TODO: Replace with your actual live production URL or demo cluster dashboard
    liveUrl: 'https://github.com/Ranim-Abidi/cloudnative-gitops',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    githubUrl: 'https://github.com/Ranim-Abidi/cloudnative-gitops',
    relatedSkillIds: ['kubernetes', 'terraform', 'docker', 'cicd', 'linux', 'prometheus'],
    caseStudy: {
      overview: {
        en: 'A reference enterprise DevOps architecture enforcing Git as the single source of truth for both infrastructure provisioning and containerized microservice lifecycles.',
        fr: 'Architecture de référence DevOps appliquant le paradigme GitOps : Git est l\'unique source de vérité pour l\'infrastructure et les microservices.',
      },
      architectureDiagram: `
+-----------------------------------------------------------+
|                    Git Repository (Source)                |
|            Application Code  &  Kubernetes Manifests      |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                     GitHub Actions CI                     |
|           Automated Tests, Linting, Multi-Stage Docker     |
|              Push Container to Secure Cloud Registry       |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                   ArgoCD GitOps Controller                |
|             Continuous Drift Detection & Sync             |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|             Managed Kubernetes Cluster (K8s)              |
|        Canary Rollouts | Prometheus Metrics | Grafana     |
+-----------------------------------------------------------+
      `,
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
      lessonsLearned: {
        en: [
          'GitOps guarantees auditability: every infrastructure change has an associated commit author and timestamp.',
          'Declarative monitoring configurations via Prometheus Operator make alerting reproducible across clusters.',
        ],
        fr: [
          'Le GitOps garantit l\'auditabilité : chaque changement d\'infrastructure a un auteur et un timestamp de commit.',
          'La configuration déclarative du monitoring via Prometheus Operator rend les alertes transposables d\'un cluster à l\'autre.',
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
    screenshots: [
      '/projects/smartcv.webp',
    ],
    // TODO: Replace with your actual live production URL or demo
    liveUrl: 'https://smartcv-ai.vercel.app',
    healthEndpoint: 'https://smartcv-ai.vercel.app',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    githubUrl: 'https://github.com/Ranim-Abidi/smartcv-ai',
    relatedSkillIds: ['python', 'fastapi', 'nextjs', 'docker', 'scikit-learn'],
    caseStudy: {
      overview: {
        en: 'SmartCV combines modern natural language processing with intuitive recruitment dashboards, helping hiring teams discover high-potential cloud, devops and software talent objectively.',
        fr: 'SmartCV associe le traitement automatique du langage naturel à une interface ergonomique pour aider les équipes de recrutement à identifier objectivement les profils cloud et tech.',
      },
      architectureDiagram: `
+-----------------------------------------------------------+
|            Recruiter Portal / Candidate Upload            |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|              Document Ingestion & Text Extraction         |
|            Layout-Aware PDF Parser & Section Segmenter    |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|             Semantic Vector Embedding Worker              |
|        Sentence-Transformers | Cosine Similarity Matrix   |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|           Scoring Dashboard & Skills Gap Visualizer       |
+-----------------------------------------------------------+
      `,
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
      lessonsLearned: {
        en: [
          'Keyword stuffing can be fully countered by semantic vector clustering.',
          'Quantized embedding models can reduce inference RAM by 70% with negligible loss in ranking fidelity.',
        ],
        fr: [
          'Le bourrage de mots-clés est neutralisé par la similarité sémantique vectorielle.',
          'La quantification des modèles d\'embeddings réduit la RAM de 70% sans perte de pertinence de classement.',
        ],
      },
    },
  },
];
