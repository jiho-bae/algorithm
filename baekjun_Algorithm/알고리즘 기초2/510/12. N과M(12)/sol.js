const sol = (input) => {
  const [N, M] = input[0].split(" ").map((v) => +v);
  const arr = input[1]
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b);

  const temp = new Array(M).fill(0);
  const set = new Set();

  function dfs(L, K) {
    if (L === M) {
      set.add(`${temp.join(" ")}`);
      return;
    }

    for (let i = K - 1; i < N; i++) {
      temp[L] = arr[i];
      dfs(L + 1, i + 1);
    }
  }
  dfs(0, 1);
  console.log(Array.from(set).join("\n"));
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
