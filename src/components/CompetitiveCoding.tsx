import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import { FaCode, FaTrophy, FaMedal, FaChartLine, FaLink } from "react-icons/fa";

// Competitive coding platform data
const codingPlatforms = [
  {
    name: "LeetCode",
    rating: "1550+",
    rank: "Top 5%",
    problemsSolved: 200,
    icon: "https://leetcode.com/favicon.ico",
    color: "from-yellow-400 to-yellow-600",
    textColor: "text-yellow-500",
    profileUrl: "https://leetcode.com/your-username/",
    achievements: [
      "500+ Contest Rating",
      "Solved Hard Problems: 45+",
      "Weekly Contest: Top 10%",
    ],
  },
  {
    name: "CodeChef",
    rating: "4★",
    rank: "Rated Coder",
    problemsSolved: 150,
    icon: "https://www.codechef.com/favicon.ico",
    color: "from-red-400 to-red-600",
    textColor: "text-red-500",
    profileUrl: "https://www.codechef.com/users/your-username",
    achievements: [
      "Long Challenge: Top 5%",
      "Solved Complex DP Problems",
      "4-Star Competitive Programmer",
    ],
  },
  {
    name: "Codeforces",
    rating: "Expert (1600+)",
    rank: "Blue",
    problemsSolved: 180,
    icon: "https://codeforces.com/favicon.ico",
    color: "from-blue-400 to-blue-600",
    textColor: "text-blue-500",
    profileUrl: "https://codeforces.com/profile/your-username",
    achievements: [
      "Div 2 Contests: Top 500",
      "Educational Rounds: Top 10%",
      "Solved 180+ Problems",
    ],
  },
  {
    name: "HackerRank",
    rating: "5★",
    rank: "Gold Level",
    problemsSolved: 120,
    icon: "https://www.hackerrank.com/favicon.ico",
    color: "from-green-400 to-green-600",
    textColor: "text-green-500",
    profileUrl: "https://www.hackerrank.com/your-username",
    achievements: [
      "Problem Solving (Advanced)",
      "Gold Badge: Algorithms",
      "5-Star in Data Structures",
    ],
  },
];

const CompetitiveCoding = () => {
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
      id="competitive-coding"
      className={`section relative overflow-hidden py-24 ${
        theme === "dark" ? "bg-gray-900/80" : "bg-gray-50"
      }`}
    >
      {/* Background decoration */}
      <div
        className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${
          theme === "dark" ? "bg-blue-600/5" : "bg-blue-200/30"
        }`}
      ></div>
      <div
        className={`absolute -bottom-20 -left-20 w-80 h-80 rounded-full ${
          theme === "dark" ? "bg-purple-600/5" : "bg-purple-200/30"
        }`}
      ></div>

      {/* Code pattern background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvZGUyIj48cG9seWxpbmUgcG9pbnRzPSI5IDIyIDE1IDIgMjEgMjIiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz0iMiA3IDYgMTEgMTAgNyI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPSIyIDE3IDYgMTMgMTAgMTciPjwvcG9seWxpbmU+PC9zdmc+')] bg-repeat"></div>

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
                ? "bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-400"
                : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600"
            }`}
          >
            Problem Solving
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold mt-4 font-heading ${
              theme === "dark" ? "text-white" : ""
            }`}
          >
            Competitive{" "}
            <span
              className={`${
                theme === "dark"
                  ? "bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
              }`}
            >
              Programming
            </span>
          </h2>
          <div
            className={`w-24 h-1 mx-auto mt-6 ${
              theme === "dark"
                ? "bg-gradient-to-r from-blue-600 to-purple-600"
                : "bg-gradient-to-r from-blue-500 to-purple-500"
            }`}
          ></div>

          <p
            className={`mt-6 max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Showcasing my problem-solving skills through competitive programming
            platforms. I consistently participate in coding contests and solve
            algorithmic challenges to sharpen my DSA skills.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {codingPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`platform-card relative overflow-hidden p-8 rounded-xl border ${
                theme === "dark"
                  ? "bg-gray-800/80 hover:bg-gray-700/90 border-gray-700"
                  : "bg-white hover:bg-gray-50 border-gray-100 shadow-lg"
              } transition-all duration-300`}
            >
              {/* Platform info section */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  {platform.icon ? (
                    <div className="mr-4 rounded-lg overflow-hidden w-12 h-12 flex items-center justify-center">
                      <img
                        src={platform.icon}
                        alt={`${platform.name} logo`}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className={`mr-4 w-12 h-12 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center text-white`}
                    >
                      <FaCode size={24} />
                    </div>
                  )}
                  <div>
                    <h3
                      className={`text-2xl font-bold ${
                        theme === "dark" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {platform.name}
                    </h3>
                    <div className="flex items-center mt-1">
                      <span className={`font-semibold ${platform.textColor}`}>
                        {platform.rating}
                      </span>
                      <span
                        className={`mx-2 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        •
                      </span>
                      <span
                        className={
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }
                      >
                        {platform.rank}
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href={platform.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center text-sm font-medium ${
                    theme === "dark"
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-700"
                  }`}
                >
                  View Profile <FaLink size={12} className="ml-1" />
                </a>
              </div>

              {/* Stats section */}
              <div
                className={`grid grid-cols-2 gap-4 p-4 rounded-lg mb-6 ${
                  theme === "dark" ? "bg-gray-700/30" : "bg-gray-50"
                }`}
              >
                <div className="text-center">
                  <div className={`text-3xl font-bold ${platform.textColor}`}>
                    {platform.problemsSolved}+
                  </div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Problems Solved
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <FaChartLine className={`${platform.textColor} mr-1`} />
                    <span
                      className={`text-xl font-bold ${
                        theme === "dark" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {platform.rank}
                    </span>
                  </div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Current Rank
                  </div>
                </div>
              </div>

              {/* Achievements section */}
              <div>
                <h4
                  className={`text-sm uppercase tracking-wider font-semibold mb-3 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Achievements
                </h4>
                <ul className="space-y-2">
                  {platform.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`mt-1 mr-2 ${platform.textColor}`}>
                        {idx === 0 ? (
                          <FaTrophy size={14} />
                        ) : (
                          <FaMedal size={14} />
                        )}
                      </div>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Background decoration for the card */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full opacity-10 bg-gradient-to-br ${platform.color}`}
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveCoding;
