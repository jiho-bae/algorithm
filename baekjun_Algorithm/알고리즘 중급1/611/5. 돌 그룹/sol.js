const sol = (line) => {
  const [A, B, C] = line
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const check = Array.from({ length: 1501 }, () => new Array(1501).fill(0));
  const sum = A + B + C;
  let answer = 0;

  function bfs() {
    const queue = [];
    queue.push([A, B]);
    check[A][B] = 1;
    while (queue.length) {
      let [a, b] = queue.shift();
      const c = sum - a - b;
      if (a === b && a === c) {
        answer = 1;
        return;
      }
      for (let [X, Y] of [
        [a, b],
        [a, c],
        [b, c],
      ]) {
        if (X < Y) [X, Y] = [X + X, Y - X];
        else if (X > Y) [X, Y] = [Y + Y, X - Y];
        else if (X === Y) continue;
        const Z = sum - X - Y;
        const nx = Math.min(X, Y, Z);
        const ny = Math.max(X, Y, Z);
        if (check[nx][ny]) continue;
        check[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }

  if (sum % 3 === 0) bfs();
  return answer;
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
