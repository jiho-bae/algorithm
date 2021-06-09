const sol = (input) => {
  const m = input.map((row) => row.split(" ").map(Number));
  const emptyList = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!m[i][j]) emptyList.push([i, j]);
    }
  }

  function crossCheck(num, x, y) {
    for (let i = 0; i < 9; i++) {
      if (m[x][i] === num) return false;
      if (m[i][y] === num) return false;
    }
    return true;
  }

  function rectCheck(num, x, y) {
    const xx = Math.floor(x / 3) * 3;
    const yy = Math.floor(y / 3) * 3;
    for (let i = xx; i < xx + 3; i++) {
      for (let j = yy; j < yy + 3; j++) {
        if (m[i][j] === num) {
          console.log("sb");
          return false;
        }
      }
    }
    return true;
  }
  let flag = 0;
  function dfs(L) {
    if (flag) return;
    if (L === emptyList.length) {
      m.map((row) => {
        console.log(row.join(" "));
      });
      flag = 1;
      return;
    }
    const [x, y] = emptyList[L];
    for (let num = 1; num < 10; num++) {
      if (!crossCheck(num, x, y)) continue;
      if (!rectCheck(num, x, y)) continue;
      m[x][y] = num;
      dfs(L + 1);
      m[x][y] = 0;
    }
    return;
  }
  dfs(0);
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
