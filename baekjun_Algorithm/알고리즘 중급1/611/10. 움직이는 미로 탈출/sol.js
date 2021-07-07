const sol = (input) => {
  let answer = 0;
  const map = input.map((str) => str.split(""));

  const wall = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (map[i][j] === "#") wall.push(`${i}${j}`);
    }
  }

  function downBlock() {
    for (let i = 7; i >= 0; i--) {
      for (let j = 7; j >= 0; j--) {
        if (map[i][j] === "#") {
          const wallIdx = wall.indexOf(`${i}${j}`);
          map[i][j] = ".";
          if (i === 7) {
            wall.splice(wallIdx, 1);
            continue;
          } else {
            wall[wallIdx] = String(+wall[wallIdx] + 10);
            map[i + 1][j] = "#";
          }
        }
      }
    }
  }

  function bfs() {
    const queue = [];
    queue.push([7, 0, 0]);
    const dx = [-1, -1, 0, 1, 1, 1, 0, -1, 0];
    const dy = [1, 0, 1, 1, 0, -1, -1, -1, 0];
    while (queue.length) {
      const len = queue.length;
      for (let k = 0; k < len; k++) {
        const [x, y, time] = queue.shift();
        if ((x === 0 && y === 7) || !wall.length || time >= 8) {
          answer = 1;
          return;
        }

        for (let i = 0; i < 9; i++) {
          const [nx, ny] = [x + dx[i], y + dy[i]];
          if (nx < 0 || ny < 0 || nx > 7 || ny > 7) continue;
          if (map[nx][ny] !== ".") continue;
          if (nx >= 1) {
            if (map[nx - 1][ny] === "#") continue;
          }
          queue.push([nx, ny, time + 1]);
        }
      }
      downBlock();
    }
  }
  bfs();

  return answer;
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
