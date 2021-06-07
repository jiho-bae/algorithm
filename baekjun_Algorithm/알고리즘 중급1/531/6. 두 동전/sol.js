const sol = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  const arr = input.slice(1).map((str) => str.split(""));
  const coin = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === "o") {
        coin.push([i, j]);
      }
    }
  }

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let min = Number.MAX_SAFE_INTEGER;

  function drop(x, y) {
    if (x < 0 || y < 0 || x >= N || y >= M) return true;
    return false;
  }

  function checkWall(x, y, idx) {
    const [nx, ny] = [x + dx[idx], y + dy[idx]];
    if (arr[nx]) {
      if (arr[nx][ny] === "#") return [x, y];
    }
    return [nx, ny];
  }

  function dfs(cnt, x1, y1, x2, y2) {
    if (cnt >= min) return;
    if (cnt > 10) return;
    if (drop(x1, y1) && drop(x2, y2)) return;
    if (drop(x1, y1) || drop(x2, y2)) {
      min = Math.min(min, cnt);
      return;
    }
    for (let i = 0; i < 4; i++) {
      const [nx1, ny1] = checkWall(x1, y1, i);
      const [nx2, ny2] = checkWall(x2, y2, i);
      dfs(cnt + 1, nx1, ny1, nx2, ny2);
    }
  }

  dfs(0, coin[0][0], coin[0][1], coin[1][0], coin[1][1]);
  if (min === Number.MAX_SAFE_INTEGER) return -1;
  return min;
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
