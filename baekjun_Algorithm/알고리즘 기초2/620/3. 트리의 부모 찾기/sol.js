const sol = (input) => {
  const N = +input[0];
  input = input.slice(1);
  const tree = Array.from({ length: N + 1 }, () => new Array());
  input.map((val) => {
    const [from, to] = val.split(" ").map(Number);
    tree[from].push(to);
    tree[to].push(from);
  });

  let check = Array.from({ length: N + 1 }, () => 0);
  function bfs() {
    const queue = [];
    check[1] = 1;
    for (let x of tree[1]) {
      check[x] = 1;
      queue.push(x);
    }
    while (queue.length) {
      const node = queue.shift();
      for (let next of tree[node]) {
        if (check[next]) continue;
        check[next] = node;
        queue.push(next);
      }
    }
  }
  bfs();

  check = check.slice(2);
  let result = "";
  check.map((v) => (result += `${v}\n`));
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
