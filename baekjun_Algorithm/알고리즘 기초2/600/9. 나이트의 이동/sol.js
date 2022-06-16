const sol = (input) => {
  const N = +input[0];
  let idx = 1;
  let result = "";

  function bfs(knight, target, I) {
    const queue = [];
    queue.push(knight);
    const visit = Array.from({ length: I }, () => Array(I).fill(0));
    visit[knight[0]][knight[1]] = 1;
    const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
    const dy = [1, 2, 2, 1, -1, -2, -2, -1];
    while (queue.length) {
      const [x, y] = queue.shift();
      if (x === target[0] && y === target[1]) {
        result += `${visit[x][y] - 1}\n`;
        break;
      }
      for (let i = 0; i < 8; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= I || ny >= I) continue;
        if (!visit[nx][ny]) {
          visit[nx][ny] = visit[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    const I = +input[idx++];
    const knight = input[idx++].split(" ").map((v) => +v);
    const target = input[idx++].split(" ").map((v) => +v);
    bfs(knight, target, I);
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
