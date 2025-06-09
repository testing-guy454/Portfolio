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

  const { theme } = useTheme();

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="tech-stack"
      className={`section relative overflow-hidden py-24 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-slate-50 text-gray-800"
      }`}
      style={{
        scrollMarginTop: "150px",
        paddingTop: "40px",
        scrollBehavior: "smooth",
      }}
    >
      {/* Glass morphism background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-500 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-56 w-56 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute left-2/3 top-1/3 h-72 w-72 rounded-full bg-teal-500 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p
            className={`mx-auto max-w-2xl text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            The modern technologies and tools I use to build interactive and
            scalable web applications
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name as CategoryName)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === category.name
                    ? theme === "dark"
                      ? "bg-gradient-to-r from-blue-700 to-purple-700 text-white shadow-lg shadow-blue-900/20"
                      : "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20"
                    : theme === "dark"
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tech stack grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
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
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {techStack[activeCategory]?.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    className={`p-4 rounded-xl transition-all ${
                      theme === "dark"
                        ? "bg-gray-800/80 border border-gray-700 backdrop-blur-sm"
                        : "bg-white/90 border border-gray-200 shadow-xl backdrop-blur-sm"
                    } hover:transform hover:-translate-y-1`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                          theme === "dark"
                            ? tech.type === "Frontend"
                              ? "bg-blue-900/40"
                              : "bg-green-900/40"
                            : tech.type === "Frontend"
                            ? "bg-blue-100"
                            : "bg-green-100"
                        } shadow-inner`}
                      >
                        <span className="text-xl">{tech.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`text-sm font-semibold ${
                            theme === "dark" 
                              ? tech.type === "Frontend" 
                                ? "text-blue-300" 
                                : "text-green-300"
                              : tech.type === "Frontend" 
                                ? "text-blue-700" 
                                : "text-green-700"
                          }`}
                        >
                          {tech.name}
                        </h3>
                        <div className="flex items-center gap-1.5">
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
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {techStack[activeCategory]?.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  className={`p-4 rounded-xl transition-all ${
                    theme === "dark"
                      ? "bg-gray-800/80 border border-gray-700 backdrop-blur-sm"
                      : "bg-white/90 border border-gray-200 shadow-xl backdrop-blur-sm"
                  } hover:transform hover:-translate-y-1`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        theme === "dark" 
                          ? activeCategory === "Database" 
                            ? "bg-indigo-900/40" 
                            : activeCategory === "Languages" 
                              ? "bg-purple-900/40" 
                              : "bg-teal-900/40"
                          : activeCategory === "Database" 
                            ? "bg-indigo-100" 
                            : activeCategory === "Languages" 
                              ? "bg-purple-100" 
                              : "bg-teal-100"
                      } shadow-inner`}
                    >
                      <span className="text-xl">{tech.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3
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
                        }`}
                      >
                        {tech.name}
                      </h3>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`inline-flex w-2 h-2 rounded-full ${
                            levelColor[tech.level]
                          }`}
                        />
                        <span
                          className={`text-xs ${
                            theme === "dark" ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {tech.level}
                        </span>
                      </div>
                    </div>
                  </div>
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
