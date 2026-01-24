import React from 'react';
import { ArrowLeft, Users2, BriefcaseBusiness, Brain, CheckCircle2, Info, ChevronRight, ArrowUpRight, HelpCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { getMeta } from '../seo/metadata';

const ServicesPage: React.FC = () => {
  const location = useLocation();
  const meta = getMeta(location.pathname);
  const siteUrl = "https://www.myriamgentilepedagogista.com";

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Servizi Pedagogici Specialistici di Myriam Gentile",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Consulenza Genitoriale",
        "description": "Supporto pedagogico basato sulle neuroscienze per genitori ed educatori.",
        "provider": { "@id": `${siteUrl}/#business` }
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Coordinamento Pedagogico 0-6",
        "description": "Supervisione e progettazione per nidi e scuole dell'infanzia.",
        "provider": { "@id": `${siteUrl}/#business` }
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Tutoraggio Specialistico DSA e BES",
        "description": "Percorsi di autonomia e metodo di studio per ragazzi con difficoltà di apprendimento.",
        "provider": { "@id": `${siteUrl}/#business` }
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
        {JSON.stringify(servicesSchema)}
      </script>
      <div className="container mx-auto px-6">
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A89E92] mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#D68C70] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#4A3F35] font-medium">Servizi</span>
        </nav>

        {/* Snippet Block */}
        <p className="max-w-4xl mx-auto mb-12 text-[#6B5E51] font-light leading-relaxed text-sm bg-white/50 p-6 rounded-3xl border border-[#F3F0E9]">
          La pedagogia è la disciplina che studia l’educazione e lo sviluppo della persona lungo tutto l’arco della vita. <br />
          Il termine deriva dal greco ‘paidos’ (bambino) e ‘agogé’ (guidare).
        </p>

        <header className="max-w-4xl mb-24">
          <span className="text-[#D68C70] font-semibold tracking-[0.2em] text-[10px] uppercase mb-4 block">Aree di Intervento Professionale</span>
          <h1 className="text-6xl md:text-8xl font-serif text-[#4A3F35] mb-8 leading-[0.9]">Servizi Pedagogici Specialistici</h1>
          <p className="text-xl text-[#6B5E51] font-light max-w-2xl leading-relaxed">
            Un'offerta integrata per sostenere bambini, famiglie e professionisti dell'educazione attraverso percorsi fondati su basi scientifiche e orientati all'autonomia.
          </p>
          <div className="mt-12 p-6 bg-white rounded-3xl border border-[#F3F0E9] inline-flex items-center gap-4 text-sm">
            <Info className="w-5 h-5 text-[#D68C70]" />
            <p className="text-[#4A3F35]">Ricevo a <strong>Civitanova Marche</strong> presso lo Studio Kairos e <strong>Online</strong>.</p>
          </div>
        </header>
        
        <div className="grid grid-cols-1 gap-32">
          {/* Section: Per Genitori */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#D68C70] p-12 md:p-16 rounded-[3.5rem] text-white shadow-xl shadow-[#D68C70]/20">
              <Users2 className="w-16 h-16 mb-8" />
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Consulenza Genitoriale</h2>
              <p className="text-lg opacity-90 font-light mb-10 leading-relaxed">
                Uno spazio di ascolto e riflessione per comprendere lo sviluppo e i comportamenti infantili senza giudizio, trovando nuove strategie educative.
              </p>
              <ul className="space-y-4">
                {[
                  "Lettura pedagogica dei comportamenti",
                  "Supporto alle sfide evolutive (sonno, regole, autonomie)",
                  "Comunicazione efficace in famiglia",
                  "Empowerment del ruolo educativo dei genitori"
                ].map(t => (
                  <li key={t} className="flex items-start gap-3 text-sm md:text-base">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" /> 
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 md:p-8 space-y-8">
              <h3 className="text-3xl font-serif text-[#4A3F35]">Perché chiedere una consulenza?</h3>
              <p className="text-[#6B5E51] text-lg font-light leading-relaxed">
                Essere genitori è un mestiere complesso che si impara sul campo. La consulenza pedagogica offers una "lente" diversa: aiuta a leggere i bisogni profondi dietro i comportamenti dei figli, offrendo strumenti basati sulle neuroscienze per gestire la quotidianità con maggiore serenità.
              </p>
              <div className="flex gap-4 items-center text-[#D68C70]">
                <Link to="/blog/cos-e-la-pedagogia" className="hover:underline text-sm font-medium">Approfondisci cos'è la pedagogia →</Link>
              </div>
            </div>
          </section>

          {/* Section: Per Educatrices */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 bg-[#7B8B6F] p-12 md:p-16 rounded-[3.5rem] text-white shadow-xl shadow-[#7B8B6F]/20">
              <BriefcaseBusiness className="w-16 h-16 mb-8" />
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Supporto a Educatrici e Scuole</h2>
              <p className="text-lg opacity-90 font-light mb-10 leading-relaxed">
                Consulenza professionale e supervisione per rafforzare l'identità educativa e la qualità pedagogica dei servizi 0-6 anni.
              </p>
              <ul className="space-y-4">
                {[
                  "Supervisione dei team educativi",
                  "Coordinamento pedagogico 0-6",
                  "Progettazione di spazi e tempi educativi",
                  "Gestione delle dinamiche di sezione"
                ].map(t => (
                  <li key={t} className="flex items-start gap-3 text-sm md:text-base">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" /> 
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-1 p-4 md:p-8 space-y-8">
              <h3 className="text-3xl font-serif text-[#4A3F35]">Coordinamento e Supervisione</h3>
              <p className="text-[#6B5E51] text-lg font-light leading-relaxed">
                Affianco le realtà educative nella costruzione di un progetto pedagogico solido. La supervisione diventa il respiro del team: un tempo per fermarsi, osservare l'agire quotidiano e rilanciare nuove pratiche di cura e apprendimento per i più piccoli.
              </p>
              <Link to="/esperienza" className="inline-flex items-center gap-2 text-[#7B8B6F] font-medium text-sm hover:underline">
                Vedi le mie esperienze di coordinamento →
              </Link>
            </div>
          </section>

          {/* Section: Tutoraggio Specialistico */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#4A3F35] p-12 md:p-16 rounded-[3.5rem] text-white shadow-xl shadow-[#4A3F35]/20">
              <Brain className="w-16 h-16 mb-8" />
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Tutoraggio BES, DSA e ADHD</h2>
              <p className="text-lg opacity-90 font-light mb-10 leading-relaxed">
                Percorsi individualizzati focalizzati sull'autonomia, sul metodo di studio e sulla consapevolezza del proprio stile di apprendimento.
              </p>
              <ul className="space-y-4">
                {[
                  "Costruzione di un metodo di studio efficace",
                  "Uso degli strumenti compensativi",
                  "Potenziamento delle funzioni esecutive",
                  "Supporto emotivo al percorso scolastico"
                ].map(t => (
                  <li key={t} className="flex items-start gap-3 text-sm md:text-base">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" /> 
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 md:p-8 space-y-8">
              <h3 className="text-3xl font-serif text-[#4A3F35]">Oltre il supporto didattico</h3>
              <p className="text-[#6B5E51] text-lg font-light leading-relaxed">
                Il tutoraggio pedagogico non è semplici "ripetizioni". È un intervento mirato a scoprire come ogni ragazzo apprende meglio, valorizzando le sue abilità e riducendo il senso di frustrazione legato alle difficoltà scolastiche (DSA o BES). L'obiettivo è sempre l'autonomia.
              </p>
              <div className="bg-[#F9F6F1] p-6 rounded-3xl border border-[#EBE7E0] flex gap-4">
                <HelpCircle className="w-6 h-6 text-[#D68C70] shrink-0" />
                <p className="text-sm text-[#4A3F35]">
                  Hai dubbi sulla differenza tra supporto pedagogico e clinico? <Link to="/faq" className="underline font-bold">Leggi le FAQ</Link>.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* How it works section */}
        <section className="mt-40 bg-white rounded-[4rem] p-12 md:p-20 border border-[#F3F0E9] shadow-sm">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#4A3F35] mb-6">Come funziona il percorso</h2>
            <p className="text-[#6B5E51] font-light text-lg">Un approccio strutturato in 3 fasi per garantire qualità e risultati.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                step: "01", 
                title: "Primo Colloquio", 
                desc: "Un incontro conoscitivo per analizzare la domanda e definire gli obiettivi del percorso, in studio o online." 
              },
              { 
                step: "02", 
                title: "Analisi e Proposta", 
                desc: "Definisco un progetto pedagogico personalizzato, basato sulle necessità emerse e sulle risorse presenti." 
              },
              { 
                step: "03", 
                title: "Percorso Attivo", 
                desc: "Incontri periodici di monitoraggio e lavoro diretto, con una valutazione costante dei progressi raggiunti." 
              }
            ].map((phase) => (
              <div key={phase.step} className="relative p-8 rounded-3xl hover:bg-[#FDFBF7] transition-colors border border-transparent hover:border-[#F3F0E9]">
                <span className="text-5xl font-serif text-[#D68C70]/20 absolute top-4 left-4">{phase.step}</span>
                <h3 className="text-2xl font-serif text-[#4A3F35] mb-4 relative z-10">{phase.title}</h3>
                <p className="text-[#6B5E51] font-light leading-relaxed relative z-10">{phase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Pages Block */}
        <div className="mt-24 pt-12 border-t border-[#F3F0E9]">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A89E92] mb-8">Approfondisci</h4>
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <Link to="/faq" className="text-[#4A3F35] hover:text-[#D68C70] font-serif text-xl transition-colors flex items-center gap-2 group">
              Domande Frequenti <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
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

export default ServicesPage;