export interface Project {
  title: string;
  description: string;
  image: string;
  fallbackImage?: string;
  tags: string[];
  github: string;
  live: string;
  featured?: boolean;
  category?: string;
}

export const projectsData: Project[] = [
  {
    title: "BookHive Manager",
    description:
      "A full-stack MERN application for NIT Patna's library operations with secure role-based access (Admin/User). Implements JWT authentication, OTP email verification, and automated reminders via NodeMailer and NodeCron.",
    image: "/project-bookhive.jpg",
    fallbackImage:
      "https://placehold.co/600x400/6366F1/FFFFFF/png?text=BookHive",
    tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/yuvraj-mehta/Byteverse_NandiNinjas",
    live: "https://bookhive-manager.vercel.app",
    featured: true,
    category: "fullstack",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal developer portfolio showcasing projects and skills. Designed and built a responsive single-page portfolio with smooth animations and dynamic navigation. Integrated a contact form using EmailJS and added a downloadable resume feature.",
    image: "/project-portfolio.jpg",
    fallbackImage:
      "https://placehold.co/600x400/6366F1/FFFFFF/png?text=Portfolio",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/yuvraj-mehta/My-Portfolio",
    live: "https://yuvrajmehta.codes",
    featured: true,
    category: "frontend",
  },
  {
    title: "Stickify",
    description:
      "This is a simple notes application built with React and Vite. It allows users to create, update, delete, and manage notes with different colors. The application uses Appwrite as the backend service for managing notes.",
    image: "/project-stickify.jpg",
    fallbackImage:
      "https://placehold.co/600x400/6366F1/FFFFFF/png?text=Stickify",
    tags: ["React", "Vite", "Appwrite", "Tailwind CSS"],
    github: "https://github.com/yuvraj-mehta/stickify",
    live: "https://stickify-notes.vercel.app",
    featured: false,
    category: "frontend",
  },
  {
    title: "AI Image Generator",
    description:
      "Web application that generates images based on text prompts using the OpenAI API. Features include image customization options, history of generated images, and social sharing capabilities.",
    image: "/project-ai-image.jpg",
    fallbackImage:
      "https://placehold.co/600x400/6366F1/FFFFFF/png?text=AI+Image",
    tags: ["React", "Next.js", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com/yuvraj-mehta/ai-image-generator",
    live: "https://ai-image-gen-demo.vercel.app",
    featured: false,
    category: "ai",
  },
  {
    title: "DSA Visualizer",
    description:
      "Interactive web application that visualizes common data structures and algorithms. It helps students understand complex computer science concepts through animated visualizations and step-by-step explanations.",
    image: "/project-dsa.jpg",
    fallbackImage:
      "https://placehold.co/600x400/6366F1/FFFFFF/png?text=DSA+Visualizer",
    tags: ["JavaScript", "D3.js", "HTML Canvas", "CSS"],
    github: "https://github.com/yuvraj-mehta/dsa-visualizer",
    live: "https://dsa-visualizer-demo.vercel.app",
    featured: false,
    category: "algorithms",
  },
];
