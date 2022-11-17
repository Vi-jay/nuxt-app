export function sleepAsync(ttl) {
  return new Promise((resolve) => setTimeout(resolve, ttl * 1000));
}
