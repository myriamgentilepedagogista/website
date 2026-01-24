
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "Insieme è un posto bellissimo",
    desc: "Libro illustrato ideato e curato da Myriam Gentile che racconta, con delicatezza e verità, il primo giorno di scuola attraverso lo sguardo di un bambino, celebrando l’incontro, l’inclusione e la cura educativa, nato per celebrare i dieci anni del Nido d’Infanzia Bimboland di Corridonia. Testi di Federico Mariucci, Illustrazioni di Daniela Carpineti",
    image: "https://i.imgur.com/17UKLg1.jpeg",
    width: 1200,
    height: 675
  },
  {
    title: "La scuola che motiva",
    desc: "Progetto PNRR di mentoring e contrasto alla dispersione scolastica focalizzato sulle potenzialità di ogni studente.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200",
    width: 1200,
    height: 675
  },
  {
    title: "Aperitivi Pedagogici",
    desc: "Incontri di formazione e supporto alla genitorialità in contesti informali, per rendere la pedagogia parte del quotidiano.",
    image: "https://i.imgur.com/gwMaIKl.jpeg",
    width: 1200,
    height: 675
  },
  {
    title: "Workshop DSA",
    desc: "Formazione specialistica 'Conoscerli per non temerli' rivolta ai docenti per una didattica realmente inclusiva.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1200",
    width: 1200,
    height: 675
  },
  {
    title: "Io Sono",
    desc: "Evento di sensibilizzazione patrocinato dai comuni del territorio per celebrare l'identità e la gioia educativa.",
    image: "https://i.imgur.com/EgYgISV.jpeg",
    width: 1200,
    height: 675
  }
];

const ProjectsCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % projects.length);
  const prev = () => setCurrent((current - 1 + projects.length) % projects.length);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif mb-16 text-[#4A3F35] text-center">Progetti Realizzati</h2>
        
        <div className="max-w-6xl mx-auto relative group">
          {/* Picture Holder */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[3rem] shadow-2xl bg-[#F9F6F1]">
            {projects.map((project, i) => (
              <div 
                key={i}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${i === current ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                style={{ transform: `translateX(${(i - current) * 100}%)` }}
              >
                <img 
                  src={project.image} 
                  alt={`Immagine del progetto: ${project.title}`} 
                  width={project.width}
                  height={project.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button 
              onClick={prev} 
              aria-label="Progetto precedente"
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-[#4A3F35] shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next} 
              aria-label="Prossimo progetto"
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-[#4A3F35] shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption Area - Under the picture holder */}
          <div 
            key={current} 
            className="mt-10 text-left max-w-4xl mx-auto animate-fade-in-up"
          >
            <h3 className="text-3xl md:text-4xl font-serif mb-4 text-[#4A3F35]">
              {projects[current].title}
            </h3>
            <p className="text-lg text-[#6B5E51] font-light leading-relaxed">
              {projects[current].desc}
            </p>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {projects.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrent(i)}
                aria-label={`Vai al progetto ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all ${i === current ? 'w-10 bg-[#D68C70]' : 'bg-[#D68C70]/20 hover:bg-[#D68C70]/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
