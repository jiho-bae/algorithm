function solution(n) {
  const MOD = 1000000007;
  const dp = new Array(60001).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= 60000; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
  }

  return dp[n];
}

// 세로는 항상 2
// 가로는 n 이다.
// 타일은 가로 혹은 세로로 배치한다.
// n<=60,000이며, 경우의수를 1000000007로 나눈다.
