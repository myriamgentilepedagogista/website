import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '../components/ClientLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://myriamgentilepedagogista.com'),
  title: 'Pedagogista a Civitanova Marche e Online | Dott.sa Myriam Gentile',
  description: 'Consulenza pedagogica specialistica per genitori, educatori e ragazzi. Supporto basato sulle neuroscienze a Civitanova Marche e Online.',
  alternates: {
    canonical: 'https://myriamgentilepedagogista.com',
  },
  openGraph: {
    title: 'Pedagogista a Civitanova Marche e Online | Dott.sa Myriam Gentile',
    description: 'Consulenza pedagogica specialistica per genitori, educatori e ragazzi a Civitanova Marche e online.',
    url: 'https://myriamgentilepedagogista.com',
    siteName: 'Myriam Gentile Pedagogista',
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Pedagogista a Civitanova Marche e Online | Dott.sa Myriam Gentile',
    description: 'Consulenza pedagogica specialistica per genitori, educatori e ragazzi.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://myriamgentilepedagogista.com/#business",
    "name": "Myriam Gentile Pedagogista",
    "url": "https://myriamgentilepedagogista.com",
    "telephone": "+39 345 2291697",
    "email": "myriamgentilepedagogista@outlook.it",
    "areaServed": ["Civitanova Marche", "Macerata", "Marche", "Italia"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via San Callisto da Caravario 5-G, Studio Kairos",
      "addressLocality": "Civitanova Marche",
      "addressRegion": "MC",
      "postalCode": "62012",
      "addressCountry": "IT"
    },
    "founder": {
      "@id": "https://myriamgentilepedagogista.com/chi-sono#person"
    },
    "sameAs": ["https://www.linkedin.com/in/myriam-gentile-012586196/"],
    "priceRange": "$$"
  };

  return (
    <html lang="it">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
