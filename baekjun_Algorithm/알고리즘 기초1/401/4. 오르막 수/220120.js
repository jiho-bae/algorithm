function sol(n) {
  const MOD = 10007;
  const dp = Array.from({ length: n + 1 }, () => new Array(10).fill(0));

  for (let num = 0; num < 10; num++) {
    dp[1][num] = 1;
  }
  for (let current = 2; current <= n; current++) {
    for (let prev = 0; prev < 10; prev++) {
      dp[current][prev] =
        dp[current - 1].slice(0, prev + 1).reduce((acc, val) => acc + val, 0) %
        MOD;
    }
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
