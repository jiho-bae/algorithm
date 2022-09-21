function sol(input) {
  const T = +input[0];
  const answer = [];
  const [dx, dy] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];
  let maps;

  function dfs(x, y, row, col) {
    maps[x][y] = 0;

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= row || ny >= col) continue;
      if (maps[nx][ny] === 1) dfs(nx, ny, row, col);
    }
  }

  let idx = 1;

  for (let q = 0; q < T; q++) {
    const [M, N, K] = input[idx++].split(' ').map(Number);
    maps = Array.from({ length: M }, () => new Array(N).fill(0));

    for (let str of input.slice(idx, idx + K)) {
      const [x, y] = str.split(' ');
      maps[x][y] = 1;
    }

    let cnt = 0;

    for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
        if (maps[i][j] === 1) {
          dfs(i, j, M, N);
          cnt += 1;
        }
      }
    }
    answer.push(cnt);

    idx += K;
  }

  return answer.join('\n');
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
