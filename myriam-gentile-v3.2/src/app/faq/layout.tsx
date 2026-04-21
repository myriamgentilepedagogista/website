import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ Consulenza Pedagogica | Myriam Gentile',
  description: 'Risposte alle domande frequenti su consulenza genitoriale, tutoraggio specialistico, studio pedagogico e percorsi con Myriam Gentile.',
  alternates: {
    canonical: 'https://myriamgentilepedagogista.com/faq',
  },
  openGraph: {
    title: 'FAQ Consulenza Pedagogica | Myriam Gentile',
    description: 'Domande frequenti sui percorsi pedagogici per genitori, ragazzi e professionisti.',
    url: 'https://myriamgentilepedagogista.com/faq',
    siteName: 'Myriam Gentile Pedagogista',
    locale: 'it_IT',
    type: 'website',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
