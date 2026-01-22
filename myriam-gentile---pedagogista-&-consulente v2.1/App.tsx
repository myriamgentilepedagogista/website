import React, { useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import WhatsAppButton from './components/WhatsAppButton';
import { getMeta } from './seo/metadata';

// Home Components
import Hero from './components/Hero';
import Services from './components/Services';
import IsForYou from './components/IsForYou';
import About from './components/About';
import WhoIWorkWith from './components/WhoIWorkWith';
import Credentials from './components/Credentials';
import ProjectsCarousel from './components/ProjectsCarousel';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

// Detail Pages
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ExperiencePage from './pages/ExperiencePage';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import FAQPage from './pages/FAQPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();

  const openContact = () => setIsContactModalOpen(true);
  const closeContact = () => setIsContactModalOpen(false);

  // Scroll to top on route change (but skip if there is a hash)
  React.useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const homeMeta = getMeta("/");

  return (
    <div className="min-h-screen bg-[#FDFBF7]" id="top">
      <Navbar onOpenContact={openContact} />
      
      <main>
        <Routes>
          {/* Main Home Route */}
          <Route path="/" element={
            <>
              <SEO 
                title={homeMeta.title}
                description={homeMeta.description}
                path="/"
                ogType={homeMeta.ogType}
              />
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
            </>
          } />
          
          {/* Subpages */}
          <Route path="/chi-sono" element={<AboutPage />} />
          <Route path="/servizi" element={<ServicesPage />} />
          <Route path="/esperienza" element={<ExperiencePage />} />
          <Route path="/blog" element={<BlogPage onOpenContact={openContact} />} />
          <Route path="/blog/:slug" element={<ArticlePage onOpenContact={openContact} />} />
          <Route path="/faq" element={<FAQPage onOpenContact={openContact} />} />
          
          {/* 404 Page */}
          <Route path="/404" element={<NotFoundPage />} />
          
          {/* Catch-all: In preview, if a path is broken, redirect to home to prevent blank screens */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer onOpenContact={openContact} />
      <WhatsAppButton />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContact} />
    </div>
  );
};

export default App;
