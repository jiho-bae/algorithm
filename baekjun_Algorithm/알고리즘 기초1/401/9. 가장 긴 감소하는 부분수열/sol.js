const sol = ([n, series]) => {
  n = +n;
  series = series
    .split(" ")
    .map((v) => +v)
    .reverse();
  series.unshift(0);
  const dp = Array.from({ length: n + 1 }, () => 0);
  let max = 0;

  for (let i = 1; i <= n; i++) {
    let min = 0;
    for (let j = 0; j < i; j++) {
      if (series[i] > series[j]) {
        if (min < dp[j]) min = dp[j];
      }
      dp[i] = min + 1;
      if (max < dp[i]) max = dp[i];
    }
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
