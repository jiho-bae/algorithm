function sol(input) {
  const N = +input[0];
  const m = input.slice(1).map((str) => str.split(""));

  let max = Number.MIN_SAFE_INTEGER;

  function check() {
    for (let i = 0; i < N; i++) {
      let cnt = 1;
      for (let j = 0; j < N - 1; j++) {
        if (m[i][j] === m[i][j + 1]) cnt++;
        else cnt = 1;
        max = Math.max(max, cnt);
      }

      cnt = 1;
      for (let j = 0; j < N - 1; j++) {
        if (m[j][i] === m[j + 1][i]) cnt++;
        else cnt = 1;
        max = Math.max(max, cnt);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1; j++) {
      [m[i][j], m[i][j + 1]] = [m[i][j + 1], m[i][j]];
      check();
      [m[i][j], m[i][j + 1]] = [m[i][j + 1], m[i][j]];

      [m[j][i], m[j + 1][i]] = [m[j + 1][i], m[j][i]];
      check();
      [m[j][i], m[j + 1][i]] = [m[j + 1][i], m[j][i]];
    }
  }
  return max;
}

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
