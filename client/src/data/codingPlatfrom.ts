import {
  SiCodechef,
  SiGeeksforgeeks,
  SiLeetcode,
  SiCodeforces,
} from "react-icons/si";


const codingData = {
  leetcode: {
    name: "LeetCode",
    icon: SiLeetcode,
    iconColor: "#FFA116",
    url: "https://leetcode.com/",
    rating: 1570,
    topPercentage: 27.7,
    problemsSolved: {
      total: 228,
      easy: 109,
      medium: 115,
      hard: 4,
    },
    rank: "Top 27.7%",
    leetcodeAchievement: `Solved ${228}+ problems across all difficulty levels`,
  },
  codechef: {
    name: "CodeChef",
    icon: SiCodechef,
    iconColor: "#5B4638",
    url: "https://www.codechef.com/",
    rating: 1270,
    topPercentage: null,
    problemsSolved: {
      total: 25,
      easy: 14,
      medium: 8,
      hard: 3,
    },
    rank: "2★ Coder (Division 3)",
    leetcodeAchievement: "Global Rank 1238 in CodeChef Starters 186",
  },
  geeksforgeeks: {
    name: "GeeksForGeeks",
    icon: SiGeeksforgeeks,
    iconColor: "#2F8D46",
    url: "https://www.geeksforgeeks.org/",
    rating: null,
    topPercentage: null,
    problemsSolved: {
      total: 70,
      easy: 32,
      medium: 30,
      hard: 8,
    },
    rank: "#1455",
    leetcodeAchievement: "35+ day streak in GfG 160 challenge",
  },
  codeforces: {
    name: "Codeforces",
    icon: SiCodeforces,
    iconColor: "#1F8ACB",
    url: "https://codeforces.com/",
    rating: 900,
    topPercentage: null,
    problemsSolved: {
      total: 10,
      unrated: 2,
      easy: 2,
      medium: 0,
      hard: 0,
    },
    rank: "Newbie",
    leetcodeAchievement: "Participated in 3+ competitive contests",
  },
};

export default codingData;
