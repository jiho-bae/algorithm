const sol = (n) => {
  let dp = Array.from({ length: n + 1 }, (v, i) => i);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
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
