
import React from 'react';
import { ArrowLeft, Sparkles, Scale, Heart, Quote, ChevronRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { getMeta } from '../seo/metadata';

const PROFILE_IMAGE_URL = "https://i.imgur.com/bGfsC7Y.jpeg"; 

const AboutPage: React.FC = () => {
  const location = useLocation();
  const meta = getMeta(location.pathname);
  const siteUrl = "https://myriamgentilepedagogista.com";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/chi-sono#person`,
    "name": "Myriam Gentile",
    "jobTitle": "Pedagogista",
    "url": `${siteUrl}/chi-sono`,
    "image": {
      "@type": "ImageObject",
      "url": PROFILE_IMAGE_URL,
      "width": "800",
      "height": "800"
    },
    "description": "Pedagogista specializzata in empowerment educativo e neuroscienze.",
    "worksFor": { "@id": `${siteUrl}/#business` },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Università degli Studi di Macerata"
    },
    "knowsAbout": ["Pedagogia", "Neuroscienze", "Educazione", "DSA", "BES"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Civitanova Marche",
      "addressRegion": "MC",
      "addressCountry": "IT"
    }
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
        {JSON.stringify(personSchema)}
      </script>
      <div className="container mx-auto px-6">
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A89E92] mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#D68C70] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#4A3F35] font-medium">Chi Sono</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={PROFILE_IMAGE_URL} 
                alt="Dott.ssa Myriam Gentile - Pedagogista e Coordinatrice a Civitanova Marche" 
                width="800"
                height="800"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="mt-8 p-8 bg-white rounded-3xl border border-[#F3F0E9] shadow-sm">
               <Quote className="w-8 h-8 text-[#D68C70]/20 mb-4" />
               <p className="text-[#4A3F35] italic font-serif text-xl leading-relaxed">
                 "Educare non è riempire un vaso, ma accendere un fuoco. Un fuoco che arde di curiosità, rispetto e meraviglia."
               </p>
            </div>
          </div>

          <div className="space-y-12">
            <h1 className="text-5xl md:text-7xl font-serif text-[#4A3F35]">Pedagogista e Coordinatrice: la mia visione</h1>
            
            <div className="space-y-8 text-[#6B5E51] text-lg font-light leading-relaxed">
              <section>
                <h2 className="text-3xl font-serif text-[#4A3F35] mb-4">L'Approccio Meraki</h2>
                <p>
                  Mettere l'anima, la creatività e l'amore in ciò che si fa: questa è l'essenza di <strong>Meraki</strong>. Nel mio lavoro come pedagogista, questo si traduce in un ascolto profondo e in un'attention costante all'unicità di ogni persona, bambino o adulto che sia.
                </p>
                <p>
                  Il mio obiettivo è integrare la solidità delle <strong>neuroscienze</strong> con la sensibilità della <strong>pedagogia della relazione</strong>, offrendo strumenti concreti per trasformare le fatiche educative in opportunità di crescita consapevole.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-serif text-[#4A3F35] mb-4">Pedagogia e Neuroscienze</h2>
                <p>
                  Perché questo binomio? Le neuroscienze ci offrono oggi chiavi di lettura fondamentali per comprendere come funziona le cervello in crescita, come nascono le emozioni e come si apprende. La pedagogia, d'altro canto, ci insegna come tradurre queste scoperte in una relazione educativa efficace, calda e rispettosa.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
                    "Supporto basato sull'evidenza",
                    "Relazione centrata sulla persona",
                    "Sviluppo dell'autonomia",
                    "Potenziamento delle risorse"
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-base">
                      <CheckCircle2 className="w-5 h-5 text-[#7B8B6F] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="p-8 bg-[#D68C70]/5 rounded-[2.5rem] border border-[#D68C70]/10 flex gap-6">
                 <Heart className="w-8 h-8 text-[#D68C70] shrink-0" />
                 <div>
                   <h3 className="font-serif text-2xl text-[#4A3F35] mb-2">Una Pedagogia della Meraviglia</h3>
                   <p className="text-sm">
                     A differenza di un approccio esclusivamente clinico che spesso si focalizza sul limite, il pedagogista lavora sul "qui ed ora" delle potenzialità. Cerco la bellezza e la risorsa dove altri vedono solo criticità, per attivare un cambiamento duraturo.
                   </p>
                 </div>
              </div>

              <section>
                <h2 className="text-3xl font-serif text-[#4A3F35] mb-4">A chi mi rivolgo</h2>
                <p>
                  Il mio agire professionale attraversa diversi contesti: dalla <strong>consulenza genitoriale</strong> al <strong>tutoraggio specialistico</strong> per ragazzi con DSA/BES, fino al <strong>coordinamento pedagogico</strong> dei servizi 0-6. Credo fermamente che per aiutare un bambino serva sostenere l'intero sistema che lo circonda.
                </p>
                <div className="mt-6">
                  <Link to="/servizi" className="text-[#D68C70] hover:underline font-medium">Scopri nel dettaglio i miei servizi →</Link>
                </div>
              </section>

              <div className="p-6 bg-white rounded-3xl border border-[#EBE7E0]">
                <div className="flex items-center gap-3 mb-4 text-[#4A3F35]">
                  <Scale className="w-5 h-5 text-[#D68C70]" />
                  <h4 className="text-xs font-bold uppercase tracking-widest">Inquadramento Professionale</h4>
                </div>
                <p className="text-sm italic text-[#6B5E51]">
                  Professionista ai sensi della Legge 4/2013 e della Legge 15 aprile 2024 n. 55 (Disposizioni in materia di ordinamento delle professioni pedagogiche ed educative). P.IVA: 02480080445
                </p>
              </div>
            </div>

            {/* Related Pages Block */}
            <div className="mt-24 pt-12 border-t border-[#F3F0E9]">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A89E92] mb-8">Approfondisci</h4>
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                <Link to="/servizi" className="text-[#4A3F35] hover:text-[#D68C70] font-serif text-xl transition-colors flex items-center gap-2 group">
                  Servizi Pedagogici <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
                </Link>
                <Link to="/esperienza" className="text-[#4A3F35] hover:text-[#D68C70] font-serif text-xl transition-colors flex items-center gap-2 group">
                  Esperienza e CV <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
                </Link>
                <Link to="/faq" className="text-[#4A3F35] hover:text-[#D68C70] font-serif text-xl transition-colors flex items-center gap-2 group">
                  Domande Frequenti <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
