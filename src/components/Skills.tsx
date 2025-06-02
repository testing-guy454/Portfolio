import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaCode,
  FaBrain,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Competitive Programming",
    description:
      "Showcasing problem-solving skills and achievements on competitive coding platforms",
    icon: <FaCode className="text-indigo-500" />,
    color: "from-indigo-400 to-violet-500",
    skills: [
      {
        name: "LeetCode (1550+ Rating)",
        icon: <FaCode className="text-yellow-500" />,
        level: 90,
        platform: "LeetCode",
        problemsSolved: 200,
        url: "https://leetcode.com/your-username/",
      },
      {
        name: "CodeChef (4★ Coder)",
        icon: <FaCode className="text-red-500" />,
        level: 85,
        platform: "CodeChef",
        problemsSolved: 150,
        url: "https://www.codechef.com/users/your-username",
      },
      {
        name: "Codeforces (Expert)",
        icon: <FaCode className="text-blue-500" />,
        level: 88,
        platform: "Codeforces",
        problemsSolved: 180,
        url: "https://codeforces.com/profile/your-username",
      },
      {
        name: "HackerRank (5★)",
        icon: <FaCode className="text-green-500" />,
        level: 85,
        platform: "HackerRank",
        problemsSolved: 120,
        url: "https://www.hackerrank.com/your-username",
      },
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Creating responsive and interactive user interfaces with modern frameworks and libraries",
    icon: <FaReact className="text-indigo-500" />,
    color: "from-indigo-400 to-violet-500",
    skills: [
      {
        name: "React.js",
        icon: <FaReact className="text-indigo-500" />,
        level: 85,
      },
      {
        name: "JavaScript",
        icon: <SiTypescript className="text-indigo-600" />,
        level: 90,
      },
      {
        name: "HTML/CSS",
        icon: <FaCode className="text-indigo-500" />,
        level: 95,
      },
      {
        name: "Tailwind CSS",
        icon: <FaCode className="text-violet-500" />,
        level: 90,
      },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Building robust server-side applications and APIs with scalable architecture",
    icon: <FaNodeJs className="text-indigo-600" />,
    color: "from-indigo-300 to-violet-500",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-indigo-600" />,
        level: 85,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-violet-700" />,
        level: 85,
      },
      {
        name: "C++",
        icon: <FaPython className="text-indigo-500" />,
        level: 90,
      },
      {
        name: "RESTful APIs",
        icon: <FaCode className="text-violet-600" />,
        level: 80,
      },
    ],
  },
  {
    title: "Database",
    description:
      "Designing and implementing database solutions for web applications",
    icon: <FaDatabase className="text-indigo-600" />,
    color: "from-indigo-400 to-violet-600",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-indigo-500" />,
        level: 85,
      },
      {
        name: "Mongoose",
        icon: <SiPostgresql className="text-violet-700" />,
        level: 80,
      },
      {
        name: "MongoDB Atlas",
        icon: <FaDatabase className="text-indigo-600" />,
        level: 75,
      },
      {
        name: "Database Design",
        icon: <FaDatabase className="text-violet-600" />,
        level: 78,
      },
    ],
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Implementing efficient algorithms and optimizing solutions for complex problems",
    icon: <FaBrain className="text-indigo-600" />,
    color: "from-indigo-400 to-violet-600",
    skills: [
      {
        name: "Problem Solving",
        icon: <FaBrain className="text-indigo-600" />,
        level: 90,
      },
      {
        name: "Algorithm Analysis",
        icon: <FaCode className="text-indigo-700" />,
        level: 85,
      },
      {
        name: "Data Structures",
        icon: <FaCode className="text-indigo-600" />,
        level: 88,
      },
      {
        name: "Competitive Coding",
        icon: <FaCode className="text-violet-600" />,
        level: 85,
      },
    ],
  },
  {
    title: "Additional Skills",
    description:
      "Other important skills and technologies in my development toolkit",
    icon: <FaBrain className="text-violet-600" />,
    color: "from-indigo-500 to-violet-600",
    skills: [
      {
        name: "Redux Toolkit",
        icon: <FaBrain className="text-violet-600" />,
        level: 80,
      },
      {
        name: "Git & GitHub",
        icon: <SiTensorflow className="text-indigo-500" />,
        level: 85,
      },
      {
        name: "Java",
        icon: <SiPytorch className="text-violet-500" />,
        level: 75,
      },
      {
        name: "Python",
        icon: <FaCode className="text-indigo-500" />,
        level: 70,
      },
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { theme } = useTheme();

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
      id="skills"
      className={`section relative overflow-hidden py-24 ${
        theme === "dark" ? "bg-gray-900" : ""
      }`}
    >
      {/* Background decoration */}
      <div
        className={`absolute -top-40 -left-40 w-96 h-96 rounded-full ${
          theme === "dark" ? "bg-indigo-600/5" : "bg-primary/5"
        }`}
      ></div>
      <div
        className={`absolute top-1/2 right-10 w-40 h-40 rounded-full ${
          theme === "dark" ? "bg-purple-600/10" : "bg-secondary/10"
        }`}
      ></div>
      <div
        className={`absolute bottom-20 left-1/4 w-24 h-24 rounded-full ${
          theme === "dark" ? "bg-pink-600/10" : "bg-accent/10"
        }`}
      ></div>

      <div className="container relative z-10">
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
                : "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary"
            }`}
          >
            Expertise
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
                  : "text-gradient"
              }`}
            >
              Skills
            </span>
          </h2>
          <div
            className={`w-24 h-1 mx-auto mt-6 ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600"
                : "bg-gradient-to-r from-primary to-accent"
            }`}
          ></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`card-hover p-8 rounded-xl ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "glass-effect"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${category.color} text-white text-3xl icon-glow relative overflow-hidden`}
              >
                <div className="icon-pulse">{category.icon}</div>
                <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <h3
                className={`text-2xl font-bold mb-3 font-heading ${
                  theme === "dark" ? "text-white" : "text-dark"
                }`}
              >
                {category.title}
              </h3>

              <p
                className={`mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {category.description}
              </p>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg relative icon-glow flex items-center justify-center p-1">
                          <div className="icon-pulse">{skill.icon}</div>
                        </span>
                        <span
                          className={theme === "dark" ? "text-gray-200" : ""}
                        >
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={
                          theme === "dark" ? "text-indigo-400" : "text-primary"
                        }
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`w-full h-2 rounded-full ${
                        theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          inView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{ duration: 1, delay: 0.3 }}
                        className={`h-full rounded-full bg-gradient-to-r ${
                          theme === "dark"
                            ? "from-indigo-500 to-purple-500"
                            : "from-primary to-secondary"
                        }`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
