const sol = ([n, ...arr]) => {
  const price = [];
  for (let x of arr) price.push(x.split(" ").map((v) => +v));
  const dp = Array.from({ length: price.length }, () =>
    new Array(price[0].length).fill(0)
  );
  dp[0][0] = price[0][0];
  dp[0][1] = price[0][1];
  dp[0][2] = price[0][2];
  for (let i = 1; i < n; i++) {
    dp[i][0] = price[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = price[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = price[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
  }
  console.log(Math.min(...dp[n - 1]));
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
