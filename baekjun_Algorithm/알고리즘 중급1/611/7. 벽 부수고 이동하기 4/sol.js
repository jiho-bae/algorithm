const sol = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  const map = input.slice(1).map((s) => s.split("").map(Number));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const idxArr = new Array(1001).fill(0);
  let idx = 2;

  function bfs(i, j) {
    const queue = [];
    queue.push([i, j]);
    map[i][j] = idx;
    let cnt = 1;
    while (queue.length) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
        if (!map[nx][ny]) {
          map[nx][ny] = idx;
          cnt++;
          queue.push([nx, ny]);
        }
      }
    }
    idxArr[idx++] = cnt;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!map[i][j]) bfs(i, j);
      else if (map[i][j] === 1) map[i][j] = -1;
    }
  }

  function checkAround(x, y) {
    let sum = 1;
    let set = new Set();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      const next = map[nx][ny];
      if (next !== -1 && !set.has(next)) {
        set.add(next);
        sum += idxArr[next];
      }
    }
    return sum % 10;
  }

  let result = "";
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === -1) result += `${checkAround(i, j)}`;
      else result += `0`;
    }
    result += `\n`;
  }
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
