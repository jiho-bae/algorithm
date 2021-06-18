function solution(maps) {
  if (maps.length === 1) return 1;

  const row = maps.length - 1;
  const col = maps[0].length - 1;
  let min = Number.MAX_SAFE_INTEGER;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function DFS(x, y, cnt) {
    if (x === row && y === col) {
      min = Math.min(min, cnt);
      return;
    }
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx > row || ny > col) continue;
      if (maps[nx][ny] === 1) {
        maps[nx][ny] = 0;
        DFS(nx, ny, cnt + 1);
        maps[nx][ny] = 1;
      }
    }
  }

  maps[0][0] = 0;
  DFS(0, 0, 1);
  return min === Number.MAX_SAFE_INTEGER ? -1 : min;
}
