import { SkillCategory } from '@/types/portfolio';

export const skillCategoriesData: SkillCategory[] = [
  {
    id: 'cloud-platforms',
    title: {
      en: 'Cloud Platforms',
      fr: 'Plateformes Cloud',
    },
    description: {
      en: 'Cloud infrastructure deployment, resource isolation, virtual computing, and managed edge hosting.',
      fr: 'Déploiement d’infrastructures cloud, isolation de ressources, calcul virtuel et hébergement managé.',
    },
    icon: 'Cloud',
    skills: [
      {
        id: 'azure',
        name: 'Microsoft Azure (VMs, IAM, networking)',
        category: 'cloud-platforms',
        projectSlugs: ['matchy-khedma-cloud'],
        certificateIds: ['cert-aws-cloud-security'],
        evidence: [
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (Cloud PI)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
        ],
      },
      {
        id: 'aws',
        name: 'AWS (EC2, S3)',
        category: 'cloud-platforms',
        projectSlugs: [],
        certificateIds: ['cert-aws-cloud-operations', 'cert-aws-cloud-security'],
        evidence: [
          {
            id: 'cert-aws-cloud-operations',
            title: 'AWS Academy Graduate: Cloud Operations',
            href: 'https://www.credly.com/users/ranim-abidi',
            type: 'cert',
          },
          {
            id: 'cert-aws-cloud-security',
            title: 'AWS Academy Graduate: Cloud Security Foundations',
            href: 'https://www.credly.com/users/ranim-abidi',
            type: 'cert',
          },
        ],
      },
      {
        id: 'gcp',
        name: 'Google Cloud',
        category: 'cloud-platforms',
        projectSlugs: [],
        certificateIds: ['cert-gcp-devops', 'cert-gcp-data-ml'],
        evidence: [
          {
            id: 'cert-gcp-devops',
            title: 'Google Cloud Skill Badges: Cloud & DevOps Track',
            href: 'https://www.credly.com/users/ranim-abidi',
            type: 'cert',
          },
          {
            id: 'cert-gcp-data-ml',
            title: 'Google Cloud Skill Badges: Data & ML Track',
            href: 'https://www.credly.com/users/ranim-abidi',
            type: 'cert',
          },
        ],
      },
      {
        id: 'openstack',
        name: 'OpenStack',
        category: 'cloud-platforms',
        projectSlugs: ['matchy-khedma-cloud'],
        evidence: [
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (Cloud PI)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
        ],
      },
      {
        id: 'vercel',
        name: 'Vercel',
        category: 'cloud-platforms',
        projectSlugs: ['dash-analytics-hub', 'dejitalist-saas'],
        evidence: [
          {
            id: 'dash-aiesec',
            title: 'DASH (Data Analytics System Hub)',
            href: '/projects/dash-analytics-hub',
            type: 'project',
          },
          {
            id: 'dejitalist',
            title: 'Dejitalist',
            href: '/projects/dejitalist-saas',
            type: 'project',
          },
        ],
      },
    ],
  },

  {
    id: 'containers-orchestration',
    title: {
      en: 'Containers & Orchestration',
      fr: 'Conteneurs & Orchestration',
    },
    description: {
      en: 'Containerization, cluster scheduling, package templating, and reverse proxying.',
      fr: 'Conteneurisation, ordonnancement de clusters, packaging déclaratif et proxys inverses.',
    },
    icon: 'Server',
    skills: [
      {
        id: 'docker',
        name: 'Docker',
        category: 'containers-orchestration',
        projectSlugs: ['eleganza-idss-ml', 'matchy-khedma-cloud', 'dash-analytics-hub', 'dejitalist-saas'],
        certificateIds: ['cert-docker-k8s'],
        evidence: [
          {
            id: 'eleganza-idss',
            title: 'Eleganza IDSS',
            href: '/projects/eleganza-idss-ml',
            type: 'project',
          },
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (Cloud PI)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
          {
            id: 'dash-aiesec',
            title: 'DASH',
            href: '/projects/dash-analytics-hub',
            type: 'project',
          },
          {
            id: 'dejitalist',
            title: 'Dejitalist',
            href: '/projects/dejitalist-saas',
            type: 'project',
          },
        ],
      },
      {
        id: 'kubernetes',
        name: 'Kubernetes',
        category: 'containers-orchestration',
        projectSlugs: ['matchy-khedma-cloud'],
        certificateIds: ['cert-docker-k8s', 'cert-gcp-devops'],
        evidence: [
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (Cloud PI)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
          {
            id: 'cert-docker-k8s',
            title: 'Docker & Kubernetes: Cloud-Native Mastery',
            href: 'https://www.credly.com/users/ranim-abidi',
            type: 'cert',
          },
        ],
      },
      {
        id: 'helm',
        name: 'Helm',
        category: 'containers-orchestration',
        projectSlugs: ['matchy-khedma-cloud'],
        evidence: [
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (Cloud PI)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
        ],
      },
      {
        id: 'nginx',
        name: 'Nginx',
        category: 'containers-orchestration',
        projectSlugs: ['eleganza-idss-ml'],
        evidence: [
          {
            id: 'eleganza-idss',
            title: 'Eleganza IDSS',
            href: '/projects/eleganza-idss-ml',
            type: 'project',
          },
        ],
      },
    ],
  },

  {
    id: 'iac',
    title: {
      en: 'Infrastructure as Code',
      fr: 'Infrastructure as Code (IaC)',
    },
    description: {
      en: 'Declarative resource provisioning, configuration automation, and repeatable cloud environments.',
      fr: 'Provisioning déclaratif de ressources, automatisation des configurations et reproductibilité.',
    },
    icon: 'Layers',
    skills: [
      {
        id: 'terraform',
        name: 'Terraform',
        category: 'iac',
        projectSlugs: ['matchy-khedma-cloud'],
        certificateIds: ['cert-terraform'],
        evidence: [
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (Cloud PI)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
          {
            id: 'cert-terraform',
            title: 'HashiCorp Certified: Terraform Associate',
            href: 'https://www.credly.com/users/ranim-abidi',
            type: 'cert',
          },
        ],
      },
      {
        id: 'ansible',
        name: 'Ansible',
        category: 'iac',
        projectSlugs: ['matchy-khedma-cloud'],
        evidence: [
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (Cloud PI)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
        ],
      },
    ],
  },

  {
    id: 'cicd-automation',
    title: {
      en: 'CI/CD & Automation',
      fr: 'CI/CD & Automatisation',
    },
    description: {
      en: 'Automated lint, test, build, audit, and deployment delivery pipelines.',
      fr: 'Pipelines automatisés de lint, tests, build, audits de sécurité et déploiement continu.',
    },
    icon: 'Activity',
    skills: [
      {
        id: 'github-actions',
        name: 'GitHub Actions',
        category: 'cicd-automation',
        projectSlugs: ['dash-analytics-hub', 'matchy-khedma-cloud', 'dejitalist-saas'],
        evidence: [
          {
            id: 'dash-aiesec',
            title: 'DASH (Sole DevOps Engineer)',
            href: '/projects/dash-analytics-hub',
            type: 'project',
          },
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (Cloud PI)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
          {
            id: 'dejitalist',
            title: 'Dejitalist',
            href: '/projects/dejitalist-saas',
            type: 'project',
          },
        ],
      },
      {
        id: 'jenkins',
        name: 'Jenkins',
        category: 'cicd-automation',
        projectSlugs: [],
        evidence: [
          {
            id: 'cloud-devops-intern',
            title: 'Cloud & DevOps Engineering Labs (ESPRIT)',
            href: '/experience',
            type: 'role',
          },
        ],
      },
      {
        id: 'n8n',
        name: 'n8n',
        category: 'cicd-automation',
        projectSlugs: ['eleganza-idss-ml'],
        evidence: [
          {
            id: 'eleganza-idss',
            title: 'Eleganza IDSS',
            href: '/projects/eleganza-idss-ml',
            type: 'project',
          },
        ],
      },
    ],
  },

  {
    id: 'monitoring',
    title: {
      en: 'Monitoring & Observability',
      fr: 'Monitoring & Observabilité',
    },
    description: {
      en: 'Time-series metric scrapers, cluster telemetry, alerting thresholds, and visual operational dashboards.',
      fr: 'Collecte de métriques chronologiques, télémétrie de cluster, alertes et tableaux de bord opérationnels.',
    },
    icon: 'Activity',
    skills: [
      {
        id: 'prometheus',
        name: 'Prometheus',
        category: 'monitoring',
        projectSlugs: ['matchy-khedma-cloud'],
        evidence: [
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (Cloud PI)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
        ],
      },
      {
        id: 'grafana',
        name: 'Grafana',
        category: 'monitoring',
        projectSlugs: ['matchy-khedma-cloud', 'dash-analytics-hub'],
        evidence: [
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (Cloud PI)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
          {
            id: 'dash-aiesec',
            title: 'DASH Performance Monitoring',
            href: '/projects/dash-analytics-hub',
            type: 'project',
          },
        ],
      },
    ],
  },

  {
    id: 'security-access',
    title: {
      en: 'Security & Access',
      fr: 'Sécurité & Contrôle d’Accès',
    },
    description: {
      en: 'Identity management, role-based authorization, token verification, and secure networking.',
      fr: 'Gestion des identités, habilitations par rôle, validation de jetons et sécurité réseau.',
    },
    icon: 'Shield',
    skills: [
      {
        id: 'iam',
        name: 'IAM',
        category: 'security-access',
        projectSlugs: ['matchy-khedma-cloud'],
        certificateIds: ['cert-aws-cloud-security'],
        evidence: [
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (Azure IAM)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
          {
            id: 'aiesec-greece',
            title: 'AIESEC in Greece (Access Management)',
            href: '/experience#aiesec-greece-im',
            type: 'role',
          },
        ],
      },
      {
        id: 'rbac',
        name: 'RBAC',
        category: 'security-access',
        projectSlugs: ['matchy-khedma-cloud'],
        evidence: [
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (Azure IAM RBAC)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
          {
            id: 'aiesec-greece',
            title: 'AIESEC in Greece (Directory Permissions)',
            href: '/experience#aiesec-greece-im',
            type: 'role',
          },
        ],
      },
      {
        id: 'oauth2',
        name: 'OAuth 2.0',
        category: 'security-access',
        projectSlugs: ['dash-analytics-hub'],
        evidence: [
          {
            id: 'dash-aiesec',
            title: 'DASH (EXPA OAuth 2.0 Ingestion)',
            href: '/projects/dash-analytics-hub',
            type: 'project',
          },
        ],
      },
      {
        id: 'jwt',
        name: 'JWT',
        category: 'security-access',
        projectSlugs: ['dejitalist-saas', 'dash-analytics-hub'],
        evidence: [
          {
            id: 'dejitalist',
            title: 'Dejitalist (Session Auth & KVKK)',
            href: '/projects/dejitalist-saas',
            type: 'project',
          },
          {
            id: 'dash-aiesec',
            title: 'DASH',
            href: '/projects/dash-analytics-hub',
            type: 'project',
          },
        ],
      },
      {
        id: 'networking-security',
        name: 'Networking and security basics',
        category: 'security-access',
        projectSlugs: ['matchy-khedma-cloud'],
        certificateIds: ['cert-aws-cloud-security'],
        evidence: [
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (Neutron Network Topology)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
          {
            id: 'aiesec-greece',
            title: 'AIESEC in Greece (Server Administration)',
            href: '/experience#aiesec-greece-im',
            type: 'role',
          },
        ],
      },
    ],
  },

  {
    id: 'languages',
    title: {
      en: 'Programming Languages',
      fr: 'Langages de Programmation',
    },
    description: {
      en: 'Backend systems programming, typed modern scripts, data processing, and query languages.',
      fr: 'Programmation système, typage statique, traitement de données et requêtage relationnel.',
    },
    icon: 'Cpu',
    skills: [
      {
        id: 'python',
        name: 'Python',
        category: 'languages',
        projectSlugs: ['eleganza-idss-ml', 'oxit-smart-agriculture', 'chicago-crimes-analytics', 'pharmacy-reimbursement-analytics'],
        certificateIds: ['cert-gcp-data-ml'],
        evidence: [
          {
            id: 'eleganza-idss',
            title: 'Eleganza IDSS',
            href: '/projects/eleganza-idss-ml',
            type: 'project',
          },
          {
            id: 'oxit-agri',
            title: 'OXIT (Founder)',
            href: '/projects/oxit-smart-agriculture',
            type: 'project',
          },
          {
            id: 'chicago-crimes',
            title: 'Crimes in Chicago Analytics',
            href: '/projects/chicago-crimes-analytics',
            type: 'project',
          },
          {
            id: 'pharmacy-reimb',
            title: 'Pharmacy Reimbursement Dashboard',
            href: '/projects/pharmacy-reimbursement-analytics',
            type: 'project',
          },
        ],
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        category: 'languages',
        projectSlugs: ['dash-analytics-hub', 'dejitalist-saas', 'atb-environmental-assessment'],
        evidence: [
          {
            id: 'dash-aiesec',
            title: 'DASH',
            href: '/projects/dash-analytics-hub',
            type: 'project',
          },
          {
            id: 'dejitalist',
            title: 'Dejitalist',
            href: '/projects/dejitalist-saas',
            type: 'project',
          },
          {
            id: 'atb-platform',
            title: 'Environmental Assessment Platform (ATB)',
            href: '/projects/atb-environmental-assessment',
            type: 'project',
          },
        ],
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        category: 'languages',
        projectSlugs: ['dejitalist-saas'],
        evidence: [
          {
            id: 'dejitalist',
            title: 'Dejitalist (Turborepo monorepo)',
            href: '/projects/dejitalist-saas',
            type: 'project',
          },
        ],
      },
      {
        id: 'java',
        name: 'Java',
        category: 'languages',
        projectSlugs: ['matchy-khedma-cloud'],
        evidence: [
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (Spring Boot backend)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
        ],
      },
      {
        id: 'bash',
        name: 'Bash',
        category: 'languages',
        projectSlugs: ['matchy-khedma-cloud', 'dash-analytics-hub'],
        evidence: [
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (Ansible & Linux scripting)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
          {
            id: 'dash-aiesec',
            title: 'DASH (CI/CD scripts)',
            href: '/projects/dash-analytics-hub',
            type: 'project',
          },
        ],
      },
      {
        id: 'sql',
        name: 'SQL',
        category: 'languages',
        projectSlugs: ['dejitalist-saas', 'matchy-khedma-cloud', 'pharmacy-reimbursement-analytics', 'atb-environmental-assessment'],
        evidence: [
          {
            id: 'dejitalist',
            title: 'Dejitalist (PostgreSQL)',
            href: '/projects/dejitalist-saas',
            type: 'project',
          },
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (MySQL)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
          {
            id: 'pharmacy-reimb',
            title: 'Pharmacy Reimbursement (SQL modeling)',
            href: '/projects/pharmacy-reimbursement-analytics',
            type: 'project',
          },
        ],
      },
      {
        id: 'plsql',
        name: 'PL/SQL',
        category: 'languages',
        projectSlugs: [],
        evidence: [
          {
            id: 'academic-db',
            title: 'Relational Database Engineering Coursework (ISI Kef / ESPRIT)',
            href: '/about',
            type: 'role',
          },
        ],
      },
    ],
  },

  {
    id: 'web-mobile',
    title: {
      en: 'Web & Mobile',
      fr: 'Web & Mobile',
    },
    description: {
      en: 'Component-driven frontends, cross-platform mobile apps, and robust API frameworks.',
      fr: 'Interfaces modulaires, applications mobiles multiplateformes et frameworks d’APIs.',
    },
    icon: 'Layout',
    skills: [
      {
        id: 'react',
        name: 'React',
        category: 'web-mobile',
        projectSlugs: ['dash-analytics-hub', 'dejitalist-saas', 'eleganza-idss-ml'],
        evidence: [
          {
            id: 'dash-aiesec',
            title: 'DASH',
            href: '/projects/dash-analytics-hub',
            type: 'project',
          },
          {
            id: 'dejitalist',
            title: 'Dejitalist',
            href: '/projects/dejitalist-saas',
            type: 'project',
          },
        ],
      },
      {
        id: 'nextjs',
        name: 'Next.js',
        category: 'web-mobile',
        projectSlugs: ['dejitalist-saas'],
        evidence: [
          {
            id: 'dejitalist',
            title: 'Dejitalist (App Router)',
            href: '/projects/dejitalist-saas',
            type: 'project',
          },
        ],
      },
      {
        id: 'angular',
        name: 'Angular',
        category: 'web-mobile',
        projectSlugs: ['matchy-khedma-cloud'],
        evidence: [
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (Angular Client)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
        ],
      },
      {
        id: 'nodejs',
        name: 'Node.js',
        category: 'web-mobile',
        projectSlugs: ['dash-analytics-hub', 'dejitalist-saas', 'atb-environmental-assessment'],
        evidence: [
          {
            id: 'dash-aiesec',
            title: 'DASH',
            href: '/projects/dash-analytics-hub',
            type: 'project',
          },
          {
            id: 'atb-platform',
            title: 'ATB Environmental Platform',
            href: '/projects/atb-environmental-assessment',
            type: 'project',
          },
        ],
      },
      {
        id: 'nestjs',
        name: 'NestJS',
        category: 'web-mobile',
        projectSlugs: ['dejitalist-saas'],
        evidence: [
          {
            id: 'dejitalist',
            title: 'Dejitalist (Backend API)',
            href: '/projects/dejitalist-saas',
            type: 'project',
          },
        ],
      },
      {
        id: 'spring-boot',
        name: 'Spring Boot',
        category: 'web-mobile',
        projectSlugs: ['matchy-khedma-cloud'],
        evidence: [
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (Cloud PI Microservice)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
        ],
      },
      {
        id: 'flask',
        name: 'Flask',
        category: 'web-mobile',
        projectSlugs: ['oxit-smart-agriculture'],
        evidence: [
          {
            id: 'oxit-agri',
            title: 'OXIT (Telemetry Microservice)',
            href: '/projects/oxit-smart-agriculture',
            type: 'project',
          },
        ],
      },
      {
        id: 'fastapi',
        name: 'FastAPI',
        category: 'web-mobile',
        projectSlugs: ['eleganza-idss-ml'],
        evidence: [
          {
            id: 'eleganza-idss',
            title: 'Eleganza IDSS (Async ML Service)',
            href: '/projects/eleganza-idss-ml',
            type: 'project',
          },
        ],
      },
      {
        id: 'flutter',
        name: 'Flutter',
        category: 'web-mobile',
        projectSlugs: ['oxit-smart-agriculture', 'el-tarf-eco-tourism'],
        certificateIds: ['cert-flutter-google'],
        evidence: [
          {
            id: 'oxit-agri',
            title: 'OXIT (Mobile Irrigation App)',
            href: '/projects/oxit-smart-agriculture',
            type: 'project',
          },
          {
            id: 'el-tarf',
            title: 'AI Eco-Tourism App (El Tarf)',
            href: '/projects/el-tarf-eco-tourism',
            type: 'project',
          },
          {
            id: 'cert-flutter-google',
            title: 'Flutter App Development (Google Developers)',
            href: 'https://www.credly.com/users/ranim-abidi',
            type: 'cert',
          },
        ],
      },
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        category: 'web-mobile',
        projectSlugs: ['dash-analytics-hub', 'dejitalist-saas'],
        evidence: [
          {
            id: 'dash-aiesec',
            title: 'DASH',
            href: '/projects/dash-analytics-hub',
            type: 'project',
          },
          {
            id: 'dejitalist',
            title: 'Dejitalist',
            href: '/projects/dejitalist-saas',
            type: 'project',
          },
        ],
      },
      {
        id: 'rest-apis',
        name: 'REST APIs',
        category: 'web-mobile',
        projectSlugs: ['dejitalist-saas', 'dash-analytics-hub', 'eleganza-idss-ml', 'atb-environmental-assessment'],
        evidence: [
          {
            id: 'dejitalist',
            title: 'Dejitalist',
            href: '/projects/dejitalist-saas',
            type: 'project',
          },
          {
            id: 'dash-aiesec',
            title: 'DASH',
            href: '/projects/dash-analytics-hub',
            type: 'project',
          },
        ],
      },
    ],
  },

  {
    id: 'databases',
    title: {
      en: 'Databases & ORMs',
      fr: 'Bases de Données & ORMs',
    },
    description: {
      en: 'Relational storage, document stores, real-time sync engines, and type-safe query builders.',
      fr: 'Bases relationnelles, orientées documents, synchronisation temps réel et ORMs typés.',
    },
    icon: 'Database',
    skills: [
      {
        id: 'postgresql',
        name: 'PostgreSQL',
        category: 'databases',
        projectSlugs: ['dejitalist-saas'],
        evidence: [
          {
            id: 'dejitalist',
            title: 'Dejitalist (Multi-Tenant Schema)',
            href: '/projects/dejitalist-saas',
            type: 'project',
          },
        ],
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        category: 'databases',
        projectSlugs: ['dash-analytics-hub'],
        evidence: [
          {
            id: 'dash-aiesec',
            title: 'DASH (Document Collections & Aggregations)',
            href: '/projects/dash-analytics-hub',
            type: 'project',
          },
        ],
      },
      {
        id: 'mysql',
        name: 'MySQL',
        category: 'databases',
        projectSlugs: ['matchy-khedma-cloud', 'atb-environmental-assessment'],
        evidence: [
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (Relational Database)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
          {
            id: 'atb-platform',
            title: 'ATB Environmental Platform',
            href: '/projects/atb-environmental-assessment',
            type: 'project',
          },
        ],
      },
      {
        id: 'firebase',
        name: 'Firebase',
        category: 'databases',
        projectSlugs: ['oxit-smart-agriculture', 'el-tarf-eco-tourism'],
        evidence: [
          {
            id: 'oxit-agri',
            title: 'OXIT (Realtime Database & Sensor Sync)',
            href: '/projects/oxit-smart-agriculture',
            type: 'project',
          },
          {
            id: 'el-tarf',
            title: 'AI Eco-Tourism App (El Tarf)',
            href: '/projects/el-tarf-eco-tourism',
            type: 'project',
          },
        ],
      },
      {
        id: 'prisma',
        name: 'Prisma',
        category: 'databases',
        projectSlugs: ['dejitalist-saas'],
        evidence: [
          {
            id: 'dejitalist',
            title: 'Dejitalist (Type-safe ORM & Migrations)',
            href: '/projects/dejitalist-saas',
            type: 'project',
          },
        ],
      },
    ],
  },

  {
    id: 'data-ml',
    title: {
      en: 'Data & ML',
      fr: 'Données & Machine Learning',
    },
    description: {
      en: 'Predictive modeling, business intelligence, cluster discovery, reinforcement learning, and IoT workflows.',
      fr: 'Modélisation prédictive, business intelligence, clustering, apprentissage par renforcement et flux IoT.',
    },
    icon: 'Brain',
    skills: [
      {
        id: 'power-bi',
        name: 'Power BI',
        category: 'data-ml',
        projectSlugs: ['pharmacy-reimbursement-analytics'],
        certificateIds: ['cert-ibm-skillsbuild-data'],
        evidence: [
          {
            id: 'pharmacy-reimb',
            title: 'Pharmacy Reimbursement Dashboard',
            href: '/projects/pharmacy-reimbursement-analytics',
            type: 'project',
          },
        ],
      },
      {
        id: 'pandas',
        name: 'Pandas',
        category: 'data-ml',
        projectSlugs: ['chicago-crimes-analytics', 'eleganza-idss-ml', 'pharmacy-reimbursement-analytics'],
        evidence: [
          {
            id: 'chicago-crimes',
            title: 'Crimes in Chicago Analytics',
            href: '/projects/chicago-crimes-analytics',
            type: 'project',
          },
          {
            id: 'eleganza-idss',
            title: 'Eleganza IDSS',
            href: '/projects/eleganza-idss-ml',
            type: 'project',
          },
        ],
      },
      {
        id: 'scikit-learn',
        name: 'Scikit-learn',
        category: 'data-ml',
        projectSlugs: ['chicago-crimes-analytics', 'eleganza-idss-ml'],
        evidence: [
          {
            id: 'chicago-crimes',
            title: 'Crimes in Chicago (Random Forest & K-Means)',
            href: '/projects/chicago-crimes-analytics',
            type: 'project',
          },
          {
            id: 'eleganza-idss',
            title: 'Eleganza IDSS',
            href: '/projects/eleganza-idss-ml',
            type: 'project',
          },
        ],
      },
      {
        id: 'lightgbm',
        name: 'LightGBM',
        category: 'data-ml',
        projectSlugs: ['eleganza-idss-ml'],
        evidence: [
          {
            id: 'eleganza-idss',
            title: 'Eleganza IDSS (Quantile Regression)',
            href: '/projects/eleganza-idss-ml',
            type: 'project',
          },
        ],
      },
      {
        id: 'xgboost',
        name: 'XGBoost',
        category: 'data-ml',
        projectSlugs: ['eleganza-idss-ml'],
        evidence: [
          {
            id: 'eleganza-idss',
            title: 'Eleganza IDSS (Demand Forecasting)',
            href: '/projects/eleganza-idss-ml',
            type: 'project',
          },
        ],
      },
      {
        id: 'optuna',
        name: 'Optuna',
        category: 'data-ml',
        projectSlugs: ['eleganza-idss-ml'],
        evidence: [
          {
            id: 'eleganza-idss',
            title: 'Eleganza IDSS (Hyperparameter Tuning)',
            href: '/projects/eleganza-idss-ml',
            type: 'project',
          },
        ],
      },
      {
        id: 'hdbscan',
        name: 'HDBSCAN',
        category: 'data-ml',
        projectSlugs: ['eleganza-idss-ml'],
        evidence: [
          {
            id: 'eleganza-idss',
            title: 'Eleganza IDSS (Basket Clustering)',
            href: '/projects/eleganza-idss-ml',
            type: 'project',
          },
        ],
      },
      {
        id: 'umap',
        name: 'UMAP',
        category: 'data-ml',
        projectSlugs: ['eleganza-idss-ml'],
        evidence: [
          {
            id: 'eleganza-idss',
            title: 'Eleganza IDSS (Dimensionality Reduction)',
            href: '/projects/eleganza-idss-ml',
            type: 'project',
          },
        ],
      },
      {
        id: 'plotly-dash',
        name: 'Plotly Dash',
        category: 'data-ml',
        projectSlugs: ['chicago-crimes-analytics'],
        evidence: [
          {
            id: 'chicago-crimes',
            title: 'Crimes in Chicago Dashboard',
            href: '/projects/chicago-crimes-analytics',
            type: 'project',
          },
        ],
      },
      {
        id: 'metabase',
        name: 'Metabase',
        category: 'data-ml',
        projectSlugs: ['eleganza-idss-ml'],
        evidence: [
          {
            id: 'eleganza-idss',
            title: 'Eleganza IDSS (BI Reporting)',
            href: '/projects/eleganza-idss-ml',
            type: 'project',
          },
        ],
      },
      {
        id: 'chartjs',
        name: 'Chart.js',
        category: 'data-ml',
        projectSlugs: ['dash-analytics-hub', 'atb-environmental-assessment'],
        evidence: [
          {
            id: 'dash-aiesec',
            title: 'DASH (Exchange Funnel Charts)',
            href: '/projects/dash-analytics-hub',
            type: 'project',
          },
          {
            id: 'atb-platform',
            title: 'ATB Environmental Platform',
            href: '/projects/atb-environmental-assessment',
            type: 'project',
          },
        ],
      },
      {
        id: 'rl-ppo',
        name: 'reinforcement learning (PPO)',
        category: 'data-ml',
        projectSlugs: ['oxit-smart-agriculture'],
        evidence: [
          {
            id: 'oxit-agri',
            title: 'OXIT (Intelligent Irrigation Policy)',
            href: '/projects/oxit-smart-agriculture',
            type: 'project',
          },
        ],
      },
      {
        id: 'iot-workflows',
        name: 'IoT sensor data workflows',
        category: 'data-ml',
        projectSlugs: ['oxit-smart-agriculture'],
        evidence: [
          {
            id: 'oxit-agri',
            title: 'OXIT (ESP32 Telemetry Loop)',
            href: '/projects/oxit-smart-agriculture',
            type: 'project',
          },
        ],
      },
    ],
  },

  {
    id: 'design-web',
    title: {
      en: 'Design & Web Standards',
      fr: 'Design & Standards Web',
    },
    description: {
      en: 'Interface prototyping, vector assets, search engine discoverability, and accessibility compliance.',
      fr: 'Prototypage d’interfaces, création vectorielle, référencement et accessibilité numérique.',
    },
    icon: 'Sparkles',
    skills: [
      {
        id: 'ui-ux-wireframing',
        name: 'UI/UX wireframing',
        category: 'design-web',
        projectSlugs: ['dejitalist-saas', 'dash-analytics-hub'],
        evidence: [
          {
            id: 'dejitalist',
            title: 'Dejitalist (Merchant Dashboard Design)',
            href: '/projects/dejitalist-saas',
            type: 'project',
          },
          {
            id: 'dash-aiesec',
            title: 'DASH (Custom Widgets Layout)',
            href: '/projects/dash-analytics-hub',
            type: 'project',
          },
        ],
      },
      {
        id: 'photoshop',
        name: 'Adobe Photoshop',
        category: 'design-web',
        projectSlugs: [],
        evidence: [
          {
            id: 'design-creative',
            title: 'National & Local Creative Media (AIESEC Tunisia)',
            href: '/leadership',
            type: 'role',
          },
        ],
      },
      {
        id: 'illustrator',
        name: 'Adobe Illustrator',
        category: 'design-web',
        projectSlugs: [],
        evidence: [
          {
            id: 'design-branding',
            title: 'Vector Branding & Identity Systems',
            href: '/leadership',
            type: 'role',
          },
        ],
      },
      {
        id: 'seo',
        name: 'SEO',
        category: 'design-web',
        projectSlugs: ['dejitalist-saas'],
        evidence: [
          {
            id: 'dejitalist',
            title: 'Dejitalist (Dynamic Metadata & Sitemap)',
            href: '/projects/dejitalist-saas',
            type: 'project',
          },
        ],
      },
      {
        id: 'web-accessibility',
        name: 'web accessibility',
        category: 'design-web',
        projectSlugs: ['dash-analytics-hub', 'dejitalist-saas'],
        evidence: [
          {
            id: 'portfolio-system',
            title: 'Semantic HTML & WCAG Focus Engineering',
            href: '/projects',
            type: 'project',
          },
        ],
      },
    ],
  },

  {
    id: 'tools-methods',
    title: {
      en: 'Tools & Methods',
      fr: 'Outils & Méthodes',
    },
    description: {
      en: 'Version control, issue tracking, agile collaboration frameworks, and academic documentation.',
      fr: 'Gestion de versions, suivi de tickets, méthodes agiles et documentation technique.',
    },
    icon: 'Settings',
    skills: [
      {
        id: 'linux',
        name: 'Linux',
        category: 'tools-methods',
        projectSlugs: ['matchy-khedma-cloud', 'eleganza-idss-ml', 'dash-analytics-hub'],
        evidence: [
          {
            id: 'matchy-khedma',
            title: 'Matchy Khedma (OpenStack Host Nodes)',
            href: '/projects/matchy-khedma-cloud',
            type: 'project',
          },
          {
            id: 'eleganza-idss',
            title: 'Eleganza IDSS',
            href: '/projects/eleganza-idss-ml',
            type: 'project',
          },
        ],
      },
      {
        id: 'git',
        name: 'Git',
        category: 'tools-methods',
        projectSlugs: ['dejitalist-saas', 'dash-analytics-hub', 'matchy-khedma-cloud'],
        evidence: [
          {
            id: 'dejitalist',
            title: 'Dejitalist',
            href: '/projects/dejitalist-saas',
            type: 'project',
          },
          {
            id: 'dash-aiesec',
            title: 'DASH',
            href: '/projects/dash-analytics-hub',
            type: 'project',
          },
        ],
      },
      {
        id: 'github',
        name: 'GitHub',
        category: 'tools-methods',
        projectSlugs: ['dejitalist-saas', 'dash-analytics-hub', 'matchy-khedma-cloud'],
        evidence: [
          {
            id: 'github-portfolio',
            title: 'Public & Enterprise GitHub Repositories',
            href: 'https://github.com/Ranim-Abidi',
            type: 'role',
          },
        ],
      },
      {
        id: 'jira',
        name: 'JIRA',
        category: 'tools-methods',
        projectSlugs: [],
        evidence: [
          {
            id: 'agile-management',
            title: 'Sprint Planning & Backlog Management (ESPRIT PI)',
            href: '/about',
            type: 'role',
          },
        ],
      },
      {
        id: 'confluence',
        name: 'Confluence',
        category: 'tools-methods',
        projectSlugs: [],
        evidence: [
          {
            id: 'confluence-docs',
            title: 'Technical Runbooks & Architecture Documentation',
            href: '/about',
            type: 'role',
          },
        ],
      },
      {
        id: 'agile',
        name: 'Agile',
        category: 'tools-methods',
        projectSlugs: [],
        evidence: [
          {
            id: 'agile-delivery',
            title: 'Weekly Sprint Governance across Cross-Functional Teams',
            href: '/leadership',
            type: 'role',
          },
        ],
      },
      {
        id: 'uml',
        name: 'UML',
        category: 'tools-methods',
        projectSlugs: ['dejitalist-saas', 'matchy-khedma-cloud'],
        evidence: [
          {
            id: 'academic-uml',
            title: 'System Design Class & Sequence Modeling (ISI Kef / ESPRIT)',
            href: '/about',
            type: 'role',
          },
        ],
      },
      {
        id: 'latex',
        name: 'LaTeX',
        category: 'tools-methods',
        projectSlugs: [],
        evidence: [
          {
            id: 'latex-academic',
            title: 'Academic Theses & Technical Research Papers',
            href: '/about',
            type: 'role',
          },
        ],
      },
    ],
  },
];

export const coreFocusSkills = [
  'Cloud',
  'DevOps',
  'CI/CD',
  'Containers',
  'IaC',
  'Full-Stack',
  'Data & ML',
];

export const spokenLanguagesData = [
  {
    language: { en: 'Arabic', fr: 'Arabe' },
    level: { en: 'Native', fr: 'Langue maternelle' },
    badge: 'Native',
  },
  {
    language: { en: 'English', fr: 'Anglais' },
    level: { en: 'C1, Professional working proficiency', fr: 'C1, Compétence professionnelle' },
    badge: 'C1',
  },
  {
    language: { en: 'French', fr: 'Français' },
    level: { en: 'B2, Upper intermediate', fr: 'B2, Intermédiaire supérieur' },
    badge: 'B2',
  },
  {
    language: { en: 'Italian', fr: 'Italien' },
    level: { en: 'A2, Elementary', fr: 'A2, Élémentaire' },
    badge: 'A2',
  },
];

export interface SkillCertification {
  id: string;
  title: { en: string; fr: string };
  issuer: string;
  year: string;
  platform: string;
  url: string;
  skills: string[];
}

export const verifiedCertificationsData: SkillCertification[] = [
  {
    id: 'cert-aws-academy',
    title: {
      en: 'AWS Academy Graduate: Cloud Operations & Cloud Security Foundations',
      fr: 'Diplômée AWS Academy : Cloud Operations & Fondations Sécurité Cloud',
    },
    issuer: 'AWS Academy',
    year: '2026',
    platform: 'Credly',
    url: 'https://www.credly.com/users/ranim-abidi',
    skills: ['AWS (EC2, S3)', 'Microsoft Azure (VMs, IAM, networking)', 'IAM', 'RBAC'],
  },
  {
    id: 'cert-hedera-hcda-hcf',
    title: {
      en: 'Hedera Certified: Developer Associate (HCDA) & Foundation (HCF)',
      fr: 'Certifiée Hedera : Developer Associate (HCDA) & Foundation (HCF)',
    },
    issuer: 'Hedera Hashgraph',
    year: '2026',
    platform: 'Credly',
    url: 'https://www.credly.com/users/ranim-abidi',
    skills: ['JavaScript', 'TypeScript', 'Node.js', 'REST APIs'],
  },
  {
    id: 'cert-gcp-badges',
    title: {
      en: 'Google Cloud Skill Badges: Cloud DevOps & Data/ML Tracks',
      fr: 'Badges Google Cloud : Parcours Cloud DevOps & Data/ML',
    },
    issuer: 'Google Cloud',
    year: '2024',
    platform: 'Credly',
    url: 'https://www.credly.com/users/ranim-abidi',
    skills: ['Google Cloud', 'Kubernetes', 'Docker', 'GitHub Actions', 'Pandas'],
  },
  {
    id: 'cert-ibm-data',
    title: {
      en: 'IBM SkillsBuild: Data Analytics Track',
      fr: 'IBM SkillsBuild : Parcours Analyse de Données',
    },
    issuer: 'IBM',
    year: '2025',
    platform: 'Credly',
    url: 'https://www.credly.com/users/ranim-abidi',
    skills: ['Python', 'SQL', 'Pandas', 'Scikit-learn', 'Power BI'],
  },
  {
    id: 'cert-flutter-google',
    title: {
      en: 'Flutter Development (Google)',
      fr: 'Développement Flutter (Google)',
    },
    issuer: 'Google',
    year: '2024',
    platform: 'Credly',
    url: 'https://www.credly.com/users/ranim-abidi',
    skills: ['Flutter', 'Firebase', 'REST APIs', 'UI/UX wireframing'],
  },
];
