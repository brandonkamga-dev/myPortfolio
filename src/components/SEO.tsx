import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Brandon Kamga - Développeur Full Stack & DevOps Engineer",
  description = "Portfolio de Brandon Kamga, développeur full stack spécialisé en React, TypeScript, Python, DevOps et Machine Learning. Découvrez mes projets et articles techniques.",
  keywords = "Brandon Kamga, développeur, full stack, React, TypeScript, Python, DevOps, Machine Learning, portfolio, développeur web, ingénieur logiciel",
  image = "/moi.png",
  url = "https://brandonkamga.dev",
  type = "website",
  author = "Brandon Kamga",
  publishedTime,
  modifiedTime
}) => {
  const fullTitle = title.includes("Brandon Kamga") ? title : `${title} | Brandon Kamga`;
  const fullUrl = url.startsWith('http') ? url : `https://brandonkamga.dev${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://brandonkamga.dev${image}`;

  return (
    <Helmet>
      {/* Métadonnées de base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="fr-FR" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content="Photo de Brandon Kamga, développeur full stack" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Brandon Kamga Portfolio" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content="Photo de Brandon Kamga, développeur full stack" />
      <meta name="twitter:creator" content="@brandonkamga" />
      <meta name="twitter:site" content="@brandonkamga" />
      
      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? "Article" : "Person",
          ...(type === 'website' ? {
            name: "Brandon Kamga",
            alternateName: ["Kamga Brandon", "Brandon", "Kamga"],
            jobTitle: "Développeur Full Stack & DevOps Engineer",
            description: description,
            url: fullUrl,
            image: fullImageUrl,
            sameAs: [
              "https://github.com/brandonkamga",
              "https://linkedin.com/in/brandonkamga",
              "https://twitter.com/brandonkamga"
            ],
            knowsAbout: [
              "React",
              "TypeScript", 
              "Python",
              "DevOps",
              "Machine Learning",
              "Full Stack Development",
              "Web Development"
            ],
            worksFor: {
              "@type": "Organization",
              "name": "Freelance"
            }
          } : {
            headline: title,
            description: description,
            image: fullImageUrl,
            author: {
              "@type": "Person",
              "name": author
            },
            publisher: {
              "@type": "Person",
              "name": author
            },
            datePublished: publishedTime,
            dateModified: modifiedTime || publishedTime
          })
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
