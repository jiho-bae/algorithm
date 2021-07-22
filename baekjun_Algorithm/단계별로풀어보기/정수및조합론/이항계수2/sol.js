function sol(input) {
  const dp = Array.from({ length: 1001 }, () => new Array(1001));
  const [n, k] = input.split(" ").map(Number);

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === j || j === 0) dp[i][j] = 1;
      else dp[i][j] = (dp[i - 1][j] + dp[i - 1][j - 1]) % 10007;
    }
  }
  return dp[n][k];
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
