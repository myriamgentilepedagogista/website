
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  onOpenContact: () => void;
}

const faqData: FAQItem[] = [
  {
    question: "Chi è il pedagogista e di cosa si occupa?",
    answer: "Il pedagogista è un professionista della relazione educativa. Si occupa di accompagnare bambini, ragazzi, famiglie ed educatori nei percorsi di crescita, apprendimento e sviluppo, offrendo strumenti concreti per leggere e affrontare le difficoltà educative."
  },
  {
    question: "Qual è la differenza tra pedagogista e psicologo?",
    answer: "Il pedagogista lavora sui processi educativi, sulla relazioni e sui contesti di vita quotidiana (famiglia, scuola, servizi educativi). Lo psicologo si occupa principalmente di aspetti clinici e psicologici: sono figure diverse, spesso complementari."
  },
  {
    question: "Quando è utile chiedere una consulenza pedagogica?",
    answer: "Quando senti il bisogno di fare chiarezza su una situazione educativa: difficoltà a casa o a scuola, conflitti, comunicazione, autonomia, gestione dei comportamenti o momenti di cambiamento nella crescita."
  },
  {
    question: "Offri consulenze a Civitanova Marche e online?",
    answer: "Sì. Ricevo su appuntamento a Civitanova Marche presso lo Studio Kairos (Via San Callisto da Caravario 5-G) e offro anche consulenze online, per chi preferisce un supporto a distanza."
  },
  {
    question: "Il pedagogista può supportare difficoltà scolastiche, DSA o ADHD?",
    answer: "Sì. Offro tutoraggio pedagogico e potenziamento scolastico, aiutando studenti con DSA, ADHD o altre difficoltà di apprendimento a costruire un metodo di studio efficace e strategie personalizzate."
  },
  {
    question: "Dove ricevi a Civitanova Marche?",
    answer: "Ricevo su appuntamento presso lo Studio Kairos, in Via San Callisto da Caravario 5-G, Civitanova Marche. È possibile concordare anche percorsi online tramite i contatti in calce."
  }
];

const FAQ: React.FC<FAQProps> = ({ onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <section id="faq" className="py-24 bg-white scroll-mt-24">
      {/* Native LD+JSON hoisting via React 19 */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D68C70] font-semibold tracking-widest text-xs uppercase mb-4 block">Chiarezza</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#4A3F35]">FAQ — Domande frequenti</h2>
            <p className="text-[#6B5E51] mt-4 font-light">
              Alcune risposte alle domande più comuni sulla professione pedagogica e sui percorsi che possiamo intraprendere insieme.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index}
                className={`border rounded-3xl transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-[#D68C70]/30 bg-[#FDFBF7] shadow-sm' 
                    : 'border-[#EBE7E0] bg-white hover:border-[#D68C70]/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`text-lg md:text-xl font-serif transition-colors ${
                    openIndex === index ? 'text-[#D68C70]' : 'text-[#4A3F35]'
                  }`}>
                    {item.question}
                  </span>
                  <div className={`shrink-0 ml-4 p-1 rounded-full transition-all ${
                    openIndex === index ? 'bg-[#D68C70] text-white rotate-180' : 'bg-[#F9F6F1] text-[#A89E92]'
                  }`}>
                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8 text-[#6B5E51] font-light leading-relaxed">
                    <div className="w-8 h-px bg-[#D68C70]/20 mb-4"></div>
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-6">
            <Link 
              to="/faq" 
              className="text-[#D68C70] font-medium text-sm group hover:underline underline-offset-8 flex items-center gap-2 transition-all"
            >
              Consulta tutte le domande frequenti (FAQ) sulla pedagogia <ArrowRight className="w-4 h-4" />
            </Link>
            
            <div className="text-center">
              <p className="text-sm text-[#A89E92] italic mb-4">Hai altre domande o curiosità?</p>
              <button 
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-[#4A3F35] font-medium border-b border-[#D68C70] pb-1 hover:text-[#D68C70] transition-colors"
              >
                Scrivimi direttamente <HelpCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
