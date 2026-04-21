import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coordinamento Pedagogico e Supervisione 0-6 | Myriam Gentile',
  description: 'Coordinamento pedagogico, supervisione educativa e supporto PNRR per nidi, scuole, servizi 0-6 e istituzioni educative.',
  alternates: {
    canonical: 'https://myriamgentilepedagogista.com/servizi/coordinamento-pedagogico',
  },
};

export default function CoordinamentoPedagogicoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
