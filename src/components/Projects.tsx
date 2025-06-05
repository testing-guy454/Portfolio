import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
// image imports
import bookHiveImage from "../../public/projectImages/bookhive.png"
import ecoGuardian from "../../public/projectImages/ecoGuardian.png"
import portfolio from "../../public/projectImages/portfolio.png"
import stickify from "../../public/projectImages/stickify.png"

// Define the Project type
interface Project {
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

// Project categories
const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "fullstack", name: "Full Stack" },
  { id: "frontend", name: "Frontend" },
  { id: "ai", name: "AI/ML" },
  { id: "algorithms", name: "Algorithms" },
];

// Projects data
const projects: Project[] = [
  {
    title: "BookHive",
    description:
      "BookNest is a full-stack library management system with distinct user and admin roles. It features book and PYQ management, a borrowing system, OTP-verified authentication, and separate dashboards. Built with React, Node.js, Express.js, and MongoDB.",
    image: bookHiveImage,
    fallbackImage:
      "https://placehold.co/600x400/6366F1/FFFFFF/png?text=BookHive",
    tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/yuvraj-mehta/Byteverse_NandiNinjas",
    live: "https://bookhive-manager.vercel.app",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal developer portfolio showcasing projects and skills. Designed and built a responsive single-page portfolio with smooth animations and dynamic navigation. Integrated a contact form using EmailJS and added a downloadable resume feature.",
    image: portfolio,
    fallbackImage:
      "https://placehold.co/600x400/6366F1/FFFFFF/png?text=Portfolio",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/yuvraj-mehta/My-Portfolio",
    live: "https://yuvrajmehta.codes",
    featured: true,
  },
  {
    title: "Stickify",
    description:
      "This is a simple notes application built with React and Vite. It allows users to create, update, delete, and manage notes with different colors. The application uses Appwrite as the backend service for managing notes.",
    image: stickify,
    fallbackImage:
      "https://placehold.co/600x400/8B5CF6/FFFFFF/png?text=Stickify",
    tags: ["React", "Vite", "Appwrite"],
    github: "https://github.com/yuvraj-mehta/Stickify",
    live: "https://stickify.vercel.app",
    featured: false,
  },
  {
    title: "EcoGuardian",
    description:
      "An online community platform empowering individuals to collaborate on environmental projects, report cleanliness issues, access educational resources, and drive positive change for a cleaner, greener future. 🌍",
    image: ecoGuardian,
    fallbackImage:
      "https://placehold.co/600x400/EC4899/FFFFFF/png?text=EcoGuardian",
    tags: ["Robotics", "Sensors", "Microcontrollers", "Programming"],
    github: "https://github.com/yuvraj-mehta/EcoGuardian_prototype",
    live: "https://yuvraj-mehta.github.io/EcoGuardian_prototype/",
    featured: true,
  },
];

const Projects = () => {
  // State for featured project carousel
  const [currentFeatured, setCurrentFeatured] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const featuredProjects = projects.filter((project) => project.featured);

  // Auto-cycle through featured projects
  useEffect(() => {
    // Set up carousel interval - change slides every 5 seconds
    const intervalTime = 5000;
    let interval: number;

    if (!isPaused && featuredProjects.length > 1) {
      interval = window.setInterval(() => {
        setCurrentFeatured((prev) =>
          prev === featuredProjects.length - 1 ? 0 : prev + 1
        );
      }, intervalTime);
    }

    // Clean up interval on component unmount
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [featuredProjects.length, isPaused]);

  // Tabs for project categories
  const [activeTab, setActiveTab] = useState("all");
  const projectTabs = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "ai", label: "AI & ML" },
    { id: "fullstack", label: "Full Stack" },
  ];

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
      : activeTab === "frontend"
      ? projects.filter((p) =>
          p.tags.some((t) => ["React", "TypeScript", "HTML/CSS"].includes(t))
        )
      : activeTab === "ai"
      ? projects.filter((p) =>
          p.tags.some((t) =>
            ["TensorFlow.js", "GPT Integration", "NLP Models"].includes(t)
          )
        )
      : projects.filter((p) =>
          p.tags.some((t) => ["Node.js", "Express", "MongoDB"].includes(t))
        );

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

        {/* Featured Project Carousel - Key section at top of the page */}
        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-20"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 z-0 rounded-2xl"></div>

              {/* Featured Project */}
              <div
                className={`relative z-10 ${
                  theme === "dark" ? "bg-gray-800/50" : "bg-white/80"
                } backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500`}
              >
                <div className="flex flex-col md:flex-row">
                  <motion.div
                    className="md:w-1/2 h-72 md:h-auto relative overflow-hidden"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    key={currentFeatured}
                  >
                    <img
                      src={featuredProjects[currentFeatured].image}
                      alt={featuredProjects[currentFeatured].title}
                      onError={(e) => {
                        if (featuredProjects[currentFeatured].fallbackImage) {
                          e.currentTarget.src =
                            featuredProjects[currentFeatured].fallbackImage;
                        }
                      }}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                    <div className="absolute top-4 left-4 z-20">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                          theme === "dark"
                            ? "bg-indigo-500/90 text-white shadow-lg shadow-indigo-500/30"
                            : "bg-primary/90 text-white shadow-md shadow-primary/30"
                        }`}
                      >
                        Featured Project
                      </div>
                    </div>
                  </motion.div>

                  <div
                    className="p-6 md:p-10 md:w-1/2 flex flex-col justify-center"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <motion.h3
                      key={`title-${currentFeatured}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className={`text-2xl md:text-3xl font-bold mb-4 ${
                        theme === "dark"
                          ? "text-white bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent"
                          : "bg-gradient-to-r from-gray-900 to-primary/90 bg-clip-text text-transparent"
                      }`}
                    >
                      {featuredProjects[currentFeatured].title}
                    </motion.h3>
                    <motion.p
                      key={`desc-${currentFeatured}`}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className={`mb-6 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      } leading-relaxed`}
                    >
                      {featuredProjects[currentFeatured].description}
                    </motion.p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProjects[currentFeatured].tags.map(
                        (tag, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 text-xs rounded-full ${
                              theme === "dark"
                                ? "bg-gray-700 text-gray-300"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>

                    {/* Project links and carousel navigation combined */}
                    <div className="flex flex-col gap-6">
                      {/* Project links */}
                      <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
                        <motion.a
                          href={featuredProjects[currentFeatured].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center gap-2 px-5 py-2 rounded-lg icon-glow ${
                            theme === "dark"
                              ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700"
                              : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border border-gray-200"
                          } shadow-md hover:shadow-lg transition-all duration-300`}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="icon-pulse flex items-center gap-2">
                            <FaGithub className="text-lg" />
                            <span>View Code</span>
                          </div>
                        </motion.a>

                        <motion.a
                          href={featuredProjects[currentFeatured].live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center gap-2 px-5 py-2 rounded-lg icon-glow ${
                            theme === "dark"
                              ? "bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 text-white"
                              : "bg-gradient-to-r from-primary via-primary/90 to-secondary text-white"
                          } shadow-lg hover:shadow-xl transition-all duration-300`}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="icon-pulse flex items-center gap-2">
                            <FaExternalLinkAlt className="text-sm" />
                            <span>Live Demo</span>
                          </div>
                        </motion.a>
                      </div>

                      {/* Carousel Navigation - Repositioned next to project details */}
                      {featuredProjects.length > 1 && (
                        <div className="flex flex-col gap-4 mt-2">
                          <div className="flex items-center gap-3">
                            <h4
                              className={`text-sm font-medium ${
                                theme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-500"
                              }`}
                            >
                              Project {currentFeatured + 1}/
                              {featuredProjects.length}
                            </h4>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                isPaused
                                  ? theme === "dark"
                                    ? "bg-gray-700 text-gray-300"
                                    : "bg-gray-200 text-gray-600"
                                  : theme === "dark"
                                  ? "bg-indigo-900/30 text-indigo-400"
                                  : "bg-primary/10 text-primary"
                              }`}
                            >
                              {isPaused ? "Paused" : "Auto-cycling"}
                            </span>
                          </div>

                          {/* Indicator Dots */}
                          <div
                            className="flex space-x-3 items-center"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                          >
                            {featuredProjects.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentFeatured(idx)}
                                className={`h-3 rounded-full transition-all duration-300 ${
                                  currentFeatured === idx
                                    ? theme === "dark"
                                      ? "bg-gradient-to-r from-indigo-500 to-indigo-600 w-8 shadow-sm shadow-indigo-500/20"
                                      : "bg-gradient-to-r from-primary to-primary/80 w-8 shadow-sm shadow-primary/20"
                                    : theme === "dark"
                                    ? "bg-gray-600 w-3 hover:bg-gray-500 hover:w-4"
                                    : "bg-gray-300 w-3 hover:bg-gray-400 hover:w-4"
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                                title={`View project ${idx + 1}`}
                              ></button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Project Category Tabs */}
        <div className="mb-12 flex justify-center">
          <div
            className={`inline-flex p-1 rounded-lg ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            {projectTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  activeTab === tab.id
                    ? theme === "dark"
                      ? "text-white"
                      : "text-gray-900"
                    : theme === "dark"
                    ? "text-gray-400 hover:text-gray-300"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="relative z-10">{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 z-0 rounded-md ${
                      theme === "dark" ? "bg-gray-700" : "bg-white shadow-sm"
                    }`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

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
              {activeTab === "frontend"
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
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    if (project.fallbackImage) {
                      e.currentTarget.src = project.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                <p
                  className={`mb-6 line-clamp-3 flex-grow ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs rounded-full ${
                          theme === "dark"
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${
                          theme === "dark"
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.a
            href="https://github.com"
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
    </section>
  );
};

export default Projects;
