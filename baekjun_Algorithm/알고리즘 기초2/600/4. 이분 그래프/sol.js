const sol = (input) => {
  const K = +input[0];
  let V = (E = 0);
  let idx = 1;
  let adjArr, visit, flag;
  let result = "";

  const bfs = (L) => {
    if (!flag) return;
    const queue = [];
    queue.push(L);
    let color = 1;
    visit[L] = color;
    while (queue.length) {
      let cur = queue.shift();
      if (visit[cur] === 1) color = 2;
      else if (visit[cur] === 2) color = 1;
      for (let i = 0; i < adjArr[cur].length; i++) {
        const next = adjArr[cur][i];
        if (!visit[next]) {
          visit[next] = color;
          queue.push(next);
        }
        if (visit[next] !== color) {
          flag = 0;
          return;
        }
      }
    }
  };

  for (let i = 0; i < K; i++) {
    flag = 1;
    [V, E] = input[idx].split(" ").map((v) => +v);
    adjArr = Array.from({ length: V + 1 }, () => Array());
    visit = new Array(V + 1).fill(0);
    for (let j = 1; j <= E; j++) {
      idx++;
      const [from, to] = input[idx].split(" ").map((v) => +v);
      adjArr[from].push(to);
      adjArr[to].push(from);
    }
    for (let i = 1; i <= V; i++) {
      if (!visit[i]) bfs(i);
    }
    idx++;
    if (flag) result += "YES\n";
    else result += "NO\n";
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
