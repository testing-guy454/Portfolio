import { useEffect, useRef } from "react";
import { apiEndpoints } from "../../config/environment";
import { fetchWithRetry } from "../../utils/apiRetry";

/**
 * Simple hook for fetching Codeforces data from API with retry mechanism
 */
export const useCodeforcesData = (
  fallbackData: any,
  updateCallback: (data: any) => void
) => {
  const fallbackDataRef = useRef(fallbackData);
  const updateCallbackRef = useRef(updateCallback);

  // Update refs whenever props change
  fallbackDataRef.current = fallbackData;
  updateCallbackRef.current = updateCallback;

  useEffect(() => {
    const fetchCodeforcesData = async () => {
      try {
        // Use retry mechanism with max 3 attempts
        const response = await fetchWithRetry(
          apiEndpoints.codingPlatforms.codeforces,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
          { maxAttempts: 3, delayMs: 1000, backoffMultiplier: 1.5 }
        );

        const apiData = await response.json();

        // Determine rank based on rating
        const getRank = (rating: number) => {
          if (rating >= 1900) return "Candidate Master";
          if (rating >= 1600) return "Expert";
          if (rating >= 1400) return "Specialist";
          if (rating >= 1200) return "Pupil";
          return "Newbie";
        };

        const updatedCodeforces = {
          ...fallbackDataRef.current,
          rating: apiData.contests.rating,
          problemsSolved: {
            total: apiData.problemsSolved.total,
            easy: apiData.problemsSolved.easy,
            medium: apiData.problemsSolved.medium,
            hard: apiData.problemsSolved.hard,
          },
          rank: getRank(apiData.contests.rating),
          leetcodeAchievement: `${getRank(apiData.contests.rating)} with ${
            apiData.contests.attendedCount
          } contests and best rank ${apiData.contests.bestRank}`,
        };

        updateCallbackRef.current(updatedCodeforces);
      } catch (err) {
        console.error(
          "Failed to fetch Codeforces data after all retry attempts:",
          err
        );
        // Keep using fallback data when all retries fail
      }
    };

    fetchCodeforcesData();
  }, []); // Empty dependency array - run only once on mount
};
