
import React from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#4A3F35]/40 backdrop-blur-md transition-opacity duration-500" 
        onClick={onClose}
      ></div>

      {/* Simplified Container with requested background color #fbede2 */}
      <div className="relative bg-[#fbede2] w-full max-w-[580px] h-full md:h-auto md:max-h-[90vh] md:rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(74,63,53,0.3)] flex flex-col overflow-hidden animate-fade-in-up border border-white/50">
        
        {/* Simple Header */}
        <div className="relative p-6 md:p-8 flex items-center justify-between border-b border-[#4A3F35]/10 bg-[#fbede2]">
          <h3 className="text-2xl md:text-3xl font-serif text-[#4A3F35]">Iniziamo un percorso</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-[#4A3F35]/5 rounded-full transition-all text-[#4A3F35]/60 hover:text-[#4A3F35]"
            aria-label="Chiudi"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Section - The Form */}
        <div className="flex-grow overflow-y-auto bg-[#fbede2]">
          <div className="w-full">
            <iframe 
              src="https://tally.so/embed/kdGEVj?dynamicHeight=1&formEventsForwarding=1" 
              loading="lazy" 
              width="100%" 
              height="650" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              title="Contatta Myriam"
              className="w-full min-h-[500px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
