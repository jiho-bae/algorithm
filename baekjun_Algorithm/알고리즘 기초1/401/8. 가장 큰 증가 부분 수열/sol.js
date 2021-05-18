const sol = ([n, arr]) => {
  n = +n;
  arr = arr.split(" ").map((v) => +v);
  const dp = Array.from({ length: n }, () => 0);
  const dp2 = arr.slice();

  for (let i = 0; i < n; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        dp2[i] = Math.max(dp2[i], dp2[j] + arr[i]);
      }
    }
  }
  console.log(Math.max(...dp2));
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
