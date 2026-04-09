'use client';

import React, { createContext, useContext, useState } from 'react';

interface ContactContextType {
  openContact: () => void;
  closeContact: () => void;
  isContactModalOpen: boolean;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContact = () => setIsContactModalOpen(true);
  const closeContact = () => setIsContactModalOpen(false);

  return (
    <ContactContext.Provider value={{ openContact, closeContact, isContactModalOpen }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
}
