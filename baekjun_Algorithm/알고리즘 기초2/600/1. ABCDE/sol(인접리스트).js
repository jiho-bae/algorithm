const sol = (input) => {
  const [N, M] = input[0].split(" ").map((v) => +v);
  const adjArr = new Array(N).fill(0);
  const check = new Array(N).fill(0);
  let flag = 0;
  for (let i = 0; i < N; i++) {
    adjArr[i] = [];
  }
  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map((v) => +v);
    adjArr[a].push(b);
    adjArr[b].push(a);
  }

  const dfs = (L, cnt) => {
    if (flag === 1) return;
    check[L] = 1;
    if (cnt === 4) {
      flag = 1;
      return;
    }

    for (let i = 0; i < adjArr[L].length; i++) {
      const next = adjArr[L][i];
      if (!check[next]) {
        dfs(next, cnt + 1);
      }
    }
    check[L] = 0;
  };

  for (let j = 0; j < N; j++) {
    dfs(j, 0);
  }
  return flag;
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
