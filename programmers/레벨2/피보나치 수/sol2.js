function solution(n) {
  if (n < 2) return n;
  const fibo = { 0: 0, 1: 1 };
  for (let i = 2; i <= n; i++) fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 1234567;
  return fibo[n];
}
