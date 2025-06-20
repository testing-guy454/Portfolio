import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import PlatformDetailsModal from "./PlatformDetailsModal";
import { FaMedal, FaTrophy, FaCode, FaFire } from "react-icons/fa";
import {
  SiCodechef,
  SiGeeksforgeeks,
  SiLeetcode,
  SiCodeforces,
} from "react-icons/si";
import { useState, useEffect } from "react";
import SectionContainer from "./SectionContainer";

// Enhanced coding data structure for the new design
const codingData = {
  platforms: [
    {
      id: "leetcode",
      name: "LeetCode",
      rating: "1550+",
      problemsSolved: "183",
      progress: "75%",
      icon: SiLeetcode,
      iconColor: "orange",
      url: "https://leetcode.com/",
      rank: "Top 26%",
      categories: [
        { name: "Easy", count: 86, color: "green" },
        { name: "Medium", count: 93, color: "yellow" },
        { name: "Hard", count: 4, color: "red" },
      ],
      contests: "Weekly Contests",
    },
    {
      id: "codechef",
      name: "CodeChef",
      rating: "1270+",
      problemsSolved: "25",
      progress: "60%",
      icon: SiCodechef,
      iconColor: "brown",
      url: "https://www.codechef.com/",
      rank: "2★ Coder (Division 3)",
      contests: "5+",
    },
    {
      id: "geeksforgeeks",
      name: "GeeksForGeeks",
      institutionRank: "#1455",
      problemsSolved: "70",
      progress: "75%",
      icon: SiGeeksforgeeks,
      iconColor: "green",
      url: "https://www.geeksforgeeks.org/",
      achievement: "GfG 160 - 160 Days of Problem Solving",
    },
    {
      id: "codeforces",
      name: "Codeforces",
      rating: "900+",
      problemsSolved: "10",
      progress: "40%",
      icon: SiCodeforces,
      iconColor: "blue",
      url: "https://codeforces.com/",
      rank: "Newbie",
      contests: "3+",
    },
  ],
  stats: {
    totalProblems: "288",
    activeDays: "180+",
    leetcodeRating: "1550+",
    leetcodeRank: "Top 26%",
    codechefRating: "1270+",
    codeforcesRating: "900+",
  },
  achievements: [
    {
      id: 1,
      title: "LeetCode Weekly Contest",
      description: "Ranked in the top 26.1% globally on LeetCode",
      color: "orange",
      icon: FaTrophy,
      badge: "Global Top 26%",
    },
    {
      id: 2,
      title: "CodeChef Starters",
      description: "Achieved Global Rank 1238 in CodeChef Starters 186",
      color: "brown",
      icon: FaMedal,
      badge: "Rank 1238",
    },
    {
      id: 3,
      title: "GfG 160 Challenge",
      description: "Completed 35+ days of GfG 160 with 40+ problems solved",
      color: "green",
      icon: FaFire,
      badge: "35+ Days",
    },
  ],
};

const Coding = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalCounter, setTotalCounter] = useState(0);

  // Calculate total problems
  const totalProblems = codingData.platforms.reduce(
    (acc, platform) => acc + parseInt(platform.problemsSolved),
    0
  );

  // Handle counter animation for total problems
  useEffect(() => {
    if (inView) {
      // Only run animation when component is in view
      const duration = 2000;
      const frameRate = 60;
      const framesCount = (duration / 1000) * frameRate;

      // Increment total counter
      let currentTotal = 0;
      const totalIncrement = totalProblems / framesCount;

      const totalTimer = setInterval(() => {
        currentTotal += totalIncrement;
        if (currentTotal >= totalProblems) {
          setTotalCounter(totalProblems);
          clearInterval(totalTimer);
        } else {
          setTotalCounter(Math.floor(currentTotal));
        }
      }, 1000 / frameRate);

      // Clean up interval on unmount
      return () => clearInterval(totalTimer);
    }
  }, [inView, totalProblems]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <SectionContainer
      id="coding"
      style={{
        scrollMarginTop: "100px",
        scrollBehavior: "smooth",
      }}
      isAlt
    >
      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          {/* Get to know label style matching About section */}
          <div className="flex justify-center mb-3">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                theme === "dark" ? "bg-indigo-900/30" : "bg-indigo-100/60"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span
                className={
                  theme === "dark" ? "text-indigo-400" : "text-indigo-700"
                }
              >
                Competitive Programming
              </span>
            </div>
          </div>

          <h2
            className={`text-4xl font-bold mb-3 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Coding{" "}
            <span
              className={
                theme === "dark" ? "text-indigo-400" : "text-indigo-600"
              }
            >
              Proficiency
            </span>
          </h2>

          <p
            className={`text-base max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            } leading-relaxed`}
          >
            Algorithmic problem-solving across multiple competitive programming
            platforms with focus on data structures, algorithms, and
            optimization
          </p>
        </motion.div>

        {/* Total Problems Counter - Horizontal Banner Design with Energy Motion Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
          whileInView={{
            scale: [0.97, 1],
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className={`relative ${
                theme === "dark"
                  ? "bg-slate-800/80 border border-gray-700"
                  : "bg-white border border-gray-100"
              } rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row`}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  theme === "dark"
                    ? "0 20px 25px -5px rgba(79, 70, 229, 0.1), 0 10px 10px -5px rgba(79, 70, 229, 0.04)"
                    : "0 20px 25px -5px rgba(99, 102, 241, 0.1), 0 10px 10px -5px rgba(99, 102, 241, 0.04)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Animated particles in background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                  className="absolute w-3 h-3 rounded-full bg-indigo-500/20 animate-ping"
                  style={{
                    top: "30%",
                    left: "40%",
                    animationDuration: "3s",
                    animationDelay: "0.5s",
                  }}
                ></div>
                <div
                  className="absolute w-2 h-2 rounded-full bg-purple-500/20 animate-ping"
                  style={{ top: "70%", left: "20%", animationDuration: "2.7s" }}
                ></div>
                <div
                  className="absolute w-2 h-2 rounded-full bg-indigo-500/20 animate-ping"
                  style={{
                    top: "20%",
                    right: "30%",
                    animationDuration: "4s",
                    animationDelay: "1s",
                  }}
                ></div>
                <div
                  className="absolute w-1 h-1 rounded-full bg-purple-500/20 animate-ping"
                  style={{
                    bottom: "20%",
                    right: "20%",
                    animationDuration: "5s",
                    animationDelay: "0.7s",
                  }}
                ></div>
              </div>

              {/* Left side decorative element */}
              <div className="absolute left-0 inset-y-0 w-1/3 overflow-hidden">
                <motion.div
                  className={`absolute inset-0 ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-indigo-900/30 to-transparent"
                      : "bg-gradient-to-r from-indigo-100/50 to-transparent"
                  }`}
                  animate={{
                    opacity: [0.6, 0.8, 0.6],
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                ></motion.div>
              </div>

              {/* Code icon */}
              <motion.div
                className="relative z-10 p-6 md:p-8 flex-shrink-0 flex justify-center sm:justify-start"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div
                  className={`h-16 w-16 md:h-20 md:w-20 ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-indigo-500 to-purple-600"
                      : "bg-gradient-to-br from-indigo-500 to-indigo-700"
                  } rounded-xl flex items-center justify-center shadow-md transform -rotate-3 light-tracking icon-badge`}
                  animate={{
                    boxShadow: [
                      "0 4px 6px -1px rgba(99, 102, 241, 0.3), 0 2px 4px -1px rgba(99, 102, 241, 0.2)",
                      "0 10px 15px -3px rgba(99, 102, 241, 0.4), 0 4px 6px -2px rgba(99, 102, 241, 0.2)",
                      "0 4px 6px -1px rgba(99, 102, 241, 0.3), 0 2px 4px -1px rgba(99, 102, 241, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaCode className="text-white text-2xl md:text-3xl" />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Counter text */}
              <div className="flex-1 py-6 sm:py-6 md:py-8 px-6 md:pr-8 flex flex-col justify-center items-center sm:items-start">
                <div className="flex flex-col sm:flex-row items-center sm:items-baseline flex-wrap">
                  <motion.h3
                    className={`text-4xl md:text-5xl font-bold mb-2 sm:mb-0 sm:mr-4 ${
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    }}
                  >
                    {totalCounter}
                  </motion.h3>
                  <motion.div
                    className="text-center sm:text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <p
                      className={`text-lg md:text-xl font-bold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Problems Solved
                    </p>
                    <p
                      className={`text-sm mt-1 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      across multiple competitive programming platforms
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Right side accent */}
              <motion.div
                className={`hidden lg:flex items-center pr-8 ${
                  theme === "dark" ? "text-indigo-400" : "text-indigo-500"
                }`}
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {codingData.platforms.map((platform, index) => {
            const IconComponent = platform.icon;

            return (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`relative rounded-xl p-5 ${
                  theme === "dark"
                    ? "bg-gray-800/70 border border-gray-700/50"
                    : "bg-white border border-gray-100"
                } shadow-md platform-card-hover transition-all duration-300 enhanced-card`}
              >
                <div className="flex items-start">
                  <div
                    onClick={() => handleOpenModal()}
                    className={`h-12 w-12 rounded-lg bg-gradient-to-br ${
                      theme === "dark"
                        ? "from-indigo-500 to-purple-600"
                        : "from-indigo-400 to-indigo-600"
                    } flex items-center justify-center shadow-md cursor-pointer hover:scale-105 transition-transform light-tracking icon-badge mt-0.5`}
                  >
                    <IconComponent className="text-white text-lg" />
                  </div>

                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-center">
                      <h3
                        className={`font-bold text-lg ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {platform.name}
                      </h3>

                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xs px-2 py-1 rounded-full ${
                          theme === "dark"
                            ? "bg-indigo-900/30 text-indigo-400 hover:bg-indigo-900/40"
                            : "bg-indigo-100/60 text-indigo-700 hover:bg-indigo-100"
                        } transition-colors duration-200 skill-badge`}
                      >
                        Visit
                      </a>
                    </div>

                    <div className="flex items-baseline mt-2">
                      <span
                        className={`text-3xl font-bold ${
                          theme === "dark"
                            ? "text-indigo-400"
                            : "text-indigo-600"
                        } count-animate`}
                      >
                        {platform.problemsSolved}
                      </span>
                      <span
                        className={`ml-2 text-sm font-medium ${
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Problems Solved
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div
                      className={`w-full h-1.5 ${
                        theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                      } rounded-full mt-3 overflow-hidden`}
                    >
                      <div
                        className={`h-full rounded-full ${
                          theme === "dark" ? "bg-indigo-500" : "bg-indigo-600"
                        } animate-progress`}
                        style={{ width: platform.progress }}
                      ></div>
                    </div>

                    {/* Additional stats */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {platform.rating && (
                        <div
                          className={`px-3 py-1 rounded-full ${
                            theme === "dark"
                              ? "bg-indigo-900/30 text-indigo-400"
                              : "bg-indigo-50 text-indigo-700"
                          } text-xs font-medium flex items-center transition-all duration-300 floating-badge`}
                        >
                          <FaTrophy
                            className={`mr-1.5 ${
                              theme === "dark"
                                ? "text-indigo-400"
                                : "text-indigo-600"
                            }`}
                            size={12}
                          />
                          <span>Rating: {platform.rating}</span>
                        </div>
                      )}

                      {platform.rank && (
                        <div
                          className={`px-3 py-1 rounded-full ${
                            theme === "dark"
                              ? "bg-indigo-900/30 text-indigo-400"
                              : "bg-indigo-50 text-indigo-700"
                          } text-xs font-medium flex items-center transition-all duration-300 floating-badge`}
                          style={{ animationDelay: "0.3s" }}
                        >
                          <FaMedal
                            className={`mr-1.5 ${
                              theme === "dark"
                                ? "text-indigo-400"
                                : "text-indigo-600"
                            }`}
                            size={12}
                          />
                          <span>{platform.rank}</span>
                        </div>
                      )}

                      {platform.institutionRank && (
                        <div
                          className={`px-3 py-1 rounded-full ${
                            theme === "dark"
                              ? "bg-indigo-900/30 text-indigo-400"
                              : "bg-indigo-50 text-indigo-700"
                          } text-xs font-medium flex items-center transition-all duration-300 floating-badge`}
                          style={{ animationDelay: "0.6s" }}
                        >
                          <FaFire
                            className={`mr-1.5 ${
                              theme === "dark"
                                ? "text-indigo-400"
                                : "text-indigo-600"
                            }`}
                            size={12}
                          />
                          <span>Rank: {platform.institutionRank}</span>
                        </div>
                      )}
                    </div>

                    {/* Categories - only for LeetCode */}
                    {platform.categories && (
                      <div className="mt-4 grid grid-cols-3 gap-3">
                        {platform.categories.map((category, catIdx) => (
                          <div
                            key={catIdx}
                            className={`text-center p-2 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 ${
                              theme === "dark"
                                ? "bg-indigo-900/30 text-indigo-300 border border-indigo-800/30"
                                : "bg-indigo-50 text-indigo-700 border border-indigo-100"
                            } stats-item`}
                          >
                            <div className="text-xs font-medium">
                              {category.name}
                            </div>
                            <div
                              className={`text-base font-bold count-animate ${
                                theme === "dark"
                                  ? "text-white"
                                  : "text-gray-900"
                              }`}
                            >
                              {category.count}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Section - Simple Grid Cards */}
        <div className="mt-10 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-md flex items-center justify-center ${
                    theme === "dark" ? "bg-indigo-600" : "bg-indigo-500"
                  } mr-3`}
                >
                  <FaTrophy className="text-white text-sm" />
                </div>
                <h3
                  className={`text-lg font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Notable{" "}
                  <span
                    className={
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }
                  >
                    Achievements
                  </span>
                </h3>
              </div>

              <div
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  theme === "dark"
                    ? "bg-indigo-900/30 text-indigo-400"
                    : "bg-indigo-100/60 text-indigo-700"
                }`}
              >
                Competitive Coding
              </div>
            </div>

            {/* Achievement Cards - Simple Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {codingData.achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;

                return (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className={`rounded-lg p-4 ${
                      theme === "dark"
                        ? "bg-gray-800/70 border border-gray-700/50"
                        : "bg-white border border-gray-100"
                    } hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                          theme === "dark"
                            ? "bg-gradient-to-br from-indigo-500 to-purple-600"
                            : "bg-gradient-to-br from-indigo-500 to-indigo-700"
                        } shadow-sm icon-badge`}
                      >
                        <IconComponent className="text-white text-sm" />
                      </div>
                      <div
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          theme === "dark"
                            ? "bg-indigo-900/30 text-indigo-400"
                            : "bg-indigo-100 text-indigo-700"
                        } floating-badge`}
                      >
                        {achievement.badge}
                      </div>
                    </div>

                    <h4
                      className={`text-sm font-bold mb-1 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {achievement.title}
                    </h4>

                    <p
                      className={`text-xs ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {achievement.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Platform Details Modal */}
      <PlatformDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        platforms={codingData.platforms.map((p) => ({
          name: p.name,
          rating: p.rating,
          problemsSolved: p.problemsSolved,
          progress: p.progress,
          icon: p.icon,
          iconColor: p.iconColor,
          categories: p.categories,
          rank: p.rank,
          contests: p.contests,
          achievement: p.achievement,
          institutionRank: p.institutionRank,
        }))}
      />
    </SectionContainer>
  );
};

export default Coding;
