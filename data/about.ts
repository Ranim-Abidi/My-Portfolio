import { HowIBuildData, AskMeAboutData, BeyondTheCodeData } from '@/types/portfolio';

export const howIBuildData: HowIBuildData = {
  title: {
    en: 'How I Build',
    fr: '',
  },
  subtitle: {
    en: 'The loop behind every system I ship.',
    fr: '',
  },
  steps: [
    {
      id: 'imagine',
      stepNumber: '01',
      title: {
        en: 'Imagine',
        fr: '',
      },
      description: {
        en: 'Start with the real problem. For OXIT, that meant talking to farmers before writing a line of code.',
        fr: '',
      },
    },
    {
      id: 'design',
      stepNumber: '02',
      title: {
        en: 'Design',
        fr: '',
      },
      description: {
        en: 'Plan for reliability from the start: infrastructure as code, containerized services, security built in.',
        fr: '',
      },
    },
    {
      id: 'automate',
      stepNumber: '03',
      title: {
        en: 'Automate',
        fr: '',
      },
      description: {
        en: 'CI/CD from the first commit. Nothing ships by hand.',
        fr: '',
      },
    },
    {
      id: 'observe',
      stepNumber: '04',
      title: {
        en: 'Observe',
        fr: '',
      },
      description: {
        en: 'Metrics, logs, and alerts, so the system can explain itself when something changes.',
        fr: '',
      },
    },
  ],
  loopStep: {
    badge: '∞',
    title: {
      en: 'Improve',
      fr: '',
    },
    description: {
      en: 'Feed what the data shows back into the next iteration.',
      fr: '',
    },
  },
};

export const askMeAboutData: AskMeAboutData = {
  title: {
    en: 'Ask Me About',
    fr: '',
  },
  subtitle: {
    en: "Pick a topic and let's talk.",
    fr: '',
  },
  topics: [
    {
      id: 'terraform-multicloud',
      topic: {
        en: 'Terraform across AWS, Azure & GCP',
        fr: '',
      },
      answer: {
        en: 'I manage infrastructure as code using modular Terraform patterns with remote state locking, role-based access, and automated plan verification across multiple cloud providers.',
        fr: '',
      },
      projectLink: {
        label: {
          en: 'Explore Private Cloud Infrastructure Blueprint',
          fr: 'Explorer le plan d\'architecture Cloud Privé',
        },
        href: '/projects/matchy-khedma-cloud',
      },
    },
    {
      id: 'kubernetes-helm',
      topic: {
        en: 'Kubernetes & Helm in production',
        fr: '',
      },
      answer: {
        en: 'I structure microservices into parameterised Helm charts and deploy containerized workloads across managed and private Kubernetes clusters with active monitoring and self-healing pods.',
        fr: '',
      },
      projectLink: {
        label: {
          en: 'View Kubernetes Orchestration Case Study',
          fr: '',
        },
        href: '/projects/matchy-khedma-cloud',
      },
    },
    {
      id: 'cicd-github-actions',
      topic: {
        en: 'CI/CD with GitHub Actions',
        fr: '',
      },
      answer: {
        en: 'I implement automated pipelines covering linting, static analysis, container image scanning, and automated deployment checks so that nothing reaches staging or production manually.',
        fr: '',
      },
      projectLink: {
        label: {
          en: 'See Automated Pipeline Architecture',
          fr: '',
        },
        href: '/projects/dash-analytics-hub',
      },
    },
    {
      id: 'rl-smart-irrigation',
      topic: {
        en: 'Reinforcement learning for smart irrigation (OXIT)',
        fr: '',
      },
      answer: {
        en: 'For the OXIT project, I built a reinforcement learning model to optimize automated irrigation schedules based on soil sensor readings and local weather conditions, aiming to conserve water while protecting crop health.',
        fr: '',
      },
      projectLink: {
        label: {
          en: 'Browse OXIT Smart Agriculture Platform',
          fr: '',
        },
        href: '/projects/oxit-smart-agriculture',
      },
    },
    {
      id: 'dash-aiesec',
      topic: {
        en: 'Building D.A.S.H for the AIESEC Tunisia network',
        fr: '',
      },
      answer: {
        en: 'I developed D.A.S.H to centralize national operational reporting, replacing scattered manual spreadsheets with unified dashboards and actionable performance indicators across our committees.',
        fr: '',
      },
      projectLink: {
        label: {
          en: 'Read D.A.S.H Analytics Case Study',
          fr: '',
        },
        href: '/projects/dash-analytics-hub',
      },
    },
    {
      id: 'aiesec-leadership',
      topic: {
        en: 'Leading international exchange at AIESEC',
        fr: '',
      },
      answer: {
        en: 'As VP Volunteering Exchange and previously VP Finance & Legals, I direct national exchange operations, lead student executive teams, and manage cross-border compliance and partner relations.',
        fr: '',
      },
      projectLink: {
        label: {
          en: 'Inspect AIESEC Leadership Dossier',
          fr: '',
        },
        href: '/leadership',
      },
    },
    {
      id: 'gdsc-mentoring',
      topic: {
        en: 'Mentoring 1,000+ students at GDSC',
        fr: '',
      },
      answer: {
        en: 'Through Google Developer Student Clubs and tech student initiatives, I have organized and delivered hands-on technical sessions on Linux, Docker, and full-stack fundamentals to help students build practical engineering projects.',
        fr: '',
      },
      projectLink: {
        label: {
          en: 'View Community & Mentoring Timeline',
          fr: '',
        },
        href: '/experience',
      },
    },
  ],
};

export const beyondTheCodeData: BeyondTheCodeData = {
  title: {
    en: 'Beyond the Code',
    fr: '',
  },
  subtitle: {
    en: 'What keeps me curious away from the screen.',
    fr: '',
  },
  items: [
    {
      id: 'strings-sketches',
      title: {
        en: 'Strings & sketches',
        fr: '',
      },
      description: {
        en: 'I play guitar and draw to switch off.',
        fr: '',
      },
      icon: 'guitar',
      tag: {
        en: 'Creative outlet',
        fr: '',
      },
    },
    {
      id: 'pages',
      title: {
        en: 'Pages',
        fr: '',
      },
      description: {
        en: 'I read to keep learning outside the screen.',
        fr: '',
      },
      icon: 'book',
      tag: {
        en: 'Continuous learning',
        fr: '',
      },
    },
    {
      id: 'roots',
      title: {
        en: 'Roots',
        fr: '',
      },
      description: {
        en: 'I grow flowers at home, which fits an engineer building for agriculture.',
        fr: '',
      },
      icon: 'roots',
      tag: {
        en: 'Cultivation',
        fr: '',
      },
    },
  ],
};
