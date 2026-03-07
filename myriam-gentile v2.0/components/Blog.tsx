
import React from 'react';
import { Calendar, ArrowRight, Lightbulb, ShieldCheck, Brain, Target, Users, BookOpen, Heart, Sparkles, ChevronRight, GraduationCap } from 'lucide-react';
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
    title: "Quando rivolgersi a un pedagogista: i segnali fondamentali",
    slug: "quando-rivolgersi-pedagogista",
    metaTitle: "Quando rivolgersi a un pedagogista? Segnali per i genitori",
    metaDesc: "Non aspettare che le fatiche diventino problemi. Scopri quando il supporto di un pedagogista è la chiave per l'equilibrio familiare.",
    date: "15 Settembre 2024",
    excerpt: "Spesso i genitori arrivano in consulenza quando sono esausti. Prevenire è possibile: ecco come capire quando chiedere supporto specialistico.",
    content: (
      <div className="space-y-10 text-lg font-light leading-relaxed">
        <section className="bg-[#FDF4E3] p-10 rounded-[2.5rem] border-l-8 border-[#A05A3E] text-[#4A3F35]">
          <h3 className="text-2xl font-serif mb-4 italic">Oltre l'emergenza: la Pedagogia come prevenzione</h3>
          <p className="leading-relaxed">
            La pedagogia studia l’educazione lungo tutto l’arco della vita. Il termine deriva dal greco ‘paidos’ (bambino) e ‘agogé’ (guidare). Tuttavia, nell'immaginario comune, il pedagogista è ancora visto come una figura a cui rivolgersi solo quando 'qualcosa si è rotto'. In realtà, la pedagogia è la scienza della fisiologia dello sviluppo: interviene per ottimizzare, per dare respiro, per prevenire che una normale fatica evolutiva si trasformi in una crisi strutturale della famiglia. In questo articolo esploreremo i due segnali cardine che dovrebbero spingere un genitore a cercare un confronto professionale.
          </p>
        </section>

        <h2 className="text-4xl font-serif text-[#4A3F35] mt-16 mb-8">1. Lo stallo delle tappe evolutive e la crisi della comunicazione</h2>
        <p>
          Il primo segnale riguarda quei momenti in cui la crescita sembra "incepparsi". Ogni bambino attraversa fasi di transizione delicate: lo svezzamento, l'abbandono del pannolino, l'inserimento al nido o alla scuola dell'infanzia, fino alla gestione del sonno. Spesso queste tappe generano conflitti che, se non gestiti, diventano cronici. 
        </p>
        <p>
          Il pedagogista interviene non per "aggiustare" il bambino, ma per aiutare l'adulto a decodificare il segnale. Dietro un rifiuto alimentare o un pianto inconsolabile al momento del distacco non c'è quasi mai un capriccio intenzionale, ma un bisogno evolutivo che chiede di essere visto. Attraverso la <strong>co-regolazione emotiva</strong>, insegniamo al genitore a fungere da ancora esterna per il sistema nervoso del figlio. Quando la fatica quotidiana impedisce di vedere la bellezza della relazione, la <Link to="/servizi/consulenza-genitoriale" className="text-[#A05A3E] font-medium hover:underline">consulenza genitoriale</Link> diventa lo spazio per rinegoziare lo sguardo educativo.
        </p>
        <p>
          Un approfondimento necessario riguarda la <strong>neuroplasticità</strong>. Il cervello infantile è in continua evoluzione e le interazioni con le figure di attaccamento modellano fisicamente le connessioni neuronali. Intervenire precocemente su uno stallo evolutivo significa proteggere lo sviluppo della salute mentale futura del bambino. Il pedagogista agisce come un "traduttore" che permette all'adulto di comprendere il linguaggio non verbale del figlio, riducendo i livelli di cortisolo (stress) nel sistema familiare e promuovendo l'ossitocina (legame).
        </p>

        <h2 className="text-4xl font-serif text-[#4A3F35] mt-16 mb-8">2. La fatica nell'apprendimento e il crollo dell'autostima</h2>
        <p>
          Il secondo segnale emerge con prepotenza nel contesto scolastico. Non parliamo solo di voti bassi, ma di una sofferenza profonda legata al "fare scuola". Quando un bambino o un ragazzo inizia a manifestare ansia da prestazione, evitamento dei compiti, o un senso di inadeguatezza costante ("non sono capace"), siamo di fronte a un campanello d'allarme pedagogico.
        </p>
        <p>
          In questi casi, il focus si sposta sulla <strong>metacognizione</strong>. Molti studenti con DSA (Dislessia, Discalculia, ecc.) o BES vivono l'esperienza scolastica come una serie ininterrotta di fallimenti. Il pedagogista clinico lavora per scardinare la cosiddetta "impotenza appresa", ovvero quella convinzione di non poter cambiare gli esiti dei propri sforzi. Attraverso il <Link to="/servizi/tutoraggio-specialistico" className="text-[#A05A3E] font-medium hover:underline">tutoraggio specialistico</Link>, non ci limitiamo a trasmettere contenuti, ma costruiamo un metodo di studio basato sui punti di forza individuali. 
        </p>
        <p>
          L'adolescenza amplifica questi segnali. Il passaggio alle scuole medie o superiori rappresenta un salto cognitivo enorme: si passa dal pensiero concreto a quello astratto, e le <strong>funzioni esecutive</strong> (pianificazione, memoria di lavoro, inibizione) vengono messe a dura prova. Se il ragazzo non è supportato nel trovare la propria strada, la scuola smette di essere un luogo di scoperta e diventa un luogo di dolore. Rivolgersi a un pedagogista significa prevenire la dispersione scolastica e garantire il diritto al successo formativo, valorizzando l'originalità di ogni mente.
        </p>

        <h2 className="text-4xl font-serif text-[#4A3F35] mt-16 mb-8">Conclusione: Il coraggio di chiedere aiuto</h2>
        <p>
          Educare è un atto politico e sociale, oltre che privato. Chiedere una consulenza non è un'ammissione di fallimento, ma un atto di estrema responsabilità. Significa scegliere di non subire la crescita, ma di abitarla con consapevolezza. La pedagogia della meraviglia è proprio questo: la capacità di vedere la risorsa dove altri vedono solo il limite. Se ti riconosci in questi segnali, il mio studio di <Link to="/#contact" className="text-[#A05A3E] hover:underline">Civitanova Marche</Link> è pronto ad accoglierti per tracciare insieme una nuova rotta.
        </p>
      </div>
    )
  },
  {
    title: "Pedagogista, psicologo ed educatore: come scegliere?",
    slug: "pedagogista-psicologo-educatore-differenze",
    metaTitle: "Pedagogista, psicologo o educatore? Differenze e Scelta",
    metaDesc: "Guida completa per distinguere le figure professionali dell'aiuto. Scopri a chi rivolgerti per il benessere di tuo figlio.",
    date: "28 Settembre 2024",
    excerpt: "Spesso si confondono i ruoli. Fare chiarezza sulle differenze professionali è fondamentale per indirizzare correttamente il bisogno.",
    content: (
      <div className="space-y-10 text-lg font-light leading-relaxed">
        <section className="bg-[#F0F4EE] p-10 rounded-[2.5rem] border-l-8 border-[#55634A] text-[#4A3F35]">
          <h3 className="text-2xl font-serif mb-4 italic">Un'identità professionale chiara (L. 55/2024)</h3>
          <p className="leading-relaxed">
            Per decenni le professioni educative hanno vissuto in una zona grigia. Oggi, grazie alla Legge 15 aprile 2024 n. 55, la figura del <strong>Pedagogista</strong> ha finalmente un riconoscimento giuridico forte come professione di livello apicale. Capire chi fa cosa è il primo passo per non sprecare tempo e risorse economiche in percorsi non idonei.
          </p>
        </section>

        <h2 className="text-4xl font-serif text-[#4A3F35] mt-16 mb-8">Il Pedagogista: L'esperto dei processi formativi</h2>
        <p>
          Il pedagogista è lo specialista che si occupa dei processi educativi, della formazione e dell'apprendimento in ogni fase della vita. Non lavora sulla "malattia" o sul disturbo psichico (ambito dello psicologo), ma sulla <strong>fisiologia della relazione</strong> e sul potenziamento delle risorse. Il suo sguardo è sistemico: osserva il bambino, la famiglia, la scuola e l'ambiente sociale come un tutt'uno interconnesso.
        </p>
        <p>
          In ambito clinico-pedagogico, il pedagogista interviene per prevenire e trattare il disagio educativo. Se tuo figlio ha una diagnosi di DSA o BES, il pedagogista è la figura che progetta il <Link to="/servizi/tutoraggio-specialistico" className="text-[#A05A3E] font-medium hover:underline">piano di intervento educativo</Link>, aiutandolo a trovare strumenti compensativi e strategie di studio efficaci. Collabora con le scuole e coordina i servizi educativi, garantendo che il progetto pedagogico sia coerente e di qualità.
        </p>

        <h2 className="text-4xl font-serif text-[#4A3F35] mt-16 mb-8">Lo Psicologo: Focus sulla salute mentale</h2>
        <p>
          Lo psicologo interviene quando siamo di fronte a una sofferenza psichica, a disturbi del comportamento, dell'umore o della personalità. La sua formazione gli permette di effettuare diagnosi cliniche e, se psicoterapeuta, di condurre percorsi di cura profonda del trauma o della patologia. Se un bambino manifesta fobie gravi, attacchi di panico o sintomi depressivi, lo psicologo è la figura di riferimento primaria.
        </p>
        <p>
          Spesso pedagogista e psicologo collaborano in modo complementare (multidisciplinarità). Ad esempio, in caso di ADHD, lo psicologo può occuparsi della valutazione diagnostica e del supporto terapeutico, mentre il pedagogista lavora sul campo per strutturare l'ambiente di apprendimento e supportare i genitori nella gestione educativa quotidiana.
        </p>

        <h2 className="text-4xl font-serif text-[#4A3F35] mt-16 mb-8">L'Educatore: La professionalità dell'agire quotidiano</h2>
        <p>
          L'Educatore Professionale Socio-Pedagogico è la figura che opera direttamente "in trincea". È colui che attua gli interventi progettati dal pedagogista. Lo troviamo nei nidi, nelle comunità, nell'assistenza domiciliare o scolastica. La sua forza è la <strong>quotidianità</strong>: condivide con l'utente spazi e tempi reali, utilizzando la relazione diretta come strumento di cambiamento.
        </p>

        <h2 className="text-4xl font-serif text-[#4A3F35] mt-16 mb-8">Guida alla scelta: A chi rivolgersi?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-8 rounded-3xl border border-[#EBE7E0] shadow-sm">
            <h4 className="font-bold text-[#4A3F35] mb-4">Pedagogista</h4>
            <ul className="text-sm space-y-2 opacity-80">
              <li>• Difficoltà di studio e metodo</li>
              <li>• Supporto alla genitorialità</li>
              <li>• Coordinamento servizi 0-6</li>
              <li>• Disorientamento educativo</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-[#EBE7E0] shadow-sm">
            <h4 className="font-bold text-[#4A3F35] mb-4">Psicologo</h4>
            <ul className="text-sm space-y-2 opacity-80">
              <li>• Sintomi ansiosi o depressivi</li>
              <li>• Diagnosi neuropsicologiche</li>
              <li>• Elaborazione del lutto/trauma</li>
              <li>• Disturbi della personalità</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-[#EBE7E0] shadow-sm">
            <h4 className="font-bold text-[#4A3F35] mb-4">Educatore</h4>
            <ul className="text-sm space-y-2 opacity-80">
              <li>• Supporto compiti quotidiano</li>
              <li>• Assistenza in sezione (Nido)</li>
              <li>• Interventi domiciliari</li>
              <li>• Animazione socio-culturale</li>
            </ul>
          </div>
        </div>
        <p className="mt-8">
          Compresa la differenza, è importante ricordare che un buon professionista sa quando inviare l'utente a un altro collega. Se hai dubbi sulla situazione di tuo figlio, un primo colloquio informativo nel mio studio di <Link to="/servizi" className="text-[#A05A3E] hover:underline">Civitanova Marche</Link> può aiutarti a fare chiarezza.
        </p>
      </div>
    )
  },
  {
    title: "Supporto pedagogico per bambini e adolescenti: quando serve?",
    slug: "supporto-pedagogico-bambini-adolescenti",
    metaTitle: "Supporto pedagogico per bambini e adolescenti: Guida Completa",
    metaDesc: "Dalle elementari alle superiori: scopri come un supporto pedagogico specialistico potenzia l'autonomia e l'autostima.",
    date: "22 Ottobre 2024",
    excerpt: "L'infanzia e l'adolescenza sono cantieri aperti. Scopri come sostenere lo sviluppo armonico e l'autonomia.",
    content: (
      <div className="space-y-10 text-lg font-light leading-relaxed">
        <section className="bg-[#EBE7E0]/30 p-10 rounded-[2.5rem] border-l-8 border-[#4A3F35] text-[#4A3F35]">
          <h3 className="text-2xl font-serif mb-4 italic">Crescere: un'avventura non lineare</h3>
          <p className="leading-relaxed">
            Ogni fase dello sviluppo porta con sei sfide specifiche. Il supporto pedagogico non è un "parcheggio" per bambini difficili, ma un laboratorio di autonomia dove si apprende a navigare nel mare della complessità. Dalla scuola primaria fino al diploma, il ruolo del pedagogista è quello di facilitatore di processi, un alleato silenzioso ma presente.
          </p>
        </section>

        <h2 className="text-4xl font-serif text-[#4A3F35] mt-16 mb-8">Bambini (6-10 anni): Le fondamenta del sapere</h2>
        <p>
          Nella scuola primaria, il bambino costruisce le basi della propria identity di studente. È qui che si manifestano le prime fatiche legate alla letto-scrittura o al calcolo. Un intervento pedagogico tempestivo in questa fase può fare la differenza tra un bambino che ama imparare e uno che si sente "sbagliato".
        </p>
        <p>
          Lavoriamo molto sulla <strong>consapevolezza fonologica</strong>, sulla grafomotricità e sull'approccio ludico all'apprendimento. Ma soprattutto, lavoriamo sulle emozioni legate all'errore. Insegniamo ai bambini che l'errore non è un fallimento, ma un'informazione preziosa per il cervello. Questo approccio è fondamentale per chi ha un <Link to="/servizi/tutoraggio-specialistico" className="text-[#A05A3E] font-medium hover:underline">Tutoraggio Specialistico</Link> in corso, dove la motivazione è spesso fragile.
        </p>

        <h2 className="text-4xl font-serif text-[#4A3F35] mt-16 mb-8">Preadolescenti e Adolescenti (11-18 anni): La ricerca di senso</h2>
        <p>
          Con l'arrivo della scuola media, il carico cognitivo aumenta vertiginosamente. Gli studenti devono imparare a gestire più insegnanti, più materie e una mole di studio che richiede <strong>funzioni esecutive</strong> solide. Spesso i ragazzi si sentono schiacciati dalla pianificazione o dalla difficoltà di sintetizzare concetti complessi.
        </p>
        <p>
          Il supporto pedagogico in adolescenza si trasforma in un affiancamento strategico. Insegniamo l'uso delle mappe concettuali, l'ascolto attivo e l'organizzazione del tempo. Ma andiamo oltre: supportiamo il ragazzo nella costruzione della sua <strong>autoefficacia</strong>. Un adolescente che sa di avere gli strumenti per affrontare un'interrogazione è un ragazzo più sereno, meno incline all'ansia scolastica e più propenso a esplorare i propri talenti.
        </p>
        <p>
          Inoltre, non possiamo ignorare l'impatto del digitale. Parte del supporto pedagogico moderno riguarda l'<strong>educazione ai media</strong> e l'uso consapevole degli strumenti compensativi digitali (sintesi vocale, software di mappatura). Questi non devono essere visti come "facilitazioni", ma come protesi cognitive che permettono allo studente di esprimere il suo reale potenziale, superando la barriera del disturbo specifico.
        </p>

        <h2 className="text-4xl font-serif text-[#4A3F35] mt-16 mb-8">Il ruolo della famiglia: Non siamo soli</h2>
        <p>
          Ogni percorso con il minore prevede momenti di confronto con i genitori. Non si può cambiare il percorso di un ragazzo senza coinvolgere il sistema in cui vive. Insieme, analizziamo i PDP (Piani Didattici Personalizzati) e cerchiamo di uniformare lo stile comunicativo tra casa e scuola. Se desideri un supporto per tuo figlio a <Link to="/#contact" className="text-[#A05A3E] hover:underline">Civitanova Marche</Link>, il mio studio offre percorsi individualizzati che mettono al centro il benessere del ragazzo e la serenità dei genitori.
        </p>
      </div>
    )
  },
  {
    title: "Che cosa fa un pedagogista, in pratica?",
    slug: "cosa-fa-un-pedagogista",
    metaTitle: "Cosa fa il pedagogista? Attività, Contesti e Metodologia",
    metaDesc: "Oltre la teoria: scopri l'agire pratico del pedagogista in famiglia, a scuola e nelle istituzioni.",
    date: "12 Giugno 2024",
    excerpt: "“Ah, quindi… che cosa fai, in pratica?”. Una domanda semplice che merita una risposta chiara.",
    content: (
      <div className="space-y-10 text-lg font-light leading-relaxed">
        <section className="bg-[#4A3F35] p-10 rounded-[2.5rem] text-white">
          <h3 className="text-2xl font-serif mb-4 italic text-white/90">Il Pedagogista: un regista delle relazioni</h3>
          <p className="leading-relaxed opacity-90">
            Immaginate un regista che non sta sul palco, ma dietro le quinte, assicurandosi che ogni attore (genitore, insegnante, educatore) abbia il copione giusto e la luce migliore per recitare la propria parte. Il pedagogista progetta, monitora e valuta interventi educativi. Non "intrattiene" i bambini, ma costruisce contesti in cui i bambini possano fiorire.
          </p>
        </section>

        <h2 className="text-4xl font-serif text-[#4A3F35] mt-16 mb-8">In Studio: La Consulenza Individuale</h2>
        <p>
          Nella pratica quotidiana dello studio privato, il pedagogista effettua colloqui clinico-pedagogici. Utilizziamo l'osservazione, il colloquio narrativo e strumenti di screening non diagnostici per mappare la situazione. Progettiamo percorsi di <strong>Parent Training</strong> dove insegniamo ai genitori tecniche di gestione dei comportamenti difficili o strategie per favorire l'autonomia.
        </p>
        <p>
          Per i ragazzi, l'attività pratica si declina nel potenziamento cognitivo e nel tutoraggio. Non facciamo "compiti", ma laboratori di <strong>metodo di studio</strong>. Questo significa analizzare come il ragazzo legge, come memorizza, come organizza il diario e il tempo libero. Potete trovare maggiori dettagli nella pagina dedicata ai <Link to="/servizi" className="text-[#A05A3E] hover:underline">miei servizi</Link>.
        </p>

        <h2 className="text-4xl font-serif text-[#4A3F35] mt-16 mb-8">Nelle Scuole e nei Nidi: Il Coordinamento</h2>
        <p>
          Il pedagogista è spesso un <strong>Coordinatore</strong>. In pratica, questo significa osservare le educatrici in sezione, condurre riunioni di equipe, redigere il Progetto Educativo del servizio e gestire le relazioni delicate con le famiglie. Il coordinatore garantisce che il nido non sia un semplice "luogo di custodia", ma un luogo di educazione intenzionale.
        </p>
        <p>
          Negli ultimi tempi, la mia pratica si è estesa ai progetti <strong>PNRR</strong>. Qui il pedagogista lavora come esperto esterno per combattere la dispersione scolastica, attivando percorsi di mentoring per studenti fragili e formazione per i docenti. È un lavoro di rete continuo che richiede competenze negoziali e una profonda conoscenza del sistema scolastico italiano. Se sei un dirigente scolastico, puoi consultare la mia <Link to="/esperienza" className="text-[#A05A3E] hover:underline">esperienza professionale completa</Link> in questo ambito.
        </p>

        <h2 className="text-4xl font-serif text-[#4A3F35] mt-16 mb-8">La formazione e la supervisione</h2>
        <p>
          Infine, il pedagogista è un formatore. Organizzo workshop per genitori ("Aperitivi Pedagogici") e corsi di aggiornamento per professionisti. La supervisione pedagogica è un'altra attività pratica fondamentale: aiuto i team educativi a riflettere sul proprio operato, a sciogliere i nodi conflittuali interni e a ritrovare il senso profondo della propria missione educativa.
        </p>
        <p>
          In sintesi, l'agire pedagogico è un agire trasformativo. Non ci accontentiamo di osservare la realtà, ma lavoriamo costantemente per migliorarla, un passo educativo alla volta. Ti aspetto nel mio studio a <Link to="/#contact" className="text-[#A05A3E] hover:underline">Civitanova Marche</Link> per scoprire cosa possiamo fare, in pratica, per la tua situazione.
        </p>
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
          <span className="text-[#A05A3E] font-semibold tracking-widest text-xs uppercase mb-4 block">Approfondimenti</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#4A3F35]">Spazio Pedagogico</h2>
          <p className="text-[#6B5E51] mt-4 font-light max-w-2xl mx-auto">
            Riflessioni, consigli e sguardi pedagogici sulla crescita e il benessere delle relazioni.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.slice(0, 3).map((article, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] border border-[#F3F0E9] overflow-hidden flex flex-col group hover:shadow-xl transition-all">
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#6B6155] mb-4">
                  <Calendar className="w-3 h-3" /> {article.date}
                </div>
                <h3 className="text-2xl font-serif text-[#4A3F35] mb-4 leading-snug group-hover:text-[#A05A3E] transition-colors">{article.title}</h3>
                <p className="text-[#6B5E51] font-light text-sm leading-relaxed mb-8 flex-grow">{article.excerpt}</p>
                <Link to={`/blog/${article.slug}`} className="inline-flex items-center gap-2 text-[#A05A3E] font-semibold text-sm group/btn hover:underline underline-offset-4">
                  Leggi l'articolo <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 bg-white px-10 py-4 rounded-full border border-[#EBE7E0] text-[#A05A3E] font-medium text-sm group hover:bg-[#F9F6F1] transition-all shadow-sm hover:underline underline-offset-8">
            Leggi tutto lo Spazio Pedagogico <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
