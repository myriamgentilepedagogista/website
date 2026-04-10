'use client';

import React from 'react';
import Hero from './Hero';
import Services from './Services';
import IsForYou from './IsForYou';
import About from './About';
import WhoIWorkWith from './WhoIWorkWith';
import Credentials from './Credentials';
import ProjectsCarousel from './ProjectsCarousel';
import PodcastSection from './PodcastSection';
import Blog from './Blog';
import FAQ from './FAQ';
import Contact from './Contact';

import { useContact } from '../context/ContactContext';

export default function HomeContent() {
  const { openContact } = useContact();
  return (
    <>
      <Hero onOpenContact={openContact} />
      <Services />
      <IsForYou onOpenContact={openContact} />
      <About />
      <WhoIWorkWith />
      <Credentials />
      <ProjectsCarousel />
      <PodcastSection />
      <Blog onOpenContact={openContact} />
      <FAQ onOpenContact={openContact} />
      <Contact onOpenContact={openContact} />
    </>
  );
}
