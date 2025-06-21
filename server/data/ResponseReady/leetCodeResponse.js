import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let leetcodeData = {
  username: "mythical-UV",
  globalRanking: 526240,
  problemsSolved: {
    total: 228,
    easy: 109,
    medium: 115,
    hard: 4
  },
  contests: {
    rating: 1570.43,
    attendedCount: 9,
    globalRanking: 193103,
    bestRank: 6851,
    topPercentage: 27.7,
  },
  achievements: {
    stars: "2⭐",
    streaks: {
      currentStreak: 3,
      maxStreak: 18,
      totalActiveDays: 121
    },
  }
}

const saveLeetcodeData = async () => {
  // Read data from the JSON file
  const dataPath = path.join(__dirname, "../leetcode.json");
  const fileData = await fs.readFile(dataPath, "utf8");

  const userData = JSON.parse(fileData);

  leetcodeData.username = userData.handle || leetcodeData.username;
  leetcodeData.globalRanking = userData.profile.globalRanking || leetcodeData.globalRanking;
  leetcodeData.problemsSolved = userData.problemsSolved || leetcodeData.problemsSolved;
  leetcodeData.contests = userData.contests || leetcodeData.contests;

  // Handle achievements safely
  if (userData.achievements) {
    if (userData.achievements.stars) {
      leetcodeData.achievements.stars = userData.achievements.stars;
    }

    if (userData.achievements.streaks) {
      leetcodeData.achievements.streaks = userData.achievements.streaks;
    }
  }

  leetcodeData.lastUpdated = new Date().toISOString();
}










export { leetcodeData, saveLeetcodeData };