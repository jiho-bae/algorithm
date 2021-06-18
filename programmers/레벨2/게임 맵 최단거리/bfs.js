function solution(maps) {
  const n = maps.length - 1;
  const m = maps[0].length - 1;

  let answer = -1;
  function bfs(sx, sy, scnt) {
    const queue = [];
    queue.push([sx, sy, scnt]);
    maps[sx][sy] = 0;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    while (queue.length) {
      const [x, y, cnt] = queue.shift();
      if (x === n && y === m) {
        answer = cnt;
        return;
      }
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx < 0 || ny < 0 || nx > n || ny > m) continue;
        if (maps[nx][ny] === 1) {
          maps[nx][ny] = 0;
          queue.push([nx, ny, cnt + 1]);
        }
      }
    }
    return;
  }

  bfs(0, 0, 1);
  return answer;
}
