import { ProfileData, EducationItem, StatItem } from '@/types/portfolio';

export const profileData: ProfileData = {
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
    en: 'I’m an engineer who builds across the full lifecycle of modern systems. I design the cloud infrastructure, automate how it is delivered and operated, and develop the applications that run on top of it. I also bring intelligence and insight into those products through machine learning and data analytics, so that what I ship is not only reliable but genuinely useful to the people who depend on it.',
    fr: 'Je conçois et développe des systèmes sur l\'ensemble de leur cycle de vie. Je conçois les infrastructures cloud, automatise leur déploiement et leur exploitation, et développe les applications qui y tournent. J\'y intègre également de l\'intelligence grâce au machine learning et à l\'analyse de données, garantissant des solutions non seulement fiables mais véritablement utiles.',
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
  languages: [
    {
      name: { en: 'English', fr: 'Anglais' },
      proficiency: { en: 'Full Professional Proficiency', fr: 'Compétence professionnelle complète' },
    },
    {
      name: { en: 'French', fr: 'Français' },
      proficiency: { en: 'Bilingual / Native Fluency', fr: 'Bilingue / Langue maternelle' },
    },
    {
      name: { en: 'Arabic', fr: 'Arabe' },
      proficiency: { en: 'Native Speaker', fr: 'Langue maternelle' },
    },
  ],
  socials: {
    email: 'abidiranim237@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ranim-abidi-a0aa46220/',
    github: 'https://github.com/Ranim-Abidi',
    gitlab: 'https://gitlab.com/ranimabidi',
    medium: 'https://medium.com/@abidiranim237',
    cvUrl: '/cv/cv-ranim-abidi-devops.pdf',
    // TODO: Replace with your actual Calendly or Cal.com booking link
    bookingUrl: 'https://cal.com/ranim-abidi',
  },
  tailoredCVs: [
    {
      id: 'cv-devops',
      role: { en: 'Cloud & DevOps Engineering', fr: 'Ingénierie Cloud & DevOps' },
      filename: 'CV_Ranim_Abidi_Cloud_DevOps.pdf',
      path: '/cv/cv-ranim-abidi-devops.pdf',
      description: {
        en: 'Highlights Kubernetes, Docker, Terraform, CI/CD pipelines, and cloud infrastructure experience.',
        fr: 'Met en avant Kubernetes, Docker, Terraform, pipelines CI/CD et architecture cloud.',
      },
    },
    {
      id: 'cv-fullstack',
      role: { en: 'Full-Stack Software Engineering', fr: 'Génie Logiciel Full-Stack' },
      filename: 'CV_Ranim_Abidi_FullStack.pdf',
      path: '/cv/cv-ranim-abidi-fullstack.pdf',
      description: {
        en: 'Tailored for Next.js, React, Node.js, FastAPI, PostgreSQL, and multi-tenant architectures.',
        fr: 'Orienté Next.js, React, Node.js, FastAPI, PostgreSQL et architectures multi-tenant.',
      },
    },
    {
      id: 'cv-ai',
      role: { en: 'Applied AI & Data Systems', fr: 'IA Appliquée & Systèmes de Données' },
      filename: 'CV_Ranim_Abidi_Applied_AI.pdf',
      path: '/cv/cv-ranim-abidi-ai.pdf',
      description: {
        en: 'Focuses on ML microservices, FastAPI serving, predictive analytics, and Python data pipelines.',
        fr: 'Centré sur microservices ML, inférence FastAPI, analyse prédictive et pipelines Python.',
      },
    },
  ],
  portraitUrl: '/portrait.jpg',
  // TODO: Add your intro video link (YouTube, Loom, or local MP4)
  introVideoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  now: {
    learning: {
      en: [
        'Advanced eBPF observability and Cilium networking on Kubernetes',
        'Large Language Model serving optimizations with vLLM & quantized embeddings',
        'Multi-region Terraform state governance and compliance with OpenTofu',
      ],
      fr: [
        'Observabilité avancée avec eBPF et réseau Cilium sur Kubernetes',
        'Optimisation de l\'inférence de LLM avec vLLM et embeddings quantifiés',
        'Gouvernance multi-région d\'état Terraform et conformité avec OpenTofu',
      ],
    },
    building: {
      en: [
        'High-throughput analytics engine for international student exchange logistics at AIESEC',
        'Production GitOps pipeline template with automated canary rollbacks and Prometheus health checks',
      ],
      fr: [
        'Moteur d\'analyse logistique haute performance pour les échanges internationaux chez AIESEC',
        'Modèle de pipeline GitOps de production avec déploiement canary automatisé sous Prometheus',
      ],
    },
    reading: {
      en: [
        '"Designing Data-Intensive Applications" by Martin Kleppmann',
        '"Site Reliability Engineering" by Google SRE Team',
      ],
      fr: [
        '"Designing Data-Intensive Applications" par Martin Kleppmann',
        '"Site Reliability Engineering" par l\'équipe Google SRE',
      ],
    },
    updatedAt: 'November 2026',
  },
  values: [
    {
      title: { en: 'Engineering Rigor', fr: 'Rigueur d\'Ingénierie' },
      description: {
        en: 'Zero tolerance for manual, unrepeatable steps. Everything declared in code, automated through CI/CD, and covered by automated tests.',
        fr: 'Aucune étape manuelle non reproductible. Tout est déclaré dans le code, automatisé par CI/CD et validé par des tests.',
      },
      icon: 'ShieldCheck',
    },
    {
      title: { en: 'Empathy in Leadership', fr: 'Leadership Empathique' },
      description: {
        en: 'Empowering cross-functional teams to own their missions with psychological safety, clear metrics, and mentorship.',
        fr: 'Permettre aux équipes pluridisciplinaires d\'accomplir leurs missions avec confiance, indicateurs clairs et mentorat.',
      },
      icon: 'Users',
    },
    {
      title: { en: 'Obsession with Value', fr: 'Orientation Impact' },
      description: {
        en: 'Technology is only as valuable as the real-world operational problem it resolves for users and organizations.',
        fr: 'La technologie ne vaut que par la valeur opérationnelle réelle qu\'elle apporte aux utilisateurs et organisations.',
      },
      icon: 'Target',
    },
  ],
};

export const educationData: EducationItem[] = [
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
];

export const statsData: StatItem[] = [
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
];
