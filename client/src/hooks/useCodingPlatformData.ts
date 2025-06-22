import { useCallback } from "react";
import { useLeetCodeData } from "./codingPlatformHooks/useLeetCodeData";
import { useGfGData } from "./codingPlatformHooks/useGfgData";
import { useCodeChefData } from "./codingPlatformHooks/useCodeChefData";
import { useCodeforcesData } from "./codingPlatformHooks/useCodeforcesData";

/**
 * Unified hook that orchestrates all individual coding platform hooks
 */
export const useCodingPlatformData = (
  fallbackData: any,
  updateCallback: (data: any) => void
) => {
  // Create a memoized callback to avoid unnecessary re-renders
  const handleUpdate = useCallback(
    (platform: string) => (updatedPlatformData: any) => {
      updateCallback((prevData: any) => ({
        ...prevData,
        [platform]: updatedPlatformData,
      }));
    },
    [updateCallback]
  );

  // Use individual hooks for each platform
  useLeetCodeData(fallbackData.leetcode, handleUpdate("leetcode"));
  useGfGData(fallbackData.geeksforgeeks, handleUpdate("geeksforgeeks"));
  useCodeChefData(fallbackData.codechef, handleUpdate("codechef"));
  useCodeforcesData(fallbackData.codeforces, handleUpdate("codeforces"));
};
