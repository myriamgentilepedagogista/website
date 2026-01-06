
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IsForYou from './components/IsForYou';
import Services from './components/Services';
import About from './components/About';
import Credentials from './components/Credentials';
import WhoIWorkWith from './components/WhoIWorkWith';
import ProjectsCarousel from './components/ProjectsCarousel';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7]" id="top">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <IsForYou />
        <About />
        <WhoIWorkWith />
        <Credentials />
        <ProjectsCarousel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;