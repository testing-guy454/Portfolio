import { Helmet } from "react-helmet-async";

export const SEO = () => {
  return (
    <Helmet>
      <title>Yuvraj Mehta - Full Stack Developer | Portfolio</title>
      <meta
        name="description"
        content="Full Stack Developer specializing in React, TypeScript, Node.js, and modern web technologies. Currently exploring Generative AI. Strong background in Data Structures and Algorithms."
      />
      <meta
        name="keywords"
        content="Full Stack Developer, React, TypeScript, Node.js, JavaScript, Web Development, Frontend, Backend, Portfolio, Yuvraj Mehta, GenAI, Data Structures, Algorithms"
      />
      <meta name="author" content="Yuvraj Mehta" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yuvrajmehta.dev/" />
      <meta property="og:title" content="Yuvraj Mehta - Full Stack Developer" />
      <meta
        property="og:description"
        content="Full Stack Developer specializing in modern web technologies and algorithms, currently exploring Generative AI."
      />
      <meta property="og:image" content="/yuvraj.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://yuvrajmehta.dev/" />
      <meta
        property="twitter:title"
        content="Yuvraj Mehta - Full Stack Developer"
      />
      <meta
        property="twitter:description"
        content="Full Stack Developer specializing in modern web technologies and algorithms, currently exploring Generative AI."
      />
      <meta property="twitter:image" content="/yuvraj.png" />

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
