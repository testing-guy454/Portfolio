import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import { FaCode, FaMedal, FaPuzzlePiece, FaLaptopCode } from "react-icons/fa";
import DSACounter from "./DSACounter";

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
            {/* LeetCode Card */}
            <motion.div
              className={`p-6 rounded-xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white shadow-card"
              } relative overflow-hidden`}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`absolute top-0 right-0 w-24 h-24 ${
                  theme === "dark" ? "bg-indigo-900/20" : "bg-indigo-100/70"
                } rounded-bl-full z-0`}
              ></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-lg ${
                      theme === "dark" ? "bg-indigo-900/30" : "bg-indigo-100"
                    }`}
                  >
                    <FaCode
                      className={
                        theme === "dark" ? "text-indigo-400" : "text-indigo-600"
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
                      LeetCode
                    </h3>
                    <p
                      className={`${
                        theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    >
                      Rating: 1550+
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
                        theme === "dark" ? "text-indigo-300" : "text-indigo-600"
                      }`}
                    >
                      120+
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        theme === "dark" ? "bg-indigo-500" : "bg-indigo-600"
                      }`}
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div
                    className={`p-2 rounded ${
                      theme === "dark" ? "bg-green-900/30" : "bg-green-100"
                    } text-center`}
                  >
                    <p
                      className={`text-xs ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Easy
                    </p>
                    <p
                      className={`font-medium ${
                        theme === "dark" ? "text-green-400" : "text-green-600"
                      }`}
                    >
                      65
                    </p>
                  </div>
                  <div
                    className={`p-2 rounded ${
                      theme === "dark" ? "bg-yellow-900/30" : "bg-yellow-100"
                    } text-center`}
                  >
                    <p
                      className={`text-xs ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Medium
                    </p>
                    <p
                      className={`font-medium ${
                        theme === "dark" ? "text-yellow-400" : "text-yellow-600"
                      }`}
                    >
                      45
                    </p>
                  </div>
                  <div
                    className={`p-2 rounded ${
                      theme === "dark" ? "bg-red-900/30" : "bg-red-100"
                    } text-center`}
                  >
                    <p
                      className={`text-xs ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Hard
                    </p>
                    <p
                      className={`font-medium ${
                        theme === "dark" ? "text-red-400" : "text-red-600"
                      }`}
                    >
                      10
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CodeChef Card */}
            <motion.div
              className={`p-6 rounded-xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white shadow-card"
              } relative overflow-hidden`}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`absolute top-0 right-0 w-24 h-24 ${
                  theme === "dark" ? "bg-purple-900/20" : "bg-purple-100/70"
                } rounded-bl-full z-0`}
              ></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-lg ${
                      theme === "dark" ? "bg-purple-900/30" : "bg-purple-100"
                    }`}
                  >
                    <FaPuzzlePiece
                      className={
                        theme === "dark" ? "text-purple-400" : "text-purple-600"
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
                      CodeChef
                    </h3>
                    <p
                      className={`${
                        theme === "dark" ? "text-purple-400" : "text-purple-600"
                      }`}
                    >
                      Rating: 1270+
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
                        theme === "dark" ? "text-purple-300" : "text-purple-600"
                      }`}
                    >
                      50+
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        theme === "dark" ? "bg-purple-500" : "bg-purple-600"
                      }`}
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>
                <div className="mt-4">
                  <div
                    className={`p-2 rounded ${
                      theme === "dark" ? "bg-purple-900/20" : "bg-purple-100"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span
                        className={
                          theme === "dark"
                            ? "text-purple-400"
                            : "text-purple-600"
                        }
                      >
                        3★
                      </span>{" "}
                      Coder (Division 3)
                    </p>
                  </div>
                  <p
                    className={`mt-2 text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Participated in 5+ contests
                  </p>
                </div>
              </div>
            </motion.div>

            {/* GeeksForGeeks Card */}
            <motion.div
              className={`p-6 rounded-xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white shadow-card"
              } relative overflow-hidden`}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`absolute top-0 right-0 w-24 h-24 ${
                  theme === "dark" ? "bg-green-900/20" : "bg-green-100/70"
                } rounded-bl-full z-0`}
              ></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-lg ${
                      theme === "dark" ? "bg-green-900/30" : "bg-green-100"
                    }`}
                  >
                    <FaLaptopCode
                      className={
                        theme === "dark" ? "text-green-400" : "text-green-600"
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
                      GeeksForGeeks
                    </h3>
                    <p
                      className={`${
                        theme === "dark" ? "text-green-400" : "text-green-600"
                      }`}
                    >
                      Institution Rank: #10
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
                        theme === "dark" ? "text-green-300" : "text-green-600"
                      }`}
                    >
                      45+
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        theme === "dark" ? "bg-green-500" : "bg-green-600"
                      }`}
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                </div>
                <div className="mt-4">
                  <div
                    className={`p-2 rounded ${
                      theme === "dark" ? "bg-green-900/20" : "bg-green-100"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Completed DSA Self-Paced Course
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
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
              {/* Achievement 1 */}
              <div
                className={`p-4 rounded-lg border ${
                  theme === "dark"
                    ? "border-indigo-800/30 bg-indigo-900/10"
                    : "border-indigo-100 bg-indigo-50/50"
                }`}
              >
                <div className="flex items-start">
                  <div
                    className={`p-2 rounded-full ${
                      theme === "dark" ? "bg-indigo-900/50" : "bg-indigo-100"
                    } mt-1 mr-4`}
                  >
                    <span
                      className={`text-lg ${
                        theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    >
                      1
                    </span>
                  </div>
                  <div>
                    <h4
                      className={`text-lg font-semibold ${
                        theme === "dark" ? "text-indigo-300" : "text-indigo-700"
                      }`}
                    >
                      LeetCode Weekly Contest
                    </h4>
                    <p
                      className={`mt-1 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Ranked in the top 10% globally in LeetCode Weekly Contest
                      345
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievement 2 */}
              <div
                className={`p-4 rounded-lg border ${
                  theme === "dark"
                    ? "border-purple-800/30 bg-purple-900/10"
                    : "border-purple-100 bg-purple-50/50"
                }`}
              >
                <div className="flex items-start">
                  <div
                    className={`p-2 rounded-full ${
                      theme === "dark" ? "bg-purple-900/50" : "bg-purple-100"
                    } mt-1 mr-4`}
                  >
                    <span
                      className={`text-lg ${
                        theme === "dark" ? "text-purple-400" : "text-purple-600"
                      }`}
                    >
                      2
                    </span>
                  </div>
                  <div>
                    <h4
                      className={`text-lg font-semibold ${
                        theme === "dark" ? "text-purple-300" : "text-purple-700"
                      }`}
                    >
                      College Coding Competition
                    </h4>
                    <p
                      className={`mt-1 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Secured 2nd position in NIT Patna's annual coding
                      competition
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievement 3 */}
              <div
                className={`p-4 rounded-lg border ${
                  theme === "dark"
                    ? "border-indigo-800/30 bg-indigo-900/10"
                    : "border-indigo-100 bg-indigo-50/50"
                }`}
              >
                <div className="flex items-start">
                  <div
                    className={`p-2 rounded-full ${
                      theme === "dark" ? "bg-indigo-900/50" : "bg-indigo-100"
                    } mt-1 mr-4`}
                  >
                    <span
                      className={`text-lg ${
                        theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    >
                      3
                    </span>
                  </div>
                  <div>
                    <h4
                      className={`text-lg font-semibold ${
                        theme === "dark" ? "text-indigo-300" : "text-indigo-700"
                      }`}
                    >
                      CodeChef Starters
                    </h4>
                    <p
                      className={`mt-1 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Achieved Global Rank 500 in CodeChef Starters 42
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievement 4 */}
              <div
                className={`p-4 rounded-lg border ${
                  theme === "dark"
                    ? "border-purple-800/30 bg-purple-900/10"
                    : "border-purple-100 bg-purple-50/50"
                }`}
              >
                <div className="flex items-start">
                  <div
                    className={`p-2 rounded-full ${
                      theme === "dark" ? "bg-purple-900/50" : "bg-purple-100"
                    } mt-1 mr-4`}
                  >
                    <span
                      className={`text-lg ${
                        theme === "dark" ? "text-purple-400" : "text-purple-600"
                      }`}
                    >
                      4
                    </span>
                  </div>
                  <div>
                    <h4
                      className={`text-lg font-semibold ${
                        theme === "dark" ? "text-purple-300" : "text-purple-700"
                      }`}
                    >
                      DSA Learning Series
                    </h4>
                    <p
                      className={`mt-1 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Completed 30-day DSA challenge with 100+ problems solved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Focus */}
          <motion.div
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
              <li className="flex items-start gap-3">
                <span
                  className={`min-w-5 mt-1 ${
                    theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  •
                </span>
                <span
                  className={
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }
                >
                  Mastering advanced data structures like Segment Trees and
                  Fenwick Trees
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className={`min-w-5 mt-1 ${
                    theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  •
                </span>
                <span
                  className={
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }
                >
                  Improving problem solving skills with dynamic programming
                  challenges
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className={`min-w-5 mt-1 ${
                    theme === "dark" ? "text-purple-400" : "text-purple-600"
                  }`}
                >
                  •
                </span>
                <span
                  className={
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }
                >
                  Participating in weekly coding contests to improve competitive
                  programming skills
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className={`min-w-5 mt-1 ${
                    theme === "dark" ? "text-purple-400" : "text-purple-600"
                  }`}
                >
                  •
                </span>
                <span
                  className={
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }
                >
                  Exploring algorithmic problems in graph theory and network
                  flow
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Coding;
