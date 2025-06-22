# Environment Variables Setup

This document explains how to set up environment variables for the portfolio client application.

## Quick Start

1. Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

2. Update the values in `.env` with your specific configuration:

   ```bash
   # API Configuration
   VITE_API_BASE_URL=http://localhost:9000/api/v1

   # Application Configuration
   VITE_APP_TITLE=Your Name - Full Stack Developer
   VITE_APP_DESCRIPTION=Your portfolio description
   VITE_APP_URL=http://localhost:5173

   # Contact Information
   VITE_CONTACT_EMAIL=your.email@example.com
   VITE_GITHUB_URL=https://github.com/yourusername
   VITE_LINKEDIN_URL=https://linkedin.com/in/yourusername

   # Resume
   VITE_RESUME_URL=/your-resume.pdf
   ```

## Environment Variables Reference

### Required Variables

| Variable               | Description                            | Example                           |
| ---------------------- | -------------------------------------- | --------------------------------- |
| `VITE_API_BASE_URL`    | Base URL for API calls                 | `http://localhost:9000/api/v1`    |
| `VITE_APP_TITLE`       | Application title for SEO and metadata | `John Doe - Full Stack Developer` |
| `VITE_APP_DESCRIPTION` | Application description for SEO        | `Full Stack Developer Portfolio`  |
| `VITE_APP_URL`         | Your portfolio URL                     | `https://yourdomain.com`          |

### Optional Variables

| Variable              | Description                  | Example                           |
| --------------------- | ---------------------------- | --------------------------------- |
| `VITE_CONTACT_EMAIL`  | Contact email address        | `john@example.com`                |
| `VITE_GITHUB_URL`     | GitHub profile URL           | `https://github.com/johndoe`      |
| `VITE_LINKEDIN_URL`   | LinkedIn profile URL         | `https://linkedin.com/in/johndoe` |
| `VITE_RESUME_URL`     | Path to resume file          | `/resume.pdf`                     |
| `VITE_GA_TRACKING_ID` | Google Analytics tracking ID | `G-XXXXXXXXXX`                    |
| `VITE_HOTJAR_ID`      | Hotjar tracking ID           | `12345`                           |

## Important Notes

### VITE\_ Prefix

All environment variables must be prefixed with `VITE_` to be accessible in the browser. This is a Vite requirement for security.

### Security

- Never commit your `.env` file to version control
- Use `.env.example` as a template for other developers
- Environment variables are exposed to the client-side, so don't put sensitive data here

### Deployment

#### Vercel

1. Go to your project settings on Vercel
2. Navigate to the "Environment Variables" section
3. Add each variable with its value

#### Netlify

1. Go to Site Settings → Environment Variables
2. Add each variable with its value

#### Other Platforms

Check your hosting platform's documentation for setting environment variables.

## Configuration File

The application uses a centralized configuration file at `src/config/environment.ts` that:

- Imports all environment variables
- Provides TypeScript types
- Offers fallback values
- Exports API endpoints
- Logs configuration in development

## Usage in Code

Instead of using `import.meta.env.VITE_VARIABLE_NAME` directly, import from the config:

```typescript
import { config, apiEndpoints } from "../config/environment";

// Use configuration
const title = config.appTitle;
const apiUrl = apiEndpoints.codingPlatforms.leetcode;
```

## Troubleshooting

### Variables Not Loading

1. Ensure the variable name starts with `VITE_`
2. Restart the development server after adding new variables
3. Check that the `.env` file is in the root of the client directory

### API Calls Failing

1. Verify `VITE_API_BASE_URL` is correct
2. Ensure the server is running on the specified port
3. Check browser console for CORS errors

### Build Issues

1. Make sure all required environment variables are set in your deployment platform
2. Check that production URLs are correct (no localhost)
