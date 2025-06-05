import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import { FaCode, FaMedal, FaPuzzlePiece, FaLaptopCode } from "react-icons/fa";
import DSACounter from "./DSACounter";
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
      description:
        "Ranked in the top 26.1% globally on LeetCode",
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
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Background decoration */}
      <div
        className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${
          theme === "dark" ? "bg-indigo-600/5" : "bg-primary/5"
        }`}
      ></div>
      <div
        className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${
          theme === "dark" ? "bg-purple-600/5" : "bg-accent/5"
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
            Problem Solving
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold mt-4 font-heading ${
              theme === "dark" ? "text-white" : ""
            }`}
          >
            <span
              className={`${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text"
                  : "text-gradient"
              }`}
            >
              Coding
            </span>{" "}
            Journey
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
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* DSA Counter Section */}
          <div className="mb-16 max-w-3xl mx-auto">
            <h4
              className={`text-center text-xl font-bold mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              DSA Problems Solved on
              <span
                className={
                  theme === "dark"
                    ? "bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text ml-2"
                    : "text-gradient ml-2"
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
                    theme === "dark" ? "bg-gray-800" : "bg-white shadow-card"
                  } relative overflow-hidden`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 ${
                      theme === "dark"
                        ? `bg-${colorName}-900/20`
                        : `bg-${colorName}-100/70`
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
                            className={`p-2 rounded ${
                              theme === "dark"
                                ? `bg-${category.color}-900/30`
                                : `bg-${category.color}-100`
                            } text-center`}
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
                                theme === "dark"
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
                                >
                                  
                                </span>
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
              theme === "dark" ? "bg-gray-800" : "bg-white shadow-lg"
            } mb-10`}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              <span
                className={
                  theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                }
              >
                <FaMedal className="inline-block mr-2 mb-1" />
              </span>
              Coding Achievements
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {codingData.achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border ${
                    theme === "dark"
                      ? `border-${achievement.color}-800/30 bg-${achievement.color}-900/10`
                      : `border-${achievement.color}-100 bg-${achievement.color}-50/50`
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
          {/* <motion.div
            className={`p-6 rounded-xl ${
              theme === "dark"
                ? "bg-gradient-to-br from-indigo-900/20 to-purple-900/20"
                : "bg-gradient-to-br from-indigo-50 to-purple-50"
            } border ${
              theme === "dark" ? "border-indigo-800/30" : "border-indigo-100"
            }`}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <h3
              className={`text-2xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
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
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Coding;
