
import React from 'react';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const MYRIAM_IMAGE_URL = "https://ajjwlwiyvg6jgwre.public.blob.vercel-storage.com/Untitled%20design%20%2843%29.png";

  return (
    <section id="hero" className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
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
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          <div className="w-full lg:w-[55%] text-center lg:text-left order-1">
            <div className="inline-flex items-center gap-0 lg:gap-3 mb-6 animate-fade-in">
              <span className="hidden lg:block h-[1px] w-8 bg-[#96472D]/30" />
              <span className="text-[9px] lg:text-[11px] font-bold tracking-[0.2em] text-[#96472D] uppercase bg-[#96472D]/5 px-3 lg:px-4 py-1 lg:py-1.5 rounded-full border border-[#96472D]/10">
                Pedagogista a Civitanova Marche
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-normal leading-[1.1] mb-8 tracking-tight text-[#4A3F35]">
              <span className="sr-only">Myriam Gentile - Pedagogista a Civitanova Marche. </span>
              Trovo la meraviglia dove molti non vedono più niente.
            </h1>

            {/* Image on mobile: under the title */}
            <div className="lg:hidden w-full mb-10 animate-fade-in-up">
              <div className="relative max-w-[340px] mx-auto">
                <img 
                  src={MYRIAM_IMAGE_URL} 
                  alt="Myriam Gentile - Pedagogista" 
                  className="w-full h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <p className="text-base md:text-lg lg:text-xl text-[#6B5E51] max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
              Accompagno le persone a ritrovare la bellezza nelle relazioni in famiglia, a scuola e nel lavoro educativo. Consulenza pedagogica e supporto specialistico.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-4 bg-[#96472D] text-[#FFFFFF] rounded-full text-base font-medium hover:bg-[#803C26] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#96472D]/20 active:scale-95"
              >
                Iniziamo un percorso
              </button>
              <Link
                href="/chi-sono"
                className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-sm border border-[#EBE7E0] text-[#4A3F35] rounded-full text-base font-medium hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-sm active:scale-95 text-center"
              >
                Scopri chi sono
              </Link>
            </div>
          </div>

          {/* Image on desktop: on the right */}
          <div className="hidden lg:block lg:w-[45%] order-2 animate-fade-in-up">
            <div className="relative max-w-2xl ml-auto">
              <img 
                src={MYRIAM_IMAGE_URL} 
                alt="Myriam Gentile - Pedagogista" 
                className="w-full h-auto object-contain scale-110 origin-right"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#B15E41]/10 to-transparent rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
