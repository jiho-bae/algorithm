const sol = (input) => {
  const [N, K] = input[0].split(" ").map(Number);
  const jewels = input.slice(1, N + 1).map((s) => s.split(" ").map(Number));
  const bags = input.slice(N + 1).map(Number);
  jewels.sort((a, b) => (a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]));
  bags.sort((a, b) => a - b);

  let idx = 0;
  let sum = 0;
  let flag = 0;
  while (flag !== K) {}
  return sum;
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
