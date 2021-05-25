const sol = (input) => {
  const N = +input[0];
  const s = input[1].split("");
  const map = Array.from({ length: 10 }, () => new Array(10).fill(0));
  let idx = 0;
  const temp = new Array(N).fill(0);
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      map[i][j] = s[idx++];
    }
  }

  let result = "";
  let flag = 0;

  function condition(L) {
    let sum = 0;
    for (let i = L; i >= 0; i--) {
      sum += temp[i];

      if (map[i][L] === "+" && sum <= 0) return 0;
      if (map[i][L] === "-" && sum >= 0) return 0;
      if (map[i][L] === "0" && sum !== 0) return 0;
    }
    return 1;
  }

  function dfs(L) {
    if (flag) return;
    if (L === N) {
      flag = 1;
      result = temp.join(" ");
      return;
    }

    for (let i = -10; i <= 10; i++) {
      temp[L] = i;
      if (condition(L)) {
        dfs(L + 1);
      }
      temp[L] = 0;
    }
  }
  dfs(0);
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
