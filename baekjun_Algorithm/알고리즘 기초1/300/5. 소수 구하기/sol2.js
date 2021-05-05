const sol = (str) => {
  const [m, n] = str.split(" ").map(Number);
  const arr = Array(n + 1).fill(1);
  arr[1] = 0;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i]) {
      let j = 2;
      while (i * j <= n) {
        arr[i * j] = 0;
        j++;
      }
    }
  }

  const results = [];
  for (let i = m; i <= n; i++) {
    if (arr[i]) {
      results.push(i);
    }
  }
  return results.join("\n");
};

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    console.log(sol(input[0]));
    process.exit();
  });
