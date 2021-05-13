const sol = (str) => {
  let [n, k] = str.split(" ").map((v) => +v);
  let dp = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(0));
  let MOD = 1000000000;

  for (let i = 0; i <= n; i++) dp[1][i] = 1;

  for (let i = 0; i <= k; i++) dp[i][0] = 1;

  for (let i = 2; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % MOD;
    }
  }
  console.log(dp);
  console.log(dp[k][n]);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    sol(line);
  })
  .on("close", () => {
    process.exit();
  });
