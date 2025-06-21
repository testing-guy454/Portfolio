import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaTimes,
  FaStar,
  FaRocket,
  FaCode,
} from "react-icons/fa";
import {
  HiViewGrid,
  HiStar,
  HiLightningBolt,
  HiDatabase,
  HiEye,
} from "react-icons/hi";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiAppwrite,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiJsonwebtokens,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { BiBrain } from "react-icons/bi";
import { useTheme } from "../contexts/ThemeContext";
import SectionContainer from "./SectionContainer";
// image imports
import bookHiveImage from "../../public/projectImages/bookhive.png";
import ecoGuardian from "../../public/projectImages/ecoGuardian.png";
import portfolio from "../../public/projectImages/portfolio.png";
import stickify from "../../public/projectImages/stickify.png";

// Define the Project type
interface Project {
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  fallbackImage?: string;
  tags: string[];
  github: string;
  live: string;
  featured?: boolean;
  category?: string;
}

// Function to preload images
const preloadImages = (images: string[]) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

// Projects data
const projects: Project[] = [
  {
    title: "BookHive",
    description:
      "BookNest is a full-stack library management system with distinct user and admin roles. It features book and PYQ management, a borrowing system, OTP-verified authentication, and separate dashboards. Built with React, Node.js, Express.js, and MongoDB.",
    shortDescription:
      "Full-stack library management system with user/admin roles, book management, and secure authentication.",
    image: bookHiveImage,
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
    shortDescription:
      "Responsive developer portfolio with smooth animations, dynamic navigation, and integrated contact form.",
    image: portfolio,
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
    shortDescription:
      "Simple notes app with color-coded organization, CRUD operations, and Appwrite backend integration.",
    image: stickify,
    fallbackImage:
      "https://placehold.co/600x400/8B5CF6/FFFFFF/png?text=Stickify",
    tags: ["React", "Vite", "Tailwind CSS", "Appwrite"],
    github: "https://github.com/yuvraj-mehta/Stickify",
    live: "https://stickify-git-master-yuvraj-mehtas-projects.vercel.app/",
    featured: false,
    category: "frontend",
  },
  {
    title: "EcoGuardian",
    description:
      "An online community platform empowering individuals to collaborate on environmental projects, report cleanliness issues, access educational resources, and drive positive change for a cleaner, greener future. 🌍",
    shortDescription:
      "Environmental community platform for project collaboration, issue reporting, and educational resources.",
    image: ecoGuardian,
    fallbackImage:
      "https://placehold.co/600x400/EC4899/FFFFFF/png?text=EcoGuardian",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yuvraj-mehta/EcoGuardian_prototype",
    live: "https://yuvraj-mehta.github.io/EcoGuardian_prototype/",
    featured: true,
    category: "fullstack",
  },
];

const Projects = () => {
  // Tabs for project categories
  const [activeTab, setActiveTab] = useState("featured"); // Default to 'all'
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  // Preload project images
  useEffect(() => {
    const imageUrls = projects.map((project) => project.image);
    preloadImages(imageUrls);
  }, []);

  // Handle image load
  const handleImageLoad = (projectTitle: string) => {
    setLoadedImages((prev) => ({
      ...prev,
      [projectTitle]: true,
    }));
  };

  const projectTabs = [
    { id: "all", label: "All Projects" },
    { id: "featured", label: "Featured" },
    { id: "frontend", label: "Frontend" },
    { id: "ai", label: "AI & ML" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "0px 0px -10% 0px",
  });

  const { theme } = useTheme();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Filter projects based on active tab
  const filteredProjects =
    activeTab === "all"
      ? projects
      : activeTab === "featured"
      ? projects.filter((p) => p.featured)
      : projects.filter((p) => p.category === activeTab);

  // Animation variants
  const cardHoverAnimation = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  // Update item variants to include hover states
  const updatedItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    rest: { scale: 1, y: 0 },
    hover: cardHoverAnimation.hover,
  };

  // Technology icon mapping for enhanced project tags
  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      // Frontend Technologies
      React: <SiReact className="w-4 h-4 text-[#61DAFB]" />,
      "Tailwind CSS": <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />,
      "Framer Motion": <SiFramer className="w-4 h-4 text-[#FF0055]" />,
      Vite: <SiVite className="w-4 h-4 text-[#646CFF]" />,
      HTML: <SiHtml5 className="w-4 h-4 text-[#E34F26]" />,
      CSS: <SiCss3 className="w-4 h-4 text-[#1572B6]" />,
      JavaScript: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" />,
      TypeScript: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,

      // Backend Technologies
      "Node.js": <SiNodedotjs className="w-4 h-4 text-[#339933]" />,
      Express: (
        <SiExpress className="w-4 h-4 text-gray-600 dark:text-gray-300" />
      ),
      MongoDB: <SiMongodb className="w-4 h-4 text-[#47A248]" />,

      // State Management & Tools
      "Redux Toolkit": <SiRedux className="w-4 h-4 text-[#764ABC]" />,
      JWT: (
        <SiJsonwebtokens className="w-4 h-4 text-[#000000] dark:text-white" />
      ),

      // Cloud & Services
      Appwrite: <SiAppwrite className="w-4 h-4 text-[#FD366E]" />,

      // Fallback for unknown technologies
      default: <HiLightningBolt className="w-4 h-4 text-gray-500" />,
    };
    return iconMap[tech] || iconMap.default;
  };

  // Get category styling
  const getCategoryBadge = (category: string, theme: string) => {
    const badges = {
      frontend: {
        icon: <SiReact className="w-3 h-3" />,
        label: "Frontend",
        color:
          theme === "dark"
            ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
            : "bg-cyan-100 text-cyan-700 border-cyan-200",
      },
      ai: {
        icon: <BiBrain className="w-3 h-3" />,
        label: "AI/ML",
        color:
          theme === "dark"
            ? "bg-purple-500/20 text-purple-400 border-purple-500/30"
            : "bg-purple-100 text-purple-700 border-purple-200",
      },
      fullstack: {
        icon: <HiDatabase className="w-3 h-3" />,
        label: "Full Stack",
        color:
          theme === "dark"
            ? "bg-green-500/20 text-green-400 border-green-500/30"
            : "bg-green-100 text-green-700 border-green-200",
      },
      other: {
        icon: <HiViewGrid className="w-3 h-3" />,
        label: "Other",
        color:
          theme === "dark"
            ? "bg-gray-500/20 text-gray-400 border-gray-500/30"
            : "bg-gray-100 text-gray-700 border-gray-200",
      },
    };
    return badges[category as keyof typeof badges] || badges.other;
  };

  return (
    <SectionContainer
      id="projects"
      style={{
        scrollMarginTop: "150px",
        paddingTop: "40px",
        scrollBehavior: "smooth",
      }}
    >
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm mb-6 ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-900/40 to-purple-900/40 text-indigo-300 border border-indigo-800/40"
                : "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 border border-indigo-200"
            } shadow-lg backdrop-blur-sm`}
          >
            <FaRocket className="w-4 h-4" /> Project Showcase
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-8 font-heading ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Recent{" "}
            <span
              className={`${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text"
                  : "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text"
              }`}
            >
              Projects
            </span>
          </motion.h2>

          <div
            className={`w-24 h-1.5 mx-auto mt-6 rounded-full shadow-md ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-500/90 via-purple-500/90 to-indigo-500/90"
                : "bg-gradient-to-r from-indigo-500/90 via-purple-500/90 to-indigo-500/90"
            }`}
          ></div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`max-w-2xl mx-auto mt-6 text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Explore my latest projects showcasing my skills in full stack
            development, algorithm implementation, and generative AI
            applications.
          </motion.p>
        </motion.div>

        {/* Enhanced Project Category Tabs */}
        <motion.div
          className="mb-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Enhanced container for tabs with better backdrop blur and gradients */}
          <div
            className={`relative p-2.5 rounded-2xl border backdrop-blur-md shadow-xl ${
              theme === "dark"
                ? "bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-gray-700/50"
                : "bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200/70"
            }`}
          >
            <div className="flex flex-wrap justify-center gap-1.5 relative z-10">
              {projectTabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 overflow-hidden ${
                    activeTab === tab.id ? "" : ""
                  }`}
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.07,
                    duration: 0.4,
                  }}
                >
                  {/* Active tab background with enhanced gradient */}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 rounded-2xl shadow-lg"
                      style={{
                        background:
                          theme === "dark"
                            ? "linear-gradient(135deg, rgba(79,70,229,0.7) 0%, rgba(139,92,246,0.7) 100%)"
                            : "linear-gradient(135deg, rgba(79,70,229,0.9) 0%, rgba(124,58,237,0.9) 100%)",
                        boxShadow: "0 8px 16px rgba(79,70,229,0.25)",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor:
                          theme === "dark"
                            ? "rgba(99,102,241,0.5)"
                            : "rgba(99,102,241,0.6)",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {/* Inactive tab hover effect with improved gradient */}
                  {activeTab !== tab.id && (
                    <div
                      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 ${
                        theme === "dark"
                          ? "bg-gradient-to-br from-gray-700/30 to-gray-800/30"
                          : "bg-gradient-to-br from-gray-50/60 to-gray-100/60"
                      }`}
                    />
                  )}

                  {/* Tab content with enhanced icons */}
                  <span
                    className={`relative z-10 flex items-center gap-3 transition-colors duration-300 ${
                      activeTab === tab.id
                        ? "text-white"
                        : theme === "dark"
                        ? "text-gray-300 group-hover:text-white"
                        : "text-gray-700 group-hover:text-gray-900"
                    }`}
                  >
                    {/* Icons with improved hover effects */}
                    <div className="flex items-center justify-center transition-all duration-200 group-hover:scale-110">
                      {tab.id === "all" && <HiViewGrid className="w-5 h-5" />}
                      {tab.id === "featured" && <HiStar className="w-5 h-5" />}
                      {tab.id === "frontend" && <SiReact className="w-5 h-5" />}
                      {tab.id === "ai" && <BiBrain className="w-5 h-5" />}
                      {tab.id === "fullstack" && (
                        <div className="flex items-center gap-1">
                          <HiDatabase className="w-4 h-4" />
                          <HiLightningBolt className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>

                    <span className="font-medium tracking-wide">
                      {tab.label}
                    </span>
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Category Header */}
        {activeTab !== "all" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <div className="inline-flex items-center justify-center mb-2">
              <span
                className={`p-2.5 rounded-xl mr-3 shadow-lg backdrop-blur-md ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-indigo-900/30 to-indigo-800/30 text-indigo-400 border border-indigo-700/40"
                    : "bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-700 border border-indigo-200/70"
                }`}
              >
                {activeTab === "featured" && <FaStar className="w-5 h-5" />}
                {activeTab === "frontend" && <SiReact className="w-5 h-5" />}
                {activeTab === "ai" && <BiBrain className="w-5 h-5" />}
                {activeTab === "fullstack" && (
                  <HiDatabase className="w-5 h-5" />
                )}
              </span>
              <h3
                className={`text-2xl md:text-3xl font-bold ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                {activeTab === "featured"
                  ? "Featured Projects"
                  : activeTab === "frontend"
                  ? "Frontend Projects"
                  : activeTab === "ai"
                  ? "AI & Machine Learning Projects"
                  : "Full Stack Projects"}
              </h3>
            </div>
            <div
              className={`w-24 h-1.5 mx-auto mt-4 rounded-full shadow-lg ${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-500/90 via-purple-500/90 to-indigo-500/90"
                  : "bg-gradient-to-r from-indigo-500/90 via-purple-500/90 to-indigo-500/90"
              }`}
            ></div>
          </motion.div>
        )}

        {/* Project Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          key={activeTab} // Key prop to force re-render when tab changes
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={updatedItemVariants} // Apply stagger animation from the parent
              initial="hidden"
              animate="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className={`rounded-2xl overflow-hidden ${
                theme === "dark"
                  ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 shadow-xl shadow-black/20"
                  : "bg-white border border-gray-200/50 shadow-xl shadow-gray-200/40"
              } h-full backdrop-blur-lg max-w-full w-full sm:w-auto`}
            >
              <div className="relative group overflow-hidden h-48 sm:h-56 md:h-64 lg:h-56 project-card-image-container">
                {/* Project featured badge - only for featured projects */}
                {project.featured && (
                  <div className="absolute top-2 left-2 z-20">
                    <div
                      className={`px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-lg border shadow-lg flex items-center gap-1.5 ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-300 border-yellow-500/30"
                          : "bg-gradient-to-r from-yellow-50 to-amber-50 text-yellow-700 border-yellow-200/70"
                      }`}
                    >
                      <FaStar className="w-3 h-3 text-yellow-400 bg-transparent" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}

                {/* Project category badge */}
                <div className="absolute top-2 right-2 z-20">
                  {(() => {
                    const category = project.category || "other";
                    const badge = getCategoryBadge(category, theme);
                    return (
                      <div
                        className={`px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-md border ${badge.color} shadow-md flex items-center gap-1.5`}
                      >
                        {badge.icon}
                        <span>{badge.label}</span>
                      </div>
                    );
                  })()}
                </div>

                {/* Project image with shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine"></div>
                {!loadedImages[project.title] && (
                  <div className="image-loading-skeleton"></div>
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    if (project.fallbackImage) {
                      e.currentTarget.src = project.fallbackImage;
                      handleImageLoad(project.title);
                    }
                  }}
                  className="project-card-image rounded-t-2xl group-hover:scale-110"
                  loading="lazy"
                  onLoad={() => handleImageLoad(project.title)}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 bg-opacity-80 shadow-lg flex items-center justify-center text-white backdrop-blur-sm border border-gray-700 icon-glow"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="icon-pulse">
                        <FaGithub />
                      </div>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-800 shadow-lg flex items-center justify-center text-white backdrop-blur-sm border border-indigo-500 icon-glow"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="icon-pulse">
                        <FaExternalLinkAlt className="text-sm" />
                      </div>
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              <div
                className={`p-6 flex flex-col flex-grow ${
                  theme === "dark" ? "border-t border-gray-700" : ""
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-3 ${
                    theme === "dark" ? "text-white" : ""
                  }`}
                >
                  {project.title}
                </h3>

                {/* Short Description */}
                <div className="mb-4">
                  <p
                    className={`text-sm leading-relaxed line-clamp-2 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.shortDescription}
                  </p>
                </div>

                {/* Technology Tags */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.tags.slice(0, 6).map((tag, idx) => {
                      const techIcon = getTechIcon(tag);
                      return (
                        <div
                          key={idx}
                          className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md backdrop-blur-sm ${
                            theme === "dark"
                              ? "bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-gray-700/60 hover:from-gray-700/70 hover:to-gray-800/70 hover:border-gray-600/70"
                              : "bg-white/90 border border-gray-100/80 hover:bg-gray-50/90 hover:border-gray-200/90 shadow-sm"
                          }`}
                          title={tag}
                        >
                          {techIcon}
                        </div>
                      );
                    })}
                    {project.tags.length > 6 && (
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm ${
                          theme === "dark"
                            ? "bg-gradient-to-br from-gray-800/70 to-gray-900/70 text-gray-400 border border-gray-700/60 hover:from-gray-700/70 hover:to-gray-800/70 hover:text-gray-300 hover:border-gray-600/70"
                            : "bg-white/90 text-gray-600 border border-gray-100/80 hover:bg-gray-50/90 hover:text-gray-800 hover:border-gray-200/90 shadow-sm"
                        }`}
                        title={`+${project.tags.length - 6} more technologies`}
                      >
                        <span className="text-xs font-bold">
                          +{project.tags.length - 6}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto pt-4 space-y-3">
                  {/* Primary Action - Details */}
                  <motion.button
                    onClick={() => openProjectModal(project)}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-indigo-500/25 border border-indigo-500/30"
                        : "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-indigo-500/40 border border-indigo-500/30"
                    }`}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <HiEye className="w-4 h-4" />
                    <span className="font-semibold">Details</span>
                  </motion.button>

                  {/* Secondary Actions */}
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                        theme === "dark"
                          ? "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:border-gray-600"
                          : "bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>

                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                        theme === "dark"
                          ? "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:border-gray-600"
                          : "bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.a
            href="https://github.com/yuvraj-mehta"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl icon-glow backdrop-blur-md ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-800/60 via-purple-800/60 to-indigo-800/60 text-white border border-indigo-700/40 hover:border-indigo-600/60"
                : "bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 text-indigo-700 border border-indigo-200/80 hover:border-indigo-300/80"
            } shadow-md hover:shadow-xl transition-all`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="icon-pulse flex items-center gap-2">
              <FaGithub className="text-xl" />
              <span className="font-semibold">
                View More Projects on GitHub
              </span>
              <FaArrowRight className="ml-1 animate-pulse" />
            </div>
          </motion.a>
        </div>
      </div>

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
              theme === "dark"
                ? "bg-gradient-to-br from-gray-800/95 to-gray-900/95 border border-gray-700/50 backdrop-blur-lg"
                : "bg-white border border-gray-200/50 backdrop-blur-lg"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className={`sticky top-0 z-10 flex items-center justify-between p-6 backdrop-blur-lg ${
                theme === "dark"
                  ? "border-b border-gray-700/50 bg-gradient-to-r from-gray-900/80 to-gray-800/80"
                  : "border-b border-gray-200/70 bg-gradient-to-r from-white/90 to-gray-50/90"
              }`}
            >
              <div className="flex items-center gap-4">
                <h2
                  className={`text-2xl font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  {selectedProject.title}
                </h2>
                {selectedProject.featured && (
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5 shadow-md ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-300 border border-yellow-500/30"
                        : "bg-gradient-to-r from-yellow-50 to-amber-50 text-yellow-700 border border-yellow-200/70"
                    }`}
                  >
                    <FaStar className="w-3 h-3 text-yellow-400" />
                    <span>Featured</span>
                  </span>
                )}
              </div>
              <motion.button
                onClick={closeModal}
                className={`p-2.5 rounded-xl transition-all duration-300 backdrop-blur-sm shadow-md border ${
                  theme === "dark"
                    ? "bg-gray-800/80 hover:bg-red-900/30 text-gray-400 hover:text-white border-gray-700/50 hover:border-red-700/50"
                    : "bg-gray-100/80 hover:bg-red-100/80 text-gray-500 hover:text-red-600 border-gray-200/50 hover:border-red-200/50"
                }`}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Image */}
              <div
                className={`mb-6 rounded-2xl overflow-hidden project-card-image-container ${
                  theme === "dark"
                    ? "border border-gray-700/50 shadow-lg shadow-black/20"
                    : "border border-gray-200/70 shadow-xl shadow-gray-300/30"
                }`}
                style={{ height: "auto", maxHeight: "400px" }}
              >
                {!loadedImages[selectedProject.title] && (
                  <div className="image-loading-skeleton"></div>
                )}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  onError={(e) => {
                    if (selectedProject.fallbackImage) {
                      e.currentTarget.src = selectedProject.fallbackImage;
                      handleImageLoad(selectedProject.title);
                    }
                  }}
                  className="project-card-image rounded-2xl"
                  loading="lazy"
                  style={{
                    maxHeight: "400px",
                    width: "100%",
                    objectPosition: "top center",
                  }}
                  onLoad={() => handleImageLoad(selectedProject.title)}
                />
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <h3
                  className={`text-lg font-semibold mb-4 inline-flex items-center gap-3 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  <span
                    className={`p-2.5 rounded-xl shadow-md backdrop-blur-md ${
                      theme === "dark"
                        ? "bg-gradient-to-br from-indigo-900/30 to-indigo-800/30 text-indigo-400 border border-indigo-700/40"
                        : "bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-700 border border-indigo-200/70"
                    }`}
                  >
                    <FaRocket className="w-5 h-5" />
                  </span>
                  About This Project
                </h3>
                <p
                  className={`leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {selectedProject.description}
                </p>
              </div>

              {/* Technology Stack */}
              <div className="mb-6">
                <h3
                  className={`text-lg font-semibold mb-4 inline-flex items-center gap-3 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  <span
                    className={`p-2.5 rounded-xl shadow-md backdrop-blur-md ${
                      theme === "dark"
                        ? "bg-gradient-to-br from-purple-900/30 to-purple-800/30 text-purple-400 border border-purple-700/40"
                        : "bg-gradient-to-br from-purple-50 to-purple-100 text-purple-700 border border-purple-200/70"
                    }`}
                  >
                    <FaCode className="w-5 h-5" />
                  </span>
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tags.map((tag, idx) => {
                    const techIcon = getTechIcon(tag);
                    return (
                      <span
                        key={idx}
                        className={`px-4 py-2.5 rounded-lg flex items-center gap-3 font-medium transition-all duration-200 hover:scale-105 backdrop-blur-sm ${
                          theme === "dark"
                            ? "bg-gradient-to-br from-gray-800/80 to-gray-900/80 text-gray-200 border border-gray-700/50 hover:from-gray-700/80 hover:to-gray-800/80 hover:border-gray-600/70"
                            : "bg-white/90 text-gray-700 border border-gray-100/80 hover:bg-gray-50/90 hover:border-gray-200/90 shadow-sm hover:shadow-md"
                        }`}
                      >
                        <div className="flex items-center justify-center">
                          {techIcon}
                        </div>
                        <span>{tag}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-gray-800/80 to-gray-900/80 text-gray-300 border border-gray-700/50 hover:from-gray-700/80 hover:to-gray-800/80 hover:border-gray-600/60 hover:text-white shadow-lg"
                      : "bg-gradient-to-br from-gray-50/90 to-gray-100/90 text-gray-700 border border-gray-200/70 hover:from-gray-100/90 hover:to-gray-200/90 hover:border-gray-300/80 hover:shadow-md"
                  }`}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub className="w-5 h-5" />
                  <span>View Source Code</span>
                </motion.a>
                <motion.a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-medium transition-all duration-300 backdrop-blur-md ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-indigo-700/90 via-purple-700/90 to-indigo-700/90 text-white border border-indigo-500/50 hover:from-indigo-600/90 hover:via-purple-600/90 hover:to-indigo-600/90 hover:border-indigo-500/70 shadow-lg shadow-indigo-900/20"
                      : "bg-gradient-to-r from-indigo-500/90 via-purple-500/90 to-indigo-500/90 text-white border border-indigo-400/30 hover:from-indigo-600 hover:via-purple-600 hover:to-indigo-600 hover:border-indigo-500/50 shadow-lg shadow-indigo-500/20"
                  }`}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </SectionContainer>
  );
};

export default Projects;
