import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import SectionContainer from "./SectionContainer";
import { FaCode, FaUserGraduate, FaDownload, FaEnvelope } from "react-icons/fa";
import * as personalDataModule from "../data/personalData";

const About = () => {
  const { theme } = useTheme();

  // Import data from personalData.ts
  const personalInfo = personalDataModule.personalInfo;
  const resumeInfo = personalDataModule.resumeInfo;
  const codeStats = personalDataModule.codeStats;
  const codingSkills = personalDataModule.codingSkills;

  // Use skills data from centralized store
  const skills = [
    codingSkills.webDevelopment,
    codingSkills.dataStructures,
    codingSkills.algorithms,
  ];

  return (
    <SectionContainer id="about">
      <div className="px-4">
        {/* Get to know me label */}
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
              Get to know me
            </span>
          </div>
        </div>

        {/* About Me heading */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            About{" "}
            <span
              className={
                theme === "dark" ? "text-indigo-400" : "text-indigo-600"
              }
            >
              Me
            </span>
          </h2>
          <div
            className={`w-20 h-1 mx-auto mt-4 ${
              theme === "dark" ? "bg-indigo-500" : "bg-indigo-500"
            }`}
          ></div>
        </div>

        {/* Main content grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - Image */}
          <div className="md:col-span-1">
            <div className="max-w-sm mx-auto">
              {/* Profile image */}
              <div className="relative bg-indigo-900/20 rounded-3xl overflow-hidden">
                <img
                  src="/yuvraj2.png"
                  alt="Yuvraj Mehta"
                  className="w-full h-auto"
                />

                {/* Top badge */}
                <div className="absolute top-4 right-4 bg-gray-900/80 rounded-xl px-3 py-2 flex items-center gap-2">
                  <div className="p-1.5 bg-indigo-900/80 rounded-full">
                    <FaUserGraduate className="text-indigo-400" size={14} />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">
                      {codeStats.leetcodeRank}
                    </div>
                    <div className="text-xs text-gray-400">LeetCode Global</div>
                  </div>
                </div>

                {/* Bottom badge */}
                <div className="absolute bottom-4 left-4 bg-gray-900/80 rounded-xl px-3 py-2 flex items-center gap-2">
                  <div className="p-1.5 bg-indigo-900/80 rounded-full">
                    <FaCode className="text-indigo-400" size={14} />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Coding</div>
                    <div className="text-xs text-gray-400">
                      {personalInfo.yearsOfCoding}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-3 mt-6">
                <a
                  href="#contact"
                  className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <FaEnvelope size={15} />
                  Get In Touch
                </a>
                <a
                  href={resumeInfo.downloadPath}
                  download={resumeInfo.downloadName}
                  className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 border ${
                    theme === "dark"
                      ? "border-indigo-600/60 text-indigo-400 hover:bg-indigo-600/10"
                      : "border-indigo-600/60 text-indigo-600 hover:bg-indigo-600/10"
                  }`}
                >
                  <FaDownload size={15} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="md:col-span-2">
            {/* Title */}
            <h3
              className={`text-3xl font-bold mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <span
                className={
                  theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                }
              >
                {personalInfo.title}
              </span>{" "}
              & CS Student
            </h3>

            {/* Bio paragraphs */}
            <div className="mb-8 space-y-4">
              <p className={theme === "dark" ? "text-white" : "text-gray-700"}>
                {personalInfo.aboutBio.first}
                <span
                  className={
                    theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                  }
                >
                  {personalInfo.aboutBio.firstHighlight}
                </span>{" "}
                {personalInfo.aboutBio.firstPart}
              </p>
              <p className={theme === "dark" ? "text-white" : "text-gray-700"}>
                {personalInfo.aboutBio.second}
                <span
                  className={
                    theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                  }
                >
                  {personalInfo.aboutBio.secondHighlight}
                </span>
                {personalInfo.aboutBio.secondPart}
              </p>
            </div>

            {/* Technical expertise section */}
            <div
              className={`rounded-xl p-5 ${
                theme === "dark" ? "bg-gray-800/50" : "bg-white/80 shadow-md"
              }`}
            >
              <div className="flex items-center gap-2 mb-5">
                <div
                  className={`p-1.5 rounded-full ${
                    theme === "dark" ? "bg-indigo-900/40" : "bg-indigo-100"
                  }`}
                >
                  <FaCode
                    size={16}
                    className={
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }
                  />
                </div>
                <h4
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Technical Expertise
                </h4>
              </div>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span
                        className={
                          theme === "dark" ? "text-white" : "text-gray-700"
                        }
                      >
                        {skill.name}
                      </span>
                      <span
                        className={
                          theme === "dark"
                            ? "text-indigo-400"
                            : "text-indigo-600"
                        }
                      >
                        {skill.label}
                      </span>
                    </div>
                    <div
                      className={`w-full h-2 rounded-full ${
                        theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="h-full rounded-full bg-indigo-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
