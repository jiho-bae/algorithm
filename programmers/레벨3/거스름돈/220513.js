function solution(n, money) {
  const MOD = 1000000007;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (m of money) {
    for (let i = m; i <= n; i++) {
      dp[i] += dp[i - m];
    }
  }

  return dp[n] % MOD;
}
