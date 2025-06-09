import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import { useState, useRef } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMedal,
  FaBook,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";
import { HiLightBulb, HiBadgeCheck, HiCube } from "react-icons/hi";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [selectedSchool, setSelectedSchool] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      major: "Computer Science & Engineering",
      institution: "Indraprastha Institute of Information Technology, Delhi",
      location: "New Delhi, India",
      duration: "2019 - 2023",
      gpa: "9.2/10",
      logo: "🎓", // Placeholder for a real image
      description:
        "Pursued a comprehensive curriculum in computer science with focus on software engineering, algorithms, and AI/ML technologies.",
      courses: [
        { name: "Data Structures & Algorithms", icon: HiCube },
        { name: "Web Development", icon: FaLaptopCode },
        { name: "Machine Learning", icon: HiBadgeCheck },
        { name: "Artificial Intelligence", icon: HiBadgeCheck },
        { name: "Database Systems", icon: HiCube },
        { name: "Computer Networks", icon: HiCube },
      ],
      achievements: [
        "Dean's List for academic excellence throughout all 4 years",
        "Best Project Award for senior year capstone project",
        "1st place in Annual Hackathon 2022 amongst 50+ teams",
        "Selected for special AI research program with faculty mentorship",
      ],
      projects: [
        {
          name: "AI-Powered Recommendation System",
          description:
            "Built a collaborative filtering system using deep learning techniques to provide personalized product recommendations with 92% accuracy.",
        },
        {
          name: "Distributed Database System",
          description:
            "Created a fault-tolerant distributed database with optimized query processing and transaction management.",
        },
        {
          name: "Secure File Transfer Protocol",
          description:
            "Implemented end-to-end encryption for secure file transfers with authentication and integrity verification.",
        },
      ],
      skills: [
        "C++",
        "Python",
        "JavaScript",
        "React",
        "Node.js",
        "TensorFlow",
        "SQL",
      ],
      color: "blue",
    },
    {
      id: 2,
      degree: "High School",
      major: "Science & Mathematics",
      institution: "Delhi Public School",
      location: "New Delhi, India",
      duration: "2017 - 2019",
      gpa: "95%",
      logo: "🏫", // Placeholder for a real image
      description:
        "Focused on science and mathematics track with advanced coursework in computer science and physics.",
      courses: [
        { name: "Physics", icon: HiLightBulb },
        { name: "Mathematics", icon: HiCube },
        { name: "Computer Science", icon: FaLaptopCode },
        { name: "Chemistry", icon: HiBadgeCheck },
      ],
      achievements: [
        "School topper in Computer Science with 98% marks",
        "Science Olympiad national level finalist",
        "Winner of inter-school mathematics competition",
      ],
      projects: [
        {
          name: "Renewable Energy Demonstration",
          description:
            "Built a working model of solar and wind energy integration for the science exhibition.",
        },
        {
          name: "Basic Calculator Application",
          description:
            "Developed a multi-function calculator using basic programming concepts.",
        },
      ],
      skills: ["Java", "HTML/CSS", "Problem Solving", "Critical Thinking"],
      color: "purple",
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: FaGraduationCap },
    { id: "courses", label: "Courses", icon: FaBook },
    { id: "achievements", label: "Achievements", icon: FaMedal },
    { id: "projects", label: "Projects", icon: HiLightBulb },
  ];

  // Animation variants
  // Animation variants are applied directly in the component

  return (
    <section
      id="education"
      className={`section relative py-24 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-slate-50 text-gray-800"
      }`}
    >
      {/* Glass morphism background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-500 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-56 w-56 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute left-2/3 top-1/3 h-72 w-72 rounded-full bg-teal-500 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Educational{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400 bg-clip-text text-transparent">
              Background
            </span>
          </h2>
          <p
            className={`mx-auto max-w-2xl text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            The academic foundation that shaped my technical expertise and
            problem-solving approach
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* School selection tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-10 flex flex-wrap justify-center gap-4"
          >
            {educationData.map((school, index) => (
              <motion.button
                key={school.id}
                onClick={() => setSelectedSchool(index)}
                animate={
                  selectedSchool === index ? { scale: 1.05 } : { scale: 1 }
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`relative overflow-hidden rounded-xl px-8 py-3 font-medium transition-all ${
                  selectedSchool === index
                    ? theme === "dark"
                      ? "bg-gradient-to-r from-blue-700 to-purple-700 text-white shadow-lg shadow-blue-900/20"
                      : "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20"
                    : theme === "dark"
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow"
                }`}
              >
                <span className="relative z-10">{school.degree}</span>
                {selectedSchool === index && (
                  <motion.div
                    layoutId="education-tab-highlight"
                    className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-sm"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Education card */}
          <motion.div
            key={`school-${selectedSchool}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`relative mx-auto overflow-hidden rounded-2xl ${
              theme === "dark"
                ? "bg-gray-800/80 backdrop-blur-sm"
                : "bg-white/90 backdrop-blur-sm"
            } p-1 shadow-xl shadow-blue-900/5`}
          >
            {/* Accent border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600 via-purple-500 to-teal-400 opacity-80"></div>

            {/* Inner content */}
            <div
              className={`relative rounded-xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } p-6 md:p-8`}
            >
              <div className="grid gap-8 md:grid-cols-3">
                {/* School info */}
                <div className="md:col-span-1">
                  <div className="mb-6 flex items-center space-x-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        theme === "dark" ? "bg-blue-900/30" : "bg-blue-50"
                      } text-2xl font-bold text-blue-600`}
                    >
                      {educationData[selectedSchool].logo}
                    </div>
                    <h3 className="text-xl font-bold md:text-2xl">
                      {educationData[selectedSchool].institution}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div
                      className={`rounded-lg ${
                        theme === "dark" ? "bg-gray-700/50" : "bg-gray-50"
                      } p-4`}
                    >
                      <div className="mb-3 flex items-center space-x-3">
                        <FaGraduationCap className="text-blue-500" />
                        <span className="font-semibold">
                          {educationData[selectedSchool].degree} in{" "}
                          {educationData[selectedSchool].major}
                        </span>
                      </div>
                      <div className="mb-3 flex items-center space-x-3">
                        <FaCalendarAlt className="text-blue-500" />
                        <span>{educationData[selectedSchool].duration}</span>
                      </div>
                      <div className="mb-3 flex items-center space-x-3">
                        <FaMapMarkerAlt className="text-blue-500" />
                        <span>{educationData[selectedSchool].location}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FaMedal className="text-blue-500" />
                        <span>
                          GPA:{" "}
                          <span className="font-semibold">
                            {educationData[selectedSchool].gpa}
                          </span>
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 font-bold">Description</h4>
                      <p
                        className={
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }
                      >
                        {educationData[selectedSchool].description}
                      </p>
                    </div>

                    {educationData[selectedSchool].skills && (
                      <div>
                        <h4 className="mb-2 font-bold">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {educationData[selectedSchool].skills.map(
                            (skill, i) => (
                              <span
                                key={i}
                                className={`inline-block rounded-full px-3 py-1 text-sm ${
                                  theme === "dark"
                                    ? "bg-blue-900/30 text-blue-300"
                                    : "bg-blue-50 text-blue-700"
                                }`}
                              >
                                {skill}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Details tabs */}
                <div className="md:col-span-2">
                  <div className="mb-6 flex border-b border-gray-200 dark:border-gray-700">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative mr-4 flex items-center space-x-2 pb-4 pt-2 text-sm font-medium transition-colors md:text-base ${
                          activeTab === tab.id
                            ? theme === "dark"
                              ? "text-blue-400"
                              : "text-blue-600"
                            : theme === "dark"
                            ? "text-gray-400 hover:text-gray-300"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        <tab.icon />
                        <span>{tab.label}</span>
                        {activeTab === tab.id && (
                          <motion.div
                            layoutId="tab-indicator"
                            className="absolute -bottom-px left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Tab content */}
                  <div className="h-[400px] overflow-y-auto pr-2">
                    {activeTab === "overview" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <h3 className="mb-3 text-xl font-bold">
                            Program Overview
                          </h3>
                          <p>{educationData[selectedSchool].description}</p>
                        </div>

                        <div>
                          <h3 className="mb-3 text-xl font-bold">
                            Highlight Achievements
                          </h3>
                          <ul className="list-inside list-disc space-y-2">
                            {educationData[selectedSchool].achievements
                              .slice(0, 2)
                              .map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="mb-3 text-xl font-bold">
                            Featured Courses
                          </h3>
                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {educationData[selectedSchool].courses
                              .slice(0, 4)
                              .map((course, i) => (
                                <div
                                  key={i}
                                  className={`flex items-center gap-2 rounded-lg p-2 ${
                                    theme === "dark"
                                      ? "bg-gray-700/50"
                                      : "bg-gray-50"
                                  }`}
                                >
                                  <course.icon className="text-blue-500" />
                                  <span>{course.name}</span>
                                </div>
                              ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "courses" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <h3 className="mb-4 text-xl font-bold">
                          Course Curriculum
                        </h3>
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                          {educationData[selectedSchool].courses.map(
                            (course, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`flex items-center gap-3 rounded-lg p-3 ${
                                  theme === "dark"
                                    ? "bg-gray-700/50"
                                    : "bg-gray-50"
                                }`}
                              >
                                <div
                                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                                    theme === "dark"
                                      ? "bg-blue-900/30"
                                      : "bg-blue-100"
                                  }`}
                                >
                                  <course.icon className="text-blue-500" />
                                </div>
                                <span className="font-medium">
                                  {course.name}
                                </span>
                              </motion.div>
                            )
                          )}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "achievements" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <h3 className="mb-4 text-xl font-bold">
                          Academic Achievements
                        </h3>
                        <div className="space-y-4">
                          {educationData[selectedSchool].achievements.map(
                            (achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`rounded-lg p-4 ${
                                  theme === "dark"
                                    ? "bg-gray-700/50"
                                    : "bg-gray-50"
                                }`}
                              >
                                <div className="flex items-start">
                                  <div
                                    className={`mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${
                                      theme === "dark"
                                        ? "bg-purple-900/50"
                                        : "bg-purple-100"
                                    }`}
                                  >
                                    <FaMedal className="text-purple-500" />
                                  </div>
                                  <p>{achievement}</p>
                                </div>
                              </motion.div>
                            )
                          )}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "projects" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <h3 className="mb-4 text-xl font-bold">
                          Academic Projects
                        </h3>
                        <div className="space-y-6">
                          {educationData[selectedSchool].projects.map(
                            (project, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`overflow-hidden rounded-lg ${
                                  theme === "dark"
                                    ? "bg-gray-700/50"
                                    : "bg-gray-50"
                                }`}
                              >
                                <div
                                  className={`w-full p-4 ${
                                    theme === "dark"
                                      ? "bg-gray-700"
                                      : "bg-gray-100"
                                  }`}
                                >
                                  <div className="flex items-center">
                                    <HiLightBulb className="mr-2 text-amber-500" />
                                    <h4 className="font-bold">
                                      {project.name}
                                    </h4>
                                  </div>
                                </div>
                                <div className="p-4">
                                  <p>{project.description}</p>
                                </div>
                              </motion.div>
                            )
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
