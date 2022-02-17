function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const board = input.slice(1).map((row) => row.split(''));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const coins = [];
  let answer = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < N; i++) {
    if (coins.length === 2) break;
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 'o') coins.push([i, j]);
    }
  }

  function checkDrop(x, y) {
    return x < 0 || y < 0 || x >= N || y >= M ? true : false;
  }

  function checkWall(x, y, dir) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];
    if (board[nx] && board[nx][ny] === '#') return [x, y];
    return [nx, ny];
  }

  function dfs(L, x1, y1, x2, y2) {
    if (L > 10) return;
    if (L > answer) return;

    const checkFirstDrop = checkDrop(x1, y1);
    const checkSecondDrop = checkDrop(x2, y2);

    if (checkFirstDrop && checkSecondDrop) return;
    if (checkFirstDrop || checkSecondDrop) {
      answer = Math.min(answer, L);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const [nx1, ny1] = checkWall(x1, y1, i);
      const [nx2, ny2] = checkWall(x2, y2, i);

      dfs(L + 1, nx1, ny1, nx2, ny2);
    }
  }

  dfs(0, ...coins[0], ...coins[1]);

  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
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
