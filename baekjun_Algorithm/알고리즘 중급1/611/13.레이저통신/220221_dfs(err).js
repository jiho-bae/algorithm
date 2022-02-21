function sol(input) {
  const [W, H] = input[0].split(' ').map(Number);
  const maps = input.slice(1).map((row) => row.split(''));
  const visits = Array.from({ length: H }, () =>
    new Array(W).fill(Number.MAX_SAFE_INTEGER)
  );
  const [dx, dy] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];

  const target = [];
  for (let i = 0; i < H; i++) {
    if (target.length === 2) break;
    for (let j = 0; j < W; j++) {
      if (maps[i][j] === 'C') target.push({ x: i, y: j });
    }
  }

  const start = target[0];
  const end = target[1];
  let min = Number.MAX_SAFE_INTEGER;

  function dfs(cnt, direct, x, y) {
    if (min < cnt) return;
    if (x === end.x && y === end.y) {
      min = cnt;
      return;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= H || ny >= W) continue;
      if (maps[nx][ny] === '*') continue;
      if (visits[nx][ny] < cnt) continue;
      maps[nx][ny] = '*';
      visits[nx][ny] = cnt;
      if (direct === i) dfs(cnt, direct, nx, ny);
      else dfs(cnt + 1, i, nx, ny);
      maps[nx][ny] = '.';
    }
  }

  dfs(0, -1, start.x, start.y);

  return min - 1;
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
