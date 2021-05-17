const sol = ([n, ...arr]) => {
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = arr[0];
  dp[2] = arr[0] + arr[1];
  for (let i = 3; i < n + 1; i++) {
    dp[i] = Math.max(
      dp[i - 3] + arr[i - 2] + arr[i - 1],
      dp[i - 2] + arr[i - 1]
    );
    dp[i] = Math.max(dp[i], dp[i - 1]);
  }
  console.log(dp[n]);
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
