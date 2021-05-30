const sol = (input) => {
  const [N, K] = input.split(" ").map(Number);
  const visit = Array.from({ length: 100100 }, () => 0);

  function bfs(N) {
    const queue = [];
    queue.push([N, 0]);
    visit[N] = 1;
    while (queue.length) {
      const [cur, time] = queue.shift();
      if (cur === K) return time;
      for (next of [cur - 1, cur + 1, cur * 2]) {
        if (!visit[next] && next >= 0 && next <= 100000) {
          visit[next] = 1;
          queue.push([next, time + 1]);
        }
      }
    }
  }
  return bfs(N);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(line));
  })
  .on("close", () => {
    process.exit();
  });
