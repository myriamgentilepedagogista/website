import React, { useState } from 'react';
import { BriefcaseBusiness, ArrowLeft, ShieldCheck, Layout, Users, ArrowRight, ChevronRight, HelpCircle, Plus, Minus, GraduationCap, ClipboardCheck, BookCheck, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

interface PageProps {
  onOpenContact: () => void;
}

const CoordinamentoPedagogicoPage: React.FC<PageProps> = ({ onOpenContact }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const siteUrl = "https://myriamgentilepedagogista.com";

  const faqData = [
    {
      q: "Cosa prevede la nuova Legge 55/2024?",
      a: "La legge istituisce l'Ordine delle professioni pedagogiche, definendo il pedagogista come figura di livello apicale necessaria per il coordinamento dei servizi educativi. Collaborare con un professionista abilitato è garanzia di qualità e conformità normativa."
    },
    {
      q: "Qual è la differenza tra coordinamento e supervisione?",
      a: "Il coordinamento riguarda la progettazione e la gestione del servizio nel suo complesso. La supervisione è invece rivolta specificamente al team educativo, per elaborare i vissuti emotivi e migliorare le dinamiche di sezione."
    },
    {
      q: "Possiamo richiedere una formazione PNRR specifica?",
      a: "Sì. Collaboro con diversi istituti scolastici per l'attuazione di progetti PNRR legati al mentoring, all'orientamento e al contrasto della dispersione scolastica."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Coordinamento Pedagogico e Supervisione 0-6",
    "serviceType": "Educational Coordination",
    "description": "Coordinamento pedagogico professionale e supervisione per nidi d'infanzia e scuole dell'infanzia. Supporto alla progettazione educativa e alla qualità dei servizi 0-6.",
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
      { "@type": "City", "name": "Ancona" },
      { "@type": "City", "name": "Fermo" },
      { "@type": "City", "name": "Loreto" },
      { "@type": "City", "name": "Porto Sant'Elpidio" }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 43.3050631,
        "longitude": 13.7245397
      },
      "geoRadius": "50000"
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <SEO 
        title="Coordinamento Pedagogico 0-6 e Supervisione | Myriam Gentile"
        description="Coordinamento pedagogico professionale e supervisione per nidi d'infanzia e scuole. Rafforza la qualità educativa."
        path="/servizi/coordinamento-pedagogico"
      />
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      
      <div className="container mx-auto px-6">
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A89E92] mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#B15E41] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/servizi" className="hover:text-[#B15E41] transition-colors">Servizi</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#4A3F35] font-medium">Coordinamento Pedagogico</span>
        </nav>

        <Link to="/servizi" className="inline-flex items-center gap-2 text-[#A89E92] hover:text-[#7B8B6F] transition-colors mb-12 group text-sm">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Torna ai Servizi
        </Link>

        <div className="max-w-4xl mx-auto">
          <header className="mb-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#7B8B6F]/5 rounded-full mb-8 border border-[#7B8B6F]/10">
              <BriefcaseBusiness className="w-5 h-5 text-[#7B8B6F]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#7B8B6F]">Servizi per le Istituzioni</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-[#4A3F35] mb-8 leading-tight">Coordinamento e Supervisione: La Qualità dello Sguardo Educativo.</h1>
            <p className="text-xl text-[#6B5E51] font-light leading-relaxed italic border-l-4 border-[#7B8B6F]/30 pl-6">
              "Il coordinamento pedagogico è il respiro di un servizio: lo spazio dove la prassi diventa pensiero."
            </p>
          </header>

          <article className="prose prose-stone max-w-none text-[#6B5E51] font-light leading-relaxed space-y-12 mb-16">
            <section>
              <h2 className="text-3xl font-serif text-[#4A3F35] mb-6">Il Valore Strategico della Supervisione nei Servizi 0-6</h2>
              <p>
                Nei servizi per la prima infanzia, la qualità non è un traguardo statico, ma un processo dinamico che richiede monitoraggio costante e riflessività. Il <strong>Coordinatore Pedagogico</strong> agisce come garante dell'identità educativa della struttura, fungendo da ponte tra la normativa, la gestione amministrativa e la pratica quotidiana in sezione. Non si tratta di un ruolo puramente organizzativo, ma di una figura apicale — oggi riconosciuta formalmente dalla Legge 55/2024 — che ha il compito di custodire e far evolvere il <strong>Progetto Pedagogico</strong>.
              </p>
              <p>
                Collaborare con un coordinatore esterno offre alle strutture il vantaggio dell'obiettività. Uno sguardo professionale "altro" permette di rilevare criticità sommerse, valorizzare i punti di forza del team e assicurare che ogni scelta, dall'acquisto degli arredi alla gestione del momento del pasto, sia coerente con gli obiettivi educativi dichiarati.
              </p>
            </section>
            
            <section className="bg-white p-12 rounded-[3rem] border border-[#F3F0E9] shadow-sm">
              <h3 className="text-2xl font-serif text-[#4A3F35] mb-8 flex items-center gap-4">
                <Users className="w-8 h-8 text-[#7B8B6F]" /> Pilastri dell'intervento istituzionale
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-[#FDFBF7] rounded-2xl">
                  <h4 className="font-bold text-[#4A3F35] mb-2 flex items-center gap-2"><ClipboardCheck className="w-4 h-4 text-[#7B8B6F]" /> Monitoraggio Qualità</h4>
                  <p className="text-sm">Utilizzo di strumenti di osservazione e valutazione (come i sistemi di monitoraggio regionali) per garantire standard di eccellenza nel servizio.</p>
                </div>
                <div className="p-6 bg-[#FDFBF7] rounded-2xl">
                  <h4 className="font-bold text-[#4A3F35] mb-2 flex items-center gap-2"><BookCheck className="w-4 h-4 text-[#7B8B6F]" /> Formazione Team</h4>
                  <p className="text-sm">Percorsi di aggiornamento professionale su misura: dalle neuroscienze applicate all'educazione alla gestione dei conflitti nel gruppo di lavoro.</p>
                </div>
                <div className="p-6 bg-[#FDFBF7] rounded-2xl">
                  <h4 className="font-bold text-[#4A3F35] mb-2 flex items-center gap-2"><Layout className="w-4 h-4 text-[#7B8B6F]" /> Design Pedagogico</h4>
                  <p className="text-sm">Supporto nell'allestimento di contesti e ambienti che favoriscano l'autonomia, l'esplorazione e il benessere dei piccoli e del personale.</p>
                </div>
                <div className="p-6 bg-[#FDFBF7] rounded-2xl">
                  <h4 className="font-bold text-[#4A3F35] mb-2 flex items-center gap-2"><Network className="w-4 h-4 text-[#7B8B6F]" /> Lavoro di Rete</h4>
                  <p className="text-sm">Consolidamento dei legami con il territorio: istituti scolastici, servizi sociali, ASUR e famiglie, per un approccio di comunità educante.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-serif text-[#4A3F35] mb-6">La Supervisione Pedagogica del Gruppo Educativo</h3>
              <p>
                Lavorare in ambito educativo richiede un enorme dispendio di energie emotive. La supervisione pedagogica è lo spazio protetto in cui il team può fermarsi a riflettere. Non è un giudizio sull'operato, ma un momento di elaborazione collettiva dei vissuti che scaturiscono dalla relazione con i bambini e con le loro famiglie.
              </p>
              <p>
                Attraverso metodologie riflessive, aiuto le educatrici a "pensare il pensiero", a sciogliere nodi comunicativi interni e a ritrovare la motivazione e la passione per il proprio lavoro. Un team supportato produce un ambiente sereno, che è la condizione necessaria per lo sviluppo armonico di ogni bambino accolto nel servizio.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-serif text-[#4A3F35] mb-6">Supporto PNRR e Progetti Speciali</h3>
              <p>
                Negli ultimi anni, la scuola italiana è stata investita da grandi opportunità legate ai fondi PNRR. Collaboro con Istituti Comprensivi e Superiori nelle province di Macerata e Ancona per l'attuazione di progetti mirati al contrasto della dispersione scolastica, al mentoring individuale e all'orientamento. In questo contesto, il pedagogista funge da facilitatore dei processi di inclusione, lavorando sulle competenze trasversali (soft skills) e sul benessere degli studenti.
              </p>
            </section>
          </article>

          {/* CTA Right After Article */}
          <section className="bg-[#7B8B6F] text-white p-12 md:p-16 rounded-[4rem] text-center mb-24 shadow-2xl">
            <h2 className="text-4xl font-serif mb-6">Qualifichiamo il tuo servizio.</h2>
            <p className="text-lg font-light mb-10 opacity-90 max-w-2xl mx-auto">
              Contattami per una proposta di coordinamento pedagogico o supervisione su misura per la tua struttura 0-6 o per progetti scolastici specialistici.
            </p>
            <button 
              onClick={onOpenContact}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#7B8B6F] rounded-full text-lg font-bold hover:bg-[#F9F6F1] transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Richiedi un colloquio tecnico <ArrowRight className="w-5 h-5" />
            </button>
          </section>

          {/* FAQ Section */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-[#7B8B6F]/10 flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-[#7B8B6F]" />
              </div>
              <h2 className="text-3xl font-serif text-[#4A3F35]">FAQ per Scuole e Istituzioni</h2>
            </div>
            <div className="space-y-4">
              {faqData.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#EBE7E0] rounded-[2rem] overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                  >
                    <span className="font-serif text-lg text-[#4A3F35]">{item.q}</span>
                    {openFaq === idx ? <Minus className="text-[#7B8B6F]" /> : <Plus className="text-[#A89E92]" />}
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
            <div className="bg-[#F0F4EE] p-12 rounded-[4rem] border border-[#7B8B6F]/10 flex flex-col md:flex-row items-center gap-12">
               <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shrink-0 shadow-lg">
                 <GraduationCap className="w-10 h-10 text-[#7B8B6F]" />
               </div>
               <div>
                 <h3 className="text-3xl font-serif text-[#4A3F35] mb-4">Formazione e CV Completo</h3>
                 <p className="text-[#6B5E51] font-light leading-relaxed mb-8">
                   Esplora la mia esperienza decennale nel coordinamento dei nidi d'infanzia e i miei progetti PNRR realizzati nelle province di Macerata e Ancona.
                 </p>
                 <Link to="/esperienza" className="inline-flex items-center gap-2 px-8 py-3 bg-[#7B8B6F] text-white rounded-full font-bold hover:bg-[#6A7A5E] transition-all">
                   Esplora la mia esperienza <ArrowRight className="w-5 h-5" />
                 </Link>
               </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CoordinamentoPedagogicoPage;
