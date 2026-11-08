import { PortfolioData } from '@/types/portfolio';
import { profileData, educationData, statsData } from './profile';
import { projectsData } from './projects';
import { skillCategoriesData } from './skills';
import { experienceData } from './experience';
import { leadershipData } from './leadership';
import { achievementsData } from './achievements';
import { externalLinksData } from './links';
import { howIBuildData, askMeAboutData, beyondTheCodeData } from './about';

export const portfolioData: PortfolioData = {
  profile: profileData,
  stats: statsData,
  education: educationData,
  skillCategories: skillCategoriesData,
  projects: projectsData,
  experience: experienceData,
  leadership: leadershipData,
  certificates: achievementsData,
  externalLinks: externalLinksData,
  howIBuild: howIBuildData,
  askMeAbout: askMeAboutData,
  beyondTheCode: beyondTheCodeData,
};

// Re-export modular sources
export {
  profileData,
  educationData,
  statsData,
  projectsData,
  skillCategoriesData,
  experienceData,
  leadershipData,
  achievementsData,
  externalLinksData,
  howIBuildData,
  askMeAboutData,
  beyondTheCodeData,
};
