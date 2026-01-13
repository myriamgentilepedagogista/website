import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Myriam Gentile | Pedagogista a Civitanova Marche | Consulenza e Spazio Pedagogico",
  description = "Myriam Gentile, Pedagogista a Civitanova Marche. Consulenza genitoriale, supporto DSA/BES e coordinamento 0-6. Scopri il blog Spazio Pedagogico.",
  canonical = "https://myriamgentilepedagogista.com",
  ogType = "website",
  ogImage = "https://media.licdn.com/dms/image/v2/D4D03AQFffN7uEwAnZw/profile-displayphoto-shrink_800_800/B4DZaXRjYPGsAc-/0/1746294684622?e=1769040000&v=beta&t=IxsX1icutmnLpBNRhmsQQe5CPC7Zoiy7KGOeiuuGljU"
}) => {
  const siteName = "Myriam Gentile Pedagogista";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Myriam Gentile - Pedagogista",
    "url": "https://myriamgentilepedagogista.com",
    "logo": ogImage,
    "image": ogImage,
    "description": description,
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/myriam-gentile-012586196/"
    ],
    "priceRange": "$$"
  };

  return (
    <>
      {/* React 19 hoists these tags to the <head> automatically */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </>
  );
};

export default SEO;