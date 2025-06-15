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
  FaStar,
  FaUsers,
  FaRobot,
} from "react-icons/fa";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "0px 0px -10% 0px",
  });

  const { theme } = useTheme();

  // Enhanced professional experience data
  const experiences = [
    {
      role: "Technical Member",
      company: "Robotics Club, NIT Patna",
      period: "December 2023 - Present",
      location: "NIT Patna",
      description:
        "Organized and facilitated 3+ workshops on designing and building robotic bots. Led a team of 4 to build a combat-ready battle bot, achieving 4th place among 15+ teams at NIT Patna's tech fest. Directed a team of 3 in designing and developing a soccer bot for the annual tech fest, enhancing hands-on robotics and teamwork skills.",
      technologies: ["Arduino", "C++", "Mechanical Design", "Team Leadership"],
      highlights: [
        "4th place in tech fest",
        "3+ workshops organized",
        "Team of 4-7 members",
      ],
      status: "current",
      category: "technical",
    },
    {
      role: "Team Leader",
      company: "Hackathons (including Smart India Hackathon)",
      period: "2023",
      location: "NIT Patna & Remote",
      description:
        "Led teams in 3 major hackathons, including the prestigious Smart India Hackathon. Guided my team to qualify at the internal NIT Patna hackathon and advance to the national level. Oversaw all phases from ideation to development and presentation, ensuring effective collaboration and timely delivery of innovative solutions.",
      technologies: [
        "Problem Solving",
        "Team Management",
        "Presentation",
        "Innovation",
      ],
      highlights: [
        "National level qualification",
        "3 major hackathons",
        "End-to-end project management",
      ],
      status: "completed",
      category: "leadership",
    },
  ];

  // Enhanced achievements data
  const achievements = [
    {
      title: "Winner - Model United Nations",
      year: "2023",
      description:
        "Represented the Republic of Poland at NIT Patna's Model United Nations. Earned the Best Delegate award for exceptional debate skills and impactful resolutions.",
      icon: <FaTrophy className="w-5 h-5 text-yellow-600" />,
      featured: true,
      color: "yellow",
      category: "competition",
    },
    {
      title: "Technical Member",
      year: "2023 - Present",
      description:
        "Active member of the Robotics Club, led team building combat and soccer bots, organized workshops.",
      icon: <FaRobot className="w-5 h-5 text-blue-600" />,
      featured: true,
      color: "blue",
      category: "technical",
    },
    {
      title: "Class Representative",
      year: "2023 - 2024",
      description:
        "Coordinated between faculty and students, organized department events.",
      icon: <FaUserTie className="w-5 h-5 text-purple-600" />,
      featured: false,
      color: "purple",
      category: "leadership",
    },
    {
      title: "Bronze Medal - NIT Patna Intramurals",
      year: "2023",
      description: "Won Bronze in 50m Hurdles at the university sports event.",
      icon: <FaMedal className="w-5 h-5 text-amber-600" />,
      featured: false,
      color: "amber",
      category: "sports",
    },
  ];

  // Enhanced Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardHoverAnimation = {
    rest: {
      scale: 1,
      y: 0,
      rotateY: 0,
      boxShadow: "none",
    },
    hover: {
      scale: 1.03,
      y: -8,
      rotateY: 2,
      boxShadow: "none",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const pulseVariants = {
    rest: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  // Enhanced Helper functions
  const getColorClasses = (color: string) => {
    const colorMap = {
      yellow: {
        icon: "text-yellow-600",
        bg:
          theme === "dark"
            ? "bg-gradient-to-br from-yellow-900/40 to-amber-900/30"
            : "bg-gradient-to-br from-yellow-50 to-amber-50",
        border: theme === "dark" ? "border-yellow-500/40" : "border-yellow-200",
        glow: "",
      },
      blue: {
        icon: "text-blue-600",
        bg:
          theme === "dark"
            ? "bg-gradient-to-br from-blue-900/40 to-indigo-900/30"
            : "bg-gradient-to-br from-blue-50 to-indigo-50",
        border: theme === "dark" ? "border-blue-500/40" : "border-blue-200",
        glow: "",
      },
      purple: {
        icon: "text-purple-600",
        bg:
          theme === "dark"
            ? "bg-gradient-to-br from-purple-900/40 to-pink-900/30"
            : "bg-gradient-to-br from-purple-50 to-pink-50",
        border: theme === "dark" ? "border-purple-500/40" : "border-purple-200",
        glow: "",
      },
      amber: {
        icon: "text-amber-600",
        bg:
          theme === "dark"
            ? "bg-gradient-to-br from-amber-900/40 to-orange-900/30"
            : "bg-gradient-to-br from-amber-50 to-orange-50",
        border: theme === "dark" ? "border-amber-500/40" : "border-amber-200",
        glow: "",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
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
      {/* Enhanced Background decoration */}
      <div
        className={`absolute top-40 right-0 w-96 h-96 rounded-full blur-3xl ${
          theme === "dark" ? "bg-indigo-600/8" : "bg-primary/8"
        } animate-pulse`}
      ></div>
      <div
        className={`absolute bottom-20 left-20 w-64 h-64 rounded-full blur-3xl ${
          theme === "dark" ? "bg-purple-600/8" : "bg-accent/8"
        } animate-pulse`}
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-2xl ${
          theme === "dark" ? "bg-blue-600/5" : "bg-secondary/5"
        } animate-pulse`}
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`px-6 py-3 rounded-full font-medium text-sm ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-900/40 to-purple-900/40 text-indigo-400 border border-indigo-500/20"
                : "bg-gradient-to-r from-primary/15 to-secondary/15 text-primary border border-primary/20"
            } backdrop-blur-sm`}
          >
            Professional Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`text-4xl md:text-6xl font-bold mt-6 font-heading ${
              theme === "dark" ? "text-white" : ""
            } leading-tight`}
          >
            Experience &{" "}
            <span
              className={`${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
                  : "text-gradient"
              }`}
            >
              Achievements
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className={`h-1.5 mx-auto mt-8 rounded-full ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
                : "bg-gradient-to-r from-primary via-secondary to-accent"
            }`}
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className={`max-w-3xl mx-auto mt-6 text-lg leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            My professional journey showcasing leadership roles, technical
            contributions, and notable achievements in competitive environments.
          </motion.p>
        </motion.div>

        {/* Main Content Grid - 2/3 for Experience, 1/3 for Achievements */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Professional Experience Cards (Left - 2/3) */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div className="mb-10">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className={`text-3xl font-bold flex items-center gap-4 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                <motion.span
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className={`p-4 rounded-2xl ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-indigo-900/50 to-purple-900/40 border border-indigo-500/20"
                      : "bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200"
                  } backdrop-blur-sm`}
                >
                  <FaBriefcase
                    className={
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }
                  />
                </motion.span>
                Professional Experience
              </motion.h3>
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: 64 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className={`h-1.5 mt-4 rounded-full ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    : "bg-gradient-to-r from-primary/80 to-accent/80"
                }`}
              ></motion.div>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="rest"
                  whileHover="hover"
                  className={`group rounded-3xl overflow-hidden border backdrop-blur-sm ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-700/50 hover:border-gray-600/60"
                      : "bg-gradient-to-br from-white/95 to-gray-50/95 border-gray-200/60 hover:border-gray-300/80"
                  } transition-all duration-300`}
                >
                  <motion.div
                    variants={cardHoverAnimation}
                    className="p-8 relative"
                  >
                    {/* Decorative corner accent */}
                    <div
                      className={`absolute top-0 right-0 w-20 h-20 ${
                        theme === "dark"
                          ? "bg-gradient-to-bl from-indigo-600/20 via-purple-600/10 to-transparent"
                          : "bg-gradient-to-bl from-primary/15 via-secondary/10 to-transparent"
                      } rounded-tr-3xl`}
                    ></div>

                    {/* Enhanced Status and Category Badges */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {exp.status === "current" && (
                        <motion.div
                          animate="pulse"
                          variants={pulseVariants}
                          className={`px-4 py-2 rounded-full text-sm font-medium border ${
                            theme === "dark"
                              ? "bg-gradient-to-r from-green-900/40 to-emerald-900/30 text-green-400 border-green-500/40"
                              : "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-green-200"
                          } flex items-center gap-2 backdrop-blur-sm`}
                        >
                          <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2.5 h-2.5 rounded-full bg-green-500"
                          ></motion.span>
                          Currently Active
                        </motion.div>
                      )}
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`px-4 py-2 rounded-full text-sm font-medium border ${
                          exp.category === "technical"
                            ? theme === "dark"
                              ? "bg-gradient-to-r from-blue-900/40 to-indigo-900/30 text-blue-400 border-blue-500/40"
                              : "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200"
                            : theme === "dark"
                            ? "bg-gradient-to-r from-purple-900/40 to-pink-900/30 text-purple-400 border-purple-500/40"
                            : "bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-purple-200"
                        } flex items-center gap-2 backdrop-blur-sm transition-all duration-200`}
                      >
                        {exp.category === "technical" ? (
                          <FaCode className="w-3.5 h-3.5" />
                        ) : (
                          <FaUsers className="w-3.5 h-3.5" />
                        )}
                        {exp.category === "technical"
                          ? "Technical"
                          : "Leadership"}
                      </motion.div>
                    </div>

                    {/* Enhanced Header */}
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-6">
                      <div className="flex-1">
                        <motion.h4
                          whileHover={{ x: 5 }}
                          className={`text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${
                            theme === "dark"
                              ? "text-white group-hover:from-indigo-400 group-hover:to-purple-400"
                              : "text-gray-900 group-hover:from-primary group-hover:to-secondary"
                          } transition-all duration-300 leading-tight`}
                        >
                          {exp.role}
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
                            {exp.company}
                          </motion.div>
                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            className={`flex items-center gap-2 px-3 py-1 rounded-lg ${
                              theme === "dark"
                                ? "text-gray-400 hover:text-gray-300"
                                : "text-gray-600 hover:text-gray-700"
                            } transition-colors duration-200`}
                          >
                            <FaMapMarkerAlt className="w-3.5 h-3.5" />
                            {exp.location}
                          </motion.span>
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
                        {exp.period}
                      </motion.span>
                    </div>

                    {/* Enhanced Description */}
                    <div
                      className={`mb-8 p-4 rounded-xl ${
                        theme === "dark"
                          ? "bg-gray-800/50 border border-gray-700/30"
                          : "bg-gray-50/80 border border-gray-200/50"
                      } backdrop-blur-sm`}
                    >
                      <p
                        className={`text-base leading-relaxed ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {exp.description}
                      </p>
                    </div>

                    {/* Enhanced Highlights */}
                    <div className="mb-8">
                      <h5
                        className={`text-base font-bold mb-4 flex items-center gap-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-800"
                        }`}
                      >
                        <FaStar className="w-4 h-4 text-yellow-500" />
                        Key Highlights
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {exp.highlights.map((highlight, hIndex) => (
                          <motion.span
                            key={hIndex}
                            whileHover={{ scale: 1.05, y: -3 }}
                            className={`px-4 py-2 text-sm rounded-full border ${
                              theme === "dark"
                                ? "bg-gradient-to-r from-gray-700/60 to-gray-800/60 text-gray-300 border-gray-600/60 hover:border-gray-500/80"
                                : "bg-gradient-to-r from-gray-50 to-white text-gray-700 border-gray-200 hover:border-gray-300"
                            } flex items-center gap-2 backdrop-blur-sm transition-all duration-200`}
                          >
                            <FaStar className="w-3 h-3 text-yellow-500" />
                            {highlight}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Technologies */}
                    <div>
                      <h5
                        className={`text-base font-bold mb-4 flex items-center gap-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-800"
                        }`}
                      >
                        <FaCode className="w-4 h-4 text-blue-500" />
                        Technologies & Skills
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className={`px-4 py-2 text-sm rounded-xl font-medium border ${
                              theme === "dark"
                                ? "bg-gradient-to-r from-indigo-900/50 to-blue-900/40 text-indigo-300 border-indigo-500/30 hover:border-indigo-400/50"
                                : "bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 border-indigo-200 hover:border-indigo-300"
                            } backdrop-blur-sm transition-all duration-200`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Achievements Sidebar (Right - 1/3) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-1 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-10"
            >
              <motion.h3
                className={`text-3xl font-bold flex items-center gap-4 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                <motion.span
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className={`p-4 rounded-2xl ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-amber-900/50 to-yellow-900/40 border border-amber-500/20"
                      : "bg-gradient-to-br from-amber-100 to-yellow-100 border border-amber-200"
                  } backdrop-blur-sm`}
                >
                  <FaTrophy className="text-amber-600" />
                </motion.span>
                Achievements
              </motion.h3>
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: 64 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className={`h-1.5 mt-4 rounded-full ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500"
                    : "bg-gradient-to-r from-amber-500/80 to-yellow-500/80"
                }`}
              ></motion.div>
            </motion.div>

            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const colorClasses = getColorClasses(achievement.color);
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="rest"
                    whileHover="hover"
                    className={`group rounded-3xl overflow-hidden border backdrop-blur-sm ${
                      theme === "dark"
                        ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-700/50 hover:border-gray-600/60"
                        : "bg-gradient-to-br from-white/95 to-gray-50/95 border-gray-200/60 hover:border-gray-300/80"
                    } transition-all duration-300`}
                  >
                    {/* Enhanced Featured badge */}
                    {achievement.featured && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.5 + index * 0.1,
                          type: "spring",
                        }}
                        className="absolute top-4 right-4 z-10"
                      >
                        <motion.div
                          animate="pulse"
                          variants={pulseVariants}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold border backdrop-blur-md ${
                            theme === "dark"
                              ? "bg-gradient-to-r from-indigo-900/60 to-purple-900/50 text-indigo-300 border-indigo-500/40"
                              : "bg-gradient-to-r from-indigo-100/80 to-purple-100/80 text-indigo-700 border-indigo-300/50"
                          } flex items-center gap-2`}
                        >
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <FaStar className="w-3 h-3 text-yellow-600" />
                          </motion.div>
                          Featured
                        </motion.div>
                      </motion.div>
                    )}

                    <motion.div
                      variants={cardHoverAnimation}
                      className="p-6 relative"
                    >
                      {/* Decorative corner accent */}
                      <div
                        className={`absolute top-0 right-0 w-16 h-16 ${
                          theme === "dark"
                            ? "bg-gradient-to-bl from-amber-600/15 via-yellow-600/10 to-transparent"
                            : "bg-gradient-to-bl from-amber-400/15 via-yellow-400/10 to-transparent"
                        } rounded-tr-3xl`}
                      ></div>

                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`p-4 rounded-2xl ${colorClasses.bg} border ${colorClasses.border} backdrop-blur-sm`}
                        >
                          <div className={`${colorClasses.icon} text-lg`}>
                            {achievement.icon}
                          </div>
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                            <motion.h4
                              whileHover={{ x: 3 }}
                              className={`font-bold text-base leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${
                                theme === "dark"
                                  ? "text-white group-hover:from-amber-400 group-hover:to-yellow-400"
                                  : "text-gray-900 group-hover:from-amber-600 group-hover:to-yellow-600"
                              } transition-all duration-300`}
                            >
                              {achievement.title}
                            </motion.h4>
                            <motion.span
                              whileHover={{ scale: 1.05 }}
                              className={`text-xs px-3 py-1.5 rounded-full font-medium border ${
                                theme === "dark"
                                  ? "bg-gradient-to-r from-indigo-900/50 to-blue-900/40 text-indigo-300 border-indigo-500/30"
                                  : "bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 border-indigo-200"
                              } backdrop-blur-sm transition-all duration-200`}
                            >
                              {achievement.year}
                            </motion.span>
                          </div>
                          <div
                            className={`p-3 rounded-xl mb-3 ${
                              theme === "dark"
                                ? "bg-gray-800/50 border border-gray-700/30"
                                : "bg-gray-50/80 border border-gray-200/50"
                            } backdrop-blur-sm`}
                          >
                            <p
                              className={`text-sm leading-relaxed ${
                                theme === "dark"
                                  ? "text-gray-300"
                                  : "text-gray-600"
                              }`}
                            >
                              {achievement.description}
                            </p>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium inline-flex items-center gap-2 ${
                              theme === "dark"
                                ? "bg-gray-700/50 text-gray-400 border border-gray-600/30"
                                : "bg-gray-100/80 text-gray-600 border border-gray-200/50"
                            } backdrop-blur-sm transition-all duration-200`}
                          >
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400"></span>
                            {achievement.category}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
