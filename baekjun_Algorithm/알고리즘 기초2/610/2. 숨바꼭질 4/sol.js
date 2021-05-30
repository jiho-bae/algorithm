const sol = (input) => {
  const [N, K] = input.split(" ").map(Number);
  if (N === K) return 0;
  const visit = Array.from({ length: 100100 }, () => 0);
  const path = Array.from({ length: 100100 }, () => 0);
  function bfs(N) {
    const queue = [];
    queue.push([N, 0]);
    visit[N] = 1;
    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const [cur, time] = queue.shift();
        for (next of [cur - 1, cur + 1, cur * 2]) {
          if (!visit[next] && next >= 0 && next <= 100000) {
            path[next] = cur;
            if (next === K) return time + 1;
            visit[next] = 1;
            queue.push([next, time + 1]);
          }
        }
      }
    }
  }

  const time = bfs(N);
  let order = [];
  order.push(K);
  let prev = path[K];
  for (let i = 0; i < time; i++) {
    order.push(prev);
    prev = path[prev];
  }
  order = order.reverse().join(" ");
  const result = `${time}\n${order}`;
  return result;
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
