import React from 'react';
import Link from 'next/link';
import type { Article } from './Blog';

type ArticleSection = {
  title: string;
  paragraphs?: React.ReactNode[];
  bullets?: React.ReactNode[];
};

type FAQ = {
  question: string;
  answer: React.ReactNode;
};

function ArticleContent({
  intro,
  sections,
  conclusion,
  faqs,
}: {
  intro: React.ReactNode[];
  sections: ArticleSection[];
  conclusion: React.ReactNode[];
  faqs: FAQ[];
}) {
  return (
    <div className="space-y-10 text-lg font-light leading-relaxed">
      <section className="bg-[#FDF4E3] p-10 rounded-[2.5rem] border-l-8 border-[#A05A3E] text-[#4A3F35]">
        {intro.map((paragraph, index) => (
          <p key={index} className="leading-relaxed mb-5 last:mb-0">
            {paragraph}
          </p>
        ))}
      </section>

      {sections.map((section) => (
        <section key={section.title}>
          <h2 className="text-4xl font-serif text-[#4A3F35] mt-16 mb-8">{section.title}</h2>
          {section.paragraphs?.map((paragraph, index) => (
            <p key={index} className="mb-6">
              {paragraph}
            </p>
          ))}
          {section.bullets && (
            <ul className="space-y-3 bg-white p-8 rounded-3xl border border-[#EBE7E0] shadow-sm">
              {section.bullets.map((bullet, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[#A05A3E] shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section>
        <h2 className="text-4xl font-serif text-[#4A3F35] mt-16 mb-8">Conclusione</h2>
        {conclusion.map((paragraph, index) => (
          <p key={index} className="mb-6">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="mt-16 bg-[#F9F6F1] p-8 md:p-10 rounded-[2.5rem] border border-[#EBE7E0]">
        <h2 className="text-4xl font-serif text-[#4A3F35] mb-8">Domande frequenti</h2>
        <div className="space-y-8">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-2xl font-serif text-[#4A3F35] mb-3">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export const articles2026: Article[] = [
  {
    title: "Bambino che non ascolta: cosa fare senza urlare",
    slug: "bambino-che-non-ascolta-cosa-fare-senza-urlare",
    metaTitle: "Bambino che non ascolta: cosa fare senza urlare",
    metaDesc: "Tuo figlio non ascolta e ti ritrovi a urlare? Scopri cause educative, errori da evitare e strategie pratiche per farti ascoltare con calma.",
    date: "18 Aprile 2026",
    excerpt: "Quando un bambino sembra non ascoltare, spesso non serve alzare la voce: serve cambiare il modo in cui l'adulto entra nella relazione.",
    content: (
      <ArticleContent
        intro={[
          <>Hai ripetuto la stessa cosa dieci volte. Hai chiesto di mettere le scarpe, spegnere la televisione, venire a tavola, preparare lo zaino. Niente. A un certo punto senti salire la rabbia, la voce si alza e subito dopo arriva il senso di colpa. Se ti riconosci in questa scena, sappi che non sei un genitore sbagliato: sei un genitore stanco, dentro una dinamica che può essere letta e trasformata.</>,
          <>Il tema del <strong>bambino che non ascolta</strong> è una delle richieste più frequenti in consulenza pedagogica. I genitori arrivano con una domanda molto concreta: “Come faccio a farmi ascoltare senza urlare?”. La risposta non è una frase magica, ma un cambio di prospettiva: l'ascolto del bambino nasce dalla qualità della relazione, dalla chiarezza delle regole e dalla coerenza dell'adulto.</>,
        ]}
        sections={[
          {
            title: "Perché il bambino non ascolta davvero?",
            paragraphs: [
              <>Quando diciamo “mio figlio non ascolta”, spesso intendiamo “non fa quello che gli chiedo”. Ma ascoltare e obbedire non sono la stessa cosa. Un bambino può sentire perfettamente la voce dell'adulto e non riuscire comunque ad attivarsi, perché è immerso nel gioco, è stanco, è sovraccarico, oppure ha imparato che l'adulto ripeterà la richiesta molte volte prima di agire.</>,
              <>Nella vita quotidiana il problema si vede in scene molto semplici: il bambino continua a giocare mentre tu parli dalla cucina, ride quando lo richiami, risponde “arrivo” e poi non si muove, oppure si oppone con un “no” secco. Questo non significa automaticamente mancanza di rispetto. Significa che c'è un passaggio educativo da costruire: aiutare il bambino a passare dal suo desiderio immediato alla richiesta dell'adulto.</>,
            ],
          },
          {
            title: "Le cause pedagogiche: attenzione, regole e relazione",
            paragraphs: [
              <>Un bambino non nasce con la capacità di autoregolarsi. La impara nel tempo, attraverso adulti che danno confini chiari e restano presenti anche quando lui protesta. Spesso il “non ascolto” nasce da richieste troppo lunghe, comandi dati a distanza, regole che cambiano in base alla stanchezza del momento o routine poco prevedibili.</>,
              <>C'è poi un aspetto emotivo: se il bambino percepisce che l'adulto arriva solo quando è arrabbiato, imparerà ad attivarsi solo davanti all'urlo. Non perché sia cattivo, ma perché il suo sistema ha associato l'azione al picco di tensione. In pedagogia lavoriamo proprio su questo: riportare l'autorevolezza prima dell'esplosione.</>,
            ],
            bullets: [
              <>Richieste brevi e concrete funzionano meglio di spiegazioni lunghe.</>,
              <>Il contatto visivo aiuta più del comando urlato da un'altra stanza.</>,
              <>Le routine ripetute riducono lo scontro perché rendono prevedibile cosa accade.</>,
              <>La coerenza tra adulti evita che il bambino cerchi continuamente il varco.</>,
            ],
          },
          {
            title: "Cosa non fare quando tuo figlio non ascolta",
            paragraphs: [
              <>La prima cosa da evitare è entrare in una gara di forza. Urlare può funzionare nell'immediato, ma nel tempo consuma la relazione e alza la soglia: oggi serve un tono alto, domani servirà ancora più energia. Anche minacciare punizioni sproporzionate è poco utile, soprattutto quando poi non vengono mantenute.</>,
              <>Un altro errore frequente è fare troppe domande quando in realtà serve una guida: “Ti vuoi vestire?”, “Andiamo?”, “Spegni la tv, per favore?” Se non c'è una reale possibilità di scelta, meglio non presentarla come scelta. Il bambino ha bisogno di adulti gentili, non confusi.</>,
            ],
            bullets: [
              <>Non ripetere la richiesta all'infinito: insegna ad aspettare l'ultima chiamata.</>,
              <>Non trasformare ogni momento in una lezione morale.</>,
              <>Non usare etichette come “sei maleducato” o “non capisci mai”.</>,
              <>Non promettere conseguenze che sai già di non voler mantenere.</>,
            ],
          },
          {
            title: "Cosa fare: strategie pratiche per farsi ascoltare senza urlare",
            paragraphs: [
              <>Avvicinati, abbassati alla sua altezza, chiama il bambino per nome e formula una richiesta alla volta. “Luca, scarpe. Adesso.” può essere più efficace di un discorso di tre minuti. Dopo la richiesta, lascia qualche secondo di tempo: i bambini hanno bisogno di passare mentalmente da un'attività all'altra.</>,
              <>Usa poche regole, ma molto chiare. Per esempio: “Prima ci si lava, poi si gioca”, “Quando chiamo per la cena, il gioco si mette in pausa”, “Il tablet si spegne quando suona il timer”. Le regole funzionano se non dipendono dall'umore del genitore, ma diventano parte della vita familiare.</>,
            ],
            bullets: [
              <>Dai una richiesta alla volta: chiara, breve, possibile.</>,
              <>Usa il contatto fisico leggero se il bambino lo accetta: una mano sulla spalla aiuta a riportare attenzione.</>,
              <>Anticipa i passaggi: “Tra cinque minuti spegniamo e andiamo in bagno”.</>,
              <>Offri scelte limitate: “Metti prima le scarpe o la felpa?”.</>,
              <>Riconosci la collaborazione: “Hai fatto fatica a fermarti, ma sei venuto. Questo è importante”.</>,
            ],
          },
          {
            title: "Quando contattare una pedagogista",
            paragraphs: [
              <>Può essere utile chiedere una consulenza pedagogica quando il non ascolto diventa quotidiano, quando in casa si urla spesso, quando le routine sono sempre una battaglia o quando mamma e papà non riescono più a trovare una linea comune. Non serve aspettare che la situazione esploda.</>,
              <>Il lavoro pedagogico aiuta a leggere la dinamica, non a colpevolizzare la famiglia. Si osservano le routine, il linguaggio usato, le regole, i momenti critici della giornata e si costruiscono strategie sostenibili. Se senti che la relazione con tuo figlio è diventata una continua trattativa, <Link href="/#contact" className="text-[#A05A3E] hover:underline">possiamo parlarne insieme</Link>.</>,
            ],
          },
        ]}
        conclusion={[
          <>Un bambino che non ascolta non è un bambino “sbagliato”. È un bambino che sta ancora imparando a regolare desideri, frustrazione e tempi della vita quotidiana. E un genitore che urla non è un cattivo genitore: è un adulto che ha bisogno di strumenti nuovi.</>,
          <>La buona notizia è che la relazione educativa può cambiare. Con confini chiari, presenza calma e strategie concrete, l'ascolto può diventare una competenza familiare. Se vuoi ritrovare più serenità nelle giornate, una consulenza pedagogica può aiutarti a costruire un modo più efficace e meno faticoso di guidare tuo figlio.</>,
        ]}
        faqs={[
          { question: "Perché mio figlio mi ascolta solo quando urlo?", answer: <>Perché probabilmente ha imparato che l'urlo è il vero segnale di azione. Serve ricostruire richieste chiare e conseguenze coerenti prima di arrivare alla rabbia.</> },
          { question: "Un bambino che non ascolta è maleducato?", answer: <>Non sempre. Può essere stanco, immerso nel gioco, poco abituato alle routine o in difficoltà con i limiti. Va osservata la dinamica, non solo il comportamento.</> },
          { question: "Come posso farmi ascoltare senza punizioni?", answer: <>Usa poche regole chiare, richieste brevi, anticipazioni e conseguenze naturali. La fermezza non coincide con la punizione.</> },
          { question: "A che età un bambino dovrebbe ascoltare?", answer: <>L'ascolto cresce gradualmente. Anche a 6 o 7 anni un bambino ha bisogno di guida, routine e adulti coerenti per autoregolarsi.</> },
          { question: "Quando il non ascolto diventa un problema?", answer: <>Quando è costante, crea conflitti quotidiani, compromette scuola o routine familiari e lascia gli adulti senza strumenti.</> },
          { question: "La pedagogista può aiutare con le regole in casa?", answer: <>Sì. La consulenza pedagogica aiuta i genitori a costruire regole sostenibili, routine chiare e modalità comunicative più efficaci.</> },
        ]}
      />
    ),
  },
  {
    title: "Capricci nei bambini: cause reali e come gestirli davvero",
    slug: "capricci-nei-bambini-cause-come-gestirli",
    metaTitle: "Capricci nei bambini: cause reali e come gestirli",
    metaDesc: "Capricci nei bambini: cosa significano davvero, cosa evitare e strategie pratiche per gestire crisi emotive con fermezza e calma.",
    date: "7 Aprile 2026",
    excerpt: "Dietro un capriccio spesso c'è un bisogno non ancora espresso bene: capire la causa cambia il modo di intervenire.",
    content: (
      <ArticleContent
        intro={[
          <>Il capriccio arriva quasi sempre nel momento peggiore: al supermercato, davanti alla scuola, quando sei in ritardo, quando hai già avuto una giornata piena. Il bambino urla, si irrigidisce, piange, dice no a tutto. Tu senti gli sguardi degli altri, provi vergogna, rabbia, impotenza. E magari pensi: “Lo sta facendo apposta”.</>,
          <>In realtà i <strong>capricci nei bambini</strong> non sono semplicemente una sfida all'autorità. Sono una forma immatura di comunicazione. Questo non significa lasciare fare tutto, ma imparare a leggere cosa sta succedendo e intervenire con una fermezza che non umilia.</>,
        ]}
        sections={[
          {
            title: "Che cosa sono davvero i capricci",
            paragraphs: [
              <>Nel linguaggio comune chiamiamo capriccio tutto ciò che ci mette in difficoltà: pianto, rifiuto, opposizione, richiesta insistente. Dal punto di vista pedagogico, però, è utile distinguere. A volte il bambino sta esprimendo frustrazione, altre volte stanchezza, fame, bisogno di attenzione, difficoltà a lasciare un'attività piacevole o incapacità di tollerare un no.</>,
              <>Il bambino piccolo non ha ancora gli strumenti per dire: “Sono deluso perché desideravo quella cosa e non riesco a calmarmi”. Allora lo mostra con il corpo. Il punto non è evitare ogni crisi, ma trasformare quei momenti in occasioni di apprendimento emotivo.</>,
            ],
          },
          {
            title: "Le cause reali dei capricci nei bambini",
            paragraphs: [
              <>Molti capricci nascono da bisogni molto concreti. Un bambino stanco regge meno la frustrazione. Un bambino affamato collabora meno. Un bambino che ha vissuto una giornata piena può crollare davanti a una piccola richiesta. Questo non rende il comportamento accettabile in ogni forma, ma ci aiuta a intervenire sulla causa e non solo sul rumore.</>,
              <>Ci sono poi cause educative: regole poco chiare, adulti che dicono no e poi cedono, troppe spiegazioni durante la crisi, uso frequente di premi o minacce. Se il bambino impara che urlando ottiene ciò che desidera, ripeterà quella strategia. Non per manipolare in modo adulto, ma perché ha funzionato.</>,
            ],
            bullets: [
              <>Fame, sonno e sovraccarico rendono più probabile la crisi.</>,
              <>I passaggi improvvisi aumentano l'opposizione.</>,
              <>Il no incoerente crea più capricci del no fermo.</>,
              <>Alcuni bambini hanno una sensibilità più intensa e faticano di più a calmarsi.</>,
            ],
          },
          {
            title: "Cosa non fare davanti a un capriccio",
            paragraphs: [
              <>La tentazione più forte è spegnere il capriccio subito: urlare, minacciare, cedere, distrarre con il telefono, promettere un premio. Tutte strategie comprensibili quando si è stanchi, ma poco utili nel lungo periodo. Se cedo sempre, il bambino impara che la crisi cambia la regola. Se urlo sempre, impara che le emozioni si gestiscono con la forza.</>,
              <>Durante una crisi emotiva il bambino non è disponibile a una grande spiegazione. Il cervello è in allarme, il corpo è acceso. Fare una predica in quel momento è come spiegare il codice della strada mentre l'auto sta sbandando. Prima si mette in sicurezza, poi si ragiona.</>,
            ],
            bullets: [
              <>Non ridicolizzare: “Smettila, sembri piccolo”.</>,
              <>Non cedere solo per farlo tacere, se la regola è importante.</>,
              <>Non fare lunghi discorsi nel picco della crisi.</>,
              <>Non usare il cellulare come tappo emotivo automatico.</>,
            ],
          },
          {
            title: "Come gestire i capricci: passi pratici",
            paragraphs: [
              <>Prima di tutto, abbassa il volume della scena. Poche parole, tono calmo, corpo stabile. Puoi dire: “Vedo che sei arrabbiato. Il gioco resta qui. Io sono con te”. Questa frase contiene tre cose: riconoscimento emotivo, limite, presenza. Sono le tre colonne della gestione educativa dei capricci.</>,
              <>Quando la crisi scende, allora si può riparare: “Prima eri molto arrabbiato. Puoi arrabbiarti, ma non puoi tirare gli oggetti. La prossima volta puoi battere i piedi o chiedere aiuto”. Il bambino ha bisogno di alternative pratiche, non solo di sentirsi dire cosa non deve fare.</>,
            ],
            bullets: [
              <>Anticipa: “Entriamo al supermercato per comprare pane e latte. Non compriamo giochi”.</>,
              <>Nomina l'emozione: “Sei deluso, lo capisco”.</>,
              <>Mantieni il limite: “La risposta resta no”.</>,
              <>Rimani vicino senza invadere, se il bambino non vuole essere toccato.</>,
              <>Dopo la crisi, insegna una strategia alternativa.</>,
            ],
          },
          {
            title: "Quando contattare una pedagogista",
            paragraphs: [
              <>È utile chiedere supporto quando i capricci sono molto frequenti, intensi, difficili da contenere o quando condizionano tutta la vita familiare. Anche se i genitori si sentono sempre in colpa o sempre arrabbiati, è il momento di fermarsi e rileggere la situazione.</>,
              <>La pedagogista aiuta a distinguere tra crisi evolutive normali, abitudini educative da riorganizzare e segnali che meritano una rete più ampia. L'obiettivo non è avere bambini sempre tranquilli, ma bambini accompagnati da adulti più sicuri. Per un confronto personalizzato puoi <Link href="/#contact" className="text-[#A05A3E] hover:underline">richiedere una consulenza</Link>.</>,
            ],
          },
        ]}
        conclusion={[
          <>I capricci non sono una prova da vincere contro tuo figlio. Sono un pezzo del suo percorso di crescita. Ogni volta che un adulto riesce a tenere insieme empatia e limite, il bambino impara qualcosa sul mondo e su di sé.</>,
          <>Non serve essere perfetti. Serve avere una direzione. Se senti che in casa i capricci stanno occupando troppo spazio, chiedere aiuto può restituire calma, strumenti e fiducia.</>,
        ]}
        faqs={[
          { question: "I capricci sono normali?", answer: <>Sì, soprattutto nei primi anni. Diventano da osservare quando sono molto intensi, frequenti o ingestibili nella vita quotidiana.</> },
          { question: "Devo ignorare i capricci?", answer: <>Non sempre. Puoi ignorare alcune provocazioni lievi, ma una crisi emotiva va contenuta con presenza, poche parole e limiti chiari.</> },
          { question: "Se cedo una volta rovino tutto?", answer: <>No. Conta la direzione generale. Però se cedere diventa la regola, il bambino impara che la crisi è efficace.</> },
          { question: "Come fermare un capriccio in pubblico?", answer: <>Riduci gli stimoli, parla poco, mantieni il limite e spostati se serve. L'obiettivo non è salvare l'apparenza, ma guidare il bambino.</> },
          { question: "Capricci e crisi emotive sono la stessa cosa?", answer: <>Non sempre. Alcune crisi sono scariche emotive intense, non richieste volontarie. Osservare causa, durata e contesto aiuta a capirlo.</> },
          { question: "Quando serve una consulenza?", answer: <>Quando le crisi sono quotidiane, la famiglia è esausta o non si riesce più a mantenere regole senza urlare o cedere sempre.</> },
        ]}
      />
    ),
  },
  {
    title: "Uso del cellulare nei bambini: limiti, rischi e regole pratiche",
    slug: "uso-cellulare-bambini-limiti-rischi-regole",
    metaTitle: "Uso del cellulare nei bambini: limiti e regole pratiche",
    metaDesc: "Cellulare e bambini: rischi, limiti educativi e regole pratiche per gestire smartphone, video e giochi senza guerre quotidiane.",
    date: "21 Marzo 2026",
    excerpt: "Il problema non è solo quanto tempo passano davanti allo schermo, ma che posto occupa il cellulare nella vita emotiva e familiare.",
    content: (
      <ArticleContent
        intro={[
          <>“Ancora cinque minuti”. Poi diventano venti. Quando provi a togliere il cellulare, tuo figlio protesta, piange, si arrabbia, sembra non riuscire a staccarsi. Molti genitori oggi vivono la stessa fatica: sanno che lo smartphone non può diventare babysitter, premio, calmante e passatempo unico, ma non sanno come mettere limiti senza scatenare una guerra.</>,
          <>L'<strong>uso del cellulare nei bambini</strong> è una questione educativa, non solo tecnologica. Non basta installare un'app di controllo: serve costruire abitudini, regole e alternative reali. Il digitale fa parte della vita, ma non può sostituire corpo, gioco, relazione, noia e autonomia.</>,
        ]}
        sections={[
          {
            title: "Perché il cellulare attira così tanto i bambini",
            paragraphs: [
              <>Lo smartphone offre stimoli rapidi, colori, suoni, ricompense continue. Per un bambino è molto più facile restare agganciato a un video breve che tollerare la lentezza di un pomeriggio senza programma. Il problema non è che il bambino “non ha volontà”, ma che il dispositivo è progettato per catturare attenzione.</>,
              <>Quando il cellulare entra in ogni momento difficile - attesa al ristorante, capriccio, noia in auto, stanchezza del genitore - diventa una stampella emotiva. Il bambino non allena più la capacità di aspettare, inventare, annoiarsi, calmarsi con l'aiuto dell'adulto.</>,
            ],
          },
          {
            title: "Rischi educativi: non solo schermo, ma relazione",
            paragraphs: [
              <>I rischi principali non riguardano solo i minuti davanti allo schermo. Riguardano cosa viene tolto: movimento, gioco libero, sonno, dialogo, attenzione condivisa. Un uso eccessivo del cellulare può rendere più faticosi i passaggi quotidiani, aumentare irritabilità e ridurre la motivazione verso attività meno immediate.</>,
              <>C'è anche un tema di autoregolazione. Se il bambino usa lo schermo ogni volta che prova frustrazione, non impara gradualmente a stare dentro quella frustrazione. E quando l'adulto spegne, la crisi diventa più intensa perché non sta togliendo solo un oggetto: sta togliendo una strategia di calma.</>,
            ],
            bullets: [
              <>Sonno più fragile, soprattutto se lo schermo è usato la sera.</>,
              <>Minore tolleranza dell'attesa e della noia.</>,
              <>Conflitti frequenti al momento di spegnere.</>,
              <>Riduzione del gioco corporeo, simbolico e creativo.</>,
              <>Esposizione a contenuti non adatti se manca supervisione.</>,
            ],
          },
          {
            title: "Cosa non fare con smartphone e tablet",
            paragraphs: [
              <>Non usare il cellulare come unica risposta alla fatica. È comprensibile, perché a volte funziona subito. Ma se diventa automatico, nel tempo aumenta il problema. Evita anche regole vaghe come “poco telefono” o “non troppo”: per un bambino sono concetti elastici e trattabili.</>,
              <>Attenzione anche ai divieti improvvisi dopo settimane di uso libero. Togliere tutto da un giorno all'altro può creare una battaglia enorme. Meglio introdurre regole chiare, progressive e spiegate, sostenute da alternative concrete.</>,
            ],
            bullets: [
              <>Non lasciare il telefono in camera di notte.</>,
              <>Non usare video e giochi come premio per ogni comportamento corretto.</>,
              <>Non minacciare “non lo vedrai mai più” se poi non è vero.</>,
              <>Non lasciare il bambino solo nella scelta dei contenuti.</>,
            ],
          },
          {
            title: "Regole pratiche per gestire il cellulare",
            paragraphs: [
              <>Le regole funzionano quando sono visibili, ripetute e sostenibili. Scegli momenti precisi, non trattative infinite. Per esempio: “Cartoni dopo merenda per venti minuti”, “Niente schermi a tavola”, “Il telefono resta fuori dalla camera”, “Si spegne quando suona il timer”.</>,
              <>La regola più importante è l'esempio adulto. Se chiediamo ai bambini di staccarsi mentre noi controlliamo continuamente notifiche, il messaggio perde forza. Non serve essere perfetti, ma coerenti: creare zone e tempi della casa senza schermi vale per tutti.</>,
            ],
            bullets: [
              <>Definisci quando si usa, per quanto tempo e dove.</>,
              <>Usa un timer esterno, non la promessa “ancora un video”.</>,
              <>Prepara il passaggio: “Tra cinque minuti spegniamo”.</>,
              <>Offri alternative già pronte: costruzioni, disegno, movimento, aiuto in cucina.</>,
              <>Mantieni alcune zone libere: tavola, camera, momenti prima del sonno.</>,
            ],
          },
          {
            title: "Quando contattare una pedagogista",
            paragraphs: [
              <>Può essere utile chiedere supporto se il bambino reagisce con crisi intense quando lo schermo viene tolto, se il cellulare è diventato indispensabile per mangiare, dormire o calmarsi, oppure se i genitori non riescono a stabilire regole comuni.</>,
              <>In consulenza pedagogica si lavora su routine digitali realistiche, alternative educative e coerenza familiare. Non si demonizza la tecnologia: si rimette al suo posto. Se vuoi costruire regole digitali più serene, <Link href="/#contact" className="text-[#A05A3E] hover:underline">possiamo definire insieme un piano sostenibile</Link>.</>,
            ],
          },
        ]}
        conclusion={[
          <>Il cellulare non è il nemico. Il problema nasce quando diventa sempre disponibile, sempre consolatorio, sempre più interessante della vita reale. I bambini hanno bisogno di adulti che sappiano dire sì e no con cura.</>,
          <>Mettere limiti non significa essere rigidi: significa proteggere spazio mentale, sonno, relazione e gioco. Piccole regole costanti possono cambiare molto più di grandi divieti urlati.</>,
        ]}
        faqs={[
          { question: "A che età dare il cellulare a un bambino?", answer: <>Non esiste un'età uguale per tutti, ma prima di un uso personale servono maturità, regole e supervisione. Nei bambini piccoli è preferibile un uso limitato e condiviso.</> },
          { question: "Quanto tempo di schermo è troppo?", answer: <>Dipende da età, contenuti e contesto. Diventa troppo quando sostituisce sonno, gioco, movimento, relazione e autonomia.</> },
          { question: "Come togliere il cellulare senza crisi?", answer: <>Anticipa, usa un timer, mantieni la regola e offri un passaggio alternativo. Le prime proteste non significano che la regola sia sbagliata.</> },
          { question: "Il cellulare fa male ai bambini?", answer: <>Non è l'oggetto in sé, ma l'uso eccessivo, non supervisionato o usato come calmante continuo a creare rischi educativi.</> },
          { question: "Meglio vietare del tutto?", answer: <>Di solito è più utile educare all'uso che vietare senza progetto. Alcuni momenti, però, dovrebbero restare senza schermi.</> },
          { question: "La pedagogista può aiutare sulle regole digitali?", answer: <>Sì. Può aiutare la famiglia a costruire limiti realistici, routine e alternative adatte all'età del bambino.</> },
        ]}
      />
    ),
  },
  {
    title: "Ansia nei bambini: segnali da non ignorare e come aiutarli",
    slug: "ansia-nei-bambini-segnali-come-aiutarli",
    metaTitle: "Ansia nei bambini: segnali da non ignorare",
    metaDesc: "Ansia nei bambini: segnali fisici ed emotivi, cosa non fare e come aiutare tuo figlio con strategie educative e supporto pedagogico.",
    date: "9 Marzo 2026",
    excerpt: "L'ansia nei bambini non sempre si presenta con parole chiare: spesso passa dal corpo, dal sonno, dalla scuola e dai piccoli rifiuti quotidiani.",
    content: (
      <ArticleContent
        intro={[
          <>Un bambino ansioso non sempre dice “ho paura”. A volte dice “mi fa male la pancia”, “non voglio andare a scuola”, “resta con me”, “non ce la faccio”. Altre volte diventa irritabile, controllante, oppositivo. I genitori lo vedono cambiare e si chiedono se sia una fase o qualcosa da prendere sul serio.</>,
          <>Parlare di <strong>ansia nei bambini</strong> richiede delicatezza. Non tutto è patologico e non ogni paura deve allarmare. Ma alcuni segnali meritano ascolto, perché dietro l'ansia può esserci un bambino che sta chiedendo sicurezza, prevedibilità e adulti capaci di aiutarlo a dare un nome a ciò che sente.</>,
        ]}
        sections={[
          {
            title: "Come si manifesta l'ansia nei bambini",
            paragraphs: [
              <>L'ansia infantile può manifestarsi in modo diverso da quella degli adulti. Il bambino può non avere le parole per spiegare cosa prova, quindi il corpo parla al posto suo. Mal di pancia prima di uscire, mal di testa, nausea, difficoltà ad addormentarsi, risvegli frequenti, pianto al distacco, bisogno continuo di rassicurazioni.</>,
              <>A volte l'ansia si traveste da rabbia. Un bambino spaventato può diventare rigido, dire no, evitare compiti, reagire male davanti a novità o errori. Se guardiamo solo il comportamento, rischiamo di leggere sfida dove c'è paura.</>,
            ],
            bullets: [
              <>Paure intense o persistenti rispetto all'età.</>,
              <>Rifiuto della scuola, dello sport o di situazioni sociali.</>,
              <>Domande ripetute per cercare rassicurazione.</>,
              <>Sintomi fisici ricorrenti senza causa organica evidente.</>,
              <>Perfezionismo, paura di sbagliare, blocco davanti alle prove.</>,
            ],
          },
          {
            title: "Le cause: cosa può alimentare l'ansia",
            paragraphs: [
              <>Le cause possono essere molte: temperamento sensibile, cambiamenti familiari, pressioni scolastiche, esperienze di separazione, difficoltà relazionali, richieste troppo alte o adulti molto preoccupati. Non si tratta di cercare un colpevole, ma di capire quali condizioni stanno rendendo il mondo del bambino troppo pesante.</>,
              <>In pedagogia osserviamo l'ambiente educativo: routine, aspettative, linguaggio, autonomia, rapporto con l'errore. Un bambino che sente di dover sempre fare bene può vivere ogni compito come una minaccia. Un bambino poco allenato all'autonomia può percepire ogni distacco come troppo grande.</>,
            ],
          },
          {
            title: "Cosa non fare davanti all'ansia",
            paragraphs: [
              <>La frase “non è niente” nasce spesso dal desiderio di rassicurare, ma può far sentire il bambino non compreso. Anche evitare sempre ciò che fa paura può peggiorare la situazione: nell'immediato calma, ma nel tempo conferma al bambino che quella situazione è davvero pericolosa.</>,
              <>Non serve nemmeno spingere con durezza: “Devi farlo e basta”. L'ansia non si supera con la vergogna. Si accompagna con passi graduali, adulti affidabili e parole che tengono insieme realtà e fiducia.</>,
            ],
            bullets: [
              <>Non minimizzare: “Non fare storie”.</>,
              <>Non sostituirti sempre al bambino per evitargli fatica.</>,
              <>Non trasformare ogni paura in emergenza.</>,
              <>Non usare paragoni con fratelli o compagni più sicuri.</>,
            ],
          },
          {
            title: "Come aiutare un bambino ansioso",
            paragraphs: [
              <>Il primo passo è nominare: “Mi sembra che questa cosa ti preoccupi”. Dare parole all'emozione riduce la confusione. Poi serve costruire piccoli passi. Se il bambino teme di dormire da solo, non si passa dal lettone alla porta chiusa in una sera. Si crea una gradualità sostenibile.</>,
              <>Aiuta molto separare il bambino dalla sua ansia: “Tu non sei la paura. La paura è una cosa che arriva e che possiamo imparare a conoscere”. Questo linguaggio restituisce potere. Anche il corpo va coinvolto: respiro lento, routine prevedibili, oggetti ponte, movimento e tempi di decompressione dopo la scuola.</>,
            ],
            bullets: [
              <>Accogli l'emozione senza farla diventare padrona.</>,
              <>Crea routine prevedibili nei momenti critici.</>,
              <>Dividi le sfide in passi piccoli e celebrabili.</>,
              <>Allena il rapporto con l'errore: sbagliare non è essere sbagliati.</>,
              <>Parla con la scuola se l'ansia emerge soprattutto lì.</>,
            ],
          },
          {
            title: "Quando contattare una pedagogista",
            paragraphs: [
              <>Una pedagogista può aiutare quando l'ansia incide su scuola, sonno, autonomie, relazioni o vita familiare. Il supporto pedagogico non sostituisce una valutazione psicologica quando necessaria, ma può lavorare in modo prezioso sulle routine, sulle richieste educative, sull'autonomia e sul dialogo famiglia-scuola.</>,
              <>Se l'ansia blocca tuo figlio o blocca voi genitori, non aspettare di essere esausti. Un confronto può aiutare a capire cosa sta succedendo e quali passi fare. Puoi <Link href="/#contact" className="text-[#A05A3E] hover:underline">contattarmi per un primo colloquio</Link>.</>,
            ],
          },
        ]}
        conclusion={[
          <>L'ansia nei bambini non va drammatizzata, ma nemmeno ignorata. È un segnale: ci dice che qualcosa, per quel bambino, in quel momento, è percepito come troppo grande.</>,
          <>Con adulti attenti, parole giuste e passi graduali, molti bambini ritrovano fiducia. Il compito dell'adulto non è eliminare ogni paura, ma insegnare che la paura si può attraversare senza essere soli.</>,
        ]}
        faqs={[
          { question: "Come capire se mio figlio ha ansia?", answer: <>Osserva se paure, sintomi fisici, evitamenti o bisogno di rassicurazione sono frequenti e limitano la sua vita quotidiana.</> },
          { question: "L'ansia nei bambini passa da sola?", answer: <>A volte alcune paure evolutive passano, ma se l'ansia persiste o aumenta è meglio chiedere un confronto professionale.</> },
          { question: "Cosa dire a un bambino ansioso?", answer: <>Puoi dire: “Vedo che sei preoccupato. Sono qui. Facciamo un passo alla volta”. Accogliere e guidare è più utile che minimizzare.</> },
          { question: "Devo evitare ciò che gli fa paura?", answer: <>Non sempre. L'evitamento continuo può rinforzare l'ansia. Meglio costruire esposizioni graduali e accompagnate.</> },
          { question: "Ansia e capricci possono somigliarsi?", answer: <>Sì. Alcuni comportamenti oppositivi nascondono paura o insicurezza. Per questo è importante leggere il contesto.</> },
          { question: "Quando serve uno psicologo?", answer: <>Se l'ansia è molto intensa, causa grande sofferenza o sintomi importanti, può essere utile una valutazione psicologica insieme al supporto educativo.</> },
        ]}
      />
    ),
  },
  {
    title: "Difficoltà a scuola: quando preoccuparsi davvero?",
    slug: "difficolta-a-scuola-quando-preoccuparsi",
    metaTitle: "Difficoltà a scuola: quando preoccuparsi davvero",
    metaDesc: "Difficoltà a scuola, voti bassi, compiti infiniti o poca motivazione: segnali da osservare e quando chiedere supporto pedagogico.",
    date: "28 Febbraio 2026",
    excerpt: "Non ogni voto basso è un problema, ma alcuni segnali raccontano una fatica scolastica che merita di essere presa sul serio.",
    content: (
      <ArticleContent
        intro={[
          <>Un brutto voto può capitare. Una settimana storta anche. Ma quando i compiti diventano una lotta quotidiana, tuo figlio dice spesso “non sono capace”, piange davanti al quaderno o evita la scuola, il dubbio arriva: è pigrizia, è una fase o c'è qualcosa di più?</>,
          <>Le <strong>difficoltà a scuola</strong> non riguardano solo il rendimento. Riguardano autostima, metodo, motivazione, relazione con l'errore e fiducia nelle proprie capacità. Intervenire presto non significa etichettare un bambino, ma proteggerlo da un accumulo di frustrazione.</>,
        ]}
        sections={[
          {
            title: "Quando una difficoltà scolastica merita attenzione",
            paragraphs: [
              <>Il primo criterio è la durata. Se la fatica persiste per settimane o mesi, nonostante l'impegno, vale la pena fermarsi. Il secondo criterio è l'impatto emotivo: un bambino che si sente sempre inadeguato non sta vivendo solo un problema di studio, ma un'esperienza che può lasciare tracce sulla sua immagine di sé.</>,
              <>Attenzione anche ai compiti infiniti. Se per fare ciò che altri completano in mezz'ora servono due ore di tensione, forse il problema non è la volontà. Può mancare un metodo, possono esserci fragilità attentive, difficoltà di lettura, scrittura, comprensione, organizzazione o autonomia.</>,
            ],
            bullets: [
              <>Compiti molto lunghi e carichi di conflitto.</>,
              <>Frasi come “sono stupido” o “non ce la farò mai”.</>,
              <>Evitamento della scuola o di alcune materie.</>,
              <>Difficoltà a organizzare diario, materiali e tempi.</>,
              <>Calo improvviso della motivazione o dell'umore.</>,
            ],
          },
          {
            title: "Le cause possibili: non solo pigrizia",
            paragraphs: [
              <>La pigrizia è spesso la spiegazione più veloce, ma raramente è la più utile. Un bambino può evitare lo studio perché ha sperimentato troppi fallimenti. Può distrarsi perché il compito è troppo difficile, troppo lungo o poco organizzato. Può rifiutare l'aiuto perché si sente già giudicato.</>,
              <>Ci sono difficoltà legate al metodo: non sapere sottolineare, ripetere, fare mappe, dividere un testo. Ci sono difficoltà emotive: paura del voto, ansia da prestazione, perfezionismo. E ci sono difficoltà specifiche dell'apprendimento che richiedono osservazione e, se necessario, valutazioni mirate.</>,
            ],
          },
          {
            title: "Cosa non fare con un figlio in difficoltà a scuola",
            paragraphs: [
              <>Non trasformare ogni pomeriggio in un interrogatorio. “Cos'hai preso?”, “Hai studiato?”, “Perché hai sbagliato?” sono domande comprensibili, ma se diventano l'unico dialogo sulla scuola aumentano pressione e distanza. Serve interesse, non controllo continuo.</>,
              <>Evita i paragoni: con fratelli, compagni, cugini. Il paragone non motiva, ferisce. E attenzione a fare i compiti al posto suo: nell'immediato salva il voto, ma nel tempo toglie autonomia.</>,
            ],
            bullets: [
              <>Non chiamarlo pigro senza aver capito la fatica.</>,
              <>Non usare il voto come misura del valore personale.</>,
              <>Non sostituirti completamente nello studio.</>,
              <>Non aspettare la pagella se i segnali sono già chiari.</>,
            ],
          },
          {
            title: "Cosa fare: passi concreti per aiutare",
            paragraphs: [
              <>Osserva prima di correggere. Quando si blocca? All'inizio? Nella lettura? Nella scrittura? Nella memorizzazione? Nel recuperare il materiale? Questa osservazione è preziosa perché orienta l'aiuto. Poi riduci il caos: spazio ordinato, tempi brevi, pause, obiettivi chiari.</>,
              <>Aiuta tuo figlio a costruire metodo, non dipendenza. Invece di spiegare tutto tu, chiedi: “Qual è la prima cosa da fare?”, “Come potresti dividere questo compito?”, “Cosa ti serve per iniziare?”. Il tutoraggio pedagogico lavora proprio su questo: rendere il ragazzo più consapevole di come impara.</>,
            ],
            bullets: [
              <>Dividi i compiti in blocchi piccoli.</>,
              <>Crea una routine di studio prevedibile.</>,
              <>Usa mappe, parole chiave e schemi visivi se aiutano.</>,
              <>Rinforza l'impegno e la strategia, non solo il risultato.</>,
              <>Parla con gli insegnanti per raccogliere osservazioni.</>,
            ],
          },
          {
            title: "Quando contattare una pedagogista",
            paragraphs: [
              <>Contatta una pedagogista quando i compiti sono sempre fonte di conflitto, quando tuo figlio perde fiducia, quando manca un metodo di studio o quando scuola e famiglia non riescono a capire insieme cosa stia succedendo.</>,
              <>Il supporto pedagogico può aiutare a leggere la difficoltà, costruire strategie, sostenere l'autonomia e orientare la famiglia verso eventuali approfondimenti specialistici. Puoi scoprire anche il percorso di <Link href="/servizi/tutoraggio-specialistico" className="text-[#A05A3E] hover:underline">tutoraggio specialistico</Link>.</>,
            ],
          },
        ]}
        conclusion={[
          <>Preoccuparsi non significa allarmarsi. Significa prendersi cura dei segnali prima che diventino ferite. La scuola dovrebbe essere un luogo di crescita, non il terreno quotidiano della sconfitta.</>,
          <>Con uno sguardo pedagogico è possibile rimettere ordine: capire la fatica, alleggerire il clima, costruire metodo e restituire al bambino la sensazione più importante: “posso imparare”.</>,
        ]}
        faqs={[
          { question: "Quando preoccuparsi per le difficoltà a scuola?", answer: <>Quando durano nel tempo, causano forte stress o incidono su autostima, motivazione e vita familiare.</> },
          { question: "Voti bassi significano DSA?", answer: <>Non necessariamente. I voti bassi possono dipendere da metodo, emozioni, attenzione, motivazione o difficoltà specifiche da approfondire.</> },
          { question: "Come aiutare nei compiti senza sostituirsi?", answer: <>Guida il metodo con domande, routine e piccoli obiettivi, lasciando al bambino la responsabilità del compito.</> },
          { question: "Mio figlio è pigro o in difficoltà?", answer: <>Prima di parlare di pigrizia osserva dove si blocca. Spesso l'evitamento nasce da frustrazione o mancanza di strategie.</> },
          { question: "Quando serve tutoraggio specialistico?", answer: <>Quando mancano metodo, autonomia, organizzazione o quando BES, DSA o ADHD richiedono strategie personalizzate.</> },
          { question: "La pedagogista parla anche con la scuola?", answer: <>Quando utile e con accordo della famiglia, può favorire un dialogo educativo tra genitori, insegnanti e ragazzo.</> },
        ]}
      />
    ),
  },
  {
    title: "Come migliorare l'autostima nei bambini: strategie pratiche",
    slug: "come-migliorare-autostima-bambini-strategie",
    metaTitle: "Come migliorare l'autostima nei bambini",
    metaDesc: "Autostima nei bambini: frasi da evitare, strategie pratiche e attività quotidiane per aiutare tuo figlio a sentirsi capace.",
    date: "14 Febbraio 2026",
    excerpt: "L'autostima non si costruisce dicendo sempre bravo: nasce quando il bambino si sente visto, capace e accompagnato anche nell'errore.",
    content: (
      <ArticleContent
        intro={[
          <>“Non sono capace”. “Fallo tu”. “Tanto sbaglio sempre”. Quando un bambino parla così, a un genitore si stringe il cuore. Vorresti convincerlo subito del contrario, riempirlo di complimenti, proteggerlo da ogni fallimento. Ma l'<strong>autostima nei bambini</strong> non cresce evitando la fatica: cresce attraversandola con adulti che sanno vedere le risorse.</>,
          <>Migliorare l'autostima significa aiutare il bambino a costruire un'immagine di sé realistica e fiduciosa: non “sono il migliore”, ma “posso provare, posso imparare, posso chiedere aiuto, il mio valore non dipende da un errore”.</>,
        ]}
        sections={[
          {
            title: "Che cos'è davvero l'autostima nei bambini",
            paragraphs: [
              <>L'autostima non è sentirsi sempre sicuri. È sapere di avere valore anche quando qualcosa non riesce. Un bambino con buona autostima non è quello che non cade mai, ma quello che dopo una caduta riesce, con supporto, a rialzarsi e riprovare.</>,
              <>Si costruisce nelle esperienze quotidiane: vestirsi da solo, finire un disegno, sbagliare una parola leggendo, litigare e riparare, aiutare in casa, affrontare un compito difficile. Ogni esperienza può dire al bambino “sei incapace” oppure “stai imparando”. La differenza spesso la fa lo sguardo dell'adulto.</>,
            ],
          },
          {
            title: "Da cosa dipende l'autostima",
            paragraphs: [
              <>L'autostima nasce dall'intreccio tra temperamento, ambiente, relazioni e possibilità di sperimentarsi. Se un bambino viene corretto continuamente, paragonato o anticipato in ogni gesto, può iniziare a pensare di non essere abbastanza. Se invece viene lasciato solo davanti a sfide troppo grandi, può sentirsi sopraffatto.</>,
              <>Serve una zona intermedia: compiti possibili ma non banali, adulti vicini ma non sostitutivi, parole che riconoscono l'impegno. La fiducia nasce quando il bambino vive esperienze di competenza: “ci sono riuscito grazie a una strategia, non perché qualcuno mi ha salvato”.</>,
            ],
          },
          {
            title: "Cosa non fare se vuoi rafforzare l'autostima",
            paragraphs: [
              <>Dire sempre “bravissimo” non basta. Se il complimento è generico e continuo, perde significato. Meglio descrivere ciò che il bambino ha fatto: “Hai continuato anche quando era difficile”, “Hai trovato un modo diverso”, “Hai chiesto aiuto invece di mollare”.</>,
              <>Evita di proteggere tuo figlio da ogni errore. L'errore, se accompagnato, è un allenamento prezioso. Evita anche frasi che sembrano innocue ma feriscono: “Lo sapevo che finiva così”, “Sei sempre il solito”, “Tua sorella alla tua età lo faceva già”.</>,
            ],
            bullets: [
              <>Non confrontare il bambino con altri.</>,
              <>Non fare al posto suo ciò che può imparare a fare.</>,
              <>Non legare affetto e valore ai risultati.</>,
              <>Non ridicolizzare paure, lentezze o tentativi.</>,
            ],
          },
          {
            title: "Strategie pratiche per migliorare l'autostima",
            paragraphs: [
              <>Dai al bambino responsabilità reali, adatte all'età. Apparecchiare, preparare lo zaino con una checklist, scegliere tra due vestiti, aiutare a cucinare. Non sono dettagli: sono occasioni di competenza. Ogni volta che un bambino contribuisce, sente di avere un posto attivo nel mondo.</>,
              <>Cambia il linguaggio sull'errore. Invece di “hai sbagliato”, prova: “Qui c'è qualcosa da rivedere”. Invece di “non sei portato”, prova: “Ti serve una strategia diversa”. Le parole degli adulti diventano, nel tempo, la voce interna del bambino.</>,
            ],
            bullets: [
              <>Loda il processo: impegno, strategia, perseveranza.</>,
              <>Crea piccole sfide raggiungibili.</>,
              <>Fai spazio alle decisioni: poche scelte, ma vere.</>,
              <>Racconta anche i tuoi errori e come li ripari.</>,
              <>Aiutalo a nominare i progressi, non solo i risultati.</>,
            ],
          },
          {
            title: "Quando contattare una pedagogista",
            paragraphs: [
              <>Chiedi supporto se tuo figlio si svaluta spesso, evita attività per paura di sbagliare, dipende sempre dall'approvazione adulta o vive scuola e relazioni con forte senso di inadeguatezza. L'autostima non è un dettaglio: sostiene apprendimento, autonomia e benessere.</>,
              <>Una consulenza pedagogica aiuta i genitori a modificare richieste, parole, routine e aspettative, costruendo esperienze di successo reale. Se senti che tuo figlio non vede più le sue risorse, <Link href="/#contact" className="text-[#A05A3E] hover:underline">possiamo cercarle insieme</Link>.</>,
            ],
          },
        ]}
        conclusion={[
          <>L'autostima non si regala con una frase. Si costruisce con presenza, fiducia, limiti e occasioni quotidiane in cui il bambino può sentirsi capace.</>,
          <>Il compito dell'adulto non è convincere il bambino di essere perfetto, ma mostrargli che può crescere. E spesso basta cambiare piccoli gesti ogni giorno per aprire una strada nuova.</>,
        ]}
        faqs={[
          { question: "Come capire se un bambino ha bassa autostima?", answer: <>Può evitare sfide, svalutarsi, cercare continua approvazione o reagire molto male agli errori.</> },
          { question: "Dire sempre bravo aiuta?", answer: <>Aiuta di più un feedback specifico sul processo: impegno, strategia, coraggio, perseveranza.</> },
          { question: "Come aiutare un bambino che dice non sono capace?", answer: <>Accogli la fatica e proponi un primo passo piccolo: “Proviamo insieme l'inizio, poi continui tu”.</> },
          { question: "L'autostima dipende dai genitori?", answer: <>I genitori hanno un ruolo importante, ma contano anche scuola, esperienze, temperamento e relazioni.</> },
          { question: "Gli errori fanno male all'autostima?", answer: <>No, se sono accompagnati bene. L'errore diventa dannoso quando viene umiliato o vissuto come misura del valore.</> },
          { question: "Quando chiedere aiuto?", answer: <>Quando la svalutazione è frequente, limita le esperienze del bambino o crea sofferenza in famiglia e a scuola.</> },
        ]}
      />
    ),
  },
  {
    title: "Bambini aggressivi: perché succede e come intervenire",
    slug: "bambini-aggressivi-perche-succede-come-intervenire",
    metaTitle: "Bambini aggressivi: cause e come intervenire",
    metaDesc: "Bambini aggressivi: perché picchiano, mordono o lanciano oggetti e come intervenire con limiti, calma e strategie educative.",
    date: "6 Febbraio 2026",
    excerpt: "L'aggressività nei bambini non va ignorata né demonizzata: è un comportamento da contenere e un messaggio da comprendere.",
    content: (
      <ArticleContent
        intro={[
          <>Quando un bambino picchia, morde, spinge o lancia oggetti, l'adulto si spaventa. A volte prova vergogna, soprattutto se succede davanti ad altri. La domanda arriva subito: “Perché fa così? Diventerà aggressivo?”. Prima di tutto: un comportamento aggressivo non definisce l'identità di un bambino.</>,
          <>Parlare di <strong>bambini aggressivi</strong> significa distinguere il gesto dal bambino. Il gesto va fermato con chiarezza. Il bambino va aiutato a capire cosa gli sta succedendo e quali alternative può usare. Fermezza e comprensione devono stare insieme.</>,
        ]}
        sections={[
          {
            title: "Cosa comunica l'aggressività nei bambini",
            paragraphs: [
              <>L'aggressività è spesso un linguaggio del corpo quando le parole non bastano. Un bambino può colpire perché è frustrato, geloso, stanco, sovraccarico, spaventato o incapace di gestire un no. Nei più piccoli, mordere e spingere possono comparire perché l'impulso arriva prima del pensiero.</>,
              <>Questo non significa giustificare. Significa leggere. Se mi limito a dire “sei cattivo”, non insegno nulla. Se invece dico “non ti lascio picchiare, vedo che sei arrabbiato, troviamo un altro modo”, sto fermando il gesto e aprendo una strada educativa.</>,
            ],
          },
          {
            title: "Le cause più frequenti",
            paragraphs: [
              <>Tra le cause ci sono immaturità nella regolazione emotiva, difficoltà linguistiche, modelli aggressivi osservati, gelosia tra fratelli, richieste troppo alte, poco sonno, cambiamenti familiari o bisogno di attenzione. A volte l'aggressività aumenta quando l'ambiente è caotico e il bambino non trova confini prevedibili.</>,
              <>Un bambino che non sa dire “mi hai preso il gioco”, “voglio stare con te”, “sono stanco” può usare il corpo. Il compito educativo è tradurre quel corpo in parole e insegnare azioni alternative.</>,
            ],
            bullets: [
              <>Frustrazione non tollerata.</>,
              <>Bisogno di controllo o attenzione.</>,
              <>Difficoltà a condividere spazi e oggetti.</>,
              <>Routine poco prevedibili.</>,
              <>Esposizione a urla o modalità relazionali aggressive.</>,
            ],
          },
          {
            title: "Cosa non fare davanti a un gesto aggressivo",
            paragraphs: [
              <>Non rispondere con aggressività. Sculacciare un bambino perché ha picchiato manda un messaggio confuso: “non si picchia, tranne quando l'adulto è arrabbiato”. Anche urlare “sei cattivo” rischia di fissare un'identità negativa.</>,
              <>Non ignorare il gesto, soprattutto se fa male ad altri. Il bambino deve sentire che l'adulto protegge tutti: chi è stato colpito e anche chi ha colpito, perché ha perso il controllo.</>,
            ],
            bullets: [
              <>Non umiliare davanti agli altri.</>,
              <>Non chiedere lunghe spiegazioni nel momento di massima rabbia.</>,
              <>Non ridere del gesto se il bambino è piccolo.</>,
              <>Non lasciare che “sono fatto così” diventi una giustificazione.</>,
            ],
          },
          {
            title: "Come intervenire: contenere, nominare, riparare",
            paragraphs: [
              <>Il primo passo è fermare fisicamente il gesto se necessario, con calma e sicurezza: “Stop. Non ti lascio picchiare”. Poche parole, tono fermo. Poi si nomina: “Sei arrabbiato perché volevi quel gioco”. Infine si insegna: “Puoi dire: lo voglio anch'io. Puoi chiedere il turno. Puoi venire da me”.</>,
              <>Dopo la crisi arriva la riparazione. Non come punizione teatrale, ma come responsabilità: portare un fazzoletto, ricostruire ciò che è stato rotto, chiedere scusa quando il bambino è pronto a capirne il senso. Riparare insegna che le relazioni possono essere curate.</>,
            ],
            bullets: [
              <>Ferma il gesto: “Non posso lasciarti fare male”.</>,
              <>Proteggi l'altro bambino senza abbandonare chi ha agito.</>,
              <>Dai parole all'emozione.</>,
              <>Allena frasi alternative nei momenti calmi.</>,
              <>Prevedi situazioni critiche: fame, stanchezza, transizioni.</>,
            ],
          },
          {
            title: "Quando contattare una pedagogista",
            paragraphs: [
              <>Chiedi supporto se l'aggressività è frequente, intensa, presente in più contesti o se la famiglia vive nella paura della prossima esplosione. È importante intervenire presto, non per etichettare, ma per dare strumenti.</>,
              <>La pedagogista osserva le dinamiche, aiuta a costruire limiti, routine, alternative comunicative e collaborazione con scuola o nido. Se senti che i comportamenti aggressivi stanno diventando un nodo centrale, <Link href="/#contact" className="text-[#A05A3E] hover:underline">un confronto può aiutarti a intervenire con più sicurezza</Link>.</>,
            ],
          },
        ]}
        conclusion={[
          <>Un bambino che aggredisce non sta chiedendo permissività. Sta chiedendo adulti capaci di fermarlo senza schiacciarlo. Il limite è una forma di protezione.</>,
          <>Con coerenza, parole, riparazione e osservazione delle cause, l'aggressività può trasformarsi in competenza emotiva. Non succede in un giorno, ma succede dentro relazioni educative affidabili.</>,
        ]}
        faqs={[
          { question: "Perché mio figlio picchia?", answer: <>Può picchiare perché non riesce a gestire frustrazione, rabbia, gelosia o stanchezza. Il gesto va fermato e compreso.</> },
          { question: "Devo punire un bambino aggressivo?", answer: <>Serve una conseguenza educativa, non umiliante: fermare, nominare, riparare e insegnare alternative.</> },
          { question: "Mordere è normale?", answer: <>Nei piccoli può comparire, ma va sempre contenuto e accompagnato con parole e strategie alternative.</> },
          { question: "Cosa dire dopo che ha picchiato?", answer: <>“Non ti lascio fare male. Eri arrabbiato. La prossima volta puoi chiamarmi o usare le parole”.</> },
          { question: "Quando preoccuparsi?", answer: <>Quando l'aggressività è frequente, intensa, aumenta nel tempo o crea problemi a scuola e nelle relazioni.</> },
          { question: "La pedagogista può aiutare?", answer: <>Sì. Può aiutare genitori e scuola a leggere cause, costruire confini e insegnare competenze emotive.</> },
        ]}
      />
    ),
  },
  {
    title: "Inserimento scolastico difficile: come aiutare tuo figlio",
    slug: "inserimento-scolastico-difficile-come-aiutare",
    metaTitle: "Inserimento scolastico difficile: come aiutare tuo figlio",
    metaDesc: "Inserimento scolastico difficile: pianto, rifiuto, ansia da separazione e strategie pratiche per aiutare tuo figlio con serenità.",
    date: "27 Gennaio 2026",
    excerpt: "Un inserimento difficile non è un fallimento: è un passaggio delicato che va accompagnato con gradualità, fiducia e alleanza educativa.",
    content: (
      <ArticleContent
        intro={[
          <>Il momento del saluto può diventare un piccolo terremoto: tuo figlio piange, si aggrappa, dice che non vuole entrare, tu esci con il cuore pesante e mille dubbi. “Sto sbagliando? Lo sto forzando? Si abituerà?”. L'<strong>inserimento scolastico difficile</strong> è una delle esperienze più delicate per molte famiglie.</>,
          <>Che si tratti di nido, scuola dell'infanzia o primaria, l'ingresso in un nuovo contesto richiede tempo. Il bambino non deve solo conoscere un luogo: deve costruire fiducia in adulti nuovi, routine nuove, regole nuove e nella possibilità che il genitore torni.</>,
        ]}
        sections={[
          {
            title: "Perché l'inserimento può essere difficile",
            paragraphs: [
              <>Per alcuni bambini la novità è eccitante. Per altri è travolgente. Rumori, compagni, tempi, distacco, autonomia richiesta: tutto insieme può essere troppo. Il pianto non significa necessariamente che la scuola non vada bene. Spesso significa che il bambino sta attraversando un passaggio grande.</>,
              <>Anche l'emozione del genitore conta. Se mamma o papà salutano con ansia, esitano, tornano indietro più volte o sembrano non fidarsi del contesto, il bambino percepisce insicurezza. L'obiettivo non è fingere serenità, ma costruirla.</>,
            ],
          },
          {
            title: "Cause frequenti di fatica nel distacco",
            paragraphs: [
              <>Le cause possono essere legate al temperamento, a precedenti esperienze di separazione, a cambiamenti familiari, a stanchezza, a routine mattutine caotiche o a un inserimento troppo rapido. Alcuni bambini hanno bisogno di più tempo per osservare prima di partecipare.</>,
              <>A volte la difficoltà emerge dopo alcuni giorni, non subito. All'inizio il bambino è curioso, poi capisce che la scuola è una routine stabile e protesta. Questo andamento è frequente e non deve spaventare.</>,
            ],
            bullets: [
              <>Paura del distacco dal genitore.</>,
              <>Bisogno di prevedibilità.</>,
              <>Difficoltà ad affidarsi ad adulti nuovi.</>,
              <>Routine mattutina frettolosa.</>,
              <>Stanchezza o sonno non sufficiente.</>,
            ],
          },
          {
            title: "Cosa non fare durante un inserimento difficile",
            paragraphs: [
              <>Non scappare di nascosto. Può sembrare più facile, ma rischia di incrinare la fiducia. Il bambino ha bisogno di sapere che il genitore saluta e poi torna. Evita anche saluti infiniti: più si allunga il distacco, più cresce l'ansia.</>,
              <>Non usare frasi come “se piangi la mamma è triste” o “ormai sei grande”. Il bambino non ha bisogno di sentirsi responsabile dell'emozione adulta. Ha bisogno di essere accompagnato dentro la sua.</>,
            ],
            bullets: [
              <>Non promettere premi quotidiani per entrare.</>,
              <>Non svalutare la paura.</>,
              <>Non cambiare strategia ogni mattina.</>,
              <>Non parlare della scuola come di una minaccia.</>,
            ],
          },
          {
            title: "Come aiutare tuo figlio concretamente",
            paragraphs: [
              <>Prepara il passaggio con parole semplici e ripetute: “Ti accompagno, saluto, tu resti con la maestra, dopo torno”. La ripetizione rassicura. Crea un rituale breve: un abbraccio, una frase, un gesto sempre uguale. Il rituale diventa un ponte.</>,
              <>Dai fiducia alla scuola davanti al bambino. Se hai dubbi, parlane con le insegnanti in un altro momento. Davanti a lui il messaggio deve essere: “Io mi fido degli adulti che ti accolgono”. Questa fiducia è una base sicura.</>,
            ],
            bullets: [
              <>Mantieni una routine mattutina prevedibile.</>,
              <>Prepara zaino e vestiti la sera prima.</>,
              <>Usa un oggetto ponte se la scuola lo consente.</>,
              <>Saluta sempre, con calma e decisione.</>,
              <>Racconta il ritorno: “Dopo la merenda/la nanna/la mensa vengo a prenderti”.</>,
            ],
          },
          {
            title: "Quando contattare una pedagogista",
            paragraphs: [
              <>Se dopo diverse settimane il distacco resta molto doloroso, se il bambino mostra sintomi fisici ricorrenti, rifiuto intenso o regressioni importanti, un confronto pedagogico può aiutare a leggere la situazione e costruire una strategia condivisa.</>,
              <>La pedagogista può sostenere i genitori e, quando utile, favorire il dialogo con la scuola. L'inserimento non è solo del bambino: è di tutta la famiglia dentro una nuova alleanza educativa. Per un accompagnamento puoi <Link href="/#contact" className="text-[#A05A3E] hover:underline">scrivermi qui</Link>.</>,
            ],
          },
        ]}
        conclusion={[
          <>Un inserimento difficile non dice che tuo figlio non ce la farà. Dice che ha bisogno di tempo, prevedibilità e adulti fiduciosi.</>,
          <>Ogni distacco ben accompagnato costruisce una competenza: posso andare, posso stare, posso fidarmi, posso ritrovarti. È un apprendimento profondo, non una semplice routine scolastica.</>,
        ]}
        faqs={[
          { question: "Quanto dura un inserimento difficile?", answer: <>Dipende dal bambino e dal contesto. Alcuni si adattano in pochi giorni, altri hanno bisogno di settimane e gradualità.</> },
          { question: "È meglio andare via mentre non guarda?", answer: <>No. Salutare sempre protegge la fiducia, anche se il bambino piange.</> },
          { question: "Cosa dire quando piange all'ingresso?", answer: <>“Lo so, è difficile. Io torno dopo. Ora resti con la maestra”. Poche parole, chiare e rassicuranti.</> },
          { question: "Il pianto significa che la scuola non va bene?", answer: <>Non necessariamente. Va osservato insieme ad altri segnali e al racconto delle insegnanti durante la giornata.</> },
          { question: "Posso usare un premio?", answer: <>Meglio non farne la strategia principale. Il bambino deve costruire fiducia, non entrare solo per ottenere qualcosa.</> },
          { question: "Quando chiedere supporto?", answer: <>Quando il rifiuto è intenso, persistente o crea molta sofferenza nel bambino e nei genitori.</> },
        ]}
      />
    ),
  },
  {
    title: "Litigi tra fratelli: come gestirli senza impazzire",
    slug: "litigi-tra-fratelli-come-gestirli",
    metaTitle: "Litigi tra fratelli: come gestirli senza impazzire",
    metaDesc: "Litigi tra fratelli: perché succedono, cosa non fare e strategie pratiche per gestire gelosia, conflitti e regole in famiglia.",
    date: "18 Gennaio 2026",
    excerpt: "I litigi tra fratelli non sono solo rumore: sono allenamenti relazionali che hanno bisogno di confini adulti e occasioni di riparazione.",
    content: (
      <ArticleContent
        intro={[
          <>“Mamma, mi ha preso il gioco!”. “È stato lui!”. “Non è giusto!”. I <strong>litigi tra fratelli</strong> possono consumare energie enormi. A volte sembra che la casa sia diventata un tribunale e tu il giudice chiamato a decidere ogni cinque minuti chi ha ragione.</>,
          <>Il conflitto tra fratelli è normale, ma non va lasciato a se stesso. I bambini imparano a negoziare, aspettare, perdere, riparare. Però hanno bisogno di adulti che non entrino sempre nel ruolo di arbitri, ma che insegnino competenze relazionali.</>,
        ]}
        sections={[
          {
            title: "Perché fratelli e sorelle litigano",
            paragraphs: [
              <>I fratelli condividono spazi, oggetti, attenzioni e genitori. È naturale che emergano gelosia, competizione e bisogno di sentirsi unici. Spesso il litigio sul gioco non riguarda solo il gioco: riguarda il posto che ciascuno sente di avere.</>,
              <>Anche età diverse creano bisogni diversi. Il più piccolo vuole imitare, il più grande vuole proteggere il suo spazio. Se l'adulto pretende sempre armonia, rischia di negare emozioni reali. L'obiettivo non è eliminare ogni litigio, ma renderlo più gestibile e meno distruttivo.</>,
            ],
          },
          {
            title: "Le cause pedagogiche dei conflitti",
            paragraphs: [
              <>I litigi aumentano quando le regole sugli spazi e sugli oggetti non sono chiare, quando i bambini sono stanchi, quando cercano attenzione o quando l'adulto interviene sempre assegnando colpe. A volte i figli litigano perché hanno imparato che quello è il modo più veloce per far arrivare il genitore.</>,
              <>C'è poi il tema dell'equità. I bambini non hanno bisogno che tutto sia identico, ma che i loro bisogni siano riconosciuti. Dire “faccio uguale per tutti” non sempre funziona: un bambino di tre anni e uno di otto non hanno gli stessi bisogni.</>,
            ],
            bullets: [
              <>Gelosia e bisogno di esclusività.</>,
              <>Spazi personali poco definiti.</>,
              <>Stanchezza e sovraccarico.</>,
              <>Intervento adulto troppo giudicante.</>,
              <>Regole diverse tra mamma e papà.</>,
            ],
          },
          {
            title: "Cosa non fare nei litigi tra fratelli",
            paragraphs: [
              <>Non cercare sempre il colpevole. Spesso la dinamica è più complessa del singolo gesto. Se chiedi solo “chi ha iniziato?”, i bambini impareranno a difendersi, non a capire. Meglio chiedere: “Cosa è successo? Di cosa avete bisogno adesso?”.</>,
              <>Evita etichette fisse: “lui è geloso”, “lei è prepotente”, “tu sei il grande e devi capire”. Il grande resta comunque un bambino. Il piccolo non va sempre giustificato perché piccolo. Ognuno ha responsabilità possibili per la sua età.</>,
            ],
            bullets: [
              <>Non fare paragoni tra fratelli.</>,
              <>Non obbligare scuse immediate e vuote.</>,
              <>Non intervenire urlando più forte di loro.</>,
              <>Non pretendere condivisione totale di ogni oggetto.</>,
            ],
          },
          {
            title: "Come gestire i litigi senza impazzire",
            paragraphs: [
              <>Intervieni subito se c'è rischio fisico: “Stop, non ci si fa male”. Se invece il conflitto è verbale e gestibile, aspetta qualche secondo: potresti scoprire che sanno trovare un accordo. Quando intervieni, prova a fare da traduttore, non da giudice.</>,
              <>Insegna frasi pratiche: “Lo sto usando, te lo do dopo”, “Facciamo a turno”, “Non mi piace quando fai così”, “Chiedo aiuto”. Queste frasi vanno allenate nei momenti calmi, non inventate nel caos.</>,
            ],
            bullets: [
              <>Stabilisci oggetti personali e oggetti condivisi.</>,
              <>Crea turni chiari per giochi molto desiderati.</>,
              <>Dedica piccoli tempi esclusivi a ciascun figlio.</>,
              <>Dopo il litigio, guida la riparazione: cosa possiamo fare adesso?</>,
              <>Riconosci i momenti di collaborazione, anche piccoli.</>,
            ],
          },
          {
            title: "Quando contattare una pedagogista",
            paragraphs: [
              <>Chiedi supporto se i litigi sono continui, aggressivi, se un figlio sembra sempre schiacciato dall'altro o se i genitori non riescono più a gestire la tensione. A volte bastano piccoli cambiamenti nelle regole familiari per ridurre molto il conflitto.</>,
              <>La consulenza pedagogica aiuta a leggere ruoli, gelosie, routine e modalità di intervento adulto. Non promette fratelli sempre d'accordo, ma relazioni più sane. Se la casa è diventata un campo di battaglia, <Link href="/#contact" className="text-[#A05A3E] hover:underline">possiamo rimettere ordine insieme</Link>.</>,
            ],
          },
        ]}
        conclusion={[
          <>I fratelli non devono amarsi sempre nello stesso modo, né andare sempre d'accordo. Devono imparare a stare nella relazione anche quando desideri e bisogni si scontrano.</>,
          <>Con confini chiari, meno giudizio e più strumenti, i litigi possono diventare occasioni di apprendimento. Faticose, sì. Ma preziose.</>,
        ]}
        faqs={[
          { question: "È normale che i fratelli litighino sempre?", answer: <>Un certo livello di conflitto è normale. Va osservato se è continuo, aggressivo o crea sofferenza stabile.</> },
          { question: "Devo intervenire in ogni litigio?", answer: <>No, se non c'è rischio. Puoi osservare e intervenire come guida quando non riescono a trovare strategie.</> },
          { question: "Come gestire la gelosia?", answer: <>Riconosci il bisogno di unicità, evita paragoni e crea piccoli tempi esclusivi con ciascun figlio.</> },
          { question: "È giusto dire al grande di cedere?", answer: <>Non sempre. Il grande non deve essere responsabilizzato oltre la sua età. Anche il piccolo deve imparare limiti e attesa.</> },
          { question: "Le scuse vanno obbligate?", answer: <>Meglio guidare una riparazione autentica. Le scuse forzate spesso insegnano forma, non responsabilità.</> },
          { question: "Quando chiedere una consulenza?", answer: <>Quando i conflitti sono ingestibili, aggressivi o stanno logorando il clima familiare.</> },
        ]}
      />
    ),
  },
  {
    title: "Genitori oggi: errori educativi più comuni e come evitarli",
    slug: "genitori-oggi-errori-educativi-comuni",
    metaTitle: "Genitori oggi: errori educativi comuni",
    metaDesc: "Genitori oggi tra sensi di colpa, regole e stanchezza: gli errori educativi più comuni e come evitarli con strategie pratiche.",
    date: "3 Gennaio 2026",
    excerpt: "Essere genitori oggi è complesso: non servono colpe, servono consapevolezza, strumenti e il coraggio di rimettere ordine.",
    content: (
      <ArticleContent
        intro={[
          <>I <strong>genitori oggi</strong> hanno accesso a mille informazioni e, paradossalmente, si sentono spesso più soli. Ogni scelta sembra giudicabile: allattamento, sonno, scuola, regole, cellulare, compiti. Il rischio è vivere l'educazione come un esame continuo.</>,
          <>Parlare di errori educativi non significa puntare il dito. Significa riconoscere alcune trappole comuni in cui si cade per stanchezza, paura o troppo amore. La buona notizia è che un errore educativo può diventare una svolta quando viene visto e trasformato.</>,
        ]}
        sections={[
          {
            title: "Il problema: educare tra pressione e senso di colpa",
            paragraphs: [
              <>Molti genitori oscillano tra due estremi: essere troppo rigidi perché temono di perdere autorità, oppure troppo permissivi perché temono di ferire il bambino. In mezzo c'è la strada più difficile e più utile: l'autorevolezza. Un adulto autorevole è affettuoso e fermo, accoglie le emozioni ma mantiene i limiti.</>,
              <>Il senso di colpa è uno dei grandi protagonisti della genitorialità contemporanea. Si lavora tanto, si corre, si arriva stanchi. Allora si cede su regole importanti, si compra qualcosa per compensare, si evita il conflitto. Ma i bambini non hanno bisogno di genitori perfetti: hanno bisogno di adulti sufficientemente coerenti.</>,
            ],
          },
          {
            title: "Le cause degli errori educativi più comuni",
            paragraphs: [
              <>Spesso gli errori nascono da automatismi. Ripetiamo modelli ricevuti o facciamo l'opposto senza costruire una vera alternativa. Alcuni adulti hanno paura del pianto del bambino e lo leggono come un fallimento. Altri pensano che educare significhi ottenere obbedienza immediata.</>,
              <>C'è poi la pressione sociale: bambini sempre performanti, genitori sempre informati, famiglie sempre organizzate. Ma l'educazione non è una prestazione. È una relazione viva, fatta di aggiustamenti continui.</>,
            ],
            bullets: [
              <>Stanchezza cronica e poco tempo.</>,
              <>Paura del giudizio degli altri.</>,
              <>Informazioni educative confuse o contraddittorie.</>,
              <>Difficoltà a tollerare il pianto e la frustrazione.</>,
              <>Mancanza di accordo tra adulti di riferimento.</>,
            ],
          },
          {
            title: "Cosa non fare: gli errori da evitare",
            paragraphs: [
              <>Il primo errore è confondere amore e assenza di limiti. Dire no non rompe la relazione, se il no è sensato e accompagnato. Il secondo è parlare troppo e agire poco: i bambini hanno bisogno di parole, ma anche di adulti che rendano prevedibile ciò che accade.</>,
              <>Un altro errore è cercare la soluzione perfetta. Ogni famiglia ha la sua storia. Copiare metodi senza adattarli può creare frustrazione. La domanda utile non è “qual è la tecnica giusta?”, ma “che cosa sta succedendo nella nostra relazione e quale passo possiamo fare?”.</>,
            ],
            bullets: [
              <>Non usare il senso di colpa come guida educativa.</>,
              <>Non cambiare regola in base alla pressione del momento.</>,
              <>Non sostituire presenza con oggetti o schermi.</>,
              <>Non pretendere controllo totale sulle emozioni del bambino.</>,
              <>Non delegare tutto alla scuola o agli specialisti.</>,
            ],
          },
          {
            title: "Cosa fare: tornare a una guida educativa chiara",
            paragraphs: [
              <>Scegli poche priorità. Non si può lavorare su tutto insieme. Magari iniziate dal sonno, dai compiti, dal cellulare o dalle routine del mattino. Una famiglia cambia meglio quando affronta un nodo alla volta.</>,
              <>Costruisci coerenza tra adulti. Non significa essere identici, ma condividere alcune regole fondamentali. E quando sbagli, ripara: “Prima ho urlato, mi dispiace. La regola resta, ma potevo dirtela meglio”. Questa è educazione potente: mostrare responsabilità.</>,
            ],
            bullets: [
              <>Definisci poche regole chiare e sostenibili.</>,
              <>Anticipa le routine invece di inseguire le emergenze.</>,
              <>Dai valore alla relazione anche dentro il limite.</>,
              <>Ripara dopo gli errori, senza perdere autorevolezza.</>,
              <>Chiedi aiuto prima che la fatica diventi crisi.</>,
            ],
          },
          {
            title: "Quando contattare una pedagogista",
            paragraphs: [
              <>Una pedagogista può aiutare quando i genitori si sentono confusi, incoerenti, sempre arrabbiati o sempre in colpa. Può essere utile anche quando mamma e papà hanno visioni educative diverse e serve una cornice comune.</>,
              <>La consulenza pedagogica non giudica. Aiuta a leggere la situazione, individuare priorità e costruire strategie pratiche. Se desideri ritrovare una guida più serena, <Link href="/#contact" className="text-[#A05A3E] hover:underline">puoi contattarmi per un primo confronto</Link>.</>,
            ],
          },
        ]}
        conclusion={[
          <>Essere genitori oggi è difficile perché il mondo è veloce, rumoroso e pieno di aspettative. Ma dentro questa complessità possiamo ritrovare una bussola: relazione, limiti, coerenza, riparazione.</>,
          <>Non serve fare tutto bene. Serve fermarsi, guardare con onestà e scegliere il prossimo passo. È lì che l'educazione torna a essere non una prestazione, ma una possibilità di crescita per tutti.</>,
        ]}
        faqs={[
          { question: "Qual è l'errore educativo più comune?", answer: <>Confondere il bisogno di amore con l'assenza di limiti. I bambini hanno bisogno di affetto e confini chiari.</> },
          { question: "Urlare ogni tanto rovina la relazione?", answer: <>No, se l'adulto sa riparare. Il problema nasce quando l'urlo diventa la modalità principale.</> },
          { question: "Come essere genitori autorevoli?", answer: <>Unisci calore e fermezza: ascolta le emozioni, ma mantieni regole sensate e coerenti.</> },
          { question: "Mamma e papà devono fare tutto uguale?", answer: <>Non tutto, ma devono condividere le regole fondamentali per non creare confusione educativa.</> },
          { question: "Quando chiedere aiuto come genitori?", answer: <>Quando vi sentite bloccati, in conflitto, sopraffatti o senza strumenti davanti ai comportamenti dei figli.</> },
          { question: "La consulenza pedagogica giudica i genitori?", answer: <>No. Il suo scopo è aiutare la famiglia a capire cosa accade e costruire strategie concrete.</> },
        ]}
      />
    ),
  },
];
