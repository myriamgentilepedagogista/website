
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Chi Sono', href: 'about' },
    { name: 'Servizi', href: 'services' },
    { name: 'Esperienza', href: 'experience' },
    { name: 'Blog', href: 'blog' },
    { name: 'FAQ', href: 'faq' },
    { name: 'Contatti', href: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu on click
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${isScrolled ? 'bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6">
          {/* Mobile Layout: 3 Columns Grid */}
          <div className="grid grid-cols-3 items-center md:hidden w-full">
            {/* Left: Hamburger */}
            <div className="flex justify-start">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="p-2 -ml-2 text-[#4A3F35] hover:text-[#7B8B6F] transition-colors"
                aria-label="Apri menu"
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Center: Logo */}
            <div className="flex justify-center">
              <a 
                href="#" 
                onClick={(e) => handleNavClick(e, 'top')}
                className="text-lg font-semibold tracking-tight text-[#4A3F35] whitespace-nowrap"
              >
                Myriam Gentile
              </a>
            </div>

            {/* Right: CTA Button */}
            <div className="flex justify-end">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="bg-[#7B8B6F] text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-[#6A7A5E] transition-colors shadow-sm"
              >
                Contatti
              </a>
            </div>
          </div>

          {/* Desktop Layout: 3 Columns Grid for Centered Links */}
          <div className="hidden md:grid grid-cols-3 items-center w-full">
            {/* Left Column: Logo */}
            <div className="flex justify-start">
              <a 
                href="#" 
                onClick={(e) => handleNavClick(e, 'top')}
                className="text-xl font-semibold tracking-tight text-[#4A3F35] whitespace-nowrap"
              >
                Myriam Gentile
              </a>
            </div>
            
            {/* Center Column: Navigation Links */}
            <div className="flex justify-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium hover:text-[#7B8B6F] transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Column: CTA Button */}
            <div className="flex justify-end">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="bg-[#7B8B6F] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#6A7A5E] transition-colors shadow-lg shadow-[#7B8B6F]/20"
              >
                Contattami
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[70] bg-[#4A3F35]/60 backdrop-blur-md transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute top-0 left-0 bottom-0 w-[80%] max-w-sm bg-[#FDFBF7] shadow-2xl transition-transform duration-300 flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-[#EBE7E0] flex justify-between items-center">
            <span className="font-semibold text-[#4A3F35]">Menu</span>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-[#A89E92] hover:text-[#4A3F35]"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-grow py-8 px-6 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-2xl font-serif text-[#4A3F35] hover:text-[#7B8B6F] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="p-8 bg-[#F9F6F1]">
            <p className="text-xs text-[#A89E92] uppercase tracking-[0.2em] mb-4 font-bold">Iniziamo ora</p>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="block w-full text-center py-4 bg-[#D68C70] text-white rounded-2xl font-medium shadow-xl shadow-[#D68C70]/20"
            >
              Richiedi una consulenza
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
