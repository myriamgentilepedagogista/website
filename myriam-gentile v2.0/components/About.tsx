
import React from 'react';
import { Sparkles, Scale, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PROFILE_IMAGE_URL = "https://ajjwlwiyvg6jgwre.public.blob.vercel-storage.com/Untitled%20design%20%2844%29.png"; 

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 aspect-[4/5] max-w-md mx-auto">
              <img 
                src={PROFILE_IMAGE_URL} 
                alt="Ritratto professionale di Myriam Gentile - Pedagogista a Civitanova Marche" 
                width="800"
                height="800"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="relative z-10 rounded-[3rem] w-full h-full object-cover shadow-2xl border-4 border-white"
              />
              <div className="absolute inset-0 bg-[#A05A3E]/5 rounded-[3rem] -rotate-3 translate-x-4 translate-y-4 -z-10" aria-hidden="true"></div>
            </div>
            
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 bg-white shadow-xl py-4 px-8 rounded-full flex items-center gap-3 border border-[#F3F0E9] whitespace-nowrap">
              <Sparkles className="w-5 h-5 text-[#A05A3E]" aria-hidden="true" />
              <span className="text-[#4A3F35] font-medium italic">Empowerment e Relazione</span>
            </div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex flex-col items-start mb-8 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[1px] w-8 bg-[#96472D]/30" />
                <h3 className="text-2xl font-serif text-[#4A3F35] tracking-tight">Meraki</h3>
                <span className="text-[10px] font-medium tracking-[0.2em] text-[#6B5E51] uppercase">/may-rah-kee/ Greco</span>
              </div>
              <div className="max-w-md bg-[#FDFBF7] p-4 rounded-2xl border border-[#EBE7E0] shadow-sm">
                <p className="text-xs italic text-[#4A3F35] leading-relaxed">
                  (n.) l'anima, la creatività o l'amore messi in qualcosa; l'essenza di te stesso che metti nel tuo lavoro.
                </p>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl mb-10 leading-none font-serif text-[#4A3F35]">Sono Myriam Gentile.</h2>
            <div className="space-y-6 text-[#6B5E51] text-lg font-light leading-relaxed">
              <p>
                Sono una <strong>Pedagogista</strong>. Il mio lavoro integra pedagogia e neuroscienze con l'obiettivo di rendere accessibili conoscenze scientifiche complesse, trasformandole in strumenti concreti per affrontare le sfide educative con maggiore consapevolezza.
              </p>
              <p>
                Mi occupo di consulenza educativa rivolta a genitori ed educatrici, di tutoraggio specialistico per difficoltà scolastiche e di coordinamento e progettazione dei servizi educativi 0–6.
              </p>
              
              <div className="mt-8 flex justify-end">
                <Link to="/chi-sono" className="inline-flex items-center gap-2 text-[#A05A3E] font-medium text-sm group hover:underline underline-offset-8 transition-all">
                  Leggi la storia e l'approccio pedagogico di Myriam Gentile <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              <div className="mt-12 p-6 bg-[#FDFBF7] rounded-3xl border border-[#EBE7E0] shadow-sm">
                <div className="flex items-center gap-3 mb-4 text-[#4A3F35]">
                  <Scale className="w-5 h-5 text-[#A05A3E]" aria-hidden="true" />
                  <h3 className="text-xs font-bold uppercase tracking-widest">Informazioni Legali</h3>
                </div>
                <p className="text-sm italic leading-relaxed text-[#5A5046]">
                  Pedagogista ai sensi della normativa vigente, in possesso dei requisiti previsti dalla Legge 15 aprile 2024 n. 55. 
                  P.IVA: 02480080445
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
