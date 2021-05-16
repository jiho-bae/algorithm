const sol = (n) => {
  const MOD = 10007;
  const dp = Array.from({ length: 2 }, () => new Array(10).fill(0));

  for (let i = 0; i <= 9; i++) dp[1][i] = 1;
  for (let i = 2; i <= n; i++) {
    const cur = i % 2;
    const prev = cur ? 0 : 1;
    for (let j = 0; j <= 9; j++) {
      dp[cur][j] = 0;
      for (let k = j; k <= 9; k++) {
        dp[cur][j] = (dp[cur][j] + dp[prev][k]) % MOD;
      }
    }
  }

  let answer = dp[n % 2].reduce((sum, val) => sum + val, 0) % MOD;
  console.log(answer);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    sol(+line);
  })
  .on("close", () => {
    process.exit();
  });
