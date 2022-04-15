function sol(input) {
  const answer = [];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let boards;
  let N, M;
  let order = -1;

  for (let i = 0, len = input.length; i < len; i++) {
    [N, M] = input[i].split(' ').map(Number);
    boards = input.slice(i + 1, i + 1 + N).map((str) => str.split(''));
    order += 1;
    answer[order] = Infinity;
    if (N === 1 && M === 1) {
      answer[order] = 1;
      i += 1;
      continue;
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (boards[i][j] === '.') {
          boards[i][j] = '*';
          dfs(0, i, j);
          boards[i][j] = '.';
        }
      }
    }

    i += N;
  }

  return answer
    .map((cnt, idx) => {
      const num = cnt === Infinity ? -1 : cnt;
      return `Case ${idx + 1}: ` + num;
    })
    .join('\n');

  function dfs(cnt, x, y) {
    if (checkBoardsAllVisited()) {
      answer[order] = Math.min(answer[order], cnt);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (!checkMovable(nx, ny)) continue;
      const path = moveToEnd(i, x, y);

      path.forEach(([from, to]) => (boards[from][to] = '*'));
      dfs(cnt + 1, ...path[path.length - 1]);
      path.forEach(([from, to]) => (boards[from][to] = '.'));
    }
  }

  function moveToEnd(dir, x, y) {
    const path = [];
    const [dirX, dirY] = [dx[dir], dy[dir]];
    let [nx, ny] = [x + dirX, y + dirY];

    while (checkMovable(nx, ny)) {
      path.push([nx, ny]);
      nx += dirX;
      ny += dirY;
    }

    return path;
  }

  function checkMovable(x, y) {
    if (x < 0 || y < 0 || x >= N || y >= M) return false;
    if (boards[x][y] !== '.') return false;
    return true;
  }

  function checkBoardsAllVisited() {
    let isAllVisited = true;
    for (let i = 0, rowLen = boards.length; i < rowLen; i++) {
      if (!isAllVisited) break;
      for (let j = 0, colLen = boards[0].length; j < colLen; j++) {
        if (boards[i][j] === '.') {
          isAllVisited = false;
        }
      }
    }

    return isAllVisited;
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
