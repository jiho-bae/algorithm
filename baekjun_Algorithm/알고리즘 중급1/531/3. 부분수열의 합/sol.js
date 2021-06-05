const sol = (input) => {
  const N = +input[0];
  const S = input[1].split(" ").map(Number);
  const sumArr = new Array(2000001).fill(0);
  const pick = [];
  function dfs(L) {
    if (L === N) {
      const sum = pick.reduce((sum, val) => sum + val, 0);
      sumArr[sum] = 1;
      return;
    }
    pick.push(S[L]);
    dfs(L + 1);
    pick.pop();
    dfs(L + 1);
  }
  dfs(0);

  for (let i = 1; i < sumArr.length; i++) if (!sumArr[i]) return i;
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
