    "priceRange": "$$"
  };

  return (
    <>
      {/* 
          In React 19, title, meta, and link tags rendered within components 
          are automatically hoisted to the <head>.
      */}
      <title>{headTitle}</title>
      <meta name="description" content={finalDescription} />
      
      {/* Indexing Control */}
      {isPreview && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical Link (solo produzione) */}
      {!isPreview && canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={finalOgType} />
      <meta property="og:url" content={absoluteUrl} />
      <meta property="og:title" content={headTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={absoluteUrl} />
      <meta name="twitter:title" content={headTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </>
  );
};

export default SEO;
