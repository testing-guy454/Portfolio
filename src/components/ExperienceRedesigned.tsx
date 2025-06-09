import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import {
  FaBriefcase,
  FaMedal,
  FaTrophy,
  FaCode,
  FaUserTie,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronRight,
  FaRocket,
  FaStar,
} from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "0px 0px -10% 0px",
  });

  const { theme } = useTheme();

  // Professional experience data with enhanced structure
  const experiences = [
    {
      role: "Technical Member",
      company: "Robotics Club, NIT Patna",
      period: "December 2023 - Present",
      location: "NIT Patna",
      type: "Leadership",
      description:
        "Organized and facilitated 3+ workshops on designing and building robotic bots. Led a team of 4 to build a combat-ready battle bot, achieving 4th place among 15+ teams at NIT Patna's tech fest. Directed a team of 3 in designing and developing a soccer bot for the annual tech fest, enhancing hands-on robotics and teamwork skills.",
      highlights: [
        "Led team of 4 to 4th place in battle bot competition",
        "Organized 3+ robotics workshops",
        "Developed soccer bot for tech fest",
      ],
      technologies: ["Arduino", "C++", "Mechanical Design", "Team Leadership"],
      category: "technical",
      status: "current",
    },
    {
      role: "Team Leader",
      company: "Hackathons (including Smart India Hackathon)",
      period: "2023",
      location: "NIT Patna & Remote",
      type: "Innovation",
      description:
        "Led teams in 3 major hackathons, including the prestigious Smart India Hackathon. Guided my team to qualify at the internal NIT Patna hackathon and advance to the national level. Oversaw all phases from ideation to development and presentation, ensuring effective collaboration and timely delivery of innovative solutions.",
      highlights: [
        "Qualified for Smart India Hackathon national level",
        "Led 3 major hackathon teams",
        "End-to-end project management",
      ],
      technologies: ["React", "Node.js", "Project Management", "Innovation"],
      category: "leadership",
      status: "completed",
    },
  ];

  // Enhanced achievements data with categories
  const achievements = [
    {
      title: "Winner - Model United Nations",
      year: "2023",
      category: "Leadership",
      description:
        "Represented the Republic of Poland at NIT Patna's Model United Nations. Earned the Best Delegate award for exceptional debate skills and impactful resolutions.",
      icon: <FaTrophy className="w-5 h-5" />,
      color: "yellow",
      featured: true,
    },
    {
      title: "Technical Member - Robotics Club",
      year: "2023 - Present",
      category: "Technical",
      description:
        "Active member of the Robotics Club, led team building combat and soccer bots, organized workshops.",
      icon: <FaCode className="w-5 h-5" />,
      color: "blue",
      featured: true,
    },
    {
      title: "Class Representative",
      year: "2023 - 2024",
      category: "Leadership",
      description:
        "Coordinated between faculty and students, organized department events.",
      icon: <FaUserTie className="w-5 h-5" />,
      color: "purple",
      featured: false,
    },
    {
      title: "Bronze Medal - NIT Patna Intramurals",
      year: "2023",
      category: "Sports",
      description: "Won Bronze in 50m Hurdles at the university sports event.",
      icon: <FaMedal className="w-5 h-5" />,
      color: "amber",
      featured: false,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardHoverAnimation = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  // Get color classes for achievements
  const getColorClasses = (color: string) => {
    const colors = {
      yellow: {
        icon: theme === "dark" ? "text-yellow-400" : "text-yellow-600",
        bg: theme === "dark" ? "bg-yellow-900/20" : "bg-yellow-100",
        border: theme === "dark" ? "border-yellow-500/30" : "border-yellow-200",
        badge:
          theme === "dark"
            ? "bg-yellow-500/20 text-yellow-400"
            : "bg-yellow-100 text-yellow-700",
      },
      blue: {
        icon: theme === "dark" ? "text-blue-400" : "text-blue-600",
        bg: theme === "dark" ? "bg-blue-900/20" : "bg-blue-100",
        border: theme === "dark" ? "border-blue-500/30" : "border-blue-200",
        badge:
          theme === "dark"
            ? "bg-blue-500/20 text-blue-400"
            : "bg-blue-100 text-blue-700",
      },
      purple: {
        icon: theme === "dark" ? "text-purple-400" : "text-purple-600",
        bg: theme === "dark" ? "bg-purple-900/20" : "bg-purple-100",
        border: theme === "dark" ? "border-purple-500/30" : "border-purple-200",
        badge:
          theme === "dark"
            ? "bg-purple-500/20 text-purple-400"
            : "bg-purple-100 text-purple-700",
      },
      amber: {
        icon: theme === "dark" ? "text-amber-400" : "text-amber-600",
        bg: theme === "dark" ? "bg-amber-900/20" : "bg-amber-100",
        border: theme === "dark" ? "border-amber-500/30" : "border-amber-200",
        badge:
          theme === "dark"
            ? "bg-amber-500/20 text-amber-400"
            : "bg-amber-100 text-amber-700",
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section
      id="experience"
      className={`section relative overflow-hidden py-24 ${
        theme === "dark" ? "bg-gray-900" : ""
      }`}
      style={{
        scrollMarginTop: "150px",
        paddingTop: "40px",
        scrollBehavior: "smooth",
      }}
    >
      {/* Background decoration similar to Projects */}
      <div
        className={`absolute top-40 left-0 w-96 h-96 rounded-full blur-3xl ${
          theme === "dark" ? "bg-indigo-600/5" : "bg-primary/5"
        }`}
      ></div>
      <div
        className={`absolute bottom-20 right-20 w-64 h-64 rounded-full blur-3xl ${
          theme === "dark" ? "bg-purple-600/5" : "bg-accent/5"
        }`}
      ></div>

      <div className="container relative z-10">
        {/* Modern Section Header matching Projects style */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span
            className={`px-4 py-2 rounded-full font-medium text-sm ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-900/30 to-purple-900/30 text-indigo-400"
                : "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary"
            }`}
          >
            Professional Journey
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold mt-4 font-heading ${
              theme === "dark" ? "text-white" : ""
            }`}
          >
            Experience &{" "}
            <span
              className={`${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text"
                  : "text-gradient"
              }`}
            >
              Achievements
            </span>
          </h2>
          <div
            className={`w-24 h-1 mx-auto mt-6 ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600"
                : "bg-gradient-to-r from-primary to-accent"
            }`}
          ></div>
          <p
            className={`max-w-2xl mx-auto mt-6 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            My professional journey showcasing leadership roles, technical
            expertise, and notable achievements in robotics, hackathons, and
            student activities.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Professional Experience Column */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-6"
          >
            <div
              className={`rounded-xl overflow-hidden shadow-lg ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-6 flex items-center gap-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      theme === "dark" ? "bg-indigo-900/40" : "bg-indigo-100"
                    }`}
                  >
                    <FaBriefcase
                      className={`w-5 h-5 ${
                        theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    />
                  </div>
                  Professional Experience
                </h3>

                {/* Experience Timeline */}
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial="rest"
                      whileHover="hover"
                      variants={cardHoverAnimation}
                      className={`relative p-6 rounded-xl border transition-all duration-300 ${
                        theme === "dark"
                          ? "bg-gray-700/50 border-gray-600/50 hover:bg-gray-700/80 hover:border-gray-500/70"
                          : "bg-gray-50 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md"
                      }`}
                    >
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <div
                          className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                            exp.status === "current"
                              ? theme === "dark"
                                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                : "bg-green-100 text-green-700 border border-green-200"
                              : theme === "dark"
                              ? "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                              : "bg-gray-100 text-gray-600 border border-gray-200"
                          }`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              exp.status === "current"
                                ? "bg-green-400 animate-pulse"
                                : "bg-gray-400"
                            }`}
                          ></div>
                          {exp.status === "current" ? "Current" : "Completed"}
                        </div>
                      </div>

                      {/* Experience Header */}
                      <div className="mb-4 pr-20">
                        <h4
                          className={`text-lg font-bold mb-2 ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {exp.role}
                        </h4>
                        <div className="flex flex-wrap items-center gap-4 mb-3">
                          <div
                            className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                              theme === "dark"
                                ? "bg-indigo-900/30 text-indigo-400"
                                : "bg-indigo-100 text-indigo-700"
                            }`}
                          >
                            <HiOutlineOfficeBuilding className="w-4 h-4" />
                            {exp.company}
                          </div>
                          <span
                            className={`flex items-center gap-1 text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-500"
                            }`}
                          >
                            <FaCalendarAlt className="w-3 h-3" />
                            {exp.period}
                          </span>
                          <span
                            className={`flex items-center gap-1 text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-500"
                            }`}
                          >
                            <FaMapMarkerAlt className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p
                        className={`mb-4 leading-relaxed ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {exp.description}
                      </p>

                      {/* Key Highlights */}
                      {exp.highlights && exp.highlights.length > 0 && (
                        <div className="mb-4">
                          <h5
                            className={`text-sm font-semibold mb-2 flex items-center gap-2 ${
                              theme === "dark"
                                ? "text-gray-200"
                                : "text-gray-800"
                            }`}
                          >
                            <FaStar className="w-3 h-3 text-yellow-500" />
                            Key Highlights
                          </h5>
                          <ul className="space-y-1">
                            {exp.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className={`flex items-start gap-2 text-sm ${
                                  theme === "dark"
                                    ? "text-gray-300"
                                    : "text-gray-600"
                                }`}
                              >
                                <FaChevronRight
                                  className={`w-3 h-3 mt-0.5 flex-shrink-0 ${
                                    theme === "dark"
                                      ? "text-indigo-400"
                                      : "text-indigo-600"
                                  }`}
                                />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technology Tags */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-2 py-1 text-xs rounded-md font-medium transition-colors duration-200 ${
                                theme === "dark"
                                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                  : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Featured Achievements */}
            <div
              className={`rounded-xl overflow-hidden shadow-lg ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-6 flex items-center gap-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      theme === "dark" ? "bg-amber-900/40" : "bg-amber-100"
                    }`}
                  >
                    <FaTrophy
                      className={`w-5 h-5 ${
                        theme === "dark" ? "text-amber-400" : "text-amber-600"
                      }`}
                    />
                  </div>
                  Achievements
                </h3>

                <div className="space-y-4">
                  {achievements.map((achievement, index) => {
                    const colorClasses = getColorClasses(achievement.color);
                    return (
                      <motion.div
                        key={index}
                        initial="rest"
                        whileHover="hover"
                        variants={{
                          rest: { scale: 1 },
                          hover: { scale: 1.02 },
                        }}
                        className={`p-4 rounded-xl border transition-all duration-300 cursor-default ${
                          achievement.featured
                            ? theme === "dark"
                              ? "bg-gradient-to-br from-gray-700/60 to-gray-800/60 border-gray-600/50 hover:border-gray-500/70"
                              : "bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
                            : theme === "dark"
                            ? "bg-gray-700/50 border-gray-600/50 hover:bg-gray-700/80"
                            : "bg-gray-50 border-gray-200 hover:bg-white hover:border-gray-300"
                        }`}
                      >
                        {/* Featured Badge */}
                        {achievement.featured && (
                          <div className="flex justify-between items-start mb-3">
                            <div
                              className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                                theme === "dark"
                                  ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                                  : "bg-yellow-100 text-yellow-700 border border-yellow-200"
                              }`}
                            >
                              <FaStar className="w-3 h-3" />
                              Featured
                            </div>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${colorClasses.badge}`}
                            >
                              {achievement.category}
                            </span>
                          </div>
                        )}

                        <div className="flex gap-3">
                          <div
                            className={`p-3 rounded-lg ${colorClasses.bg} ${colorClasses.border} border`}
                          >
                            <div className={colorClasses.icon}>
                              {achievement.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start gap-2 mb-2">
                              <h4
                                className={`font-semibold text-sm ${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-900"
                                }`}
                              >
                                {achievement.title}
                              </h4>
                              {!achievement.featured && (
                                <span
                                  className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${colorClasses.badge}`}
                                >
                                  {achievement.year}
                                </span>
                              )}
                            </div>
                            {achievement.featured && (
                              <div className="mb-2">
                                <span
                                  className={`text-xs px-2 py-1 rounded-full ${
                                    theme === "dark"
                                      ? "bg-indigo-500/20 text-indigo-400"
                                      : "bg-indigo-100 text-indigo-700"
                                  }`}
                                >
                                  {achievement.year}
                                </span>
                              </div>
                            )}
                            <p
                              className={`text-xs leading-relaxed ${
                                theme === "dark"
                                  ? "text-gray-300"
                                  : "text-gray-600"
                              }`}
                            >
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Career Goals Card */}
            <motion.div
              variants={itemVariants}
              className={`rounded-xl overflow-hidden shadow-lg border ${
                theme === "dark"
                  ? "bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-indigo-800/30"
                  : "bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100"
              }`}
            >
              <div className="p-6">
                <h4
                  className={`text-lg font-bold mb-4 flex items-center gap-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      theme === "dark" ? "bg-yellow-900/40" : "bg-yellow-100"
                    }`}
                  >
                    <FaRocket
                      className={`w-4 h-4 ${
                        theme === "dark" ? "text-yellow-400" : "text-yellow-600"
                      }`}
                    />
                  </div>
                  Future Goals
                </h4>

                <ul className="space-y-3">
                  {[
                    "Become a full stack developer specializing in modern web technologies",
                    "Contribute to open-source projects impacting developers globally",
                    "Develop AI-integrated applications solving real-world problems",
                  ].map((goal, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaChevronRight
                        className={`w-3 h-3 mt-1 flex-shrink-0 ${
                          theme === "dark"
                            ? "text-indigo-400"
                            : "text-indigo-600"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {goal}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
