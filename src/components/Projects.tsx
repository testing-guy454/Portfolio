import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaTimes,
  FaStar,
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
    <section
      id="projects"
      className={`section relative overflow-hidden py-24 ${
        theme === "dark" ? "bg-gray-900" : ""
      }`}
      style={{
        scrollMarginTop: "150px",
        paddingTop: "40px",
        scrollBehavior: "smooth",
      }}
    >
      {/* Background decoration */}
      <div
        className={`absolute top-40 right-0 w-96 h-96 rounded-full blur-3xl ${
          theme === "dark" ? "bg-indigo-600/5" : "bg-primary/5"
        }`}
      ></div>
      <div
        className={`absolute bottom-20 left-20 w-64 h-64 rounded-full blur-3xl ${
          theme === "dark" ? "bg-purple-600/5" : "bg-accent/5"
        }`}
      ></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span
            className={`px-4 py-2 rounded-full font-medium text-sm ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-900/30 to-purple-900/30 text-indigo-400"
                : "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary"
            }`}
          >
            Showcase
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold mt-4 font-heading ${
              theme === "dark" ? "text-white" : ""
            }`}
          >
            Recent{" "}
            <span
              className={`${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text"
                  : "text-gradient"
              }`}
            >
              Projects
            </span>
          </h2>
          <div
            className={`w-24 h-1 mx-auto mt-6 ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600"
                : "bg-gradient-to-r from-primary to-accent"
            }`}
          ></div>
          <p
            className={`max-w-2xl mx-auto mt-6 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Explore my latest projects showcasing my skills in full stack
            development, algorithm implementation, and generative AI
            applications.
          </p>
        </motion.div>

        {/* Enhanced Project Category Tabs */}
        <motion.div
          className="mb-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Simple container for tabs */}
          <div
            className="relative p-2 rounded-2xl border shadow-lg"
            style={{
              background:
                theme === "dark"
                  ? "rgba(55, 65, 81, 0.8)"
                  : "rgba(255, 255, 255, 0.9)",
              borderColor:
                theme === "dark"
                  ? "rgba(75, 85, 99, 0.5)"
                  : "rgba(229, 231, 235, 0.8)",
            }}
          >
            <div className="flex flex-wrap justify-center gap-1 relative z-10">
              {projectTabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 overflow-hidden ${
                    activeTab === tab.id ? "" : ""
                  }`}
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                  }}
                >
                  {/* Active tab background with enhanced gradient */}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background:
                          theme === "dark"
                            ? "linear-gradient(135deg, rgba(139,92,246,0.6) 0%, rgba(99,102,241,0.6) 100%)"
                            : "linear-gradient(135deg, rgba(79,70,229,0.8) 0%, rgba(99,102,241,0.8) 100%)",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  {/* Inactive tab hover effect */}
                  {activeTab !== tab.id && (
                    <div
                      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-200 ${
                        theme === "dark" ? "bg-white/5" : "bg-gray-100/40"
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
                    {/* Simple icons with subtle hover effects */}
                    <div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                      {tab.id === "all" && <HiViewGrid className="w-5 h-5" />}
                      {tab.id === "featured" && <HiStar className="w-5 h-5" />}
                      {tab.id === "frontend" && <SiReact className="w-5 h-5" />}
                      {tab.id === "ai" && <BiBrain className="w-5 h-5" />}
                      {tab.id === "fullstack" && (
                        <div className="flex items-center gap-1">
                          <HiDatabase className="w-4 h-4" />
                          <HiLightningBolt className="w-3 h-3" />
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
            transition={{ duration: 0.3 }}
            className="mb-8 text-center"
          >
            <h3
              className={`text-2xl font-bold ${
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
            <div
              className={`w-16 h-1 mx-auto mt-3 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                  : "bg-gradient-to-r from-primary/70 to-accent/70"
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
              className={`rounded-xl overflow-hidden shadow-lg h-full ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="relative group overflow-hidden h-48">
                {/* Project featured badge - only for featured projects */}
                {project.featured && (
                  <div className="absolute top-2 left-2 z-20">
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-medium border border-white/20 backdrop-blur-md bg-white/10 ${
                        theme === "dark"
                          ? "bg-indigo-500/20 text-white"
                          : "bg-primary/20 text-primary"
                      } shadow-sm flex items-center gap-1`}
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
                        className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${badge.color} shadow-sm flex items-center gap-1.5`}
                      >
                        {badge.icon}
                        <span>{badge.label}</span>
                      </div>
                    );
                  })()}
                </div>

                {/* Project image with shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    if (project.fallbackImage) {
                      e.currentTarget.src = project.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md ${
                            theme === "dark"
                              ? "bg-gray-700/60 border border-gray-600/50 hover:bg-gray-600/60 hover:border-gray-500/70"
                              : "bg-white/90 border border-gray-200/80 hover:bg-white hover:border-gray-300 shadow-sm"
                          }`}
                          title={tag}
                        >
                          {techIcon}
                        </div>
                      );
                    })}
                    {project.tags.length > 6 && (
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                          theme === "dark"
                            ? "bg-gray-700/60 text-gray-400 border border-gray-600/50 hover:bg-gray-600/60 hover:text-gray-300"
                            : "bg-white/90 text-gray-600 border border-gray-200/80 hover:bg-white hover:text-gray-800 shadow-sm"
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
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/25"
                        : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/25"
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
                          ? "bg-gray-700 text-gray-300 border border-gray-600 hover:bg-gray-600 hover:border-gray-500"
                          : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 hover:border-gray-300"
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
                          ? "bg-gray-700 text-gray-300 border border-gray-600 hover:bg-gray-600 hover:border-gray-500"
                          : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 hover:border-gray-300"
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
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg icon-glow ${
              theme === "dark"
                ? "bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white border border-gray-700 hover:border-gray-600"
                : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-800 border border-gray-200 hover:border-gray-300"
            } shadow-md hover:shadow-xl transition-all`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="icon-pulse flex items-center gap-2">
              <FaGithub className="text-xl" />
              <span>View More Projects on GitHub</span>
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
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <h2
                  className={`text-2xl font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {selectedProject.title}
                </h2>
                {selectedProject.featured && (
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      theme === "dark"
                        ? "bg-indigo-500/20 text-indigo-400"
                        : "bg-indigo-100 text-indigo-700"
                    }`}
                  >
                    Featured
                  </span>
                )}
              </div>
              <button
                onClick={closeModal}
                className={`p-2 rounded-full transition-colors ${
                  theme === "dark"
                    ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                    : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                }`}
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Image */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  onError={(e) => {
                    if (selectedProject.fallbackImage) {
                      e.currentTarget.src = selectedProject.fallbackImage;
                    }
                  }}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <h3
                  className={`text-lg font-semibold mb-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
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
                  className={`text-lg font-semibold mb-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tags.map((tag, idx) => {
                    const techIcon = getTechIcon(tag);
                    return (
                      <span
                        key={idx}
                        className={`px-4 py-2.5 rounded-lg flex items-center gap-3 font-medium transition-all duration-200 hover:scale-105 ${
                          theme === "dark"
                            ? "bg-gray-700/80 text-gray-200 border border-gray-600/50 hover:bg-gray-600/80 hover:border-gray-500"
                            : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm hover:shadow-md"
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
                  className={`flex-1 flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-gray-700 text-gray-300 border border-gray-600 hover:bg-gray-600 hover:border-gray-500"
                      : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 hover:border-gray-300"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub className="w-5 h-5" />
                  <span>View Source Code</span>
                </motion.a>
                <motion.a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-indigo-600 text-white border border-indigo-500 hover:bg-indigo-700 hover:border-indigo-600"
                      : "bg-indigo-600 text-white border border-indigo-500 hover:bg-indigo-700 hover:border-indigo-600"
                  }`}
                  whileHover={{ scale: 1.02 }}
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
    </section>
  );
};

export default Projects;
