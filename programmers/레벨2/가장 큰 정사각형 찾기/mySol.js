function solution(board) {
  let sideOfSquare = 0;
  let n = board.length;
  let m = board[0].length;

  if (n <= 1 || m <= 1) return 1;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 1; j++) {
      if (board[i + 1][j + 1] >= 1) {
        let min = Math.min(board[i][j], board[i][j + 1], board[i + 1][j]);
        board[i + 1][j + 1] = min + 1;
        sideOfSquare = Math.max(sideOfSquare, min + 1);
      }
    }
  }

  return sideOfSquare * sideOfSquare;
}
