const sol = (input) => {
  const N = +input[0];
  const arr = [];
  for (let i = 1; i <= N; i++) {
    arr.push(input[i].split(" ").map((v) => +v));
  }

  let max = Number.MIN_SAFE_INTEGER;
  function dfs(L, sum) {
    if (L === N) {
      max = Math.max(max, sum);
      return;
    }
    for (let i = L; i < N; i++) {
      if (i + arr[i][0] > N) {
        max = Math.max(max, sum);
        continue;
      }
      dfs(i + arr[i][0], sum + arr[i][1]);
    }
  }
  dfs(0, 0);
  return max;
};

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
