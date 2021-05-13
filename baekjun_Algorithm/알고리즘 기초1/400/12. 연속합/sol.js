const sol = ([n, dp]) => {
  n = +n;
  dp = dp.split(" ").map((v) => +v);
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    if (dp[i - 1] > 0 && dp[i] + dp[i - 1] > 0) {
      dp[i] += dp[i - 1];
    }
    if (max < dp[i]) max = dp[i];
  }
  console.log(max);
};

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    sol(input);
    process.exit();
  });
