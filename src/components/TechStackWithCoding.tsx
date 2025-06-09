import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaTools,
  FaLaptopCode,
  FaMedal,
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
  SiCodechef,
  SiGeeksforgeeks,
  SiLeetcode,
} from "react-icons/si";
// Use SiOpenjdk for Java icon in react-icons v5.5.0+
import { SiOpenjdk as SiJava } from "react-icons/si";
import DSACounter from "./DSACounter";

// Define types for our tech stack
type SkillLevel = "Beginner" | "Intermediate" | "Advanced";
type SkillType = "Frontend" | "Backend";
type CategoryName =
  | "Web Development"
  | "Database"
  | "Languages"
  | "Tools"
  | "Coding Platforms";

interface TechItem {
  name: string;
  icon: JSX.Element;
  level: SkillLevel;
  type?: SkillType;
}

interface Category {
  name: CategoryName;
  color: string;
  icon: JSX.Element;
}

const TechStack = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // References for scroll animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [cardRef1, cardInView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [cardRef2, cardInView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // State for category navigation
  const [activeCategory, setActiveCategory] =
    useState<CategoryName>("Web Development");
  const [isChangingCategory, setIsChangingCategory] = useState(false);

  // Check for URL hash parameters to set initial category
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.includes("tech-stack?category=coding")) {
        handleCategoryChange("Coding Platforms");
      }
    };

    // Check on initial load
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Tech Stack Data
  const techStack: Record<CategoryName, TechItem[]> = {
    "Web Development": [
      {
        name: "React",
        icon: <FaReact className="text-blue-500" />,
        level: "Advanced",
        type: "Frontend",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600" />,
        level: "Intermediate",
        type: "Frontend",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
        level: "Advanced",
        type: "Frontend",
      },
      {
        name: "HTML5",
        icon: <SiHtml5 className="text-orange-600" />,
        level: "Advanced",
        type: "Frontend",
      },
      {
        name: "CSS3",
        icon: <SiCss3 className="text-blue-400" />,
        level: "Advanced",
        type: "Frontend",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-500" />,
        level: "Advanced",
        type: "Frontend",
      },
      {
        name: "NextJS",
        icon: <SiNextdotjs className={isDark ? "text-white" : "text-black"} />,
        level: "Intermediate",
        type: "Frontend",
      },
      {
        name: "Redux",
        icon: <SiRedux className="text-purple-600" />,
        level: "Intermediate",
        type: "Frontend",
      },
      {
        name: "Vite",
        icon: <SiVite className="text-purple-500" />,
        level: "Intermediate",
        type: "Frontend",
      },
      {
        name: "NodeJS",
        icon: <FaNodeJs className="text-green-600" />,
        level: "Intermediate",
        type: "Backend",
      },
      {
        name: "Express",
        icon: <SiExpress className={isDark ? "text-white" : "text-black"} />,
        level: "Intermediate",
        type: "Backend",
      },
    ],
    Database: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500" />,
        level: "Intermediate",
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-blue-600" />,
        level: "Intermediate",
      },
    ],
    Languages: [
      {
        name: "C++",
        icon: <SiCplusplus className="text-blue-700" />,
        level: "Advanced",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
        level: "Advanced",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600" />,
        level: "Intermediate",
      },
      {
        name: "Python",
        icon: <SiPython className="text-blue-500" />,
        level: "Intermediate",
      },
      {
        name: "Java",
        icon: <SiJava className="text-red-600" />,
        level: "Beginner",
      },
    ],
    Tools: [
      {
        name: "Git",
        icon: <SiGit className="text-orange-600" />,
        level: "Intermediate",
      },
      {
        name: "GitHub",
        icon: <SiGithub className={isDark ? "text-white" : "text-black"} />,
        level: "Intermediate",
      },
    ],
    "Coding Platforms": [
      {
        name: "LeetCode",
        icon: <SiLeetcode className="text-orange-500" />,
        level: "Intermediate",
      },
      {
        name: "CodeChef",
        icon: <SiCodechef className="text-brown-500" />,
        level: "Intermediate",
      },
      {
        name: "GeeksForGeeks",
        icon: <SiGeeksforgeeks className="text-green-600" />,
        level: "Intermediate",
      },
    ],
  };

  // Coding data centralized for easier editing
  const codingData = {
    platforms: [
      {
        name: "LeetCode",
        rating: "1550+",
        problemsSolved: "183",
        progress: "75%",
        icon: SiLeetcode,
        iconColor: "indigo",
        categories: [
          { name: "Easy", count: 86, color: "green" },
          { name: "Medium", count: 93, color: "yellow" },
          { name: "Hard", count: 4, color: "red" },
        ],
      },
      {
        name: "CodeChef",
        rating: "1270+",
        problemsSolved: "25+",
        progress: "60%",
        icon: SiCodechef,
        iconColor: "purple",
        rank: "2★ Coder (Division 3)",
        contests: "5+",
      },
      {
        name: "GeeksForGeeks",
        institutionRank: "#1455",
        problemsSolved: "70+",
        progress: "75%",
        icon: SiGeeksforgeeks,
        iconColor: "green",
        achievement: "GfG 160 - 160 Days of Problem Solving",
      },
    ],
    achievements: [
      {
        id: 1,
        title: "LeetCode Weekly Contest",
        description: "Ranked in the top 26.1% globally on LeetCode",
        color: "indigo",
      },
      {
        id: 2,
        title: "GeeksForGeeks",
        description:
          "160 Days of consistent problem solving challenge completed",
        color: "green",
      },
    ],
  };

  // Category tabs
  const categories: Category[] = [
    {
      name: "Web Development",
      color: "from-blue-600 to-indigo-600",
      icon: <FaReact />,
    },
    {
      name: "Database",
      color: "from-green-600 to-teal-600",
      icon: <FaDatabase />,
    },
    {
      name: "Languages",
      color: "from-indigo-600 to-purple-600",
      icon: <FaCode />,
    },
    {
      name: "Tools",
      color: "from-pink-500 to-rose-500",
      icon: <FaTools />,
    },
    {
      name: "Coding Platforms",
      color: "from-orange-500 to-amber-500",
      icon: <FaLaptopCode />,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: isDark
        ? "0 15px 30px rgba(0, 0, 0, 0.3)"
        : "0 15px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const tabVariants = {
    inactive: (i: number) => ({
      opacity: 0.7,
      scale: 0.95,
      transition: {
        delay: i * 0.05,
      },
    }),
    active: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
    },
  };

  const iconFloatVariants: Variants = {
    initial: { y: 0 },
    float: {
      y: [0, -2, 0, 2, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
    hover: { rotate: 5 },
  };

  // Handle category change with animation
  const handleCategoryChange = (category: CategoryName) => {
    if (category !== activeCategory) {
      setIsChangingCategory(true);
      setTimeout(() => {
        setActiveCategory(category);
        setTimeout(() => {
          setIsChangingCategory(false);
        }, 100);
      }, 300);
    }
  };

  return (
    <section
      id="tech-stack"
      className={`section py-20 ${
        isDark ? "bg-gray-900" : "bg-gradient-to-t from-gray-50 to-white"
      }`}
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              isDark
                ? "bg-indigo-900/30 text-indigo-400 border border-indigo-800/30"
                : "bg-indigo-100 text-indigo-700"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Skills & Expertise
          </motion.span>

          <motion.h2
            className={`text-4xl font-bold mt-4 mb-6 ${
              isDark ? "text-white" : ""
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technical{" "}
            <span
              className={`${
                isDark
                  ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text"
                  : "bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 text-transparent bg-clip-text"
              }`}
            >
              Proficiency
            </span>
          </motion.h2>

          <motion.p
            className={`max-w-3xl mx-auto text-lg ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="relative inline-block">
              Expertise in modern web technologies and programming languages,
              with a focus on full-stack development
              <motion.span
                className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r ${
                  isDark
                    ? "from-indigo-500 via-purple-500 to-indigo-500"
                    : "from-indigo-600 via-purple-500 to-indigo-600"
                }`}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </motion.p>
        </motion.div>

        {/* DSA Counter Section */}
        {activeCategory === "Coding Platforms" && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <DSACounter />
          </motion.div>
        )}

        {/* Enhanced Category tabs */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2,
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
                        ? "bg-gradient-to-r from-blue-700 to-purple-700 text-white shadow-lg shadow-blue-900/20"
                        : "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20"
                      : theme === "dark"
                      ? "bg-gray-800/80 text-gray-300 hover:bg-gray-700/90 backdrop-blur-sm"
                      : "bg-white/90 text-gray-700 hover:bg-gray-50/90 shadow backdrop-blur-sm"
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
                  {/* Animated background glow effect for active tab */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0.2, 0.3, 0.2],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
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
                    variants={iconFloatVariants}
                    initial="initial"
                    animate="float"
                    whileHover="hover"
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

        {/* Enhanced Tech stack grid with scroll and category transition animations */}
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
              ? "translateY(20px)"
              : contentInView
              ? "translateY(0)"
              : "translateY(20px)",
            transition: "opacity 300ms ease, transform 300ms ease",
          }}
        >
          {activeCategory === "Web Development" ? (
            <div className="mb-8">
              {/* Display Frontend and Backend title badges */}
              <div className="flex flex-wrap justify-center mb-6 gap-4">
                <div
                  className={`px-4 py-2 rounded-full font-medium ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-blue-900/40 to-indigo-900/40 text-blue-300 border border-blue-800/30"
                      : "bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border border-blue-200"
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
                      ? "bg-gradient-to-r from-teal-900/40 to-green-900/40 text-teal-300 border border-teal-800/30"
                      : "bg-gradient-to-r from-teal-100 to-green-100 text-teal-700 border border-teal-200"
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
                    variants={itemVariants}
                    className={`p-4 rounded-xl transition-all ${
                      theme === "dark"
                        ? "bg-gray-800/80 border border-gray-700 backdrop-blur-sm"
                        : "bg-white/90 border border-gray-200 shadow-xl backdrop-blur-sm"
                    } group relative overflow-hidden`}
                    whileHover="hover"
                    layout
                    initial={{
                      opacity: 0,
                      y: 30,
                      rotateX: 10,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: cardInView1 ? 1 : 0,
                      y: cardInView1 ? 0 : 30,
                      rotateX: cardInView1 ? 0 : 10,
                      scale: cardInView1 ? 1 : 0.9,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.08,
                        ease: "easeOut",
                      },
                    }}
                  >
                    {/* Background highlight effect on hover */}
                    <motion.div
                      className={`absolute inset-0 opacity-0 rounded-xl ${
                        theme === "dark"
                          ? tech.type === "Frontend"
                            ? "bg-blue-700/20"
                            : "bg-green-700/20"
                          : tech.type === "Frontend"
                          ? "bg-blue-100"
                          : "bg-green-100"
                      }`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.8 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Tech Icon and Skill Level indicator */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{tech.icon}</div>
                      <div
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          tech.level === "Advanced"
                            ? theme === "dark"
                              ? "bg-green-900/40 text-green-300 border border-green-800/30"
                              : "bg-green-100 text-green-800 border border-green-200"
                            : tech.level === "Intermediate"
                            ? theme === "dark"
                              ? "bg-blue-900/40 text-blue-300 border border-blue-800/30"
                              : "bg-blue-100 text-blue-800 border border-blue-200"
                            : theme === "dark"
                            ? "bg-yellow-900/40 text-yellow-300 border border-yellow-800/30"
                            : "bg-yellow-100 text-yellow-800 border border-yellow-200"
                        }`}
                      >
                        {tech.level}
                      </div>
                    </div>

                    {/* Tech Name */}
                    <h4
                      className={`font-medium text-base ${
                        theme === "dark" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {tech.name}
                    </h4>

                    {/* Tech type badge (Frontend/Backend) */}
                    {tech.type && (
                      <span
                        className={`inline-block text-xs mt-2 px-2 py-0.5 rounded ${
                          tech.type === "Frontend"
                            ? theme === "dark"
                              ? "bg-blue-900/30 text-blue-300"
                              : "bg-blue-50 text-blue-600"
                            : theme === "dark"
                            ? "bg-green-900/30 text-green-300"
                            : "bg-green-50 text-green-600"
                        }`}
                      >
                        {tech.type}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ) : activeCategory === "Coding Platforms" ? (
            <div>
              {/* Coding Platforms Section */}
              <div className="mb-12">
                <div
                  ref={cardRef2}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {codingData.platforms.map((platform, index) => {
                    const Icon = platform.icon;
                    return (
                      <motion.div
                        key={platform.name}
                        className={`rounded-xl p-6 relative overflow-hidden ${
                          theme === "dark"
                            ? "bg-gray-800/80 border border-gray-700 backdrop-blur-sm"
                            : "bg-white border border-gray-200 shadow-lg backdrop-blur-sm"
                        }`}
                        whileHover={{
                          y: -5,
                          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{
                          opacity: cardInView2 ? 1 : 0,
                          y: cardInView2 ? 0 : 30,
                          transition: {
                            duration: 0.6,
                            delay: index * 0.1,
                          },
                        }}
                      >
                        {/* Platform Icon */}
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`h-12 w-12 rounded-lg flex items-center justify-center ${
                              platform.iconColor === "indigo"
                                ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
                                : platform.iconColor === "purple"
                                ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                                : "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                            }`}
                          >
                            <Icon className="text-2xl" />
                          </div>
                          <div>
                            <h3
                              className={`text-xl font-bold ${
                                theme === "dark" ? "text-white" : ""
                              }`}
                            >
                              {platform.name}
                            </h3>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {/* Platform specific details */}
                          {platform.rating && (
                            <div className="flex justify-between">
                              <span
                                className={`text-sm ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                Rating
                              </span>
                              <span
                                className={`font-medium ${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-900"
                                }`}
                              >
                                {platform.rating}
                              </span>
                            </div>
                          )}

                          <div className="flex justify-between">
                            <span
                              className={`text-sm ${
                                theme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-600"
                              }`}
                            >
                              Problems Solved
                            </span>
                            <span
                              className={`font-medium ${
                                theme === "dark"
                                  ? "text-white"
                                  : "text-gray-900"
                              }`}
                            >
                              {platform.problemsSolved}
                            </span>
                          </div>

                          {platform.rank && (
                            <div className="flex justify-between">
                              <span
                                className={`text-sm ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                Rank
                              </span>
                              <span
                                className={`font-medium ${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-900"
                                }`}
                              >
                                {platform.rank}
                              </span>
                            </div>
                          )}

                          {platform.contests && (
                            <div className="flex justify-between">
                              <span
                                className={`text-sm ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                Contests
                              </span>
                              <span
                                className={`font-medium ${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-900"
                                }`}
                              >
                                {platform.contests}
                              </span>
                            </div>
                          )}

                          {platform.institutionRank && (
                            <div className="flex justify-between">
                              <span
                                className={`text-sm ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                Institution Rank
                              </span>
                              <span
                                className={`font-medium ${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-900"
                                }`}
                              >
                                {platform.institutionRank}
                              </span>
                            </div>
                          )}

                          {platform.achievement && (
                            <div className="flex justify-between">
                              <span
                                className={`text-sm ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                Achievement
                              </span>
                              <span
                                className={`font-medium ${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-900"
                                }`}
                              >
                                {platform.achievement}
                              </span>
                            </div>
                          )}

                          {/* Progress bar */}
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span
                                className={`${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-500"
                                }`}
                              >
                                Progress
                              </span>
                              <span
                                className={`font-medium ${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-900"
                                }`}
                              >
                                {platform.progress}
                              </span>
                            </div>
                            <div
                              className={`h-2 w-full rounded-full ${
                                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                              }`}
                            >
                              <div
                                className={`h-2 rounded-full ${
                                  platform.iconColor === "indigo"
                                    ? "bg-gradient-to-r from-indigo-500 to-blue-500"
                                    : platform.iconColor === "purple"
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500"
                                    : "bg-gradient-to-r from-green-500 to-emerald-500"
                                }`}
                                style={{ width: platform.progress }}
                              ></div>
                            </div>
                          </div>

                          {/* Problem categories for LeetCode */}
                          {platform.categories && (
                            <div className="mt-4">
                              <span
                                className={`block text-sm mb-2 ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                Problem Categories
                              </span>
                              <div className="flex gap-2">
                                {platform.categories.map((category) => (
                                  <div
                                    key={category.name}
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                                      category.color === "green"
                                        ? theme === "dark"
                                          ? "bg-green-900/30 text-green-400 border border-green-800/30"
                                          : "bg-green-100 text-green-700 border border-green-200"
                                        : category.color === "yellow"
                                        ? theme === "dark"
                                          ? "bg-yellow-900/30 text-yellow-400 border border-yellow-800/30"
                                          : "bg-yellow-100 text-yellow-700 border border-yellow-200"
                                        : theme === "dark"
                                        ? "bg-red-900/30 text-red-400 border border-red-800/30"
                                        : "bg-red-100 text-red-700 border border-red-200"
                                    }`}
                                  >
                                    {category.name}: {category.count}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Coding achievements */}
              <div className="mt-12">
                <h3
                  className={`text-xl font-semibold mb-6 ${
                    theme === "dark" ? "text-white" : ""
                  }`}
                >
                  Coding Achievements
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {codingData.achievements.map((achievement) => (
                    <motion.div
                      key={achievement.id}
                      className={`p-4 rounded-xl flex items-start gap-4 ${
                        theme === "dark"
                          ? "bg-gray-800/50 border border-gray-700"
                          : "bg-white border border-gray-200 shadow-md"
                      }`}
                      whileHover={{
                        y: -3,
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div
                        className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          achievement.color === "indigo"
                            ? theme === "dark"
                              ? "bg-indigo-900/40 text-indigo-300"
                              : "bg-indigo-100 text-indigo-700"
                            : theme === "dark"
                            ? "bg-green-900/40 text-green-300"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        <FaMedal />
                      </div>
                      <div>
                        <h4
                          className={`font-medium ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {achievement.title}
                        </h4>
                        <p
                          className={`text-sm mt-1 ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {achievement.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // Display other categories in a similar grid layout
            <div
              ref={cardRef2}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {techStack[activeCategory]?.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  custom={index}
                  variants={itemVariants}
                  className={`p-5 rounded-xl transition-all ${
                    theme === "dark"
                      ? "bg-gray-800/80 border border-gray-700 backdrop-blur-sm"
                      : "bg-white/90 border border-gray-200 shadow-xl backdrop-blur-sm"
                  } relative overflow-hidden`}
                  whileHover="hover"
                  layout
                  initial={{
                    opacity: 0,
                    y: 30,
                    rotateX: 10,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: cardInView2 ? 1 : 0,
                    y: cardInView2 ? 0 : 30,
                    rotateX: cardInView2 ? 0 : 10,
                    scale: cardInView2 ? 1 : 0.9,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: "easeOut",
                    },
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{tech.icon}</div>
                    <div
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        tech.level === "Advanced"
                          ? theme === "dark"
                            ? "bg-green-900/40 text-green-300 border border-green-800/30"
                            : "bg-green-100 text-green-800 border border-green-200"
                          : tech.level === "Intermediate"
                          ? theme === "dark"
                            ? "bg-blue-900/40 text-blue-300 border border-blue-800/30"
                            : "bg-blue-100 text-blue-800 border border-blue-200"
                          : theme === "dark"
                          ? "bg-yellow-900/40 text-yellow-300 border border-yellow-800/30"
                          : "bg-yellow-100 text-yellow-800 border border-yellow-200"
                      }`}
                    >
                      {tech.level}
                    </div>
                  </div>
                  <h4
                    className={`font-medium text-base ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {tech.name}
                  </h4>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
