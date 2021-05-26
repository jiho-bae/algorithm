const sol = (input) => {
  const [N, M] = input[0].split(" ").map((v) => +v);
  const adjM = Array.from({ length: N }, () => Array(N).fill(0));
  const check = Array.from({ length: N }, () => 0);
  let flag = 0;
  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map((v) => +v);
    adjM[a][b] = adjM[b][a] = 1;
  }

  const dfs = (L, cnt) => {
    if (flag) return;
    if (cnt === 4) {
      flag = 1;
      return;
    }

    for (let i = 0; i < N; i++) {
      if (adjM[L][i] === 1 && !check[i]) {
        check[i] = 1;
        dfs(i, cnt + 1);
        check[i] = 0;
      }
    }
  };

  for (let i = 0; i < N; i++) {
    check[i] = 1;
    dfs(i, 0);
    check[i] = 0;
  }
  if (flag) return 1;
  return 0;
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
