
import React from 'react';
import { CheckCircle2, XCircle, ArrowRight, Sparkles } from 'lucide-react';

interface IsForYouProps {
  onOpenContact: () => void;
}

const IsForYou: React.FC<IsForYouProps> = ({ onOpenContact }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#4A3F35]">Questo percorso fa per te?</h2>
            <p className="text-[#6B5E51] mt-4 font-light text-lg italic">L'educazione è un processo di consapevolezza, non una delega.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-[#F0F4EE] p-10 rounded-[2.5rem] border border-[#55634A]/10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-8 text-[#4A5543]">
                <CheckCircle2 className="w-6 h-6" />
                <h3 className="text-xs font-bold uppercase tracking-widest">È per te se</h3>
              </div>
              <ul className="space-y-5 flex-grow">
                {[
                  "Vuoi comprendere le dinamiche, non solo correggere i sintomi.",
                  "Cerchi strumenti solidi, non soluzioni magiche o ricette pronte.",
                  "Vuoi basarti su conoscenze pedagogiche e neuroscientifiche accessibili.",
                  "Sei disposto/a a metterti in gioco come adulto di riferimento.",
                  "Vuoi diventare un punto di forza stabile per chi accompagni."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#4A3F35] font-light leading-snug">
                    <span className="w-1.5 h-1.5 bg-[#55634A] rounded-full mt-2 shrink-0"></span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FDF4E3] p-10 rounded-[2.5rem] border border-[#A05A3E]/10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-8 text-[#A05A3E]">
                <XCircle className="w-6 h-6" />
                <h3 className="text-xs font-bold uppercase tracking-widest">Non fa per te se</h3>
              </div>
              <ul className="space-y-5 flex-grow">
                {[
                  "Cerchi qualcuno che ti dica passivamente cosa devi fare.",
                  "Vuoi risposte rapide e definitive senza un processo di riflessione.",
                  "Vuoi delegare completamente la responsabilità educativa al professionista.",
                  "Cerchi un metodo rigido e standardizzato valido per chiunque.",
                  "Non sei interessato/a ad approfondire le basi scientifiche dell'agire educativo."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#4A3F35] font-light leading-snug">
                    <span className="w-1.5 h-1.5 bg-[#A05A3E] rounded-full mt-2 shrink-0"></span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* New CTA Section */}
          <div className="mt-20 text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-[#F9F6F1] rounded-full border border-[#EBE7E0]">
              <Sparkles className="w-4 h-4 text-[#96472D]" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#5A5046]">Il primo passo è l'ascolto</span>
            </div>
            <p className="text-[#6B5E51] mb-10 max-w-lg mx-auto font-light leading-relaxed">
              Ti sei ritrovato in questa descrizione? Iniziamo a parlarne. 
              Il primo colloquio serve a conoscerci e a tracciare la rotta del tuo percorso.
            </p>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#96472D] text-[#FFFFFF] rounded-full text-lg font-medium hover:bg-[#803C26] transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#96472D]/30"
            >
              Prenota un colloquio conoscitivo <ArrowRight className="w-5 h-5" />
            </button>
            <p className="mt-6 text-xs text-[#6B6155] uppercase tracking-widest">Nessun impegno, solo un incontro per capire come procedere.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsForYou;
