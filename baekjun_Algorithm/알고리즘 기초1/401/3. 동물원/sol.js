const sol = (n) => {
  const MOD = 9901;
  const dp = Array.from({ length: 2 }, () => new Array(2).fill(0));
  dp[1][0] = 1;
  dp[1][1] = 2;
  for (let i = 2; i <= n; i++) {
    const cur = i % 2;
    let prev;
    if (cur === 1) prev = 0;
    else prev = 1;
    dp[cur][0] = (dp[prev][0] + dp[prev][1]) % MOD;
    dp[cur][1] = (dp[prev][0] * 2 + dp[prev][1]) % MOD;
  }
  console.log((dp[n % 2][0] + dp[n % 2][1]) % MOD);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    sol(+line);
  })
  .on("close", () => {
    process.exit();
  });
