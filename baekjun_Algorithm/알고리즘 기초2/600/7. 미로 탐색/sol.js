const sol = (input) => {
  const [N, M] = input[0].split(" ").map((v) => +v);
  const adjM = [];
  for (let i = 1; i <= N; i++) adjM.push(input[i].split("").map((v) => +v));
  const check = Array.from({ length: N }, () => Array(M).fill(0));

  function bfs(row, col) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const queue = [];
    queue.push([row, col]);
    check[row][col] = 1;
    while (queue.length) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
        if (adjM[nx][ny] && !check[nx][ny]) {
          check[nx][ny] = check[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
  bfs(0, 0);
  return check[N - 1][M - 1];
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
