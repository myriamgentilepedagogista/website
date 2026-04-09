
import React from 'react';
import { Headphones, ExternalLink, Play } from 'lucide-react';

const PodcastSection: React.FC = () => {
  const SPOTIFY_URL = "https://open.spotify.com/episode/7q4SnctMpisJNu4kpqwoRW?si=2197RfNVRTWSApAnqQAn5w";
  const PODCAST_IMAGE = "https://ajjwlwiyvg6jgwre.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-05%20at%2015.31.04.jpeg";

  const podcastSchema = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    "name": "Intervista di Myriam Gentile su Radio FM1",
    "description": "In questa puntata di 'Happy Together', Myriam parla del ritorno a scuola e dell'importanza del supporto pedagogico specialistico.",
    "url": SPOTIFY_URL,
    "image": PODCAST_IMAGE,
    "author": {
      "@type": "Person",
      "name": "Myriam Gentile"
    },
    "partOfSeries": {
      "@type": "PodcastSeries",
      "name": "Happy Together",
      "url": "https://open.spotify.com/show/7q4SnctMpisJNu4kpqwoRW"
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <script type="application/ld+json">{JSON.stringify(podcastSchema)}</script>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://ajjwlwiyvg6jgwre.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-05%20at%2015.31.04.jpeg" 
          alt="" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-transparent to-[#FDFBF7]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl rounded-[3rem] overflow-hidden shadow-2xl border border-white/50 flex flex-col md:flex-row items-stretch">
          <div className="md:w-2/5 relative h-[400px] md:h-auto p-6">
            <div className="relative w-full h-full rounded-t-[12rem] rounded-b-[3rem] overflow-hidden shadow-inner border-4 border-white/50">
              <img 
                src="https://ajjwlwiyvg6jgwre.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-05%20at%2015.31.04.jpeg" 
                alt="Myriam Gentile intervistata da Radio FM1" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A3F35]/40 to-transparent flex items-end p-8">
                <div className="bg-[#1DB954] p-3 rounded-full shadow-lg animate-pulse">
                  <Play className="w-6 h-6 text-white fill-current" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Headphones className="w-5 h-5 text-[#A05A3E]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#A05A3E]">Intervista Radiofonica</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-serif text-[#4A3F35] mb-6 leading-tight">
              Ascolta l'intervista di Myriam Gentile su Radio FM1
            </h2>
            
            <p className="text-[#6B5E51] text-base md:text-lg font-light leading-relaxed mb-8">
              In questa puntata di "Happy Together", Myriam parla del ritorno a scuola e dell'importanza del supporto pedagogico specialistico per bambini e adolescenti. Un approfondimento su come affrontare le sfide educative con serenità.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href={SPOTIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#1DB954] text-white px-8 py-4 rounded-full font-medium hover:bg-[#1ed760] transition-all shadow-md hover:shadow-lg active:scale-95 text-sm md:text-base"
              >
                Ascolta su Spotify <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#B15E41]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7B8B6F]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10" />
    </section>
  );
};

export default PodcastSection;
