import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Secret Vault // Access Granted',
  description: 'Hidden easter egg and engineering sandbox for curious visitors.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SecretLayout({ children }: { children: React.ReactNode }) {
  return children;
}
