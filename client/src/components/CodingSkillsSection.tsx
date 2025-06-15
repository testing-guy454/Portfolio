import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import DSACounter from "./DSAStatsCounter";
import { FaMedal } from "react-icons/fa";
import { SiCodechef, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

// Coding data centralized at the top for easier editing
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
      title: "CodeChef Starters",
      description: "Achieved Global Rank 1238 in CodeChef Starters 186",
      color: "indigo",
    },
    {
      id: 3,
      title: "GfG 160 - 160 Days of Problem Solving",
      description: "Completed 35+ days of GfG 160 with 40+ problems solved",
      color: "purple",
    },
  ],
  focusAreas: [
    {
      text: "Mastering advanced data structures like Segment Trees and Fenwick Trees",
      color: "indigo",
    },
    {
      text: "Improving problem solving skills with dynamic programming challenges",
      color: "indigo",
    },
    {
      text: "Participating in weekly coding contests to improve competitive programming skills",
      color: "purple",
    },
    {
      text: "Exploring algorithmic problems in graph theory and network flow",
      color: "purple",
    },
  ],
};

const Coding = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useTheme();

  return (
    <section
      id="coding"
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
            Coding{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p
            className={`mx-auto max-w-2xl text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Problem-solving skills showcased through competitive programming and
            practice
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* DSA Counter Section */}
          <div className="mb-16 max-w-3xl mx-auto">
            <h4 className="text-center text-xl font-bold mb-6">
              <span
                className={
                  theme === "dark" ? "text-indigo-300" : "text-indigo-700"
                }
              >
                DSA Problems Solved on
              </span>
              <span
                className={
                  theme === "dark"
                    ? "bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 text-transparent bg-clip-text ml-2"
                    : "bg-gradient-to-r from-blue-600 via-purple-500 to-teal-500 text-transparent bg-clip-text ml-2"
                }
              >
                Different Platforms
              </span>
            </h4>
            <DSACounter />
          </div>

          {/* Platform Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Platform Cards */}
            {codingData.platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              const colorName = platform.iconColor;
              return (
                <motion.div
                  key={index}
                  className={`p-6 rounded-xl ${
                    theme === "dark"
                      ? "border border-gray-700 bg-gray-800/80"
                      : "border border-gray-200 bg-white/90"
                  } relative overflow-hidden backdrop-blur-sm shadow-lg`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 ${
                      theme === "dark"
                        ? `bg-${colorName}-900/30`
                        : `bg-${colorName}-100/80`
                    } rounded-bl-full z-0`}
                  ></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div
                        className={`p-3 rounded-lg ${
                          theme === "dark"
                            ? `bg-${colorName}-900/30`
                            : `bg-${colorName}-100`
                        }`}
                      >
                        <IconComponent
                          className={
                            theme === "dark"
                              ? `text-${colorName}-400`
                              : `text-${colorName}-600`
                          }
                          size={24}
                        />
                      </div>
                      <div className="ml-4">
                        <h3
                          className={`text-xl font-bold ${
                            theme === "dark" ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {platform.name}
                        </h3>
                        <p
                          className={`${
                            theme === "dark"
                              ? `text-${colorName}-400`
                              : `text-${colorName}-600`
                          }`}
                        >
                          {platform.institutionRank
                            ? `Institution Rank: ${platform.institutionRank}`
                            : `Rating: ${platform.rating}`}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span
                          className={
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }
                        >
                          Problems Solved
                        </span>
                        <span
                          className={`font-semibold ${
                            theme === "dark"
                              ? `text-${colorName}-300`
                              : `text-${colorName}-600`
                          }`}
                        >
                          {platform.problemsSolved}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            theme === "dark"
                              ? `bg-${colorName}-500`
                              : `bg-${colorName}-600`
                          }`}
                          style={{ width: platform.progress }}
                        ></div>
                      </div>
                    </div>
                    {platform.categories ? (
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        {platform.categories.map((category, idx) => (
                          <div
                            key={idx}
                            className={`p-2 rounded text-center ${
                              category.color === "red"
                                ? theme === "dark"
                                  ? "bg-red-900/30"
                                  : "bg-red-100"
                                : theme === "dark"
                                ? `bg-${category.color}-900/30`
                                : `bg-${category.color}-100`
                            }`}
                          >
                            <p
                              className={`text-xs ${
                                theme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-600"
                              }`}
                            >
                              {category.name}
                            </p>
                            <p
                              className={`font-medium ${
                                category.color === "red"
                                  ? theme === "dark"
                                    ? "text-red-400"
                                    : "text-red-600"
                                  : theme === "dark"
                                  ? `text-${category.color}-400`
                                  : `text-${category.color}-600`
                              }`}
                            >
                              {category.count}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="mt-4">
                        {platform.rank && (
                          <div
                            className={`p-2 rounded ${
                              theme === "dark"
                                ? `bg-${colorName}-900/20`
                                : `bg-${colorName}-100`
                            }`}
                          >
                            <p
                              className={`text-sm ${
                                theme === "dark"
                                  ? "text-gray-300"
                                  : "text-gray-700"
                              }`}
                            >
                              {colorName === "purple" && (
                                <span
                                  className={
                                    theme === "dark"
                                      ? `text-${colorName}-400`
                                      : `text-${colorName}-600`
                                  }
                                ></span>
                              )}
                              {platform.rank}
                            </p>
                          </div>
                        )}
                        {platform.contests && (
                          <p
                            className={`mt-2 text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            Participated in {platform.contests} contests
                          </p>
                        )}
                        {platform.achievement && (
                          <div
                            className={`p-2 rounded ${
                              theme === "dark"
                                ? `bg-${colorName}-900/20`
                                : `bg-${colorName}-100`
                            }`}
                          >
                            <p
                              className={`text-sm ${
                                theme === "dark"
                                  ? "text-gray-300"
                                  : "text-gray-700"
                              }`}
                            >
                              {platform.achievement}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Coding Achievements */}
          <div
            className={`p-6 rounded-xl ${
              theme === "dark"
                ? "bg-gray-800/80 border border-gray-700"
                : "bg-white/90 border border-gray-200 shadow-xl"
            } mb-10 backdrop-blur-sm`}
          >
            <h3
              className={`text-2xl font-bold mb-6 flex items-center ${
                theme === "dark" ? "text-indigo-300" : "text-indigo-600"
              }`}
            >
              <FaMedal className="h-6 w-6 mr-2" />
              <span>Coding Achievements</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {codingData.achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg ${
                    theme === "dark"
                      ? `border border-${achievement.color}-800/30 bg-${achievement.color}-900/10`
                      : `border border-${achievement.color}-200 bg-${achievement.color}-50/50 shadow-md`
                  }`}
                >
                  <div className="flex items-start">
                    <div
                      className={`p-2 rounded-full ${
                        theme === "dark"
                          ? `bg-${achievement.color}-900/50`
                          : `bg-${achievement.color}-100`
                      } mt-1 mr-4`}
                    >
                      <span
                        className={`text-lg ${
                          theme === "dark"
                            ? `text-${achievement.color}-400`
                            : `text-${achievement.color}-600`
                        }`}
                      >
                        {achievement.id}
                      </span>
                    </div>
                    <div>
                      <h4
                        className={`text-lg font-semibold ${
                          theme === "dark"
                            ? `text-${achievement.color}-300`
                            : `text-${achievement.color}-700`
                        }`}
                      >
                        {achievement.title}
                      </h4>
                      <p
                        className={`mt-1 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Focus */}
          <motion.div
            className={`p-6 rounded-xl ${
              theme === "dark"
                ? "bg-gray-800/80 border border-gray-700"
                : "bg-white/90 border border-gray-200 shadow-xl"
            } backdrop-blur-sm`}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <h3
              className={`text-2xl font-bold mb-4 flex items-center ${
                theme === "dark" ? "text-teal-300" : "text-teal-600"
              }`}
            >
              <span className="mr-2">🎯</span>
              Current Focus Areas
            </h3>
            <ul className="space-y-3">
              {codingData.focusAreas.map((focus, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span
                    className={`min-w-5 mt-1 ${
                      theme === "dark"
                        ? `text-${focus.color}-400`
                        : `text-${focus.color}-600`
                    }`}
                  >
                    •
                  </span>
                  <span
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }
                  >
                    {focus.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Coding;
