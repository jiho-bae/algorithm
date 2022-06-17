function solution(n) {
  var answer = 0;
  const chess = Array.from({ length: n }, () => new Array(n).fill(0));
  const Queen = 'Q';
  const EMPTY = 8;
  const dxdy = {
    top: [-1, 0],
    right: [0, 1],
    bottom: [1, 0],
    left: [0, -1],
    topleft: [-1, -1],
    topright: [-1, 1],
    bottomright: [1, 1],
    bottomleft: [1, -1],
  };
  const dirArr = [
    'top',
    'right',
    'bottom',
    'left',
    'topleft',
    'topright',
    'bottomright',
    'bottomleft',
  ];

  function isEnd(x, y) {
    if (x < 0 || y < 0 || x >= n || y >= n) return true;
    return false;
  }

  function isAttack(x, y) {
    if (chess[x][y] === Queen) return true;
    return false;
  }

  function nextCell(x, y, dir) {
    const [dx, dy] = dxdy[dir];
    return [x + dx, y + dy, dir];
  }

  function exploreNextCell(x, y, dir) {
    if (isEnd(x, y)) return true;
    if (isAttack(x, y)) return false;
    return exploreNextCell(...nextCell(x, y, dir));
  }

  function dfs(L, row) {
    if (L === n) {
      answer += 1;
      return;
    }

    for (let col = 0; col < n; col++) {
      let exploreNext = false;

      for (let i = 0; i < 8; i++) {
        const dir = dirArr[i];
        const isClearDirection = exploreNextCell(row, col, dir);
        if (!isClearDirection) {
          exploreNext = true;
          break;
        }
      }
      if (exploreNext) continue;

      chess[row][col] = Queen;
      dfs(L + 1, row + 1);
      chess[row][col] = 0;
    }
  }

  dfs(0, 0);

  return answer;
}
