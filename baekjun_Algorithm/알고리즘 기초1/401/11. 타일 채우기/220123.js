function sol(n) {
  if (n % 2) return 0;

  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[0] = 1;
  dp[2] = 3;

  for (let i = 4; i <= n; i += 2) {
    dp[i] = dp[i - 2] * 3;
    for (let j = 4; j <= i; j += 2) {
      dp[i] += +dp[i - j] * 2;
    }
  }

  return dp[n];
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(+line));
  })
  .on('close', () => {
    process.exit();
  });
