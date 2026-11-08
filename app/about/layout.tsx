import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About & Journey',
  description:
    'Dual-degree Cloud & DevOps student at ESPRIT Tunis and Master candidate at ISI KEF. Engineering values, dual-degree trajectory, and current focus.',
  openGraph: {
    title: 'About Ranim Abidi | Cloud & DevOps Engineer',
    description:
      'Dual-degree Cloud & DevOps student at ESPRIT Tunis and Master candidate at ISI KEF. Engineering values and trajectory.',
    url: 'https://ranimabidi.com/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
