const sol = (input) => {
  const N = +input[0];
  const halfN = N / 2;
  const stats = input.slice(1).map((str) => str.split(" ").map(Number));

  const check = new Array(N).fill(0);
  let min = Number.MAX_SAFE_INTEGER;
  function dfs(L, K) {
    if (L === halfN) {
      const sTeam = [];
      const lTeam = [];
      let sSum = (lSum = 0);
      for (let i = 0; i < N; i++) {
        if (check[i]) sTeam.push(i);
        else lTeam.push(i);
      }
      for (let i = 0; i < halfN; i++) {
        for (let j = i + 1; j < halfN; j++) {
          console.log(sTeam[i], sTeam[j], sTeam[j], sTeam[i]);
          sSum = sSum + stats[sTeam[i]][sTeam[j]] + stats[sTeam[j]][sTeam[i]];
          lSum = lSum + stats[lTeam[i]][lTeam[j]] + stats[lTeam[j]][lTeam[i]];
        }
      }
      min = Math.min(min, Math.abs(sSum - lSum));
      return;
    }

    for (let i = K; i < N; i++) {
      check[i] = 1;
      dfs(L + 1, i + 1);
      check[i] = 0;
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
