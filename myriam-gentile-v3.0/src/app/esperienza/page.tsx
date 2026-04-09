import React from 'react';
import { GraduationCap, Briefcase, Award, BookOpen, ChevronRight, ArrowUpRight, CheckCircle2, Star } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Esperienza e Formazione | Dott.ssa Myriam Gentile',
  description: 'Il percorso accademico e professionale della Dott.ssa Myriam Gentile. Specializzazioni in pedagogia, neuroscienze e coordinamento educativo.',
  alternates: {
    canonical: 'https://myriamgentilepedagogista.com/esperienza',
  },
};

export default function ExperiencePage() {
  const siteUrl = "https://myriamgentilepedagogista.com";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Myriam Gentile",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "Laurea Magistrale in Scienze Pedagogiche",
        "educationalLevel": "Master of Arts",
        "recognizedBy": {
          "@type": "CollegeOrUniversity",
          "name": "Università degli Studi di Macerata"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Master in Neuroscienze dell'Apprendimento",
        "credentialCategory": "Specialization"
      }
    ]
  };

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <div className="container mx-auto px-6">
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A89E92] mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#D68C70] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#4A3F35] font-medium">Esperienza</span>
        </nav>

        <header className="max-w-4xl mb-24">
          <h1 className="text-6xl md:text-8xl font-serif text-[#4A3F35] mb-8 leading-[0.9]">Formazione e Percorso Professionale</h1>
          <p className="text-xl text-[#6B5E51] font-light max-w-2xl leading-relaxed">
            Un percorso dedicato allo studio costante della mente umana e dei processi educativi, per offrire un supporto basato sulle più recenti evidenze scientifiche.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-20">
            {/* Education */}
            <section>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full bg-[#D68C70]/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#D68C70]" />
                </div>
                <h2 className="text-3xl font-serif text-[#4A3F35]">Formazione Accademica</h2>
              </div>
              <div className="space-y-8">
                {[
                  {
                    year: "2023",
                    title: "Laurea Magistrale in Scienze Pedagogiche",
                    org: "Università degli Studi di Macerata",
                    desc: "Votazione 110/110 con Lode. Tesi sperimentale sull'integrazione tra neuroscienze e prassi pedagogica."
                  },
                  {
                    year: "2021",
                    title: "Laurea in Scienze dell'Educazione e della Formazione",
                    org: "Università degli Studi di Macerata",
                    desc: "Focus sullo sviluppo infantile e sulle dinamiche relazionali nei contesti educativi 0-6."
                  }
                ].map((edu, idx) => (
                  <div key={idx} className="relative pl-8 border-l border-[#EBE7E0]">
                    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-[#D68C70]" />
                    <span className="text-xs font-bold text-[#D68C70] uppercase tracking-widest mb-2 block">{edu.year}</span>
                    <h3 className="text-xl font-serif text-[#4A3F35] mb-2">{edu.title}</h3>
                    <p className="text-sm font-medium text-[#6B5E51] mb-2">{edu.org}</p>
                    <p className="text-[#6B5E51] font-light text-sm leading-relaxed">{edu.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional Experience */}
            <section>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full bg-[#7B8B6F]/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-[#7B8B6F]" />
                </div>
                <h2 className="text-3xl font-serif text-[#4A3F35]">Esperienza Professionale</h2>
              </div>
              <div className="space-y-12">
                {[
                  {
                    role: "Coordinatrice Pedagogica",
                    org: "Servizi Educativi 0-3",
                    desc: "Supervisione dei team educativi, progettazione pedagogica e monitoraggio della qualità in diversi nidi d'infanzia della provincia di Macerata."
                  },
                  {
                    role: "Tutor dell'Apprendimento Specialistico",
                    org: "Libera Professione",
                    desc: "Supporto a ragazzi con DSA, BES e ADHD attraverso la costruzione di metodi di studio personalizzati e l'uso di strumenti compensativi."
                  },
                  {
                    role: "Esperta in Progetti PNRR",
                    org: "Istituti Scolastici",
                    desc: "Attuazione di percorsi di mentoring e orientamento per il contrasto alla dispersione scolastica in scuole secondarie di primo e secondo grado."
                  }
                ].map((job, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-[#F3F0E9] shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-serif text-[#4A3F35] mb-2">{job.role}</h3>
                    <p className="text-sm font-bold text-[#7B8B6F] uppercase tracking-widest mb-4">{job.org}</p>
                    <p className="text-[#6B5E51] font-light leading-relaxed">{job.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <section className="bg-white p-8 rounded-[2.5rem] border border-[#F3F0E9] shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-5 h-5 text-[#D68C70]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#4A3F35]">Specializzazioni</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Neuroscienze dell'apprendimento",
                  "Pedagogia clinica e della relazione",
                  "Coordinamento servizi 0-6",
                  "Tutoraggio DSA e BES",
                  "Progettazione educativa"
                ].map(skill => (
                  <li key={skill} className="flex items-center gap-3 text-sm text-[#6B5E51]">
                    <CheckCircle2 className="w-4 h-4 text-[#7B8B6F]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-[#4A3F35] text-white p-8 rounded-[2.5rem] shadow-xl">
              <Star className="w-8 h-8 text-[#D68C70] mb-6" />
              <h3 className="text-2xl font-serif mb-4">Aggiornamento Costante</h3>
              <p className="text-sm font-light opacity-90 leading-relaxed mb-6">
                La pedagogia è una scienza viva. Partecipo regolarmente a convegni nazionali e corsi di alta formazione per garantire un approccio sempre all'avanguardia.
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-2">Iscritta a</p>
                <p className="text-sm font-medium">Ordine delle Professioni Pedagogiche (L. 55/2024)</p>
              </div>
            </section>

            <div className="p-8 bg-[#FDFBF7] rounded-[2.5rem] border border-[#EBE7E0]">
              <BookOpen className="w-6 h-6 text-[#D68C70] mb-4" />
              <h4 className="font-serif text-lg text-[#4A3F35] mb-2">Pubblicazioni e Ricerca</h4>
              <p className="text-xs text-[#6B5E51] leading-relaxed">
                Collaboro alla stesura di articoli divulgativi su temi di pedagogia e neuroscienze per riviste di settore e blog specialistici.
              </p>
              <Link href="/blog" className="inline-flex items-center gap-2 text-[#D68C70] text-xs font-bold mt-4 hover:underline">
                Leggi i miei articoli <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
