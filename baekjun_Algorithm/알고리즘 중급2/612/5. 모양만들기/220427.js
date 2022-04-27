function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const maps = input.slice(1).map((str) => str.split(' ').map(Number));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const islands = [];
  let visits;

  function initVisits() {
    visits = Array.from({ length: N }, () => new Array(M).fill(0));
  }

  function isMovable(x, y) {
    if (x < 0 || y < 0 || x >= N || y >= M) return false;
    if (maps[x][y] !== 1) return false;
    return true;
  }

  function bfs(x, y, num) {
    const queue = [[x, y]];

    while (queue.length) {
      const [cx, cy] = queue.pop();
      if (visits[cx][cy]) continue;
      visits[cx][cy] = 1;
      islands[num][`${cx}/${cy}`] = 1;
      islands[num].cnt += 1;

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [cx + dx[i], cy + dy[i]];
        if (!isMovable(nx, ny)) continue;
        if (visits[nx][ny]) continue;
        queue.push([nx, ny]);
      }
    }
  }

  initVisits();
  let idx = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visits[i][j] && maps[i][j] === 1) {
        islands[idx] = { cnt: 0 };
        bfs(i, j, idx++);
      }
    }
  }

  let maxShape = 0;
  const mapping = {};
  islands.forEach((island, order) => {
    Object.keys(island).forEach((key) => (mapping[key] = [island.cnt, order]));
  });

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (maps[x][y] === 0) {
        let sum = 0;
        const orders = {};

        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];
          if (!isMovable(nx, ny)) continue;
          if (mapping[`${nx}/${ny}`]) {
            const [cnt, order] = mapping[`${nx}/${ny}`];
            if (orders[order]) continue;
            orders[order] = 1;
            sum += cnt;
          }
        }

        maxShape = Math.max(maxShape, sum + 1);
      }
    }
  }

  return maxShape;
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
