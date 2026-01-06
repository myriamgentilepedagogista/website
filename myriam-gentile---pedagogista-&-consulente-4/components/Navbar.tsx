
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    { name: 'Contatti', href: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, 'top')}
          className="text-xl font-semibold tracking-tight text-[#4A3F35]"
        >
          Myriam Gentile
        </a>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium hover:text-[#7B8B6F] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          className="bg-[#7B8B6F] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#6A7A5E] transition-colors shadow-lg shadow-[#7B8B6F]/20"
        >
          Contattami
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
