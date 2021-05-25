const sol = (input) => {
  const N = +input[0];
  const arr = [];
  for (let i = 1; i <= N; i++) {
    arr.push(input[i].split(" ").map((v) => +v));
  }

  const temp = new Array(N).fill(0);
  let min = Number.MAX_SAFE_INTEGER;
  function dfs(L, K) {
    if (L === Math.floor(N / 2)) {
      const sArr = [];
      const lArr = [];
      let sSum = (lSum = 0);
      for (let i = 0; i < N; i++) {
        if (temp[i]) sArr.push(i);
        else lArr.push(i);
      }
      for (let i = 0; i < sArr.length; i++) {
        for (let j = i + 1; j < sArr.length; j++) {
          sSum = sSum + arr[sArr[i]][sArr[j]] + arr[sArr[j]][sArr[i]];
        }
      }
      for (let i = 0; i < lArr.length; i++) {
        for (let j = i + 1; j < lArr.length; j++) {
          lSum = lSum + arr[lArr[i]][lArr[j]] + arr[lArr[j]][lArr[i]];
        }
      }
      min = Math.min(min, Math.abs(sSum - lSum));
      return;
    }
    for (let i = K; i < N; i++) {
      temp[i] = 1;
      dfs(L + 1, i + 1);
      temp[i] = 0;
    }
  }
  dfs(0, 0);
  return min;
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
