import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills & Proof Graph',
  description:
    'Interactive proof graph connecting Cloud, DevOps, Full-Stack, and AI capabilities directly to delivered projects and verified certifications.',
  openGraph: {
    title: 'Skills & Interactive Proof Graph | Ranim Abidi',
    description:
      'Explore tech stack competencies backed by codebases, live deployments, and credentials.',
    url: 'https://ranimabidi.com/skills',
  },
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
