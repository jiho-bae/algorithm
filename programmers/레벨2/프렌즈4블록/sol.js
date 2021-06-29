function solution(m, n, board) {
  function checkBlock(x, y, size) {
    const block = board[x][y];
    if (x + size > board.length || y + size > board[0].length || !block) return false;
    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (block === board[i][j]) continue;
        return false;
      }
    }
    return true;
  }

  function removeBlock(arr) {
    arr.forEach(({ x, y, size }) => {
      for (let i = x; i < x + size; i++) {
        for (let j = y; j < y + size; j++) {
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

  board = board.map((v) => v.split(""));
  while (true) {
    let removeBlocks = [];
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (checkBlock(i, j, 2)) {
          removeBlocks.push({ x: i, y: j, size: 2 });
        }
      }
    }
    if (!removeBlocks.length) break;
    removeBlock(removeBlocks);
    arrangeBlock();
  }

  let answer = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!board[i][j]) answer++;
    }
  }
  return answer;
}
