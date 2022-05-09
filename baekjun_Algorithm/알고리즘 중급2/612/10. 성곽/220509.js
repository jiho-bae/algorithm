function sol(input) {
  const answer = [0, 0, 0];
  const [N, M] = input[0].split(' ').map(Number);
  const maps = input.slice(1).map((row) => row.split(' ').map(Number));
  const groups = Array.from({ length: M }, () => new Array(N).fill(0));
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const adjacentRoom = new Set();
  const roomSize = {};
  let roomCnt = 0;

  function isMovable(x, y) {
    if (x < 0 || y < 0 || x >= M || y >= N) return false;
    return true;
  }

  function bfs(sx, sy) {
    const queue = [];
    queue.push([sx, sy]);
    groups[sx][sy] = roomCnt;
    roomSize[roomCnt] = 0;

    while (queue.length) {
      const [x, y] = queue.shift();
      const bits = maps[x][y].toString(2).padStart(4, '0');
      roomSize[roomCnt] += 1;

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (!isMovable(nx, ny)) continue;

        const nextDistance = groups[nx][ny];
        if (nextDistance) {
          if (nextDistance !== roomCnt) {
            adjacentRoom.add(`${roomCnt}/${nextDistance}`);
          } else continue;
        }

        if (bits[i] === '1') continue;

        groups[nx][ny] = roomCnt;
        queue.push([nx, ny]);
      }
    }
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (groups[i][j] === 0) {
        roomCnt += 1;
        bfs(i, j);
      }
    }
  }

  answer[0] = roomCnt;
  answer[1] = Math.max(...Object.values(roomSize));

  for (let pair of adjacentRoom) {
    const [room1, room2] = pair.split('/');
    const sum = roomSize[room1] + roomSize[room2];
    answer[2] = Math.max(answer[2], sum);
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
