import rateLimit from 'express-rate-limit';

const notesRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 50, // max 50 requests per IP per window
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false, // Disable X-RateLimit-* headers
  message: {
    message: "Too many requests, please try again later 3 calls per 15 seconds"
  }
});

export default notesRateLimiter;