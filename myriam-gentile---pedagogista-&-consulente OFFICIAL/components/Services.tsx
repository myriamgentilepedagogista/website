
import React from 'react';
import { Users2, BriefcaseBusiness, Brain, Info } from 'lucide-react';

const ServiceCard: React.FC<{ title: string; desc: string; items: string[]; icon: React.ReactNode; color: string }> = ({ title, desc, items, icon, color }) => (
  <div className="bg-white p-10 rounded-[2.5rem] border border-[#F3F0E9] hover:border-[#D68C70]/30 transition-all hover:shadow-2xl flex flex-col h-full group">
    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-2xl mb-4 text-[#4A3F35] font-serif">{title}</h3>
    <p className="text-[#6B5E51] mb-8 font-light leading-relaxed">{desc}</p>
    <ul className="space-y-3 mt-auto">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-sm text-[#4A3F35]">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D68C70]"></span>
          <span className="opacity-90">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="pt-36 pb-24 md:py-24 bg-[#FDFBF7] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-[#D68C70] font-semibold tracking-widest text-xs uppercase mb-4 block">Aree di intervento</span>
          <h2 className="text-4xl md:text-5xl mb-6 font-serif">Consulenza e Supporto Specialistico</h2>
          <p className="text-lg text-[#6B5E51] font-light">
            Interventi mirati all'empowerment degli adulti e al rafforzamento dell'autonomia di bambini e ragazzi attraverso un approccio pedagogico-scientifico.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Per Genitori"
            desc="Uno spazio di riflessione per comprendere lo sviluppo e i comportamenti infantili senza giudizio."
            items={[
              "Lettura pedagogica dei comportamenti",
              "Supporto alle sfide educative",
              "Approccio basato sulle neuroscienze",
              "Empowerment del ruolo genitoriale"
            ]}
            icon={<Users2 className="w-7 h-7 text-white" />}
            color="bg-[#D68C70]"
          />
          <ServiceCard
            title="Per Educatrici"
            desc="Supporto professionale per rafforzare l'identità educativa e la gestione delle dinamiche di gruppo."
            items={[
              "Consulenza pedagogica professionale",
              "Educatrici e insegnanti dei servizi 0-6 anni",
              "Lettura delle dinamiche educative",
              "Rafforzamento del ruolo in sezione",
              "Sviluppo dell'autonomia decisionale"
            ]}
            icon={<BriefcaseBusiness className="w-7 h-7 text-white" />}
            color="bg-[#7B8B6F]"
          />
          <ServiceCard
            title="Tutoraggio Specialistico"
            desc="Percorsi individualizzati per BES, DSA e ADHD focalizzati sul metodo di studio e sull'autostima."
            items={[
              "Supporto allo studio BES/DSA/ADHD",
              "Metodo di studio personalizzato",
              "Rafforzamento dell'autonomia",
              "Intervento educativo non clinico"
            ]}
            icon={<Brain className="w-7 h-7 text-white" />}
            color="bg-[#4A3F35]"
          />
        </div>
        
        <div className="mt-16 p-8 bg-white/50 rounded-3xl border border-[#D68C70]/10 flex items-start gap-4">
          <Info className="w-6 h-6 text-[#D68C70] shrink-0 mt-1" />
          <p className="text-[#6B5E51] font-light leading-relaxed italic">
            "L'obiettivo della mia consulenza non è creare dipendenza, ma promuovere l'autonomia e la consapevolezza affinché gli adulti diventino punti di forza stabili per i bambini che accompagnano."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
