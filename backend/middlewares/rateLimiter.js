import rateLimit from 'express-rate-limit';

const notesRateLimiter = rateLimit({
  windowMs: 15 * 60 * 100, // 15 minutes
  max: 20, // max 100 requests per IP per window
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false, // Disable X-RateLimit-* headers
  message: {
    message: "Too many requests, please try again later 3 calls per 15 seconds"
  }
});

export default notesRateLimiter;