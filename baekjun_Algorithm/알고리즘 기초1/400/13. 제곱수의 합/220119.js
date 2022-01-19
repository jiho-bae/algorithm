function sol(n) {
  const dp = Array.from({ length: n + 1 }, () => Number.MAX_SAFE_INTEGER);
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      dp[i] = 1;
      continue;
    }
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
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
