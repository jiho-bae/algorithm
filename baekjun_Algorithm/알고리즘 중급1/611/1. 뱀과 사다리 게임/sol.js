const sol = (input) => {
  const shortcut = new Array(101).fill(0);
  input.slice(1).map((str) => {
    const [idx, val] = str.split(" ").map(Number);
    shortcut[idx] = val;
  });

  let result;

  function bfs() {
    const queue = [];
    queue.push([1, 0]);
    const check = new Array(101).fill(0);
    check[1] = 1;

    while (queue.length) {
      const [pos, cnt] = queue.shift();
      if (pos === 100) {
        result = cnt;
        return;
      }
      for (let i = 1; i <= 6; i++) {
        if (pos + i > 100 || check[pos + i]) continue;
        check[pos + i] = 1;
        if (shortcut[pos + i]) queue.push([shortcut[pos + i], cnt + 1]);
        else queue.push([pos + i, cnt + 1]);
      }
    }
  }
  bfs();
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
