function solution(n) {
  return "수박".repeat(parseInt(n / 2)) + (n % 2 === 1 ? "수" : "");
}
