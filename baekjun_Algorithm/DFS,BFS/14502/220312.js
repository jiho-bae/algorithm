function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const maps = input.slice(1).map((row) => row.split(' ').map(Number));
  const checkMaps = Array.from({ length: N }, () => new Array(M).fill(0));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let answer = Number.MIN_SAFE_INTEGER;

  const virusArr = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (maps[i][j] === 2) virusArr.push([i, j]);
    }
  }

  function virus(sx, sy) {
    const queue = [[sx, sy]];

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
        if (checkMaps[nx][ny] === 0) {
          checkMaps[nx][ny] = 2;
          queue.push([nx, ny]);
        }
      }
    }
  }

  function dfs(L) {
    if (L === 3) {
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
          checkMaps[i][j] = maps[i][j];
        }
      }

      virusArr.forEach(([x, y]) => virus(x, y));

      let cnt = 0;
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
          if (checkMaps[i][j] === 0) {
            cnt++;
          }
        }
      }

      answer = Math.max(answer, cnt);
      return;
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (maps[i][j] !== 0) continue;
        maps[i][j] = 1;
        dfs(L + 1);
        maps[i][j] = 0;
      }
    }
  }

  dfs(0);

  return answer;
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
