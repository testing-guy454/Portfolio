# Deployment Guide

This guide covers deploying the portfolio client with proper environment variable configuration.

## Environment Variables for Deployment

Before deploying, ensure you have set up all required environment variables on your hosting platform.

### Vercel Deployment

1. **Connect your repository** to Vercel
2. **Set environment variables** in the Vercel dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add the following variables:

```
VITE_API_BASE_URL=https://your-backend-url.com/api/v1
VITE_APP_TITLE=Your Name - Full Stack Developer
VITE_APP_DESCRIPTION=Your portfolio description
VITE_APP_URL=https://your-vercel-app.vercel.app
VITE_CONTACT_EMAIL=your.email@example.com
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourusername
VITE_RESUME_URL=/your-resume.pdf
VITE_GA_TRACKING_ID=G-XXXXXXXXXX (optional)
VITE_HOTJAR_ID=12345 (optional)
VITE_NODE_ENV=production
```

3. **Deploy** - Vercel will automatically build and deploy

### Netlify Deployment

1. **Connect your repository** to Netlify
2. **Set environment variables**:

   - Go to Site Settings → Environment Variables
   - Add the same variables as listed for Vercel

3. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Manual Deployment

For other hosting providers:

1. **Create production environment file**:

   ```bash
   cp .env.production.example .env.production
   ```

2. **Update values** in `.env.production`

3. **Build the application**:

   ```bash
   npm run build
   ```

4. **Deploy the `dist` folder** to your hosting provider

## Environment-Specific Configurations

### Development

- Uses `http://localhost:9000` for API calls
- Enables development features like source maps
- Shows environment configuration in console

### Production

- Uses production API URL
- Optimized build with code splitting
- Minimal logging

## Backend API Configuration

Ensure your backend server is configured to handle CORS for your frontend domain:

```javascript
// In your backend server (if using Express)
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Development
      "https://your-domain.com", // Production
    ],
  })
);
```

## Testing Deployment

1. **Test the build locally**:

   ```bash
   npm run build
   npm run preview
   ```

2. **Check environment variables** are loaded correctly by looking at the console in development mode

3. **Verify API connections** work with your production backend

## Common Issues

### Environment Variables Not Loading

- Ensure variables start with `VITE_`
- Check they're set in your hosting platform
- Restart/redeploy after adding new variables

### API Connection Issues

- Verify `VITE_API_BASE_URL` is correct
- Check CORS configuration on backend
- Ensure backend is accessible from your domain

### Build Failures

- Check all required environment variables are set
- Verify TypeScript compilation passes locally
- Check for missing dependencies

## Security Considerations

- Never put sensitive data in environment variables (they're exposed to browsers)
- Use different API keys for development vs production if applicable
- Regularly rotate any exposed tokens or IDs

## Monitoring

Consider adding:

- Google Analytics for traffic monitoring
- Hotjar for user behavior insights
- Error tracking service (Sentry, LogRocket, etc.)

Set these up using the optional environment variables:

- `VITE_GA_TRACKING_ID`
- `VITE_HOTJAR_ID`
