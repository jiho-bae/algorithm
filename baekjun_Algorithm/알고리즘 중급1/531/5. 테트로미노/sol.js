const sol = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  const matrix = input.slice(1).map((str) => str.split(" ").map(Number));
  const check = Array.from({ length: N }, () => new Array(M).fill(0));
  let result = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const cx = [
    [0, 0, 0, 1],
    [0, 1, 2, 1],
    [0, 0, 0, -1],
    [0, -1, 0, 1],
  ];
  const cy = [
    [0, 1, 2, 1],
    [0, 0, 0, 1],
    [0, 1, 2, 1],
    [0, 1, 1, 1],
  ];

  function woo(x, y) {
    let result = 0;
    for (let i = 0; i < 4; i++) {
      let sum = 0;
      for (let j = 0; j < 4; j++) {
        const [nx, ny] = [x + cx[i][j], y + cy[i][j]];
        if (nx < 1 || nx > N || ny < 1 || ny > M) break;
        sum += matrix[nx][ny];
      }
      result = Math.max(result, sum);
    }
    return result;
  }

  function dfs(L, x, y, sum) {
    if (L === 4) {
      result = Math.max(result, sum);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 1 || nx > N || ny < 1 || ny > M || check[nx][ny]) continue;
      check[nx][ny] = 1;
      dfs(L + 1, nx, ny, sum + matrix[nx][ny]);
      check[nx][ny] = 0;
    }
  }

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      check[x][y] = 1;
      dfs(1, x, y, matrix[x][y]);
      result = Math.max(result, woo(x, y));
      check[x][y] = 0;
    }
  }
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
