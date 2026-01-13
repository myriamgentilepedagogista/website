
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onOpenContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false); 

    if (id === 'top' || id === '') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      // Give the browser a moment to mount the home page before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${isScrolled ? 'bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 items-center md:hidden w-full">
            <div className="flex justify-start">
              <button 
                onClick={() => setIsMenuOpen(true)} 
                aria-label="Apri menu di navigazione"
                className="p-2 -ml-2 text-[#4A3F35] hover:text-[#7B8B6F] transition-colors"
              >
                <Menu size={24} />
              </button>
            </div>
            <div className="flex justify-center">
              <Link to="/" className="text-lg font-semibold tracking-tight text-[#4A3F35] whitespace-nowrap">
                Myriam Gentile
              </Link>
            </div>
            <div className="flex justify-end">
              <button 
                onClick={onOpenContact} 
                aria-label="Contattami ora"
                className="bg-[#7B8B6F] text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-[#6A7A5E] transition-colors"
              >
                Contatti
              </button>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-3 items-center w-full">
            <div className="flex justify-start">
              <Link to="/" className="text-xl font-semibold tracking-tight text-[#4A3F35] whitespace-nowrap">
                Myriam Gentile
              </Link>
            </div>
            <div className="flex justify-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`/#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium hover:text-[#7B8B6F] transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex justify-end">
              <button 
                onClick={onOpenContact} 
                className="bg-[#7B8B6F] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#6A7A5E] transition-all transform hover:scale-105 shadow-lg shadow-[#7B8B6F]/20"
              >
                Contattami
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[70] bg-[#4A3F35]/60 backdrop-blur-md transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute top-0 left-0 bottom-0 w-[80%] max-w-sm bg-[#FDFBF7] shadow-2xl transition-transform duration-300 flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-6 border-b border-[#EBE7E0] flex justify-between items-center">
            <span className="font-semibold text-[#4A3F35]">Menu</span>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              aria-label="Chiudi menu di navigazione"
              className="p-2 text-[#A89E92] hover:text-[#4A3F35]"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-grow py-8 px-6 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`/#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-2xl font-serif text-[#4A3F35] hover:text-[#7B8B6F] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="p-8 bg-[#F9F6F1]">
            <button onClick={() => { setIsMenuOpen(false); onOpenContact(); }} className="block w-full text-center py-4 bg-[#D68C70] text-white rounded-2xl font-medium">
              Richiedi una consulenza
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
