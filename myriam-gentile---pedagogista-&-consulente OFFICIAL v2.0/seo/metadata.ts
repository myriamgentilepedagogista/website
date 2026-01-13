
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
    title: "Chi Sono | Myriam Gentile Pedagogista e Coordinatrice 0-6",
    description: "Scopri l'approccio Meraki di Myriam Gentile: pedagogia e neuroscienze per il benessere di famiglie e scuole. Professionalità e ascolto a Civitanova Marche.",
    ogType: "website"
  },
  "/servizi": {
    title: "Servizi Pedagogici e Consulenza | Civitanova Marche e Online",
    description: "Supporto specialistico per genitori, educatrici e tutoraggio DSA/BES/ADHD. Percorsi personalizzati allo Studio Kairos e via videochiamata per ogni esigenza.",
    ogType: "website"
  },
  "/esperienza": {
    title: "Esperienza e Formazione | Myriam Gentile Pedagogista",
    description: "Il percorso accademico e professionale di Myriam Gentile: laurea magistrale, coordinamento pedagogico 0-6 e tutoraggio DSA. Competenze certificate al tuo servizio.",
    ogType: "website"
  },
  "/blog": {
    title: "Spazio Pedagogico | Blog e Riflessioni | Myriam Gentile",
    description: "Approfondimenti su educazione, crescita e neuroscienze nel blog di Myriam Gentile. Consigli pratici per genitori ed educatrici a Civitanova Marche e online.",
    ogType: "website"
  },
  "/faq": {
    title: "FAQ Pedagogia e DSA | Domande Frequenti | Myriam Gentile",
    description: "Risposte chiare su consulenza genitoriale, supporto scolastico e ruolo del pedagogista. Scopri come funzionano i percorsi allo Studio Kairos di Civitanova Marche.",
    ogType: "website"
  }
} as const;

/**
 * Normalizza un path rimuovendo query string e hash, garantendo il leading slash.
 * Esempi:
 * "#/servizi?x=1" -> "/servizi"
 * "servizi" -> "/servizi"
 * "" -> "/"
 */
export function normalizePath(raw: string): string {
  if (!raw) return "/";
  
  // 1. Rimuove query string (?...)
  let path = raw.split('?')[0];
  
  // 2. Rimuove hash (#) - se il path è tipo #/servizi prendiamo la parte dopo #
  if (path.includes('#')) {
    path = path.split('#').pop() || "";
  }
  
  // 3. Rimuove eventuale slash finale se non è la root (opzionale, ma META_BY_PATH usa slash iniziale)
  // 4. Garantisce leading slash
  if (!path.startsWith('/')) {
    path = '/' + path;
  }

  // Se dopo la pulizia è vuoto o solo //
  if (path === "" || path === "//") return "/";
  
  return path;
}

export const getMeta = (path: string): MetaData => {
  const normalized = normalizePath(path);
  return META_BY_PATH[normalized as keyof typeof META_BY_PATH] || META_BY_PATH["/"];
};
