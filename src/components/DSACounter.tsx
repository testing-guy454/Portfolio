import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import {
  SiLeetcode,
  SiCodechef,
  SiGeeksforgeeks,
} from "react-icons/si";

interface PlatformStats {
  name: string;
  count: number;
  icon: JSX.Element;
  color: string;
}

const DSACounter = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Define the platforms and the number of questions solved on each
  const platforms: PlatformStats[] = [
    {
      name: "LeetCode",
      count: 183,
      icon: <SiLeetcode />,
      color: "text-orange-500",
    },
    {
      name: "CodeChef",
      count: 12,
      icon: <SiCodechef />,
      color: "text-brown-500",
    },
    {
      name: "GeeksForGeeks",
      count: 70,
      icon: <SiGeeksforgeeks />,
      color: "text-green-600",
    },
    {
      name: "Codeforces",
      count: 10,
      icon: <FaCode className="text-blue-500" />,
      color: "text-blue-500",
    }
  ];

  // Total number of problems solved
  const totalCount = platforms.reduce(
    (acc, platform) => acc + platform.count,
    0
  );

  // For each platform, create a counter that will count up from 0 to the target number
  const [counters, setCounters] = useState<number[]>(platforms.map(() => 0));
  const [totalCounter, setTotalCounter] = useState(0);
  const counterInitiated = useRef(false);

  useEffect(() => {
    // Only start counting when the element is in view and hasn't been counted yet
    if (inView && !counterInitiated.current) {
      counterInitiated.current = true;

      // Duration for the count animation in milliseconds
      const duration = 2000;
      const frameRate = 60;
      const framesCount = (duration / 1000) * frameRate;

      // For each platform, create a counter animation
      platforms.forEach((platform, index) => {
        const increment = platform.count / framesCount;
        let currentCount = 0;

        const timer = setInterval(() => {
          currentCount += increment;

          if (currentCount >= platform.count) {
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = platform.count;
              return newCounters;
            });
            clearInterval(timer);
          } else {
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(currentCount);
              return newCounters;
            });
          }
        }, 1000 / frameRate);
      });

      // Create a counter animation for the total
      let currentTotalCount = 0;
      const totalIncrement = totalCount / framesCount;

      const totalTimer = setInterval(() => {
        currentTotalCount += totalIncrement;

        if (currentTotalCount >= totalCount) {
          setTotalCounter(totalCount);
          clearInterval(totalTimer);
        } else {
          setTotalCounter(Math.floor(currentTotalCount));
        }
      }, 1000 / frameRate);
    }
  }, [inView, platforms, totalCount]);

  // Full-size component
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`w-full rounded-2xl p-6 ${
        theme === "dark"
          ? "bg-gray-800/50 border border-gray-700"
          : "bg-white border border-gray-100 shadow-card"
      }`}
    >
      <div className="flex items-center mb-4">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
            theme === "dark"
              ? "bg-gradient-to-br from-indigo-700 to-purple-700"
              : "bg-gradient-to-br from-indigo-500 to-purple-500"
          }`}
        >
          <FaLaptopCode className="text-white text-xl" />
        </div>
        <h3
          className={`text-xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          DSA Problem Solving
        </h3>
      </div>

      {/* Total count badge */}
      <div className="flex justify-center mb-6">
        <div
          className={`inline-flex items-center px-4 py-2 rounded-full ${
            theme === "dark"
              ? "bg-indigo-900/30 text-indigo-400"
              : "bg-indigo-100 text-indigo-800"
          }`}
        >
          <FaCode className="mr-2" />
          <span className="font-bold text-lg">{totalCounter}</span>
          <span className="ml-2">Total Problems Solved</span>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {platforms.map((platform, index) => (
          <div
            key={platform.name}
            className={`p-4 rounded-xl ${
              theme === "dark"
                ? "bg-gray-700/50 hover:bg-gray-700/70"
                : "bg-gray-50 hover:bg-gray-100"
            } transition-all duration-300`}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`text-2xl mb-2 ${platform.color}`}
                aria-hidden="true"
              >
                {platform.icon}
              </div>
              <div
                className={`text-2xl font-bold mb-1 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                {counters[index]}
              </div>
              <div
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {platform.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default DSACounter;
