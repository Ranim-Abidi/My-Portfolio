import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
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
  title: `${portfolioData.profile.name} (${portfolioData.profile.phoneticName}) | Cloud & DevOps Engineer`,
  description: `${portfolioData.profile.name} is a Cloud & DevOps Engineering student at ESPRIT Tunis and Master candidate at ISI KEF. Specialized in Kubernetes, Terraform, Full-Stack SaaS and Applied AI.`,
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
    title: `${portfolioData.profile.name} | Cloud & DevOps Engineering Portfolio`,
    description: portfolioData.profile.headline.en,
    siteName: `${portfolioData.profile.name} Portfolio`,
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-200`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
