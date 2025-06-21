import { ApiError, asyncHandler } from "../middleware/index.js";
import { leetcodeData } from "../data/ResponseReady/index.js"

const leetcodeHandler = asyncHandler(async (req, res) => {
  
  if (!leetcodeData) {
    throw new ApiError(404, "LeetCode user data not found");
  }
  res.status(200).json(leetcodeData);
});

export default leetcodeHandler;