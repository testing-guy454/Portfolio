/**
 * Async Handler Middleware
 * Catches async errors and passes them to error handler
 */

/**
 * Async handler wrapper to catch async errors
 * @param {Function} fn - Async function to wrap
 * @returns {Function} Express middleware function
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
