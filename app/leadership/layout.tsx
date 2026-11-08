import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leadership & AIESEC Executive Dossier',
  description:
    'Executive leadership record at AIESEC Tunisia: VP Volunteering Exchange and VP Finance & Legals. Team leadership, international operations, and governance.',
  openGraph: {
    title: 'Leadership & AIESEC Executive Dossier | Ranim Abidi',
    description:
      'Executive governance, cross-border operations, and team leadership at AIESEC Tunisia.',
    url: 'https://ranimabidi.com/leadership',
  },
};

export default function LeadershipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
