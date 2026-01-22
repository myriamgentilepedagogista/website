import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "393452291697";
  const message = encodeURIComponent("Buongiorno Myriam, ti contatto dal sito per avere informazioni sulle tue consulenze pedagogiche.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[55] flex items-center gap-3 group"
      aria-label="Contattami su WhatsApp"
    >
      {/* Label - visible on hover or slightly delayed fade in */}
      <span className="bg-white px-4 py-2 rounded-full shadow-lg text-[#4A3F35] text-sm font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none border border-[#F3F0E9]">
        Scrivimi su WhatsApp
      </span>
      
      {/* The Button */}
      <div className="relative">
        <div className="relative w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
          <MessageCircle className="w-7 h-7 fill-current" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
