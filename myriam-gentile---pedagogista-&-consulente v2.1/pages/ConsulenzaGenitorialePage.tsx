
import React, { useState } from 'react';
import { Users2, ArrowLeft, Brain, ArrowRight, ChevronRight, Sparkles, Plus, Minus, HelpCircle, BookOpen, Heart, Lightbulb, Compass, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

interface PageProps {
  onOpenContact: () => void;
}

const ConsulenzaGenitorialePage: React.FC<PageProps> = ({ onOpenContact }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const siteUrl = "https://www.myriamgentilepedagogista.com";
  
  const faqData = [
    {
      q: "Quanti incontri sono necessari?",
      a: "Ogni situazione è unica. Spesso bastano 3-5 incontri per sbloccare una fatica specifica e ritrovare nuovi strumenti. Non è un percorso infinito, ma un intervento mirato all'empowerment genitoriale."
    },
    {
      q: "La consulenza online è efficace come quella in presenza?",
      a: "Assolutamente sì. Per la consulenza genitoriale, la modalità online è molto valida perché permette di lavorare sulla narrazione del genitore in un ambiente protetto e flessibile rispetto ai ritmi familiari."
    },
    {
      q: "Dobbiamo venire entrambi i genitori?",
      a: "È caldamente consigliato, ma non obbligatorio. Lavorare in coppia permette di allineare lo sguardo educativo, ma anche un solo genitore può attivare cambiamenti significativi nel sistema familiare."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Consulenza Genitoriale Pedagogica",
    "serviceType": "Parental Consulting",
    "description": "Percorsi di supporto alla genitorialità basati sulle neuroscienze per comprendere i bisogni profondi dei figli e migliorare la relazione educativa.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Myriam Gentile - Pedagogista",
      "image": "https://i.imgur.com/6OPo7If.png",
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
      { "@type": "City", "name": "Porto Sant'Elpidio" }
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "name": "Consulenza Online e In Presenza",
      "serviceUrl": `${siteUrl}/servizi/consulenza-genitoriale`
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <SEO 
        title="Consulenza Genitoriale Pedagogica | Myriam Gentile"
        description="Percorsi di supporto alla genitorialità basati sulle neuroscienze a Civitanova Marche e Online. Comprendi i bisogni di tuo figlio."
        path="/servizi/consulenza-genitoriale"
      />
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      
      <div className="container mx-auto px-6">
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A89E92] mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#B15E41] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/servizi" className="hover:text-[#B15E41] transition-colors">Servizi</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#4A3F35] font-medium">Consulenza Genitoriale</span>
        </nav>

        <Link to="/servizi" className="inline-flex items-center gap-2 text-[#A89E92] hover:text-[#B15E41] transition-colors mb-12 group text-sm">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Torna ai Servizi
        </Link>

        <div className="max-w-4xl mx-auto">
          <header className="mb-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#B15E41]/5 rounded-full mb-8 border border-[#B15E41]/10">
              <Users2 className="w-5 h-5 text-[#B15E41]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#B15E41]">Supporto alla Genitorialità</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-[#4A3F35] mb-8 leading-tight">Consulenza Genitoriale: Trovare la Meraviglia nel Quotidiano.</h1>
            <p className="text-xl text-[#6B5E51] font-light leading-relaxed italic border-l-4 border-[#B15E41]/30 pl-6">
              "Educare significa accompagnare la crescita, rinegoziando ogni giorno il proprio ruolo attraverso l'ascolto e la consapevolezza."
            </p>
          </header>

          <article className="prose prose-stone max-w-none text-[#6B5E51] font-light leading-relaxed space-y-12 mb-16">
            <section>
              <h2 className="text-3xl font-serif text-[#4A3F35] mb-6">Un Viaggio Consapevole verso l'Empowerment Educativo</h2>
              <p>
                In un’epoca caratterizzata da una sovrabbondanza di informazioni spesso contraddittorie, essere genitori è diventata una sfida complessa che espone costantemente al senso di inadeguatezza. La <strong>consulenza genitoriale pedagogica</strong> non è un percorso di terapia, ma uno spazio di riflessione strategico dedicato a chi desidera abitare il proprio ruolo educativo con maggiore consapevolezza. Come pedagogista, il mio ruolo è quello di "esperta della normalità": non cerco patologie, ma lavoro sulla fisiologia della crescita e delle relazioni umane.
              </p>
              <p>
                L'obiettivo centrale è fornire ai genitori una "mappa" affidabile per orientarsi nelle sfide evolutive che ogni tappa della crescita porta con sé. Attraverso l'approccio <strong>Meraki</strong> — termine greco che indica l'anima e l'amore messi nel proprio lavoro — metto l'essenza della pedagogia al servizio del vostro legame familiare, aiutandovi a riscoprire le risorse che già possedete ma che lo stress o la fatica hanno reso momentaneamente invisibili.
              </p>
            </section>

            <section className="bg-white p-12 rounded-[3rem] border border-[#F3F0E9] shadow-sm">
              <h2 className="text-3xl font-serif text-[#4A3F35] mb-8 flex items-center gap-4">
                <Brain className="w-8 h-8 text-[#B15E41]" /> La Lente delle Neuroscienze
              </h2>
              <p className="mb-8">
                Integrare la pedagogia con le neuroscienze significa guardare al comportamento del bambino non come a un problema da correggere, ma come a un segnale da decodificare. Comprendere come matura il cervello infantile — dalla dominanza del sistema limbico (emotivo) alla graduale formazione della corteccia prefrontale (regolativa) — permette ai genitori di abbassare il giudizio e aumentare l'empatia.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Sviluppo Emotivo", desc: "Riconoscere l'immaturità cerebrale per gestire i cosiddetti 'capricci' come tempeste emotive naturali." },
                  { title: "Neuroplasticità", desc: "Sfruttare la capacità del cervello di rimodellarsi per costruire nuove abitudini educative positive." },
                  { title: "Teoria dell'Attaccamento", desc: "Costruire basi sicure che favoriscano la futura autonomia e la fiducia in se stessi del bambino." },
                  { title: "Co-Regolazione", desc: "Imparare come la calma del genitore possa fungere da 'ancora' esterna per il sistema nervoso del figlio." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <h4 className="font-bold text-[#4A3F35] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#B15E41]" /> {item.title}
                    </h4>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-serif text-[#4A3F35] mb-6">Perché rivolgersi a un Pedagogista?</h3>
              <p>
                Il supporto pedagogico interviene quando la fatica quotidiana rischia di soffocare la gioia dell'incontro. Non serve una diagnosi per chiedere aiuto; serve solo il desiderio di stare meglio nella relazione. Le aree su cui lavoriamo comunemente includono:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mt-8 list-none p-0">
                <li className="flex items-start gap-3"><Lightbulb className="w-5 h-5 text-[#B15E41] shrink-0 mt-1" /> <span><strong>Gestione dei Conflitti:</strong> trasformare la rabbia in un'occasione di apprendimento relazionale.</span></li>
                <li className="flex items-start gap-3"><Compass className="w-5 h-5 text-[#B15E41] shrink-0 mt-1" /> <span><strong>Tappe Evolutive:</strong> svezzamento, sonno, passaggio al vasino, inserimento a scuola.</span></li>
                <li className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-[#B15E41] shrink-0 mt-1" /> <span><span><strong>Regole e Limiti:</strong> come porre confini chiari in modo amorevole e autorevole, senza autoritarismo.</span></span></li>
                <li className="flex items-start gap-3"><Heart className="w-5 h-5 text-[#B15E41] shrink-0 mt-1" /> <span><strong>Cambiamenti Familiari:</strong> supporto in caso di separazioni, lutti o arrivo di fratellini/sorelline.</span></li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-serif text-[#4A3F35] mb-6">Il Metodo di Lavoro nello Studio Kairos</h3>
              <p>
                Ogni percorso inizia con un colloquio conoscitivo volto ad analizzare la domanda e definire insieme gli obiettivi. Non offro soluzioni standardizzate, perché ogni sistema familiare ha una sua ecologia unica. Il mio approccio è dialogico: lavoriamo sulla narrazione che avete del vostro bambino e sulla vostra storia di figli, per liberare il potenziale educativo del presente.
              </p>
              <p>
                Spesso i genitori temono che chiedere aiuto sia un'ammissione di fallimento. Al contrario, è il più grande atto di responsabilità e amore che si possa compiere: riconoscere di aver bisogno di un terzo sguardo per vedere ciò che la vicinanza emotiva a volte rende sfocato. Insieme, trasformiamo la "fatica di educare" nella "meraviglia di veder crescere".
              </p>
            </section>
          </article>

          {/* CTA Right After Article */}
          <section className="bg-[#B15E41] text-white p-12 md:p-16 rounded-[4rem] text-center mb-24 shadow-2xl">
            <h2 className="text-4xl font-serif mb-6">Iniziamo a tracciare la rotta.</h2>
            <p className="text-lg font-light mb-10 opacity-90 max-w-2xl mx-auto">
              La consulenza genitoriale è un investimento prezioso sulla salute relazionale della tua famiglia. Richiedi un primo colloquio per riscoprire la bellezza di educare con serenità.
            </p>
            <button 
              onClick={onOpenContact}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#B15E41] rounded-full text-lg font-bold hover:bg-[#F9F6F1] transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Prenota un colloquio <ArrowRight className="w-5 h-5" />
            </button>
          </section>

          {/* FAQ Section */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-[#B15E41]/10 flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-[#B15E41]" />
              </div>
              <h2 className="text-3xl font-serif text-[#4A3F35]">Domande Frequenti sul Servizio</h2>
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

          {/* Interlinking */}
          <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FDF4E3] p-10 rounded-[3rem] border border-[#D68C70]/10">
              <BookOpen className="w-10 h-10 text-[#D68C70] mb-6" />
              <h3 className="text-2xl font-serif text-[#4A3F35] mb-4">Leggi dal Blog</h3>
              <p className="text-sm text-[#6B5E51] mb-6 font-light">
                Approfondisci quando è il momento giusto per iniziare un percorso pedagogico e come riconoscere i segnali di fatica.
              </p>
              <Link to="/blog/quando-rivolgersi-pedagogista" className="inline-flex items-center gap-2 text-[#B15E41] font-bold text-sm hover:underline">
                Vai all'articolo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-[#F0F4EE] p-10 rounded-[3rem] border border-[#7B8B6F]/10">
              <Users2 className="w-10 h-10 text-[#7B8B6F] mb-6" />
              <h3 className="text-2xl font-serif text-[#4A3F35] mb-4">La mia esperienza</h3>
              <p className="text-sm text-[#6B5E51] mb-6 font-light">
                Scopri la mia formazione specialistica nel supporto alle relazioni familiari e alla genitorialità consapevole.
              </p>
              <Link to="/esperienza" className="inline-flex items-center gap-2 text-[#7B8B6F] font-bold text-sm hover:underline">
                Vedi il CV <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ConsulenzaGenitorialePage;
