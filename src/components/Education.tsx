import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useTheme();

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

                    <div
                      className={`card-gradient p-6 rounded-xl flex-grow ${
                        theme === "dark" ? "bg-gray-900" : "bg-white"
                      } shadow-lg`}
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
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
