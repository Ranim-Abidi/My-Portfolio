import { ExternalLinkItem } from '@/types/portfolio';

export const externalLinksData: ExternalLinkItem[] = [
  {
    id: 'github',
    title: 'GitHub',
    category: 'code',
    url: 'https://github.com/Ranim-Abidi',
    username: '@Ranim-Abidi',
    description: {
      en: 'Open source repositories, GitOps pipelines, Dockerfiles, and full-stack SaaS projects.',
      fr: 'Dépôts open-source, architectures GitOps, configurations Docker et projets full-stack.',
    },
    icon: 'Github',
    primary: true,
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    category: 'professional',
    url: 'https://www.linkedin.com/in/ranim-abidi-a0aa46220/',
    username: 'Ranim Abidi',
    description: {
      en: 'Professional network, academic milestones, AIESEC leadership posts, and recommendations.',
      fr: 'Réseau professionnel, actualités académiques, responsabilités AIESEC et recommandations.',
    },
    icon: 'Linkedin',
    primary: true,
  },
  {
    id: 'email',
    title: 'Direct Email',
    category: 'professional',
    url: 'mailto:abidiranim237@gmail.com',
    username: 'abidiranim237@gmail.com',
    description: {
      en: 'Primary contact channel for engineering internship offers (PFE 2027) and technical discussions.',
      fr: 'Canal direct pour opportunités de stage de fin d\'études (PFE 2027) et échanges techniques.',
    },
    icon: 'Mail',
    primary: true,
  },
  {
    id: 'booking',
    title: 'Schedule a Call (Cal.com)',
    category: 'professional',
    // TODO: Replace with your actual Calendly or Cal.com URL
    url: 'https://cal.com/ranim-abidi',
    username: 'cal.com/ranim-abidi',
    description: {
      en: 'Book a 20-minute video call to discuss internship opportunities or engineering collaborations.',
      fr: 'Réservez un créneau de 20 minutes pour échanger sur une opportunité de stage ou un projet.',
    },
    icon: 'Calendar',
    primary: true,
  },
  {
    id: 'credly',
    title: 'Credly Badges',
    category: 'professional',
    url: 'https://www.credly.com',
    username: 'Ranim Abidi',
    description: {
      en: 'Verified digital badges for HashiCorp Terraform Associate and AWS Cloud certifications.',
      fr: 'Badges numériques vérifiés pour HashiCorp Terraform et Amazon Web Services.',
    },
    icon: 'Award',
  },
  {
    id: 'gitlab',
    title: 'GitLab',
    category: 'code',
    url: 'https://gitlab.com/ranimabidi',
    username: '@ranimabidi',
    description: {
      en: 'Academic course projects, private CI/CD mirrors, and university engineering labs.',
      fr: 'Projets académiques, miroirs CI/CD et travaux pratiques d\'ingénierie.',
    },
    icon: 'Gitlab',
  },
  {
    id: 'medium',
    title: 'Medium & Tech Notes',
    category: 'writing',
    url: 'https://medium.com/@abidiranim237',
    username: '@abidiranim237',
    description: {
      en: 'Articles and deep dives on containerization, GitOps practices, and machine learning microservices.',
      fr: 'Articles et retours d\'expérience sur la conteneurisation, le GitOps et les microservices ML.',
    },
    icon: 'BookOpen',
  },
  {
    id: 'aiesec-org',
    title: 'AIESEC Tunisia Official',
    category: 'community',
    url: 'https://aiesec.org',
    username: 'AIESEC in Tunisia',
    description: {
      en: 'Global youth-led organization empowering cross-cultural volunteering and leadership exchanges.',
      fr: 'Organisation internationale de jeunesse pilotant les échanges de volontariat et de leadership.',
    },
    icon: 'Globe',
  },
];
