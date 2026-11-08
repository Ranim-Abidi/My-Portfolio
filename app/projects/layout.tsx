import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Projects & Architecture',
  description:
    'Production-grade cloud, DevOps, full-stack, and AI projects by Ranim Abidi with architecture diagrams, live demos, and case studies.',
  openGraph: {
    title: 'Selected Projects | Ranim Abidi',
    description:
      'Production-grade cloud, DevOps, full-stack, and AI projects with live demos and architecture notes.',
    url: 'https://ranimabidi.com/projects',
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
