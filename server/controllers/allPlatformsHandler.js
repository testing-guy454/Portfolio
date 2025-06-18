import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { asyncHandler, ApiError } from "../middleware/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Helper function to read data from JSON file
 * @param {string} filename - The name of the JSON file (e.g., 'leetcode.json')
 * @returns {Object|null} User data or null if error
 */
const getDataFromFile = async (filename) => {
  const dataPath = path.join(__dirname, "../data", filename);
  const fileData = await fs.readFile(dataPath, "utf8");
  return JSON.parse(fileData);
};

/**
 * Handler to fetch all coding platform data for personal portfolio
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const allPlatformsHandler = asyncHandler(async (req, res) => {
  console.log("Fetching data from all coding platforms...");

  // Fetch data from all platforms in parallel (reading from JSON files)
  const [leetcodeData, codeforcesData, codechefData, gfgData] = await Promise.allSettled([
    getDataFromFile("leetcode.json"),
    getDataFromFile("codeforces.json"),
    getDataFromFile("codechef.json"),
    getDataFromFile("gfg.json")
  ]);

  // Process results and handle individual failures
  const processResult = (result, platformName) => {
    if (result.status === 'fulfilled') {
      return result.value;
    } else {
      console.warn(`Failed to load ${platformName} data:`, result.reason.message);
      return null;
    }
  };

  const result = {
    success: true,
    data: {
      leetcode: processResult(leetcodeData, 'leetcode'),
      codeforces: processResult(codeforcesData, 'codeforces'),
      codechef: processResult(codechefData, 'codechef'),
      gfg: processResult(gfgData, 'gfg')
    },
    lastUpdated: new Date().toISOString()
  };

  // Check if any platform failed
  const failedPlatforms = [];
  if (!result.data.leetcode) failedPlatforms.push('leetcode');
  if (!result.data.codeforces) failedPlatforms.push('codeforces');
  if (!result.data.codechef) failedPlatforms.push('codechef');
  if (!result.data.gfg) failedPlatforms.push('gfg');

  if (failedPlatforms.length > 0) {
    result.warnings = `Failed to fetch data from: ${failedPlatforms.join(', ')}`;
  }

  // If all platforms failed, throw an error
  if (failedPlatforms.length === 4) {
    throw new ApiError(503, 'All platform data sources are currently unavailable');
  }

  res.json(result);
});

export default allPlatformsHandler;
