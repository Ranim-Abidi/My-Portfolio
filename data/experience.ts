import { ExperienceItem, EngineeringMilestone } from '@/types/portfolio';

export const engineeringMilestonesData: EngineeringMilestone[] = [
  {
    id: 'milestone-oxit',
    period: '2022 – 2025',
    title: {
      en: 'Founded OXIT (Agri-IoT)',
      fr: 'Fondation d’OXIT (Agri-IoT)',
    },
    description: {
      en: 'National Student Entrepreneur Status (SNEE, cohort #1, Jul 2023) & incubated IoT/ML platform.',
      fr: 'Statut National Étudiant Entrepreneur (SNEE promo #1, juil 2023) & plateforme IoT/ML.',
    },
    link: {
      label: { en: 'View OXIT Platform', fr: 'Voir la plateforme OXIT' },
      href: '/projects/oxit-smart-agriculture',
      type: 'project',
    },
  },
  {
    id: 'milestone-dash-start',
    period: 'Feb 2026',
    title: {
      en: 'Sole DevOps Engineer on DASH',
      fr: 'Unique Ingénieure DevOps sur DASH',
    },
    description: {
      en: 'Took complete ownership of CI/CD, automated Vercel releases, and containerized pipelines.',
      fr: 'Responsable unique de la CI/CD, des déploiements Vercel et de la conteneurisation.',
    },
    link: {
      label: { en: 'View DASH Architecture', fr: 'Voir l’architecture DASH' },
      href: '/projects/dash-analytics-hub',
      type: 'project',
    },
  },
  {
    id: 'milestone-dash-delivery',
    period: 'Jul 2026',
    title: {
      en: 'DASH Delivered as End-of-Study Project',
      fr: 'Livraison de DASH en Projet de Fin d’Études',
    },
    description: {
      en: 'Serving 600+ users in Tunisia and 2,000+ internationally with zero-downtime releases.',
      fr: 'Utilisé par 600+ membres en Tunisie et 2 000+ à l’international sans coupure de service.',
    },
    link: {
      label: { en: 'Read DASH Case Study', fr: 'Lire l’étude de cas DASH' },
      href: '/projects/dash-analytics-hub',
      type: 'project',
    },
  },
  {
    id: 'milestone-dejitalist-live',
    period: 'Aug 2026',
    title: {
      en: 'Dejitalist Live on Vercel',
      fr: 'Dejitalist Déployé en Production sur Vercel',
    },
    description: {
      en: 'Shipped multi-tenant e-commerce platform with automated payments, marketplaces, and KVKK compliance.',
      fr: 'Livraison de la plateforme multi-tenant avec paiements, marketplaces et conformité KVKK.',
    },
    link: {
      label: { en: 'View Dejitalist', fr: 'Voir Dejitalist' },
      href: '/projects/dejitalist-saas',
      type: 'project',
    },
  },
  {
    id: 'milestone-aiesec-greece',
    period: 'Jul 2026',
    title: {
      en: 'Director of Information Management, AIESEC in Greece',
      fr: 'Directrice de la Gestion de l’Information, AIESEC en Grèce',
    },
    description: {
      en: 'Took ownership of hosting, server administration, availability, and access security.',
      fr: 'Prise en charge de l’hébergement, de l’administration serveur et de la sécurité des accès.',
    },
    link: {
      label: { en: 'View Role Details', fr: 'Voir les détails du rôle' },
      href: '#aiesec-greece-im',
      type: 'role',
    },
  },
  {
    id: 'milestone-certifications',
    period: 'Oct – Nov 2026',
    title: {
      en: 'Hedera HCDA/HCF & AWS Academy Credentials',
      fr: 'Certifications Hedera HCDA/HCF & AWS Academy',
    },
    description: {
      en: 'Verified cloud operations, security foundations, and decentralized application certifications.',
      fr: 'Accréditations en opérations cloud, fondations de sécurité et technologies distribuées.',
    },
    link: {
      label: { en: 'View Verified Credentials', fr: 'Voir les certifications' },
      href: '/skills#certifications-heading',
      type: 'cert',
    },
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'aiesec-greece-im',
    role: {
      en: 'Director of Information Management (MC IM Manager)',
      fr: 'Directrice de la Gestion de l’Information (MC IM Manager)',
    },
    organization: 'AIESEC in Greece',
    location: 'Remote',
    workMode: 'Remote',
    start: 'Jul 2026',
    end: 'Present',
    period: 'Jul 2026 – Present',
    isCurrent: true,
    summary: {
      en: 'Own hosting, server administration, and security for the national entity web services while building internal tools that automate data workflows.',
      fr: 'Responsable de l’hébergement, de l’administration serveur et de la sécurité des services web tout en développant des outils d’automatisation.',
    },
    highlights: {
      en: [
        'Own hosting and server administration for the organization’s web services: deployments, availability, and environment configuration across multiple sites.',
        'Secure servers and hosted applications through strict access management and security practices.',
        'Design, build, and maintain internal websites and tools that automate data workflows and daily operations; ship to production and handle releases and troubleshooting.',
        'Work remotely with national and local teams to turn operational needs into technical solutions.',
      ],
      fr: [
        'Gestion de l’hébergement et de l’administration des serveurs pour les services web : déploiements, disponibilité et configuration des environnements.',
        'Sécurisation des serveurs et applications hébergées par une gestion stricte des accès et bonnes pratiques de sécurité.',
        'Conception, développement et maintenance des sites et outils internes automatisant les flux de données et opérations quotidiennes.',
        'Collaboration à distance avec les équipes nationales et locales pour convertir les besoins opérationnels en solutions techniques.',
      ],
    },
    bullets: {
      en: [
        'Own hosting and server administration for the organization’s web services: deployments, availability, and environment configuration across multiple sites.',
        'Secure servers and hosted applications through strict access management and security practices.',
        'Design, build, and maintain internal websites and tools that automate data workflows and daily operations; ship to production and handle releases and troubleshooting.',
        'Work remotely with national and local teams to turn operational needs into technical solutions.',
      ],
      fr: [
        'Gestion de l’hébergement et de l’administration des serveurs pour les services web : déploiements, disponibilité et configuration des environnements.',
        'Sécurisation des serveurs et applications hébergées par une gestion stricte des accès et bonnes pratiques de sécurité.',
        'Conception, développement et maintenance des sites et outils internes automatisant les flux de données et opérations quotidiennes.',
        'Collaboration à distance avec les équipes nationales et locales pour convertir les besoins opérationnels en solutions techniques.',
      ],
    },
    tech: ['Linux', 'Server Administration', 'Access Management', 'Full-Stack Web', 'Automation'],
    tags: ['Linux', 'Server Administration', 'Access Management', 'Full-Stack Web'],
    relatedProjectSlugs: [],
    categories: ['devops-cloud', 'fullstack'],
    category: 'work',
  },

  {
    id: 'dejitalist-internship',
    role: {
      en: 'International DevOps Engineer Intern',
      fr: 'Stagiaire Ingénieure DevOps Internationale',
    },
    organization: 'Dejitalist Dijital Pazarlama ve Performans Ajansi',
    location: 'Eskisehir, Turkiye',
    workMode: 'On-site',
    start: 'Jul 2026',
    end: 'Aug 2026',
    period: 'Jul 2026 – Aug 2026',
    summary: {
      en: 'Built and deployed Dejitalist, an autonomous multi-tenant e-commerce SaaS monorepo integrating Turkish payment gateways, marketplaces, and automated order fulfillment.',
      fr: 'Développement et déploiement de Dejitalist, plateforme SaaS e-commerce multi-tenant intégrant passerelles de paiement turques, marketplaces et gestion automatisée.',
    },
    highlights: {
      en: [
        'Built Dejitalist, a multi-tenant e-commerce SaaS with a merchant dashboard and a public storefront per store, deployed live on Vercel.',
        'Implemented payments (iyzico, PayTR), marketplace integrations (Trendyol, Hepsiburada, N11), a unified order inbox, shipping integration, email notifications, and KVKK compliance.',
      ],
      fr: [
        'Conception de Dejitalist, SaaS e-commerce multi-tenant avec espace d’administration marchand et vitrines publiques dédiées, déployé sur Vercel.',
        'Intégration des paiements (iyzico, PayTR), des places de marché (Trendyol, Hepsiburada, N11), d’une boîte de commande unifiée, des expéditions et conformité KVKK.',
      ],
    },
    bullets: {
      en: [
        'Built Dejitalist, a multi-tenant e-commerce SaaS with a merchant dashboard and a public storefront per store, deployed live on Vercel.',
        'Implemented payments (iyzico, PayTR), marketplace integrations (Trendyol, Hepsiburada, N11), a unified order inbox, shipping integration, email notifications, and KVKK compliance.',
      ],
      fr: [
        'Conception de Dejitalist, SaaS e-commerce multi-tenant avec espace d’administration marchand et vitrines publiques dédiées, déployé sur Vercel.',
        'Intégration des paiements (iyzico, PayTR), des places de marché (Trendyol, Hepsiburada, N11), d’une boîte de commande unifiée, des expéditions et conformité KVKK.',
      ],
    },
    tech: ['NestJS', 'Next.js', 'Prisma', 'PostgreSQL', 'Turborepo', 'TypeScript', 'Vercel'],
    tags: ['NestJS', 'Next.js', 'Prisma', 'PostgreSQL', 'Turborepo', 'TypeScript', 'Vercel'],
    relatedProjectSlugs: ['dejitalist-saas'],
    categories: ['devops-cloud', 'fullstack'],
    category: 'work',
  },

  {
    id: 'aiesec-tunisia-dash-devops',
    role: {
      en: 'DevOps Engineer Intern',
      fr: 'Stagiaire Ingénieure DevOps',
    },
    organization: 'AIESEC in Tunisia (National Operations)',
    location: 'Remote',
    workMode: 'Remote',
    start: 'Feb 2026',
    end: 'Aug 2026',
    period: 'Feb 2026 – Aug 2026',
    summary: {
      en: 'Served as sole DevOps engineer on the DASH analytics platform connecting to EXPA via OAuth 2.0 and serving 600+ Tunisian members and 2,000+ international users.',
      fr: 'Unique ingénieure DevOps sur la plateforme analytique DASH reliée à EXPA via OAuth 2.0 au service de 600+ membres en Tunisie et 2 000+ à l’international.',
    },
    highlights: {
      en: [
        'Sole DevOps engineer in a two-person technical team on DASH, serving 600+ users in Tunisia and 2,000+ internationally, integrated with AIESEC’s EXPA system through OAuth 2.0.',
        'Built and maintained GitHub Actions CI/CD pipelines (lint, test, build, audit, deploy) with continuous deployment to Vercel; managed containerized deployment, monitoring, and workflow automation.',
        'Supported API integration and backend communication between services; worked agile across a distributed international team.',
      ],
      fr: [
        'Unique ingénieure DevOps au sein d’une équipe technique de deux personnes sur DASH (600+ utilisateurs en Tunisie, 2 000+ à l’international), connecté à EXPA via OAuth 2.0.',
        'Création et maintenance de pipelines CI/CD sous GitHub Actions (lint, test, build, audit, deploy) avec livraison continue sur Vercel, conteneurisation et monitoring.',
        'Intégration d’APIs et interconnexion des microservices en environnement distribué agile international.',
      ],
    },
    bullets: {
      en: [
        'Sole DevOps engineer in a two-person technical team on DASH, serving 600+ users in Tunisia and 2,000+ internationally, integrated with AIESEC’s EXPA system through OAuth 2.0.',
        'Built and maintained GitHub Actions CI/CD pipelines (lint, test, build, audit, deploy) with continuous deployment to Vercel; managed containerized deployment, monitoring, and workflow automation.',
        'Supported API integration and backend communication between services; worked agile across a distributed international team.',
      ],
      fr: [
        'Unique ingénieure DevOps au sein d’une équipe technique de deux personnes sur DASH (600+ utilisateurs en Tunisie, 2 000+ à l’international), connecté à EXPA via OAuth 2.0.',
        'Création et maintenance de pipelines CI/CD sous GitHub Actions (lint, test, build, audit, deploy) avec livraison continue sur Vercel, conteneurisation et monitoring.',
        'Intégration d’APIs et interconnexion des microservices en environnement distribué agile international.',
      ],
    },
    tech: ['React', 'Node.js', 'MongoDB', 'GitHub Actions', 'Docker', 'Vercel', 'OAuth 2.0'],
    tags: ['React', 'Node.js', 'MongoDB', 'GitHub Actions', 'Docker', 'Vercel'],
    relatedProjectSlugs: ['dash-analytics-hub'],
    categories: ['devops-cloud', 'fullstack', 'data-ml'],
    category: 'work',
  },

  {
    id: 'triweb-web-designer',
    role: {
      en: 'Web Designer',
      fr: 'Web Designer & UI/UX',
    },
    organization: 'Triweb',
    location: 'Tunis, Tunisia',
    workMode: 'On-site',
    start: 'Jun 2025',
    end: 'Jul 2025',
    period: 'Jun 2025 – Jul 2025',
    isCollapsible: true,
    summary: {
      en: 'Contributed to responsive, user-friendly website designs through wireframing, UI/UX planning, SEO optimization, and accessibility compliance.',
      fr: 'Conception d’interfaces web responsives et ergonomiques : wireframing, planification UI/UX, SEO et conformité d’accessibilité.',
    },
    highlights: {
      en: [
        'Contributed to responsive, user-friendly website designs: wireframing and UI/UX planning with design and development teams.',
        'Applied SEO best practices and accessibility standards; used Adobe Photoshop and Illustrator.',
      ],
      fr: [
        'Contribution à la conception de sites web responsives et ergonomiques : wireframing et maquettage UI/UX en lien avec les développeurs.',
        'Application des standards d’accessibilité et de référencement naturel (SEO) avec Adobe Photoshop et Illustrator.',
      ],
    },
    bullets: {
      en: [
        'Contributed to responsive, user-friendly website designs: wireframing and UI/UX planning with design and development teams.',
        'Applied SEO best practices and accessibility standards; used Adobe Photoshop and Illustrator.',
      ],
      fr: [
        'Contribution à la conception de sites web responsives et ergonomiques : wireframing et maquettage UI/UX en lien avec les développeurs.',
        'Application des standards d’accessibilité et de référencement naturel (SEO) avec Adobe Photoshop et Illustrator.',
      ],
    },
    tech: ['UI/UX Wireframing', 'Adobe Photoshop', 'Adobe Illustrator', 'SEO', 'Web Accessibility'],
    tags: ['UI/UX Wireframing', 'Adobe Photoshop', 'Adobe Illustrator', 'SEO', 'Accessibility'],
    relatedProjectSlugs: [],
    categories: ['fullstack'],
    category: 'work',
  },

  {
    id: 'dig2s-oxit-intern',
    role: {
      en: 'Software Engineer Intern',
      fr: 'Stagiaire Ingénieure Logiciel',
    },
    organization: 'Digi Smart Solutions (dig2s)',
    location: 'Ariana, Tunisia',
    workMode: 'Remote',
    start: 'Jan 2024',
    end: 'May 2024',
    period: 'Jan 2024 – May 2024',
    summary: {
      en: 'Engineered the mobile application and IoT-to-cloud telemetry workflow connecting seven environmental sensors for the OXIT smart irrigation platform.',
      fr: 'Développement de l’application mobile et du pipeline de télémétrie reliant sept capteurs environnementaux pour la plateforme d’irrigation OXIT.',
    },
    highlights: {
      en: [
        'On OXIT: built the Flutter mobile app with Firebase for real-time data and user management.',
        'Designed the IoT-to-cloud workflow connecting seven environmental sensors (soil moisture, temperature, humidity, water level) and contributed to backend and cloud data processing.',
        'Collaborated on predictive irrigation models using historical data and ML; delivered a prototype with dashboards and alerts.',
      ],
      fr: [
        'Sur OXIT : développement de l’application mobile Flutter avec Firebase pour les données temps réel et l’authentification.',
        'Conception du flux IoT-vers-cloud reliant sept capteurs environnementaux (humidité du sol, température, eau) et traitement des flux de données.',
        'Contribution aux modèles d’irrigation prédictive par machine learning et livraison d’un prototype fonctionnel avec alertes.',
      ],
    },
    bullets: {
      en: [
        'On OXIT: built the Flutter mobile app with Firebase for real-time data and user management.',
        'Designed the IoT-to-cloud workflow connecting seven environmental sensors (soil moisture, temperature, humidity, water level) and contributed to backend and cloud data processing.',
        'Collaborated on predictive irrigation models using historical data and ML; delivered a prototype with dashboards and alerts.',
      ],
      fr: [
        'Sur OXIT : développement de l’application mobile Flutter avec Firebase pour les données temps réel et l’authentification.',
        'Conception du flux IoT-vers-cloud reliant sept capteurs environnementaux (humidité du sol, température, eau) et traitement des flux de données.',
        'Contribution aux modèles d’irrigation prédictive par machine learning et livraison d’un prototype fonctionnel avec alertes.',
      ],
    },
    tech: ['Flutter', 'Firebase', 'IoT', 'Python', 'Machine Learning'],
    tags: ['Flutter', 'Firebase', 'IoT', 'Python', 'ML'],
    relatedProjectSlugs: ['oxit-smart-agriculture'],
    categories: ['fullstack', 'data-ml', 'iot'],
    category: 'work',
  },

  {
    id: 'samarons-hotels-intern',
    role: {
      en: 'Software Engineer Intern',
      fr: 'Stagiaire Ingénieure Logiciel',
    },
    organization: 'Samarons Hotels',
    location: 'Tunis, Tunisia',
    workMode: 'Remote',
    start: 'Aug 2023',
    end: 'Sep 2023',
    period: 'Aug 2023 – Sep 2023',
    isCollapsible: true,
    summary: {
      en: 'Engineered a full-stack hotel management and booking web application using Angular and Spring Boot with RESTful backend services.',
      fr: 'Développement d’une application web de gestion hôtelière et réservation avec Angular et Spring Boot.',
    },
    highlights: {
      en: [
        'Built a full-stack hotel website with Angular and Spring Boot: responsive UI components, RESTful APIs, database design for hotel data; deployed the application.',
      ],
      fr: [
        'Développement d’un site hôtelier complet sous Angular et Spring Boot : interfaces responsives, APIs RESTful, modélisation de base de données et déploiement.',
      ],
    },
    bullets: {
      en: [
        'Built a full-stack hotel website with Angular and Spring Boot: responsive UI components, RESTful APIs, database design for hotel data; deployed the application.',
      ],
      fr: [
        'Développement d’un site hôtelier complet sous Angular et Spring Boot : interfaces responsives, APIs RESTful, modélisation de base de données et déploiement.',
      ],
    },
    tech: ['Angular', 'Spring Boot', 'REST APIs', 'MySQL'],
    tags: ['Angular', 'Spring Boot', 'REST APIs', 'MySQL'],
    relatedProjectSlugs: [],
    categories: ['fullstack'],
    category: 'work',
  },
];
