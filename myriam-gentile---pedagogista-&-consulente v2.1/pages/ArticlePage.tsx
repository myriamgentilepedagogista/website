import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, ChevronRight, Calendar, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';
import { articles } from '../components/Blog';

interface ArticlePageProps {
  onOpenContact: () => void;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ onOpenContact }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = articles.find(a => a.slug === slug);
  const siteUrl = "https://www.myriamgentilepedagogista.com";

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!article) {
      navigate('/blog', { replace: true });
    }
  }, [article, navigate]);

  if (!article) return null;

  // BlogPosting Schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": article.date,
    "author": { "@id": `${siteUrl}/chi-sono#person` },
    "publisher": { "@id": `${siteUrl}/#business` },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${article.slug}`
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "xpath": [
        "/html/head/title",
        "/html/meta[@name='description']/@content"
      ]
    }
  };

  // Dinamic FAQ Schema for Articles that answer questions
  const articleFAQSchema = article.slug.includes('quando') || article.slug.includes('differenze') ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": article.title,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": article.excerpt
        }
      }
    ]
  } : null;

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <SEO 
        title={article.metaTitle} 
        description={article.metaDesc} 
        ogType="article"
        path={`/blog/${article.slug}`}
      />
      <script type="application/ld+json">
        {JSON.stringify(blogPostingSchema)}
      </script>
      {articleFAQSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleFAQSchema)}
        </script>
      )}
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A89E92] mb-8">
            <Link to="/" className="hover:text-[#D68C70] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blog" className="hover:text-[#D68C70] transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#4A3F35] font-medium truncate max-w-[150px] md:max-w-none">Articolo</span>
          </nav>

          <Link to="/blog" className="inline-flex items-center gap-2 text-[#A89E92] hover:text-[#D68C70] transition-colors mb-12 group text-sm">
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

            <div className="p-8 md:p-16 bg-[#FDFBF7] border-t border-[#F3F0E9] flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                <p className="text-[#4A3F35] font-serif text-3xl mb-2">Myriam Gentile</p>
                <p className="text-xs uppercase tracking-widest text-[#A89E92]">Pedagogista e Coordinatrice</p>
              </div>
              <button 
                onClick={onOpenContact}
                className="px-12 py-5 bg-[#4A3F35] text-white rounded-full font-medium hover:bg-[#3A322A] transition-all transform hover:-translate-y-1 shadow-xl"
              >
                Parliamone insieme
              </button>
            </div>
          </article>

          <div className="mt-24 pt-12 border-t border-[#F3F0E9]">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A89E92] mb-8">Approfondisci</h4>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <Link to="/servizi" className="text-[#4A3F35] hover:text-[#D68C70] font-serif text-xl transition-colors flex items-center gap-2 group">
                Servizi Pedagogici <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
              </Link>
              <Link to="/faq" className="text-[#4A3F35] hover:text-[#D68C70] font-serif text-xl transition-colors flex items-center gap-2 group">
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
                    to={`/blog/${other.slug}`}
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
};

export default ArticlePage;