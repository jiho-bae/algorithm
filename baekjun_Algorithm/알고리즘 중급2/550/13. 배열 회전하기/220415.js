function sol(input) {
  const [N, M, K] = input[0].split(' ').map(Number);
  let boards;
  let answer = Number.MAX_SAFE_INTEGER;
  const rotateOperations = input
    .slice(1 + N)
    .map((str) => str.split(' ').map(Number));

  dfs(0, []);

  return answer;

  function dfs(L, orders) {
    if (orders.length === K) {
      boards = input.slice(1, 1 + N).map((row) => row.split(' ').map(Number));

      orders.forEach((order) =>
        rotate2DMatrixBy1Step(...rotateOperations[order])
      );

      boards.forEach((row) => {
        const min = row.reduce((acc, val) => acc + val, 0);
        answer = Math.min(answer, min);
      });
      return;
    }

    for (let i = 0; i < K; i++) {
      if (orders.includes(i)) continue;
      dfs(L + 1, [...orders, i]);
    }
  }

  function rotate2DMatrixBy1Step(r, c, s) {
    const n = 2 * s + 1;
    const startR = r - s - 1;
    const startC = c - s - 1;

    const result = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = 0; i < s; i++) {
      let sr = i,
        sc = i;
      for (let j = 0; j < 4; j++) {
        while (sr === i && sc >= i && sc < n - 1 - i) {
          result[sr][sc + 1] = boards[startR + sr][startC + sc];
          sc++;
        }

        while (sr >= i && sr < n - 1 - i && sc === n - 1 - i) {
          result[sr + 1][sc] = boards[startR + sr][startC + sc];
          sr++;
        }

        while (sr === n - 1 - i && sc > i && sc <= n - 1 - i) {
          result[sr][sc - 1] = boards[startR + sr][startC + sc];
          sc--;
        }

        while (sr > i && sr <= n - 1 - i && sc === i) {
          result[sr - 1][sc] = boards[startR + sr][startC + sc];
          sr--;
        }
      }
    }
    result[s][s] = boards[startR + s][startC + s];

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        boards[startR + i][startC + j] = result[i][j];
      }
    }
  }
}

const input = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    console.log(sol(input));
    process.exit();
  });
