import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let codeforcesData = {
  username: "yuvraj.mehta532",
  globalRanking: null,
  maxRating: 876,
  problemsSolved: {
    total: 6,
    easy: 4,
    medium: 0,
    hard: 0,
    unrated: 2,
  },
  contests: {
    rating: 876,
    attendedCount: 4,
    globalRanking: null,
    bestRank: 13055,
  },
  achievements: null,
  lastUpdated: "2025-06-21T18:55:22.917Z"
}

const saveCodeforcesData = async () => {
  // Read data from the JSON file
  const dataPath = path.join(__dirname, "../codeforces.json");
  const fileData = await fs.readFile(dataPath, "utf8");

  const userData = JSON.parse(fileData);

  codeforcesData.username = userData.handle || codeforcesData.username;
  codeforcesData.globalRanking = userData.profile.globalRanking || codeforcesData.globalRanking;
  codeforcesData.maxRating = userData.profile.maxRating || codeforcesData.maxRating;
  codeforcesData.problemsSolved = userData.problemsSolved || codeforcesData.problemsSolved;
  codeforcesData.contests = userData.contests || codeforcesData.contests;

  // Only update achievements if they exist in userData
  if (userData.achievements) {
    if (codeforcesData.achievements === null) {
      codeforcesData.achievements = {};
    }

    if (userData.achievements.stars) {
      codeforcesData.achievements.stars = userData.achievements.stars;
    }

    if (userData.achievements.streaks) {
      codeforcesData.achievements.streaks = userData.achievements.streaks;
    }
  }

  codeforcesData.lastUpdated = new Date().toISOString();
}





export { codeforcesData, saveCodeforcesData };