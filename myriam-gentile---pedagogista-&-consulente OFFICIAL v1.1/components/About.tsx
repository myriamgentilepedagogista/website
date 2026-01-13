
import React from 'react';
import { Sparkles, Scale } from 'lucide-react';

const PROFILE_IMAGE_URL = "https://media.licdn.com/dms/image/v2/D4D03AQFffN7uEwAnZw/profile-displayphoto-shrink_800_800/B4DZaXRjYPGsAc-/0/1746294684622?e=1769040000&v=beta&t=IxsX1icutmnLpBNRhmsQQe5CPC7Zoiy7KGOeiuuGljU"; 

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 aspect-[4/5] max-w-md mx-auto">
              <img 
                src={PROFILE_IMAGE_URL} 
                alt="Myriam Gentile - Pedagogista e Coordinatrice Pedagogica Civitanova Marche" 
                className="relative z-10 rounded-[3rem] w-full h-full object-cover shadow-2xl border-4 border-white"
              />
              <div className="absolute inset-0 bg-[#D68C70]/5 rounded-[3rem] -rotate-3 translate-x-4 translate-y-4 -z-10" aria-hidden="true"></div>
            </div>
            
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 bg-white shadow-xl py-4 px-8 rounded-full flex items-center gap-3 border border-[#F3F0E9] whitespace-nowrap">
              <Sparkles className="w-5 h-5 text-[#D68C70]" aria-hidden="true" />
              <span className="text-[#4A3F35] font-medium italic">Empowerment e Relazione</span>
            </div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl mb-10 leading-none font-serif text-[#4A3F35]">Sono Myriam Gentile.</h2>
            <div className="space-y-6 text-[#6B5E51] text-lg font-light leading-relaxed">
              <p>
                Sono una <strong>Pedagogista</strong>. Il mio lavoro integra pedagogia e neuroscienze con l'obiettivo di rendere accessibili conoscenze scientifiche complesse, trasformandole in strumenti concreti per affrontare le sfide educative con maggiore consapevolezza.
              </p>
              <p>
                Mi occupo di consulenza educativa rivolta a genitori ed educatrici, di tutoraggio specialistico per difficoltà scolastiche e di coordinamento e progettazione dei servizi educativi 0–6.
              </p>
              <p>
                Nel mio agire professionale porto il concetto greco di <strong>Meraki</strong>: mettere l'anima, la creatività e l'essenza di se stessi in ciò che si fa. Credo profondamente in un'educazione che prende forma nella relazione e nel lavoro in rete con i professionisti del territorio.
              </p>
              
              <div className="mt-12 p-6 bg-[#FDFBF7] rounded-3xl border border-[#EBE7E0] shadow-sm">
                <div className="flex items-center gap-3 mb-4 text-[#4A3F35]">
                  <Scale className="w-5 h-5 text-[#D68C70]" aria-hidden="true" />
                  <h4 className="text-xs font-bold uppercase tracking-widest">Informazioni Legali</h4>
                </div>
                <p className="text-sm italic leading-relaxed text-[#6B5E51]">
                  Pedagogista ai sensi della normativa vigente, in possesso dei requisiti previsti dalla Legge 15 aprile 2024 n. 55. 
                  Domanda di iscrizione all’Albo professionale dei Pedagogisti (Regione Marche) attualmente in fase di istruttoria.
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
