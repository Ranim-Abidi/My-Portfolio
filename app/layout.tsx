import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { UIProvider } from '@/context/UIContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import TerminalModal from '@/components/TerminalModal';
import { portfolioData } from '@/data/portfolio';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ranimabidi.com'),
  title: {
    default: `${portfolioData.profile.name} (${portfolioData.profile.phoneticName}) | Cloud & DevOps Engineer`,
    template: `%s | ${portfolioData.profile.name} — Cloud & DevOps Hub`,
  },
  description: `${portfolioData.profile.name} is a Cloud & DevOps Engineering student at ESPRIT Tunis and Master candidate at ISI KEF. Living hub of verified work in Kubernetes, Terraform, Full-Stack SaaS, and Applied AI.`,
  keywords: [
    'Ranim Abidi',
    'Raneem Abidi',
    'Cloud Engineer',
    'DevOps Engineer',
    'ESPRIT Tunis',
    'ISI KEF',
    'AIESEC Tunisia',
    'Kubernetes',
    'Terraform',
    'Docker',
    'FastAPI',
    'Next.js',
    'Applied AI',
    'Portfolio',
  ],
  authors: [{ name: portfolioData.profile.name, url: 'https://ranimabidi.com' }],
  creator: portfolioData.profile.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fr_FR'],
    url: 'https://ranimabidi.com',
    title: `${portfolioData.profile.name} | Cloud & DevOps Engineering Hub`,
    description: portfolioData.profile.headline.en,
    siteName: `${portfolioData.profile.name} Engineering Hub`,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${portfolioData.profile.name} - Cloud & DevOps Engineer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolioData.profile.name} | Cloud & DevOps Engineer`,
    description: portfolioData.profile.headline.en,
    images: ['/og-image.jpg'],
    creator: '@ranimabidi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#070a13',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: portfolioData.profile.name,
    alternateName: portfolioData.profile.phoneticName,
    jobTitle: 'Cloud & DevOps Engineer',
    description: portfolioData.profile.shortBio.en,
    url: 'https://ranimabidi.com',
    email: `mailto:${portfolioData.profile.socials.email}`,
    sameAs: [
      portfolioData.profile.socials.linkedin,
      portfolioData.profile.socials.github,
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'ESPRIT - Ecole Supérieure Privée d\'Ingénierie et de Technologies',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'ISI KEF - Institut Supérieur d\'Informatique du Kef',
      },
    ],
    knowsAbout: [
      'Cloud Computing',
      'DevOps',
      'Kubernetes',
      'Docker',
      'Terraform',
      'Continuous Integration / Continuous Delivery (CI/CD)',
      'Full-Stack Web Development',
      'FastAPI',
      'Next.js',
      'Applied AI & Machine Learning',
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-200 min-h-screen flex flex-col`}>
        <ThemeProvider>
          <LanguageProvider>
            <UIProvider>
              <Navbar />
              <div id="main-content" className="flex-1">
                {children}
              </div>
              <Footer />
              <CommandPalette />
              <TerminalModal />
            </UIProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
