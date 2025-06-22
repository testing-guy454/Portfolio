import { useEffect, useRef } from "react";
import { apiEndpoints } from "../../config/environment";
import { fetchWithRetry } from "../../utils/apiRetry";

/**
 * Simple hook for fetching CodeChef data from API with retry mechanism
 */
export const useCodeChefData = (
  fallbackData: any,
  updateCallback: (data: any) => void
) => {
  const fallbackDataRef = useRef(fallbackData);
  const updateCallbackRef = useRef(updateCallback);

  // Update refs whenever props change
  fallbackDataRef.current = fallbackData;
  updateCallbackRef.current = updateCallback;

  useEffect(() => {
    const fetchCodeChefData = async () => {
      try {
        // Use retry mechanism with max 3 attempts
        const response = await fetchWithRetry(
          apiEndpoints.codingPlatforms.codechef,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
          { maxAttempts: 3, delayMs: 1000, backoffMultiplier: 1.5 }
        );

        const apiData = await response.json();

        const updatedCodeChef = {
          ...fallbackDataRef.current,
          rating: apiData.contests.rating,
          problemsSolved: {
            total: apiData.problemsSolved.total,
            easy: apiData.problemsSolved.easy,
            medium: apiData.problemsSolved.medium,
            hard: apiData.problemsSolved.hard,
          },
          rank: `${apiData.achievements.stars} Coder (Rank: ${apiData.globalRanking})`,
          leetcodeAchievement: `${apiData.achievements.stars} rated coder with ${apiData.contests.attendedCount} contests attended`,
        };

        updateCallbackRef.current(updatedCodeChef);
      } catch (err) {
        console.error(
          "Failed to fetch CodeChef data after all retry attempts:",
          err
        );
        // Keep using fallback data when all retries fail
      }
    };

    fetchCodeChefData();
  }, []); // Empty dependency array - run only once on mount
};
