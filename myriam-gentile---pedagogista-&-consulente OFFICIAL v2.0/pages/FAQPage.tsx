
import React, { useState } from 'react';
import { ArrowLeft, Plus, Minus, HelpCircle, MessageCircle, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { getMeta } from '../seo/metadata';

interface FAQPageProps {
  onOpenContact: () => void;
}

const faqData = [
  {
    question: "Chi è il pedagogista e di cosa si occupa?",
    answer: "Il pedagogista è un professionista di livello apicale della relazione educativa (L. 55/2024). Si occupa di accompagnare bambini, ragazzi, famiglie ed educatori nei percorsi di crescita, apprendimento e sviluppo, integrando conoscenze pedagogiche e neuroscientifiche."
  },
  {
    question: "Qual è la differenza tra pedagogista e psicologo?",
    answer: "Il pedagogista lavora sui processi educativi, sulle relazioni e sulle potenzialità della persona nei suoi contesti quotidiani (famiglia, scuola). Lo psicologo si occupa prevalentemente di aspetti clinici, diagnostici e terapeutici. Sono figure distinte e spesso complementari."
  },
  {
    question: "Quando è utile chiedere una consulenza genitoriale?",
    answer: "Quando si vivono fatiche educative quotidiane: difficoltà nella gestione dei conflitti, dubbi sulle tappe evolutive (sonno, pannolino, autonomie), fatiche nella comunicazione o momenti di cambiamento familiare. La consulenza offre strumenti per leggere i bisogni del bambino con consapevolezza."
  },
  {
    question: "Cosa si intende per tutoraggio specialistico BES e DSA?",
    answer: "È un supporto pedagogico mirato a studenti con Disturbi Specifici dell'Apprendimento o Bisogni Educativi Speciali. L'obiettivo non è fare 'compiti', ma costruire un metodo di studio personalizzato, imparare a usare gli strumenti compensativi e rafforzare l'autostima."
  },
  {
    question: "Offri consulenze pedagogiche online?",
    answer: "Sì, offro consulenze online tramite piattaforme di videochiamata. Questa modalità è molto efficace per la consulenza genitoriale e permette di conciliare facilmente il percorso con i ritmi lavorativi e familiari."
  },
  {
    question: "Dove ricevi a Civitanova Marche?",
    answer: "Ricevo in presenza presso lo Studio Kairos, situato in Via San Callisto da Caravario 5-G a Civitanova Marche (MC). Lo studio è un ambiente accogliente pensato per la relazione educativa."
  },
  {
    question: "Quanto dura mediamente un percorso?",
    answer: "Non esiste una durata standard. A volte bastano 3-5 incontri per sbloccare una situazione di stallo educativo, mentre per il tutoraggio specialistico scolastico si possono concordare percorsi di monitoraggio più lunghi, sempre finalizzati all'autonomia."
  },
  {
    question: "Il pedagogista può lavorare con le scuole?",
    answer: "Certamente. Mi occupo di coordinamento pedagogico 0-6 anni, supervisione di team educativi e progetti scolastici (PNRR) focalizzati sul mentoring, l'orientamento e il contrasto alla dispersione scolastica."
  },
  {
    question: "Cosa significa approccio basato sulle neuroscienze?",
    answer: "Significa che il mio supporto tiene conto delle scoperte scientifiche su come funziona il cervello umano, lo sviluppo emotivo e l'apprendimento, traducendole in indicazioni educative pratiche e rispettose della fisiologia dello sviluppo."
  },
  {
    question: "Come posso prenotare un primo colloquio?",
    answer: "Puoi contattarmi telefonicamente, via email o compilando il modulo di contatto presente sul sito. Durante il primo colloquio analizzeremo la tua domanda e definiremo insieme gli obiettivi del percorso."
  }
];

const FAQPage: React.FC<FAQPageProps> = ({ onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const location = useLocation();
  const meta = getMeta(location.pathname);

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <SEO 
        title={meta.title}
        description={meta.description}
        path={location.pathname}
        ogType={meta.ogType}
      />
      
      {/* JSON-LD Script for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="container mx-auto px-6 max-w-4xl">
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A89E92] mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#D68C70] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#4A3F35] font-medium">FAQ</span>
        </nav>

        <Link to="/" className="inline-flex items-center gap-2 text-[#4A3F35] hover:text-[#D68C70] transition-colors mb-12 group text-sm">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Torna alla Home
        </Link>

        <div className="mb-20 text-center">
          <HelpCircle className="w-16 h-16 text-[#D68C70]/20 mx-auto mb-8" />
          <h1 className="text-5xl md:text-8xl font-serif text-[#4A3F35] mb-6">Domande Frequenti (FAQ)</h1>
          <p className="text-xl text-[#6B5E51] font-light leading-relaxed">
            Risposte chiare per aiutarti a comprendere meglio la figura del pedagogista e le modalità di lavoro nel mio studio.
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`border rounded-[2.5rem] transition-all duration-300 ${
                openIndex === index ? 'border-[#D68C70]/30 bg-white shadow-xl' : 'border-[#EBE7E0] bg-white hover:border-[#D68C70]/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-10 py-8 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-xl font-serif transition-colors ${openIndex === index ? 'text-[#D68C70]' : 'text-[#4A3F35]'}`}>
                  {item.question}
                </span>
                <div className={`shrink-0 ml-4 p-2 rounded-full transition-all ${openIndex === index ? 'bg-[#D68C70] text-white rotate-180' : 'bg-[#F9F6F1] text-[#A89E92]'}`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-10 pb-10 text-[#6B5E51] font-light leading-relaxed text-lg">
                  <div className="w-8 h-px bg-[#D68C70]/20 mb-4"></div>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 p-12 bg-[#7B8B6F] rounded-[3.5rem] text-white flex flex-col items-center text-center">
          <MessageCircle className="w-12 h-12 mb-6" />
          <h2 className="text-3xl font-serif mb-4">Hai altre curiosità o domande specifiche?</h2>
          <p className="text-white/80 font-light mb-10 max-w-lg leading-relaxed">
            Ogni situazione educativa è unica. Se non hai trovato qui la risposta che cercavi, sarò felice di ascoltarti.
          </p>
          <button 
            onClick={onOpenContact}
            className="bg-white text-[#7B8B6F] px-10 py-4 rounded-full font-medium hover:bg-[#F9F6F1] transition-all shadow-xl"
          >
            Contattami direttamente
          </button>
        </div>

        {/* Related Pages Block */}
        <div className="mt-24 pt-12 border-t border-[#F3F0E9]">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A89E92] mb-8">Approfondisci</h4>
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <Link to="/servizi" className="text-[#4A3F35] hover:text-[#D68C70] font-serif text-xl transition-colors flex items-center gap-2 group">
              Servizi Pedagogici <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
            </Link>
            <Link to="/blog" className="text-[#4A3F35] hover:text-[#D68C70] font-serif text-xl transition-colors flex items-center gap-2 group">
              Spazio Pedagogico <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
            </Link>
            <Link to="/chi-sono" className="text-[#4A3F35] hover:text-[#D68C70] font-serif text-xl transition-colors flex items-center gap-2 group">
              Chi è Myriam Gentile <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
