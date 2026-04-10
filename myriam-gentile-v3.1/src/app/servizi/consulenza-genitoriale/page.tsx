'use client';

import React, { useState } from 'react';
import { Users2, ArrowLeft, Heart, Sparkles, Brain, ArrowRight, ChevronRight, HelpCircle, Plus, Minus, GraduationCap, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useContact } from '../../../context/ContactContext';

export default function ConsulenzaGenitorialePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { openContact } = useContact();
  const siteUrl = "https://myriamgentilepedagogista.com";

  const faqData = [
    {
      q: "Quanti incontri sono necessari?",
      a: "Non esiste un numero fisso, ma solitamente un percorso di consulenza genitoriale si articola in 3-5 incontri. L'obiettivo è fornire strumenti pratici fin da subito per sbloccare le situazioni di stallo."
    },
    {
      q: "Le consulenze si possono fare online?",
      a: "Sì. Le consulenze genitoriali sono molto efficaci anche online via videochiamata, offrendo flessibilità oraria e comodità per i genitori che hanno difficoltà a spostarsi."
    },
    {
      q: "Deve venire anche mio figlio?",
      a: "Nella consulenza genitoriale il lavoro è rivolto agli adulti. In alcuni casi specifici può essere utile un'osservazione del bambino, ma il focus rimane il potenziamento delle competenze educative dei genitori."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Consulenza Genitoriale Specialistica",
    "serviceType": "Parental Counseling",
    "description": "Supporto pedagogico basato sulle neuroscienze per genitori. Percorsi per affrontare sfide educative, migliorare la comunicazione e comprendere lo sviluppo infantile.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Myriam Gentile - Pedagogista",
      "telePhone": "+39 345 2291697",
      "url": siteUrl,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via San Callisto da Caravario 5-G, Studio Kairos",
        "addressLocality": "Civitanova Marche",
        "addressRegion": "MC",
        "postalCode": "62012",
        "addressCountry": "IT"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="container mx-auto px-6">
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A89E92] mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#B15E41] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/servizi" className="hover:text-[#B15E41] transition-colors">Servizi</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#4A3F35] font-medium">Consulenza Genitoriale</span>
        </nav>

        <Link href="/servizi" className="inline-flex items-center gap-2 text-[#A89E92] hover:text-[#B15E41] transition-colors mb-12 group text-sm">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Torna ai Servizi
        </Link>

        <div className="max-w-4xl mx-auto">
          <header className="mb-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#B15E41]/5 rounded-full mb-8 border border-[#B15E41]/10">
              <Users2 className="w-5 h-5 text-[#B15E41]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#B15E41]">Supporto alla Genitorialità</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-[#4A3F35] mb-8 leading-tight">Consulenza Genitoriale: Comprendere per Educare.</h1>
            <p className="text-xl text-[#6B5E51] font-light leading-relaxed italic border-l-4 border-[#B15E41]/30 pl-6">
              "Non esistono genitori perfetti, ma genitori consapevoli che scelgono di mettersi in gioco."
            </p>
          </header>

          <article className="prose prose-stone max-w-none text-[#6B5E51] font-light leading-relaxed space-y-12 mb-16">
            <section>
              <h2 className="text-3xl font-serif text-[#4A3F35] mb-6">Perché richiedere una consulenza pedagogica?</h2>
              <p>
                La genitorialità è un viaggio meraviglioso ma complesso, spesso costellato di dubbi e fatiche. La consulenza pedagogica non è una terapia, ma uno <strong>spazio di riflessione professionale</strong> dove i genitori possono fermarsi a guardare con occhi nuovi i comportamenti dei propri figli. 
              </p>
              <p>
                Attraverso la lente delle <strong>neuroscienze</strong>, aiuto le famiglie a comprendere cosa accade nel cervello di un bambino durante un "capriccio", perché il sonno è così frammentato o come gestire le sfide legate alle autonomie. Sapere "perché" accade qualcosa è il primo passo per rispondere in modo efficace e rispettoso.
              </p>
            </section>
            
            <section className="bg-white p-12 rounded-[3rem] border border-[#F3F0E9] shadow-sm">
              <h3 className="text-2xl font-serif text-[#4A3F35] mb-8 flex items-center gap-4">
                <Sparkles className="w-8 h-8 text-[#B15E41]" /> Ambiti di intervento comuni
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-[#FDFBF7] rounded-2xl">
                  <h4 className="font-bold text-[#4A3F35] mb-2 flex items-center gap-2"><Brain className="w-4 h-4 text-[#B15E41]" /> Sviluppo e Neuroscienze</h4>
                  <p className="text-sm">Comprendere le tappe evolutive per calibrare le aspettative e le risposte educative.</p>
                </div>
                <div className="p-6 bg-[#FDFBF7] rounded-2xl">
                  <h4 className="font-bold text-[#4A3F35] mb-2 flex items-center gap-2"><Heart className="w-4 h-4 text-[#B15E41]" /> Gestione Emotiva</h4>
                  <p className="text-sm">Strumenti per accompagnare le forti emozioni (rabbia, paura, frustrazione) senza reprimerle.</p>
                </div>
                <div className="p-6 bg-[#FDFBF7] rounded-2xl">
                  <h4 className="font-bold text-[#4A3F35] mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#B15E41]" /> Routine e Autonomie</h4>
                  <p className="text-sm">Supporto nella gestione del sonno, dello svezzamento, dello spannolinamento e delle regole.</p>
                </div>
                <div className="p-6 bg-[#FDFBF7] rounded-2xl">
                  <h4 className="font-bold text-[#4A3F35] mb-2 flex items-center gap-2"><Users2 className="w-4 h-4 text-[#B15E41]" /> Comunicazione</h4>
                  <p className="text-sm">Migliorare il dialogo in famiglia e la coerenza educativa tra i partner.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-serif text-[#4A3F35] mb-6">Il mio metodo: l'approccio Meraki</h3>
              <p>
                Il mio intervento si fonda sull'<strong>empowerment</strong>: non do ricette magiche, ma aiuto i genitori a riscoprire le proprie risorse. Ogni famiglia è unica e ogni bambino ha i suoi tempi. Lavoriamo insieme per costruire strategie su misura che rispettino la fisiologia dello sviluppo e promuovano un clima di fiducia e cooperazione.
              </p>
            </section>
          </article>

          {/* CTA Right After Article */}
          <section className="bg-[#B15E41] text-white p-12 md:p-16 rounded-[4rem] text-center mb-24 shadow-2xl">
            <h2 className="text-4xl font-serif mb-6">Iniziamo un percorso insieme?</h2>
            <p className="text-lg font-light mb-10 opacity-90 max-w-2xl mx-auto">
              Le consulenze si svolgono presso lo Studio Kairos a Civitanova Marche oppure comodamente online via videochiamata.
            </p>
            <button 
              onClick={openContact}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#B15E41] rounded-full text-lg font-bold hover:bg-[#F9F6F1] transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Prenota una consulenza <ArrowRight className="w-5 h-5" />
            </button>
          </section>

          {/* FAQ Section */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-[#B15E41]/10 flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-[#B15E41]" />
              </div>
              <h2 className="text-3xl font-serif text-[#4A3F35]">Domande Frequenti</h2>
            </div>
            <div className="space-y-4">
              {faqData.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#EBE7E0] rounded-[2rem] overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                  >
                    <span className="font-serif text-lg text-[#4A3F35]">{item.q}</span>
                    {openFaq === idx ? <Minus className="text-[#B15E41]" /> : <Plus className="text-[#A89E92]" />}
                  </button>
                  {openFaq === idx && (
                    <div className="px-8 pb-8 text-[#6B5E51] font-light leading-relaxed animate-fade-in">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CV Interlinking */}
          <section className="mb-24">
            <div className="bg-[#FDFBF7] p-12 rounded-[4rem] border border-[#EBE7E0] flex flex-col md:flex-row items-center gap-12">
               <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shrink-0 shadow-lg">
                 <GraduationCap className="w-10 h-10 text-[#B15E41]" />
               </div>
               <div>
                 <h3 className="text-3xl font-serif text-[#4A3F35] mb-4">Formazione e CV</h3>
                 <p className="text-[#6B5E51] font-light leading-relaxed mb-8">
                   Scopri il mio percorso accademico e le mie specializzazioni in neuroscienze e pedagogia clinica.
                 </p>
                 <Link href="/esperienza" className="inline-flex items-center gap-2 px-8 py-3 bg-[#B15E41] text-white rounded-full font-bold hover:bg-[#96472D] transition-all">
                   Vedi il mio percorso <ArrowRight className="w-5 h-5" />
                 </Link>
               </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
