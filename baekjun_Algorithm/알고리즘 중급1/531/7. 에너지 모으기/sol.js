const sol = (input) => {
  const N = +input[0];
  const energy = input[1].split(" ").map(Number);
  let max = Number.MIN_SAFE_INTEGER;

  function dfs(arr, sum) {
    if (arr.length === 2) {
      max = Math.max(max, sum);
      return;
    }

    for (let i = 1; i < arr.length - 1; i++) {
      const restArr = [...arr.slice(0, i), ...arr.slice(i + 1, arr.length)];
      dfs(restArr, sum + arr[i - 1] * arr[i + 1]);
    }
  }
  dfs(energy, 0);
  return max;
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
