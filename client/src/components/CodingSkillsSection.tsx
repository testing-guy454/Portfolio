import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import { FaCode, FaMedal, FaTrophy, FaFire } from "react-icons/fa";
import { useState, useEffect } from "react";
import SectionContainer from "./SectionContainer";
import codingData from "../data/codingPlatfrom.ts";
import { useCodingPlatformData } from "../hooks/useCodingPlatformData";

const Coding = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useTheme();
  const [totalCounter, setTotalCounter] = useState(0);
  const [codingPlatformData, setCodingPlatformData] = useState(codingData);

  // Use unified hook that orchestrates all individual platform hooks
  useCodingPlatformData(codingData, setCodingPlatformData);

  // Consolidated coding platform data

  // Calculate total problems from all platforms
  const totalProblems = Object.values(codingPlatformData).reduce(
    (acc, platform) => acc + platform.problemsSolved.total,
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full relative overflow-hidden"
              style={{
                background:
                  theme === "dark"
                    ? "linear-gradient(90deg, rgba(79, 70, 229, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)"
                    : "linear-gradient(90deg, rgba(224, 231, 255, 0.8) 0%, rgba(199, 210, 254, 0.8) 100%)",
                border:
                  theme === "dark"
                    ? "1px solid rgba(139, 92, 246, 0.3)"
                    : "1px solid rgba(199, 210, 254, 0.5)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{
                  background:
                    theme === "dark"
                      ? "linear-gradient(90deg, rgb(129, 140, 248), rgb(167, 139, 250))"
                      : "linear-gradient(90deg, rgb(79, 70, 229), rgb(124, 58, 237))",
                  boxShadow:
                    theme === "dark"
                      ? "0 0 10px rgba(139, 92, 246, 0.6)"
                      : "0 0 5px rgba(79, 70, 229, 0.4)",
                }}
              ></span>
              <span
                style={{
                  color:
                    theme === "dark"
                      ? "rgb(167, 139, 250)"
                      : "rgb(79, 70, 229)",
                  fontWeight: 600,
                }}
              >
                Competitive Programming
              </span>
            </div>
          </div>

          <h2
            className="text-4xl font-bold mb-3 relative inline-block"
            style={{
              background:
                theme === "dark"
                  ? "linear-gradient(90deg, rgb(129, 140, 248), rgb(167, 139, 250), rgb(236, 72, 153))"
                  : "linear-gradient(90deg, rgb(79, 70, 229), rgb(124, 58, 237), rgb(219, 39, 119))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
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

        {/* Total Problems Counter - Horizontal Banner Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto">
            <div
              className={`relative ${
                theme === "dark"
                  ? "bg-slate-800/80 border border-gray-700"
                  : "bg-white border border-gray-100"
              } rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row counter-effect`}
            >
              {/* Left side accent */}
              <div className="absolute left-0 inset-y-0 w-1/3 overflow-hidden">
                <div
                  className={`absolute inset-0 ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-indigo-600/20 via-purple-600/10 to-transparent"
                      : "bg-gradient-to-r from-indigo-100/60 via-purple-100/30 to-transparent"
                  } blur-xl transform scale-110`}
                ></div>
              </div>

              {/* Icon section */}
              <div className="relative z-10 p-6 md:p-8 flex-shrink-0 flex justify-center sm:justify-start">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-lg ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-indigo-600 to-purple-700"
                      : "bg-gradient-to-br from-indigo-500 to-purple-600"
                  } transform hover:scale-105 transition-transform pulse-animate`}
                >
                  <FaCode className="text-white text-2xl md:text-3xl" />
                </div>
              </div>

              {/* Content section */}
              <div className="flex-1 py-6 sm:py-6 md:py-8 px-6 md:pr-8 flex flex-col justify-center items-center sm:items-start">
                <div className="flex flex-col sm:flex-row items-center sm:items-baseline flex-wrap">
                  <span
                    className={`text-4xl md:text-5xl font-bold mr-3 mb-2 sm:mb-0 count-animate ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {totalCounter}
                  </span>
                  <div className="text-center sm:text-left">
                    <h3
                      className={`text-lg md:text-xl font-bold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Total Problems Solved
                    </h3>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Across all competitive programming platforms
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side accent */}
              <div
                className={`hidden lg:flex items-center pr-8 ${
                  theme === "dark"
                    ? "text-indigo-400 pulse-animate"
                    : "text-indigo-500 pulse-animate"
                }`}
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
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2,17 12,22 22,17"></polyline>
                  <polyline points="2,12 12,17 22,12"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {Object.entries(codingPlatformData).map(
            ([platformKey, platform], index) => {
              const IconComponent = platform.icon;
              return (
                <motion.div
                  key={platformKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className={`relative rounded-xl p-5 ${
                    theme === "dark"
                      ? "border border-gray-700/50"
                      : "border border-gray-200"
                  } shadow-md platform-card-hover transition-all duration-300 enhanced-card overflow-hidden`}
                  style={{
                    position: "relative",
                    background:
                      theme === "dark" ? "rgba(17, 24, 39, 0.8)" : "#ffffff",
                    boxShadow:
                      theme === "dark"
                        ? `0 0 20px rgba(0, 0, 0, 0.2), inset 0 0 60px ${platform.iconColor}15`
                        : `0 10px 25px -5px rgba(0, 0, 0, 0.05), inset 0 0 60px ${platform.iconColor}09`,
                  }}
                >
                  {/* Decorative gradients */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="absolute -inset-1 opacity-20"
                      style={{
                        background: `radial-gradient(circle at top right, ${platform.iconColor}15 0%, transparent 70%)`,
                        filter: "blur(20px)",
                      }}
                    ></div>
                    <div
                      className="absolute right-0 bottom-0 w-24 h-24 opacity-5 rounded-full transform translate-x-1/4 translate-y-1/4"
                      style={{
                        background: platform.iconColor,
                        filter: "blur(25px)",
                      }}
                    ></div>
                  </div>

                  <div className="flex items-start relative z-10">
                    <div
                      className={`h-12 w-12 rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform light-tracking icon-badge mt-0.5`}
                      style={{
                        background:
                          theme === "dark"
                            ? `linear-gradient(135deg, ${platform.iconColor}99, ${platform.iconColor}CC)`
                            : `linear-gradient(135deg, ${platform.iconColor}88, ${platform.iconColor}BB)`,
                        boxShadow:
                          theme === "dark"
                            ? `0 0 8px ${platform.iconColor}33`
                            : `0 4px 6px -1px ${platform.iconColor}22`,
                      }}
                    >
                      <IconComponent
                        className="text-white text-lg"
                        style={{
                          filter: "drop-shadow(0px 1px 1px rgba(0,0,0,0.2))",
                        }}
                      />
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
                          className="text-3xl font-bold count-animate"
                          style={{
                            color:
                              theme === "dark"
                                ? `${platform.iconColor}CC`
                                : `${platform.iconColor}99`,
                            opacity: 0.85,
                          }}
                        >
                          {platform.problemsSolved.total}
                        </span>
                        <span
                          className={`ml-2 text-sm font-medium ${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          Problems Solved
                        </span>
                      </div>

                      {/* Horizontal divider line */}
                      <div className="mt-4 mb-4">
                        <div
                          className="h-px w-full"
                          style={{
                            background:
                              theme === "dark"
                                ? `linear-gradient(to right, ${platform.iconColor}40, ${platform.iconColor}20, transparent)`
                                : `linear-gradient(to right, ${platform.iconColor}30, ${platform.iconColor}10, transparent)`,
                          }}
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
                            <span>
                              Rating: {platform.rating}
                              {platformKey === "codechef" ||
                              platformKey === "codeforces"
                                ? "+"
                                : ""}
                            </span>
                          </div>
                        )}

                        <div
                          className={`px-3 py-1 rounded-full ${
                            theme === "dark"
                              ? "bg-indigo-900/30 text-indigo-400"
                              : "bg-indigo-50 text-indigo-700"
                          } text-xs font-medium flex items-center transition-all duration-300 floating-badge`}
                          style={{ animationDelay: "0.3s" }}
                        >
                          {platformKey === "geeksforgeeks" ? (
                            <FaFire
                              className={`mr-1.5 ${
                                theme === "dark"
                                  ? "text-indigo-400"
                                  : "text-indigo-600"
                              }`}
                              size={12}
                            />
                          ) : (
                            <FaMedal
                              className={`mr-1.5 ${
                                theme === "dark"
                                  ? "text-indigo-400"
                                  : "text-indigo-600"
                              }`}
                              size={12}
                            />
                          )}
                          <span>
                            {platformKey === "geeksforgeeks"
                              ? `Rank: ${platform.rank}`
                              : platform.rank}
                          </span>
                        </div>
                      </div>

                      {/* Problem difficulty categories */}
                      <div className="mt-4 grid grid-cols-3 gap-3">
                        <div
                          className={`text-center p-2 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 ${
                            theme === "dark"
                              ? "bg-green-900/30 text-green-300 border border-green-800/30"
                              : "bg-green-50 text-green-700 border border-green-100"
                          } stats-item`}
                        >
                          <div className="text-xs font-medium">Easy</div>
                          <div
                            className={`text-base font-bold count-animate ${
                              theme === "dark"
                                ? "text-green-300"
                                : "text-green-700"
                            }`}
                          >
                            {platform.problemsSolved.easy}
                          </div>
                        </div>
                        <div
                          className={`text-center p-2 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 ${
                            theme === "dark"
                              ? "bg-yellow-900/30 text-yellow-300 border border-yellow-800/30"
                              : "bg-yellow-50 text-yellow-700 border border-yellow-100"
                          } stats-item`}
                        >
                          <div className="text-xs font-medium">Medium</div>
                          <div
                            className={`text-base font-bold count-animate ${
                              theme === "dark"
                                ? "text-yellow-300"
                                : "text-yellow-700"
                            }`}
                          >
                            {platform.problemsSolved.medium}
                          </div>
                        </div>
                        <div
                          className={`text-center p-2 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 ${
                            theme === "dark"
                              ? "bg-red-900/30 text-red-300 border border-red-800/30"
                              : "bg-red-50 text-red-700 border border-red-100"
                          } stats-item`}
                        >
                          <div className="text-xs font-medium">Hard</div>
                          <div
                            className={`text-base font-bold count-animate ${
                              theme === "dark" ? "text-red-300" : "text-red-700"
                            }`}
                          >
                            {platform.problemsSolved.hard}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievement Line */}
                  <div className="mt-4">
                    <div
                      className="py-3 px-4 rounded-md text-center"
                      style={{
                        background:
                          theme === "dark"
                            ? `linear-gradient(to right, ${platform.iconColor}33, rgba(31, 41, 55, 0.8))`
                            : `linear-gradient(to right, ${platform.iconColor}12, rgba(249, 250, 251, 0.9))`,
                        borderLeft: `3px solid ${platform.iconColor}`,
                      }}
                    >
                      <p
                        className="text-sm"
                        style={{
                          color:
                            theme === "dark"
                              ? `${platform.iconColor}DD`
                              : platform.iconColor,
                        }}
                      >
                        {platform.leetcodeAchievement}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            }
          )}
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
              {/* LeetCode Weekly Contest Achievement */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.7 }}
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
                    <FaTrophy className="text-white text-sm" />
                  </div>
                  <div
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      theme === "dark"
                        ? "bg-indigo-900/30 text-indigo-400"
                        : "bg-indigo-100 text-indigo-700"
                    } floating-badge`}
                  >
                    Global Top 27.7%
                  </div>
                </div>

                <h4
                  className={`text-sm font-bold mb-1 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  LeetCode Weekly Contest
                </h4>

                <p
                  className={`text-xs ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Ranked in the top 27.7% globally on LeetCode with 9 contests
                  attended
                </p>
              </motion.div>

              {/* LeetCode Problem Solver Achievement */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.8 }}
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
                    <FaFire className="text-white text-sm" />
                  </div>
                  <div
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      theme === "dark"
                        ? "bg-indigo-900/30 text-indigo-400"
                        : "bg-indigo-100 text-indigo-700"
                    } floating-badge`}
                  >
                    228 Problems
                  </div>
                </div>

                <h4
                  className={`text-sm font-bold mb-1 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  LeetCode Problem Solver
                </h4>

                <p
                  className={`text-xs ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Solved 228 problems with a current streak of 3 days and max
                  streak of 18 days
                </p>
              </motion.div>

              {/* CodeChef Starters Achievement */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.9 }}
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
                    <FaMedal className="text-white text-sm" />
                  </div>
                  <div
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      theme === "dark"
                        ? "bg-indigo-900/30 text-indigo-400"
                        : "bg-indigo-100 text-indigo-700"
                    } floating-badge`}
                  >
                    Rank 1238
                  </div>
                </div>

                <h4
                  className={`text-sm font-bold mb-1 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  CodeChef Starters
                </h4>

                <p
                  className={`text-xs ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Achieved Global Rank 1238 in CodeChef Starters 186
                </p>
              </motion.div>

              {/* GfG 160 Challenge Achievement */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 1.0 }}
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
                    <FaFire className="text-white text-sm" />
                  </div>
                  <div
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      theme === "dark"
                        ? "bg-indigo-900/30 text-indigo-400"
                        : "bg-indigo-100 text-indigo-700"
                    } floating-badge`}
                  >
                    35+ Days
                  </div>
                </div>

                <h4
                  className={`text-sm font-bold mb-1 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  GfG 160 Challenge
                </h4>

                <p
                  className={`text-xs ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Completed 35+ days of GfG 160 with 40+ problems solved
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* No modal needed */}
    </SectionContainer>
  );
};

export default Coding;
