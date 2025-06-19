import app, { startScheduler, updateAllPlatforms } from "./app.js";
import connectDB from "./database/db.js";
import config from './config/index.js';

// Connect to database
connectDB();
const PORT = config.PORT;
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  // Start simple scheduler
  startScheduler();

  // Run initial update after configured delay
  setTimeout(async () => {
    try {
      console.log("🎯 Running initial update...");
      await updateAllPlatforms();
    } catch (error) {
      console.error("❌ Initial update failed:", error.message);
    }
  }, config.INITIAL_DELAY_MS);
});

// // Log memory usage periodically
// setInterval(() => {
//   const memUsage = process.memoryUsage();
//   console.log(`📊 Memory Usage: RSS: ${Math.round(memUsage.rss / 1024 / 1024)}MB, Heap: ${Math.round(memUsage.heapUsed / 1024 / 1024)}MB`);
// }, 30 * 60 * 1000); // Every 30 minutes

// // Graceful shutdown handling
// const gracefulShutdown = (signal) => {
//   console.log(`\n🔄 Received ${signal}. Starting graceful shutdown...`);

//   server.close(() => {
//     console.log('✅ HTTP server closed.');

//     // Force exit after 10 seconds if graceful shutdown takes too long
//     setTimeout(() => {
//       console.log('⚠️ Forcefully shutting down');
//       process.exit(1);
//     }, 10000);

//     process.exit(0);
//   });
// };

// // Handle shutdown signals
// process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
// process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// // Handle uncaught exceptions and unhandled rejections
// process.on('uncaughtException', (error) => {
//   console.error('💥 Uncaught Exception:', error);
//   gracefulShutdown('uncaughtException');
// });

// process.on('unhandledRejection', (reason, promise) => {
//   console.error('💥 Unhandled Rejection at:', promise, 'reason:', reason);
//   gracefulShutdown('unhandledRejection');
// });
