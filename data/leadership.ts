import { LeadershipRole } from '@/types/portfolio';

export const leadershipData: LeadershipRole[] = [
  {
    id: 'aiesec-vp-vxp',
    title: {
      en: 'Vice President of Volunteering Exchange (VXP)',
      fr: 'Vice-Présidente Volunteering Exchange (VXP)',
    },
    organization: 'AIESEC in Tunisia (National Operations)',
    period: 'Feb 2026 - Present',
    status: 'Current',
    scope: {
      en: 'Directing the national volunteering exchange entity: orchestrating youth talent pipelines, managing international bilateral partnerships with 15+ AIESEC member countries, and driving entity growth.',
      fr: 'Direction du pôle national des échanges de volontariat : pilotage des flux de talents, gestion des partenariats bilatéraux avec plus de 15 pays et conduite de la stratégie d\'expansion.',
    },
    teamSize: '25+ Cross-functional Leaders across 10 Local Committees',
    budgetManaged: '100% Operational Target Compliance',
    impactMetrics: {
      en: [
        '+42% Year-over-year increase in approved international volunteering exchanges',
        'Standardized national applicant review SLAs down to under 48 hours',
        'Launched real-time pipeline visibility dashboards connecting local committees to the national executive board',
      ],
      fr: [
        '+42% de progression annuelle sur les missions de volontariat international approuvées',
        'Réduction des délais d\'examen des candidatures à moins de 48 heures',
        'Déploiement de tableaux de bord unifiés reliant les comités locaux à la direction nationale',
      ],
    },
    responsibilities: {
      en: [
        'Setting national strategic operational goals and tracking execution across weekly agile sprint cycles.',
        'Negotiating bilateral cooperation agreements with foreign AIESEC entities across Europe, Latin America, and MENA.',
        'Mentoring local committee vice presidents, conducting leadership academies, and enforcing risk management protocols.',
      ],
      fr: [
        'Définition des objectifs opérationnels nationaux et suivi d\'exécution en cycles agiles hebdomadaires.',
        'Négociation d\'accords de coopération bilatérale avec des entités AIESEC en Europe, Amérique Latine et MENA.',
        'Formation et encadrement des vice-présidents locaux, animation d\'académies de leadership et gestion des risques.',
      ],
    },
    photos: ['/leadership/vxp-team.webp'],
  },
  {
    id: 'aiesec-vp-fl',
    title: {
      en: 'Vice President of Finance & Legal Affairs (FL)',
      fr: 'Vice-Présidente Finance & Affaires Juridiques (FL)',
    },
    organization: 'AIESEC in Tunisia (Local Committee)',
    period: 'Feb 2025 - Jan 2026',
    status: 'Completed',
    scope: {
      en: 'Sole custodian of local entity treasury, budget governance, legal compliance, contract auditing, and statutory risk assessment.',
      fr: 'Gestionnaire unique de la trésorerie locale, de la gouvernance budgétaire, de la conformité juridique et des audits statutaires.',
    },
    teamSize: 'Executive Board Member overseeing entity fiscal health',
    budgetManaged: '100% National Audit Clearance (Zero Discrepancies)',
    impactMetrics: {
      en: [
        'Achieved 100% score on National Financial Audit with zero non-conformances',
        'Instituted automated bookkeeping models that eliminated manual receipt accounting delays',
        'Optimized conference and project resource allocation, increasing year-end reserves by 28%',
      ],
      fr: [
        'Obtention d\'un score de 100% à l\'audit financier national sans aucune non-conformité',
        'Mise en place d\'outils d\'automatisation comptable éliminant les retards de rapprochement',
        'Optimisation des dépenses d\'événements permettant d\'augmenter les réserves financières de 28%',
      ],
    },
    responsibilities: {
      en: [
        'Drafting, defending, and enforcing the annual operational budget before the General Assembly.',
        'Reviewing international participant contracts, insurance validations, and host entity agreements.',
        'Training incoming executive board candidates in financial literacy, fiscal transparency, and ethical governance.',
      ],
      fr: [
        'Élaboration, présentation et exécution du budget annuel devant l\'Assemblée Générale.',
        'Revue juridique des contrats d\'échanges internationaux, assurances et accords de partenariat.',
        'Transmission et formation des successeurs à la transparence financière et à la déontologie associative.',
      ],
    },
    photos: ['/leadership/fl-audit.webp'],
  },
];
