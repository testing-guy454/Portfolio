/**
 * LeetCode Scraper Module
 * Completely independent with all necessary functions included
 */

import axios from 'axios';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import config from '../config/index.js';

// Get current file and directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration from centralized config
const API_ENDPOINT = config.ENDPOINTS.LEETCODE;
const API_TIMEOUT = config.TIMEOUTS.LEETCODE;
const MY_USERNAME = config.USERNAMES.LEETCODE;

/**
 * Save user data to JSON file (single user format for portfolio)
 * @param {Object} data - User data to save
 * @param {string} platform - Platform name (leetcode)
 */
const saveUserData = async (data, platform) => {
  try {
    const dataPath = path.join(__dirname, '..', 'data', `${platform}.json`);

    // Save data in single-user format for personal portfolio
    const fileData = {
      ...data,
      lastUpdated: new Date().toISOString()
    };

    await fs.writeFile(dataPath, JSON.stringify(fileData, null, 2));
    console.log(`${platform.toUpperCase()} data saved for user: ${data.handle}`);
  } catch (error) {
    console.error(` Error saving ${platform} data:`, error.message);
  }
};

// GraphQL queries
const QUERIES = {
  profile: `
    query userPublicProfile($username: String!) {
      matchedUser(username: $username) {
        username
        profile {
          ranking
          reputation
          starRating
        }
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
  `,
  streak: `
    query userProfileCalendar($username: String!) {
      matchedUser(username: $username) {
        userCalendar {
          streak
          totalActiveDays
          submissionCalendar
        }
      }
    }
  `,
  contest: `
    query userContestRankingInfo($username: String!) {
      userContestRanking(username: $username) {
        attendedContestsCount
        rating
        globalRanking
        totalParticipants
        topPercentage
      }
      userContestRankingHistory(username: $username) {
        attended
        trendDirection
        problemsSolved
        totalProblems
        finishTimeInSeconds
        rating
        ranking
        contest {
          title
          startTime
        }
      }
    }
  `
};

/**
 * Make GraphQL API request
 */
const makeApiRequest = async (username, queryType) => {
  try {
    const response = await axios.post(API_ENDPOINT, {
      query: QUERIES[queryType],
      variables: { username }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept-Encoding': 'gzip, deflate'
      },
      timeout: API_TIMEOUT,
      maxRedirects: 5,
      maxContentLength: 10 * 1024 * 1024 // 10MB limit for GraphQL responses
    });

    if (response.data.errors) {
      throw new Error(`GraphQL Error: ${response.data.errors[0].message}`);
    }

    return response.data.data;
  } catch (error) {
    console.error(` Error fetching ${queryType} data:`, error.message);
    return null;
  }
};

/**
 * Process problem solving statistics
 */
const processProblemStats = (stats) => {
  const result = { total: 0, easy: 0, medium: 0, hard: 0 };

  if (!stats) return result;

  stats.forEach(item => {
    const { difficulty, count } = item;
    if (difficulty === "All") {
      result.total = count;
    } else if (["Easy", "Medium", "Hard"].includes(difficulty)) {
      result[difficulty.toLowerCase()] = count;
    }
  });

  return result;
};

/**
 * Main function to fetch LeetCode user information for personal portfolio
 * Only works for the configured personal username
 */
export const getLeetcodeUserInfo = async (username = MY_USERNAME) => {
  try {
    // Validate that only personal username is used
    if (username !== MY_USERNAME) {
      console.error(`This scraper is configured for personal use only. Expected username: ${MY_USERNAME}`);
      return null;
    }

    console.log(`Fetching LeetCode data for: ${username}`);

    // Fetch profile, streak and contest data in parallel
    const [profileData, streakData, contestData] = await Promise.all([
      makeApiRequest(username, 'profile'),
      makeApiRequest(username, 'streak'),
      makeApiRequest(username, 'contest')
    ]);

    if (!profileData?.matchedUser) {
      console.error(`User '${username}' not found on LeetCode`);
      return null;
    }

    // Extract user data from profile response
    const { profile, submitStats } = profileData.matchedUser;

    // Create result object with standardized structure
    const result = {
      handle: username,
      profile: {
        name: null, // LeetCode doesn't provide name
        rating: contestData?.userContestRanking?.rating || null,
        maxRating: null, // LeetCode doesn't provide max rating separately
        rank: null, // LeetCode doesn't provide rank titles
        globalRanking: profile?.ranking || null,
        avatar: null, // LeetCode doesn't provide avatar in this API
        country: null, // LeetCode doesn't provide country
        organization: null, // LeetCode doesn't provide organization
        reputation: profile?.reputation || null,
        starRating: profile?.starRating || null
      },
      problemsSolved: {
        total: processProblemStats(submitStats?.acSubmissionNum).total,
        easy: processProblemStats(submitStats?.acSubmissionNum).easy,
        medium: processProblemStats(submitStats?.acSubmissionNum).medium,
        hard: processProblemStats(submitStats?.acSubmissionNum).hard
      },
      contests: {
        rating: contestData?.userContestRanking?.rating || null,
        attendedCount: contestData?.userContestRanking?.attendedContestsCount || 0,
        globalRanking: contestData?.userContestRanking?.globalRanking || null,
        bestRank: 6851, // Hard-coded as requested
        topPercentage: contestData?.userContestRanking?.topPercentage?.toFixed(1) || null
      },
      achievements: {
        stars: profile?.starRating ? `${profile.starRating}⭐` : null,
        streaks: streakData?.matchedUser?.userCalendar ? {
          currentStreak: 3, // Hard-coded per user request
          maxStreak: 18, // Hard-coded per user request
          totalActiveDays: streakData.matchedUser.userCalendar.totalActiveDays
        } : null
      },
      lastUpdated: new Date().toISOString()
    };

    // Save and return data
    await saveUserData(result, 'leetcode');
    console.log(`LeetCode data extracted successfully for: ${username}`);
    return result;

  } catch (error) {
    console.error(` Error scraping LeetCode data for ${username}:`, error.message);
    return null;
  }
};
