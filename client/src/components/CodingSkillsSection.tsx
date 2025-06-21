import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
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
      icon: SiLeetcode,
      iconColor: "#FFA116", // Updated to match LeetCode's actual brand color
      url: "https://leetcode.com/",
      rank: "Top 26%",
      categories: [
        { name: "Easy", count: 86, color: "green" },
        { name: "Medium", count: 93, color: "yellow" },
        { name: "Hard", count: 4, color: "red" },
      ],
      contests: "Weekly Contests",
      problems: {
        easy: [
          {
            title: "Two Sum",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/two-sum/",
            description: "Find indices of two numbers that add up to target",
          },
          {
            title: "Valid Parentheses",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/valid-parentheses/",
            description: "Determine if string has valid parentheses ordering",
          },
          {
            title: "Merge Two Sorted Lists",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/merge-two-sorted-lists/",
            description: "Merge two sorted linked lists",
          },
        ],
        medium: [
          {
            title: "Add Two Numbers",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/add-two-numbers/",
            description: "Add two numbers represented as linked lists",
          },
          {
            title: "Longest Substring Without Repeating Characters",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            description: "Find length of longest substring without repeats",
          },
          {
            title: "LRU Cache",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/lru-cache/",
            description: "Design a data structure that implements LRU cache",
          },
        ],
        hard: [
          {
            title: "Median of Two Sorted Arrays",
            difficulty: "Hard",
            url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
            description: "Find median of two sorted arrays in O(log(m+n))",
          },
          {
            title: "Merge k Sorted Lists",
            difficulty: "Hard",
            url: "https://leetcode.com/problems/merge-k-sorted-lists/",
            description: "Merge k sorted linked lists into one sorted list",
          },
        ],
      },
    },
    {
      id: "codechef",
      name: "CodeChef",
      rating: "1270+",
      problemsSolved: "25",
      icon: SiCodechef,
      iconColor: "#5B4638", // Updated to match CodeChef's actual brand color
      url: "https://www.codechef.com/",
      rank: "2★ Coder (Division 3)",
      contests: "5+",
      categories: [
        { name: "Easy", count: 14, color: "green" },
        { name: "Medium", count: 8, color: "yellow" },
        { name: "Hard", count: 3, color: "red" },
      ],
      problems: {
        easy: [
          {
            title: "Chef and Digits of a Number",
            difficulty: "Easy",
            url: "https://www.codechef.com/problems/LONGSEQ",
            description:
              "Check if flipping exactly one digit makes all the same",
          },
          {
            title: "Enormous Input Test",
            difficulty: "Easy",
            url: "https://www.codechef.com/problems/INTEST",
            description: "Test for handling large inputs quickly",
          },
        ],
        medium: [
          {
            title: "Chef and String",
            difficulty: "Medium",
            url: "https://www.codechef.com/problems/CHEFSTR1",
            description: "Calculate force required to play a string instrument",
          },
          {
            title: "Chef and Remissness",
            difficulty: "Medium",
            url: "https://www.codechef.com/problems/REMISS",
            description: "Calculate minimum and maximum number of visitors",
          },
        ],
        hard: [
          {
            title: "Kth Path",
            difficulty: "Hard",
            url: "https://www.codechef.com/problems/KPATHS",
            description: "Find the kth shortest path in a graph",
          },
        ],
      },
    },
    {
      id: "geeksforgeeks",
      name: "GeeksForGeeks",
      institutionRank: "#1455",
      problemsSolved: "70",
      icon: SiGeeksforgeeks,
      iconColor: "#2F8D46", // Updated to match GeeksforGeeks actual brand color
      url: "https://www.geeksforgeeks.org/",
      achievement: "GfG 160 - 160 Days of Problem Solving",
      categories: [
        { name: "Easy", count: 32, color: "green" },
        { name: "Medium", count: 30, color: "yellow" },
        { name: "Hard", count: 8, color: "red" },
      ],
      problems: {
        easy: [
          {
            title: "Find Missing in Second Array",
            difficulty: "Easy",
            url: "https://practice.geeksforgeeks.org/problems/find-missing-in-second-array/1",
            description:
              "Find elements in first array that are missing in second",
          },
          {
            title: "Remove Duplicates",
            difficulty: "Easy",
            url: "https://practice.geeksforgeeks.org/problems/remove-duplicate-elements-from-sorted-array/1",
            description: "Remove duplicates from sorted array",
          },
        ],
        medium: [
          {
            title: "Minimum Platforms",
            difficulty: "Medium",
            url: "https://practice.geeksforgeeks.org/problems/minimum-platforms/0",
            description:
              "Find minimum number of platforms required for a station",
          },
          {
            title: "Job Sequencing Problem",
            difficulty: "Medium",
            url: "https://practice.geeksforgeeks.org/problems/job-sequencing-problem/0",
            description: "Find maximum profit from jobs with deadlines",
          },
        ],
        hard: [
          {
            title: "The N-Queens Puzzle",
            difficulty: "Hard",
            url: "https://practice.geeksforgeeks.org/problems/n-queen-problem0315/1",
            description: "Place N queens on an NxN chessboard so no two attack",
          },
        ],
      },
    },
    {
      id: "codeforces",
      name: "Codeforces",
      rating: "900+",
      problemsSolved: "10",
      icon: SiCodeforces,
      iconColor: "#1F8ACB", // Updated to match Codeforces actual brand color
      url: "https://codeforces.com/",
      rank: "Newbie",
      contests: "3+",
      categories: [
        { name: "Easy", count: 5, color: "green" },
        { name: "Medium", count: 4, color: "yellow" },
        { name: "Hard", count: 1, color: "red" },
      ],
      problems: {
        easy: [
          {
            title: "Watermelon",
            difficulty: "Easy",
            url: "https://codeforces.com/problemset/problem/4/A",
            description: "Can the weight be divided into two even parts?",
          },
          {
            title: "Way Too Long Words",
            difficulty: "Easy",
            url: "https://codeforces.com/problemset/problem/71/A",
            description: "Abbreviate words that are too long",
          },
        ],
        medium: [
          {
            title: "Theatre Square",
            difficulty: "Medium",
            url: "https://codeforces.com/problemset/problem/1/A",
            description: "Cover a rectangular area with square flagstones",
          },
          {
            title: "Next Round",
            difficulty: "Medium",
            url: "https://codeforces.com/problemset/problem/158/A",
            description: "Who advances to the next round of competition?",
          },
        ],
        hard: [
          {
            title: "Maximum Submatrix 2",
            difficulty: "Hard",
            url: "https://codeforces.com/problemset/problem/375/B",
            description:
              "Find the maximum number of non-decreasing subsegments",
          },
        ],
      },
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

  // No toggle function needed anymore

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
              {/* Left side decorative element */}
              <div className="absolute left-0 inset-y-0 w-1/3 overflow-hidden">
                <div
                  className={`absolute inset-0 ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-indigo-900/30 to-transparent"
                      : "bg-gradient-to-r from-indigo-100/50 to-transparent"
                  }`}
                ></div>
              </div>

              {/* Code icon */}
              <div className="relative z-10 p-6 md:p-8 flex-shrink-0 flex justify-center sm:justify-start">
                <div
                  className="h-16 w-16 md:h-20 md:w-20 rounded-xl flex items-center justify-center shadow-md transform -rotate-3 light-tracking icon-badge relative overflow-hidden"
                  style={{
                    background:
                      theme === "dark"
                        ? "linear-gradient(135deg, rgb(99, 102, 241), rgb(139, 92, 246))"
                        : "linear-gradient(135deg, rgb(79, 70, 229), rgb(139, 92, 246))",
                    boxShadow:
                      theme === "dark"
                        ? "0 0 15px rgba(139, 92, 246, 0.4)"
                        : "0 10px 15px -3px rgba(79, 70, 229, 0.2)",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.3), transparent 50%)",
                    }}
                  ></div>
                  <FaCode className="text-white text-2xl md:text-3xl relative z-10" />
                </div>
              </div>

              {/* Counter text */}
              <div className="flex-1 py-6 sm:py-6 md:py-8 px-6 md:pr-8 flex flex-col justify-center items-center sm:items-start">
                <div className="flex flex-col sm:flex-row items-center sm:items-baseline flex-wrap">
                  <h3
                    className="text-4xl md:text-5xl font-bold mb-2 sm:mb-0 sm:mr-4 count-animate"
                    style={{
                      background:
                        theme === "dark"
                          ? "linear-gradient(90deg, rgb(129, 140, 248), rgb(167, 139, 250))"
                          : "linear-gradient(90deg, rgb(79, 70, 229), rgb(124, 58, 237))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow:
                        theme === "dark"
                          ? "0 0 15px rgba(139, 92, 246, 0.4)"
                          : "none",
                    }}
                  >
                    {totalCounter}
                  </h3>
                  <div className="text-center sm:text-left">
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
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                </svg>
              </div>
            </div>
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
                {/* Decorative gradients - toned down */}
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

                    {/* Problem difficulty categories */}
                    {platform.categories && (
                      <div className="mt-4 grid grid-cols-3 gap-3">
                        {platform.categories.map((category, catIdx) => (
                          <div
                            key={catIdx}
                            className={`text-center p-2 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 ${
                              category.color === "green"
                                ? theme === "dark"
                                  ? "bg-green-900/30 text-green-300 border border-green-800/30"
                                  : "bg-green-50 text-green-700 border border-green-100"
                                : category.color === "yellow"
                                ? theme === "dark"
                                  ? "bg-yellow-900/30 text-yellow-300 border border-yellow-800/30"
                                  : "bg-yellow-50 text-yellow-700 border border-yellow-100"
                                : category.color === "red"
                                ? theme === "dark"
                                  ? "bg-red-900/30 text-red-300 border border-red-800/30"
                                  : "bg-red-50 text-red-700 border border-red-100"
                                : theme === "dark"
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
                                  ? category.color === "green"
                                    ? "text-green-300"
                                    : category.color === "yellow"
                                    ? "text-yellow-300"
                                    : category.color === "red"
                                    ? "text-red-300"
                                    : "text-white"
                                  : category.color === "green"
                                  ? "text-green-700"
                                  : category.color === "yellow"
                                  ? "text-yellow-700"
                                  : category.color === "red"
                                  ? "text-red-700"
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

                {/* Simple Achievement Line */}
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
                      {platform.id === "leetcode" &&
                        "Solved 183+ problems across all difficulty levels"}
                      {platform.id === "codechef" &&
                        "Global Rank 1238 in CodeChef Starters 186"}
                      {platform.id === "geeksforgeeks" &&
                        "35+ day streak in GfG 160 challenge"}
                      {platform.id === "codeforces" &&
                        "Participated in 3+ competitive contests"}
                    </p>
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

      {/* No modal needed */}
    </SectionContainer>
  );
};

export default Coding;
