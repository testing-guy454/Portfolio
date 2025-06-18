# Portfolio Server API Documentation

**Version:** 1.0.0  
**Base URL:** `http://localhost:5000/api/v1`  
**Content-Type:** `application/json`

---

## 📚 Table of Contents

1. [Overview](#overview)
2. [Authentication](#authentication)
3. [Error Handling](#error-handling)
4. [Rate Limiting](#rate-limiting)
5. [Endpoints](#endpoints)
   - [Coding Platforms](#coding-platforms)
   - [Admin](#admin)
   - [Health Check](#health-check)
6. [Data Models](#data-models)
7. [Examples](#examples)
8. [SDKs & Libraries](#sdks--libraries)

---

## 🎯 Overview

The Portfolio Server API provides access to aggregated coding platform data including LeetCode, Codeforces, CodeChef, and GeeksforGeeks. The API is designed for portfolio websites to display coding achievements and statistics.

### Key Features

- ✅ Real-time coding platform data
- ✅ Comprehensive error handling
- ✅ RESTful design principles
- ✅ JSON responses
- ✅ CORS enabled
- ✅ Health monitoring

---

## 🔐 Authentication

Currently, the API is open and does not require authentication for read operations. Admin endpoints may require authentication in future versions.

```http
# No authentication required for public endpoints
GET /api/v1/codingPlatforms/all
```

---

## ❌ Error Handling

The API uses standard HTTP status codes and returns consistent error responses.

### Error Response Format

```json
{
  "success": false,
  "error": {
    "statusCode": 404,
    "message": "Resource not found",
    "timestamp": "2025-06-18T01:38:43.630Z",
    "path": "/api/v1/codingPlatforms/invalid"
  }
}
```

### HTTP Status Codes

- `200` - Success
- `400` - Bad Request
- `404` - Not Found
- `429` - Too Many Requests
- `500` - Internal Server Error
- `503` - Service Unavailable

---

## 🚦 Rate Limiting

The API implements rate limiting to ensure fair usage:

- **Window:** 15 minutes
- **Limit:** 100 requests per IP per window
- **Headers:** Rate limit information included in response headers

```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640995200
```

---

## 📋 Endpoints

### Coding Platforms

#### Get All Platforms Data

```http
GET /api/v1/codingPlatforms/all
```

**Description:** Retrieves aggregated data from all coding platforms.

**Response:**

```json
{
  "leetcode": {
    /* LeetCode data */
  },
  "codeforces": {
    /* Codeforces data */
  },
  "codechef": {
    /* CodeChef data */
  },
  "gfg": {
    /* GeeksforGeeks data */
  }
}
```

---

#### Get LeetCode Data

```http
GET /api/v1/codingPlatforms/leetcode
```

**Description:** Retrieves LeetCode profile data.

**Response:**

```json
{
  "handle": "mythical-UV",
  "globalRanking": 551446,
  "totalProblems": 218,
  "problemsSolved": {
    "total": 218,
    "easy": 106,
    "medium": 108,
    "hard": 4
  },
  "contestRating": 1570.434906412852,
  "contestsAttended": 9,
  "achievements": "2⭐",
  "lastUpdated": "2025-06-18T01:38:47.964Z"
}
```

---

#### Get Codeforces Data

```http
GET /api/v1/codingPlatforms/codeforces
```

**Description:** Retrieves Codeforces profile data.

**Response:**

```json
{
  "handle": "yuvraj.mehta532",
  "name": "Yuvraj Mehta",
  "currentRating": 795,
  "maxRating": 795,
  "currentRank": "newbie",
  "country": "India",
  "organization": "National Institute of technology, Patna",
  "contribution": 0,
  "problemsSolved": {
    "total": 6,
    "easy": 4,
    "medium": 0,
    "hard": 0,
    "unrated": 2
  },
  "contestStats": {
    "contestsAttended": 3,
    "contestRating": 795,
    "bestRank": 13055
  },
  "achievements": "newbie",
  "lastUpdated": "2025-06-18T01:38:44.910Z"
}
```

---

#### Get CodeChef Data

```http
GET /api/v1/codingPlatforms/codechef
```

**Description:** Retrieves CodeChef profile data.

**Response:**

```json
{
  "handle": "quick_unity_53",
  "currentRating": 1440,
  "maxRating": 1451,
  "stars": "★★",
  "globalRanking": 38106,
  "problemsSolved": {
    "total": 14,
    "basic": 0,
    "easy": 5,
    "medium": 5,
    "hard": 4
  },
  "contestsAttended": 4,
  "achievements": "N/A",
  "lastUpdated": "2025-06-18T01:38:43.630Z"
}
```

---

#### Get GeeksforGeeks Data

```http
GET /api/v1/codingPlatforms/gfg
```

**Description:** Retrieves GeeksforGeeks profile data.

**Response:**

```json
{
  "handle": "yuvrajmevbrx",
  "name": "Yuvraj Mehta National Institute of Technology, Patna (NIT Patna)",
  "rating": 350,
  "contestRating": 0,
  "totalProblems": 105,
  "problemsByDifficulty": {
    "basic": 2,
    "easy": 33,
    "medium": 66,
    "hard": 4
  },
  "currentBadge": "Ace",
  "currentStreak": 7,
  "maxStreak": 1415,
  "lastUpdated": "2025-06-18T01:38:45.450Z"
}
```

---

### Admin

#### Get Update Status

```http
GET /api/v1/admin/update-status
```

**Description:** Retrieves the current status of the data update scheduler.

**Response:**

```json
{
  "success": true,
  "message": "Scheduler is running",
  "schedule": "Every 6 hours"
}
```

---

#### Trigger Manual Update

```http
POST /api/v1/admin/trigger-update
```

**Description:** Manually triggers a data update for all platforms.

**Response:**

```json
{
  "success": true,
  "message": "Manual update completed",
  "result": {
    "successful": 4,
    "total": 4
  }
}
```

---

### Health Check

#### Health Status

```http
GET /health
```

**Description:** Retrieves server health and status information.

**Response:**

```json
{
  "status": "healthy",
  "timestamp": "2025-06-18T01:38:43.630Z",
  "uptime": 3600.123,
  "memory": {
    "rss": "45MB",
    "heapUsed": "32MB"
  }
}
```

---

## 📊 Data Models

### LeetCode Profile

```typescript
interface LeetCodeProfile {
  handle: string;
  globalRanking: number;
  totalProblems: number;
  problemsSolved: {
    total: number;
    easy: number;
    medium: number;
    hard: number;
  };
  contestRating: number;
  contestsAttended: number;
  achievements: string;
  lastUpdated: string; // ISO 8601 timestamp
}
```

### Codeforces Profile

```typescript
interface CodeforcesProfile {
  handle: string;
  name: string;
  currentRating: number;
  maxRating: number;
  currentRank: string;
  country: string;
  organization: string;
  contribution: number;
  problemsSolved: {
    total: number;
    easy: number;
    medium: number;
    hard: number;
    unrated: number;
  };
  contestStats: {
    contestsAttended: number;
    contestRating: number;
    bestRank: number;
  };
  achievements: string;
  lastUpdated: string;
}
```

### CodeChef Profile

```typescript
interface CodeChefProfile {
  handle: string;
  currentRating: number;
  maxRating: number;
  stars: string;
  globalRanking: number;
  problemsSolved: {
    total: number;
    basic: number;
    easy: number;
    medium: number;
    hard: number;
  };
  contestsAttended: number;
  achievements: string;
  lastUpdated: string;
}
```

### GeeksforGeeks Profile

```typescript
interface GfGProfile {
  handle: string;
  name: string;
  rating: number;
  contestRating: number;
  totalProblems: number;
  problemsByDifficulty: {
    basic: number;
    easy: number;
    medium: number;
    hard: number;
  };
  currentBadge: string;
  currentStreak: number;
  maxStreak: number;
  lastUpdated: string;
}
```

---

## 🔧 Examples

### JavaScript/Node.js

```javascript
// Fetch all platforms data
const response = await fetch(
  "http://localhost:5000/api/v1/codingPlatforms/all"
);
const data = await response.json();

console.log("LeetCode problems solved:", data.leetcode.problemsSolved.total);
console.log("Codeforces rating:", data.codeforces.currentRating);
```

### Python

```python
import requests

# Get LeetCode data
response = requests.get('http://localhost:5000/api/v1/codingPlatforms/leetcode')
data = response.json()

print(f"LeetCode ranking: {data['globalRanking']}")
print(f"Problems solved: {data['problemsSolved']['total']}")
```

### cURL

```bash
# Get all platforms data
curl -X GET "http://localhost:5000/api/v1/codingPlatforms/all" \
  -H "Accept: application/json"

# Trigger manual update
curl -X POST "http://localhost:5000/api/v1/admin/trigger-update" \
  -H "Content-Type: application/json"

# Check health
curl -X GET "http://localhost:5000/health"
```

### React/Frontend

```jsx
import { useState, useEffect } from "react";

function CodingStats() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/v1/codingPlatforms/all")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Coding Platform Stats</h2>
      {data.leetcode && (
        <div>
          <h3>LeetCode</h3>
          <p>Problems Solved: {data.leetcode.problemsSolved.total}</p>
          <p>Contest Rating: {data.leetcode.contestRating}</p>
        </div>
      )}
      {/* Other platforms... */}
    </div>
  );
}
```

---

## 📦 SDKs & Libraries

### Recommended HTTP Clients

**Node.js:**

- `axios` - Feature-rich HTTP client
- `node-fetch` - Lightweight fetch implementation
- `got` - Human-friendly and powerful HTTP request library

**Python:**

- `requests` - Simple and elegant HTTP library
- `httpx` - Modern async HTTP client
- `aiohttp` - Async HTTP client/server

**Browser:**

- `fetch` - Native browser API
- `axios` - Popular HTTP client library

---

## 🔄 Data Update Frequency

- **Automatic Updates:** Every 6 hours (configurable)
- **Manual Updates:** Available via admin endpoint
- **Data Freshness:** Each response includes `lastUpdated` timestamp

---

## 🎯 Best Practices

1. **Error Handling:** Always check the `success` field in responses
2. **Rate Limiting:** Implement client-side rate limiting to avoid 429 errors
3. **Caching:** Cache responses on the client side for better performance
4. **Timestamps:** Use `lastUpdated` to determine data freshness
5. **Monitoring:** Monitor the `/health` endpoint for service status

---

## 📞 Support

For issues, questions, or feature requests:

- Check server logs for detailed error information
- Verify network connectivity to external platforms
- Ensure proper CORS configuration for browser requests

---

_Last updated: June 18, 2025_
