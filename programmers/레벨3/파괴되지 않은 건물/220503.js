function solution(board, skill) {
  const R = board.length;
  const C = board[0].length;
  const cumSum = Array.from({ length: R + 2 }, () => new Array(C + 2).fill(0));

  function calculateCumulativeSum() {
    for (let i = 1; i <= R; i++) {
      for (let j = 1; j <= C; j++) {
        cumSum[i][j] =
          cumSum[i][j] +
          cumSum[i - 1][j] +
          cumSum[i][j - 1] -
          cumSum[i - 1][j - 1];
      }
    }
  }

  function getNumberOfBuildings() {
    let cnt = 0;
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (board[i][j] + cumSum[i + 1][j + 1] > 0) cnt += 1;
      }
    }
    return cnt;
  }

  skill.forEach((sk) => {
    let [type, r1, c1, r2, c2, degree] = sk;
    if (type === 1) degree = -degree;

    cumSum[r1 + 1][c1 + 1] += degree;
    cumSum[r2 + 2][c2 + 2] += degree;
    cumSum[r2 + 2][c1 + 1] -= degree;
    cumSum[r1 + 1][c2 + 2] -= degree;
  });

  calculateCumulativeSum();

  return getNumberOfBuildings();
}
