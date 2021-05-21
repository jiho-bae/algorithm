const sol = (input) => {
  const [N, M] = input[0].split(" ").map((v) => +v);
  const arr = input[1]
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b);

  const temp = new Array(M).fill(0);
  const check = new Array(N).fill(0);

  let result = "";

  function dfs(L) {
    if (L === M) {
      result += `${temp.join(" ")}\n`;
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!check[i]) {
        check[i] = 1;
        temp[L] = arr[i];
        dfs(L + 1);
        check[i] = 0;
      }
    }
    return;
  }
  dfs(0);
  console.log(result);
};

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    sol(input);
    process.exit();
  });
