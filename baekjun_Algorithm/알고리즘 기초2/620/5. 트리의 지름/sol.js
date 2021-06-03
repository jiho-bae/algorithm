const sol = (input) => {
  const N = +input[0];
  if (N === 1) return 0;
  input = input.slice(1);
  const tree = Array.from({ length: N + 1 }, () => new Array());
  input.map((str) => {
    const [from, to, dist] = str.split(" ").map(Number);
    tree[from].push([to, dist]);
    tree[to].push([from, dist]);
  });

  function bfs(s) {
    const check = new Array(N + 1).fill(0);
    const queue = [];
    queue.push([s, 0]);
    let max = { node: 0, dist: 0 };
    while (queue.length) {
      const [node, dist] = queue.shift();
      if (check[node]) continue;
      check[node] = 1;
      if (max.dist < dist) max = { node, dist };
      for (let [nextNode, nextDist] of tree[node]) {
        queue.push([nextNode, dist + nextDist]);
      }
    }
    return max;
  }

  return bfs(bfs(1).node).dist;
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
