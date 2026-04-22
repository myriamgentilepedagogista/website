import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, BookOpen, ChevronRight, Calendar, ArrowUpRight, Headphones, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { articles } from '../../../components/Blog';
import ArticleContactButton from '../../../components/ArticleContactButton';
import { articleFaqSchemaBySlug } from '../../../components/articleFaqSchema';
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd';
import { articleIsoDateBySlug } from '../../../components/articleDates';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = "https://myriamgentilepedagogista.com";

function getArticle(slug: string) {
  return articles.find(a => a.slug === slug);
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: 'Articolo non trovato | Myriam Gentile',
      alternates: {
        canonical: `${siteUrl}/blog`,
      },
    };
  }

  const url = `${siteUrl}/blog/${article.slug}`;
  const publishedTime = articleIsoDateBySlug[article.slug] || article.date;

  return {
    title: article.metaTitle || article.title,
    description: article.metaDesc || article.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.metaTitle || article.title,
      description: article.metaDesc || article.excerpt,
      url,
      siteName: 'Myriam Gentile Pedagogista',
      locale: 'it_IT',
      type: 'article',
      publishedTime,
      authors: ['Myriam Gentile'],
    },
    twitter: {
      card: 'summary',
      title: article.metaTitle || article.title,
      description: article.metaDesc || article.excerpt,
    },
  };
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  const siteUrl = "https://myriamgentilepedagogista.com";
  const isoDate = article ? articleIsoDateBySlug[article.slug] || article.date : undefined;

  if (!article) notFound();

  // BlogPosting Schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": isoDate,
    "dateModified": isoDate,
    "author": { "@id": `${siteUrl}/chi-sono#person` },
    "publisher": { "@id": `${siteUrl}/#business` },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${article.slug}`
    },
  };

  // Dinamic FAQ Schema for Articles that answer questions
  const structuredFaqs = articleFaqSchemaBySlug[article.slug];
  const articleFAQSchema = structuredFaqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": structuredFaqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
    }))
  } : null;

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: `${siteUrl}/` },
        { name: 'Blog', url: `${siteUrl}/blog` },
        { name: article.title, url: `${siteUrl}/blog/${article.slug}` }
      ]} />
      {articleFAQSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleFAQSchema) }} />
      )}
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A89E92] mb-8">
            <Link href="/" className="hover:text-[#D68C70] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-[#D68C70] transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#4A3F35] font-medium truncate max-w-[150px] md:max-w-none">Articolo</span>
          </nav>

          <Link href="/blog" className="inline-flex items-center gap-2 text-[#A89E92] hover:text-[#D68C70] transition-colors mb-12 group text-sm">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Spazio Pedagogico
          </Link>

          <article className="bg-white rounded-[3rem] border border-[#F3F0E9] shadow-sm overflow-hidden animate-fade-in-up">
            <div className="p-8 md:p-16 border-b border-[#F3F0E9]">
              <div className="flex items-center gap-3 text-[#D68C70] mb-6">
                <BookOpen className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">{article.date}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif text-[#4A3F35] mb-8 leading-tight">
                {article.title}
              </h1>
              <p className="text-xl text-[#6B5E51] font-light leading-relaxed italic border-l-4 border-[#D68C70]/30 pl-6">
                {article.excerpt}
              </p>
            </div>

            <div className="p-8 md:p-16 prose prose-stone max-w-none text-[#6B5E51] font-light leading-relaxed">
              {article.content}
            </div>

            {/* Podcast Interlink */}
            <div className="mx-8 md:mx-16 mb-8 p-8 bg-[#1DB954]/5 rounded-[2rem] border border-[#1DB954]/20 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-[#1DB954] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-[#1DB954]/20">
                <Headphones className="w-8 h-8 text-black" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h4 className="text-xl font-serif text-[#4A3F35] mb-2">Ascolta Myriam su Radio FM1</h4>
                <p className="text-sm text-[#6B5E51] font-light">
                  Approfondisci il tema del ritorno a scuola e del supporto pedagogico in questa intervista esclusiva su Spotify.
                </p>
              </div>
              <a 
                href="https://open.spotify.com/episode/7q4SnctMpisJNu4kpqwoRW?si=2197RfNVRTWSApAnqQAn5w"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap px-6 py-3 bg-[#1DB954] text-black rounded-full text-sm font-medium hover:bg-[#1ed760] transition-all flex items-center gap-2"
              >
                Ascolta ora <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="p-8 md:p-16 bg-[#FDFBF7] border-t border-[#F3F0E9] flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                <p className="text-[#4A3F35] font-serif text-3xl mb-2">Myriam Gentile</p>
                <p className="text-xs uppercase tracking-widest text-[#A89E92]">Pedagogista e Coordinatrice</p>
              </div>
              <ArticleContactButton />
            </div>
          </article>

          <div className="mt-24 pt-12 border-t border-[#F3F0E9]">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A89E92] mb-8">Approfondisci</h4>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <Link href="/servizi" className="text-[#4A3F35] hover:text-[#D68C70] font-serif text-xl transition-colors flex items-center gap-2 group">
                Servizi Pedagogici <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
              </Link>
              <Link href="/faq" className="text-[#4A3F35] hover:text-[#D68C70] font-serif text-xl transition-colors flex items-center gap-2 group">
                Domande Frequenti <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
              </Link>
            </div>
          </div>

          <div className="mt-20">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#A89E92] mb-10 text-center">Continua a leggere nel Blog</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles
                .filter(a => a.slug !== article.slug)
                .slice(0, 2)
                .map((other, idx) => (
                  <Link
                    key={idx}
                    href={`/blog/${other.slug}`}
                    className="group text-left p-8 bg-white border border-[#F3F0E9] hover:border-[#D68C70]/30 rounded-[2.5rem] transition-all shadow-sm hover:shadow-md"
                  >
                    <span className="text-[10px] uppercase tracking-widest text-[#A89E92] block mb-3 flex items-center gap-2">
                      <Calendar className="w-3 h-3" /> {other.date}
                    </span>
                    <h5 className="text-2xl font-serif text-[#4A3F35] group-hover:text-[#D68C70] transition-colors leading-snug flex items-center justify-between gap-4">
                      {other.title}
                      <ChevronRight className="w-5 h-5 shrink-0 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                    </h5>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
