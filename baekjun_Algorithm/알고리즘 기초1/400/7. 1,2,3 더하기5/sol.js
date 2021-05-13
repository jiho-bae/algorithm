const sol = ([n, ...arr]) => {
  n = +n;
  arr = arr.map((v) => +v);
  let MOD = BigInt(1000000009);
  let dp = Array.from({ length: arr[n - 1] + 1 }, () =>
    new Array(3 + 1).fill(BigInt(0))
  );
  dp[1][1] = dp[2][2] = dp[3][1] = dp[3][2] = dp[3][3] = BigInt(1);
  for (let i = 4; i <= arr[n - 1]; i++) {
    dp[i][1] = dp[i - 1][2] + (dp[i - 1][3] % MOD);
    dp[i][2] = dp[i - 2][1] + (dp[i - 2][3] % MOD);
    dp[i][3] = dp[i - 3][1] + (dp[i - 3][2] % MOD);
  }
  let answer = "";
  for (let x of arr) {
    answer += `${(((dp[x][1] + dp[x][2]) % MOD) + dp[x][3]) % MOD}\n`;
  }
  console.log(answer);
};

let input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(+line);
  })
  .on("close", () => {
    sol(input);
    process.exit();
  });
