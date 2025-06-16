import express from 'express';
import codingPlatformsRouter from './routes/codingPlatforms.js';

const app = express();

app.use("/api/v1/codingPlatforms", codingPlatformsRouter)

export default app;