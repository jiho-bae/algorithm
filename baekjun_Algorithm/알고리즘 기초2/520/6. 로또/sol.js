const sol = (input) => {
  let result = "";
  const tmp = new Array(6).fill(0);
  function dfs(L, K) {
    if (L === 6) {
      result += `${tmp.join(" ")}\n`;
      return;
    }

    for (let i = K + 1; i < N; i++) {
      tmp[L] = arr[i];
      dfs(L + 1, i);
    }
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "0") return result;
    [N, ...arr] = input[i].split(" ").map((v) => +v);
    dfs(0, -1);
    if (input.length - 2 !== i) result += `\n`;
  }
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
