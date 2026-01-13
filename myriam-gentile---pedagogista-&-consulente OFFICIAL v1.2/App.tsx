import React, { useState } from 'react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IsForYou from './components/IsForYou';
import Services from './components/Services';
import About from './components/About';
import Credentials from './components/Credentials';
import WhoIWorkWith from './components/WhoIWorkWith';
import ProjectsCarousel from './components/ProjectsCarousel';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContact = () => setIsContactModalOpen(true);
  const closeContact = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7]" id="top">
      <SEO />
      <Navbar onOpenContact={openContact} />
      <main>
        <Hero onOpenContact={openContact} />
        <Services />
        <IsForYou />
        <About />
        <WhoIWorkWith />
        <Credentials />
        <ProjectsCarousel />
        <Blog onOpenContact={openContact} />
        <FAQ onOpenContact={openContact} />
        <Contact onOpenContact={openContact} />
      </main>
      <Footer onOpenContact={openContact} />
      
      <ContactModal isOpen={isContactModalOpen} onClose={closeContact} />
    </div>
  );
};

export default App;