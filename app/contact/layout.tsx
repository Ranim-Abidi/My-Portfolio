import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Hire Me',
  description:
    'Direct contact channels, calendar booking, and tailored CV downloads (Cloud/DevOps, Full-Stack, AI) for Ranim Abidi.',
  openGraph: {
    title: 'Contact & Hire Ranim Abidi | Cloud & DevOps Engineer',
    description:
      'Get in touch for final-year engineering internships (PFE 2027), freelance cloud projects, or technical collaborations.',
    url: 'https://ranimabidi.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
