import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { ApiError, asyncHandler } from "../middleware/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Handler for Codeforces user data requests (Personal Portfolio)
 * Serves data from the local codeforces.json file
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const codeforcesHandler = asyncHandler(async (req, res) => {
  // Read data from the JSON file
  const dataPath = path.join(__dirname, "../data/codeforces.json");
  const fileData = await fs.readFile(dataPath, "utf8");
  const userData = JSON.parse(fileData);

  if (!userData) {
    throw new ApiError(404, "Codeforces user data not found");
  }

  res.json(userData);
});

export default codeforcesHandler;