const sol = (input) => {
  const [M, N] = input[0].split(" ").map((v) => +v);
  const box = [];
  const queue = [];
  for (let i = 1; i <= N; i++) {
    const arr = input[i].split(" ").map((v) => +v);
    box.push(arr);
    let idx = -1;
    while (true) {
      idx = arr.indexOf(1, idx + 1);
      if (idx === -1) break;
      queue.push([i - 1, idx]);
    }
  }

  let day = 0;
  function bfs() {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let prevIterator = 0;
    while (true) {
      const curIterator = queue.length;
      let change = 0;
      for (let i = prevIterator; i < curIterator; i++) {
        const [x, y] = queue[i];
        for (let i = 0; i < 4; i++) {
          const [nx, ny] = [x + dx[i], y + dy[i]];
          if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
          if (!box[nx][ny]) {
            change = 1;
            box[nx][ny] = day + 1;
            queue.push([nx, ny]);
          }
        }
      }
      if (!change) break;
      day++;
      prevIterator = curIterator;
    }
  }
  bfs();

  for (let i = 0; i < N; i++) {
    if (box[i].includes(0)) {
      return -1;
    }
  }
  return day;
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
