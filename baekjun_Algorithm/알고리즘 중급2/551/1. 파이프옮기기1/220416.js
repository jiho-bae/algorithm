function sol(input) {
  const N = +input[0];
  let boards = input.slice(1).map((row) => row.split(' ').map(Number));
  let answer = 0;
  const dirObj = {
    row: 'row',
    col: 'col',
    diagnol: 'diagnol',
  };

  function dfs(dir, x, y) {
    if (x === N - 1 && y === N - 1) {
      answer += 1;
      return;
    }

    if (dir === dirObj.row) {
      if (isMovableRowOrCol(x, y + 1)) dfs(dir, x, y + 1);
      if (isMovableDiagnol(x, y)) dfs(dirObj.diagnol, x + 1, y + 1);
      return;
    }

    if (dir === dirObj.col) {
      if (isMovableRowOrCol(x + 1, y)) dfs(dir, x + 1, y);
      if (isMovableDiagnol(x, y)) dfs(dirObj.diagnol, x + 1, y + 1);
      return;
    }
    if (dir === dirObj.diagnol) {
      if (isMovableRowOrCol(x, y + 1)) dfs(dirObj.row, x, y + 1);
      if (isMovableRowOrCol(x + 1, y)) dfs(dirObj.col, x + 1, y);
      if (isMovableDiagnol(x, y)) dfs(dir, x + 1, y + 1);
      return;
    }
  }

  dfs(dirObj.row, 0, 1);

  return answer;

  function isOutOfBoard(x, y) {
    if (x < 0 || y < 0 || x >= N || y >= N) return true;
    return false;
  }

  function isMovableRowOrCol(nx, ny) {
    if (isOutOfBoard(nx, ny)) return false;
    if (boards[nx][ny]) return false;
    return true;
  }

  function isMovableDiagnol(x, y) {
    const nx = x + 1;
    const ny = y + 1;

    if (isOutOfBoard(nx, ny)) return false;
    if (boards[x][ny] || boards[nx][y] || boards[nx][ny]) return false;
    return true;
  }
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
