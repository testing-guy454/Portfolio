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
  SiPostgresql,
  SiRedux,
  SiVite,
  SiGraphql,
  SiFirebase,
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
    color: "from-primary to-secondary",
    icon: <FaLaptopCode className="text-primary" />,
  },
  {
    name: "Database",
    color: "from-secondary to-accent",
    icon: <FaDatabase className="text-secondary" />,
  },
  {
    name: "Languages",
    color: "from-accent to-primary",
    icon: <FaCode className="text-accent" />,
  },
  {
    name: "Tools",
    color: "from-gray-600 to-gray-700",
    icon: <FaTools className="text-gray-600" />,
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
  Advanced: "bg-green-500",
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
      className={`py-24 relative overflow-hidden ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Abstract shapes */}
        <div
          className={`absolute top-20 left-20 w-96 h-96 rounded-full blur-[120px] opacity-20 ${
            theme === "dark" ? "bg-indigo-900" : "bg-indigo-200"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 right-20 w-80 h-80 rounded-full blur-[100px] opacity-20 ${
            theme === "dark" ? "bg-purple-900" : "bg-purple-200"
          }`}
        ></div>

        {/* Grid pattern */}
        <div
          className={`absolute inset-0 bg-[url('/src/assets/grid-pattern.svg')] bg-[length:30px_30px] opacity-[0.03] ${
            theme === "dark" ? "invert-0" : "invert"
          }`}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span
            className={`px-4 py-2 rounded-full font-medium text-sm ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-900/30 to-purple-900/30 text-indigo-400"
                : "bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600"
            }`}
          >
            Technologies
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold mt-4 font-heading ${
              theme === "dark" ? "text-white" : ""
            }`}
          >
            My{" "}
            <span
              className={`${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
              }`}
            >
              Tech Stack
            </span>
          </h2>
          <div
            className={`w-24 h-1 mx-auto mt-6 ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600"
                : "bg-gradient-to-r from-indigo-500 to-purple-500"
            }`}
          ></div>
          <p
            className={`mt-6 max-w-2xl mx-auto ${
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
                      ? `bg-gradient-to-r ${
                          category.color
                        } text-white shadow-lg shadow-${
                          category.color.split(" ")[0]
                        }/20`
                      : `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : theme === "dark"
                    ? "bg-gray-800 text-gray-300 hover:text-white"
                    : "bg-white text-gray-600 hover:text-gray-900 shadow-sm"
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
                      ? "bg-blue-900/30 text-blue-400"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <FaReact className="text-blue-500" />
                    Frontend
                  </span>
                </div>
                <div
                  className={`px-4 py-2 rounded-full font-medium ${
                    theme === "dark"
                      ? "bg-green-900/30 text-green-400"
                      : "bg-green-100 text-green-700"
                  }`}
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
                        ? "bg-gray-800 hover:bg-gray-750 border border-gray-700/50"
                        : "bg-white hover:bg-gray-50 border border-gray-100 shadow-card"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                          theme === "dark"
                            ? tech.type === "Frontend"
                              ? "bg-blue-900/30"
                              : "bg-green-900/30"
                            : tech.type === "Frontend"
                            ? "bg-blue-100"
                            : "bg-green-100"
                        }`}
                      >
                        <span className="text-xl">{tech.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`text-sm font-semibold ${
                            theme === "dark" ? "text-white" : "text-gray-900"
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
                      ? "bg-gray-800 hover:bg-gray-750 border border-gray-700/50"
                      : "bg-white hover:bg-gray-50 border border-gray-100 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        theme === "dark" ? "bg-gray-700/50" : "bg-gray-100"
                      }`}
                    >
                      <span className="text-xl">{tech.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-sm font-semibold ${
                          theme === "dark" ? "text-white" : "text-gray-900"
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
