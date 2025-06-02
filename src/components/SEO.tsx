import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export const SEO = ({
  title = "Full Stack Developer Portfolio",
  description = "Portfolio website for a full stack developer with strong DSA skills and expertise in modern web technologies and generative AI.",
  keywords = "full stack developer, react, typescript, portfolio, web developer, dsa, generative ai",
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourdomain.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://yourdomain.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content="https://yourdomain.com/og-image.jpg"
      />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

// Using named export instead of default export
