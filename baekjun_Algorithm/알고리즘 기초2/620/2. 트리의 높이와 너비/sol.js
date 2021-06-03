const sol = (input) => {
  const N = +input[0];
  input = input.slice(1);
  const tree = Array.from({ length: N + 1 }, () => new Array());
  const findRoot = Array.from({ length: N + 1 }, () => 0);
  input.map((str) => {
    const [from, ...nextInfo] = str.split(" ").map(Number);
    findRoot[from]++;
    for (let to of nextInfo) {
      tree[from].push(to);
      findRoot[to]++;
    }
  });

  const rootNode = findRoot.indexOf(1);
  const rows = Array.from({ length: N + 1 }, () => new Array());
  let column = 1;
  function inorder(L, node) {
    const [left, right] = tree[node];
    if (left !== -1) inorder(L + 1, left);
    rows[L].push(column++);
    if (right !== -1) inorder(L + 1, right);
  }
  inorder(1, rootNode);

  rows.map((level) => level.sort((a, b) => a - b));
  let max = [0, 0];
  rows.map((row, level) => {
    if (!row.length) return;
    const width = Math.max(...row) - Math.min(...row) + 1;
    if (width > max[1]) max = [level, width];
  });

  return max.join(" ");
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
