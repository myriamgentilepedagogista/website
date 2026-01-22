export interface MetaData {
  title: string;
  description: string;
  ogType: 'website' | 'article';
}

export const META_BY_PATH: Record<string, MetaData> = {
  "/": {
    title: "Myriam Gentile | Pedagogista a Civitanova Marche e Online",
    description: "Dott.ssa Myriam Gentile: consulenza genitoriale e supporto specialistico DSA/BES a Civitanova Marche (Studio Kairos) e online. Ritrova la bellezza delle relazioni.",
    ogType: "website"
  },
  "/chi-sono": {
    title: "Chi è il Pedagogista? Significato e approccio di Myriam Gentile",
    description: "Scopri chi è il pedagogista e come l'approccio Meraki di Myriam Gentile integra neuroscienze e amore per l'educazione a Civitanova Marche.",
    ogType: "website"
  },
  "/servizi": {
    title: "Servizi Pedagogici: consulenza genitoriale e supporto DSA",
    description: "Migliora la relazione con i tuoi figli e il loro metodo di studio. Scopri i servizi pedagogici su misura per genitori, scuole e ragazzi.",
    ogType: "website"
  },
  "/esperienza": {
    title: "Chi è Myriam Gentile: esperienza e formazione pedagogica",
    description: "Il percorso professionale di Myriam Gentile: dalla laurea magistrale al coordinamento 0-6. Scopri le competenze di un pedagogista esperto.",
    ogType: "website"
  },
  "/blog": {
    title: "Spazio Pedagogico: consigli e riflessioni sull'educazione",
    description: "Riflessioni pratiche su educazione e crescita. Scopri il significato della pedagogia e come supportare lo sviluppo di bambini e ragazzi.",
    ogType: "website"
  },
  "/faq": {
    title: "FAQ Pedagogia: le risposte semplici ai tuoi dubbi educativi",
    description: "Tutto quello che avresti voluto chiedere su pedagogia, DSA e consulenza genitoriale spiegato in modo semplice per orientarti al meglio.",
    ogType: "website"
  },
  "/blog/quando-rivolgersi-pedagogista": {
    title: "Quando rivolgersi a un pedagogista? 7 segnali per i genitori",
    description: "Non aspettare che le fatiche diventino problemi. Scopri quando rivolgersi a un pedagogista per ritrovare equilibrio e serenità in famiglia.",
    ogType: "article"
  },
  "/blog/pedagogista-psicologo-educatore-differenze": {
    title: "Pedagogista, psicologo o educatore? Ecco chi scegliere e perché",
    description: "Confusione tra le figure educative? Scopri le differenze tra pedagogista, psicologo ed educatore per scegliere il supporto giusto per tuo figlio.",
    ogType: "article"
  },
  "/blog/pedagogia-significato-etimologia": {
    title: "Pedagogia: significato, etimologia e perché oggi è così utile",
    description: "Cos'è la pedagogia? Dalla radice greca alle sfide moderne. Scopri il significato profondo di questa scienza e perché aiuta genitori e figli.",
    ogType: "article"
  },
  "/blog/supporto-pedagogico-bambini-adolescenti": {
    title: "Supporto pedagogico per bambini e adolescenti: quando serve?",
    description: "Dall'infanzia all'adolescenza: scopri come un supporto pedagogico specialistico aiuta a superare fatiche scolastiche e crisi di crescita.",
    ogType: "article"
  }
} as const;

/**
 * Normalizza un path rimuovendo query string e hash, garantendo il leading slash.
 */
export function normalizePath(raw: string): string {
  if (!raw) return "/";
  let path = raw.split('?')[0];
  if (path.includes('#')) {
    path = path.split('#').pop() || "";
  }
  if (!path.startsWith('/')) {
    path = '/' + path;
  }
  if (path === "" || path === "//") return "/";
  return path;
}

export const getMeta = (path: string): MetaData => {
  const normalized = normalizePath(path);
  return META_BY_PATH[normalized as keyof typeof META_BY_PATH] || META_BY_PATH["/"];
};
