import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let gfgData = {
  username: "yuvrajmevbrx",
  globalRanking: null,
  problemsSolved: {
    total: 112,
    easy: 33,
    medium: 66,
    hard: 4,
    basic: 2
  },
  contests: {
    rating: 0,
    attendedCount: 0,
    globalRanking: null,
    bestRank: null,
    topPercentage: null,
  },
  achievements: {
    stars: null,
    streaks: {
      currentStreak: 5,
      maxStreak: 7,
      totalActiveDays: 121
    },
  },
  instituteRank: 1153,
}

const saveGfgData = async () => {
  // Read data from the JSON file
  const dataPath = path.join(__dirname, "../gfg.json");
  const fileData = await fs.readFile(dataPath, "utf8");

  const userData = JSON.parse(fileData);
  

  // Update gfgData with properties from userData
  gfgData.username = userData.handle || gfgData.username;
  gfgData.globalRanking = userData.profile.globalRanking || gfgData.globalRanking;
  gfgData.problemsSolved = userData.problemsSolved || gfgData.problemsSolved;
  gfgData.contests = userData.contests || gfgData.contests;
  gfgData.achievements.stars = userData.achievements.stars || gfgData.achievements.stars;

  // Correctly map the streaks data
  if (userData.achievements && userData.achievements.streaks) {
    gfgData.achievements.streaks = {
      currentStreak: userData.achievements.streaks.current || gfgData.achievements.streaks.currentStreak,
      maxStreak: userData.achievements.streaks.max || gfgData.achievements.streaks.maxStreak,
      totalActiveDays: gfgData.achievements.streaks.totalActiveDays // Keep existing value as it's not in source
    };
  }

  // Correctly map instituteRank from profile
  gfgData.instituteRank = userData.profile.instituteRank || gfgData.instituteRank;

  gfgData.lastUpdated = new Date().toISOString();
}

export { gfgData, saveGfgData };