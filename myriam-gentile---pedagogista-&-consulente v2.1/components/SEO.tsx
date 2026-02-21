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
  const siteUrl = "https://myriamgentilepedagogista.com";
  const personId = `${siteUrl}/chi-sono#person`;
  const businessId = `${siteUrl}/#business`;

  const getLogicalPath = () => {
    if (propPath) return normalizePath(propPath);
    if (window.location.hash) {
      return normalizePath(window.location.hash.replace(/^#/, ""));
    }
    return normalizePath(window.location.pathname);
  };

  const logicalPath = getLogicalPath();
  const defaultMeta = getMeta(logicalPath);

  const finalTitle = propTitle || defaultMeta.title;
  const finalDescription = propDescription || defaultMeta.description;
  const finalOgType = propOgType || defaultMeta.ogType;
  
  const headTitle = finalTitle.includes(siteName) ? finalTitle : `${finalTitle} | ${siteName}`;

  const isPreview = 
    window.location.hostname.includes('usercontent.goog') || 
    window.location.hostname.includes('aistudio.google.com') ||
    window.location.protocol === 'blob:' ||
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1';
  
  const canonicalUrl = isPreview ? null : `${siteUrl}${logicalPath === '/' ? '' : logicalPath}`;
  const absoluteUrl = canonicalUrl || siteUrl;

  // 1. ProfessionalService Schema (Elite Level)
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": businessId,
    "name": "Myriam Gentile - Pedagogista",
    "legalName": "Myriam Gentile",
    "vatID": "02480080445",
    "url": siteUrl,
    "logo": ogImage,
    "image": ogImage,
    "description": finalDescription,
    "telephone": "+39 345 2291697",
    "email": "myriamgentilepedagogista@outlook.it",
    "member": { "@id": personId },
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
    "areaServed": [
      { "@type": "City", "name": "Civitanova Marche" },
      { "@type": "City", "name": "Macerata" },
      { "@type": "City", "name": "Ancona" },
      { "@type": "City", "name": "Fermo" }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+39 345 2291697",
      "contactType": "customer support",
      "availableLanguage": ["Italian"]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/myriam-gentile-012586196/",
      "https://www.instagram.com/myriamgentile_pedagogista/"
    ],
    "priceRange": "$$",
    "knowsAbout": ["Pedagogia", "Neuroscienze", "DSA", "BES", "Consulenza Genitoriale"]
  };

  // 2. WebPage Schema (Specific for the current URL)
  const pageType = logicalPath === "/chi-sono" ? "AboutPage" : "WebPage";
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": `${absoluteUrl}#webpage`,
    "url": absoluteUrl,
    "name": headTitle,
    "description": finalDescription,
    "breadcrumb": { "@id": `${absoluteUrl}#breadcrumb` },
    "isPartOf": { "@id": `${siteUrl}/#website` },
    "about": { "@id": businessId }
  };

  // 3. WebSite & Navigation Schema (Homepage only)
  const websiteSchema = logicalPath === "/" ? {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "url": siteUrl,
    "name": siteName,
    "publisher": { "@id": businessId }
  } : null;

  const navigationSchema = logicalPath === "/" ? {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "hasPart": [
      { "@type": "WebPage", "name": "Chi Sono", "url": `${siteUrl}/chi-sono` },
      { "@type": "WebPage", "name": "Servizi", "url": `${siteUrl}/servizi` },
      { "@type": "WebPage", "name": "Esperienza", "url": `${siteUrl}/esperienza` },
      { "@type": "WebPage", "name": "Blog", "url": `${siteUrl}/blog` },
      { "@type": "WebPage", "name": "FAQ", "url": `${siteUrl}/faq` }
    ]
  } : null;

  // 4. Breadcrumb Schema
  const pathParts = logicalPath.split('/').filter(p => p);
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      ...pathParts.map((part, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' '),
        "item": `${siteUrl}/${pathParts.slice(0, index + 1).join('/')}`
      }))
    ]
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      {websiteSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />}
      {navigationSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }} />}
    </>
  );
};

export default SEO;
