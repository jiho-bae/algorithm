const sol = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  const map = input.slice(1).map((s) => s.split("").map(Number));
  const check = Array.from({ length: N }, () => new Array(M));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      check[i][j] = new Array(2).fill(0);
    }
  }
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let result = Number.MAX_SAFE_INTEGER;
  function bfs() {
    const queue = [];
    queue.push([0, 0, 1, 0]);
    check[0][0][0] = 1;
    while (queue.length) {
      const [x, y, cnt, destroy] = queue.shift();
      if (x === N - 1 && y === M - 1) {
        result = Math.min(result, cnt);
        return;
      }

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
        if (!map[nx][ny] && !check[nx][ny][destroy]) {
          check[nx][ny][destroy] = 1;
          queue.push([nx, ny, cnt + 1, destroy]);
        } else if (!destroy && map[nx][ny] === 1) {
          check[nx][ny][1] = 1;
          queue.push([nx, ny, cnt + 1, 1]);
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
