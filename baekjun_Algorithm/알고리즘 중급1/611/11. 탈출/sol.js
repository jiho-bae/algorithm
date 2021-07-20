const sol = (input) => {
  let answer = 0;
  const [R, C] = input[0].split(" ").map(Number);
  const map = input.slice(1).map((str) => str.split(""));
  const check = Array(R)
    .fill()
    .map((_) => Array(C).fill(0));

  let D, S;
  let water = [];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (map[i][j] === "D") D = [i, j];
      if (map[i][j] === "S") S = [i, j];
      if (map[i][j] === "*") water.push([i, j]);
    }
  }

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  function spreadWater() {
    const spread = [];
    for (let [x, y] of water) {
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
        if (map[nx][ny] === ".") {
          map[nx][ny] = "*";
          spread.push([nx, ny]);
        }
      }
    }
    water.push(...spread);
  }

  function bfs() {
    const queue = [];
    queue.push([...S, 0]);
    check[S[0]][S[1]] = 1;
    while (queue.length) {
      const len = queue.length;
      spreadWater();
      for (let cycle = 0; cycle < len; cycle++) {
        const [x, y, cnt] = queue.shift();
        if (x === D[0] && y === D[1]) {
          answer = cnt;
          return;
        }

        for (let i = 0; i < 4; i++) {
          const [nx, ny] = [x + dx[i], y + dy[i]];
          if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
          if (map[nx][ny] === "*" || map[nx][ny] === "X" || check[nx][ny]) continue;
          check[nx][ny] = 1;
          queue.push([nx, ny, cnt + 1]);
        }
      }
    }
    return;
  }
  bfs();

  return answer || "KAKTUS";
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
