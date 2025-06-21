import express from 'express';
import cors from 'cors';
import codingPlatformsRouter from './routes/codingPlatforms.js';
import admin from './routes/admin.js';
import {
  asyncHandler,
  errorHandler,
  notFound
} from './middleware/index.js';
import { corsConfig } from './config/index.js';

const app = express();

// Middleware
app.use(cors(corsConfig));
app.use(express.json());

// Routes
app.use("/api/v1/codingPlatforms", codingPlatformsRouter);
app.use("/api/v1/admin", admin)

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