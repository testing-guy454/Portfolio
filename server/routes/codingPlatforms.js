import express from 'express';
import gfgHandler from '../CodingPlatforms/gfgHandler.js';
import codeforcesHandler from '../CodingPlatforms/codeforces.js';
import codechefHandler from '../CodingPlatforms/codechef.js';
import leetcodeHandler from '../CodingPlatforms/leetcode.js';

const router = express.Router();

router.get('/gfg/:id', gfgHandler);
router.get('/codeforces/:id', codeforcesHandler);
router.get('/codechef/:id', codechefHandler);
router.get('/leetcode/:id', leetcodeHandler);

export default router;