const sol = (S) => {
  const MAX_SIZE = 1000;
  const check = Array.from({ length: MAX_SIZE + 1 }, () =>
    Array(MAX_SIZE + 1).fill(0)
  );

  function bfs() {
    const queue = [];
    queue.push([1, 0, 0]);
    check[1][0] = 1;

    while (queue.length) {
      const [now, clipBoard, time] = queue.shift();
      if (now === S) return time;
      if (0 >= now || now > MAX_SIZE) continue;

      if (!check[now][now]) {
        check[now][now] = 1;
        queue.push([now, now, time + 1]);
      }

      if (clipBoard && now + clipBoard <= MAX_SIZE) {
        if (!check[now + clipBoard][clipBoard]) {
          check[now + clipBoard][clipBoard] = 1;
          queue.push([now + clipBoard, clipBoard, time + 1]);
        }
      }

      if (!check[now - 1][clipBoard]) {
        check[now - 1][clipBoard] = 1;
        queue.push([now - 1, clipBoard, time + 1]);
      }
    }
  }

  return bfs();
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(+line));
  })
  .on("close", () => {
    process.exit();
  });
