const sol = ([N, ...input]) => {
  N = +N;
  const arr = [];
  for (let x of input) arr.push(x.split(" ").map((v) => +v));
  const check = new Array(N).fill(0);
  let min = Number.MAX_SAFE_INTEGER;
  const start = 0;

  function dfs(L, sum, cur) {
    if (L === N && start === cur) {
      min = Math.min(sum, min);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (arr[cur][i] && !check[i]) {
        check[i] = 1;
        dfs(L + 1, sum + arr[cur][i], i);
        check[i] = 0;
      }
    }
  }
  dfs(0, 0, 0);
  return min;
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
