import { ExperienceItem } from '@/types/portfolio';

export const experienceData: ExperienceItem[] = [
  {
    id: 'pfe-aiesec-dash',
    period: 'Jan 2026 - Present',
    role: {
      en: 'Graduation Project (PFE) Engineer & Architecture Lead',
      fr: 'Projet de Fin d\'Études (PFE) - Lead Architecte Logiciel',
    },
    organization: 'AIESEC in Tunisia (National Operations)',
    location: 'Tunis, Tunisia',
    category: 'work',
    bullets: {
      en: [
        'Conceived and deployed DASH (Data Analysis Systems Hub), centralizing international exchange performance metrics across 10 local committees.',
        'Engineered automated ETL pipelines and audit discrepancy detectors, reducing reporting overhead by 85%.',
        'Implemented containerized microservices and automated role-based access control protecting cross-border student applicant dossiers.',
      ],
      fr: [
        'Conception et déploiement de DASH (Data Analysis Systems Hub), centralisant les métriques de performance de 10 comités locaux.',
        'Mise en place de pipelines ETL automatisés et détection des anomalies, réduisant de 85% le temps de reporting opérationnel.',
        'Déploiement de microservices conteneurisés et contrôle d\'accès strict protégeant les dossiers des participants internationaux.',
      ],
    },
    tags: ['Architecture', 'PostgreSQL', 'Docker', 'Node.js', 'ETL', 'Analytics'],
  },
  {
    id: 'cloud-devops-intern',
    period: 'Jun 2025 - Aug 2025',
    role: {
      en: 'Cloud & DevOps Engineering Intern',
      fr: 'Stagiaire Ingénieure Cloud & DevOps',
    },
    organization: 'Cloud Solutions & Systems Lab',
    location: 'Tunis, Tunisia',
    category: 'work',
    bullets: {
      en: [
        'Containerized legacy multi-tier web applications using multi-stage Docker builds, reducing artifact sizes by 64%.',
        'Configured automated GitHub Actions workflows running unit test suites, security scans, and deployment triggers.',
        'Authored reusable Terraform modules for staging environments, enforcing declarative infrastructure management.',
      ],
      fr: [
        'Conteneurisation d\'applications modulaires via des builds Docker multi-étapes, réduisant la taille des images de 64%.',
        'Configuration de workflows GitHub Actions exécutant tests unitaires, audits de sécurité et déploiement automatisé.',
        'Création de modules Terraform réutilisables pour les environnements de staging, garantissant l\'immuabilité de l\'infrastructure.',
      ],
    },
    tags: ['Docker', 'CI/CD', 'GitHub Actions', 'Terraform', 'Linux', 'AWS'],
  },
  {
    id: 'hackathons-awards',
    period: '2024 - 2026',
    role: {
      en: 'Hackathon Competitor & Architecture Lead',
      fr: 'Compétitrice Hackathons & Lead Projets Techniques',
    },
    organization: 'National & Academic Competitions',
    location: 'Tunisia',
    category: 'competition',
    bullets: {
      en: [
        'Participated in high-intensity 24h-48h hackathons focusing on Applied AI, Smart Cities, Cloud Infrastructure, and IoT prototypes.',
        'Led multidisciplinary teams as full-stack architect and pitch presenter, converting product concepts into working MVP demos.',
        'Awarded Top 3 Laureate in National AI & Cloud Innovation Hackathon for high performance and architectural elegance.',
      ],
      fr: [
        'Participation à plusieurs hackathons d\'innovation de 24h à 48h axés sur l\'IA appliquée, les architectures cloud et l\'IoT.',
        'Rôle de lead technique et pitch presentation, transformant des problématiques complexes en prototypes fonctionnels.',
        'Prix Top 3 au Hackathon National d\'Innovation Cloud & IA pour la robustesse et l\'élégance architecturale de la solution.',
      ],
    },
    tags: ['Hackathons', 'FastAPI', 'Prototyping', 'Public Pitching', 'Team Leadership'],
  },
  {
    id: 'technical-mentoring',
    period: '2024 - Present',
    role: {
      en: 'Technical Peer Mentor & Workshop Facilitator',
      fr: 'Mentore Technique & Formatrice Étudiante',
    },
    organization: 'University Clubs & Youth Tech Communities',
    location: 'Tunis / Le Kef, Tunisia',
    category: 'mentoring',
    bullets: {
      en: [
        'Mentored junior computer science students in Git, Docker containerization, and modern REST API development.',
        'Organized hands-on cloud labs guiding students through writing their first GitHub Actions deployment pipeline.',
        'Advocated for clean architecture and infrastructure-as-code principles among emerging engineering cohorts.',
      ],
      fr: [
        'Accompagnement d\'étudiants juniors sur Git, la conteneurisation Docker et le développement d\'APIs REST modernes.',
        'Animation d\'ateliers pratiques pour configurer des premiers pipelines de déploiement continu sous GitHub Actions.',
        'Sensibilisation aux bonnes pratiques de clean code et d\'infrastructure déclarative auprès des nouveaux étudiants.',
      ],
    },
    tags: ['Mentoring', 'Docker Workshops', 'Community', 'Git', 'CI/CD'],
  },
];
