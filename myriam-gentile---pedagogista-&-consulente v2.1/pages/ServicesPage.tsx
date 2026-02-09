import React from 'react';
import { ArrowLeft, Users2, BriefcaseBusiness, Brain, CheckCircle2, Info, ChevronRight, ArrowUpRight, HelpCircle, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { getMeta } from '../seo/metadata';

const ServicesPage: React.FC = () => {
  const location = useLocation();
  const meta = getMeta(location.pathname);
  const siteUrl = "https://myriamgentilepedagogista.com";

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Servizi Pedagogici Specialistici di Myriam Gentile",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Consulenza Genitoriale",
        "url": `${siteUrl}/servizi/consulenza-genitoriale`,
        "description": "Supporto pedagogico basato sulle neuroscienze per genitori ed educatori.",
        "provider": { "@id": `${siteUrl}/#business` }
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Coordinamento Pedagogico 0-6",
        "url": `${siteUrl}/servizi/coordinamento-pedagogico`,
        "description": "Supervisione e progettazione per nidi e scuole dell'infanzia.",
        "provider": { "@id": `${siteUrl}/#business` }
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Tutoraggio Specialistico DSA e BES",
        "url": `${siteUrl}/servizi/tutoraggio-specialistico`,
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
          <Link to="/" className="hover:text-[#B15E41] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#4A3F35] font-medium">Servizi</span>
        </nav>

        <header className="max-w-4xl mb-24">
          <span className="text-[#B15E41] font-semibold tracking-[0.2em] text-[10px] uppercase mb-4 block">Aree di Intervento Professionale</span>
          <h1 className="text-6xl md:text-8xl font-serif text-[#4A3F35] mb-8 leading-[0.9]">Servizi Pedagogici Specialistici</h1>
          <p className="text-xl text-[#6B5E51] font-light max-w-2xl leading-relaxed">
            Un'offerta integrata per sostenere bambini, famiglie e professionisti dell'educazione attraverso percorsi fondati su basi scientifiche e orientati all'autonomia.
          </p>
        </header>
        
        <div className="grid grid-cols-1 gap-20">
          {/* Service Card 1 */}
          <div className="group bg-white rounded-[3.5rem] border border-[#F3F0E9] overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-16 bg-[#B15E41] text-white flex flex-col justify-center">
                <Users2 className="w-16 h-16 mb-8" />
                <h2 className="text-4xl md:text-5xl font-serif mb-6">Consulenza Genitoriale</h2>
                <p className="text-lg opacity-90 font-light mb-8 leading-relaxed">
                  Percorsi di empowerment per genitori che desiderano comprendere i bisogni profondi dei propri figli attraverso la lente delle neuroscienze.
                </p>
                <Link to="/servizi/consulenza-genitoriale" className="inline-flex items-center gap-2 text-white font-bold hover:underline">
                  Approfondisci il servizio <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="p-12 md:p-16 flex flex-col justify-center">
                <ul className="space-y-6">
                  {[
                    "Lettura pedagogica dei comportamenti",
                    "Supporto alle sfide evolutive (sonno, regole, autonomie)",
                    "Comunicazione efficace in famiglia",
                    "Empowerment del ruolo educativo dei genitori"
                  ].map(t => (
                    <li key={t} className="flex items-start gap-4 text-[#4A3F35] text-lg font-light">
                      <CheckCircle2 className="w-6 h-6 text-[#B15E41] shrink-0 mt-0.5" /> 
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="group bg-white rounded-[3.5rem] border border-[#F3F0E9] overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-16 bg-[#7B8B6F] text-white flex flex-col justify-center lg:order-2">
                <BriefcaseBusiness className="w-16 h-16 mb-8" />
                <h2 className="text-4xl md:text-5xl font-serif mb-6">Supporto a Educatrici e Scuole</h2>
                <p className="text-lg opacity-90 font-light mb-8 leading-relaxed">
                  Coordinamento pedagogico e supervisione per servizi 0-6. Rafforzamento dell'identità educativa e della qualità progettuale.
                </p>
                <Link to="/servizi/coordinamento-pedagogico" className="inline-flex items-center gap-2 text-white font-bold hover:underline">
                  Approfondisci il servizio <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="p-12 md:p-16 flex flex-col justify-center lg:order-1">
                <ul className="space-y-6">
                  {[
                    "Supervisione dei team educativi",
                    "Coordinamento pedagogico 0-6",
                    "Progettazione di spazi e tempi educativi",
                    "Gestione delle dinamiche di sezione"
                  ].map(t => (
                    <li key={t} className="flex items-start gap-4 text-[#4A3F35] text-lg font-light">
                      <CheckCircle2 className="w-6 h-6 text-[#7B8B6F] shrink-0 mt-0.5" /> 
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="group bg-white rounded-[3.5rem] border border-[#F3F0E9] overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-16 bg-[#4A3F35] text-white flex flex-col justify-center">
                <Brain className="w-16 h-16 mb-8" />
                <h2 className="text-4xl md:text-5xl font-serif mb-6">Tutoraggio BES, DSA e ADHD</h2>
                <p className="text-lg opacity-90 font-light mb-8 leading-relaxed">
                  Metodo di studio e autonomia per ragazzi. Valorizzazione del potenziale e gestione degli strumenti compensativi.
                </p>
                <Link to="/servizi/tutoraggio-specialistico" className="inline-flex items-center gap-2 text-white font-bold hover:underline">
                  Approfondisci il servizio <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="p-12 md:p-16 flex flex-col justify-center">
                <ul className="space-y-6">
                  {[
                    "Costruzione di un metodo di studio efficace",
                    "Uso degli strumenti compensativi",
                    "Potenziamento delle funzioni esecutive",
                    "Supporto emotivo al percorso scolastico"
                  ].map(t => (
                    <li key={t} className="flex items-start gap-4 text-[#4A3F35] text-lg font-light">
                      <CheckCircle2 className="w-6 h-6 text-[#B15E41] shrink-0 mt-0.5" /> 
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Pages Block */}
        <div className="mt-32 pt-12 border-t border-[#F3F0E9]">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A89E92] mb-8">Approfondisci</h4>
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <Link to="/faq" className="text-[#4A3F35] hover:text-[#B15E41] font-serif text-xl transition-colors flex items-center gap-2 group">
              Domande Frequenti <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
            </Link>
            <Link to="/blog" className="text-[#4A3F35] hover:text-[#B15E41] font-serif text-xl transition-colors flex items-center gap-2 group">
              Spazio Pedagogico <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
            </Link>
            <Link to="/chi-sono" className="text-[#4A3F35] hover:text-[#B15E41] font-serif text-xl transition-colors flex items-center gap-2 group">
              Chi è Myriam Gentile <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
