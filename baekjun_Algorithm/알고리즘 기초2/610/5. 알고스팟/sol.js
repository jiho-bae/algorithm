const sol = (input) => {
  const [M, N] = input[0].split(" ").map(Number);
  input = input.slice(1);
  const adjM = input.map((row) => row.split("").map(Number));

  function bfs(sx, sy) {
    const deque = [];
    deque.push([sx, sy, 0]);
    const check = Array.from({ length: N }, () => new Array(M).fill(0));
    check[sx][sy] = 1;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    while (deque.length) {
      const [x, y, cnt] = deque.shift();
      if (x === N - 1 && y === M - 1) return cnt;

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
        if (check[nx][ny]) continue;
        check[nx][ny] = 1;
        if (adjM[nx][ny]) {
          adjM[nx][ny] = 0;
          deque.push([nx, ny, cnt + 1]);
        } else {
          deque.unshift([nx, ny, cnt]);
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
