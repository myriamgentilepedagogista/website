
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface NavbarProps {
  onOpenContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Chi Sono', href: '/chi-sono' },
    { name: 'Servizi', href: '/servizi' },
    { name: 'Esperienza', href: '/esperienza' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    // If it's a section link on the home page, we might want to scroll
    // But since we have separate pages now, we just navigate
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${isScrolled ? 'bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between md:hidden w-full">
            <Link href="/" className="text-lg font-semibold tracking-tight text-[#4A3F35] whitespace-nowrap">
              Myriam Gentile
            </Link>
            <button 
              onClick={() => setIsMenuOpen(true)} 
              aria-label="Apri menu di navigazione"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="p-2 -mr-2 text-[#4A3F35] hover:text-[#55634A] transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>

          <div className="hidden md:grid grid-cols-3 items-center w-full">
            <div className="flex justify-start">
              <Link href="/" className="text-xl font-semibold tracking-tight text-[#4A3F35] whitespace-nowrap">
                Myriam Gentile
              </Link>
            </div>
            <div className="flex justify-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors whitespace-nowrap ${pathname === link.href ? 'text-[#55634A]' : 'text-[#4A3F35] hover:text-[#55634A]'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex justify-end">
              <button 
                onClick={onOpenContact} 
                className="bg-[#55634A] text-[#FFFFFF] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#46523D] transition-all transform hover:scale-105 shadow-lg shadow-[#55634A]/20"
              >
                Contattami
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div id="mobile-navigation" className={`fixed inset-0 z-[70] bg-[#4A3F35]/60 backdrop-blur-md transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute top-0 left-0 bottom-0 w-[80%] max-w-sm bg-[#FDFBF7] shadow-2xl transition-transform duration-300 flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-6 border-b border-[#EBE7E0] flex justify-between items-center">
            <span className="font-semibold text-[#4A3F35]">Menu</span>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              aria-label="Chiudi menu di navigazione"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="p-2 text-[#6B6155] hover:text-[#4A3F35]"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-grow py-8 px-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block text-2xl font-serif transition-colors ${pathname === link.href ? 'text-[#96472D]' : 'text-[#4A3F35] hover:text-[#96472D]'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="p-8 bg-[#F9F6F1]">
            <button onClick={() => { setIsMenuOpen(false); onOpenContact(); }} className="block w-full text-center py-4 bg-[#96472D] text-[#FFFFFF] rounded-2xl font-medium shadow-lg">
              Richiedi una consulenza
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
