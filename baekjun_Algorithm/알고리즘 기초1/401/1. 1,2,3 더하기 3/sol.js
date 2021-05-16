const sol = ([n, ...arr]) => {
  arr = arr.map((v) => +v);
  let max = Math.max(...arr);
  const MOD = 1000000009;
  const dp = Array.from({ length: max + 1 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  for (let i = 4; i <= max; i++)
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % MOD;

  let answer = "";
  for (let x of arr) answer += `${dp[x]}\n`;
  console.log(answer);
};

let input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    sol(input);
    process.exit();
  });
