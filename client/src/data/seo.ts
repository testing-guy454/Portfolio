import { config } from "../config/environment";

export const seoData = {
  title: config.appTitle || "Yuvraj Mehta - Full Stack Developer | Portfolio",
  description:
    config.appDescription ||
    "Full Stack Developer specializing in React, TypeScript, Node.js, and modern web technologies. Currently exploring Generative AI. Strong background in Data Structures and Algorithms.",
  keywords:
    "Full Stack Developer, React, TypeScript, Node.js, JavaScript, Web Development, Frontend, Backend, Portfolio, Yuvraj Mehta, GenAI, Data Structures, Algorithms",
  author: "Yuvraj Mehta",
  siteUrl: config.appUrl || "https://yuvrajmehta.codes/",
  instagram: "https://www.instagram.com/yuvraj.mehta4261/",
  github: config.githubUrl || "https://github.com/yuvraj-mehta",
  linkedin:
    config.linkedinUrl || "https://www.linkedin.com/in/yuvraj-mehta-a0274528a/",
  ogImage: "/yuvraj.png",
  twitterHandle: "@yuvrajm",
  themeColor: "#6366f1",
};
