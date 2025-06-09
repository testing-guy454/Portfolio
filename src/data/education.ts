interface EducationTheme {
  iconBg: string;
  iconText: string;
  cardBg: string;
  cardText: string;
  badgeBg: string;
  badgeText: string;
}

interface EducationItem {
  level: string;
  title: string;
  institution: string;
  location: string;
  duration: string;
  details: string[];
  theme: EducationTheme;
  icon: string;
}

export const educationData: EducationItem[] = [
  {
    level: "Bachelor of Technology",
    title: "B.Tech in Computer Science and Engineering",
    institution: "National Institute of Technology, Patna",
    location: "Patna, Bihar",
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
    level: "Higher Secondary",
    title: "Class XII (CBSE)",
    institution: "Pragya Bharti Public School, Gaya",
    location: "Gaya, Bihar",
    duration: "2021 - 2022",
    details: ["Percentage: 88.8%", "Stream: Science (PCM)"],
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
    level: "Secondary",
    title: "Class X (CBSE)",
    institution: "Pragya Bharti Public School, Gaya",
    location: "Gaya, Bihar",
    duration: "2019 - 2020",
    details: ["Percentage: 90%", "All Subjects"],
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
