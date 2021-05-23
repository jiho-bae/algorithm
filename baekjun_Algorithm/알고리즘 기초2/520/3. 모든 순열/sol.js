const sol = (N) => {
  const check = new Array(N).fill(0);
  const temp = new Array(N).fill(0);
  let result = "";

  function dfs(L) {
    if (L === N) {
      result += `${temp.join(" ")}\n`;
    }

    for (let i = 0; i < N; i++) {
      if (!check[i]) {
        check[i] = 1;
        temp[L] = i + 1;
        dfs(L + 1);
        check[i] = 0;
      }
    }
  }
  dfs(0);
  return result;
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(sol(+line));
  })
  .on("close", () => {
    process.exit();
  });
