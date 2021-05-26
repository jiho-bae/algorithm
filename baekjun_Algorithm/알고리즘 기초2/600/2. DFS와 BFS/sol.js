const sol = (input) => {
  const [N, M, V] = input[0].split(" ").map((v) => +v);
  const adjM = Array.from({ length: N + 1 }, () => Array(N).fill(0));
  let result = "";
  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map((v) => +v);
    adjM[a][b] = adjM[b][a] = 1;
  }

  const check = Array.from({ length: N + 1 }, () => 0);
  const dfsArr = [];
  function dfs(L) {
    check[L] = 1;
    dfsArr.push(L);
    for (let i = 1; i <= N; i++) {
      if (adjM[L][i] === 1 && !check[i]) {
        dfs(i);
      }
    }
  }
  dfs(V);

  const check2 = Array.from({ length: N + 1 }, () => 0);
  const bfsArr = [];
  function bfs(x) {
    const queue = [];
    queue.push(x);
    check2[x] = 1;
    while (queue.length) {
      let v = queue.shift();
      bfsArr.push(v);
      for (let i = 1; i <= N; i++) {
        if (adjM[v][i] === 1 && !check2[i]) {
          check2[i] = 1;
          queue.push(i);
        }
      }
    }
  }

  bfs(V);
  result = `${dfsArr.join(" ")}\n${bfsArr.join(" ")}`;
  return result;
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
