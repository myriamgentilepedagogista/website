'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactModal from './ContactModal';
import WhatsAppButton from './WhatsAppButton';
import StickyMobileButtons from './StickyMobileButtons';
import { ContactProvider, useContact } from '../context/ContactContext';

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { openContact, closeContact, isContactModalOpen } = useContact();

  return (
    <div className="min-h-screen bg-[#FDFBF7]" id="top">
      <Navbar onOpenContact={openContact} />
      <main>{children}</main>
      <Footer onOpenContact={openContact} />
      <WhatsAppButton />
      <StickyMobileButtons onOpenContact={openContact} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContact} />
    </div>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ContactProvider>
      <LayoutContent>{children}</LayoutContent>
    </ContactProvider>
  );
}
