import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file and directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Extract number from a string
 * @param {string} text - Text containing number
 * @returns {number} Extracted number or 0 if not found
 */
const extractNumber = (text) => {
  if (!text) return 0;
  const match = text.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
};

/**
 * Safe text extraction from cheerio element
 * @param {Object} $ - Cheerio instance
 * @param {string} selector - CSS selector or element
 * @returns {string} Trimmed text or empty string
 */
const safeText = ($, selector) => {
  const element = typeof selector === 'string' ? $(selector) : selector;
  return element.length > 0 ? element.text().trim() : '';
};

/**
 * Extract number from parentheses in text like "Category (123)"
 * @param {string} text - Text containing numbers in parentheses
 * @returns {number} Extracted number or 0 if not found
 */
const extractNumberFromParentheses = (text) => {
  if (!text) return 0;
  const match = text.match(/\((\d+)\)/);
  return match && match[1] ? parseInt(match[1], 10) : 0;
};

// Personal username configuration
const MY_USERNAME = 'quick_unity_53';

// Timeout configuration
const API_TIMEOUT = 15000; // 15 seconds

/**
 * Save user data to JSON file (single user format for portfolio)
 * @param {Object} data - User data to save
 * @param {string} platform - Platform name (codechef)
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
 * Common headers for web scraping
 */
const commonHeaders = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
  'Accept-Encoding': 'gzip, deflate, br',
  'DNT': '1',
  'Connection': 'keep-alive',
  'Upgrade-Insecure-Requests': '1'
};

/**
 * Extract profile information (rating, stars, ranks)
 */
const extractProfile = ($) => {
  const profile = {
    rating: 0,
    stars: null,
    highestRating: 0,
    globalRank: null,
    countryRank: null,
  };

  // Extract rating
  const rating = extractNumber(safeText($, '.rating-number'));
  if (rating) profile.rating = rating;

  // Extract stars
  const stars = safeText($, '.rating-star');
  if (stars) profile.stars = stars;

  // Extract highest rating
  const highestRatingText = safeText($, '.rating-header small');
  const highestRating = extractNumber(highestRatingText);
  if (highestRating) profile.highestRating = highestRating;

  // Extract ranks
  $('.rating-ranks .inline-list li').each((i, el) => {
    const text = $(el).text().trim();
    if (text.includes('Global')) {
      profile.globalRank = extractNumber(text).toString();
    } else if (text.includes('Country')) {
      profile.countryRank = extractNumber(text).toString();
    }
  });

  return profile;
};

/**
 * Extract problems solved information
 */
const extractProblemsInfo = ($) => {
  const problems = {
    total: 0,
    school: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    challenge: 0,
    extcontest: 0,
  };

  // Try to extract from problems section
  const problemsSection = $('.rating-data-section.problems-solved');
  if (problemsSection.length > 0) {
    const totalHeadersText = problemsSection.find('h3').text();
    const totalMatch = totalHeadersText.match(/Total Problems Solved:\s*(\d+)/i);
    if (totalMatch && totalMatch[1]) {
      problems.total = parseInt(totalMatch[1], 10);
    }
  } else {
    // Fallback: Use regex on the entire HTML content
    const html = $.html();
    const fullySolvedMatch = html.match(/Fully\s+Solved\s*\((\d+)\)/i);
    if (fullySolvedMatch && fullySolvedMatch[1]) {
      problems.total = parseInt(fullySolvedMatch[1], 10);
    }
  }

  // Estimate difficulty distribution (40% easy, 40% medium, 20% hard)
  if (problems.total > 0) {
    problems.easy = Math.floor(problems.total * 0.4);
    problems.medium = Math.floor(problems.total * 0.4);
    problems.hard = problems.total - problems.easy - problems.medium;
  }

  return problems;
};

/**
 * Extract contests count
 */
const extractContestsCount = ($) => {
  // Try main method
  const contestsParticipatedDiv = $('.contest-participated-count');
  if (contestsParticipatedDiv.length > 0) {
    const text = contestsParticipatedDiv.text().trim();
    const countMatch = text.match(/No\.\s+of\s+Contests\s+Participated:\s*(\d+)/i);
    if (countMatch && countMatch[1]) {
      return parseInt(countMatch[1], 10);
    }
  }

  // Fallback: Look in problems section
  const contestsHeader = $('.rating-data-section.problems-solved h3').filter(function () {
    return $(this).text().trim().includes('Contests');
  });

  if (contestsHeader.length > 0) {
    const countMatch = contestsHeader.text().match(/Contests\s*\((\d+)\)/i);
    if (countMatch && countMatch[1]) {
      return parseInt(countMatch[1], 10);
    }
  }

  return 0;
};

/**
 * Fetches and parses user information from CodeChef
 */
/**
 * Main function to fetch CodeChef user information for personal portfolio
 * Only works for the configured personal username
 */
export const getCodechefUserInfo = async (username = MY_USERNAME) => {
  try {
    // Validate that only personal username is used
    if (username !== MY_USERNAME) {
      console.error(`This scraper is configured for personal use only. Expected username: ${MY_USERNAME}`);
      return null;
    }

    const url = `https://www.codechef.com/users/${username}`;
    console.log(`Fetching CodeChef profile: ${username}`);

    const { data: html } = await axios.get(url, {
      headers: commonHeaders,
      timeout: API_TIMEOUT
    });
    const $ = cheerio.load(html);

    // Initialize result object with standardized structure
    const profileData = extractProfile($);
    const problemsData = extractProblemsInfo($);
    const contestsCount = extractContestsCount($);

    const result = {
      handle: username,
      profile: {
        name: null, // CodeChef doesn't provide name in this scraping
        rating: profileData.rating,
        maxRating: profileData.highestRating,
        rank: null, // CodeChef doesn't provide rank titles
        globalRanking: parseInt(profileData.globalRank) || null,
        avatar: null, // CodeChef doesn't provide avatar
        country: null, // CodeChef doesn't provide country
        organization: null // CodeChef doesn't provide organization
      },
      problemsSolved: {
        total: problemsData.total,
        easy: problemsData.easy,
        medium: problemsData.medium,
        hard: problemsData.hard,
        basic: problemsData.school || 0
      },
      contests: {
        rating: profileData.rating,
        attendedCount: contestsCount,
        globalRanking: parseInt(profileData.globalRank) || null,
        bestRank: null, // CodeChef doesn't provide best rank
        topPercentage: null // CodeChef doesn't provide top percentage
      },
      achievements: {
        stars: profileData.stars,
        badges: null, // CodeChef doesn't provide badges
        streaks: null // CodeChef doesn't provide streak info
      },
      lastUpdated: new Date().toISOString()
    };

    // Save and return data
    await saveUserData(result, 'codechef');
    console.log(`CodeChef data extracted successfully for: ${username}`);
    return result;

  } catch (error) {
    console.error(`Error scraping CodeChef data for ${username}:`, error.message);
    return null;
  }
};


