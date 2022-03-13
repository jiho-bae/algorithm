function sol(input) {
  const [N, L, R] = input[0].split(' ').map(Number);
  const lands = input.slice(1).map((row) => row.split(' ').map(Number));
  const [dx, dy] = [
    [0, 1, 0, -1],
    [1, 0, -1, 0],
  ];
  let visits;

  function bfs(group, sx, sy) {
    const queue = [[sx, sy]];
    visits[sx][sy] = group;
    let sum = 0;
    let cnt = 0;
    while (queue.length) {
      const [x, y] = queue.shift();
      sum += lands[x][y];
      cnt += 1;

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

        const diff = Math.abs(lands[x][y] - lands[nx][ny]);
        if (diff < L || diff > R) continue;
        if (visits[nx][ny]) continue;
        visits[nx][ny] = group;

        queue.push([nx, ny]);
      }
    }

    if (cnt === 1) return;

    const population = Math.floor(sum / cnt);
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (visits[i][j] === group) {
          lands[i][j] = population;
        }
      }
    }
    isFinished = 0;
  }

  let group = 1;
  let isFinished = 1;
  let answer = 0;

  while (true) {
    isFinished = 1;
    visits = Array.from({ length: N }, () => new Array(N).fill(0));

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (visits[i][j]) continue;
        bfs(group++, i, j);
      }
    }

    if (isFinished) break;
    else answer++;
  }

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
