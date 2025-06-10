import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaServer,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiVite,
  SiMysql,
  SiGit,
  SiGithub,
  SiCplusplus,
  SiPython,
} from "react-icons/si";
// Use SiOpenjdk for Java icon in react-icons v5.5.0+
import { SiOpenjdk as SiJava } from "react-icons/si";

// Define types for our tech stack
type SkillType = "Frontend" | "Backend";
type CategoryName = "Web Development" | "Database" | "Languages" | "Tools";

interface TechItem {
  name: string;
  icon: JSX.Element;
  type?: SkillType;
}

interface Category {
  name: CategoryName;
  color: string;
  icon: JSX.Element;
}

// Categories used for organizing skills
const categories: Category[] = [
  {
    name: "Web Development",
    color: "from-blue-600 to-indigo-600",
    icon: <FaLaptopCode className="text-blue-500" />,
  },
  {
    name: "Database",
    color: "from-indigo-600 to-purple-600",
    icon: <FaDatabase className="text-indigo-500" />,
  },
  {
    name: "Languages",
    color: "from-purple-600 to-teal-600",
    icon: <FaCode className="text-purple-500" />,
  },
  {
    name: "Tools",
    color: "from-teal-600 to-blue-600",
    icon: <FaTools className="text-teal-500" />,
  },
];

const techStack: Record<CategoryName, TechItem[]> = {
  "Web Development": [
    {
      name: "React",
      icon: <FaReact className="text-blue-500" />,
      type: "Frontend",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-600" />,
      type: "Backend",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600" />,
      type: "Frontend",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-600 dark:text-gray-300" />,
      type: "Backend",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      type: "Frontend",
    },
    {
      name: "RESTful APIs",
      icon: <FaServer className="text-blue-600" />,
      type: "Backend",
    },
    {
      name: "HTML5",
      icon: <SiHtml5 className="text-orange-500" />,
      type: "Frontend",
    },
    {
      name: "CSS3",
      icon: <SiCss3 className="text-blue-500" />,
      type: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-500" />,
      type: "Frontend",
    },
    // {
    //   name: "GraphQL",
    //   icon: <SiGraphql className="text-pink-600" />,
    //   type: "Backend",
    // },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      type: "Frontend",
    },
    {
      name: "Redux",
      icon: <SiRedux className="text-purple-600" />,
      type: "Frontend",
    },
    // {
    //   name: "Firebase",
    //   icon: <SiFirebase className="text-yellow-500" />,
    //   type: "Backend",
    // },
    {
      name: "Vite",
      icon: <SiVite className="text-purple-500" />,
      type: "Frontend",
    },
  ],
  Database: [
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600" />,
    },
    {
      name: "SQL",
      icon: <SiMysql className="text-blue-600" />,
    },
    // {
    //   name: "PostgreSQL",
    //   icon: <SiPostgresql className="text-blue-600" />,
    // },
    {
      name: "Database Design",
      icon: <FaDatabase className="text-purple-500" />,
    },
  ],
  Languages: [
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600" />,
    },
    {
      name: "C++",
      icon: <SiCplusplus className="text-blue-600" />,
    },
    {
      name: "Java",
      icon: <SiJava className="text-red-500" />,
    },
    {
      name: "Python",
      icon: <SiPython className="text-blue-500" />,
    },
  ],
  Tools: [
    {
      name: "Git",
      icon: <SiGit className="text-orange-600" />,
    },
    {
      name: "GitHub",
      icon: <SiGithub className="text-black dark:text-white" />,
    },
  ],
};

// Removed level color mapping as we're no longer showing skill levels

const TechStack = () => {
  const [activeCategory, setActiveCategory] =
    useState<CategoryName>("Web Development");
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.05, // Lower threshold for earlier trigger
    rootMargin: "0px 0px -5% 0px", // Trigger slightly earlier
  });
  const [contentRef, contentInView] = useInView({
    triggerOnce: false,
    threshold: 0.02, // Lower threshold for earlier trigger
    rootMargin: "0px 0px -5% 0px", // Trigger slightly earlier
  });
  // Track for category change animation
  const [isChangingCategory, setIsChangingCategory] = useState(false);

  // Simplified category change with direct CSS transitions for smoother animation
  const handleCategoryChange = (newCategory: CategoryName) => {
    if (newCategory !== activeCategory) {
      setIsChangingCategory(true);
      // Simple timeout for the fade-out effect
      setTimeout(() => {
        setActiveCategory(newCategory);
        // Quick timeout for the fade-in effect
        setTimeout(() => {
          setIsChangingCategory(false);
        }, 50);
      }, 150); // Shorter fade-out time for snappier response
    }
  };

  const { theme } = useTheme();

  // Enhanced Animation variants with smoother transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced for smoother sequence
        delayChildren: 0.1, // Reduced delay for quicker start
        when: "beforeChildren",
        duration: 0.6, // Slightly faster overall transition
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.03, // Smoother exit sequence
        staggerDirection: -1,
        when: "afterChildren",
        ease: "easeInOut",
      },
    },
  };

  // We now use direct animation properties instead of variants for smoother animations

  // We now use simplified direct animations instead of variants for smoother icon effects

  // Enhanced category tab animations with smoother transitions
  const tabVariants = {
    inactive: {
      scale: 0.99, // Even less extreme scale difference
      opacity: 0.85, // Even higher opacity in inactive state
      y: 0,
      transition: {
        duration: 0.25, // Faster transition
        ease: [0.4, 0, 0.2, 1], // Material design standard easing
      },
    },
    active: {
      scale: 1,
      opacity: 1,
      y: -1.5, // Less extreme shift
      transition: {
        type: "tween", // Using tween instead of spring for more predictable motion
        duration: 0.2, // Faster response
        ease: [0.2, 0, 0, 1], // Custom ease-out for smoother motion
      },
    },
    hover: {
      scale: 1.02, // Less extreme scale
      y: -2, // Less extreme shift
      transition: {
        type: "tween", // Using tween instead of spring to prevent jitter
        duration: 0.15, // Fast response
        ease: [0.2, 0, 0, 1], // Custom ease-out for responsive feel
      },
    },
  };

  // Removed skill level related animations as we no longer show them

  const backgroundPulseVariants = {
    initial: { opacity: 0.12, scale: 1 },
    pulse: {
      opacity: [0.12, 0.18, 0.12], // Even subtler opacity change
      scale: [1, 1.01, 1], // Even subtler scale change
      transition: {
        repeat: Infinity,
        duration: 6, // Even slower, more subtle animation
        ease: [0.4, 0, 0.2, 1], // Material design standard ease curve
        times: [0, 0.5, 1], // Distributes keyframes evenly
      },
    },
  };

  // Create a custom hook for scrolling animation with improved settings
  const useScrollAnimation = (threshold = 0.1) => {
    const [element, inView] = useInView({
      triggerOnce: false,
      threshold: threshold,
      rootMargin: "0px 0px -5% 0px", // Trigger slightly earlier
    });

    return { ref: element, inView };
  };

  // Use multiple scroll animation references for different sections
  const { ref: cardRef1, inView: cardInView1 } = useScrollAnimation(0.02); // Lower threshold for earlier trigger
  const { ref: cardRef2, inView: cardInView2 } = useScrollAnimation(0.02);

  // Cursor effect for enhanced interactivity
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <motion.section
      id="tech-stack"
      className={`section relative overflow-hidden py-24 ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-950 text-white"
          : "bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"
      }`}
      style={{
        scrollMarginTop: "150px",
        paddingTop: "40px",
        scrollBehavior: "smooth",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Custom cursor effect that follows skill icons on hover - with ultra-smooth tracking */}
      {isHovering && (
        <motion.div
          className={`fixed w-8 h-8 rounded-full pointer-events-none z-50 ${
            theme === "dark"
              ? "bg-gradient-to-r from-blue-500/15 to-purple-500/15 backdrop-blur-sm"
              : "bg-gradient-to-r from-blue-400/15 to-purple-400/15 backdrop-blur-sm"
          } border border-white/8`}
          style={{
            translateX: cursorPos.x - 16,
            translateY: cursorPos.y - 16,
            transition: "none", // Removes default transition for exact cursor positioning
          }}
          animate={{
            scale: [1, 1.05, 1], // Even subtler scale effect
            opacity: [0.4, 0.5, 0.4], // Even subtler opacity change
          }}
          transition={{
            opacity: {
              duration: 2.5, // Slower, subtler pulse
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1], // Even distribution
            },
            scale: {
              duration: 2.5, // Slower, subtler pulse
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1], // Even distribution
            },
          }}
        />
      )}
      {/* Background Elements - Similar to Education/Experience */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background pattern */}
        <svg
          className={`absolute left-0 top-0 h-full w-full ${
            theme === "dark" ? "opacity-10" : "opacity-5"
          }`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="tech-stack-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40L40 0M20 40L40 20M0 20L20 0"
                stroke={theme === "dark" ? "#4f46e5" : "#6366f1"}
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-stack-grid)" />
        </svg>

        {/* Animated background elements */}
        <motion.div
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-indigo-500 blur-3xl"
          variants={backgroundPulseVariants}
          initial="initial"
          animate="pulse"
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-56 w-56 rounded-full bg-blue-500 blur-3xl"
          variants={backgroundPulseVariants}
          initial="initial"
          animate="pulse"
          transition={{
            duration: 6,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute left-2/3 top-1/3 h-72 w-72 rounded-full bg-purple-500 blur-3xl"
          variants={backgroundPulseVariants}
          initial="initial"
          animate="pulse"
          transition={{
            duration: 7,
            delay: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Enhanced Section Header with smoother animations */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="mb-16 text-center"
        >
          {/* Category Badge - Similar to Education/Experience */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm mb-6 ${
              theme === "dark"
                ? "bg-gradient-to-r from-blue-900/40 to-purple-900/40 text-blue-300 border border-blue-800/40"
                : "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200"
            } shadow-lg backdrop-blur-sm`}
          >
            <FaLaptopCode className="w-5 h-5" />
            Technical Expertise
          </motion.span>

          <motion.h2
            className="mb-4 text-4xl font-bold md:text-5xl inline-block relative font-heading"
            initial={{ opacity: 0, y: -15 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.1,
            }}
          >
            My{" "}
            <span
              className={`bg-gradient-to-r ${
                theme === "dark"
                  ? "from-blue-400 to-purple-400"
                  : "from-blue-600 to-purple-600"
              } bg-clip-text text-transparent relative`}
            >
              Tech Stack
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={
                  inView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: "easeOut",
                }}
              />
            </span>
          </motion.h2>

          <motion.p
            className={`mx-auto max-w-2xl text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2,
            }}
          >
            <span className="relative">
              The modern technologies and tools I use to build interactive and
              scalable web applications
              <motion.span
                className={`absolute -bottom-1 left-0 w-full h-[2px] ${
                  theme === "dark" ? "bg-gray-700" : "bg-gray-300"
                } rounded-full`}
                initial={{ scaleX: 0, transformOrigin: "left" }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </span>
          </motion.p>
        </motion.div>

        {/* Enhanced Category tabs with smoother animations */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 15 }} // Reduced initial offset
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring", // Spring physics for smoother animation
            stiffness: 100,
            damping: 15,
            delay: 0.1, // Reduced delay
          }}
        >
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category, index) => {
              const isActive = activeCategory === category.name;
              return (
                <motion.button
                  key={category.name}
                  onClick={() =>
                    handleCategoryChange(category.name as CategoryName)
                  }
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                    isActive
                      ? theme === "dark"
                        ? "bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-lg shadow-blue-900/20 border border-blue-600/30"
                        : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/20 border border-blue-400/30"
                      : theme === "dark"
                      ? "bg-gray-800/80 text-gray-300 hover:bg-gray-700/90 backdrop-blur-sm border border-gray-700/60 hover:border-gray-600/80"
                      : "bg-white/90 text-gray-700 hover:bg-gray-50/90 shadow backdrop-blur-sm border border-gray-200 hover:border-gray-300"
                  } relative overflow-hidden`}
                  variants={tabVariants}
                  initial="inactive"
                  animate={isActive ? "active" : "inactive"}
                  whileHover="hover"
                  custom={index}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                    delay: index * 0.1,
                  }}
                >
                  {/* Animated background glow effect for active tab - with smoother animation */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 opacity-20" // Lower base opacity
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0.2, 0.25, 0.2], // Subtler opacity change
                        scale: [1, 1.02, 1], // Subtler scale change
                      }}
                      transition={{
                        duration: 3, // Slower, more subtle animation
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut", // Smoother easing
                      }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${category.color} blur-md`}
                      ></div>
                    </motion.div>
                  )}

                  {/* Tab Icon */}
                  <motion.span
                    className={`text-lg ${isActive ? "text-white" : ""}`}
                    initial={{ y: 0 }}
                    animate={{ y: [0, -1, 0, 1, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "linear",
                      times: [0, 0.25, 0.5, 0.75, 1],
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [-2, 2, -1, 1, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {category.icon}
                  </motion.span>

                  {/* Tab Text */}
                  <motion.span
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: isActive ? 1 : 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {category.name}
                  </motion.span>

                  {/* Animated border highlight at bottom of active tab */}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Enhanced Tech stack grid with smoother scroll and category transition animations */}
        <motion.div
          ref={contentRef}
          variants={containerVariants}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto transition-all"
          key={activeCategory} // This forces a re-render with animation when category changes
          style={{
            opacity: isChangingCategory ? 0 : contentInView ? 1 : 0,
            transform: isChangingCategory
              ? "translateY(5px)" // Even subtler transition
              : contentInView
              ? "translateY(0)"
              : "translateY(5px)", // Even subtler transition
            transition: "opacity 150ms ease-out, transform 150ms ease-out", // Simple transition
            willChange: "opacity, transform", // Performance optimization hint
            transformStyle: "preserve-3d", // Better 3D performance
            backfaceVisibility: "hidden", // Prevents flickering during transitions
          }}
        >
          {activeCategory === "Web Development" ? (
            <div className="mb-8">
              {/* Display Frontend and Backend title badges */}
              <div className="flex flex-wrap justify-center mb-6 gap-4">
                <div
                  className={`px-4 py-2 rounded-full font-medium ${
                    theme === "dark"
                      ? "bg-indigo-900/30 text-indigo-400 border border-indigo-700/30"
                      : "bg-indigo-100 text-indigo-700 border border-indigo-200"
                  } shadow-md`}
                >
                  <span className="flex items-center gap-2">
                    <FaReact className="text-blue-500" />
                    Frontend
                  </span>
                </div>
                <div
                  className={`px-4 py-2 rounded-full font-medium ${
                    theme === "dark"
                      ? "bg-teal-900/30 text-teal-400 border border-teal-700/30"
                      : "bg-teal-100 text-teal-700 border border-teal-200"
                  } shadow-md`}
                >
                  <span className="flex items-center gap-2">
                    <FaNodeJs className="text-green-600" />
                    Backend
                  </span>
                </div>
              </div>

              {/* Compact grid layout */}
              <div
                ref={cardRef1}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {techStack[activeCategory]?.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    custom={index}
                    className={`p-4 rounded-xl ${
                      theme === "dark"
                        ? "bg-gray-800/80 border border-gray-700/60 hover:border-gray-600/80 backdrop-blur-sm"
                        : "bg-white/90 border border-gray-200 hover:border-gray-300 shadow-lg backdrop-blur-sm"
                    } group relative overflow-hidden transition-all duration-200`}
                    initial={{ opacity: 0, y: 15 }} // Simpler initial state, no 3D transforms
                    animate={{
                      opacity: cardInView1 ? 1 : 0,
                      y: cardInView1 ? 0 : 15,
                    }}
                    transition={{
                      type: "tween", // Using tween for stability
                      duration: 0.4,
                      ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for smooth animation
                      delay: index * 0.03, // Slight stagger
                    }}
                    style={{
                      boxShadow:
                        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    }}
                    whileHover={{
                      y: -4,
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      transition: {
                        type: "tween",
                        ease: "easeOut",
                        duration: 0.2,
                      },
                    }}
                  >
                    {/* Background highlight effect on hover */}
                    <div
                      className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out ${
                        theme === "dark"
                          ? tech.type === "Frontend"
                            ? "bg-gradient-to-br from-indigo-900/30 to-blue-900/20"
                            : "bg-gradient-to-br from-teal-900/30 to-green-900/20"
                          : tech.type === "Frontend"
                          ? "bg-gradient-to-br from-indigo-50 to-blue-50"
                          : "bg-gradient-to-br from-teal-50 to-green-50"
                      }`}
                    />

                    <div className="flex items-center gap-3 relative z-10">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          theme === "dark"
                            ? tech.type === "Frontend"
                              ? "bg-gradient-to-br from-indigo-900/50 to-blue-900/50 border border-indigo-700/30"
                              : "bg-gradient-to-br from-teal-900/50 to-green-900/50 border border-teal-700/30"
                            : tech.type === "Frontend"
                            ? "bg-gradient-to-br from-indigo-100 to-blue-100 border border-indigo-200"
                            : "bg-gradient-to-br from-teal-100 to-green-100 border border-green-200"
                        } shadow-inner group-hover:shadow-md overflow-hidden transition-all duration-200`}
                        style={{ transform: "translateZ(0)" }} // Force hardware acceleration
                      >
                        <motion.span
                          className="text-xl"
                          initial={{ y: 0 }}
                          animate={{ y: [0, -1, 0, 1, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 5,
                            ease: "linear",
                            times: [0, 0.25, 0.5, 0.75, 1],
                          }}
                          whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2, ease: "easeOut" },
                          }}
                        >
                          {tech.icon}
                        </motion.span>
                      </div>

                      <div className="flex-1">
                        <motion.h3
                          className={`text-sm font-semibold ${
                            theme === "dark"
                              ? tech.type === "Frontend"
                                ? "text-blue-300"
                                : "text-green-300"
                              : tech.type === "Frontend"
                              ? "text-blue-700"
                              : "text-green-700"
                          } group-hover:tracking-wide`}
                          transition={{ duration: 0.3 }}
                        >
                          {tech.name}
                        </motion.h3>

                        {/* Display tech type as a badge */}
                        {tech.type && (
                          <span
                            className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${
                              tech.type === "Frontend"
                                ? theme === "dark"
                                  ? "bg-indigo-900/30 text-indigo-400 border border-indigo-700/30"
                                  : "bg-indigo-100 text-indigo-700 border border-indigo-200"
                                : theme === "dark"
                                ? "bg-teal-900/30 text-teal-400 border border-teal-700/30"
                                : "bg-teal-100 text-teal-700 border border-teal-200"
                            }`}
                          >
                            {tech.type}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div
              ref={cardRef2}
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {techStack[activeCategory]?.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  custom={index}
                  className={`p-4 rounded-xl ${
                    theme === "dark"
                      ? "bg-gray-800/80 border border-gray-700/60 hover:border-gray-600/80 backdrop-blur-sm"
                      : "bg-white/90 border border-gray-200 hover:border-gray-300 shadow-lg backdrop-blur-sm"
                  } group relative overflow-hidden transition-all duration-200`}
                  initial={{ opacity: 0, y: 15 }} // Simpler initial state, no 3D transforms
                  animate={{
                    opacity: cardInView2 ? 1 : 0,
                    y: cardInView2 ? 0 : 15,
                  }}
                  transition={{
                    type: "tween", // Using tween for stability
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for smooth animation
                    delay: index * 0.03, // Slight stagger
                  }}
                  style={{
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    transition: {
                      type: "tween",
                      ease: "easeOut",
                      duration: 0.2,
                    },
                  }}
                >
                  {/* Background highlight effect on hover */}
                  <div
                    className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out ${
                      theme === "dark"
                        ? activeCategory === "Database"
                          ? "bg-gradient-to-br from-indigo-900/30 to-purple-900/20"
                          : activeCategory === "Languages"
                          ? "bg-gradient-to-br from-purple-900/30 to-indigo-900/20"
                          : "bg-gradient-to-br from-teal-900/30 to-blue-900/20"
                        : activeCategory === "Database"
                        ? "bg-gradient-to-br from-indigo-50 to-purple-50"
                        : activeCategory === "Languages"
                        ? "bg-gradient-to-br from-purple-50 to-indigo-50"
                        : "bg-gradient-to-br from-teal-50 to-blue-50"
                    }`}
                  />

                  <div className="flex items-center gap-3 relative z-10">
                    {" "}
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        theme === "dark"
                          ? activeCategory === "Database"
                            ? "bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-700/30"
                            : activeCategory === "Languages"
                            ? "bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-purple-700/30"
                            : "bg-gradient-to-br from-teal-900/50 to-blue-900/50 border border-teal-700/30"
                          : activeCategory === "Database"
                          ? "bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200"
                          : activeCategory === "Languages"
                          ? "bg-gradient-to-br from-purple-100 to-indigo-100 border border-purple-200"
                          : "bg-gradient-to-br from-teal-100 to-blue-100 border border-teal-200"
                      } shadow-inner group-hover:shadow-md overflow-hidden transition-all duration-200`}
                      style={{ transform: "translateZ(0)" }} // Force hardware acceleration
                    >
                      <motion.span
                        className="text-xl"
                        initial={{ y: 0 }}
                        animate={{ y: [0, -1, 0, 1, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 5,
                          ease: "linear",
                          times: [0, 0.25, 0.5, 0.75, 1],
                        }}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2, ease: "easeOut" },
                        }}
                      >
                        {tech.icon}
                      </motion.span>
                    </div>
                    <div className="flex-1">
                      <motion.h3
                        className={`text-sm font-semibold ${
                          theme === "dark"
                            ? activeCategory === "Database"
                              ? "text-indigo-300"
                              : activeCategory === "Languages"
                              ? "text-purple-300"
                              : "text-teal-300"
                            : activeCategory === "Database"
                            ? "text-indigo-700"
                            : activeCategory === "Languages"
                            ? "text-purple-700"
                            : "text-teal-700"
                        } group-hover:tracking-wide`}
                        transition={{ duration: 0.3 }}
                      >
                        {tech.name}
                      </motion.h3>

                      {/* Add category as subtle text */}
                      <span
                        className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full border ${
                          theme === "dark"
                            ? activeCategory === "Database"
                              ? "bg-indigo-900/30 text-indigo-400 border-indigo-700/30"
                              : activeCategory === "Languages"
                              ? "bg-purple-900/30 text-purple-400 border-purple-700/30"
                              : "bg-teal-900/30 text-teal-400 border-teal-700/30"
                            : activeCategory === "Database"
                            ? "bg-indigo-100 text-indigo-700 border-indigo-200"
                            : activeCategory === "Languages"
                            ? "bg-purple-100 text-purple-700 border-purple-200"
                            : "bg-teal-100 text-teal-700 border-teal-200"
                        }`}
                      >
                        {activeCategory}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechStack;
