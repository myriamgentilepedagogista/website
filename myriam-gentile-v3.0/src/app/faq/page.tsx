'use client';

import React, { useState } from 'react';
import { HelpCircle, Plus, Minus, ChevronRight, ArrowRight, MessageCircle, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { useContact } from '../../context/ContactContext';

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { openContact } = useContact();
  const siteUrl = "https://myriamgentilepedagogista.com";

  const faqData = [
    {
      category: "Consulenza Genitoriale",
      questions: [
        {
          q: "Come si svolge il primo incontro?",
          a: "Il primo incontro è un momento di ascolto e analisi della domanda. Cercheremo di inquadrare la fatica educativa che state vivendo e definiremo insieme gli obiettivi del percorso. Non è necessario che il bambino sia presente."
        },
        {
          q: "Le consulenze online sono efficaci quanto quelle in presenza?",
          a: "Assolutamente sì. La consulenza genitoriale lavora sulla parola e sulla riflessione dell'adulto. Molti genitori preferiscono la modalità online per comodità logistica e si sentono più a loro agio nel proprio ambiente domestico."
        },
        {
          q: "Quanto dura un percorso di supporto alla genitorialità?",
          a: "Dipende dalla complessità della situazione. Spesso bastano 3 o 4 incontri mirati per sbloccare una situazione di stallo e fornire strumenti pratici ai genitori."
        }
      ]
    },
    {
      category: "Tutoraggio Specialistico",
      questions: [
        {
          q: "Mio figlio ha una diagnosi di DSA, come puoi aiutarlo?",
          a: "Il tutoraggio specialistico aiuta il ragazzo a comprendere il proprio stile di apprendimento e a utilizzare in modo efficace gli strumenti compensativi (mappe, software, sintesi vocale). Lavoriamo sull'autonomia e sul recupero dell'autostima scolastica."
        },
        {
          q: "Il tutoraggio sostituisce le ripetizioni?",
          a: "No, sono due cose diverse. Le ripetizioni servono a recuperare una materia specifica. Il tutoraggio serve a imparare 'come si studia', fornendo un metodo che resterà valido per tutte le materie e per il futuro percorso di studi."
        }
      ]
    },
    {
      category: "Aspetti Pratici",
      questions: [
        {
          q: "Dove si trova lo studio?",
          a: "Ricevo a Civitanova Marche presso lo Studio Kairos, in Via San Callisto da Caravario 5-G. Lo studio è facilmente raggiungibile e dispone di parcheggio."
        },
        {
          q: "Quali sono le modalità di pagamento?",
          a: "È possibile pagare tramite bonifico bancario o contanti. Essendo una prestazione professionale sanitaria/educativa, la fattura è detraibile secondo le normative vigenti."
        }
      ]
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(cat => cat.questions.map(q => ({
      "@type": "Question",
      "name": q.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.a
      }
    })))
  };

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-6">
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A89E92] mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#D68C70] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#4A3F35] font-medium">FAQ</span>
        </nav>

        <header className="max-w-4xl mb-24">
          <span className="text-[#D68C70] font-semibold tracking-[0.2em] text-[10px] uppercase mb-4 block">Domande Frequenti</span>
          <h1 className="text-6xl md:text-8xl font-serif text-[#4A3F35] mb-8 leading-[0.9]">Chiarezza e Trasparenza</h1>
          <p className="text-xl text-[#6B5E51] font-light max-w-2xl leading-relaxed">
            Ho raccolto qui le risposte alle domande che più frequentemente mi vengono poste dai genitori e dai professionisti. Se non trovi quello che cerchi, non esitare a contattarmi.
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-16">
          {faqData.map((category, catIdx) => (
            <section key={catIdx}>
              <h2 className="text-2xl font-serif text-[#4A3F35] mb-8 pb-4 border-b border-[#F3F0E9]">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((item, qIdx) => {
                  const globalIdx = catIdx * 100 + qIdx;
                  return (
                    <div key={qIdx} className="bg-white border border-[#EBE7E0] rounded-[2rem] overflow-hidden">
                      <button 
                        onClick={() => setOpenFaq(openFaq === globalIdx ? null : globalIdx)}
                        className="w-full px-8 py-6 flex items-center justify-between text-left"
                      >
                        <span className="font-serif text-lg text-[#4A3F35]">{item.q}</span>
                        {openFaq === globalIdx ? <Minus className="text-[#D68C70]" /> : <Plus className="text-[#A89E92]" />}
                      </button>
                      {openFaq === globalIdx && (
                        <div className="px-8 pb-8 text-[#6B5E51] font-light leading-relaxed animate-fade-in">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Contact CTA */}
        <section className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#4A3F35] text-white p-12 rounded-[3.5rem] shadow-xl">
            <MessageCircle className="w-10 h-10 text-[#D68C70] mb-6" />
            <h3 className="text-3xl font-serif mb-4">Hai altre domande?</h3>
            <p className="text-lg font-light opacity-90 mb-8">
              Ogni situazione è unica. Scrivimi per un breve colloquio telefonico gratuito dove potremo valutare insieme la tua richiesta.
            </p>
            <button 
              onClick={openContact}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D68C70] text-white rounded-full font-bold hover:bg-[#96472D] transition-all"
            >
              Contattami ora <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-white border border-[#F3F0E9] p-12 rounded-[3.5rem] shadow-sm flex flex-col justify-center">
            <h3 className="text-2xl font-serif text-[#4A3F35] mb-8">Contatti Rapidi</h3>
            <div className="space-y-6">
              <a href="tel:+393452291697" className="flex items-center gap-4 text-[#6B5E51] hover:text-[#D68C70] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-[#FDFBF7] flex items-center justify-center border border-[#F3F0E9] group-hover:border-[#D68C70]/20">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg font-light">+39 345 2291697</span>
              </a>
              <a href="mailto:gentilemyriam@gmail.com" className="flex items-center gap-4 text-[#6B5E51] hover:text-[#D68C70] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-[#FDFBF7] flex items-center justify-center border border-[#F3F0E9] group-hover:border-[#D68C70]/20">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-light">gentilemyriam@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
