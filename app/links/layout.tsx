import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Links & Live Activity Hub',
  description:
    'Single link-hub for all verified profiles of Ranim Abidi (GitHub, LinkedIn, GitLab, Credly) with real-time public GitHub activity.',
  openGraph: {
    title: 'Links & Live Activity Hub | Ranim Abidi',
    description:
      'Direct links to GitHub, LinkedIn, Credly, GitLab, and live open-source activity.',
    url: 'https://ranimabidi.com/links',
  },
};

export default function LinksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
