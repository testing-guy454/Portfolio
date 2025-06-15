import { Helmet } from "react-helmet-async";
import { seoData } from "../data/seo";

export const SEO = () => {
  return (
    <Helmet>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords} />
      <meta name="author" content={seoData.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.siteUrl} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoData.siteUrl} />
      <meta property="twitter:title" content={seoData.title} />
      <meta property="twitter:description" content={seoData.description} />
      <meta property="twitter:image" content={seoData.ogImage} />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/portfolio-favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Theme color */}
      <meta name="theme-color" content="#6366f1" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://yuvrajmehta.dev/" />
    </Helmet>
  );
};
