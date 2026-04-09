import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '../components/ClientLayout';

export const metadata: Metadata = {
  title: 'Pedagogista a Civitanova Marche e Online | Dott.sa Myriam Gentile',
  description: 'Consulenza pedagogica specialistica per genitori, educatori e ragazzi. Supporto basato sulle neuroscienze a Civitanova Marche e Online.',
  alternates: {
    canonical: 'https://myriamgentilepedagogista.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
