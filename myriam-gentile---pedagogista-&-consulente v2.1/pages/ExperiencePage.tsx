import React from 'react';
import { ArrowLeft, GraduationCap, Briefcase, Award, BookOpen, MapPin, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { getMeta } from '../seo/metadata';

const ExperiencePage: React.FC = () => {
  const location = useLocation();
  const meta = getMeta(location.pathname);
  const siteUrl = "https://www.myriamgentilepedagogista.com";

  const credentialsSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/chi-sono#person`,
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Laurea Magistrale in Scienze Pedagogiche",
        "credentialCategory": "degree",
        "recognizedBy": {
          "@type": "CollegeOrUniversity",
          "name": "Università degli Studi di Macerata"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Laurea in Scienze dell’Educazione e della Formazione",
        "credentialCategory": "degree",
        "recognizedBy": {
          "@type": "CollegeOrUniversity",
          "name": "Università degli Studi di Macerata"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Certificazione Tutor DSA e BES",
        "recognizedBy": {
          "@type": "Organization",
          "name": "S.I.P.P. / Centro Studi Erickson"
        }
      }
    ]
  };

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <SEO 
        title={meta.title}
        description={meta.description}
        path={location.pathname}
        ogType={meta.ogType}
      />
      <script type="application/ld+json">
        {JSON.stringify(credentialsSchema)}
      </script>
      <div className="container mx-auto px-6 max-w-5xl">
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A89E92] mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#D68C70] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#4A3F35] font-medium">Esperienza</span>
        </nav>

        <header className="mb-20">
          <span className="text-[#D68C70] font-semibold tracking-widest text-xs uppercase mb-4 block">Formazione Permanente e Professionalità</span>
          <h1 className="text-5xl md:text-8xl font-serif text-[#4A3F35] mb-6 leading-none">Curriculum Vitae</h1>
          <p className="text-xl text-[#6B5E51] font-light max-w-3xl leading-relaxed">
            Il mio percorso professionale è una sintesi di rigore accademico ed esperienza sul campo nei contesti educativi e scolastici delle Marche.
          </p>
        </header>

        <div className="space-y-24">
          {/* Section: Territory */}
          <section className="bg-white p-12 rounded-[3.5rem] border border-[#F3F0E9] flex flex-col md:flex-row items-center gap-12 text-center md:text-left shadow-sm">
             <div className="w-20 h-20 rounded-full bg-[#D68C70]/10 flex items-center justify-center shrink-0">
               <MapPin className="w-10 h-10 text-[#D68C70]" />
             </div>
             <div>
               <h2 className="text-3xl font-serif text-[#4A3F35] mb-4">Ambito di Intervento Territoriale</h2>
               <p className="text-[#6B5E51] font-light text-lg leading-relaxed">
                 Opero come pedagogista e coordinatrice nelle province di <strong>Macerata, Ancona e Fermo</strong>. La mia sede principale è a <strong>Civitanova Marche</strong> presso lo Studio Kairos, dove svolgo le consulenze in presenza e coordino diversi servizi educativi del territorio.
               </p>
             </div>
          </section>

          {/* 1. ACADEMIC EDUCATION */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-[#D68C70] text-white flex items-center justify-center shadow-lg shadow-[#D68C70]/20">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#4A3F35]">Formazione Accademica Specialistica</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white p-10 rounded-[3rem] border border-[#F3F0E9] shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <h3 className="text-2xl font-serif text-[#4A3F35]">Laurea Magistrale in Scienze Pedagogiche (LM-85)</h3>
                  <span className="text-[#D68C70] font-bold text-xl">110/110 Lode</span>
                </div>
                <p className="text-[#6B5E51] mb-2 font-medium">Università degli Studi di Macerata (Unimc)</p>
                <p className="text-sm italic font-light leading-relaxed">
                  Curriculum: <strong>Pedagogia della disabilità e della marginalità</strong>. Tesi di ricerca in Filosofia dell'educazione che ha posto le basi per il mio approccio centrato sulla relazione e sul valore intrinseco della persona.
                </p>
              </div>

              <div className="bg-white p-10 rounded-[3rem] border border-[#F3F0E9] shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <h3 className="text-2xl font-serif text-[#4A3F35]">Laurea in Scienze dell’Educazione e della Formazione (L-19)</h3>
                  <span className="text-[#D68C70] font-bold text-xl">106/110</span>
                </div>
                <p className="text-[#6B5E51] mb-2 font-medium">Università degli Studi di Macerata</p>
                <p className="text-sm italic font-light leading-relaxed">
                  Curriculum: <strong>Educatore di nido e comunità infantili</strong>. Un percorso che ha consolidato le mie competenze nella progettazione dei servizi per la prima infanzia (0-3 anni).
                </p>
              </div>
            </div>
          </section>

          {/* 2. SPECIALIZED TRAINING */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-[#4A3F35] text-white flex items-center justify-center shadow-lg shadow-[#4A3F35]/20">
                <BookOpen className="w-7 h-7" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#4A3F35]">Certificazioni e Corsi di Perfezionamento</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Consulenza Pedagogica Genitoriale (S.I.P.P.)",
                "Trattamento DSA (Centro Studi Erickson)",
                "Coordinamento Psicopedagogico 0-6 (S.I.P.P.)",
                "Tutor per alunni con DSA e BES (S.I.P.P.)",
                "Saper stare nei conflitti (CPP Novara)",
                "Facilitatrice Mindfulness (Mindfulness Educators)",
                "Parent Training specialistico (Erickson)",
                "Esperta in Orientamento Scolastico (ASNOR)",
                "Sostegno alle relazioni familiari (Ambito n.15)"
              ].map((course, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-[#F3F0E9] flex gap-4 shadow-sm hover:border-[#D68C70]/30 transition-colors">
                  <Award className="w-5 h-5 text-[#D68C70] shrink-0 mt-1" />
                  <span className="text-sm font-medium text-[#4A3F35] leading-snug">{course}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 3. PROFESSIONAL EXPERIENCES */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-[#7B8B6F] text-white flex items-center justify-center shadow-lg shadow-[#7B8B6F]/20">
                <Briefcase className="w-7 h-7" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#4A3F35]">Esperienze Professionali Complete</h2>
            </div>

            <div className="space-y-20">
              {/* Category 1: Coordinamento */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D68C70] mb-8 flex items-center gap-4">
                  <div className="h-px w-12 bg-[#D68C70]/30"></div>
                  Coordinamento Pedagogico e Supervisione
                </h4>
                <div className="space-y-10 pl-4 md:pl-8 border-l border-[#EBE7E0] ml-2">
                  {[
                    { date: "Ott 2025 – Presente", desc: "Coordinatrice Pedagogica e Supervisora presso Nido d'infanzia comunale 'Il Cucciolo' di Loreto (Ancona)." },
                    { date: "Mar 2025 – Presente", desc: "Coordinatrice Pedagogica e Supervisora presso Nido d'infanzia comunale 'Raggio di Sole' (Lacerenza Multiservice S.r.l.) di Monte San Giusto (Macerata)." },
                    { date: "Ott 2023 – Lug 2024", desc: "Coordinatrice Pedagogica e Supervisora presso Nido d'infanzia comunale 'L'isola che non c'è' (Coop. Soc. PARS Onlus) di Porto Sant'Elpidio (Fermo)." },
                    { date: "Set 2021 – Presente", desc: "Coordinatrice Pedagogica e Supervisora presso Nido d'infanzia 'Bimboland' (Corridonia)." }
                  ].map((job, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute top-1.5 left-[-21px] md:left-[-37px] w-3.5 h-3.5 rounded-full bg-[#7B8B6F] border-2 border-white shadow-sm"></div>
                      <p className="font-bold text-[#4A3F35] mb-1">{job.date}</p>
                      <p className="text-[#6B5E51] font-light leading-relaxed">{job.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 2: PNRR */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D68C70] mb-8 flex items-center gap-4">
                  <div className="h-px w-12 bg-[#D68C70]/30"></div>
                  Progetti Scolastici, PNRR e Formazione
                </h4>
                <div className="space-y-10 pl-4 md:pl-8 border-l border-[#EBE7E0] ml-2">
                  <div className="relative">
                    <div className="absolute top-1.5 left-[-21px] md:left-[-37px] w-3.5 h-3.5 rounded-full bg-[#D68C70] border-2 border-white"></div>
                    <p className="font-bold text-[#4A3F35] mb-1">2023 – 2025</p>
                    <p className="text-[#6B5E51] font-light leading-relaxed">
                      Esperta Esterna PNRR per attività di <strong>Mentoring, Orientamento e Formazione Famiglie</strong> presso diversi Istituti: I.C. Giovanni XXIII Mogliano, I.C. Tacchi Venturi San Severino Marche, I.I.S. Bonifazi Corridoni di Civitanova Marche, I.I.S. Fazzini Mercantini di Grottammare.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute top-1.5 left-[-21px] md:left-[-37px] w-3.5 h-3.5 rounded-full bg-[#EBE7E0] border-2 border-white"></div>
                    <p className="font-bold text-[#4A3F35] mb-1">2024</p>
                    <p className="text-[#6B5E51] font-light leading-relaxed">
                      Formatrice e Relatrice in eventi territoriali: Workshop \"I DSA a scuola\", Laboratori \"Pronti per le medie\", Seminari \"Aperitivi Pedagogici\" e \"Io Sono la Gioia\" (APS Cosmofamily e CAG Corridonia).
                    </p>
                  </div>
                </div>
              </div>

              {/* Category 3: Tutoraggio */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D68C70] mb-8 flex items-center gap-4">
                  <div className="h-px w-12 bg-[#D68C70]/30"></div>
                  Tutoraggio Specialistico BES/DSA
                </h4>
                <div className="space-y-10 pl-4 md:pl-8 border-l border-[#EBE7E0] ml-2">
                  {[
                    { date: "Feb 2024 – Mag 2025", desc: "Consulente Pedagogica e Tutor dell'Apprendimento presso Scuola Viva Aurora (Civitanova Marche)." },
                    { date: "Ott 2022 – Dic 2024", desc: "Tutor Pedagogico Specializzato presso Università di Camerino (Servizio Accoglienza Studenti con Disabilità e DSA)." },
                    { date: "Mar 2021 – Presente", desc: "Pedagogista e Tutor dell'Apprendimento BES e DSA presso Studio Pedagogico Privato." },
                    { date: "Apr – Lug 2022", desc: "Tutor Didattico e Consulente di Progetto presso Cefal Emilia-Romagna." }
                  ].map((job, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute top-1.5 left-[-21px] md:left-[-37px] w-3.5 h-3.5 rounded-full bg-[#4A3F35] border-2 border-white shadow-sm"></div>
                      <p className="font-bold text-[#4A3F35] mb-1">{job.date}</p>
                      <p className="text-[#6B5E51] font-light leading-relaxed">{job.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 4: Educazione Professionale */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D68C70] mb-8 flex items-center gap-4">
                  <div className="h-px w-12 bg-[#D68C70]/30"></div>
                  Educazione Professionale sul Campo
                </h4>
                <div className="space-y-10 pl-4 md:pl-8 border-l border-[#EBE7E0] ml-2">
                  {[
                    { date: "Feb – Lug 2022", desc: "Educatrice Domiciliare (Sostegno minori e famiglie in disagio) presso Paolo Ricci Servizi S.r.l." },
                    { date: "Gen 2020 – Lug 2022", desc: "Educatrice Professionale presso Nidi d'infanzia comunali: 'Il Grillo Parlante' (Civitanova Marche) e 'N.Green' (Tolentino)." },
                    { date: "Gen – Mar 2020", desc: "Educatrice per Progetto di educazione alimentare presso Associazione Culturale 'Liberalibri'." }
                  ].map((job, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute top-1.5 left-[-21px] md:left-[-37px] w-3.5 h-3.5 rounded-full bg-[#EBE7E0] border-2 border-white shadow-sm"></div>
                      <p className="font-bold text-[#4A3F35] mb-1">{job.date}</p>
                      <p className="text-[#6B5E51] font-light leading-relaxed">{job.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Related Pages Block */}
          <div className="mt-24 pt-12 border-t border-[#F3F0E9]">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A89E92] mb-8">Approfondisci</h4>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <Link to="/servizi" className="text-[#4A3F35] hover:text-[#D68C70] font-serif text-xl transition-colors flex items-center gap-2 group">
                Servizi Pedagogici <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
              </Link>
              <Link to="/chi-sono" className="text-[#4A3F35] hover:text-[#D68C70] font-serif text-xl transition-colors flex items-center gap-2 group">
                Approccio Meraki <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
              </Link>
              <Link to="/faq" className="text-[#4A3F35] hover:text-[#D68C70] font-serif text-xl transition-colors flex items-center gap-2 group">
                Risposte alle FAQ <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;