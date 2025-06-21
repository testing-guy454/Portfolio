import { codechefData } from "../data/ResponseReady/index.js";
import { ApiError, asyncHandler } from "../middleware/index.js";

const codechefHandler = asyncHandler(async (req, res) => {
  if (!codechefData) {
    throw new ApiError(404, "CodeChef user data not found");
  }

  res.status(200).json(codechefData);
});

export default codechefHandler;