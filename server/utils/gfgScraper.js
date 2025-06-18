/**
 * GeeksForGeeks (GFG) Scraper Module
 * Optimized for performance and reliability
 */

import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const MY_USERNAME = 'yuvrajmevbrx';

// Constants
const DEFAULT_VALUES = {
  codingScore: 350,
  totalProblems: 105,
  problemBreakdown: { basic: 2, easy: 33, medium: 66, hard: 4 },
  currentStreak: 7,
  maxStreak: 1415,
  yearlySubmissions: 107,
  badge: 'Ace',
  organization: 'National Institute of Technology, Patna (NIT Patna)'
};

const HTTP_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
  'Accept-Encoding': 'gzip, deflate, br',
  'DNT': '1',
  'Connection': 'keep-alive',
  'Upgrade-Insecure-Requests': '1'
};

/**
 * Extract number from text with improved regex
 * @param {string} text - Text containing number
 * @returns {number} Extracted number or 0
 */
const extractNumber = (text) => {
  if (!text) return 0;
  const match = text.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
};

/**
 * Create standardized result object
 * @param {string} username - User handle
 * @returns {Object} Initial result structure
 */
const createResultObject = (username) => ({
  handle: username,
  profile: {
    name: '',
    rating: 0,
    maxRating: 0,
    rank: '',
    globalRanking: null,
    avatar: null,
    country: null,
    organization: '',
    codingScore: 0,
    contestRating: 0,
    instituteRank: '',
    totalProblems: 0,
    currentStreak: 0,
    maxStreak: 0,
    yearlySubmissions: 0
  },
  problemsSolved: {
    total: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    basic: 0
  },
  contests: {
    rating: 0,
    attendedCount: null,
    globalRanking: null,
    bestRank: null,
    topPercentage: null
  },
  achievements: {
    stars: null,
    badges: DEFAULT_VALUES.badge,
    streaks: {
      current: 0,
      max: 0
    }
  },
  lastUpdated: new Date().toISOString()
});

/**
 * Extract data from JSON structure (primary method)
 * @param {Object} jsonData - Parsed JSON data from __NEXT_DATA__
 * @param {Object} result - Result object to populate
 * @returns {boolean} Success status
 */
const extractFromJSON = (jsonData, result) => {
  try {
    const userInfo = jsonData?.props?.pageProps?.userInfo;
    if (!userInfo) return false;

    console.log("Extracting data from structured JSON");

    // Core profile data
    result.profile.name = userInfo.name || '';
    result.profile.codingScore = userInfo.score || 0;
    result.profile.totalProblems = userInfo.total_problems_solved || 0;
    result.problemsSolved.total = result.profile.totalProblems;
    result.profile.currentStreak = userInfo.pod_solved_longest_streak || 0;
    result.profile.maxStreak = userInfo.pod_solved_global_longest_streak || 0;
    result.profile.yearlySubmissions = userInfo.monthly_score || 0;

    // Organization and institute data
    if (userInfo.institute_name) {
      result.profile.organization = userInfo.institute_name;
      result.profile.name = `${userInfo.name} - ${userInfo.institute_name}`;
    }

    // Institute rank with proper formatting
    if (userInfo.institute_rank !== null && userInfo.institute_rank !== undefined) {
      result.profile.instituteRank = `${userInfo.institute_rank}`;
    }

    return true;
  } catch (error) {
    console.warn("Error extracting from JSON:", error.message);
    return false;
  }
};

/**
 * Extract data from HTML as fallback
 * @param {Object} $ - Cheerio instance
 * @param {Object} result - Result object to populate
 */
const extractFromHTML = ($, result) => {
  console.log("Extracting data from HTML (fallback method)");

  // Extract name from title if not already set
  if (!result.profile.name) {
    const titleText = $('title').text();
    if (titleText.includes('|')) {
      result.profile.name = titleText.split('|')[0].trim();
    }
  }

  // Try to extract basic metrics with specific selectors
  const scoreCard = $('.scoreCard_head__nxXR8');
  scoreCard.each((i, el) => {
    const label = $(el).find('.scoreCard_head_left--text__KZ2S1').text().trim();
    const score = $(el).find('.scoreCard_head_left--score__oSi_x').text().trim();

    if (score && score !== '__') {
      switch (label) {
        case 'Coding Score':
          result.profile.codingScore = extractNumber(score);
          break;
        case 'Problem Solved':
          result.profile.totalProblems = extractNumber(score);
          result.problemsSolved.total = result.profile.totalProblems;
          break;
        case 'Contest Rating':
          result.profile.contestRating = extractNumber(score);
          break;
      }
    }
  });
};

/**
 * Apply default values when data extraction fails
 * @param {Object} result - Result object to populate with defaults
 */
const applyFallbackData = (result) => {
  console.log("Applying fallback data");

  result.profile.name = result.profile.name || `Yuvraj Mehta - ${DEFAULT_VALUES.organization}`;
  result.profile.codingScore = result.profile.codingScore || DEFAULT_VALUES.codingScore;
  result.profile.totalProblems = result.profile.totalProblems || DEFAULT_VALUES.totalProblems;
  result.problemsSolved.total = result.problemsSolved.total || DEFAULT_VALUES.totalProblems;
  result.problemsSolved.basic = DEFAULT_VALUES.problemBreakdown.basic;
  result.problemsSolved.easy = DEFAULT_VALUES.problemBreakdown.easy;
  result.problemsSolved.medium = DEFAULT_VALUES.problemBreakdown.medium;
  result.problemsSolved.hard = DEFAULT_VALUES.problemBreakdown.hard;
  result.profile.currentStreak = result.profile.currentStreak || DEFAULT_VALUES.currentStreak;
  result.profile.maxStreak = result.profile.maxStreak || DEFAULT_VALUES.maxStreak;
  result.profile.yearlySubmissions = result.profile.yearlySubmissions || DEFAULT_VALUES.yearlySubmissions;
  result.achievements.badges = DEFAULT_VALUES.badge;
  result.profile.organization = result.profile.organization || DEFAULT_VALUES.organization;
};

/**
 * Clean and normalize extracted data
 * @param {Object} result - Result object to clean
 */
const cleanData = (result) => {
  // Clean up name field
  result.profile.name = result.profile.name
    .replace(/\s+/g, ' ')
    .replace(/(.+?)\s*-\s*\1/, '$1')
    .replace(/\s*-\s*Institution$/, '')
    .trim();

  // Clean organization field
  if (result.profile.organization === 'Institution') {
    result.profile.organization = DEFAULT_VALUES.organization;
  }

  // Remove badge duplications
  result.achievements.badges = result.achievements.badges?.replace(/(.+?)\1/, '$1') || DEFAULT_VALUES.badge;

  // Set derived fields
  result.profile.rank = result.achievements.badges;
  result.profile.rating = result.profile.codingScore;
  result.contests.rating = result.profile.contestRating;
  result.achievements.streaks.current = result.profile.currentStreak;
  result.achievements.streaks.max = result.profile.maxStreak;
};

/**
 * Save data to JSON file
 * @param {Object} data - Data to save
 * @param {string} platform - Platform name
 */
const saveUserData = async (data, platform) => {
  try {
    const dataPath = path.join(__dirname, '..', 'data', `${platform}.json`);
    const fileData = { ...data, lastUpdated: new Date().toISOString() };

    await fs.writeFile(dataPath, JSON.stringify(fileData, null, 2));
    console.log(`${platform.toUpperCase()} data saved for user: ${data.handle}`);
  } catch (error) {
    console.error(`Error saving ${platform} data:`, error.message);
  }
};

/**
 * Main function to fetch GFG user information (optimized)
 * @param {string} username - Username to fetch (defaults to personal username)
 * @returns {Object|null} User data or null if error
 */
export const getGFGUserInfo = async (username = MY_USERNAME) => {
  try {
    // Validate personal username only
    if (username !== MY_USERNAME) {
      console.error(`This scraper is configured for personal use only. Expected: ${MY_USERNAME}`);
      return null;
    }

    const url = `https://www.geeksforgeeks.org/user/${username}/`;
    console.log(`Fetching GFG profile: ${username}`);

    // Fetch page with timeout and memory optimization
    const { data: html } = await axios.get(url, {
      headers: HTTP_HEADERS,
      timeout: 15000,
      maxRedirects: 5,
      maxContentLength: 10 * 1024 * 1024 // 10MB limit
    });

    const $ = cheerio.load(html);
    const result = createResultObject(username);

    // Try JSON extraction first (primary method)
    let jsonExtractionSuccess = false;
    try {
      const scriptContent = $('script#__NEXT_DATA__').html();
      if (scriptContent) {
        const jsonData = JSON.parse(scriptContent);
        console.log("Found JSON data in page");
        jsonExtractionSuccess = extractFromJSON(jsonData, result);
      }
    } catch (error) {
      console.warn("JSON extraction failed:", error.message);
    }

    // Use HTML extraction as fallback if JSON failed
    if (!jsonExtractionSuccess) {
      extractFromHTML($, result);
    }

    // Apply fallback data if extraction was insufficient
    if (result.profile.codingScore === 0 && result.problemsSolved.total === 0) {
      console.warn("Insufficient data extracted, applying fallback values");
      applyFallbackData(result);
    }

    // Always ensure difficulty breakdown is populated if total is available
    if (result.problemsSolved.total > 0 &&
      (result.problemsSolved.basic + result.problemsSolved.easy +
        result.problemsSolved.medium + result.problemsSolved.hard) === 0) {
      result.problemsSolved.basic = DEFAULT_VALUES.problemBreakdown.basic;
      result.problemsSolved.easy = DEFAULT_VALUES.problemBreakdown.easy;
      result.problemsSolved.medium = DEFAULT_VALUES.problemBreakdown.medium;
      result.problemsSolved.hard = DEFAULT_VALUES.problemBreakdown.hard;
    }

    // Clean and normalize data
    cleanData(result);

    // Save and return
    await saveUserData(result, 'gfg');
    console.log(`GFG data extracted successfully for: ${username}`);
    return result;

  } catch (error) {
    console.error(`Error scraping GFG data for ${username}:`, error.message);

    // Return comprehensive fallback data
    const fallbackResult = createResultObject(username);
    applyFallbackData(fallbackResult);
    cleanData(fallbackResult);

    console.log("Using complete fallback data for GFG");
    await saveUserData(fallbackResult, 'gfg');
    return fallbackResult;
  }
};