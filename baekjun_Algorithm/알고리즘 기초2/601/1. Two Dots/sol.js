const sol = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  const gameBoard = [];
  for (let i = 1; i <= N; i++) gameBoard.push(input[i].split(""));

  const check = Array.from({ length: N }, () => Array(M).fill(0));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let flag = 0;

  function dfs(x, y, cnt) {
    if (flag) return;

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx <= -1 || ny <= -1 || nx >= N || ny >= M) continue;
      if (gameBoard[nx][ny] !== gameBoard[start.x][start.y]) continue;
      if (!check[nx][ny]) {
        check[nx][ny] = 1;
        dfs(nx, ny, cnt + 1);
        check[nx][ny] = 0;
        continue;
      } else if (cnt >= 4 && nx === start.x && ny === start.y) {
        flag = 1;
        return;
      }
    }
  }

  let start;
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      start = { x, y };
      check[x][y] = 1;
      dfs(x, y, 1);
      check[x][y] = 0;
      if (flag) break;
    }
  }
  return flag ? "Yes" : "No";
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
