const sol = (input) => {
  const N = +input[0];
  const adjM = [];
  let cnt = 0;
  let cntArr = [];
  for (let i = 1; i <= N; i++) {
    adjM.push(input[i].split("").map((v) => +v));
  }
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const bfs = (i, j) => {
    cntArr[cnt] = 0;
    const queue = [];
    queue.push([i, j]);
    adjM[i][j] = 0;
    while (queue.length) {
      cntArr[cnt]++;
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && ny >= 0 && nx < N && ny < N && adjM[nx][ny]) {
          queue.push([nx, ny]);
          adjM[nx][ny] = 0;
        }
      }
    }
    cnt++;
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (adjM[i][j]) bfs(i, j);
    }
  }

  cntArr.sort((a, b) => a - b);
  let result = `${cnt}\n`;
  for (let i = 0; i < cnt; i++) {
    result += `${cntArr[i]}\n`;
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
