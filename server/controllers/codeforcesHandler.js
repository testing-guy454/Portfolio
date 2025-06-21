import { codeforcesData } from "../data/ResponseReady/index.js";
import { ApiError, asyncHandler } from "../middleware/index.js";

const codeforcesHandler = asyncHandler(async (req, res) => {

  if (!codeforcesData) {
    throw new ApiError(404, "Codeforces user data not found");
  }

  res.status(200).json(codeforcesData);
});

export default codeforcesHandler;