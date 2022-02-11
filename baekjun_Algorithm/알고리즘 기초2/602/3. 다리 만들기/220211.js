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
  const N = +str;
  const boards = input.map((row) => row.split(' ').map(Number));
  const visits = Array.from({ length: N }, () => new Array(N).fill(0));
  const dist = Array.from({ length: N }, () => new Array(N).fill(-1));
  const queue = [];
  const [dx, dy] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];
  let color = 2;

  function dfs(x, y) {
    queue.push([x, y]);
    boards[x][y] = color;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
      if (visits[nx][ny] || !boards[nx][ny]) continue;
      visits[nx][ny] = 1;
      dist[nx][ny] = 0;
      dfs(nx, ny);
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visits[i][j] || !boards[i][j]) continue;
      dfs(i, j);
      color++;
    }
  }

  let idx = 0;
  while (queue.length > idx) {
    const [x, y] = queue[idx++];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
      if (dist[nx][ny] === -1) {
        dist[nx][ny] = dist[x][y] + 1;
        boards[nx][ny] = boards[x][y];
        queue.push([nx, ny]);
      }
    }
  }

  let answer = Number.MAX_SAFE_INTEGER;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
        if (boards[x][y] !== boards[nx][ny]) {
          answer = Math.min(answer, dist[nx][ny] + dist[x][y]);
        }
      }
    }
  }

  return answer;
}
