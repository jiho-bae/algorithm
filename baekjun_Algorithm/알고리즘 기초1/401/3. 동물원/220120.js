function sol(n) {
  const MOD = 9901;
  const dp = Array.from({ length: n + 1 }, () => new Array(3).fill(0));
  dp[1][0] = 1;
  dp[1][1] = 1;
  dp[1][2] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % MOD;
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % MOD;
  }

  return dp[n].reduce((acc, val) => acc + val, 0) % MOD;
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(+line));
  })
  .on('close', () => {
    process.exit();
  });
