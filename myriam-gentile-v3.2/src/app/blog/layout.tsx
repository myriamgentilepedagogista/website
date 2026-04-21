import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Pedagogico per Genitori | Myriam Gentile',
  description: 'Articoli e approfondimenti di pedagogia per genitori: educazione, scuola, regole, autostima, ansia, capricci e sviluppo dei bambini.',
  alternates: {
    canonical: 'https://myriamgentilepedagogista.com/blog',
  },
  openGraph: {
    title: 'Blog Pedagogico per Genitori | Myriam Gentile',
    description: 'Articoli e approfondimenti di pedagogia per genitori, educatrici e famiglie.',
    url: 'https://myriamgentilepedagogista.com/blog',
    siteName: 'Myriam Gentile Pedagogista',
    locale: 'it_IT',
    type: 'website',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
