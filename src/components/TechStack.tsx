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
type SkillLevel = "Beginner" | "Intermediate" | "Advanced";
type SkillType = "Frontend" | "Backend";
type CategoryName = "Web Development" | "Database" | "Languages" | "Tools";

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
      level: "Advanced",
      type: "Frontend",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-600" />,
      level: "Advanced",
      type: "Backend",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600" />,
      level: "Advanced",
      type: "Frontend",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-600 dark:text-gray-300" />,
      level: "Advanced",
      type: "Backend",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      level: "Advanced",
      type: "Frontend",
    },
    {
      name: "RESTful APIs",
      icon: <FaServer className="text-blue-600" />,
      level: "Advanced",
      type: "Backend",
    },
    {
      name: "HTML5",
      icon: <SiHtml5 className="text-orange-500" />,
      level: "Advanced",
      type: "Frontend",
    },
    {
      name: "CSS3",
      icon: <SiCss3 className="text-blue-500" />,
      level: "Advanced",
      type: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-500" />,
      level: "Advanced",
      type: "Frontend",
    },
    // {
    //   name: "GraphQL",
    //   icon: <SiGraphql className="text-pink-600" />,
    //   level: "Intermediate",
    //   type: "Backend",
    // },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      level: "Intermediate",
      type: "Frontend",
    },
    {
      name: "Redux",
      icon: <SiRedux className="text-purple-600" />,
      level: "Advanced",
      type: "Frontend",
    },
    // {
    //   name: "Firebase",
    //   icon: <SiFirebase className="text-yellow-500" />,
    //   level: "Intermediate",
    //   type: "Backend",
    // },
    {
      name: "Vite",
      icon: <SiVite className="text-purple-500" />,
      level: "Intermediate",
      type: "Frontend",
    },
  ],
  Database: [
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600" />,
      level: "Advanced",
    },
    {
      name: "SQL",
      icon: <SiMysql className="text-blue-600" />,
      level: "Intermediate",
    },
    // {
    //   name: "PostgreSQL",
    //   icon: <SiPostgresql className="text-blue-600" />,
    //   level: "Intermediate",
    // },
    {
      name: "Database Design",
      icon: <FaDatabase className="text-purple-500" />,
      level: "Advanced",
    },
  ],
  Languages: [
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      level: "Advanced",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600" />,
      level: "Advanced",
    },
    {
      name: "C++",
      icon: <SiCplusplus className="text-blue-600" />,
      level: "Advanced",
    },
    {
      name: "Java",
      icon: <SiJava className="text-red-500" />,
      level: "Intermediate",
    },
    {
      name: "Python",
      icon: <SiPython className="text-blue-500" />,
      level: "Intermediate",
    },
  ],
  Tools: [
    {
      name: "Git",
      icon: <SiGit className="text-orange-600" />,
      level: "Advanced",
    },
    {
      name: "GitHub",
      icon: <SiGithub className="text-black dark:text-white" />,
      level: "Advanced",
    },
  ],
};

const levelColor: Record<SkillLevel, string> = {
  Beginner: "bg-yellow-500",
  Intermediate: "bg-blue-500",
  Advanced: "bg-teal-500",
};

const TechStack = () => {
  const [activeCategory, setActiveCategory] =
    useState<CategoryName>("Web Development");
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [contentRef, contentInView] = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });
  // Track for category change animation
  const [isChangingCategory, setIsChangingCategory] = useState(false);

  // Handle category change with animation
  const handleCategoryChange = (newCategory: CategoryName) => {
    if (newCategory !== activeCategory) {
      setIsChangingCategory(true);
      setTimeout(() => {
        setActiveCategory(newCategory);
        setIsChangingCategory(false);
      }, 300);
    }
  };

  const { theme } = useTheme();

  // Enhanced Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren",
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        mass: 0.8,
        duration: 0.7,
        delay: i * 0.06,
      },
    }),
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.4,
      },
    },
    hover: {
      y: -8,
      scale: 1.05,
      boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        mass: 0.6,
      },
    },
  };

  const iconFloatVariants = {
    initial: { y: 0, opacity: 0.8 },
    float: {
      y: [-3, 3, -3],
      opacity: [0.8, 1, 0.8],
      filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
      transition: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 3,
        ease: "easeInOut",
      },
    },
    hover: {
      rotate: [0, -8, 8, -4, 0],
      scale: 1.2,
      opacity: 1,
      filter: "brightness(1.3)",
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  // Enhanced category tab animations
  const tabVariants = {
    inactive: {
      scale: 0.95,
      opacity: 0.7,
      y: 0,
      transition: { duration: 0.4 },
    },
    active: {
      scale: 1,
      opacity: 1,
      y: -3,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 8,
      },
    },
  };

  // Enhanced skill level indicator animation
  const levelIndicatorVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (delay: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3 + delay * 0.1,
        type: "spring",
        stiffness: 500,
        damping: 15,
      },
    }),
  };

  // Enhanced skill level progress bar animations with gradient effect
  const skillLevelBarVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level: SkillLevel) => ({
      width:
        level === "Beginner" ? "30%" : level === "Intermediate" ? "60%" : "90%",
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
    hover: (level: SkillLevel) => ({
      width:
        level === "Beginner" ? "35%" : level === "Intermediate" ? "65%" : "95%",
      filter: "brightness(1.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  // Animation for the gradient effect on skill level bars
  const gradientShiftVariants = {
    initial: { backgroundPosition: "0% 50%" },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        repeat: Infinity,
        duration: 10,
        ease: "easeInOut",
      },
    },
  };

  const backgroundPulseVariants = {
    initial: { opacity: 0.2, scale: 1 },
    pulse: {
      opacity: [0.2, 0.3, 0.2],
      scale: [1, 1.02, 1],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  // Create a custom hook for scrolling animation
  const useScrollAnimation = (threshold = 0.1) => {
    const [element, inView] = useInView({
      triggerOnce: false,
      threshold: threshold,
    });

    return { ref: element, inView };
  };

  // Use multiple scroll animation references for different sections
  const { ref: cardRef1, inView: cardInView1 } = useScrollAnimation(0.05);
  const { ref: cardRef2, inView: cardInView2 } = useScrollAnimation(0.05);

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
          ? "bg-gray-900 text-white"
          : "bg-slate-50 text-gray-800"
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
      {/* Custom cursor effect that follows skill icons on hover */}
      {isHovering && (
        <motion.div
          className={`fixed w-8 h-8 rounded-full pointer-events-none z-50 ${
            theme === "dark"
              ? "bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-md"
              : "bg-gradient-to-r from-blue-400/30 to-purple-400/30 backdrop-blur-md"
          } border border-white/10`}
          animate={{
            x: cursorPos.x - 16,
            y: cursorPos.y - 16,
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            x: { duration: 0.2, ease: "linear" },
            y: { duration: 0.2, ease: "linear" },
            opacity: { duration: 1.5, repeat: Infinity },
            scale: { duration: 1.5, repeat: Infinity },
          }}
        />
      )}
      {/* Enhanced Glass morphism background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {/* Animated background elements */}
        <motion.div
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-500 blur-3xl"
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
          className="absolute left-2/3 top-1/3 h-72 w-72 rounded-full bg-teal-500 blur-3xl"
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

        {/* Additional subtle pattern overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/10 dark:to-black/20 mix-blend-overlay"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Enhanced Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <motion.h2
            className="mb-4 text-4xl font-bold md:text-5xl inline-block relative"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400 bg-clip-text text-transparent relative">
              Tech Stack
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={
                  inView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }
                }
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className={`mx-auto max-w-2xl text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
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
                transition={{ duration: 0.8, delay: 0.7 }}
              />
            </span>
          </motion.p>
        </motion.div>

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
                          ? "bg-blue-500/10"
                          : "bg-green-500/10"
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="flex items-center gap-3 relative z-10">
                      <motion.div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          theme === "dark"
                            ? tech.type === "Frontend"
                              ? "bg-blue-900/50"
                              : "bg-green-900/50"
                            : tech.type === "Frontend"
                            ? "bg-blue-100"
                            : "bg-green-100"
                        } shadow-inner group-hover:shadow-md overflow-hidden`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <motion.span
                          className="text-xl"
                          variants={iconFloatVariants}
                          initial="initial"
                          animate="float"
                          whileHover="hover"
                        >
                          {tech.icon}
                        </motion.span>
                      </motion.div>

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

                        <div className="mt-1 relative">
                          {" "}
                          {/* Skill level bar with animated gradient */}
                          <div className="h-[6px] w-full bg-gray-200/30 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full ${
                                tech.level === "Advanced"
                                  ? "bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500"
                                  : tech.level === "Intermediate"
                                  ? "bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500"
                                  : "bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500"
                              } bg-[length:200%_100%]`}
                              variants={skillLevelBarVariants}
                              custom={tech.level}
                              initial="hidden"
                              animate="visible"
                              whileHover="hover"
                            />
                            <motion.div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100"
                              variants={gradientShiftVariants}
                              initial="initial"
                              animate="animate"
                              style={{
                                background:
                                  tech.level === "Advanced"
                                    ? "linear-gradient(90deg, rgba(20,184,166,0.2) 0%, rgba(45,212,191,0.4) 50%, rgba(20,184,166,0.2) 100%)"
                                    : tech.level === "Intermediate"
                                    ? "linear-gradient(90deg, rgba(59,130,246,0.2) 0%, rgba(96,165,250,0.4) 50%, rgba(59,130,246,0.2) 100%)"
                                    : "linear-gradient(90deg, rgba(234,179,8,0.2) 0%, rgba(250,204,21,0.4) 50%, rgba(234,179,8,0.2) 100%)",
                                backgroundSize: "200% 100%",
                              }}
                            />
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <motion.div
                              className="flex items-center gap-1.5"
                              custom={index}
                              variants={levelIndicatorVariants}
                            >
                              <span
                                className={`inline-flex w-2 h-2 rounded-full ${
                                  levelColor[tech.level]
                                }`}
                              />
                              <span
                                className={`text-xs ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-500"
                                }`}
                              >
                                {tech.level}
                              </span>
                            </motion.div>

                            {/* Hot spot indicator that appears on hover */}
                            <motion.div
                              className="opacity-0 group-hover:opacity-100"
                              initial={{ scale: 0 }}
                              whileHover={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <motion.span
                                className={`inline-flex w-1.5 h-1.5 rounded-full ${
                                  tech.level === "Advanced"
                                    ? "bg-teal-500"
                                    : tech.level === "Intermediate"
                                    ? "bg-blue-500"
                                    : "bg-yellow-500"
                                }`}
                                animate={{
                                  scale: [1, 1.5, 1],
                                  opacity: [1, 0.7, 1],
                                }}
                                transition={{
                                  repeat: Infinity,
                                  duration: 2,
                                  ease: "easeInOut",
                                }}
                              />
                            </motion.div>
                          </div>
                        </div>
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
                  {/* Background highlight effect on hover */}
                  <motion.div
                    className={`absolute inset-0 opacity-0 rounded-xl ${
                      theme === "dark"
                        ? activeCategory === "Database"
                          ? "bg-indigo-700/20"
                          : activeCategory === "Languages"
                          ? "bg-purple-700/20"
                          : "bg-teal-700/20"
                        : activeCategory === "Database"
                        ? "bg-indigo-500/10"
                        : activeCategory === "Languages"
                        ? "bg-purple-500/10"
                        : "bg-teal-500/10"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="flex items-center gap-3 relative z-10">
                    <motion.div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        theme === "dark"
                          ? activeCategory === "Database"
                            ? "bg-indigo-900/50"
                            : activeCategory === "Languages"
                            ? "bg-purple-900/50"
                            : "bg-teal-900/50"
                          : activeCategory === "Database"
                          ? "bg-indigo-100"
                          : activeCategory === "Languages"
                          ? "bg-purple-100"
                          : "bg-teal-100"
                      } shadow-inner group-hover:shadow-md overflow-hidden`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <motion.span
                        className="text-xl"
                        variants={iconFloatVariants}
                        initial="initial"
                        animate="float"
                        whileHover="hover"
                      >
                        {tech.icon}
                      </motion.span>
                    </motion.div>

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

                      <div className="mt-1 relative">
                        {/* Skill level bar with animated gradient */}
                        <div className="h-[6px] w-full bg-gray-200/30 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${
                              tech.level === "Advanced"
                                ? "bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500"
                                : tech.level === "Intermediate"
                                ? "bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500"
                                : "bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500"
                            } bg-[length:200%_100%]`}
                            variants={skillLevelBarVariants}
                            custom={tech.level}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                          />
                          <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100"
                            variants={gradientShiftVariants}
                            initial="initial"
                            animate="animate"
                            style={{
                              background:
                                tech.level === "Advanced"
                                  ? "linear-gradient(90deg, rgba(20,184,166,0.2) 0%, rgba(45,212,191,0.4) 50%, rgba(20,184,166,0.2) 100%)"
                                  : tech.level === "Intermediate"
                                  ? "linear-gradient(90deg, rgba(59,130,246,0.2) 0%, rgba(96,165,250,0.4) 50%, rgba(59,130,246,0.2) 100%)"
                                  : "linear-gradient(90deg, rgba(234,179,8,0.2) 0%, rgba(250,204,21,0.4) 50%, rgba(234,179,8,0.2) 100%)",
                              backgroundSize: "200% 100%",
                            }}
                          />
                        </div>

                        <div className="flex items-center justify-between mt-1">
                          <motion.div
                            className="flex items-center gap-1.5"
                            custom={index}
                            variants={levelIndicatorVariants}
                          >
                            <span
                              className={`inline-flex w-2 h-2 rounded-full ${
                                levelColor[tech.level]
                              }`}
                            />
                            <span
                              className={`text-xs ${
                                theme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-500"
                              }`}
                            >
                              {tech.level}
                            </span>
                          </motion.div>

                          {/* Hot spot indicator that appears on hover */}
                          <motion.div
                            className="opacity-0 group-hover:opacity-100"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.span
                              className={`inline-flex w-1.5 h-1.5 rounded-full ${
                                tech.level === "Advanced"
                                  ? "bg-teal-500"
                                  : tech.level === "Intermediate"
                                  ? "bg-blue-500"
                                  : "bg-yellow-500"
                              }`}
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.7, 1],
                              }}
                              transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut",
                              }}
                            />
                          </motion.div>
                        </div>
                      </div>
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
