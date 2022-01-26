// testCase는 성공하나, 출력초과가 뜬다..

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

function sol([len, ...input]) {
  const [N, M] = len.split(' ').map(Number);
  const board = input.map((str) => str.split(' ').map(Number));
  const [dx, dy] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];
  const visit = Array.from({ length: N }, () => new Array(M).fill(0));
  let max = Number.MIN_SAFE_INTEGER;

  function dfs(L, sum, x, y) {
    if (L === 4) {
      if (sum === 22) {
        console.log(L, sum, x, y);
      }
      max = Math.max(max, sum);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= N || ny >= M || visit[nx][ny]) continue;
      visit[nx][ny] = 1;
      dfs(L + 1, sum + board[nx][ny], nx, ny);
      visit[nx][ny] = 0;
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      dfs(0, 0, i, j);
    }
  }

  // ㅜ 를 회전하면서 생긴 경우를 따로 계산하기.
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (i + 1 < N && j + 2 < M) {
        const firstCase =
          board[i][j] + board[i][j + 1] + board[i][j + 2] + board[i + 1][j + 1];
        const secondCase =
          board[i + 1][j] +
          board[i + 1][j + 1] +
          board[i + 1][j + 2] +
          board[i][j + 1];

        max = Math.max(max, firstCase, secondCase);
      }

      if (i + 2 < N && j + 1 < M) {
        const thirdCase =
          board[i][j] + board[i + 1][j] + board[i + 2][j] + board[i + 1][j + 1];
        const fourthCase =
          board[i + 1][j] +
          board[i][j + 1] +
          board[i + 1][j + 1] +
          board[i + 2][j + 1];

        max = Math.max(max, thirdCase, fourthCase);
      }
    }
  }

  return max;
}
