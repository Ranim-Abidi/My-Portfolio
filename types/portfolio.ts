export type Language = 'en' | 'fr';

export interface Localized<T = string> {
  en: T;
  fr: T;
}

export interface SocialLinks {
  email: string;
  linkedin: string;
  github: string;
  cvUrl: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: Localized<string>;
  description?: Localized<string>;
}

export interface EducationItem {
  institution: string;
  degree: Localized<string>;
  period: string;
  location: string;
  status: Localized<string>;
  highlights: Localized<string[]>;
  badge?: string;
}

export interface SkillItem {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient' | 'Familiar';
  isHighlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: Localized<string>;
  description: Localized<string>;
  icon: string;
  skills: SkillItem[];
}

export type ProjectCategory = 'cloud' | 'fullstack' | 'aiml' | 'data';

export interface ProjectCaseStudy {
  overview: Localized<string>;
  architectureNotes: Localized<string[]>;
  keyFeatures: Localized<string[]>;
  technologies: string[];
  metrics?: Localized<string[]>;
  challenges: Localized<string[]>;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  pitch: Localized<string>;
  category: ProjectCategory;
  featured: boolean;
  problem: Localized<string>;
  solution: Localized<string>;
  impact: Localized<string>;
  tags: string[];
  cover: string;
  liveUrl?: string;
  videoUrl?: string;
  githubUrl?: string;
  caseStudy: ProjectCaseStudy;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: Localized<string>;
  organization: string;
  location: string;
  category: 'work' | 'leadership' | 'competition';
  bullets: Localized<string[]>;
  tags: string[];
}

export interface CertificateItem {
  id: string;
  title: Localized<string>;
  issuer: string;
  year: string;
  url?: string;
  isAward?: boolean;
  awardRank?: string;
  credentialId?: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    phoneticName: string;
    location: Localized<string>;
    headline: Localized<string>;
    roles: Localized<string[]>;
    motto: Localized<string>;
    availabilityBadge: Localized<string>;
    shortBio: Localized<string>;
    fullStory: Localized<string[]>;
    socials: SocialLinks;
    portraitUrl: string;
  };
  stats: StatItem[];
  education: EducationItem[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  certificates: CertificateItem[];
}
