import express from 'express';
import {
  gfgHandler,
  codeforcesHandler,
  codechefHandler,
  leetcodeHandler,
  allPlatformsHandler
} from '../controllers/index.js';

const router = express.Router();

// Personal portfolio routes - no username parameters needed
router.get('/gfg', gfgHandler);
router.get('/codeforces', codeforcesHandler);
router.get('/codechef', codechefHandler);
router.get('/leetcode', leetcodeHandler);

// Route to get all platform data at once for portfolio
router.get('/all', allPlatformsHandler);

export default router;