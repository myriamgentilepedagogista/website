
import React, { useState } from 'react';
import { ChevronDown, GraduationCap, Briefcase, Award, BookOpen, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccordionItem: React.FC<{ 
  title: string; 
  children: React.ReactNode; 
  isOpen: boolean; 
  onClick: () => void; 
  icon: React.ReactNode 
}> = ({ title, children, isOpen, onClick, icon }) => (
  <div className="border-b border-[#EBE7E0] last:border-0">
    <button 
      onClick={onClick}
      className="w-full py-8 flex items-center justify-between text-left group focus:outline-none"
    >
      <div className="flex items-center gap-6">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${isOpen ? 'bg-[#D68C70] text-white' : 'bg-[#F9F6F1] text-[#D68C70]'}`}>
          {icon}
        </div>
        <h3 className={`text-2xl font-serif transition-colors ${isOpen ? 'text-[#D68C70]' : 'text-[#4A3F35]'}`}>{title}</h3>
      </div>
      <ChevronDown className={`w-6 h-6 text-[#A89E92] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#D68C70]' : ''}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[5000px] opacity-100 pb-12' : 'max-h-0 opacity-0'}`}>
      <div className="pl-4 md:pl-18 text-[#6B5E51] font-light leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

const Credentials: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 bg-[#FDFBF7] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D68C70] font-semibold tracking-widest text-xs uppercase mb-4 block">Il percorso</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#4A3F35]">Formazione ed Esperienza</h2>
            <div className="w-16 h-1 bg-[#D68C70]/20 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="bg-white rounded-[3rem] p-4 md:p-8 border border-[#F3F0E9] shadow-sm mb-12">
            
            <AccordionItem 
              title="Formazione Accademica" 
              isOpen={openIndex === 0} 
              onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
              icon={<GraduationCap className="w-6 h-6" />}
            >
              <div className="space-y-8 pl-4">
                <div className="border-l-2 border-[#D68C70]/20 pl-6">
                  <h4 className="font-semibold text-[#4A3F35]">Laurea Magistrale in Scienze Pedagogiche (LM-85)</h4>
                  <p className="text-sm text-[#D68C70]">110/110 Lode | Università degli Studi di Macerata</p>
                  <p className="text-sm mt-1">Curriculum: Pedagogia della disabilità e marginalità. Tesi in Filosofia dell'educazione.</p>
                </div>
                <div className="border-l-2 border-[#D68C70]/20 pl-6">
                  <h4 className="font-semibold text-[#4A3F35]">Laurea in Scienze dell’Educazione e della formazione (L-19)</h4>
                  <p className="text-sm text-[#D68C70]">106/110 | Università degli Studi di Macerata</p>
                  <p className="text-sm mt-1">Curriculum: Educatore di nido e comunità infantili.</p>
                </div>
                <div className="border-l-2 border-[#D68C70]/20 pl-6">
                  <h4 className="font-semibold text-[#4A3F35]">Diploma di maturità socio psico-pedagogica</h4>
                  <p className="text-sm text-[#D68C70]">80/100 | Liceo "A.G. Roncalli", Manfredonia (FG)</p>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem 
              title="Formazione Specialistica & Corsi" 
              isOpen={openIndex === 1} 
              onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
              icon={<BookOpen className="w-6 h-6" />}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pl-4">
                {[
                  "Saper stare nei conflitti sul lavoro (Novara - CPP)",
                  "Study Empowerment for Inclusion (Unimc)",
                  "Trattamento DSA (Centro Studi Erickson)",
                  "Parent Training: percorsi di sostegno (Erickson)",
                  "Consulenza Pedagogica Genitoriale (S.I.P.P.)",
                  "Facilitatrice Mindfulness (Mindfulness Educators)",
                  "Esperta in Orientamento Scolastico (ASNOR)",
                  "Women Empowerment (ASNOR)",
                  "Tutor per alunni con difficoltà e DSA (S.I.P.P.)",
                  "Coordinamento Psicopedagogico 0-6 (S.I.P.P.)",
                  "Volontari nei centri antiviolenza (SOS Donna)",
                  "La relazione con le famiglie (Ambito n.15)",
                  "Buone pratiche sociali contro la discriminazione (Unimc)"
                ].map((course, idx) => (
                  <div key={idx} className="flex gap-3 text-sm border-b border-[#F3F0E9] pb-2">
                    <Award className="w-4 h-4 text-[#D68C70] shrink-0 mt-0.5" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </AccordionItem>

            <AccordionItem 
              title="Esperienze Professionali" 
              isOpen={openIndex === 2} 
              onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
              icon={<Briefcase className="w-6 h-6" />}
            >
              <div className="space-y-12 pl-4">
                {/* Categoria 1 */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D68C70] mb-6 flex items-center gap-2">
                    <div className="h-px w-8 bg-[#D68C70]/30"></div>
                    Coordinamento Pedagogico e Supervisione
                  </h4>
                  <div className="space-y-6 pl-4 border-l border-[#EBE7E0]">
                    <div className="relative pl-6">
                      <div className="absolute top-1.5 left-[-5.5px] w-2.5 h-2.5 rounded-full bg-[#7B8B6F]"></div>
                      <p className="font-bold text-[#4A3F35]">Ott 2025 – Presente</p>
                      <p className="text-sm">Coordinatrice Pedagogica e Supervisora presso Nido d'infanzia comunale "Il Cucciolo" di Loreto (Ancona).</p>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute top-1.5 left-[-5.5px] w-2.5 h-2.5 rounded-full bg-[#EBE7E0]"></div>
                      <p className="font-bold text-[#4A3F35]">Mar 2025 – Presente</p>
                      <p className="text-sm">Coordinatrice Pedagogica e Supervisora presso Nido d'infanzia comunale "Raggio di Sole" (Lacerenza Multiservice S.r.l.) di Monte San Giusto (Macerata).</p>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute top-1.5 left-[-5.5px] w-2.5 h-2.5 rounded-full bg-[#EBE7E0]"></div>
                      <p className="font-bold text-[#4A3F35]">Ott 2023 – Lug 2024</p>
                      <p className="text-sm">Coordinatrice Pedagogica e Supervisora presso Nido d'infanzia comunale "L'isola che non c'è" (Coop. Soc. PARS Onlus) di Porto Sant'Elpidio (Fermo).</p>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute top-1.5 left-[-5.5px] w-2.5 h-2.5 rounded-full bg-[#EBE7E0]"></div>
                      <p className="font-bold text-[#4A3F35]">Set 2021 – Presente</p>
                      <p className="text-sm">Coordinatrice Pedagogica e Supervisora presso Nido d'infanzia "Bimboland" (Corridonia).</p>
                    </div>
                  </div>
                </div>

                {/* Categoria 2 */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D68C70] mb-6 flex items-center gap-2">
                    <div className="h-px w-8 bg-[#D68C70]/30"></div>
                    Progetti PNRR & Formazione
                  </h4>
                  <div className="space-y-6 pl-4 border-l border-[#EBE7E0]">
                    <div className="relative pl-6">
                      <div className="absolute top-1.5 left-[-5.5px] w-2.5 h-2.5 rounded-full bg-[#D68C70]"></div>
                      <p className="font-bold text-[#4A3F35]">2023 – 2025</p>
                      <p className="text-sm">Esperta Esterna PNRR per il Mentoring, l'Orientamento e la Formazione Famiglie presso vari Istituti (I.C. Giovanni XXIII Mogliano, I.C. Tacchi Venturi San Severino, I.I.S. Bonifazi Corridoni di Civitanova Marche, I.I.S. Fazzini Mercantini di Grottammare).</p>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute top-1.5 left-[-5.5px] w-2.5 h-2.5 rounded-full bg-[#EBE7E0]"></div>
                      <p className="font-bold text-[#4A3F35]">2024</p>
                      <p className="text-sm">Formatrice e Relatrice: Workshop "I DSA a scuola", Laboratori "Pronti per le medie", Seminari "Aperitivi Pedagogici" e "Io Sono la Gioia" (APS Cosmofamily e CAG Corridonia).</p>
                    </div>
                  </div>
                </div>

                {/* Categoria 3 */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D68C70] mb-6 flex items-center gap-2">
                    <div className="h-px w-8 bg-[#D68C70]/30"></div>
                    Tutoraggio Specialistico BES/DSA
                  </h4>
                  <div className="space-y-6 pl-4 border-l border-[#EBE7E0]">
                    <div className="relative pl-6">
                      <div className="absolute top-1.5 left-[-5.5px] w-2.5 h-2.5 rounded-full bg-[#4A3F35]"></div>
                      <p className="font-bold text-[#4A3F35]">Feb 2024 – Mag 2025</p>
                      <p className="text-sm">Consulente Pedagogica e Tutor dell'Apprendimento presso Scuola Viva Aurora (Civitanova Marche).</p>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute top-1.5 left-[-5.5px] w-2.5 h-2.5 rounded-full bg-[#EBE7E0]"></div>
                      <p className="font-bold text-[#4A3F35]">Ott 2022 – Dic 2024</p>
                      <p className="text-sm">Tutor Pedagogico Specializzato presso Università di Camerino (Servizio Accoglienza Studenti con Disabilità e DSA).</p>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute top-1.5 left-[-5.5px] w-2.5 h-2.5 rounded-full bg-[#EBE7E0]"></div>
                      <p className="font-bold text-[#4A3F35]">Mar 2021 – Presente</p>
                      <p className="text-sm">Pedagogista e Tutor dell'Apprendimento BES e DSA presso Studio Pedagogico Privato.</p>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute top-1.5 left-[-5.5px] w-2.5 h-2.5 rounded-full bg-[#EBE7E0]"></div>
                      <p className="font-bold text-[#4A3F35]">Apr – Lug 2022</p>
                      <p className="text-sm">Tutor Didattico e Consulente di Progetto presso Cefal Emilia-Romagna.</p>
                    </div>
                  </div>
                </div>

                {/* Categoria 4 */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D68C70] mb-6 flex items-center gap-2">
                    <div className="h-px w-8 bg-[#D68C70]/30"></div>
                    Educazione Professionale
                  </h4>
                  <div className="space-y-6 pl-4 border-l border-[#EBE7E0]">
                    <div className="relative pl-6">
                      <div className="absolute top-1.5 left-[-5.5px] w-2.5 h-2.5 rounded-full bg-[#EBE7E0]"></div>
                      <p className="font-bold text-[#4A3F35]">Feb – Lug 2022</p>
                      <p className="text-sm">Educatrice Domiciliare (Sostegno minori e famiglie in disagio) presso Paolo Ricci Servizi S.r.l.</p>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute top-1.5 left-[-5.5px] w-2.5 h-2.5 rounded-full bg-[#EBE7E0]"></div>
                      <p className="font-bold text-[#4A3F35]">Gen 2020 – Lug 2022</p>
                      <p className="text-sm">Educatrice Professionale presso Nidi d'infanzia comunali: "Il Grillo Parlante" (Civitanova Marche) e "N.Green" (Tolentino).</p>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute top-1.5 left-[-5.5px] w-2.5 h-2.5 rounded-full bg-[#EBE7E0]"></div>
                      <p className="font-bold text-[#4A3F35]">Gen – Mar 2020</p>
                      <p className="text-sm">Educatrice per Progetto di educazione alimentare presso Associazione Culturale "Liberalibri".</p>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionItem>
          </div>

          <div className="text-center">
             <Link to="/esperienza" className="inline-flex items-center gap-2 bg-white px-10 py-4 rounded-full border border-[#EBE7E0] text-[#D68C70] font-medium text-sm group hover:bg-[#F9F6F1] transition-all shadow-sm hover:underline underline-offset-8">
              Esplora il curriculum e l'esperienza professionale completa di Myriam Gentile <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
