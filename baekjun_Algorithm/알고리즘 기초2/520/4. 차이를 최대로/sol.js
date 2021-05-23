const sol = ([N, str]) => {
  N = +N;
  const arr = str.split(" ").map((v) => +v);
  const check = new Array(N).fill(0);
  const temp = new Array(N).fill(0);
  let result = 0;
  function dfs(L) {
    if (L === N) {
      let max = 0;
      for (let i = 0; i < N - 1; i++) {
        max += Math.abs(temp[i] - temp[i + 1]);
      }
      result = Math.max(max, result);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!check[i]) {
        check[i] = 1;
        temp[L] = arr[i];
        dfs(L + 1);
        check[i] = 0;
      }
    }
  }
  dfs(0);
  console.log(result);
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
