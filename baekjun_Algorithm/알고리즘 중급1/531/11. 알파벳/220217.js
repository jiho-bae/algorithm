function sol(input) {
  const [R, C] = input[0].split(' ').map(Number);
  const maps = input.slice(1).map((str) => str.split(''));
  const set = new Set();
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let max = Number.MIN_SAFE_INTEGER;

  function dfs(L, x, y) {
    if (L > max) max = L;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
      if (set.has(maps[nx][ny])) continue;
      set.add(maps[nx][ny]);
      dfs(L + 1, nx, ny);
      set.delete(maps[nx][ny]);
    }
  }

  set.add(maps[0][0]);
  dfs(1, 0, 0);

  return max;
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
