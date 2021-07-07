const sol = (input) => {
  const [N, M, K] = input[0].split(" ").map(Number);
  const map = input.slice(1).map((s) => s.split("").map(Number));
  const check = Array.from({ length: N }, () => new Array(M));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      check[i][j] = new Array(K + 1).fill(0);
    }
  }
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let result = Number.MAX_SAFE_INTEGER;
  function bfs() {
    const queue = [];
    queue.push([0, 0, 1, 0, true]);
    check[0][0][0] = 1;
    while (queue.length) {
      const [x, y, dist, destroy, daytime] = queue.shift();
      if (x === N - 1 && y === M - 1) {
        result = dist;
        return;
      }

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
        if (!map[nx][ny] && !check[nx][ny][destroy]) {
          check[nx][ny][destroy] = 1;
          queue.push([nx, ny, dist + 1, destroy, !daytime]);
        } else if (map[nx][ny] && !check[nx][ny][destroy + 1] && destroy < K) {
          if (daytime) {
            check[nx][ny][destroy + 1] = 1;
            queue.unshift([nx, ny, dist + 1, destroy + 1, !daytime]);
          } else {
            queue.push([x, y, dist + 1, destroy, !daytime]);
          }
        }
      }
    }
  }
  bfs();
  return result === Number.MAX_SAFE_INTEGER ? -1 : result;
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
