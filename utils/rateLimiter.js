class RateLimiter {
  constructor(max, window) {
    this.max = max;
    this.window = window;
    this.requests = new Map();
  }
  isAllowed(id) {
    if (!this.requests.has(id)) this.requests.set(id, []);
    const now = Date.now();
    const reqs = this.requests.get(id).filter(t => now - t < this.window);
    if (reqs.length < this.max) {
      reqs.push(now);
      this.requests.set(id, reqs);
      return true;
    }
    return false;
  }
}
module.exports = RateLimiter;