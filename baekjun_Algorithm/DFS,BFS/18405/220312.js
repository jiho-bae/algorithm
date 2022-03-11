function sol(input) {
  const [N, K] = input[0].split(' ').map(Number);
  const maps = input.slice(1, 1 + N).map((row) => row.split(' ').map(Number));
  let [S, X, Y] = input[1 + N].split(' ').map(Number);
  X -= 1;
  Y -= 1;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const virus = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (maps[i][j] !== 0) {
        virus.push([i, j, maps[i][j]]);
      }
    }
  }

  virus.sort((a, b) => a[2] - b[2]);

  function bfs() {
    const queue = [[...virus]];
    while (queue.length) {
      if (S === 0) break;
      const now = queue.shift();

      const next = [];
      now.forEach(([x, y, type]) => {
        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];
          if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
          if (maps[nx][ny] !== 0) continue;
          maps[nx][ny] = type;
          next.push([nx, ny, type]);
        }
      });
      if (next.length) queue.push(next);
      S--;
    }
  }

  bfs();

  return maps[X][Y];
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
