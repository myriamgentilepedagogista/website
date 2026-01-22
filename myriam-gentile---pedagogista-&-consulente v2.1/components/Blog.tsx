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
    metaDesc: "Non aspettare che le fatiche diventino problemi. Scopri quando rivolgersi a un pedagogista per ritrovare equilibrio e serenità in famiglia.",
    date: "15 Settembre 2024",
    excerpt: "Spesso i genitori arrivano in consulenza quando sono esausti. Ma prevenire è possibile: ecco come capire quando è il momento di chiedere un supporto.",
    content: (
      <div className="space-y-8">
        <p className="bg-[#FDF4E3] p-6 rounded-2xl border-l-4 border-[#D68C70] text-[#4A3F35] font-medium leading-relaxed">
          La pedagogia è la disciplina che studia l’educazione e lo sviluppo della persona lungo tutto l’arco della vita. <br />
          Il termine deriva dal greco ‘paidos’ (bambino) e ‘agogé’ (guidare).
        </p>

        <p>Incontrare una fatica educativa non significa aver fallito come genitori. Al contrario, accorgersi che le dinamiche familiari si sono appesantite è il primo atto di cura verso i propri figli e verso se stessi. Spesso però si tende a rimandare, sperando che il tempo risolva tutto o che si tratti di "una fase", finendo per arrivare dallo specialista quando si è ormai privi di energie e risorse.</p>
        
        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Il pedagogista: l'expert della normalità</h2>
        <p>C’è un grande malinteso: l'idea che si debba andare dallo specialista solo quando c'è una patologia. La pedagogia, invece, si occupa della <strong>fisiologia della crescita</strong>. È utile capire <Link to="/blog/pedagogista-psicologo-educatore-differenze" className="text-[#D68C70] font-medium hover:underline">la differenza tra pedagogista e psicologo</Link> per comprendere che il supporto pedagogico non è una terapia, ma un potenziamento delle risorse educative.</p>
        
        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Un cambio di paradigma: la prevenzione</h2>
        <p>Rivolgersi a un pedagogista significa scegliere di non subire passivamente le crisi evolutive, ma di cavalcarle con consapevolezza. La consulenza pedagogica agisce come una manutenzione della relazione: non serve solo quando il motore è rotto, ma soprattutto per farlo girare meglio.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">7 Situazioni in cui il supporto pedagogico fa la differenza</h2>
        <div className="space-y-6">
          <div className="bg-[#F9F6F1] p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-3">1. Difficoltà nelle tappe evolutive primarie</h3>
            <p>Il sonno frammentato, il passaggio al vasino che sembra non arrivare mai, o le difficoltà nell'alimentazione. Se queste fasi fisiologiche diventano fonte di ansia costante e di scontro quotidiano, un pedagogista può aiutare a rileggere i bisogni del bambino e a ritrovare una routine serena.</p>
          </div>
          <div className="bg-[#F9F6F1] p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-3">2. Crisi di opposizione e gestione dei "no"</h3>
            <p>Quando i famosi 'no' dell'infanzia o dell'adolescenza diventano la regola e le urla l'unico canale comunicativo, è necessario cambiare strategia. La pedagogia offre strumenti per gestire il conflitto senza autoritarismo né permissivismo, basandosi sull'autorevolezza.</p>
          </div>
          <div className="bg-[#F9F6F1] p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-3">3. Fatiche nell'inserimento scolastico</h3>
            <p>Dall'asilo nido alle superiori, i passaggi scolastici sono momenti di grande fragilità. <Link to="/blog/supporto-pedagogico-bambini-adolescenti" className="text-[#D68C70] font-medium hover:underline">Il supporto per bambini e adolescenti</Link> in questi momenti è cruciale per prevenire l'ansia da prestazione o il ritiro sociale.</p>
          </div>
          <div className="bg-[#F9F6F1] p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-3">4. Gestione delle regole e dei confini digitali</h3>
            <p>Oggi le sfide educative passano anche per gli schermi. Capire quanto tempo concedere, quali contenuti e come mediare il rapporto con lo smartphone richiede una cornice educativa solida che il pedagogista può aiutare a costruire.</p>
          </div>
          <div className="bg-[#F9F6F1] p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-3">5. Cambiamenti nella struttura familiare</h3>
            <p>Una separazione, un lutto, o l'arrivo di un fratellino sono terremoti emotivi. Il pedagogista accompagna l'adulto nel saper narrare questi eventi al bambino in modo protettivo e veritiero.</p>
          </div>
        </div>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Non delegare, ma partecipare</h2>
        <p>L'approccio pedagogico non delega la cura del figlio all'esperto. Al contrario, il pedagogista lavora con l'adulto per restituirgli fiducia nel proprio istinto educativo, arricchito da competenze scientifiche. Si tratta di un cammino di consapevolezza che attraversa la storia della <Link to="/blog/pedagogia-significato-etimologia" className="text-[#D68C70] font-medium hover:underline">pedagogia e il suo significato profondo</Link>.</p>
        
        <p>Se senti che la gioia di stare insieme è soffocata dai doveri, dai sensi di colpa e dai conflitti, fermati. Non è necessario avere "problemi gravi" per chiedere un confronto: a volte basta una nuova lente per tornare a vedere la meraviglia in tuo figlio.</p>
      </div>
    )
  },
  {
    title: "Pedagogista, psicologo ed educatore: come scegliere?",
    slug: "pedagogista-psicologo-educatore-differenze",
    metaTitle: "Pedagogista, psicologo o educatore? Ecco chi scegliere e perché",
    metaDesc: "Confusione tra le figure educative? Scopri le differenze tra pedagogista, psicologo ed educatore per scegliere il supporto giusto per tuo figlio.",
    date: "28 Settembre 2024",
    excerpt: "Spesso si confondono i ruoli. Fare chiarezza sulle differenze professionali è fondamentale per indirizzare correttamente il bisogno di supporto.",
    content: (
      <div className="space-y-8">
        <p className="bg-[#FDF4E3] p-6 rounded-2xl border-l-4 border-[#D68C70] text-[#4A3F35] font-medium leading-relaxed">
          La pedagogia è la disciplina che studia l’educazione e lo sviluppo della persona lungo tutto l’arco della vita. <br />
          Il termine deriva dal greco ‘paidos’ (bambino) e ‘agogé’ (guidare).
        </p>

        <p>Quando una famiglia vive un momento di crisi o una difficoltà scolastica, spesso si chiede: 'Da chi dobbiamo andare?'. La confusione è comprensibile: i confini professionali sembrano sfumati, ma le radici dell'intervento sono profondamente diverse. La scelta tra pedagogista, psicologo ed educatore non è solo una questione di titoli, ma di <strong>ambito di intervento e sguardo</strong>.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Il Pedagogista: l'architetto del potenziale</h2>
        <p>Il pedagogista è lo specialista dei processi educativi e formativi. Non fa diagnosi cliniche e non cura patologie mentali nel senso medico del termine. Il suo sguardo è rivolto al <strong>potenziale</strong> della persona, alla sua educabilità. Lavora sulla relazione, sulla comunicazione, sulla progettazione di contesti e sul metodo. Per capire meglio la sua evoluzione, è utile esplorare la <Link to="/blog/pedagogia-significato-etimologia" className="text-[#D68C70] font-medium hover:underline">storia e l'etimologia della pedagogia</Link>.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Lo Psicologo: lo specialista del benessere psichico</h2>
        <p>Lo psicologo si occupa della salute mentale, delle dinamiche intrapsichiche e del funzionamento cognitivo. Interviene quando c'è un disagio clinico, un disturbo della personalità, un trauma profondo o una sofferenza che richiede un approccio psicoterapeutico. Mentre il pedagogista si chiede 'Come possiamo far crescere questa situazione?', lo psicologo spesso indaga 'Cosa ha generato questo blocco e come lo curiamo?'.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">L'Educatore: la figura della quotidianità</h2>
        <p>L'educatore professionale è colui che agisce direttamente sul campo. È la figura che sta accanto al bambino o al ragazzo nei suoi contesti di vita (casa, scuola, strada). Implementa il progetto educativo ideato dal pedagogista o dall'équipe. È un professionista dell'operatività: vive il tempo con il minore, mediando le sue esperienze quotidiane.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">La cooperazione tra figure</h2>
        <p>In un mondo ideale, e spesso nella buona pratica professionale, queste figure collaborano. Un <Link to="/blog/supporto-pedagogico-bambini-adolescenti" className="text-[#D68C70] font-medium hover:underline">supporto per adolescenti</Link> efficace spesso vede lo psicologo lavorare sull'emotività profonda e il pedagogista lavorare sul metodo di studio e sull'autonomia sociale.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Guida rapida alla scelta</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F9F6F1] p-6 rounded-3xl border border-[#D68C70]/10">
            <h4 className="font-bold mb-2">Pedagogista</h4>
            <p className="text-sm">Difficoltà educative, metodo di studio, orientamento, gestione regole, supporto genitorialità, DSA/BES (aspetti didattico-relazionali).</p>
          </div>
          <div className="bg-[#F9F6F1] p-6 rounded-3xl border border-[#D68C70]/10">
            <h4 className="font-bold mb-2">Psicologo</h4>
            <p className="text-sm">Disturbi d'ansia, depressione, diagnosi cliniche, supporto psicologico post-traumatico, disturbi del comportamento alimentare.</p>
          </div>
          <div className="bg-[#F9F6F1] p-6 rounded-3xl border border-[#D68C70]/10">
            <h4 className="font-bold mb-2">Educatore</h4>
            <p className="text-sm">Accompagnamento domiciliare, supporto compiti (operativo), inclusione in contesti aggregativi, assistenza scolastica diretta.</p>
          </div>
        </div>

        <p className="pt-6 font-medium border-t border-[#EBE7E0]">
          È fondamentale sapere <Link to="/blog/quando-rivolgersi-pedagogista" className="text-[#D68C70] font-medium hover:underline">quando rivolgersi a un pedagogista</Link> per agire prima che una difficoltà educativa si cristallizzi in un problema di salute mentale. Scegliere la figura corretta significa dare a tuo figlio il vestito professionale più adatto alla sua crescita.
        </p>
      </div>
    )
  },
  {
    title: "Pedagogia: significato, etimologia e valore moderno",
    slug: "pedagogia-significato-etimologia",
    metaTitle: "Pedagogia: significato, etimologia e perché oggi è così utile",
    metaDesc: "Cos'è la pedagogia? Dalla radice greca alle sfide moderne. Scopri il significato profondo di questa scienza e perché aiuta genitori e figli.",
    date: "10 Ottobre 2024",
    excerpt: "Andiamo alle radici per capire il futuro. La pedagogia non è solo teoria, ma una bussola indispensabile per orientarsi nelle sfide educative di oggi.",
    content: (
      <div className="space-y-8">
        <p className="bg-[#FDF4E3] p-6 rounded-2xl border-l-4 border-[#D68C70] text-[#4A3F35] font-medium leading-relaxed">
          La pedagogia è la disciplina che studia l’educazione e lo sviluppo della persona lungo tutto l’arco della vita. <br />
          Il termine deriva dal greco ‘paidos’ (bambino) e ‘agogé’ (guidare).
        </p>

        <p>Spesso usiamo la parola 'pedagogia' in modo astratto, quasi accademico, dimenticando che è una scienza profondamente legata alla nostra biologia e alle nostre emozioni quotidiane. Capire il suo significato ci permette di valorizzare <Link to="/blog/cosa-fa-un-pedagogista" className="text-[#D68C70] font-medium hover:underline">cosa fa un pedagogista oggi</Link> e perché il suo sguardo è unico.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Etimologia: l'arte dell'accompagnamento</h2>
        <p>Il termine <em>pedagogia</em> ci riporta all'antica Grecia. Il <em>paidagōgós</em> era lo schiavo colto che accompagnava il bambino nel suo percorso tra casa e scuola. Non era il maestro (che insegnava i contenuti), ma colui che si prendeva cura del <strong>cammino</strong>, della sicurezza e dei costumi. Oggi il pedagogista conserva questa missione: non insegna semplicemente nozioni, ma 'accompagna' la persona verso la propria autonomia.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">La pedagogia come scienza dell'educabilità</h2>
        <p>A differenza di altre scienze umane, la pedagogia ha un paradigma fondante: la fiducia nell'educabilità. Significa credere che ogni essere umano, a qualsiasi età e in qualsiasi condizione, possa evolvere se inserito in un contesto relazionale competente. Questo è particolarmente vero nel <Link to="/blog/supporto-pedagogico-bambini-adolescenti" className="text-[#D68C70] font-medium hover:underline">supporto agli adolescenti</Link>, dove la riscoperta del proprio potenziale è la chiave del benessere.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Perché abbiamo bisogno di pedagogia oggi?</h2>
        <p>In un'epoca di frammentazione, dove le informazioni sono infinite ma la saggezza educativa scarseggia, la pedagogia offre una bussola. Ci aiuta a:</p>
        <ul className="list-disc pl-6 space-y-4">
          <li><strong>Decifrare i bisogni:</strong> Spesso i genitori vedono solo il comportamento (il capriccio, il silenzio, il voto basso). La pedagogia aiuta a vedere il bisogno che c'è sotto.</li>
          <li><strong>Progettare il futuro:</strong> Non si limita a tamponare l'emergenza, ma costruisce percorsi a lungo termine.</li>
          <li><strong>Umanizzare la tecnica:</strong> In un mondo di algoritmi, riporta al centro l'incontro umano, il contatto visivo e l'empatia.</li>
        </ul>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Oltre l'infanzia: Lifelong Learning</h2>
        <p>Non commettiamo l'errore di pensare che la pedagogia finisca con la maggiore età. Esiste una pedagogia dell'adulto e dell'anziano. Ovunque ci sia una transizione o un apprendimento, c'è bisogno di pedagogia. Sapere <Link to="/blog/quando-rivolgersi-pedagogista" className="text-[#D68C70] font-medium hover:underline">quando chiedere aiuto</Link> è il primo passo per un'educazione che dura tutta la vita.</p>
        
        <p className="pt-6 italic border-t border-[#EBE7E0]">
          La pedagogia è l'arte di accendere fuochi, non di riempire vasi. È una scienza che celebra la bellezza dell'incompiutezza umana, perché è proprio nell'incompiutezza che risiede la nostra possibilità di crescere sempre.
        </p>
      </div>
    )
  },
  {
    title: "Supporto pedagogico per bambini e adolescenti: quando serve?",
    slug: "supporto-pedagogico-bambini-adolescenti",
    metaTitle: "Supporto pedagogico per bambini e adolescenti: quando serve?",
    metaDesc: "Dall'infanzia all'adolescenza: scopri come un supporto pedagogico specialistico aiuta a superare fatiche scolastiche e crisi di crescita.",
    date: "22 Ottobre 2024",
    excerpt: "L'infanzia e l'adolescenza sono cantieri aperti. Scopri come la pedagogia specialistica può sostenere lo sviluppo armonico e l'autonomia dei più giovani.",
    content: (
      <div className="space-y-8">
        <p className="bg-[#FDF4E3] p-6 rounded-2xl border-l-4 border-[#D68C70] text-[#4A3F35] font-medium leading-relaxed">
          La pedagogia è la disciplina che studia l’educazione e lo sviluppo della persona lungo tutto l’arco della vita. <br />
          Il termine deriva dal greco ‘paidos’ (bambino) e ‘agogé’ (guidare).
        </p>

        <p>Accompagnare un figlio dalla prima infanzia all'età adulta è un viaggio meraviglioso ma costellato di sfide che possono mettere alla prova anche i genitori più attenti. Quando sorgono ostacoli che sembrano insormontabili, il supporto pedagogico specialistico interviene non come un giudizio, ma come un alleato dello sviluppo.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">L'Infanzia: costruire le fondamenta</h2>
        <p>Nei primi anni, il supporto pedagogico si concentra sulla creazione di un ambiente che favorisca l'attaccamento sicuro e l'esplorazione. Interventi su autonomie, gestione delle emozioni (i "capricci") e linguaggio sono fondamentali. Spesso è importante capire <Link to="/blog/quando-rivolgersi-pedagogista" className="text-[#D68C70] font-medium hover:underline">quando rivolgersi a un esperto</Link> per evitare che piccole fatiche si trasformino in blocchi evolutivi.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">L'Adolescenza: una seconda nascita</h2>
        <p>L'adolescenza è il tempo della rinegoziazione. Il ragazzo deve "uccidere" l'immagine del bambino per trovare la propria identità. In questa fase, il supporto pedagogico agisce come un ponte tra le generazioni. Il lavoro si sposta su:</p>
        <ul className="list-disc pl-6 space-y-4">
          <li><strong>Consapevolezza di sé:</strong> Aiutare il ragazzo a dare un nome a ciò che prova.</li>
          <li><strong>Autonomia scolastica:</strong> Sviluppare un metodo di studio che non sia solo "fare i compiti", ma imparare a pensare.</li>
          <li><strong>Orientamento:</strong> Scegliere il percorso futuro basandosi sui propri talenti, non sulle aspettative altrui.</li>
        </ul>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Il valore del Tutoraggio Specialistico (DSA e BES)</h2>
        <p>Quando parliamo di Disturbi Specifici dell'Apprendimento o Bisogni Educativi Speciali, il pedagogista non offre "ripetizioni". Offre <strong>strumenti compensativi e strategie dispensative</strong> che permettono al ragazzo di splendere nonostante le fatiche. È utile conoscere <Link to="/blog/pedagogista-psicologo-educatore-differenze" className="text-[#D68C70] font-medium hover:underline">la differenza tra le figure professionali</Link> per scegliere un supporto che punti all'autonomia, non alla dipendenza dall'adulto.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Perché agire tempestivamente?</h2>
        <p>La neuroplasticità ci dice che il cervello giovane è incredibilmente plasmabile. Intervenire in modo pedagogico durante la crescita significa prevenire disagi futuri e favorire una salute mentale solida. Tutto questo rientra nel <Link to="/blog/pedagogia-significato-etimologia" className="text-[#D68C70] font-medium hover:underline">valore moderno della pedagogia</Link>.</p>
        
        <p className="pt-6 font-medium border-t border-[#EBE7E0]">
          Sostenere un bambino o un adolescente significa credere nel suo futuro. Il mio approccio "Meraki" mette al centro la persona, trasformando la fatica dell'apprendere nella gioia di scoprirsi capaci.
        </p>
      </div>
    )
  },
  {
    title: "Cos’è la pedagogia e perché riguarda tutti noi",
    slug: "cos-e-la-pedagogia",
    metaTitle: "Cos'è la pedagogia? Significato, etimologia e utilità pratica",
    metaDesc: "Scopri cos'è davvero la pedagogia, da dove nasce il termine e perché oggi è la chiave per far crescere al meglio bambini, ragazzi e adulti.",
    date: "20 Maggio 2024",
    excerpt: "Il mio incontro con la pedagogia è stato un colpo di fulmine. Scopriamo insieme perché questa scienza è fondamentale per la crescita lungo tutto l'arco della vita.",
    content: (
      <div className="space-y-8">
        <p className="bg-[#FDF4E3] p-6 rounded-2xl border-l-4 border-[#D68C70] text-[#4A3F35] font-medium leading-relaxed">
          La pedagogia è la disciplina che studia l’educazione e lo sviluppo della persona lungo tutto l’arco della vita. <br />
          Il termine deriva dal greco ‘paidos’ (bambino) e ‘agogé’ (guidare).
        </p>

        <p>Il mio incontro con la pedagogia, al liceo, è stato un vero e proprio colpo di fulmine.</p>
        <p>Ricordo il fascino esercitato dalle teorie di Rousseau, Comenio, Dewey, Maria Montessori e dagli studi di Harlow, Bandura e Mary Ainsworth: contributi diversi tra loro, ma accomunati da una domanda centrale e profondamente umana — come cresciamo, apprendiamo e diventiamo noi stessi nelle relazioni.</p>
        
        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Pedagogia e scienze umane: un dialogo necessario</h2>
        <p>
          Questo stesso entusiasmo mi ha accompagnata nelle prime lezioni universitarie di pedagogia generale. Per capire meglio la sua applicazione pratica, è utile osservare <Link to="/blog/cosa-fa-un-pedagogista" className="text-[#D68C70] font-medium hover:underline">cosa fa il pedagogista oggi</Link> nei diversi contesti educativi. Una frase, più di tutte, ha orientato il mio sguardo professionale:
        </p>
        <blockquote className="border-l-4 border-[#D68C70] pl-6 py-2 italic text-xl text-[#4A3F35]">
          la pedagogia non è l’ancella della psicologia, non è figlia di altre scienze, ma dialoga con esse a partire dal proprio rigore, dalla propria dignità e dalla propria solidità scientifica.
        </blockquote>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">La pedagogia è una scienza</h2>
        <p>Sì, perché la pedagogia è una scienza.</p>
        <p>Una scienza che affonda le sue radici nella riflessione filosofica dell’antica Grecia, ma che si struttura come disciplina autonoma tra la fine dell’Ottocento e l’inizio del Novecento, quando inizia a interrogarsi in modo sistematico sui processi educativi, sui contesti e sulle relazioni che li rendono possibili.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Significato della parola pedagogia (etimologia)</h2>
        <p>In origine, il pedagogo era colui che accompagnava il bambino nel percorso tra casa e scuola. Un’immagine che ancora oggi racconta bene l’essenza del lavoro educativo: stare accanto, orientare, sostenere, senza sostituirsi.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Di cosa si occupa la pedagogia</h2>
        <p>L’oggetto di studio della pedagogia è la formazione e l’educazione della persona lungo tutto l’arco della vita. Non si occupa solo dell’infanzia, ma attraversa le diverse età e contesti. Se ti stai chiedendo <Link to="/faq" className="text-[#D68C70] font-medium hover:underline">quando rivolgersi a un pedagogista</Link>, la risposta risiede spesso nella necessità di trovare nuovi strumenti per la genitorialità o la crescita personale.</p>

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
    metaTitle: "Cosa fa il pedagogista? Ecco come aiuta famiglie e bambini",
    metaDesc: "Capire cosa fa il pedagogista in pratica è il primo passo per migliorare l'educazione dei tuoi figli. Scopri gli ambiti d'intervento e i benefici reali.",
    date: "12 Giugno 2024",
    excerpt: "“Ah, quindi… che cosa fai, in pratica?”. Una domanda semplice che merita una risposta chiara. Scopriamo il ruolo del professionista della relazione educativa.",
    content: (
      <div className="space-y-8">
        <p className="bg-[#FDF4E3] p-6 rounded-2xl border-l-4 border-[#D68C70] text-[#4A3F35] font-medium leading-relaxed">
          La pedagogia è la disciplina che studia l’educazione e lo sviluppo della persona lungo tutto l’arco della vita. <br />
          Il termine deriva dal greco ‘paidos’ (bambino) e ‘agogé’ (guidare).
        </p>

        <p>“Ah, quindi… che cosa fai, in pratica?”</p>
        <p>«Sono una pedagogista.»</p>
        <p>Questa affermazione suscita spesso una domanda semplice ma significativa: che cosa fa, concretamente, un pedagogista? Alzi la mano chi saprebbe rispondere con parole chiare e immediate… probabilmente non sarebbero poi così tante le mani alzate. Proviamo a fare chiarezza.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Che cosa fa un pedagogista?</h2>
        <p>Il pedagogista è un professionista della relazione educativa. Per capire meglio <Link to="/blog/cosa-fa-un-pedagogista" className="text-[#D68C70] font-medium hover:underline">cosa fa il pedagogista oggi</Link>, bisogna guardare alla sua capacità di progettare, osservare e valutare interventi educativi in diversi contesti.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Con chi può lavorare un pedagogista</h2>
        <p>Il suo agire attraversa diverse generazioni. Se vuoi sapere <Link to="/faq" className="text-[#D68C70] font-medium hover:underline">quando rivolgersi a un pedagogista</Link>, sappi che il suo supporto è rivolto a:</p>
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
    metaTitle: "Il ruolo del pedagogista oggi: novità e riconoscimento legale",
    metaDesc: "Perché il ruolo del pedagogista sta cambiando? Scopri cosa prevede la nuova legge e come questa figura sostiene oggi lo sviluppo educativo.",
    date: "05 Luglio 2024",
    excerpt: "Dall'ombra al riconoscimento normativo: scopriamo perché la pedagogia sta riconquistando il suo spazio e cosa dice la nuova Legge 55/2024.",
    content: (
      <div className="space-y-8">
        <p className="bg-[#FDF4E3] p-6 rounded-2xl border-l-4 border-[#D68C70] text-[#4A3F35] font-medium leading-relaxed">
          La pedagogia è la disciplina che studia l’educazione e lo sviluppo della persona lungo tutto l’arco della vita. <br />
          Il termine deriva dal greco ‘paidos’ (bambino) e ‘agogé’ (guidare).
        </p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-6 mb-6">Un ruolo rimasto in ombra per anni</h2>
        <p>Per molti anni, in Italia, la percezione sociale del ruolo del pedagogista è rimasta in ombra. Per comprendere meglio il valore di questa professione, è fondamentale sapere <Link to="/blog/cosa-fa-un-pedagogista" className="text-[#D68C70] font-medium hover:underline">cosa fa il pedagogista oggi</Link> e come può trasformare le fatiche educative in risorse.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Un cambiamento culturale in corso</h2>
        <p>Negli ultimi anni, la pedagogia sta riconquistando spazio nel dibattito sociale. Molti genitori iniziano a capire <Link to="/faq" className="text-[#D68C70] font-medium hover:underline">quando rivolgersi a un pedagogista</Link> per ricevere un supporto che non sia puramente clinico, ma educativo e relazionale.</p>

        <h2 className="text-3xl font-serif text-[#4A3F35] mt-12 mb-6">Un quadro normativo più chiaro</h2>
        <p>Una delle ragioni storiche di questo mancato riconoscimento è stata l’assenza di un quadro normativo chiaro. Solo nel 2024 il Parlamento italiano ha introdotto norme specifiche con la <strong>Legge 15 aprile 2024, n. 55</strong>.</p>
        <p>Questa legge ha istituito l’Ordine delle professioni pedagogiche ed educative e gli albi dei pedagogisti e degli educatori professionali socio-pedagogici.</p>
        <p>Rappresenta un passo fondamentale verso maggiore dignità e qualità professionale, garantendo titoli, competenze e percorsi formativi necessari per esercitare la professione con serietà e tutela del cittadino.</p>
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
      "author": {
        "@type": "Person",
        "name": "Myriam Gentile"
      }
    }))
  };

  return (
    <section id="blog" className="py-24 bg-[#FDFBF7] scroll-mt-24">
      <script type="application/ld+json">
        {JSON.stringify(blogSchema)}
      </script>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#D68C70] font-semibold tracking-widest text-xs uppercase mb-4 block">Approfondimenti</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#4A3F35]">Spazio Pedagogico</h2>
          <p className="text-[#6B5E51] mt-4 font-light max-w-2xl mx-auto">
            Riflessioni, consigli e sguardi pedagogici sulla crescita, l'educazione e il benessere delle relazioni.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.slice(0, 3).map((article, idx) => (
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
                <Link 
                  to={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 text-[#D68C70] font-semibold text-sm group/btn hover:underline underline-offset-4"
                >
                  Leggi l'articolo 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 bg-white px-10 py-4 rounded-full border border-[#EBE7E0] text-[#D68C70] font-medium text-sm group hover:bg-[#F9F6F1] transition-all shadow-sm hover:underline underline-offset-8"
          >
            Leggi tutti gli articoli dello Spazio Pedagogico di Myriam Gentile <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
