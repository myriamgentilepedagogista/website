import React, { useState, useRef, useTransition } from 'react';
import { BookOpen, X, ArrowRight, Calendar, ChevronRight } from 'lucide-react';
import SEO from './SEO';

interface Article {
  title: string;
  slug: string;
  metaTitle: string;
  metaDesc: string;
  content: React.ReactNode;
  excerpt: string;
  date: string;
}

interface BlogProps {
  onOpenContact: () => void;
}

const articles: Article[] = [
  {
    title: "Cos’è la pedagogia e perché riguarda tutti noi",
    slug: "cos-e-la-pedagogia",
    metaTitle: "Cos’è la pedagogia? Significato e perché riguarda tutti noi",
    metaDesc: "Cos’è la pedagogia e cosa studia? Scopri significato, origini e perché riguarda ogni persona: relazioni educative, contesti e crescita lungo tutto l’arco della vita.",
    date: "20 Maggio 2024",
    excerpt: "Il mio incontro con la pedagogia è stato un colpo di fulmine. Scopriamo insieme perché questa scienza è fondamentale per la crescita lungo tutto l'arco della vita.",
    content: (
      <div className="space-y-8">
        <p>Il mio incontro con la pedagogia, al liceo, è stato un vero e proprio colpo di fulmine.</p>
        <p>Ricordo il fascino esercitato dalle teorie di Rousseau, Comenio, Dewey, Maria Montessori e dagli studi di Harlow, Bandura e Mary Ainsworth: contributi diversi tra loro, ma accomunati da una domanda centrale e profondamente umana — come cresciamo, apprendiamo e diventiamo noi stessi nelle relazioni.</p>
        
        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Pedagogia e scienze umane: un dialogo necessario</h2>
        <p>Questo stesso entusiasmo mi ha accompagnata nelle prime lezioni universitarie di pedagogia generale, in particolare quando si affrontava il rapporto tra la pedagogia e le altre scienze umane, come la psicologia e la sociologia. Una frase, più di tutte, ha orientato il mio sguardo professionale:</p>
        <blockquote className="border-l-4 border-[#D68C70] pl-6 py-2 italic text-xl text-[#4A3F35]">
          la pedagogia non è l’ancella della psicologia, non è figlia di altre scienze, ma dialoga con esse a partire dal proprio rigore, dalla propria dignità e dalla propria solidità scientifica.
        </blockquote>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">La pedagogia è una scienza</h2>
        <p>Sì, perché la pedagogia è una scienza.</p>
        <p>Una scienza che affonda le suas radici nella riflessione filosofica dell’antica Grecia, ma che si struttura come disciplina autonoma tra la fine dell’Ottocento e l’inizio del Novecento, quando inizia a interrogarsi in modo sistematico sui processi educativi, sui contesti e sulle relazioni che li rendono possibili.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Significato della parola pedagogia (etimologia)</h2>
        <p>Il termine pedagogia deriva dal greco <em>paidagogía</em>, dall’unione di <em>país</em> (bambino) e <em>agoghé</em> (condurre, guidare, accompagnare). In origine, il pedagogo era colui che accompagnava il bambino nel percorso tra casa e scuola. Un’immagine che ancora oggi racconta bene l’essenza del lavoro educativo: stare accanto, orientare, sostenere, senza sostituirsi.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Di cosa si occupa la pedagogia</h2>
        <p>L’oggetto di studio della pedagogia è la formazione e l’educazione della persona lungo tutto l’arco della vita. Non si occupa solo dell’infanzia, ma attraversa le diverse età e i molteplici contesti educativi: la famiglia, la scuola, i servizi per l’infanzia, l’adolescenza, la genitorialità, le situazioni di fragilità e di cambiamento.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">A cosa serve la pedagogia nella vita quotidiana</h2>
        <p>In questo senso, la pedagogia è una scienza profondamente pratica. Non offre ricette universali, ma strumenti di lettura, riflessione e intervento per comprendere ciò che accade nelle relazioni educative. Il suo paradigma fondante è la fiducia nell’umano e nella sua educabilità: l’idea che ogni persona possa crescere, apprendere e trasformarsi se sostenuta da contesti competenti, intenzionali e rispettosi.</p>
        
        <p className="pt-6 font-medium border-t border-[#EBE7E0]">
          È da questa visione che nasce il mio lavoro come pedagogista, consulente genitoriale, tutor dell’apprendimento e coordinatrice di servizi educativi 0–6.
        </p>
      </div>
    )
  },
  {
    title: "Che cosa fa un pedagogista, in pratica?",
    slug: "cosa-fa-un-pedagogista",
    metaTitle: "Cosa fa un pedagogista in pratica? Ruolo, ambiti e servizi",
    metaDesc: "Che cosa fa un pedagogista, concretamente? Scopri con chi lavora, dove opera e quali servizi offre: famiglie, scuola, tutoraggio e fragilità.",
    date: "12 Giugno 2024",
    excerpt: "“Ah, quindi… che cosa fai, in pratica?”. Una domanda semplice che merita una risposta chiara. Scopriamo il ruolo del professionista della relazione educativa.",
    content: (
      <div className="space-y-8">
        <p>“Ah, quindi… che cosa fai, in pratica?”</p>
        <p>«Sono una pedagogista.»</p>
        <p>Questa affermazione suscita spesso una domanda semplice ma significativa: che cosa fa, concretamente, un pedagogista? Alzi la mano chi saprebbe rispondere con parole chiare e immediate… probabilmente non sarebbero poi così tante le mani alzate. Proviamo a fare chiarezza.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Che cosa fa un pedagogista?</h2>
        <p>Il pedagogista è un professionista della relazione educativa. Il suo lavoro nasce dalla conoscenza dello sviluppo umano, cognitivo, emotivo, relazionale e sociale, e dalla capacità di progettare, osservare e valutare interventi educativi in diversi contesti.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Con chi può lavorare un pedagogista</h2>
        <p>Può lavorare con:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>bambini</li>
          <li>adolescenti</li>
          <li>giovani adulti</li>
          <li>genitori e famiglie</li>
          <li>educatori ed educatrici dei servizi 0-3 anni</li>
          <li>insegnanti della scuola dell'infanzia, primaria e ordini superiori</li>
          <li>persone in situazione di fragilità e/o marginalità</li>
        </ul>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Dove opera un pedagogista</h2>
        <p>Opera in scuole, servizi per l’infanzia, centri educativi e riabilitativi, aziende, ospedali, cooperative e associazioni. Spesso è parte di équipe multidisciplinari e può avere anche un ruolo di coordinamento e supervisione.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">E io, in concreto, cosa faccio?</h2>
        <p>Ogni giorno accompagno persone, famiglie e professionisti nei percorsi di crescita, apprendimento e sviluppo.</p>

        <div className="grid grid-cols-1 gap-6 mt-8">
          <div className="bg-[#F9F6F1] p-8 rounded-3xl">
            <h3 className="text-2xl font-serif text-[#4A3F35] mb-4">Servizi per genitori e famiglie</h3>
            <p className="text-sm">Accompagno genitori e caregiver nella comprensione delle dinamiche relazionali ed educative quotidiane, offrendo strumenti concreti per sostenere lo sviluppo emotivo, cognitivo e sociale dei bambini e dei ragazzi.</p>
          </div>
          <div className="bg-[#F9F6F1] p-8 rounded-3xl">
            <h3 className="text-2xl font-serif text-[#4A3F35] mb-4">Servizi per insegnanti, educatrici e scuole</h3>
            <p className="text-sm">Affianco professionisti dell’educazione nella progettazione, realizzazione e valutazione di interventi pedagogici e laboratori educativi. Coordino team educativi e supervisiono percorsi formativi.</p>
          </div>
          <div className="bg-[#F9F6F1] p-8 rounded-3xl">
            <h3 className="text-2xl font-serif text-[#4A3F35] mb-4">Servizi di tutoraggio pedagogico</h3>
            <p className="text-sm">Offro supporto individuale per studenti con DSA, ADHD o altre difficoltà di apprendimento, aiutandoli a sviluppare strategie di studio efficaci e personalizzate.</p>
          </div>
        </div>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Dove ricevo</h2>
        <p>Ricevo su appuntamento a <strong>Civitanova Marche</strong> presso lo <strong>Studio Kairos</strong> (Via San Callisto da Caravario 5-G) e offro consulenze <strong>online</strong>.</p>
      </div>
    )
  },
  {
    title: "Perché il ruolo del pedagogista è stato poco riconosciuto",
    slug: "ruolo-pedagogista-riconoscimento",
    metaTitle: "Pedagogista: perché è stato poco riconosciuto e cosa cambia oggi",
    metaDesc: "Per anni il pedagogista è stato confuso con altre professioni. Scopri perché e cosa è cambiato oggi con la Legge 15 aprile 2024, n. 55.",
    date: "05 Luglio 2024",
    excerpt: "Dall'ombra al riconoscimento normativo: scopriamo perché la pedagogia sta riconquistando il suo spazio e cosa dice la nuova Legge 55/2024.",
    content: (
      <div className="space-y-8">
        <h2 className="text-3xl font-serif text-[#4A3F35] mt-6 mb-6">Un ruolo rimasto in ombra per anni</h2>
        <p>Per molti anni, in Italia, la percezione sociale del ruolo del pedagogista è rimasta in ombra, spesso confusa con altre professioni che godono di maggiore riconoscimento culturale, come quella dello psicologo. Questo ha generato scarsa conoscenza delle specificità della scienza pedagogica e dei suoi ambiti di intervento.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Un cambiamento culturale in corso</h2>
        <p>Negli ultimi anni, grazie anche al lavoro divulgativo di molte colleghe e colleghi, la pedagogia sta conquistando spazio nel dibattito sociale e culturale, riaffermando la propria identità scientifica e professionale.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Un quadro normativo più chiaro</h2>
        <p>Una delle ragioni storiche di questo mancato riconoscimento è stata l’assenza di un quadro normativo chiaro. Solo nel 2024 il Parlamento italiano ha introdotto norme specifiche con la <strong>Legge 15 aprile 2024, n. 55</strong> (“Disposizioni in materia di ordinamento delle professioni pedagogiche ed educative e istituzione dei relativi albi professionali”).</p>
        <p>Questa legge ha istituito l’Ordine delle professioni pedagogiche ed educative e gli albi dei pedagogisti e degli educatori professionali socio-pedagogici.</p>
        <p>Rappresenta un passo fondamentale verso maggiore dignità e qualità professionale, garantendo titoli, competenze e percorsi formativi necessari per esercitare la professione con serietà e tutela del cittadino.</p>
      </div>
    )
  }
];

const Blog: React.FC<BlogProps> = ({ onOpenContact }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isPending, startTransition] = useTransition();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleArticleSelect = (article: Article) => {
    startTransition(() => {
      setSelectedArticle(article);
    });
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Spazio Pedagogico",
    "description": "Riflessioni e approfondimenti pedagogici di Myriam Gentile.",
    "blogPost": articles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.excerpt,
      "datePublished": article.date,
      "author": {
        "@type": "Person",
        "name": "Myriam Gentile"
      }
    }))
  };

  return (
    <section id="blog" className="py-24 bg-[#FDFBF7] scroll-mt-24">
      {/* Native LD+JSON hoisting via React 19 */}
      <script type="application/ld+json">
        {JSON.stringify(blogSchema)}
      </script>

      {selectedArticle && (
        <SEO 
          title={selectedArticle.metaTitle} 
          description={selectedArticle.metaDesc} 
          ogType="article"
          canonical={`https://myriamgentilepedagogista.com/blog/${selectedArticle.slug}`}
        />
      )}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#D68C70] font-semibold tracking-widest text-xs uppercase mb-4 block">Approfondimenti</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#4A3F35]">Spazio Pedagogico</h2>
          <p className="text-[#6B5E51] mt-4 font-light max-w-2xl mx-auto">
            Riflessioni, consigli e sguardi pedagogici sulla crescita, l'educazione e il benessere delle relazioni.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[2.5rem] border border-[#F3F0E9] overflow-hidden flex flex-col group hover:shadow-xl transition-all"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A89E92] mb-4">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </div>
                <h3 className="text-2xl font-serif text-[#4A3F35] mb-4 leading-snug group-hover:text-[#D68C70] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[#6B5E51] font-light text-sm leading-relaxed mb-8 flex-grow">
                  {article.excerpt}
                </p>
                <button 
                  onClick={() => handleArticleSelect(article)}
                  className="inline-flex items-center gap-2 text-[#D68C70] font-semibold text-sm group/btn"
                >
                  Leggi l'articolo 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Overlay per lettura articolo */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 overflow-hidden">
          <div 
            className="fixed inset-0 bg-[#4A3F35]/60 backdrop-blur-md transition-opacity" 
            onClick={() => setSelectedArticle(null)}
          ></div>
          <div className="relative bg-white w-full max-w-4xl h-full md:h-auto md:max-h-[90vh] md:rounded-[3rem] shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
            
            {/* Header Modal */}
            <div className="flex items-center justify-between p-6 md:p-10 border-b border-[#F3F0E9] bg-white sticky top-0 z-10">
              <div className="flex items-center gap-4 text-[#D68C70]">
                <BookOpen className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">{selectedArticle.date}</span>
              </div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="p-3 hover:bg-[#F9F6F1] rounded-full transition-colors text-[#A89E92] hover:text-[#4A3F35]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content Modal */}
            <div 
              ref={scrollRef}
              className="p-8 md:p-16 overflow-y-auto text-[#6B5E51] font-light leading-relaxed"
            >
              <h1 className="text-4xl md:text-6xl font-serif text-[#4A3F35] mb-12 leading-tight">
                {selectedArticle.title}
              </h1>
              
              <div className="prose prose-stone max-w-none">
                {selectedArticle.content}
              </div>
              
              {/* Sezione Altri Articoli */}
              <div className="mt-16 pt-10 border-t border-[#F3F0E9]">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#A89E92] mb-8">Continua a leggere</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {articles
                    .filter(a => a.slug !== selectedArticle.slug)
                    .map((other, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleArticleSelect(other)}
                        className="group text-left p-6 md:p-8 bg-[#F9F6F1] hover:bg-[#F3F0E9] rounded-[2rem] transition-all border border-transparent hover:border-[#D68C70]/10"
                      >
                        <span className="text-[10px] uppercase tracking-widest text-[#A89E92] block mb-2">{other.date}</span>
                        <h5 className="text-xl font-serif text-[#4A3F35] group-hover:text-[#D68C70] transition-colors leading-snug flex items-center justify-between gap-4">
                          {other.title}
                          <ChevronRight className="w-5 h-5 shrink-0 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                        </h5>
                      </button>
                    ))}
                </div>
              </div>

              {/* Footer Modal CTA */}
              <div className="mt-20 pt-10 border-t border-[#F3F0E9] flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <p className="text-[#4A3F35] font-serif text-2xl mb-2">Myriam Gentile</p>
                  <p className="text-xs uppercase tracking-widest text-[#A89E92]">Pedagogista e Coordinatrice</p>
                </div>
                <button 
                  onClick={() => {
                    setSelectedArticle(null);
                    onOpenContact();
                  }}
                  className="px-10 py-4 bg-[#4A3F35] text-white rounded-full font-medium hover:bg-[#3A322A] transition-all"
                >
                  Parliamone insieme
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;