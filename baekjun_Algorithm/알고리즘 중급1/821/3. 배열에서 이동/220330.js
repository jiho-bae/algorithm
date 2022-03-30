function sol(input) {
  const N = +input[0];
  let answer = Number.MAX_SAFE_INTEGER;
  let minNum = Number.MAX_SAFE_INTEGER;
  let maxNum = Number.MIN_SAFE_INTEGER;

  const maps = input.slice(1).map((str) => {
    const row = str.split(' ').map(Number);
    minNum = Math.min(minNum, ...row);
    maxNum = Math.max(maxNum, ...row);

    return row;
  });

  const [dx, dy] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];

  function bfs(K) {
    for (let i = minNum; i <= maxNum - K; i++) {
      let left = i;
      let right = left + K;
      if (left > maps[0][0] || right < maps[0][0]) continue;

      const visits = Array.from({ length: N }, () => new Array(N).fill(1));

      for (let a = 0; a < N; a++) {
        for (let b = 0; b < N; b++) {
          if (left <= maps[a][b] && right >= maps[a][b]) {
            visits[a][b] = 0;
          }
        }
      }

      const queue = [[0, 0]];
      visits[0][0] = 1;

      while (queue.length) {
        const [x, y] = queue.shift();

        if (x === N - 1 && y === N - 1) {
          return true;
        }

        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];
          if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
          if (visits[nx][ny]) continue;
          visits[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }

      return false;
    }
  }

  let start = 0;
  let end = maxNum - minNum;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (bfs(mid)) {
      if (answer > mid) answer = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
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
