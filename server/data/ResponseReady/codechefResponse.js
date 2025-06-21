import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let codechefData = {
  username: "quick_unity_53",
  globalRanking: 38842,
  problemsSolved: {
    total: 17,
    easy: 6,
    medium: 6,
    hard: 5,
  },
  contests: {
    rating: 1435,
    attendedCount: 5,
    globalRanking: 38842,
    bestRank: null,
    topPercentage: null,
  },
  achievements: {
    stars: "★★",
    streaks: null,
  },
  lastUpdated: "2025-06-21T18:55:22.917Z"
}

const saveCodechefData = async () => {
  // Read data from the JSON file
  const dataPath = path.join(__dirname, "../codechef.json");
  const fileData = await fs.readFile(dataPath, "utf8");

  const userData = JSON.parse(fileData);

  codechefData.username = userData.handle || codechefData.username;
  codechefData.globalRanking = userData.profile.globalRanking || codechefData.globalRanking;
  codechefData.problemsSolved = userData.problemsSolved || codechefData.problemsSolved;
  codechefData.contests = userData.contests || codechefData.contests;

  // Handle achievements safely
  if (userData.achievements) {
    if (userData.achievements.stars) {
      codechefData.achievements.stars = userData.achievements.stars;
    }

    if (userData.achievements.streaks) {
      codechefData.achievements.streaks = userData.achievements.streaks;
    }
  }

  codechefData.lastUpdated = new Date().toISOString();
}





export { codechefData, saveCodechefData };