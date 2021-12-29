function solution(m, n, board) {
  function checkBlock(x, y) {
    const block = board[x][y];
    if (x + 2 > m || y + 2 > n || !block) return false;
    for (let i = x; i < x + 2; i++) {
      for (let j = y; j < y + 2; j++) {
        if (block !== board[i][j]) return false;
      }
    }
    return true;
  }

  function removeBlock(arr) {
    arr.forEach(({ x, y }) => {
      for (let i = x; i < x + 2; i++) {
        for (let j = y; j < y + 2; j++) {
          board[i][j] = 0;
        }
      }
    });
  }

  function arrangeBlock() {
    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        if (board[i][j]) continue;
        let idx = i - 1;
        while (idx > -1) {
          if (board[idx][j]) {
            board[i][j] = board[idx][j];
            board[idx][j] = 0;
            break;
          } else idx--;
        }
      }
    }
  }

  board = board.map((v) => v.split(''));
  while (true) {
    const targetBlocks = [];
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (checkBlock(i, j)) {
          targetBlocks.push({ x: i, y: j });
        }
      }
    }
    if (!targetBlocks.length) break;
    removeBlock(targetBlocks);
    arrangeBlock();
  }

  return board.reduce((acc, row) => {
    return acc + row.filter((cell) => !cell).length;
  }, 0);
}
