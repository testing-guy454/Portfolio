/**
 * Codeforces Scraper Module
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
const API_BASE_URL = config.ENDPOINTS.CODEFORCES;
const API_TIMEOUT = config.TIMEOUTS.CODEFORCES;
const MY_USERNAME = config.USERNAMES.CODEFORCES;

/**
 * Save user data to JSON file (single user format for portfolio)
 * @param {Object} data - User data to save
 * @param {string} platform - Platform name (codeforces)
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
    console.error(`Error saving ${platform} data:`, error.message);
  }
};

/**
 * Make API request to Codeforces with memory optimization
 */
const makeApiRequest = async (endpoint) => {
  try {
    // console.log("[DEBUG] Making API request to: " + API_BASE_URL + endpoint);

    const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
      timeout: API_TIMEOUT,
      maxRedirects: 5,
      maxContentLength: 50 * 1024 * 1024, // 50MB limit
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept-Encoding': 'gzip, deflate'
      }
    });

    if (response.data.status !== 'OK') {
      throw new Error(`API Error: ${response.data.comment || 'Unknown error'}`);
    }

    console.log(`Successfully fetched data from ${endpoint}`);
    return response.data.result;
  } catch (error) {
    if (error.response?.status === 429) {
      console.warn(`Rate limit hit for ${endpoint}, retrying in 2 seconds...`);
      await new Promise(resolve => setTimeout(resolve, 2000));

      try {
        const retryResponse = await axios.get(`${API_BASE_URL}${endpoint}`, {
          timeout: API_TIMEOUT,
          maxRedirects: 5,
          maxContentLength: 50 * 1024 * 1024, // 50MB limit
          headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept-Encoding': 'gzip, deflate'
          }
        });

        if (retryResponse.data.status === 'OK') {
          console.log(`Retry successful for ${endpoint}`);
          return retryResponse.data.result;
        }
      } catch (retryError) {
        console.error(`Retry failed for ${endpoint}:`, retryError.message);
      }
    }

    console.error(`Error fetching data from ${endpoint}:`, error.message);
    return null;
  }
};

/**
 * Process user submissions to get problem statistics
 */
const processSubmissions = (submissions) => {
  if (!submissions) return { total: 0, easy: 0, medium: 0, hard: 0, unrated: 0 };

  // Get unique solved problems (status = OK)
  const solvedProblems = new Set();
  const difficultyCount = { easy: 0, medium: 0, hard: 0, unrated: 0 };

  console.log(`Processing ${submissions.length} submissions...`);

  // Process submissions efficiently
  for (const submission of submissions) {
    if (submission.verdict === 'OK') {
      const problemKey = `${submission.problem.contestId}-${submission.problem.index}`;

      if (!solvedProblems.has(problemKey)) {
        solvedProblems.add(problemKey);

        // Categorize by rating (difficulty)
        const rating = submission.problem.rating;
        if (rating) {
          if (rating <= 1200) {
            difficultyCount.easy++;
          } else if (rating <= 1800) {
            difficultyCount.medium++;
          } else {
            difficultyCount.hard++;
          }
        } else {
          // Problems without rating (usually contest problems that haven't been rated yet)
          difficultyCount.unrated++;
        }
      }
    }
  }

  const totalSolved = solvedProblems.size;

  console.log(`Found ${totalSolved} unique solved problems:`);
  console.log(`- Easy (≤1200): ${difficultyCount.easy}`);
  console.log(`- Medium (1201-1800): ${difficultyCount.medium}`);
  console.log(`- Hard (>1800): ${difficultyCount.hard}`);
  console.log(`- Unrated: ${difficultyCount.unrated}`);

  // Clear the Set to free memory
  solvedProblems.clear();

  return {
    total: totalSolved,
    ...difficultyCount
  };
};

/**
 * Get user rating information
 */
const getRatingInfo = (userInfo) => {
  if (!userInfo || userInfo.length === 0) return {};

  const user = userInfo[0];
  return {
    handle: user.handle,
    rating: user.rating || 0,
    maxRating: user.maxRating || 0,
    rank: user.rank || 'unrated',
    maxRank: user.maxRank || 'unrated',
    avatar: user.avatar || '',
    titlePhoto: user.titlePhoto || '',
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    country: user.country || '',
    organization: user.organization || '',
    contribution: user.contribution || 0
  };
};

/**
 * Get contest statistics
 */
const getContestStats = (ratings) => {
  if (!ratings || ratings.length === 0) {
    return {
      contestsParticipated: 0,
      bestRank: null,
      worstRank: null,
      avgRank: null
    };
  }

  const ranks = ratings.map(r => r.rank).filter(r => r > 0);

  return {
    contestsParticipated: ratings.length,
    bestRank: ranks.length > 0 ? Math.min(...ranks) : null,
    worstRank: ranks.length > 0 ? Math.max(...ranks) : null,
    avgRank: ranks.length > 0 ? Math.round(ranks.reduce((a, b) => a + b, 0) / ranks.length) : null
  };
};

/**
 * Fetches and parses user information from Codeforces
 */
/**
 * Main function to fetch Codeforces user information for personal portfolio
 * Only works for the configured personal username
 */
export const getCodeforcesUserInfo = async (handle = MY_USERNAME) => {
  try {
    // Validate that only personal username is used
    if (handle !== MY_USERNAME) {
      console.error(`This scraper is configured for personal use only. Expected username: ${MY_USERNAME}`);
      return null;
    }

    console.log(`Fetching Codeforces data for: ${handle}`);

    // Fetch user info, submissions, and rating history in parallel
    // Limit submissions to last 5000 to reduce memory usage
    const [userInfo, submissions, ratingHistory] = await Promise.all([
      makeApiRequest(`/user.info?handles=${handle}`),
      makeApiRequest(`/user.status?handle=${handle}&from=1&count=5000`),
      makeApiRequest(`/user.rating?handle=${handle}`)
    ]);

    if (!userInfo) {
      console.error(`User '${handle}' not found on Codeforces`);
      return null;
    }

    // Process the data
    const profileInfo = getRatingInfo(userInfo);
    const problemStats = processSubmissions(submissions);
    const contestStats = getContestStats(ratingHistory);

    // Create result object with standardized structure
    const result = {
      handle: profileInfo.handle,
      profile: {
        name: `${profileInfo.firstName} ${profileInfo.lastName}`.trim() || null,
        rating: profileInfo.rating,
        maxRating: profileInfo.maxRating,
        rank: profileInfo.rank,
        globalRanking: null, // Codeforces doesn't provide global ranking
        avatar: profileInfo.avatar,
        country: profileInfo.country,
        organization: profileInfo.organization,
        contribution: profileInfo.contribution
      },
      problemsSolved: {
        total: problemStats.total,
        easy: problemStats.easy,
        medium: problemStats.medium,
        hard: problemStats.hard,
        unrated: problemStats.unrated
      },
      contests: {
        rating: profileInfo.rating,
        attendedCount: contestStats.contestsParticipated,
        globalRanking: null, // Codeforces doesn't provide global contest ranking
        bestRank: contestStats.bestRank,
        topPercentage: null // Codeforces doesn't provide top percentage
      },
      achievements: {
        stars: null, // Codeforces doesn't use stars
        badges: profileInfo.rank,
        streaks: null // Codeforces doesn't provide streak info
      },
      lastUpdated: new Date().toISOString()
    };

    // Save and return data
    await saveUserData(result, 'codeforces');
    console.log(`Codeforces data extracted successfully for: ${handle}`);
    return result;

  } catch (error) {
    console.error(`Error scraping Codeforces data for ${handle}:`, error.message);
    return null;
  }
};
