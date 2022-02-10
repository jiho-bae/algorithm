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

function sol([str, ...input]) {
  const [N, M] = str.split(' ').map(Number);
  const boards = input.map((row) => row.split(''));
  const visits = Array.from({ length: N }, () => new Array(M).fill(0));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let cycle = 0;

  function dfs({ L, sx, sy, x, y }) {
    if (cycle) return;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (boards[nx][ny] !== boards[sx][sy]) continue;
      if (!visits[nx][ny]) {
        visits[nx][ny] = 1;
        dfs({ L: L + 1, sx, sy, x: nx, y: ny });
        visits[nx][ny] = 0;
      }
      if (L >= 4 && nx === sx && ny === sy) {
        cycle = 1;
        return;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    if (cycle) break;
    for (let j = 0; j < M; j++) {
      if (cycle) break;
      visits[i][j] = 1;
      dfs({ L: 1, sx: i, sy: j, x: i, y: j });
      visits[i][j] = 0;
    }
  }

  return cycle ? 'Yes' : 'No';
}
