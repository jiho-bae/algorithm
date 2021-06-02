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
  let maxDist = Number.MIN_SAFE_INTEGER;
  let maxNode = -1;
  function dfs(node, dist) {
    check[node] = 1;
    if (maxDist < dist) {
      maxDist = dist;
      maxNode = node;
    }
    for (let [nextNode, nextDist] of tree[node]) {
      if (check[nextNode]) continue;
      dfs(nextNode, dist + nextDist);
    }
  }
  dfs(1, 0);
  maxDist = 0;

  check = new Array(N + 1).fill(0);
  dfs(maxNode, 0);
  return maxDist;
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
