import express from 'express';
import { asyncHandler, notFound } from '../middleware/index.js';
import { updateAllPlatforms } from '../services/simpleScheduler.js';

const router = express.Router();

router.get('/update-status', (req, res) => {
  res.json({
    success: true,
    message: 'Scheduler is running',
    schedule: 'Every 6 hours'
  });
});

router.get('/check-status', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
  });
});

router.post('/trigger-update', asyncHandler(async (req, res) => {
  const result = await updateAllPlatforms();
  res.json({
    success: true,
    message: 'Manual update completed',
    result
  });
}));

export default router;