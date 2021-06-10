const sol = (input) => {
  const N = +input[0];
  const dx = [-2, -2, 0, 0, 2, 2];
  const dy = [-1, 1, -2, 2, -1, 1];
  const [sx, sy, tx, ty] = input[1].split(" ").map(Number);

  let result = -1;
  function bfs(sx, sy, tx, ty) {
    const queue = [];
    queue.push([sx, sy, 0]);
    const check = Array.from({ length: N }, () => new Array(N).fill(0));
    check[sx][sy] = 1;
    while (queue.length) {
      const [x, y, cnt] = queue.shift();
      if (x === tx && y === ty) {
        result = cnt;
        break;
      }
      for (let i = 0; i < 6; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx >= N || ny >= N || nx < 0 || ny < 0) continue;
        if (!check[nx][ny]) {
          check[nx][ny] = 1;
          queue.push([nx, ny, cnt + 1]);
        }
      }
    }
  }
  bfs(sx, sy, tx, ty);

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
