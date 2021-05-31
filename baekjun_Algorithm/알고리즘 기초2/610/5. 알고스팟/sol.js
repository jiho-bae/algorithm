const sol = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  input = input.slice(1);
  const adjM = input.map((row) => row.split("").map(Number));

  function bfs(sx, sy) {
    const queue = [];
    queue.push([sx, sy, 0]);
    const check = Array.from({ length: M }, () => new Array(N).fill(0));
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    while (queue.length) {
      const [x, y, cnt] = queue.shift();
      if (x === M - 1 && y === N - 1) return cnt;

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
        if (check[nx][ny]) continue;
        check[nx][ny] = 1;
        if (adjM[nx][ny]) {
          adjM[nx][ny] = 0;
          queue.push([nx, ny, cnt + 1]);
        } else {
          queue.unshift([nx, ny, cnt]);
        }
      }
    }
  }

  return bfs(0, 0);
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
