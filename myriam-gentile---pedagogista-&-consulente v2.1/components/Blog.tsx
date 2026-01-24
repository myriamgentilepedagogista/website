
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Article {
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

export const articles: Article[] = [
  {
    title: "Quando rivolgersi a un pedagogista: 7 segnali chiari",
    slug: "quando-rivolgersi-pedagogista",
    metaTitle: "Quando rivolgersi a un pedagogista? 7 segnali per i genitori",
    metaDesc: "Non aspettare che le fatiche diventino problemi. Scopri quando rivolgersi a un pedagogista per ritrovare equilibrio.",
    date: "15 Settembre 2024",
    excerpt: "Spesso i genitori arrivano in consulenza quando sono esausti. Prevenire è possibile: ecco come capire quando chiedere supporto.",
    content: (
      <div className="space-y-8">
        <p className="bg-[#FDF4E3] p-6 rounded-2xl border-l-4 border-[#D68C70] text-[#4A3F35] font-medium leading-relaxed">
          La pedagogia studia l’educazione lungo tutto l’arco della vita. <br />
          Il termine deriva dal greco ‘paidos’ (bambino) e ‘agogé’ (guidare).
        </p>
        <p>Incontrare una fatica educativa non significa aver fallito. Al contrario, accorgersi che le dinamiche familiari si sono appesantite è il primo atto di cura. Se cerchi un supporto diretto, puoi approfondire il mio servizio di <Link to="/servizi/consulenza-genitoriale" className="text-[#D68C70] font-medium hover:underline">consulenza genitoriale specialistica</Link>.</p>
        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Il pedagogista: l'expert della normalità</h2>
        <p>C’è un malinteso: l'idea che si debba andare dallo specialista solo per la patologia. La pedagogia si occupa della fisiologia della crescita. È utile capire <Link to="/blog/pedagogista-psicologo-educatore-differenze" className="text-[#D68C70] font-medium hover:underline">la differenza tra pedagogista e psicologo</Link> per comprendere che il supporto pedagogico non è una terapia, ma un potenziamento delle risorse.</p>
        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">7 Situazioni in cui il supporto pedagogico fa la differenza</h2>
        <div className="space-y-6">
          <div className="bg-[#F9F6F1] p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-3">1. Difficoltà nelle tappe evolutive primarie</h3>
            <p>Sonno frammentato, passaggio al vasino o svezzamento difficile. Per questi temi, il mio percorso di <Link to="/servizi/consulenza-genitoriale" className="text-[#D68C70] hover:underline">Supporto Genitoriale</Link> offre chiavi di lettura concrete.</p>
          </div>
          <div className="bg-[#F9F6F1] p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-3">2. Fatiche nell'inserimento scolastico</h3>
            <p>I passaggi scolastici sono momenti di fragilità. <Link to="/blog/supporto-pedagogico-bambini-adolescenti" className="text-[#D68C70] font-medium hover:underline">Il supporto per adolescenti</Link> è cruciale per prevenire l'ansia da prestazione.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Pedagogista, psicologo ed educatore: come scegliere?",
    slug: "pedagogista-psicologo-educatore-differenze",
    metaTitle: "Pedagogista, psicologo o educatore? Ecco chi scegliere e perché",
    metaDesc: "Confusione tra le figure educative? Scopri le differenze tra pedagogista, psicologo ed educatore.",
    date: "28 Settembre 2024",
    excerpt: "Spesso si confondono i ruoli. Fare chiarezza sulle differenze professionali è fondamentale per indirizzare correttamente il bisogno.",
    content: (
      <div className="space-y-8">
        <p className="bg-[#FDF4E3] p-6 rounded-2xl border-l-4 border-[#D68C70] text-[#4A3F35] font-medium leading-relaxed">
          Scegliere la figura corretta significa dare a tuo figlio il vestito professionale più adatto alla sua crescita.
        </p>
        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Il Pedagogista: l'architetto del potenziale</h2>
        <p>Il pedagogista è lo specialista dei processi formativi. Non fa diagnosi cliniche ma lavora sulla relazione e sul metodo. Se tuo figlio vive una fatica legata ai DSA, scopri come il mio <Link to="/servizi/tutoraggio-specialistico" className="text-[#D68C70] font-medium hover:underline">Tutoraggio Specialistico</Link> può fare la differenza.</p>
        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Guida rapida alla scelta</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F9F6F1] p-6 rounded-3xl">
            <h4 className="font-bold mb-2">Pedagogista</h4>
            <p className="text-sm">Consulenza genitoriale, metodo di studio, coordinamento servizi 0-6. Scopri i miei <Link to="/servizi" className="text-[#D68C70] hover:underline">servizi pedagogici</Link>.</p>
          </div>
          <div className="bg-[#F9F6F1] p-6 rounded-3xl">
            <h4 className="font-bold mb-2">Psicologo</h4>
            <p className="text-sm">Disturbi d'ansia, depressione, diagnosi cliniche, supporto post-traumatico.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Supporto pedagogico per bambini e adolescenti: quando serve?",
    slug: "supporto-pedagogico-bambini-adolescenti",
    metaTitle: "Supporto pedagogico per bambini e adolescenti: quando serve?",
    metaDesc: "Scopri come un supporto pedagogico specialistico aiuta a superare fatiche scolastiche e crisi di crescita.",
    date: "22 Ottobre 2024",
    excerpt: "L'infanzia e l'adolescenza sono cantieri aperti. Scopri come sostenere lo sviluppo armonico e l'autonomia.",
    content: (
      <div className="space-y-8">
        <p>Accompagnare un figlio è un viaggio meraviglioso. Quando sorgono ostacoli, il supporto specialistico interviene come alleato.</p>
        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Il valore del Tutoraggio Specialistico (DSA e BES)</h2>
        <p>Il pedagogista non offre \"ripetizioni\". Offre strumenti compensativi. Se vuoi approfondire questo ambito, visita la pagina dedicata al <Link to="/servizi/tutoraggio-specialistico" className="text-[#D68C70] font-medium hover:underline">Tutoraggio Pedagogico DSA e BES</Link>. Lavorare tempestivamente significa favorire una salute mentale solida, un valore che porto avanti nel mio studio di <Link to="/#contact" className="text-[#D68C70] hover:underline">Civitanova Marche</Link>.</p>
      </div>
    )
  },
  {
    title: "Che cosa fa un pedagogista, in pratica?",
    slug: "cosa-fa-un-pedagogista",
    metaTitle: "Cosa fa il pedagogista? Ecco come aiuta famiglie e bambini",
    metaDesc: "Capire cosa fa il pedagogista in pratica è il primo passo per migliorare l'educazione dei tuoi figli.",
    date: "12 Giugno 2024",
    excerpt: "“Ah, quindi… che cosa fai, in pratica?”. Una domanda semplice che merita una risposta chiara.",
    content: (
      <div className="space-y-8">
        <p>Il pedagogista è un professionista della relazione educativa. Il suo agire attraversa diverse generazioni e contesti, come puoi vedere nella mia sezione <Link to="/esperienza" className="text-[#D68C70] hover:underline">Esperienza e Curriculum</Link>.</p>
        <div className="grid grid-cols-1 gap-6 mt-8">
          <div className="bg-[#F9F6F1] p-8 rounded-3xl">
            <h3 className="text-2xl font-serif text-[#4A3F35] mb-4">Servizi per genitori</h3>
            <p className="text-sm">Strumenti concreti per sostenere lo sviluppo. Vedi il dettaglio della <Link to="/servizi/consulenza-genitoriale" className="text-[#D68C70] hover:underline">Consulenza Genitoriale</Link>.</p>
          </div>
          <div className="bg-[#F9F6F1] p-8 rounded-3xl">
            <h3 className="text-2xl font-serif text-[#4A3F35] mb-4">Servizi per scuole</h3>
            <p className="text-sm">Coordinamento e supervisione. Vedi il dettaglio del <Link to="/servizi/coordinamento-pedagogico" className="text-[#D68C70] hover:underline">Coordinamento 0-6</Link>.</p>
          </div>
        </div>
      </div>
    )
  }
];

const Blog: React.FC<BlogProps> = ({ onOpenContact }) => {
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
      "author": { "@type": "Person", "name": "Myriam Gentile" }
    }))
  };

  return (
    <section id="blog" className="py-24 bg-[#FDFBF7] scroll-mt-24">
      <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#D68C70] font-semibold tracking-widest text-xs uppercase mb-4 block">Approfondimenti</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#4A3F35]">Spazio Pedagogico</h2>
          <p className="text-[#6B5E51] mt-4 font-light max-w-2xl mx-auto">
            Riflessioni, consigli e sguardi pedagogici sulla crescita e il benessere delle relazioni.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.slice(0, 3).map((article, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] border border-[#F3F0E9] overflow-hidden flex flex-col group hover:shadow-xl transition-all">
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A89E92] mb-4">
                  <Calendar className="w-3 h-3" /> {article.date}
                </div>
                <h3 className="text-2xl font-serif text-[#4A3F35] mb-4 leading-snug group-hover:text-[#D68C70] transition-colors">{article.title}</h3>
                <p className="text-[#6B5E51] font-light text-sm leading-relaxed mb-8 flex-grow">{article.excerpt}</p>
                <Link to={`/blog/${article.slug}`} className="inline-flex items-center gap-2 text-[#D68C70] font-semibold text-sm group/btn hover:underline underline-offset-4">
                  Leggi l'articolo <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 bg-white px-10 py-4 rounded-full border border-[#EBE7E0] text-[#D68C70] font-medium text-sm group hover:bg-[#F9F6F1] transition-all shadow-sm hover:underline underline-offset-8">
            Leggi tutto lo Spazio Pedagogico <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
