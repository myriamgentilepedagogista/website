
import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 md:pt-20 md:pb-0 overflow-hidden">
      {/* Background ispirato al banner LinkedIn "Meraki" */}
      <div className="absolute inset-0 z-0 bg-[#F9F6F1]">
        <svg
          className="absolute top-0 right-0 w-full h-full opacity-40"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path
            d="M0,0 L1000,0 L1000,400 C800,500 600,200 400,400 C200,600 100,300 0,400 Z"
            fill="#B15E41"
            opacity="0.3"
          />
          <circle cx="900" cy="100" r="200" fill="#7B8B6F" opacity="0.2" />
          <path
            d="M1000,1000 L0,1000 L0,800 C200,700 400,900 600,800 C800,700 900,900 1000,800 Z"
            fill="#7B8B6F"
            opacity="0.2"
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex flex-col items-center mb-10 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-serif text-[#4A3F35] mb-2 tracking-tight">Meraki</h2>
          <span className="text-xs font-medium tracking-[0.3em] text-[#6B5E51] uppercase mb-4">/may-rah-kee/ Greek</span>
          <div className="max-w-md bg-white/40 backdrop-blur-sm p-4 rounded-2xl border border-white/40">
            <p className="text-sm italic text-[#4A3F35] leading-relaxed">
              (n.) the soul, creativity, or love put into something; the essence of yourself that you put into your work.
            </p>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.05] mb-10 max-w-5xl mx-auto tracking-tight text-[#4A3F35]">
          <span className="sr-only">Myriam Gentile - Pedagogista a Civitanova Marche. </span>
          Trovo la meraviglia dove molti non vedono più niente.
        </h1>
        
        <p className="text-lg md:text-xl text-[#6B5E51] max-w-2xl mx-auto mb-14 leading-relaxed font-light">
          Accompagno le persone a ritrovare la bellezza nelle relazioni in famiglia, a scuola e nel lavoro educativo. Consulenza pedagogica e supporto specialistico.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-10 py-5 bg-[#96472D] text-[#FFFFFF] rounded-full text-lg font-medium hover:bg-[#803C26] transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#96472D]/30"
          >
            Iniziamo un percorso
          </button>
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, 'about')}
            className="w-full sm:w-auto px-10 py-5 bg-white shadow-lg text-[#4A3F35] rounded-full text-lg font-medium hover:bg-white transition-all transform hover:-translate-y-1"
          >
            Scopri chi sono
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40 hidden sm:block">
        <ArrowDown className="w-7 h-7 text-[#4A3F35]" aria-hidden="true" />
      </div>
    </section>
  );
};

export default Hero;
