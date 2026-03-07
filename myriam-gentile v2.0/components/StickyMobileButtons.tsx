import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

interface StickyMobileButtonsProps {
  onOpenContact: () => void;
}

const StickyMobileButtons: React.FC<StickyMobileButtonsProps> = ({ onOpenContact }) => {
  const phoneNumber = "393452291697";
  const message = encodeURIComponent("Buongiorno Myriam, ti contatto dal sito per avere informazioni sulle tue consulenze pedagogiche.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[55] w-[90%] max-w-[400px] flex gap-3">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-[24px] text-[#25D366] font-semibold active:scale-95 transition-all duration-200 ring-1 ring-black/5"
      >
        <MessageCircle size={20} className="fill-current" />
        <span className="text-[15px] tracking-tight font-sans">WhatsApp</span>
      </a>
      
      <button
        onClick={onOpenContact}
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-[24px] text-[#4A3F35] font-semibold active:scale-95 transition-all duration-200 ring-1 ring-black/5"
      >
        <Mail size={20} />
        <span className="text-[15px] tracking-tight font-sans">Contattami</span>
      </button>
    </div>
  );
};

export default StickyMobileButtons;
