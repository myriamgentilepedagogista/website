import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consulenza Genitoriale Pedagogica | Myriam Gentile',
  description: 'Consulenza genitoriale pedagogica a Civitanova Marche e online: supporto educativo per regole, capricci, comunicazione e relazione familiare.',
  alternates: {
    canonical: 'https://myriamgentilepedagogista.com/servizi/consulenza-genitoriale',
  },
};

export default function ConsulenzaGenitorialeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
