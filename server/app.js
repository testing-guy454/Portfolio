import express from 'express';
import cors from 'cors';
import codingPlatformsRouter from './routes/codingPlatforms.js';
import { startScheduler, updateAllPlatforms } from './services/simpleScheduler.js';
import {
  asyncHandler,
  errorHandler,
  notFound
} from './middleware/index.js';

const app = express();

// Middleware
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}));
app.use(express.json());

// Routes
app.use("/api/v1/codingPlatforms", codingPlatformsRouter);

// Admin routes for data updates
app.get('/api/v1/admin/update-status', (req, res) => {
  res.json({
    success: true,
    message: 'Scheduler is running',
    schedule: 'Every 6 hours'
  });
});

app.post('/api/v1/admin/trigger-update', asyncHandler(async (req, res) => {
  const result = await updateAllPlatforms();
  res.json({
    success: true,
    message: 'Manual update completed',
    result
  });
}));

// Health check endpoint
app.get('/health', (req, res) => {
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