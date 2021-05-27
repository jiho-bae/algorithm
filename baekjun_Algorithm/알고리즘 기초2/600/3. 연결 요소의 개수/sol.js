const sol = (input) => {
  const [N, M] = input[0].split(" ").map((v) => +v);
  const adjM = Array.from({ length: N + 1 }, () => Array(N).fill(0));
  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map((v) => +v);
    adjM[a][b] = adjM[b][a] = 1;
  }

  const visit = Array.from({ length: N + 1 }, () => 0);
  let cnt = 0;

  function bfs(L) {
    if (visit[L]) return;
    const queue = [];
    queue.push(L);
    visit[L] = 1;
    while (queue.length) {
      let v = queue.shift();
      for (let i = 1; i <= N; i++) {
        if (adjM[v][i] === 1 && !visit[i]) {
          visit[i] = 1;
          queue.push(i);
        }
      }
    }
    cnt++;
  }

  for (let i = 1; i <= N; i++) {
    bfs(i);
  }
  return cnt;
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
