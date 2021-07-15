function sol(input) {
  let N = +input;
  const dp = Array.from({ length: 5001 }, () => 0);
  dp[3] = dp[5] = 1;
  for (let i = 6; i <= N; i++) {
    if (dp[i - 3]) dp[i] = dp[i - 3] + 1;
    if (dp[i - 5]) dp[i] = dp[i] ? Math.min(dp[i], dp[i - 5] + 1) : dp[i - 5] + 1;
  }
  return dp[N] ? dp[N] : -1;
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
