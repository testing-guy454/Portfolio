import { useEffect, useRef } from "react";
import { apiEndpoints } from "../../config/environment";
import { fetchWithRetry } from "../../utils/apiRetry";

/**
 * Simple hook for fetching GeeksforGeeks data from API with retry mechanism
 */
export const useGfGData = (
  fallbackData: any,
  updateCallback: (data: any) => void
) => {
  const fallbackDataRef = useRef(fallbackData);
  const updateCallbackRef = useRef(updateCallback);

  // Update refs whenever props change
  fallbackDataRef.current = fallbackData;
  updateCallbackRef.current = updateCallback;

  useEffect(() => {
    const fetchGfGData = async () => {
      try {
        // Use retry mechanism with max 3 attempts
        const response = await fetchWithRetry(
          apiEndpoints.codingPlatforms.geeksforgeeks,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
          { maxAttempts: 3, delayMs: 1000, backoffMultiplier: 1.5 }
        );

        const apiData = await response.json();

        const updatedGfG = {
          ...fallbackDataRef.current,
          problemsSolved: {
            total: apiData.problemsSolved.total,
            easy: apiData.problemsSolved.easy,
            medium: apiData.problemsSolved.medium,
            hard: apiData.problemsSolved.hard,
          },
          rank: apiData.instituteRank
            ? `Institute Rank: ${apiData.instituteRank}`
            : fallbackDataRef.current.rank,
          leetcodeAchievement: `Solved ${apiData.problemsSolved.total}+ problems with ${apiData.achievements.streaks.currentStreak} day current streak`,
        };

        updateCallbackRef.current(updatedGfG);
      } catch (err) {
        console.error(
          "Failed to fetch GfG data after all retry attempts:",
          err
        );
        // Keep using fallback data when all retries fail
      }
    };

    fetchGfGData();
  }, []); // Empty dependency array - run only once on mount
};
