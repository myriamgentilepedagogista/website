
import React from 'react';
import { Mail, MapPin, MessageCircle, Info, Sparkles, Heart, ArrowRight } from 'lucide-react';

interface ContactProps {
  onOpenContact: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenContact }) => {
  const contactInfos = [
    {
      icon: <Mail className="w-5 h-5 text-[#96472D]" />,
      label: 'Email',
      value: 'myriamgentilepedagogista@outlook.it',
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-[#55634A]" />,
      label: 'Cellulare',
      value: '+39 345 2291697',
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#4A3F35]" />,
      label: 'Indirizzo Studio',
      value: 'Via San Callisto da Caravario 5-G, Studio Kairos, Civitanova Marche (MC)',
    },
  ];

  const MapComponent = ({ className = "" }: { className?: string }) => (
    <div className={`rounded-[2.5rem] overflow-hidden border border-[#F3F0E9] shadow-lg h-72 grayscale-[0.5] hover:grayscale-0 transition-all duration-700 ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.4392703222375!2d13.7245397!3d43.3050631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1332727e1ffb2b67%3A0x1df0fc2ba681fc57!2sVia%20S.%20Callisto%20Caravario%2C%205%2C%2062012%20Civitanova%20Marche%20MC!5e0!3m2!1sen!2sit!4v1767629105027!5m2!1sen!2sit"
        width="600"
        height="450"
        style={{ border: 0, width: '100%', height: '100%' }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mappa dello Studio Kairos a Civitanova Marche"
      />
    </div>
  );

  return (
    <section id="contact" className="py-24 bg-[#FDFBF7] scroll-mt-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#96472D]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#55634A]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="animate-fade-in">
            <span className="text-[#96472D] font-semibold tracking-widest text-xs uppercase mb-4 block">
              Contatti
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl mb-8 leading-[1.1] font-serif text-[#4A3F35]">
              Iniziamo un percorso insieme.
            </h2>
            <p className="text-xl text-[#6B5E51] mb-12 font-light leading-relaxed max-w-lg">
              La meraviglia è il punto di partenza. Scrivimi per fissare un colloquio conoscitivo o richiedere informazioni.
            </p>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfos.map((info, idx) => (
                <div
                  key={idx}
                  className="flex flex-col p-8 bg-white rounded-[2rem] border border-[#F3F0E9] transition-all hover:shadow-md hover:border-[#96472D]/20"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FDFBF7] flex items-center justify-center mb-5 border border-[#F3F0E9]">
                    {info.icon}
                  </div>
                  <p className="text-xs text-[#6B6155] uppercase tracking-widest font-bold mb-1">
                    {info.label}
                  </p>
                  <p className="text-[#4A3F35] font-medium text-sm leading-relaxed">{info.value}</p>
                </div>
              ))}
            </div>

            {/* Mobile Map - Only visible on small/medium screens under the address card */}
            <MapComponent className="mb-12 lg:hidden" />

            {/* Location Info Box */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-[#F3F0E9] max-w-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#55634A]/10 flex items-center justify-center shrink-0">
                <Info className="w-5 h-5 text-[#55634A]" />
              </div>
              <div>
                <p className="text-sm text-[#4A3F35] font-medium mb-1">Dove mi trovi</p>
                <p className="text-sm text-[#6B5E51] leading-relaxed">
                  Ricevo a <strong>Civitanova Marche</strong> presso lo <strong>Studio Kairos</strong> e offro consulenze <strong>online</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="relative pt-10">
            {/* The Contact Action Card */}
            <div className="relative z-10 group">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#96472D] rounded-full flex items-center justify-center shadow-xl rotate-12 z-20 transition-transform group-hover:scale-110 group-hover:rotate-6">
                <Heart className="w-10 h-10 text-[#FFFFFF] fill-current" />
              </div>
              
              <div className="bg-white p-10 md:p-16 rounded-[3.5rem] shadow-2xl shadow-[#4A3F35]/10 border border-[#F3F0E9] text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F9F6F1] rounded-full mb-8 border border-[#EBE7E0]">
                  <Sparkles className="w-4 h-4 text-[#96472D]" />
                  <span className="text-xs uppercase tracking-widest font-bold text-[#6B5E51]">Iniziamo da qui</span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-serif text-[#4A3F35] mb-6 leading-tight">Pronti a riscoprire la bellezza?</h3>
                <p className="text-[#6B5E51] text-lg font-light mb-12 leading-relaxed">
                  Compila il modulo per fissare il tuo primo colloquio o richiedere una consulenza pedagogica personalizzata.
                </p>

                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-4 px-12 py-6 bg-[#96472D] text-[#FFFFFF] rounded-full text-xl font-medium hover:bg-[#803C26] transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#96472D]/30 w-full md:w-auto"
                >
                  Apri il modulo <ArrowRight className="w-6 h-6" />
                </button>
              </div>

              {/* Decorative base for the card */}
              <div className="absolute inset-0 bg-[#55634A]/5 rounded-[3.5rem] translate-y-6 translate-x-4 -z-10 transition-transform group-hover:translate-x-6"></div>
            </div>

            {/* Desktop Map - Only visible on large screens */}
            <MapComponent className="mt-16 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
