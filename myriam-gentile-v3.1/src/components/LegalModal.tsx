
import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-[#4A3F35]/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border border-[#EBE7E0] animate-fade-in-up">
        <div className="flex items-center justify-between p-8 border-b border-[#F3F0E9]">
          <h3 className="text-2xl font-serif text-[#4A3F35]">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-[#F9F6F1] rounded-full transition-colors text-[#A89E92] hover:text-[#4A3F35]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-8 overflow-y-auto text-[#6B5E51] font-light leading-relaxed space-y-4">
          {content}
        </div>
        <div className="p-6 border-t border-[#F3F0E9] bg-[#FDFBF7] flex justify-end">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-[#4A3F35] text-white rounded-full font-medium text-sm hover:bg-[#3A322A] transition-all"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
