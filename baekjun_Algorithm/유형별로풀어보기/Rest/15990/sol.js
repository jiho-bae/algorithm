function sol(input) {
  const MOD = 1000000009;
  const SIZE = 100000;
  const dp = Array.from({ length: SIZE + 1 }, () => new Array(4).fill(0));

  dp[1][1] = dp[2][2] = dp[3][1] = dp[3][2] = dp[3][3] = 1;
  for (let i = 4; i < SIZE + 1; i++) {
    dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % MOD;
    dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % MOD;
    dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % MOD;
  }

  let answer = "";
  input.slice(1).map((n) => {
    n = +n;
    answer += `${(dp[n][1] + dp[n][2] + dp[n][3]) % MOD}\n`;
  });
  return answer;
}

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(sol(input));
    process.exit();
  });
