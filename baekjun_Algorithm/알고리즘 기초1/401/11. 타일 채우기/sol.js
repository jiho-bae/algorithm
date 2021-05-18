const sol = (n) => {
  if (n % 2) {
    console.log(0);
    return;
  }

  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[2] = 3;
  for (let i = 4; i <= n; i += 2) {
    dp[i] = dp[i - 2] * 3;
    for (let j = 4; j <= i; j += 2) {
      dp[i] += dp[i - j] * 2;
    }
  }
  console.log(dp[n]);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    sol(+line);
  })
  .on("close", () => {
    process.exit();
  });
