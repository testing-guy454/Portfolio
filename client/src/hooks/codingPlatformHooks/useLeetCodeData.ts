import { useEffect, useRef } from "react";
import { apiEndpoints } from "../../config/environment";
import { fetchWithRetry } from "../../utils/apiRetry";

/**
 * Simple hook for fetching LeetCode data from API with retry mechanism
 */
export const useLeetCodeData = (
  fallbackData: any,
  updateCallback: (data: any) => void
) => {
  const fallbackDataRef = useRef(fallbackData);
  const updateCallbackRef = useRef(updateCallback);

  // Update refs whenever props change
  fallbackDataRef.current = fallbackData;
  updateCallbackRef.current = updateCallback;

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        // Use retry mechanism with max 3 attempts
        const response = await fetchWithRetry(
          apiEndpoints.codingPlatforms.leetcode,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
          { maxAttempts: 3, delayMs: 1000, backoffMultiplier: 1.5 }
        );

        const apiData = await response.json();

        const updatedLeetCode = {
          ...fallbackDataRef.current,
          rating: apiData.contests.rating,
          topPercentage: parseFloat(apiData.contests.topPercentage),
          problemsSolved: apiData.problemsSolved,
          rank: `Top ${apiData.contests.topPercentage}%`,
          leetcodeAchievement: `Solved ${apiData.problemsSolved.total}+ problems across all difficulty levels`,
        };

        updateCallbackRef.current(updatedLeetCode);
      } catch (err) {
        console.error(
          "Failed to fetch LeetCode data after all retry attempts:",
          err
        );
        // Keep using fallback data when all retries fail
      }
    };

    fetchLeetCodeData();
  }, []); // Empty dependency array - run only once on mount
};
