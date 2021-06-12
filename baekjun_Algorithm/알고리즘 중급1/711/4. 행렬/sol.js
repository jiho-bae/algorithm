const sol = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  const m = input.slice(1, 1 + N).map((row) => row.split("").map(Number));
  const tm = input.slice(1 + N).map((row) => row.split("").map(Number));

  let result = 0;
  let cnt = 0;

  function flip(x, y) {
    cnt++;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (m[x + i][y + j]) m[x + i][y + j] = 0;
        else m[x + i][y + j] = 1;
      }
    }
  }

  for (let i = 0; i < N - 2; i++) {
    for (let j = 0; j < M - 2; j++) {
      if (m[i][j] !== tm[i][j]) flip(i, j);
    }
  }

  out: for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (m[i][j] !== tm[i][j]) {
        result = -1;
        break out;
      }
    }
  }

  return result ? result : cnt;
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
