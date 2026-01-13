import React from 'react';
import { getMeta, normalizePath } from '../seo/metadata';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({
  title: propTitle,
  description: propDescription,
  path: propPath,
  ogType: propOgType,
  ogImage = "https://media.licdn.com/dms/image/v2/D4D03AQFffN7uEwAnZw/profile-displayphoto-shrink_800_800/B4DZaXRjYPGsAc-/0/1746294684622?e=1769040000&v=beta&t=IxsX1icutmnLpBNRhmsQQe5CPC7Zoiy7KGOeiuuGljU"
}) => {
  const siteName = "Myriam Gentile Pedagogista";
  const siteUrl = "https://www.myriamgentilepedagogista.com";

  // 1. Determinazione del path logico normalizzato
  const getLogicalPath = () => {
    if (propPath) return normalizePath(propPath);
    
    // Priorità all'hash (HashRouter)
    if (window.location.hash) {
      return normalizePath(window.location.hash.replace(/^#/, ""));
    }
    
    // Fallback su pathname (BrowserRouter)
    return normalizePath(window.location.pathname);
  };

  const logicalPath = getLogicalPath();
  const defaultMeta = getMeta(logicalPath);

  // 2. Metadati finali
  const finalTitle = propTitle || defaultMeta.title;
  const finalDescription = propDescription || defaultMeta.description;
  const finalOgType = propOgType || defaultMeta.ogType;
  
  const headTitle = finalTitle.includes(siteName) ? finalTitle : `${finalTitle} | ${siteName}`;

  // 3. Smart Environment Logic per indicizzazione e canonical
  const isPreview = 
    window.location.hostname.includes('usercontent.goog') || 
    window.location.hostname.includes('aistudio.google.com') ||
    window.location.protocol === 'blob:' ||
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1';
  
  // Canonical URL sempre "pulito" (senza hash) per produzione
  const canonicalUrl = isPreview ? null : `${siteUrl}${logicalPath === '/' ? '' : logicalPath}`;
  const absoluteUrl = canonicalUrl || siteUrl;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Myriam Gentile - Pedagogista",
    "url": siteUrl,
    "logo": ogImage,
    "image": ogImage,
    "description": finalDescription,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via San Callisto da Caravario 5-G, Studio Kairos",
      "addressLocality": "Civitanova Marche",
      "addressRegion": "MC",
      "postalCode": "62012",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.3050631,
      "longitude": 13.7245397
    },
    "sameAs": [
      "https://www.linkedin.com/in/myriam-gentile-012586196/"
    ],
    "priceRange": "$$"
  };

  return (
    <>
      <title>{headTitle}</title>
      <meta name="description" content={finalDescription} />
      
      {isPreview && <meta name="robots" content="noindex, nofollow" />}
      
      {!isPreview && canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:type" content={finalOgType} />
      <meta property="og:url" content={absoluteUrl} />
      <meta property="og:title" content={headTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={absoluteUrl} />
      <meta name="twitter:title" content={headTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={ogImage} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
};

export default SEO;
