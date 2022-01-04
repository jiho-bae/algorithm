function solution(board) {
  const n = board.length;
  const m = board[0].length;

  if (n * m === 1) return 1;

  let maxSide = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 1; j++) {
      if (board[i + 1][j + 1] === 0) continue;
      const minOfSquare = Math.min(
        board[i][j],
        board[i + 1][j],
        board[i][j + 1]
      );
      board[i + 1][j + 1] = minOfSquare + 1;
      maxSide = Math.max(maxSide, minOfSquare + 1);
    }
  }

  return maxSide ** 2;
}
