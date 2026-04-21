'use client';

import React from 'react';
import { useContact } from '../context/ContactContext';

export default function ArticleContactButton() {
  const { openContact } = useContact();

  return (
    <button 
      onClick={openContact}
      className="px-12 py-5 bg-[#4A3F35] text-white rounded-full font-medium hover:bg-[#3A322A] transition-all transform hover:-translate-y-1 shadow-xl"
    >
      Parliamone insieme
    </button>
  );
}
