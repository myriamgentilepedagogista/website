
import React from 'react';
import { Users2, BriefcaseBusiness, Brain, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard: React.FC<{ 
  title: string; 
  desc: string; 
  items: string[]; 
  icon: React.ReactNode; 
  iconColor: string 
}> = ({ title, desc, items, icon, iconColor }) => (
  <div className="bg-white p-12 rounded-[2.5rem] border border-[#F3F0E9] transition-all hover:shadow-xl flex flex-col h-full">
    <div className={`w-14 h-14 ${iconColor} rounded-2xl flex items-center justify-center mb-10`}>
      {icon}
    </div>
    <h3 className="text-2xl mb-5 text-[#4A3F35] font-serif">{title}</h3>
    <p className="text-[#6B5E51] mb-10 font-light leading-relaxed text-base">
      {desc}
    </p>
    <ul className="space-y-4 mt-auto">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-sm text-[#4A3F35]">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#B15E41] shrink-0"></span>
          <span className="opacity-90">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#FDFBF7] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20">
          <span className="text-[#B15E41] font-semibold tracking-[0.2em] text-[10px] uppercase mb-4 block">Aree di intervento</span>
          <h2 className="text-5xl md:text-6xl mb-8 font-serif text-[#4A3F35] leading-tight">Consulenza e Supporto Specialistico</h2>
          <p className="text-xl text-[#6B5E51] font-light max-w-3xl leading-relaxed">
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
            icon={<Users2 className="w-7 h-7 text-[#FFFFFF]" />}
            iconColor="bg-[#B15E41]"
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
            icon={<BriefcaseBusiness className="w-7 h-7 text-[#FFFFFF]" />}
            iconColor="bg-[#7B8B6F]"
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
            icon={<Brain className="w-7 h-7 text-[#FFFFFF]" />}
            iconColor="bg-[#4A3F35]"
          />
        </div>

        <div className="mt-12 flex justify-end">
          <Link to="/servizi" className="inline-flex items-center gap-2 text-[#B15E41] font-medium text-sm group hover:underline underline-offset-8 transition-all">
            Approfondisci i servizi di consulenza pedagogica e tutoraggio <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
