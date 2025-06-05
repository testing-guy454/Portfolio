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
} from "react-icons/fa";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useTheme();

  // Professional experience data
  const experiences = [
    {
      role: "Technical Member",
      company: "Robotics Club, NIT Patna",
      period: "December 2023 - Present",
      location: "NIT Patna",
      description:
        "Organized and facilitated 3+ workshops on designing and building robotic bots. Led a team of 4 to build a combat-ready battle bot, achieving 4th place among 15+ teams at NIT Patna’s tech fest. Directed a team of 3 in designing and developing a soccer bot for the annual tech fest, enhancing hands-on robotics and teamwork skills.",
      technologies: [],
    },
    {
      role: "Team Leader",
      company: "Hackathons (including Smart India Hackathon)",
      period: "2023",
      location: "NIT Patna & Remote",
      description:
        "Led teams in 3 major hackathons, including the prestigious Smart India Hackathon. Guided my team to qualify at the internal NIT Patna hackathon and advance to the national level. Oversaw all phases from ideation to development and presentation, ensuring effective collaboration and timely delivery of innovative solutions.",
      technologies: [],
    },
  ];

  // Notable achievements data
  const achievements = [
    {
      title: "Winner - Model United Nations",
      year: "2023",
      description:
        "Represented the Republic of Poland at NIT Patna’s Model United Nations. Earned the Best Delegate award for exceptional debate skills and impactful resolutions.",
      icon: (
        <FaTrophy
          className={theme === "dark" ? "text-yellow-400" : "text-yellow-600"}
        />
      ),
    },
    {
      title: "Technical Member",
      year: "2023 - Present",
      description:
        "Active member of the Robotics Club, led team building combat and soccer bots, organized workshops.",
      icon: (
        <FaCode
          className={theme === "dark" ? "text-blue-400" : "text-blue-600"}
        />
      ),
    },
    {
      title: "Class Representative",
      year: "2023 - 2024",
      description:
        "Coordinated between faculty and students, organized department events.",
      icon: (
        <FaUserTie
          className={theme === "dark" ? "text-purple-400" : "text-purple-600"}
        />
      ),
    },
    {
      title: "Bronze Medal - NIT Patna Intramurals",
      year: "2023",
      description: "Won Bronze in 50m Hurdles at the university sports event.",
      icon: (
        <FaMedal
          className={theme === "dark" ? "text-amber-400" : "text-amber-600"}
        />
      ),
    },
  ];

  // Certifications section removed as it's not being used

  return (
    <section
      id="experience"
      className={`section relative overflow-hidden py-24 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
      ref={ref}
    >
      {/* Background elements */}
      <div
        className={`absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 select-none pointer-events-none ${
          theme === "dark" ? "opacity-5" : ""
        }`}
      >
        <div className="absolute top-24 left-24 w-96 h-96 rounded-full bg-indigo-200 mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-24 right-24 w-96 h-96 rounded-full bg-blue-200 mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span
            className={`px-4 py-2 rounded-full font-medium text-sm inline-flex items-center gap-2 ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-900/30 to-blue-900/30 text-indigo-400"
                : "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Professional Journey
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold mt-4 font-heading ${
              theme === "dark" ? "text-white" : ""
            }`}
          >
            Experience &{" "}
            <span
              className={`ml-2 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-400 to-blue-500 text-transparent bg-clip-text"
                  : "text-gradient"
              }`}
            >
              Achievements
            </span>
          </h2>
          <div
            className={`w-24 h-1 mx-auto mt-6 ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-600 to-blue-600"
                : "bg-gradient-to-r from-primary to-accent"
            }`}
          ></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Professional Experience Timeline (Left Column) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div
              className={`p-6 rounded-2xl ${
                theme === "dark"
                  ? "bg-gray-800/50 border border-gray-700/50"
                  : "bg-white shadow-lg border border-gray-100"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-6 flex items-center gap-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                <span
                  className={`p-2 rounded-full ${
                    theme === "dark" ? "bg-indigo-900/40" : "bg-indigo-100"
                  }`}
                >
                  <FaBriefcase
                    className={
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }
                  />
                </span>
                Professional Experience
              </h3>

              <div className="relative">
                {/* Timeline connector */}
                <div
                  className={`absolute left-5 top-0 bottom-0 w-0.5 ${
                    theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                  }`}
                ></div>

                {/* Timeline items */}
                <div className="space-y-10">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                      }
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="relative"
                    >
                      {/* Circle on timeline */}
                      <div
                        className={`absolute left-5 top-1.5 w-5 h-5 rounded-full border-4 transform -translate-x-1/2 ${
                          theme === "dark"
                            ? "border-gray-800 bg-indigo-500"
                            : "border-white bg-indigo-600"
                        }`}
                      ></div>

                      <div className="ml-10">
                        {/* Experience header */}
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
                          <h4
                            className={`text-lg font-bold ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {exp.role}
                          </h4>
                          <span
                            className={`text-sm flex items-center gap-1 ${
                              theme === "dark"
                                ? "text-indigo-400"
                                : "text-indigo-600"
                            }`}
                          >
                            <FaCalendarAlt className="text-xs" />
                            {exp.period}
                          </span>
                        </div>

                        {/* Company and location */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                          <div
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              theme === "dark"
                                ? "bg-indigo-900/30 text-indigo-400"
                                : "bg-indigo-100 text-indigo-700"
                            }`}
                          >
                            {exp.company}
                          </div>
                          <span
                            className={`flex items-center gap-1 text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-500"
                            }`}
                          >
                            <FaMapMarkerAlt />
                            {exp.location}
                          </span>
                        </div>

                        {/* Description */}
                        <p
                          className={`mb-4 ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {exp.description}
                        </p>

                        {/* Technology tags */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-2 py-1 text-xs rounded-md ${
                                theme === "dark"
                                  ? "bg-gray-700 text-gray-300"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements and Certifications (Right Column) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Notable Achievements Section */}
            <div
              className={`p-6 rounded-2xl ${
                theme === "dark"
                  ? "bg-gray-800/50 border border-gray-700/50"
                  : "bg-white shadow-lg border border-gray-100"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-6 flex items-center gap-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                <span
                  className={`p-2 rounded-full ${
                    theme === "dark" ? "bg-amber-900/40" : "bg-amber-100"
                  }`}
                >
                  <FaTrophy
                    className={
                      theme === "dark" ? "text-amber-400" : "text-amber-600"
                    }
                  />
                </span>
                Notable Achievements
              </h3>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className={`p-4 rounded-xl ${
                      theme === "dark"
                        ? "bg-gray-700/50 hover:bg-gray-700/80"
                        : "bg-gray-50 hover:bg-gray-100"
                    } transition-colors duration-200`}
                  >
                    <div className="flex gap-3">
                      <div
                        className={`p-3 rounded-lg ${
                          theme === "dark" ? "bg-gray-800" : "bg-white shadow"
                        }`}
                      >
                        {achievement.icon}
                      </div>
                      <div>
                        <div className="flex flex-wrap justify-between items-start gap-2">
                          <h4
                            className={`font-semibold ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {achievement.title}
                          </h4>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              theme === "dark"
                                ? "bg-indigo-900/30 text-indigo-300"
                                : "bg-indigo-100 text-indigo-700"
                            }`}
                          >
                            {achievement.year}
                          </span>
                        </div>
                        <p
                          className={`mt-2 text-sm ${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            {/* <div
              className={`p-6 rounded-2xl ${
                theme === "dark"
                  ? "bg-gray-800/50 border border-gray-700/50"
                  : "bg-white shadow-lg border border-gray-100"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-6 flex items-center gap-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                <span
                  className={`p-2 rounded-full ${
                    theme === "dark" ? "bg-blue-900/40" : "bg-blue-100"
                  }`}
                >
                  <FaCertificate
                    className={
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }
                  />
                </span>
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className={`p-4 rounded-xl border-l-4 ${
                      theme === "dark"
                        ? "bg-gray-700/30 border-l-blue-500"
                        : "bg-white border-l-blue-500 shadow-sm"
                    }`}
                  >
                    <div className="flex justify-between flex-wrap gap-2">
                      <h4
                        className={`font-medium ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {cert.name}
                      </h4>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {cert.date}
                      </span>
                    </div>
                    <div
                      className={`mt-1 text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {cert.provider} <span className="mx-2">•</span>{" "}
                      <span className="opacity-75">ID: {cert.credential}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div> */}

            {/* Future Goals Card */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className={`p-6 rounded-2xl border ${
                theme === "dark"
                  ? "border-indigo-800/30 bg-gradient-to-br from-indigo-900/20 to-blue-900/20"
                  : "border-indigo-100 bg-gradient-to-br from-indigo-50 to-blue-50"
              }`}
            >
              <h4
                className={`text-xl font-bold mb-4 flex items-center gap-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                <FaLightbulb
                  className={
                    theme === "dark" ? "text-yellow-400" : "text-yellow-600"
                  }
                />
                Future Career Goals
              </h4>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaChevronRight
                    className={`mt-1 ${
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  />
                  <span
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }
                  >
                    Become a full stack developer specializing in modern web
                    technologies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaChevronRight
                    className={`mt-1 ${
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  />
                  <span
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }
                  >
                    Contribute to open-source projects that impact thousands of
                    developers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaChevronRight
                    className={`mt-1 ${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                  <span
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }
                  >
                    Develop AI-integrated web applications that solve real-world
                    problems
                  </span>
                </li>
              </ul>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
