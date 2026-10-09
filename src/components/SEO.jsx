import { Helmet } from 'react-helmet-async';

/**
 * Drop this at the top of any page to set that page's title,
 * meta description, and canonical URL for SEO.
 */
function SEO({ title, description, path = '/' }) {
  const fullTitle = `${title} | Nonso Anukam — Frontend Developer`;
  const url = `https://nonsodev.com${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
}

export default SEO;
