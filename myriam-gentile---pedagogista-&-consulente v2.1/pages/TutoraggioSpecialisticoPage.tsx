
import React, { useState } from 'react';
import { Brain, ArrowLeft, Target, Zap, ArrowRight, Sparkles, ChevronRight, HelpCircle, Plus, Minus, Info, ClipboardList, PenTool, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

interface PageProps {
  onOpenContact: () => void;
}

const TutoraggioSpecialisticoPage: React.FC<PageProps> = ({ onOpenContact }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const siteUrl = "https://www.myriamgentilepedagogista.com";

  const faqData = [
    {
      q: "Che differenza c'è dalle classiche ripetizioni?",
      a: "Le ripetizioni puntano al contenuto (voto). Il tutoraggio punta al metodo (autonomia). Insegniamo al ragazzo a usare strumenti compensativi e a gestire il carico cognitivo, valorizzando il suo stile di apprendimento unico."
    },
    {
      q: "Lavori anche con ragazzi che non hanno una diagnosi?",
      a: "Certamente. Spesso un supporto al metodo di studio è utile per chiunque viva una fatica scolastica o desideri ottimizzare i tempi di apprendimento, migliorando l'organizzazione e la pianificazione."
    },
    {
      q: "Supporti anche l'uso degli strumenti digitali?",
      a: "Sì. Parte del tutoraggio consiste nell'affiancare il ragazzo nell'uso consapevole di software compensativi (sintesi vocale, mappe digitali) previsti dal Piano Didattico Personalizzato (PDP)."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tutoraggio Specialistico DSA, BES e ADHD",
    "serviceType": "Academic Tutoring",
    "description": "Supporto all'apprendimento e metodo di studio personalizzato per ragazzi con DSA, BES e ADHD. Valorizzazione del potenziale e autonomia scolastica.",
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
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.3050631,
        "longitude": 13.7245397
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Civitanova Marche" },
      { "@type": "City", "name": "Macerata" },
      { "@type": "City", "name": "Fermo" },
      { "@type": "City", "name": "Ancona" }
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "name": "Tutoraggio Online e In Presenza",
      "serviceUrl": `${siteUrl}/servizi/tutoraggio-specialistico`
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <SEO 
        title="Tutoraggio Specialistico DSA, BES e ADHD | Myriam Gentile"
        description="Supporto all'apprendimento e metodo di studio per ragazzi con DSA, BES e ADHD. Rafforza l'autonomia scolastica."
        path="/servizi/tutoraggio-specialistico"
      />
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      
      <div className="container mx-auto px-6">
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A89E92] mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#B15E41] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/servizi" className="hover:text-[#B15E41] transition-colors">Servizi</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#4A3F35] font-medium">Tutoraggio Specialistico</span>
        </nav>

        <Link to="/servizi" className="inline-flex items-center gap-2 text-[#A89E92] hover:text-[#4A3F35] transition-colors mb-12 group text-sm">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Torna ai Servizi
        </Link>

        <div className="max-w-4xl mx-auto">
          <header className="mb-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#4A3F35]/5 rounded-full mb-8 border border-[#4A3F35]/10">
              <Brain className="w-5 h-5 text-[#4A3F35]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#4A3F35]">Inclusione e Apprendimento</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-[#4A3F35] mb-8 leading-tight">Tutoraggio Specialistico: Oltre il Dovere dei Compiti.</h1>
            <p className="text-xl text-[#6B5E51] font-light leading-relaxed italic border-l-4 border-[#4A3F35]/30 pl-6">
              "L'obiettivo non è colmare lacune, ma scoprire il potenziale e costruire l'autonomia."
            </p>
          </header>

          <article className="prose prose-stone max-w-none text-[#6B5E51] font-light leading-relaxed space-y-12 mb-16">
            <section>
              <h2 className="text-3xl font-serif text-[#4A3F35] mb-6">Un Approccio Metacognitivo all'Apprendimento</h2>
              <p>
                Il tutoraggio pedagogico specialistico per ragazzi con DSA (Dislessia, Disgrafia, Disortografia, Discalculia), BES (Bisogni Educativi Speciali) e ADHD (Disturbo da Deficit di Attenzione/Iperattività) non deve essere confuso con le semplici "ripetizioni scolastiche". Mentre queste ultime puntano a recuperare un contenuto specifico per superare un'interrogazione, il <strong>tutoraggio specialistico</strong> punta a fornire al ragazzo gli strumenti per "imparare a imparare".
              </p>
              <p>
                Il mio lavoro come pedagogista consiste nell'analizzare lo stile di apprendimento del ragazzo e nell'aiutarlo a costruire un <strong>metodo di studio personalizzato</strong> che valorizzi i suoi punti di forza e compensi le sue fatiche. Questo percorso mira a ridurre l'ansia da prestazione e il senso di frustrazione, promuovendo una reale autonomia che accompagnerà lo studente lungo tutto il suo percorso scolastico e di vita.
              </p>
            </section>

            <section className="bg-white p-12 rounded-[3rem] border border-[#F3F0E9] shadow-sm">
              <h3 className="text-2xl font-serif text-[#4A3F35] mb-8 flex items-center gap-4">
                <Target className="w-8 h-8 text-[#B15E41]" /> Obiettivi e Metodologia
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#B15E41]/10 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-[#B15E41]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4A3F35]">Consapevolezza Cognitiva</h4>
                    <p className="text-sm">Insegnare al ragazzo come funziona la sua mente, aiutandolo a riconoscere quali strategie funzionano meglio per lui (mappe, schemi, audio, sintesi vocale).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#B15E41]/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#B15E41]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4A3F35]">Rafforzamento dell'Autostima</h4>
                    <p className="text-sm">Contrastare l'impotenza appresa (la sensazione di non poter riuscire mai) attraverso piccoli successi costanti e una corretta attribuzione del successo.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#B15E41]/10 flex items-center justify-center shrink-0">
                    <PenTool className="w-5 h-5 text-[#B15E41]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4A3F35]">Strumenti Compensativi</h4>
                    <p className="text-sm">Affiancare il ragazzo nell'uso consapevole dei software e degli strumenti previsti dal PDP (Piano Didattico Personalizzato).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#B15E41]/10 flex items-center justify-center shrink-0">
                    <ClipboardList className="w-5 h-5 text-[#B15E41]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4A3F35]">Organizzazione e Pianificazione</h4>
                    <p className="text-sm">Lavorare sulle funzioni esecutive: gestire il tempo, pianificare lo studio pomeridiano e preparare lo zaino o il materiale necessario.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-serif text-[#4A3F35] mb-6">Il Dialogo con Scuola e Famiglia</h3>
              <p>
                Il tutor pedagogico non lavora isolato. Una parte fondamentale dell'intervento è la mediazione. Supporto le famiglie nella lettura della diagnosi e nella comprensione delle dinamiche scolastiche, e mi interfaccio con i docenti per favorire un'applicazione efficace delle misure dispensative e degli strumenti compensativi. L'obiettivo è creare una "rete" che sostenga il ragazzo in modo coerente.
              </p>
              <p>
                Molti ragazzi che arrivano nello Studio Kairos presentano una profonda demotivazione. La pedagogia della meraviglia interviene proprio qui: riscoprire che imparare può essere gratificante. Quando un ragazzo capisce *come* studiare, smette di percepire la scuola come un muro insormontabile e inizia a vederla come un terreno di sfida equo.
              </p>
            </section>

            <section className="bg-[#4A3F35]/5 p-8 rounded-[2.5rem] border border-[#4A3F35]/10">
              <h4 className="text-xl font-serif text-[#4A3F35] mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-[#4A3F35]" /> Per chi è pensato questo servizio?
              </h4>
              <p className="text-sm leading-relaxed mb-4">
                Il tutoraggio è rivolto a bambini della scuola primaria e ragazzi della scuola secondaria di primo e secondo grado. È utile in caso di:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 text-sm">
                <li className="flex items-center gap-2"> <Sparkles className="w-4 h-4 text-[#B15E41]" /> Diagnosi DSA (Legge 170/2010)</li>
                <li className="flex items-center gap-2"> <Sparkles className="w-4 h-4 text-[#B15E41]" /> Diagnosi ADHD o difficoltà attentive</li>
                <li className="flex items-center gap-2"> <Sparkles className="w-4 h-4 text-[#B15E41]" /> Difficoltà nella comprensione del testo</li>
                <li className="flex items-center gap-2"> <Sparkles className="w-4 h-4 text-[#B15E41]" /> Blocco scolastico o ansia da valutazione</li>
                <li className="flex items-center gap-2"> <Sparkles className="w-4 h-4 text-[#B15E41]" /> Bisogno di ottimizzare il metodo di studio</li>
              </ul>
            </section>
          </article>

          {/* CTA Right After Article */}
          <section className="bg-[#4A3F35] text-white p-12 md:p-16 rounded-[4rem] text-center mb-24 shadow-2xl">
            <h2 className="text-4xl font-serif mb-6">Restituiamo la gioia di imparare.</h2>
            <p className="text-lg font-light mb-10 opacity-90 max-w-2xl mx-auto">
              Tuo figlio vive la scuola con fatica o demotivazione? Iniziamo un percorso di tutoraggio specialistico per riscoprire il suo potenziale unico.
            </p>
            <button 
              onClick={onOpenContact}
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
              <h2 className="text-3xl font-serif text-[#4A3F35]">FAQ sul Tutoraggio Specialistico</h2>
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

          {/* Interlinking Block */}
          <section className="mb-24">
            <div className="p-10 bg-white rounded-[3rem] border border-[#F3F0E9] flex flex-col md:flex-row items-center gap-10">
               <div className="w-16 h-16 rounded-2xl bg-[#D68C70]/10 flex items-center justify-center shrink-0">
                 <Info className="w-8 h-8 text-[#D68C70]" />
               </div>
               <div>
                 <h3 className="text-2xl font-serif text-[#4A3F35] mb-2">Pedagogista o Psicologo?</h3>
                 <p className="text-[#6B5E51] font-light leading-relaxed mb-4 text-sm">
                   È fondamentale comprendere le differenze tra le figure professionali per garantire a tuo figlio il supporto più adatto. 
                 </p>
                 <Link to="/blog/pedagogista-psicologo-educatore-differenze" className="text-[#D68C70] font-bold hover:underline text-sm flex items-center gap-2">
                   Leggi la guida completa <ArrowRight className="w-4 h-4" />
                 </Link>
               </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TutoraggioSpecialisticoPage;
