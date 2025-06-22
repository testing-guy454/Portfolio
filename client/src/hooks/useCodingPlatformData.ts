import { useCallback, useRef } from "react";
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
  const updateCallbackRef = useRef(updateCallback);
  updateCallbackRef.current = updateCallback;

  // Create stable callback functions to avoid re-renders
  const handleLeetcodeUpdate = useCallback((updatedPlatformData: any) => {
    updateCallbackRef.current((prevData: any) => ({
      ...prevData,
      leetcode: updatedPlatformData,
    }));
  }, []);

  const handleGeeksforGeeksUpdate = useCallback((updatedPlatformData: any) => {
    updateCallbackRef.current((prevData: any) => ({
      ...prevData,
      geeksforgeeks: updatedPlatformData,
    }));
  }, []);

  const handleCodechefUpdate = useCallback((updatedPlatformData: any) => {
    updateCallbackRef.current((prevData: any) => ({
      ...prevData,
      codechef: updatedPlatformData,
    }));
  }, []);

  const handleCodeforcesUpdate = useCallback((updatedPlatformData: any) => {
    updateCallbackRef.current((prevData: any) => ({
      ...prevData,
      codeforces: updatedPlatformData,
    }));
  }, []);

  // Use individual hooks for each platform with stable callbacks
  useLeetCodeData(fallbackData.leetcode, handleLeetcodeUpdate);
  useGfGData(fallbackData.geeksforgeeks, handleGeeksforGeeksUpdate);
  useCodeChefData(fallbackData.codechef, handleCodechefUpdate);
  useCodeforcesData(fallbackData.codeforces, handleCodeforcesUpdate);
};
