'use client';

import React from 'react';
import { BookOpen, ArrowRight, ChevronRight, Calendar, User, Clock, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useContact } from '../../context/ContactContext';
import { articles } from '../../components/Blog';
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd';

export default function BlogPage() {
  const { openContact } = useContact();
  const siteUrl = "https://myriamgentilepedagogista.com";

  const blogPosts = articles.map((article) => ({
    ...article,
    category: "Pedagogia",
    readTime: "7 min"
  }));

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Spazio Pedagogico - Blog di Myriam Gentile",
    "description": "Articoli e approfondimenti su pedagogia, neuroscienze e genitorialità consapevole.",
    "url": `${siteUrl}/blog`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": blogPosts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `${siteUrl}/blog/${post.slug}`,
        "name": post.title
      }))
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: `${siteUrl}/` },
        { name: 'Blog', url: `${siteUrl}/blog` }
      ]} />
      <div className="container mx-auto px-6">
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A89E92] mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#D68C70] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#4A3F35] font-medium">Blog</span>
        </nav>

        <header className="max-w-4xl mb-24">
          <span className="text-[#D68C70] font-semibold tracking-[0.2em] text-[10px] uppercase mb-4 block">Spazio Pedagogico</span>
          <h1 className="text-6xl md:text-8xl font-serif text-[#4A3F35] mb-8 leading-[0.9]">Approfondimenti e Riflessioni</h1>
          <p className="text-xl text-[#6B5E51] font-light max-w-2xl leading-relaxed">
            Uno spazio dedicato alla divulgazione pedagogica, dove la teoria scientifica incontra la pratica quotidiana per offrire nuovi sguardi sull'educazione.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, idx) => (
            <article key={idx} className="group bg-white rounded-[2.5rem] border border-[#F3F0E9] overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col">
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-6 text-[10px] uppercase tracking-widest font-bold text-[#D68C70]">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-[#EBE7E0]" />
                  <span className="text-[#A89E92]">{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-serif text-[#4A3F35] mb-4 group-hover:text-[#D68C70] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-[#6B5E51] font-light text-sm leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-[#F3F0E9] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] text-[#A89E92]">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-[#4A3F35] hover:text-[#D68C70] transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter / CTA */}
        <section className="mt-32 bg-[#4A3F35] text-white p-12 md:p-20 rounded-[4rem] text-center shadow-2xl">
          <BookOpen className="w-12 h-12 text-[#D68C70] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Vuoi approfondire un tema specifico?</h2>
          <p className="text-lg font-light mb-10 opacity-90 max-w-2xl mx-auto">
            Se hai dubbi o curiosità su un argomento pedagogico, scrivimi. Potrebbe diventare il tema del prossimo articolo dello Spazio Pedagogico.
          </p>
          <button 
            onClick={openContact}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#D68C70] text-white rounded-full text-lg font-bold hover:bg-[#96472D] transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Suggerisci un tema <ArrowUpRight className="w-5 h-5" />
          </button>
        </section>
      </div>
    </div>
  );
}
