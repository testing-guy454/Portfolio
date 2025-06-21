# Server Documentation

This directory contains comprehensive documentation for the Coding Profiles API server.

## Contents

- [API Documentation](./API.md) - Detailed information about all API endpoints, request formats, and response structures

## Server Overview

The Coding Profiles API server is a Node.js application designed to fetch, process, and serve coding profiles data from various competitive programming platforms. It's specifically built to support a portfolio website that showcases coding achievements across multiple platforms.

## Architecture

The server follows a modular architecture with clear separation of concerns:

```
                                  ┌─────────────┐
                                  │             │
                                  │   Client    │
                                  │             │
                                  └──────┬──────┘
                                         │
                                         ▼
┌─────────────┐              ┌──────────────────────┐
│             │              │                      │
│  Scheduler  │─────────────►│    Express Server    │
│             │              │                      │
└─────────────┘              └──────────┬───────────┘
                                       │
                 ┌───────────┬─────────┴────────┬───────────┐
                 │           │                  │           │
                 ▼           ▼                  ▼           ▼
          ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐
          │            │ │            │ │            │ │            │
          │  LeetCode  │ │ CodeForces │ │  CodeChef  │ │    GFG     │
          │            │ │            │ │            │ │            │
          └────────────┘ └────────────┘ └────────────┘ └────────────┘
```

## Key Components

1. **Express Server**: Handles HTTP requests and serves API responses
2. **Scheduler**: Manages periodic data updates using node-cron
3. **Scrapers**: Custom utilities to fetch and process data from each platform
4. **Data Storage**: JSON files for storing processed platform data
5. **Controllers**: Request handlers that process incoming requests
6. **Middleware**: Custom middleware for error handling and request processing
7. **Routes**: Defined API endpoints for accessing platform data

## Data Flow

1. The scheduler triggers periodic updates (every 6 hours)
2. Platform scrapers fetch data from external coding platforms
3. Data is processed and stored in JSON files
4. When an API request is received, controllers retrieve the stored data
5. Processed data is sent back to the client as a JSON response

## Routes Overview

The server defines the following routes:

### Coding Platform Routes (`/api/v1/codingPlatforms`)

| Method | Route                                | Description                        | Controller          |
| ------ | ------------------------------------ | ---------------------------------- | ------------------- |
| GET    | `/api/v1/codingPlatforms/all`        | Get data from all coding platforms | allPlatformsHandler |
| GET    | `/api/v1/codingPlatforms/leetcode`   | Get LeetCode profile data          | leetcodeHandler     |
| GET    | `/api/v1/codingPlatforms/codeforces` | Get CodeForces profile data        | codeforcesHandler   |
| GET    | `/api/v1/codingPlatforms/codechef`   | Get CodeChef profile data          | codechefHandler     |
| GET    | `/api/v1/codingPlatforms/gfg`        | Get GeeksforGeeks profile data     | gfgHandler          |

### Admin Routes (`/api/v1/admin`)

| Method | Route                          | Description                                     | Controller           |
| ------ | ------------------------------ | ----------------------------------------------- | -------------------- |
| GET    | `/api/v1/admin/check-status`   | Check if server is running                      | Direct response      |
| GET    | `/api/v1/admin/update-status`  | Check scheduler status                          | Direct response      |
| POST   | `/api/v1/admin/trigger-update` | Manually trigger data update from all platforms | asyncHandler wrapper |

### Health Check Route

| Method | Route     | Description              | Controller      |
| ------ | --------- | ------------------------ | --------------- |
| GET    | `/health` | Get server health status | Direct response |

For detailed information about request/response formats and examples, see the [API Documentation](./API.md).

## Configuration

The server uses environment variables for configuration. See the main README for details on available configuration options.

## Error Handling

The server implements a comprehensive error handling strategy:

- Custom error classes for different types of errors
- Global error handling middleware
- Error logging with detailed information
- Graceful error responses to clients

## Deployment Considerations

When deploying to production:

1. **Security**:

   - Set appropriate CORS restrictions
   - Add rate limiting to prevent abuse
   - Consider adding authentication for admin endpoints

2. **Performance**:

   - Optimize scheduler intervals based on usage patterns
   - Consider caching strategies for high-traffic scenarios
   - Monitor memory usage and optimize as needed

3. **Reliability**:
   - Implement robust logging
   - Add monitoring for key metrics
   - Set up alerts for critical failures

## Development Guidelines

When extending or modifying the server:

1. Follow the established project structure
2. Use async/await for asynchronous operations
3. Add appropriate error handling
4. Document new endpoints in API.md
5. Write tests for new functionality
6. Follow consistent coding style

## Troubleshooting

Common issues and solutions:

1. **Data not updating**:

   - Check scheduler logs
   - Verify external platform accessibility
   - Test scrapers manually

2. **API returning errors**:
   - Check data file integrity
   - Verify JSON format
   - Look for schema changes in external platforms

## Support

For questions or issues, please contact the repository maintainer or open an issue on GitHub.
