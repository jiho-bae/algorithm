const sol = (col, arr) => {
  const dp = Array.from({ length: 2 }, () => new Array(100001));
  dp[0][0] = dp[1][0] = 0;
  dp[0][1] = arr[0][1];
  dp[1][1] = arr[1][1];
  for (let i = 2; i <= col; i++) {
    dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2]) + arr[0][i];
    dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2]) + arr[1][i];
  }

  console.log(Math.max(dp[0][col], dp[1][col]));
};

let input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    const n = +input.shift();
    for (let i = 1; i <= n; i++) {
      const col = +input.shift();
      const arr = [];
      arr.push(input.shift().split(" "));
      arr.push(input.shift().split(" "));
      arr[0].unshift(0);
      arr[1].unshift(0);
      sol(col, arr);
    }
    process.exit();
  });
