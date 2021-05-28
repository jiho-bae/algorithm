const sol = (input) => {
  let w = (h = 0);
  let adjM = [];
  let result = "";
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  const bfs = (row, col) => {
    const queue = [];
    queue.push([row, col]);
    while (queue.length) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 8; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx >= 0 && ny >= 0 && nx < h && ny < w && adjM[nx][ny]) {
          queue.push([nx, ny]);
          adjM[nx][ny] = 0;
        }
      }
    }
  };

  for (let i = 0; i < input.length - 1; i = i + h + 1) {
    [w, h] = input[i].split(" ").map((v) => +v);
    if (w === 0) continue;
    if (w === 1) {
      result += `${input[i + h]}\n`;
      continue;
    }
    adjM = new Array();
    for (let k = i + 1; k < i + h + 1; k++) {
      adjM.push(input[k].split(" ").map((v) => +v));
    }

    let cnt = 0;
    for (let col = 0; col < w; col++) {
      for (let row = 0; row < h; row++) {
        if (adjM[row][col]) {
          adjM[row][col] = 0;
          bfs(row, col);
          cnt++;
        }
      }
    }
    result += `${cnt}\n`;
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
