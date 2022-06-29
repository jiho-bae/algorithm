function solution(board) {
  let answer = Number.MAX_SAFE_INTEGER;
  const EMPTY = 0;
  const WALL = 1;
  const N = board.length;
  const [dx, dy] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];
  const priceMemos = Array.from({ length: 25 }, () =>
    new Array(25).fill(Number.MAX_SAFE_INTEGER)
  );
  priceMemos[0][0] = 0;

  function isNotMovable(x, y) {
    if (x < 0 || y < 0 || x >= N || y >= N) return true;
    if (board[x][y] === WALL) return true;

    return false;
  }

  function dfs(x, y, dir, prices) {
    const price = 100 * prices[0] + 500 * prices[1];
    if (priceMemos[x][y] < price) return;
    priceMemos[x][y] = price;

    if (price > answer) return;

    if (x === N - 1 && y === N - 1) {
      answer = Math.min(answer, price);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (isNotMovable(nx, ny)) continue;
      board[x][y] = WALL;

      const nextPrices = [...prices];
      nextPrices[0] += 1;
      if (dir !== i) nextPrices[1] += 1;
      dfs(nx, ny, i, [...nextPrices]);
      board[x][y] = EMPTY;
    }
  }

  dfs(0, 0, -1, [0, -1]);

  return answer;
}

// dfs를 순회하면서, 이미 이전에 방문했던 위치를 방문했을 때
// 만약 비용이 더 크다면, 바로 그 경로를 생략해서 실행횟수를 절약.
