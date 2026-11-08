import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Achievements & Verified Credentials',
  description:
    'Wall of verified industry certifications, cloud credentials, hackathon awards, and verified technical badges with direct verification links.',
  openGraph: {
    title: 'Achievements & Verified Credentials | Ranim Abidi',
    description:
      'Verified certifications and awards from HashiCorp, AWS, Docker, Credly, and national hackathons.',
    url: 'https://ranimabidi.com/achievements',
  },
};

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
