import { gfgData } from "../data/ResponseReady/index.js";
import { ApiError, asyncHandler } from "../middleware/index.js";


const gfgHandler = asyncHandler(async (req, res) => {
  if (!gfgData) {
    throw new ApiError(404, "GeeksForGeeks user data not found");
  }

  res.status(200).json(gfgData);
});

export default gfgHandler;