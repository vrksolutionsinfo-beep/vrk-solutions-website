// Simple in-memory sliding window rate limiter for Server Actions and API Routes
interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

export function checkRateLimit(
  identifier: string,
  limit: number = 5,
  windowMs: number = 60 * 1000
): { success: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);

  // Clean expired
  if (record && now > record.resetAt) {
    rateLimitStore.delete(identifier);
  }

  const current = rateLimitStore.get(identifier) || {
    count: 0,
    resetAt: now + windowMs,
  };

  if (current.count >= limit) {
    return {
      success: false,
      remaining: 0,
      resetAt: current.resetAt,
    };
  }

  current.count += 1;
  rateLimitStore.set(identifier, current);

  return {
    success: true,
    remaining: limit - current.count,
    resetAt: current.resetAt,
  };
}
