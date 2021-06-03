const sol = (input) => {
  const N = +input[0];
  input = input.slice(1);
  const tree = Array.from({ length: N + 1 }, () => new Array());

  input.map((str) => {
    const [node, ...nextInfo] = str.split(" ").map(Number);
    for (let i = 0; i < nextInfo.length - 1; i += 2) {
      tree[node].push([nextInfo[i], nextInfo[i + 1]]);
    }
  });

  let check = Array.from({ length: N + 1 }, () => 0);
  let max = { node: 0, dist: Number.MIN_SAFE_INTEGER };

  function dfs(node, dist) {
    check[node] = 1;
    if (max.dist < dist) max = { node, dist };
    for (let [nextNode, nextDist] of tree[node]) {
      if (check[nextNode]) continue;
      dfs(nextNode, dist + nextDist);
    }
  }

  dfs(1, 0);
  max.dist = Number.MIN_SAFE_INTEGER;
  check = new Array(N + 1).fill(0);

  dfs(max.node, 0);
  return max.dist;
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
