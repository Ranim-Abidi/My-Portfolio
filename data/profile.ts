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
      'I believe great engineering is judged by what happens after the code is written. A system has to deploy the same way every time, be understood while it runs, and keep working when conditions change. That is why I treat infrastructure as code, automation as a default, and observability as part of the design from day one.',
      'I also see the cloud as the foundation for intelligent products, not just a place to host them. When machine learning and data are built into a system and operated with the same discipline as the rest of the stack, they become reliable decision-making tools instead of experiments that never leave a notebook.',
      'Whatever I build, I measure it by one question: does it solve a real problem for the people who depend on it? Technology matters only when it makes their work simpler, faster, or more dependable.',
    ],
    fr: [
      'Je suis convaincue que l\'excellence en ingénierie se mesure à ce qui se passe après l\'écriture du code. Un système doit se déployer de manière reproductible, être intelligible en cours d\'exécution et rester opérationnel lorsque les conditions changent. C\'est pourquoi je considère l\'infrastructure comme du code, l\'automatisation comme un réflexe par défaut et l\'observabilité comme un élément central dès la conception.',
      'Je conçois également le cloud comme le socle des produits intelligents, et non comme un simple hébergement. Lorsque le machine learning et les flux de données sont intégrés avec la même rigueur que le reste de la stack, ils deviennent des outils d\'aide à la décision fiables plutôt que des expérimentations cantonnées à un notebook.',
      'Qu\'importe ce que je construis, je l\'évalue selon une question essentielle : résout-il un problème concret pour les personnes qui en dépendent ? La technologie n\'a de valeur que lorsqu\'elle rend le travail plus simple, plus rapide ou plus fiable.',
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
    institution: 'ESPRIT, École Supérieure Privée d’Ingénierie et de Technologies',
    degree: {
      en: 'National Engineering Degree in Cloud Computing & DevOps',
      fr: 'Diplôme National d\'Ingénieur en Informatique - Cloud Computing & DevOps',
    },
    period: '2025 – 2027 (Expected July 2027)',
    location: 'Tunis, Tunisia',
    status: {
      en: 'In progress',
      fr: 'En cours',
    },
    badge: 'Engineering Degree',
    highlights: {
      en: [
        'Cloud architecture and distributed systems',
        'Container orchestration (Kubernetes) and CI/CD automation',
        'Infrastructure as Code (Terraform) and network security',
      ],
      fr: [
        'Architectures cloud et systèmes distribués',
        'Orchestration de conteneurs (Kubernetes) et automatisation CI/CD',
        'Infrastructure as Code (Terraform) et sécurité réseau',
      ],
    },
  },
  {
    institution: 'ISI Kef, Institut Supérieur d’Informatique du Kef',
    degree: {
      en: 'Professional Master in Intelligent Web Applications',
      fr: 'Master Professionnel en Applications Web Intelligentes',
    },
    period: '2024 – 2026',
    location: 'Le Kef, Tunisia',
    status: {
      en: 'Completed',
      fr: 'Diplômée',
    },
    badge: 'Master\'s Degree',
    highlights: {
      en: [
        'AI-powered web services and modern web frameworks',
        'Semantic data modeling',
        'Machine learning integration with backend services',
      ],
      fr: [
        'Services web alimentés par l\'IA et frameworks web modernes',
        'Modélisation sémantique des données',
        'Intégration du machine learning aux services backend',
      ],
    },
  },
  {
    institution: 'ISI Kef, Institut Supérieur d’Informatique du Kef',
    degree: {
      en: 'Bachelor’s in Computer Science',
      fr: 'Licence en Sciences de l\'Informatique',
    },
    period: '2021 – 2024',
    location: 'Le Kef, Tunisia',
    status: {
      en: 'Completed',
      fr: 'Diplômée',
    },
    badge: 'Bachelor\'s Degree',
    highlights: {
      en: [
        'Programming, algorithms, and data structures',
        'Software engineering and relational databases',
        'Web development and computer networks',
      ],
      fr: [
        'Programmation, algorithmes et structures de données',
        'Génie logiciel et bases de données relationnelles',
        'Développement web et réseaux informatiques',
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
