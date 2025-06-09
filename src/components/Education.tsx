import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
<<<<<<< Updated upstream
=======
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaSchool,
  FaBookReader,
  FaTrophy,
  FaAward,
  FaMedal,
  FaBook,
  FaLaptopCode,
  FaClipboardCheck,
  FaChartLine,
  FaExternalLinkAlt,
  FaRegLightbulb,
  FaStar,
  FaMapMarkerAlt,
  FaCode,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
>>>>>>> Stashed changes

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useTheme();

<<<<<<< Updated upstream
=======
  // State for expanded cards - track which cards are expanded
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  // Toggle card expansion
  const toggleCardExpansion = (index: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  // Enhanced education data with more details
>>>>>>> Stashed changes
  const educationData = [
    {
      level: "Bachelor's Degree",
      title: "Bachelor of Technology in Computer Science and Engineering",
      institution: "National Institute of Technology, Patna",
      duration: "2023 - 2027",
      details: [
        "Cumulative CGPA: 7.69/10",
        "Relevant Coursework: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks",
        "Class Representative, Department of CSE (August, 2023 - December, 2024)",
      ],
      theme: {
        iconBg: "bg-indigo-800",
        iconText: "text-indigo-300",
        cardBg: "bg-gray-900",
        cardText: "text-white",
        badgeBg: "bg-indigo-900/50",
        badgeText: "text-indigo-300",
      },
      icon: "B.Tech",
    },
    {
      level: "Senior Secondary Education",
      title: "Senior Secondary Education (CBSE)",
      institution: "Pragya Bharti Public School, Gaya",
      duration: "2021 - 2022",
      details: ["Percentage: 88.8%", "Stream: PCM"],
      theme: {
        iconBg: "bg-purple-800",
        iconText: "text-purple-300",
        cardBg: "bg-gray-900",
        cardText: "text-white",
        badgeBg: "bg-purple-900/50",
        badgeText: "text-purple-300",
      },
      icon: "12th",
    },
    {
      level: "Secondary Education",
      title: "Secondary Education (CBSE)",
      institution: "Pragya Bharti Public School, Gaya",
      duration: "2019 - 2020",
      details: [
        "Percentage: 90%",
      ],
      theme: {
        iconBg: "bg-pink-800",
        iconText: "text-pink-300",
        cardBg: "bg-gray-900",
        cardText: "text-white",
        badgeBg: "bg-pink-900/50",
        badgeText: "text-pink-300",
      },
      icon: "10th",
    },
  ];

  return (
    <section
      id="education"
      className={`section relative overflow-hidden py-24 ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-50"
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
            Academic Journey
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
              Education
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
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-10">
            {/* Education Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div
                className={`absolute left-8 top-0 w-1 h-full ${
                  theme === "dark" ? "bg-indigo-800/30" : "bg-indigo-200"
                } rounded-full z-0`}
              />

              {/* Education Items */}
              <div className="space-y-12 relative z-10">
                {educationData.map((edu, index) => (
                  <div className="flex" key={index}>
                    <div
                      className={`relative flex items-center justify-center w-16 h-16 rounded-full ${
                        theme === "dark" ? "bg-gray-900" : "bg-white"
                      } shadow-lg mr-6`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${edu.theme.iconBg}`}
                      >
                        <span className={edu.theme.iconText}>{edu.icon}</span>
                      </div>
                    </div>

<<<<<<< Updated upstream
                    <div
                      className={`card-gradient p-6 rounded-xl flex-grow ${
                        theme === "dark" ? "bg-gray-900" : "bg-white"
                      } shadow-lg`}
=======
                    {/* Enhanced Education Card with Brief/Detailed Views */}
                    <motion.div
                      variants={cardHoverAnimation}
                      initial="rest"
                      whileHover="hover"
                      className={`ml-6 md:ml-12 flex-1 group rounded-3xl overflow-hidden border backdrop-blur-sm ${colorClasses.cardBg} transition-all duration-500`}
>>>>>>> Stashed changes
                    >
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h3
                          className={`text-xl font-bold ${edu.theme.cardText}`}
                        >
                          {edu.title}
                        </h3>
                        <span
                          className={`px-3 py-1 text-sm rounded-full ${edu.theme.badgeBg} ${edu.theme.badgeText}`}
                        >
                          {edu.duration}
                        </span>
                      </div>
                      <h4
                        className={`text-lg font-semibold mb-3 ${edu.theme.cardText}`}
                      >
                        {edu.institution}
                      </h4>
                      <ul className="space-y-2">
                        {edu.details.map((detail, idx) => (
                          <li className="flex items-start gap-2" key={idx}>
                            <span
                              className={`mt-1.5 w-2 h-2 rounded-full ${
                                theme === "dark"
                                  ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                                  : "bg-gradient-to-r from-primary to-secondary"
                              }`}
                            ></span>
                            <span
                              className={
                                theme === "dark"
                                  ? "text-gray-300"
                                  : "text-gray-700"
                              }
                            >
<<<<<<< Updated upstream
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
=======
                              {edu.title}
                            </motion.h4>
                            <div className="flex flex-wrap items-center gap-4 text-sm">
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                className={`px-4 py-2 rounded-full font-medium border ${
                                  theme === "dark"
                                    ? "bg-gradient-to-r from-indigo-900/40 to-purple-900/30 text-indigo-300 border-indigo-500/30"
                                    : "bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200"
                                } backdrop-blur-sm transition-all duration-200`}
                              >
                                {edu.institution}
                              </motion.div>
                              {edu.website && (
                                <motion.a
                                  href={edu.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.05 }}
                                  className={`flex items-center gap-2 px-3 py-1 rounded-lg ${
                                    theme === "dark"
                                      ? "text-gray-400 hover:text-gray-300"
                                      : "text-gray-600 hover:text-gray-700"
                                  } transition-colors duration-200`}
                                >
                                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                                  Visit Website
                                </motion.a>
                              )}
                            </div>
                          </div>
                          <motion.span
                            whileHover={{ scale: 1.05, y: -2 }}
                            className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl ${
                              theme === "dark"
                                ? "text-indigo-400 bg-indigo-900/30 border border-indigo-500/30"
                                : "text-indigo-600 bg-indigo-100 border border-indigo-200"
                            } backdrop-blur-sm transition-all duration-200`}
                          >
                            <FaCalendarAlt className="w-3.5 h-3.5" />
                            {edu.duration}
                          </motion.span>
                        </div>

                        {/* Brief Summary View (Default) */}
                        {!expandedCards.has(index) && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-6"
                          >
                            {/* Quick Summary */}
                            <div className="grid md:grid-cols-2 gap-6">
                              {/* Key Details */}
                              <div>
                                <h5
                                  className={`text-sm font-semibold mb-3 flex items-center gap-2 ${
                                    theme === "dark"
                                      ? "text-gray-200"
                                      : "text-gray-800"
                                  }`}
                                >
                                  <FaClipboardCheck
                                    className={`w-3.5 h-3.5 ${
                                      theme === "dark"
                                        ? "text-indigo-400"
                                        : "text-indigo-600"
                                    }`}
                                  />
                                  Key Details:
                                </h5>
                                <div className="space-y-2">
                                  {edu.details.slice(0, 2).map((detail, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-start gap-3"
                                    >
                                      <span
                                        className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${colorClasses.icon.replace(
                                          "text-",
                                          "bg-"
                                        )}`}
                                      />
                                      <span
                                        className={`text-sm ${
                                          theme === "dark"
                                            ? "text-gray-300"
                                            : "text-gray-700"
                                        }`}
                                      >
                                        {detail}
                                      </span>
                                    </div>
                                  ))}
                                  {edu.details.length > 2 && (
                                    <span
                                      className={`text-xs ${
                                        theme === "dark"
                                          ? "text-gray-400"
                                          : "text-gray-500"
                                      } italic`}
                                    >
                                      +{edu.details.length - 2} more details
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* Top Skills */}
                              <div>
                                <h5
                                  className={`text-sm font-semibold mb-3 flex items-center gap-2 ${
                                    theme === "dark"
                                      ? "text-gray-200"
                                      : "text-gray-800"
                                  }`}
                                >
                                  <FaCode
                                    className={`w-3.5 h-3.5 ${
                                      theme === "dark"
                                        ? "text-indigo-400"
                                        : "text-indigo-600"
                                    }`}
                                  />
                                  Top Skills:
                                </h5>
                                <div className="space-y-2">
                                  {edu.skills.slice(0, 3).map((skill, skillIndex) => (
                                    <div key={skillIndex} className="flex justify-between items-center">
                                      <span
                                        className={`text-sm font-medium ${
                                          theme === "dark"
                                            ? "text-gray-300"
                                            : "text-gray-700"
                                        }`}
                                      >
                                        {skill.name}
                                      </span>
                                      <span
                                        className={`text-xs font-semibold px-2 py-1 rounded ${
                                          theme === "dark"
                                            ? "text-indigo-400 bg-indigo-900/30"
                                            : "text-indigo-600 bg-indigo-100"
                                        }`}
                                      >
                                        {skill.level}%
                                      </span>
                                    </div>
                                  ))}
                                  {edu.skills.length > 3 && (
                                    <span
                                      className={`text-xs ${
                                        theme === "dark"
                                          ? "text-gray-400"
                                          : "text-gray-500"
                                      } italic`}
                                    >
                                      +{edu.skills.length - 3} more skills
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Top Achievements Preview */}
                            <div>
                              <h5
                                className={`text-sm font-semibold mb-3 flex items-center gap-2 ${
                                  theme === "dark"
                                    ? "text-gray-200"
                                    : "text-gray-800"
                                }`}
                              >
                                <FaAward
                                  className={`w-3.5 h-3.5 ${
                                    theme === "dark"
                                      ? "text-amber-400"
                                      : "text-amber-600"
                                  }`}
                                />
                                Key Achievements:
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {edu.achievements.slice(0, 2).map((achievement, idx) => (
                                  <div
                                    key={idx}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm ${
                                      theme === "dark"
                                        ? "bg-amber-900/20 border-amber-700/30 text-amber-200"
                                        : "bg-amber-50 border-amber-200/50 text-amber-800"
                                    }`}
                                  >
                                    <FaStar
                                      className={`w-3 h-3 ${
                                        theme === "dark"
                                          ? "text-amber-400"
                                          : "text-amber-600"
                                      }`}
                                    />
                                    <span className="font-medium">
                                      {achievement}
                                    </span>
                                  </div>
                                ))}
                                {edu.achievements.length > 2 && (
                                  <span
                                    className={`px-3 py-2 text-xs ${
                                      theme === "dark"
                                        ? "text-gray-400"
                                        : "text-gray-500"
                                    } italic`}
                                  >
                                    +{edu.achievements.length - 2} more
                                  </span>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Detailed Expanded View */}
                        {expandedCards.has(index) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                          >
                            {/* Comprehensive Content Grid */}
                            <div className="grid lg:grid-cols-2 gap-8">
                              {/* Left Column - Academic Details & Achievements */}
                              <div className="space-y-6">
                                {/* Academic Details */}
                                <div>
                                  <h5
                                    className={`text-sm font-semibold mb-3 flex items-center gap-2 ${
                                      theme === "dark"
                                        ? "text-gray-200"
                                        : "text-gray-800"
                                    }`}
                                  >
                                    <FaClipboardCheck
                                      className={`w-3.5 h-3.5 ${
                                        theme === "dark"
                                          ? "text-indigo-400"
                                          : "text-indigo-600"
                                      }`}
                                    />
                                    Academic Details:
                                  </h5>
                                  <div className="space-y-2">
                                    {edu.details.map((detail, idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-start gap-3"
                                      >
                                        <span
                                          className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${colorClasses.icon.replace(
                                            "text-",
                                            "bg-"
                                          )}`}
                                        />
                                        <span
                                          className={`text-sm ${
                                            theme === "dark"
                                              ? "text-gray-300"
                                              : "text-gray-700"
                                          }`}
                                        >
                                          {detail}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Achievements */}
                                <div>
                                  <h5
                                    className={`text-sm font-semibold mb-3 flex items-center gap-2 ${
                                      theme === "dark"
                                        ? "text-gray-200"
                                        : "text-gray-800"
                                    }`}
                                  >
                                    <FaAward
                                      className={`w-3.5 h-3.5 ${
                                        theme === "dark"
                                          ? "text-amber-400"
                                          : "text-amber-600"
                                      }`}
                                    />
                                    Key Achievements:
                                  </h5>
                                  <div className="space-y-2">
                                    {edu.achievements.map((achievement, idx) => (
                                      <div
                                        key={idx}
                                        className={`flex items-center gap-2 p-2.5 rounded-lg border ${
                                          theme === "dark"
                                            ? "bg-amber-900/20 border-amber-700/30 text-amber-200"
                                            : "bg-amber-50 border-amber-200/50 text-amber-800"
                                        }`}
                                      >
                                        <div
                                          className={`p-1.5 rounded-full ${
                                            theme === "dark"
                                              ? "bg-amber-900/50"
                                              : "bg-amber-200/70"
                                          }`}
                                        >
                                          <FaStar
                                            className={`w-3 h-3 ${
                                              theme === "dark"
                                                ? "text-amber-400"
                                                : "text-amber-600"
                                            }`}
                                          />
                                        </div>
                                        <span className="text-sm font-medium">
                                          {achievement}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Projects */}
                                {edu.projects && edu.projects.length > 0 && (
                                  <div>
                                    <h5
                                      className={`text-sm font-semibold mb-3 flex items-center gap-2 ${
                                        theme === "dark"
                                          ? "text-gray-200"
                                          : "text-gray-800"
                                      }`}
                                    >
                                      <FaRegLightbulb
                                        className={`w-3.5 h-3.5 ${
                                          theme === "dark"
                                            ? "text-purple-400"
                                            : "text-purple-600"
                                        }`}
                                      />
                                      Notable Projects:
                                    </h5>
                                    <div className="space-y-2">
                                      {edu.projects.map((project, idx) => (
                                        <div
                                          key={idx}
                                          className={`p-3 rounded-lg border ${
                                            theme === "dark"
                                              ? "bg-purple-900/20 border-purple-700/30"
                                              : "bg-purple-50 border-purple-200/50"
                                          }`}
                                        >
                                          <span
                                            className={`text-sm ${
                                              theme === "dark"
                                                ? "text-purple-300"
                                                : "text-purple-700"
                                            }`}
                                          >
                                            {project}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>

                              {/* Right Column - Skills & Courses */}
                              <div className="space-y-6">
                                {/* Skills */}
                                <div>
                                  <h5
                                    className={`text-sm font-semibold mb-3 flex items-center gap-2 ${
                                      theme === "dark"
                                        ? "text-gray-200"
                                        : "text-gray-800"
                                    }`}
                                  >
                                    <FaCode
                                      className={`w-3.5 h-3.5 ${
                                        theme === "dark"
                                          ? "text-indigo-400"
                                          : "text-indigo-600"
                                      }`}
                                    />
                                    Key Skills:
                                  </h5>
                                  <div className="space-y-3">
                                    {edu.skills.map((skill, skillIndex) => (
                                      <div key={skillIndex} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                          <motion.span
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                              delay: 0.8 + skillIndex * 0.1,
                                              duration: 0.4,
                                            }}
                                            className={`text-sm font-medium ${
                                              theme === "dark"
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                            }`}
                                          >
                                            {skill.name}
                                          </motion.span>
                                          <span
                                            className={`text-xs font-semibold ${
                                              theme === "dark"
                                                ? "text-indigo-400"
                                                : "text-indigo-600"
                                            }`}
                                          >
                                            {skill.level}%
                                          </span>
                                        </div>
                                        <div
                                          className={`h-2 rounded-full overflow-hidden ${
                                            theme === "dark"
                                              ? "bg-gray-700"
                                              : "bg-gray-200"
                                          }`}
                                        >
                                          <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{
                                              delay: 1.0 + skillIndex * 0.1,
                                              duration: 0.8,
                                              ease: "easeOut",
                                            }}
                                            className={`h-full rounded-full ${
                                              theme === "dark"
                                                ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                                                : "bg-gradient-to-r from-indigo-500 to-purple-500"
                                            }`}
                                          />
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Courses */}
                                {edu.courses && edu.courses.length > 0 && (
                                  <div>
                                    <h5
                                      className={`text-sm font-semibold mb-3 flex items-center gap-2 ${
                                        theme === "dark"
                                          ? "text-gray-200"
                                          : "text-gray-800"
                                      }`}
                                    >
                                      <FaBook
                                        className={`w-3.5 h-3.5 ${
                                          theme === "dark"
                                            ? "text-green-400"
                                            : "text-green-600"
                                        }`}
                                      />
                                      Relevant Courses:
                                    </h5>
                                    <div className="flex flex-wrap gap-2">
                                      {edu.courses.map((course, idx) => (
                                        <motion.span
                                          key={idx}
                                          initial={{ opacity: 0, scale: 0.8 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{
                                            delay: 1.2 + idx * 0.05,
                                            duration: 0.3,
                                          }}
                                          whileHover={{ scale: 1.05, y: -2 }}
                                          className={`text-xs px-3 py-1.5 rounded-md border font-medium ${
                                            theme === "dark"
                                              ? "bg-green-900/30 text-green-300 border-green-700/30 hover:bg-green-800/40"
                                              : "bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
                                          } transition-all duration-200`}
                                        >
                                          {course}
                                        </motion.span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Expand/Collapse Button */}
                        <div className="mt-8 flex justify-center">
                          <motion.button
                            onClick={() => toggleCardExpansion(index)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl border font-medium transition-all duration-300 ${
                              theme === "dark"
                                ? "bg-gradient-to-r from-indigo-900/50 to-purple-900/40 text-indigo-300 border-indigo-500/30 hover:border-indigo-400/50"
                                : "bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200 hover:border-indigo-300"
                            } backdrop-blur-sm`}
                          >
                            {expandedCards.has(index) ? (
                              <>
                                <FaChevronUp className="w-4 h-4" />
                                Show Less Details
                              </>
                            ) : (
                              <>
                                <FaChevronDown className="w-4 h-4" />
                                Show More Details
                              </>
                            )}
                          </motion.button>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
>>>>>>> Stashed changes
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
