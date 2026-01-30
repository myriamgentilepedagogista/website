
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
  "/servizi/consulenza-genitoriale": {
    title: "Consulenza Genitoriale Pedagogica | Myriam Gentile",
    description: "Percorsi di supporto alla genitorialità basati sulle neuroscienze. Comprendi i bisogni di tuo figlio e ritrova l'equilibrio educativo.",
    ogType: "website"
  },
  "/servizi/coordinamento-pedagogico": {
    title: "Coordinamento Pedagogico 0-6 e Supervisione | Myriam Gentile",
    description: "Supporto specialistico per nidi e scuole dell'infanzia. Supervisione team, progettazione spazi e coordinamento pedagogico professionale.",
    ogType: "website"
  },
  "/servizi/tutoraggio-specialistico": {
    title: "Tutoraggio Specialistico DSA, BES e ADHD | Myriam Gentile",
    description: "Supporto all'apprendimento e metodo di studio per ragazzi. Percorsi di autonomia pedagogica a Civitanova Marche e online.",
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
  }
} as const;

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
