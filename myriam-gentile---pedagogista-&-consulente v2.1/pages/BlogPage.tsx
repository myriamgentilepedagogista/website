     import React from 'react';
import { ArrowLeft, Calendar, User, ArrowRight, ChevronRight, ArrowUpRight, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { articles } from '../components/Blog';
import { getMeta } from '../seo/metadata';

interface BlogPageProps {
  onOpenContact: () => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onOpenContact }) => {
  const location = useLocation();
  const meta = getMeta(location.pathname);

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <SEO 
        title={meta.title}
        description={meta.description}
        path={location.pathname}
        ogType={meta.ogType}
      />
      <div className="container mx-auto px-6">
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#A89E92] mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#D68C70] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#4A3F35] font-medium">Spazio Pedagogico</span>
        </nav>

        <header className="max-w-4xl mb-20">
          <span className="text-[#D68C70] font-semibold tracking-widest text-xs uppercase mb-4 block">Divulgazione e Riflessione</span>
          <h1 className="text-5xl md:text-8xl font-serif text-[#4A3F35] mb-8 leading-none">Spazio Pedagogico</h1>
          <p className="text-xl text-[#6B5E51] font-light leading-relaxed">
            In questo spazio condivido riflessioni, approfondimenti e sguardi pedagogici sulla crescita, l'educazione e il benessere delle relazioni. Credo che la conoscenza sia il primo passo per un'educazione consapevole.
          </p>
          
          <div className="mt-12 flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-white rounded-full border border-[#F3F0E9] text-xs font-medium text-[#4A3F35]">Pedagogia Generale</span>
            <span className="px-4 py-2 bg-white rounded-full border border-[#F3F0E9] text-xs font-medium text-[#4A3F35]">Neuroscienze</span>
            <span className="px-4 py-2 bg-white rounded-full border border-[#F3F0E9] text-xs font-medium text-[#4A3F35]">DSA e BES</span>
            <span className="px-4 py-2 bg-white rounded-full border border-[#F3F0E9] text-xs font-medium text-[#4A3F35]">Genitorialità</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-white rounded-[3rem] overflow-hidden border border-[#F3F0E9] hover:shadow-2xl transition-all group">
              <div className="p-10 flex flex-col h-full">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-[#A89E92] mb-6">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> Myriam Gentile</span>
                </div>
                <h2 className="text-3xl font-serif text-[#4A3F35] mb-6 group-hover:text-[#D68C70] transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-[#6B5E51] font-light leading-relaxed mb-10 flex-grow text-sm">
                  {article.excerpt}
                </p>
                <Link to={`/blog/${article.slug}`} className="inline-flex items-center gap-2 text-[#4A3F35] font-medium border-b border-[#D68C70] pb-1 hover:text-[#D68C70] transition-colors w-fit text-sm">
                  Leggi l'articolo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Content: Why this blog? */}
        <section className="mt-32 p-12 md:p-16 bg-white rounded-[4rem] border border-[#F3F0E9] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
               <div className="w-16 h-16 bg-[#D68C70]/10 rounded-2xl flex items-center justify-center mb-6">
                 <BookOpen className="w-8 h-8 text-[#D68C70]" />
               </div>
               <h3 className="text-3xl font-serif text-[#4A3F35] mb-4">La Pedagogia accessibile</h3>
               <p className="text-[#6B5E51] font-light leading-relaxed">
                 Il mio intento è rendere accessibili concetti complessi della pedagogia e delle neuroscienze, offrendo spunti di riflessione per chi vive l'educazione ogni giorno: genitori, educatrici e insegnanti.
               </p>
            </div>
            <div className="lg:col-span-2 space-y-6 text-[#6B5E51] font-light leading-relaxed">
              <p>
                Spesso la teoria pedagogica sembra distante dalla realtà dei conflitti in famiglia o delle sfide scolastiche. In questo blog cerco di gettare un ponte tra la ricerca scientifica e l'agire pratico, perché un genitore informato è un genitore più sereno, e un professionista consapevole è un valore aggiunto per l'intera comunità educante.
              </p>
              <div className="flex gap-6 mt-8">
                <Link to="/faq" className="text-[#D68C70] font-medium hover:underline text-sm">Hai domande specifiche? Consulta le FAQ →</Link>
                <Link to="/servizi" className="text-[#D68C70] font-medium hover:underline text-sm">Scopri i percorsi di consulenza →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages Block */}
        <div className="mt-24 pt-12 border-t border-[#F3F0E9]">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A89E92] mb-8">Approfondisci</h4>
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <Link to="/faq" className="text-[#4A3F35] hover:text-[#D68C70] font-serif text-xl transition-colors flex items-center gap-2 group">
              Domande Frequenti <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
            </Link>
            <Link to="/servizi" className="text-[#4A3F35] hover:text-[#D68C70] font-serif text-xl transition-colors flex items-center gap-2 group">
              Servizi Pedagogici <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
            </Link>
            <Link to="/chi-sono" className="text-[#4A3F35] hover:text-[#D68C70] font-serif text-xl transition-colors flex items-center gap-2 group">
              Chi è Myriam Gentile <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
