import express from 'express';
import cors from 'cors';
import config from './config/index.js';
import codingPlatformsRouter from './routes/codingPlatforms.js';
import { startScheduler, updateAllPlatforms } from './services/simpleScheduler.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';
import asyncHandler from './middleware/asyncHandler.js';

const app = express();

// Middleware
app.use(cors(config.cors));
app.use(express.json({ limit: config.api.maxRequestSize }));

// Routes
app.use(config.api.prefix + "/codingPlatforms", codingPlatformsRouter);

// Admin routes for data updates
app.get(config.api.prefix + '/admin/update-status', (req, res) => {
  res.json({
    success: true,
    message: 'Scheduler is running',
    schedule: 'Every 6 hours'
  });
});

app.post(config.api.prefix + '/admin/trigger-update', asyncHandler(async (req, res) => {
  const result = await updateAllPlatforms();
  res.json({
    success: true,
    message: 'Manual update completed',
    result
  });
}));

// Health check endpoint
app.get(config.health.endpoint, (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: {
      rss: `${Math.round(process.memoryUsage().rss / 1024 / 1024)}MB`,
      heapUsed: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`
    }
  });
});

// 404 handler for undefined routes
app.use(notFound);

// Global error handler
app.use(errorHandler);

// Export both app and scheduler functions
export default app;
export { startScheduler, updateAllPlatforms };