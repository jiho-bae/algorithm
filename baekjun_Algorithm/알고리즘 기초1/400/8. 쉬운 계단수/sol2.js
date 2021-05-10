//sliding window

const sol = (n) => {
  const dp = Array.from({ length: 2 }, () => new Array(12).fill(0));
  const MOD = 1000000000;
  let answer = 0;
  for (let i = 2; i <= 10; i++) dp[1][i] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= 10; j++) {
      dp[i % 2][j] =
        (dp[Math.abs((i - 1) % 2)][j - 1] + dp[Math.abs((i - 1) % 2)][j + 1]) %
        MOD;
    }
  }

  for (let i = 1; i <= 10; i++) answer = (answer + dp[n % 2][i]) % MOD;
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
