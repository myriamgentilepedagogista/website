'use client';

import React, { useState } from 'react';
import { Brain, ArrowLeft, Sparkles, Target, BookOpen, ArrowRight, ChevronRight, HelpCircle, Plus, Minus, GraduationCap, CheckCircle2, Zap } from 'lucide-react';
import Link from 'next/link';
import { useContact } from '../../../context/ContactContext';

export default function TutoraggioSpecialisticoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { openContact } = useContact();
  const siteUrl = "https://myriamgentilepedagogista.com";

  const faqData = [
    {
      q: "Qual è la differenza tra tutoraggio e ripetizioni?",
      a: "Le ripetizioni si focalizzano sul contenuto (es. imparare la storia). Il tutoraggio si focalizza sul processo: come studiare, come usare le mappe, come gestire il tempo e l'ansia. L'obiettivo è l'autonomia, non solo il voto."
    },
    {
      q: "Mio figlio ha bisogno di una diagnosi?",
      a: "Il tutoraggio pedagogico è aperto a tutti. Sebbene sia fondamentale per chi ha una diagnosi di DSA o BES, è estremamente utile per qualsiasi studente che fatichi a trovare un metodo di studio efficace o che abbia perso motivazione."
    },
    {
      q: "Collaborate con la scuola?",
      a: "Assolutamente sì. Il successo del percorso dipende spesso dalla rete tra famiglia, scuola e specialista. Mi rendo disponibile per incontri con i docenti e per la revisione del PDP (Piano Didattico Personalizzato)."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tutoraggio Specialistico DSA, BES e ADHD",
    "serviceType": "Special Educational Support",
    "description": "Percorsi individualizzati di tutoraggio dell'apprendimento per ragazzi con DSA, BES e ADHD. Focus su metodo di studio, autonomia e autostima.",
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
          <span className="text-[#4A3F35] font-medium">Tutoraggio Specialistico</span>
        </nav>

        <Link href="/servizi" className="inline-flex items-center gap-2 text-[#A89E92] hover:text-[#4A3F35] transition-colors mb-12 group text-sm">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Torna ai Servizi
        </Link>

        <div className="max-w-4xl mx-auto">
          <header className="mb-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#4A3F35]/5 rounded-full mb-8 border border-[#4A3F35]/10">
              <Brain className="w-5 h-5 text-[#4A3F35]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#4A3F35]">Apprendimento e Autonomia</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-[#4A3F35] mb-8 leading-tight">Tutoraggio Specialistico: Oltre il Voto, l'Autonomia.</h1>
            <p className="text-xl text-[#6B5E51] font-light leading-relaxed italic border-l-4 border-[#4A3F35]/30 pl-6">
              "Insegnare a studiare significa dare le ali per volare da soli nel mondo della conoscenza."
            </p>
          </header>

          <article className="prose prose-stone max-w-none text-[#6B5E51] font-light leading-relaxed space-y-12 mb-16">
            <section>
              <h2 className="text-3xl font-serif text-[#4A3F35] mb-6">Un supporto mirato per DSA, BES e ADHD</h2>
              <p>
                Il tutoraggio specialistico non è un semplice "aiuto compiti". È un intervento pedagogico volto a costruire un <strong>metodo di studio personalizzato</strong> che tenga conto delle caratteristiche neuro-cognitive di ogni studente. Per un ragazzo con Dislessia, Disortografia o ADHD, lo studio può diventare un terreno di grande frustrazione. Il mio compito è fornire le "chiavi" giuste per accedere ai contenuti scolastici con serenità.
              </p>
              <p>
                Lavoriamo sull'uso efficace degli <strong>strumenti compensativi</strong> (software, mappe concettuali, sintesi vocale), sul potenziamento delle funzioni esecutive (pianificazione, memoria di lavoro) e, soprattutto, sul senso di autoefficacia. Un ragazzo che capisce "come" imparare è un ragazzo che ritrova la fiducia in se stesso.
              </p>
            </section>
            
            <section className="bg-white p-12 rounded-[3rem] border border-[#F3F0E9] shadow-sm">
              <h3 className="text-2xl font-serif text-[#4A3F35] mb-8 flex items-center gap-4">
                <Target className="w-8 h-8 text-[#4A3F35]" /> Obiettivi del percorso
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-[#FDFBF7] rounded-2xl">
                  <h4 className="font-bold text-[#4A3F35] mb-2 flex items-center gap-2"><Zap className="w-4 h-4 text-[#4A3F35]" /> Metodo di Studio</h4>
                  <p className="text-sm">Trovare la strategia di apprendimento più adatta al proprio stile cognitivo (visivo, uditivo, etc.).</p>
                </div>
                <div className="p-6 bg-[#FDFBF7] rounded-2xl">
                  <h4 className="font-bold text-[#4A3F35] mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4 text-[#4A3F35]" /> Strumenti Digitali</h4>
                  <p className="text-sm">Imparare a usare al meglio computer, tablet e software specifici per compensare le difficoltà.</p>
                </div>
                <div className="p-6 bg-[#FDFBF7] rounded-2xl">
                  <h4 className="font-bold text-[#4A3F35] mb-2 flex items-center gap-2"><Sparkles className="w-4 h-4 text-[#4A3F35]" /> Autostima</h4>
                  <p className="text-sm">Ridurre l'ansia da prestazione e migliorare il rapporto con l'errore e con la scuola.</p>
                </div>
                <div className="p-6 bg-[#FDFBF7] rounded-2xl">
                  <h4 className="font-bold text-[#4A3F35] mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#4A3F35]" /> Organizzazione</h4>
                  <p className="text-sm">Gestione del diario, dei materiali e pianificazione settimanale del carico di studio.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-serif text-[#4A3F35] mb-6">A chi è rivolto?</h3>
              <p>
                Il servizio è rivolto a studenti della <strong>scuola primaria, secondaria di primo e secondo grado</strong>. Mi occupo specificamente di:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {[
                  "Dislessia, Disortografia, Discalculia",
                  "Difficoltà di attenzione e ADHD",
                  "Bisogni Educativi Speciali (BES)",
                  "Difficoltà emotive legate allo studio"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-base">
                    <CheckCircle2 className="w-5 h-5 text-[#7B8B6F] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </article>

          {/* CTA Right After Article */}
          <section className="bg-[#4A3F35] text-white p-12 md:p-16 rounded-[4rem] text-center mb-24 shadow-2xl">
            <h2 className="text-4xl font-serif mb-6">Costruiamo l'autonomia di tuo figlio.</h2>
            <p className="text-lg font-light mb-10 opacity-90 max-w-2xl mx-auto">
              Contattami per un primo colloquio conoscitivo e per valutare insieme il percorso di tutoraggio più adatto.
            </p>
            <button 
              onClick={openContact}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#4A3F35] rounded-full text-lg font-bold hover:bg-[#F9F6F1] transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Richiedi informazioni <ArrowRight className="w-5 h-5" />
            </button>
          </section>

          {/* FAQ Section */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-[#4A3F35]/10 flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-[#4A3F35]" />
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
                    {openFaq === idx ? <Minus className="text-[#4A3F35]" /> : <Plus className="text-[#A89E92]" />}
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
                 <GraduationCap className="w-10 h-10 text-[#4A3F35]" />
               </div>
               <div>
                 <h3 className="text-3xl font-serif text-[#4A3F35] mb-4">Esperienza e Formazione</h3>
                 <p className="text-[#6B5E51] font-light leading-relaxed mb-8">
                   Sono un tutor dell'apprendimento certificato con esperienza pluriennale nel supporto a ragazzi con difficoltà scolastiche.
                 </p>
                 <Link href="/esperienza" className="inline-flex items-center gap-2 px-8 py-3 bg-[#4A3F35] text-white rounded-full font-bold hover:bg-[#3A2F25] transition-all">
                   Scopri il mio CV <ArrowRight className="w-5 h-5" />
                 </Link>
               </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
