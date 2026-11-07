import { CertificateItem } from '@/types/portfolio';

export const achievementsData: CertificateItem[] = [
  {
    id: 'cert-terraform',
    title: {
      en: 'HashiCorp Certified: Terraform Associate (003)',
      fr: 'HashiCorp Certified : Terraform Associate (003)',
    },
    issuer: 'HashiCorp',
    year: '2025',
    platform: 'Credly',
    // TODO: Replace with your exact Credly verification link
    url: 'https://www.credly.com/organizations/hashicorp/badges',
    credentialId: 'HC-TF-2025-ASSOCIATE',
    verified: true,
    relatedSkillIds: ['terraform', 'cloud-devops', 'cicd'],
  },
  {
    id: 'cert-docker-k8s',
    title: {
      en: 'Docker & Kubernetes: Production Cloud-Native Mastery',
      fr: 'Docker & Kubernetes : Maîtrise des Conteneurs en Production',
    },
    issuer: 'Linux Foundation / Coursera',
    year: '2025',
    platform: 'Coursera',
    // TODO: Replace with your exact certificate link
    url: 'https://coursera.org/verify/LF-DK-9842',
    credentialId: 'LF-DK-9842',
    verified: true,
    relatedSkillIds: ['docker', 'kubernetes', 'linux'],
  },
  {
    id: 'cert-aws-cloud',
    title: {
      en: 'AWS Certified Cloud Practitioner',
      fr: 'AWS Certified Cloud Practitioner',
    },
    issuer: 'Amazon Web Services',
    year: '2024',
    platform: 'Credly',
    // TODO: Replace with your exact Credly badge link
    url: 'https://www.credly.com/organizations/amazon-web-services/badges',
    credentialId: 'AWS-CCP-7128',
    verified: true,
    relatedSkillIds: ['aws', 'cloud-devops'],
  },
  {
    id: 'cert-fastapi-ai',
    title: {
      en: 'Applied AI & RESTful Microservices with Python',
      fr: 'IA Appliquée & Microservices RESTful sous Python',
    },
    issuer: 'DeepLearning.AI',
    year: '2024',
    platform: 'DeepLearning.AI',
    // TODO: Replace with your exact certificate link
    url: 'https://learn.deeplearning.ai/certificates/DLAI-PY-4410',
    credentialId: 'DLAI-PY-4410',
    verified: true,
    relatedSkillIds: ['fastapi', 'python', 'scikit-learn'],
  },
  {
    id: 'cert-hackathon-finalist',
    title: {
      en: 'National AI & Cloud Innovation Hackathon — Laureate (Top 3)',
      fr: 'Hackathon National Innovation Cloud & IA — Lauréate (Top 3)',
    },
    issuer: 'National Tech Federation & ESPRIT Incubator',
    year: '2025',
    platform: 'Hackathon',
    isAward: true,
    awardRank: 'Podium / Top 3 Laureate',
    // TODO: Replace with public announcement or LinkedIn post link
    url: 'https://www.linkedin.com/in/ranim-abidi-a0aa46220/',
    verified: true,
    relatedSkillIds: ['fastapi', 'docker', 'team-leadership'],
  },
  {
    id: 'cert-aiesec-leadership',
    title: {
      en: 'Certified Youth Leadership & Governance Masterclass',
      fr: 'Certification Leadership & Gouvernance Associative',
    },
    issuer: 'AIESEC Global Learning Institute',
    year: '2025',
    platform: 'AIESEC',
    // TODO: Replace with exact verification link
    url: 'https://aiesec.org',
    credentialId: 'AIESEC-GLI-2025',
    verified: true,
    relatedSkillIds: ['team-leadership', 'budgeting'],
  },
];
