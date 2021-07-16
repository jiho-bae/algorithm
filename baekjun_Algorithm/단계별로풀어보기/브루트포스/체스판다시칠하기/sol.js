function sol(input) {
  const [M, N] = input[0].split(" ").map(Number);
  const arr = input.slice(1).map((str) => str.split(""));
  let min = Number.MAX_SAFE_INTEGER;

  const board = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
  ];

  function white_first(x, y) {
    let result = 0;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (arr[x + i][y + j] !== board[i][j]) result++;
      }
    }
    return result;
  }

  function black_first(x, y) {
    let result = 0;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (arr[x + i][y + j] !== board[i + 1][j]) result++;
      }
    }
    return result;
  }

  for (let i = 0; i <= M - 8; i++) {
    for (let j = 0; j <= N - 8; j++) {
      let tmp = Math.min(white_first(i, j), black_first(i, j));
      if (tmp < min) min = tmp;
    }
  }
  return min;
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
