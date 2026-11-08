import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering Notes & Lessons Learned',
  description:
    'Field notes, architecture trade-offs, and lessons learned in Cloud, DevOps, and Full-Stack Engineering by Ranim Abidi.',
  openGraph: {
    title: 'Engineering Notes | Ranim Abidi',
    description:
      'Field notes and deep dives into Kubernetes, Multi-Tenancy, and Distributed Systems.',
    url: 'https://ranimabidi.com/blog',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
