import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience & Timeline',
  description:
    'Engineering internships, final-year PFE, hackathons, and technical mentorship track record of Ranim Abidi.',
  openGraph: {
    title: 'Experience & Engineering Timeline | Ranim Abidi',
    description:
      'Internships, hackathon wins, and technical mentoring in Cloud, DevOps, and Full-Stack.',
    url: 'https://ranimabidi.com/experience',
  },
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
