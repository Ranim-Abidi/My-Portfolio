export type Language = 'en' | 'fr';

export interface Localized<T = string> {
  en: T;
  fr: T;
}

export interface SocialLinks {
  email: string;
  linkedin: string;
  github: string;
  gitlab?: string;
  medium?: string;
  youtube?: string;
  cvUrl: string;
  bookingUrl?: string; // e.g. Cal.com or Calendly
}

export interface TailoredCV {
  id: string;
  role: Localized<string>;
  filename: string;
  path: string;
  description: Localized<string>;
}

export interface NowBlock {
  learning: Localized<string[]>;
  building: Localized<string[]>;
  reading: Localized<string[]>;
  updatedAt: string;
}

export interface ValueItem {
  title: Localized<string>;
  description: Localized<string>;
  icon: string;
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
  id: string;
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient' | 'Familiar';
  isHighlight?: boolean;
  projectSlugs: string[];
  certificateIds?: string[];
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
  architectureDiagram?: string; // ASCII or visual component identifier
  keyFeatures: Localized<string[]>;
  technologies: string[];
  metrics?: Localized<string[]>;
  challenges: Localized<string[]>;
  lessonsLearned?: Localized<string[]>;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  pitch: Localized<string>;
  category: ProjectCategory;
  featured: boolean;
  featuredRank?: number; // 1, 2, 3 for Home page top 3
  problem: Localized<string>;
  solution: Localized<string>;
  impact: Localized<string>;
  tags: string[];
  cover: string;
  screenshots?: string[];
  liveUrl?: string;
  healthEndpoint?: string;
  videoUrl?: string;
  githubUrl?: string;
  relatedSkillIds: string[];
  caseStudy: ProjectCaseStudy;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: Localized<string>;
  organization: string;
  location: string;
  category: 'work' | 'leadership' | 'competition' | 'mentoring';
  bullets: Localized<string[]>;
  tags: string[];
}

export interface LeadershipRole {
  id: string;
  title: Localized<string>;
  organization: string;
  period: string;
  status: 'Current' | 'Completed';
  scope: Localized<string>;
  teamSize: string;
  budgetManaged?: string;
  impactMetrics: Localized<string[]>;
  responsibilities: Localized<string[]>;
  photos?: string[];
}

export type AchievementPlatform = 
  | 'Credly' 
  | 'LinkedIn' 
  | 'Coursera' 
  | 'DeepLearning.AI' 
  | 'Hackathon' 
  | 'Devpost' 
  | 'Kaggle' 
  | 'AIESEC'
  | 'University';

export interface CertificateItem {
  id: string;
  title: Localized<string>;
  issuer: string;
  year: string;
  platform: AchievementPlatform;
  url: string;
  isAward?: boolean;
  awardRank?: string;
  credentialId?: string;
  badge?: string;
  verified: boolean;
  relatedSkillIds?: string[];
}

export interface ExternalLinkItem {
  id: string;
  title: string;
  category: 'code' | 'professional' | 'writing' | 'community' | 'media';
  url: string;
  username?: string;
  description: Localized<string>;
  icon: string;
  primary?: boolean;
}

export interface BuildPipelineStep {
  id: string;
  stepNumber: string;
  title: Localized<string>;
  description: Localized<string>;
}

export interface HowIBuildData {
  title: Localized<string>;
  subtitle: Localized<string>;
  steps: BuildPipelineStep[];
  loopStep: {
    badge: string;
    title: Localized<string>;
    description: Localized<string>;
  };
}

export interface AskMeTopic {
  id: string;
  topic: Localized<string>;
  answer: Localized<string>;
  projectLink?: {
    label: Localized<string>;
    href: string;
  };
}

export interface AskMeAboutData {
  title: Localized<string>;
  subtitle: Localized<string>;
  topics: AskMeTopic[];
}

export interface BeyondTheCodeItem {
  id: string;
  title: Localized<string>;
  description: Localized<string>;
  icon: 'guitar' | 'book' | 'roots';
  tag: Localized<string>;
}

export interface BeyondTheCodeData {
  title: Localized<string>;
  subtitle: Localized<string>;
  items: BeyondTheCodeItem[];
}

export interface ProfileData {
  name: string;
  phoneticName: string;
  location: Localized<string>;
  headline: Localized<string>;
  roles: Localized<string[]>;
  motto: Localized<string>;
  availabilityBadge: Localized<string>;
  shortBio: Localized<string>;
  fullStory: Localized<string[]>;
  languages: Array<{ name: Localized<string>; proficiency: Localized<string> }>;
  socials: SocialLinks;
  tailoredCVs: TailoredCV[];
  portraitUrl: string;
  introVideoUrl?: string;
  now: NowBlock;
  values: ValueItem[];
}

export interface PortfolioData {
  profile: ProfileData;
  stats: StatItem[];
  education: EducationItem[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  leadership: LeadershipRole[];
  certificates: CertificateItem[];
  externalLinks: ExternalLinkItem[];
  howIBuild: HowIBuildData;
  askMeAbout: AskMeAboutData;
  beyondTheCode: BeyondTheCodeData;
}
