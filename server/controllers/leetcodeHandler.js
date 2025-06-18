import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import asyncHandler from "../middleware/asyncHandler.js";
import { ApiError } from "../middleware/errorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Handler for LeetCode user data requests (Personal Portfolio)
 * Serves data from the local leetcode.json file
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const leetcodeHandler = asyncHandler(async (req, res) => {
  // Read data from the JSON file
  const dataPath = path.join(__dirname, "../data/leetcode.json");
  const fileData = await fs.readFile(dataPath, "utf8");
  const userData = JSON.parse(fileData);

  if (!userData) {
    throw new ApiError(404, "LeetCode user data not found");
  }

  res.status(200).json(userData);
});

export default leetcodeHandler;