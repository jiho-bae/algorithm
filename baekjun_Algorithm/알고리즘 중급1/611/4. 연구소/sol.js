const sol = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  const map = input.slice(1).map((s) => s.split(" ").map(Number));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const virus = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 2) virus.push([i, j]);
    }
  }
  let max = Number.MIN_SAFE_INTEGER;

  function bfs() {
    const spread = Array.from({ length: N }, () => new Array(M).fill(0));
    const queue = virus.slice();
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        spread[i][j] = map[i][j];
      }
    }
    while (queue.length) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
        if (spread[nx][ny] === 0) {
          spread[nx][ny] = 2;
          queue.push([nx, ny]);
        }
      }
    }
    let length = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (spread[i][j] === 0) length++;
      }
    }
    max = Math.max(max, length);
  }
  function wall(cnt) {
    if (cnt === 3) {
      bfs();
      return;
    }
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (map[i][j] === 0) {
          map[i][j] = 1;
          wall(cnt + 1);
          map[i][j] = 0;
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 0) {
        map[i][j] = 1;
        wall(1);
        map[i][j] = 0;
      }
    }
  }
  return max;
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
