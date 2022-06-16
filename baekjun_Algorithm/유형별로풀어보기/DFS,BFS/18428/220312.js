function sol(input) {
  const N = +input[0];
  const maps = input.slice(1).map((row) => row.split(' '));
  const [dx, dy] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];
  let flag = 0;
  const teacher = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (maps[i][j] === 'T') teacher.push([i, j]);
    }
  }

  function dfs(L) {
    if (flag) return;

    if (L === 3) {
      let fail = 0;

      teacher.forEach(([x, y]) => {
        if (fail) return;

        for (let i = 0; i < 4; i++) {
          let watch = 0;
          let nx = x + dx[i];
          let ny = y + dy[i];

          while (1) {
            if (nx < 0 || ny < 0 || nx >= N || ny >= N) break;
            if (maps[nx][ny] === 'S') {
              watch = 1;
              break;
            } else if (maps[nx][ny] === 'O') {
              break;
            }
            nx += dx[i];
            ny += dy[i];
          }

          if (watch) {
            fail = 1;
            break;
          }
        }
      });

      if (!fail) {
        flag = 1;
      }
      return;
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (maps[i][j] !== 'X') continue;
        maps[i][j] = 'O';
        dfs(L + 1);
        maps[i][j] = 'X';
      }
    }
  }

  dfs(0);

  return flag ? 'YES' : 'NO';
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
