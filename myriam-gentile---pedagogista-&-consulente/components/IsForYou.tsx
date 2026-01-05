
import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const IsForYou: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#4A3F35]">Questo percorso fa per te?</h2>
            <p className="text-[#6B5E51] mt-4 font-light">L'educazione è un processo di consapevolezza, non una delega.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-[#F0F4EE] p-10 rounded-[2.5rem] border border-[#7B8B6F]/10">
              <div className="flex items-center gap-3 mb-8 text-[#7B8B6F]">
                <CheckCircle2 className="w-6 h-6" />
                <h4 className="text-xs font-bold uppercase tracking-widest">È per te se</h4>
              </div>
              <ul className="space-y-5">
                {[
                  "Vuoi comprendere le dinamiche, non solo correggere i sintomi.",
                  "Cerchi strumenti solidi, non soluzioni magiche o ricette pronte.",
                  "Vuoi basarti su conoscenze scientifiche e neuroscientifiche accessibili.",
                  "Sei disposto/a a metterti in gioco come adulto di riferimento.",
                  "Vuoi diventare un punto di forza stabile per chi accompagni."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#4A3F35] font-light leading-snug">
                    <span className="w-1.5 h-1.5 bg-[#7B8B6F] rounded-full mt-2 shrink-0"></span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FDF4E3] p-10 rounded-[2.5rem] border border-[#D68C70]/10">
              <div className="flex items-center gap-3 mb-8 text-[#D68C70]">
                <XCircle className="w-6 h-6" />
                <h4 className="text-xs font-bold uppercase tracking-widest">Non fa per te se</h4>
              </div>
              <ul className="space-y-5">
                {[
                  "Cerchi qualcuno che ti dica passivamente cosa devi fare.",
                  "Vuoi risposte rapide e definitive senza un processo di riflessione.",
                  "Vuoi delegare completamente la responsabilità educativa al professionista.",
                  "Cerchi un metodo rigido e standardizzato valido per chiunque.",
                  "Non sei interessato/a ad approfondire le basi scientifiche dell'agire educativo."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#4A3F35] font-light leading-snug opacity-80">
                    <span className="w-1.5 h-1.5 bg-[#D68C70] rounded-full mt-2 shrink-0"></span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsForYou;
