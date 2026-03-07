import React from 'react';
import { ArrowLeft, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7] px-6">
      <div className="text-center max-w-lg">
        <div className="w-24 h-24 bg-[#D68C70]/10 rounded-full flex items-center justify-center mx-auto mb-10">
          <Map className="w-12 h-12 text-[#D68C70]" />
        </div>
        <h1 className="text-6xl md:text-8xl font-serif text-[#4A3F35] mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-serif text-[#4A3F35] mb-6">Pagina non trovata</h2>
        <p className="text-[#6B5E51] font-light mb-12 leading-relaxed">
          Sembra che la strada che stai cercando non sia al momento percorribile. 
          Ripartiamo insieme dalla bellezza della Home.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;