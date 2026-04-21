import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tutoraggio Specialistico DSA, BES e ADHD | Myriam Gentile',
  description: 'Tutoraggio specialistico per DSA, BES e ADHD: metodo di studio, autonomia, strumenti compensativi e supporto pedagogico scolastico.',
  alternates: {
    canonical: 'https://myriamgentilepedagogista.com/servizi/tutoraggio-specialistico',
  },
};

export default function TutoraggioSpecialisticoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
