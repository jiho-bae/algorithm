function sol(input) {
  const boards = input.map((str) => str.split(' ').map(Number));
  const set = new Set();
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function checkMove(x, y) {
    if (x < 0 || y < 0 || x >= 5 || y >= 5) return false;
    return true;
  }

  function dfs(L, x, y, path) {
    if (L === 6) {
      set.add(path);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (!checkMove(nx, ny)) continue;
      const next = boards[nx][ny];
      dfs(L + 1, nx, ny, `${path}${next}`);
    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      dfs(1, i, j, `${boards[i][j]}`);
    }
  }

  return set.size;
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
