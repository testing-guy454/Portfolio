/**
 * API Retry Utility
 * Provides retry mechanism for API calls with maximum retry attempts
 */

interface RetryOptions {
  maxAttempts?: number;
  delayMs?: number;
  backoffMultiplier?: number;
}

/**
 * Retry an async function with exponential backoff
 * @param fn - The async function to retry
 * @param options - Retry configuration options
 * @returns Promise with the result or throws after max attempts
 */
export async function retryApiCall<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const { maxAttempts = 3, delayMs = 1000, backoffMultiplier = 1.5 } = options;

  let lastError: Error = new Error("Unknown error");
  let currentDelay = delayMs;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const result = await fn();

      // If we get here, the call succeeded
      if (attempt > 1) {
        console.log(`API call succeeded on attempt ${attempt}`);
      }

      return result;
    } catch (error) {
      lastError = error as Error;

      console.warn(
        `API call failed on attempt ${attempt}/${maxAttempts}:`,
        error
      );

      // If this was the last attempt, don't wait
      if (attempt === maxAttempts) {
        break;
      }

      // Wait before retrying with exponential backoff
      console.log(`Retrying in ${currentDelay}ms...`);
      await new Promise((resolve) => setTimeout(resolve, currentDelay));
      currentDelay = Math.floor(currentDelay * backoffMultiplier);
    }
  }

  // All attempts failed
  console.error(
    `All ${maxAttempts} API retry attempts failed. Last error:`,
    lastError
  );
  throw lastError;
}

/**
 * Wrapper for fetch with retry logic
 * @param url - The URL to fetch
 * @param options - Fetch options
 * @param retryOptions - Retry configuration
 * @returns Promise with Response or throws after max attempts
 */
export async function fetchWithRetry(
  url: string,
  options?: RequestInit,
  retryOptions?: RetryOptions
): Promise<Response> {
  return retryApiCall(async () => {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return response;
  }, retryOptions);
}
