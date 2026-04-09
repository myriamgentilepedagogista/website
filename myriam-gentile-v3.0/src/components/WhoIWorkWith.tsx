
import React from 'react';
import { Users2, BriefcaseBusiness, School, HeartHandshake } from 'lucide-react';

const WhoIWorkWith: React.FC = () => {
  const groups = [
    { name: "Genitori", icon: <Users2 className="w-6 h-6" />, desc: "Per navigare insieme le complessità evolutive con strumenti concreti." },
    { name: "Educatrici", icon: <BriefcaseBusiness className="w-6 h-6" />, desc: "Per rafforzare l'agire educativo e la consapevolezza del ruolo." },
    { name: "Scuole", icon: <School className="w-6 h-6" />, desc: "Per progetti di mentoring, inclusione e orientamento scolastico." },
    { name: "Servizi 0-6", icon: <HeartHandshake className="w-6 h-6" />, desc: "Per un coordinamento e una supervisione pedagogica di eccellenza." }
  ];

  return (
    <section className="py-24 bg-[#55634A] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl mb-16 font-serif">A chi mi rivolgo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {groups.map((group, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20 transition-all hover:bg-white/20 hover:-translate-y-2">
              <div className="w-14 h-14 bg-white text-[#55634A] rounded-2xl flex items-center justify-center mx-auto mb-8">
                {group.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4">{group.name}</h3>
              <p className="text-sm text-white font-light leading-relaxed">{group.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIWorkWith;
