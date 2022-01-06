function solution(land) {
  const row = land.length;
  const col = 4;

  for (let i = 1; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const prevCell = [...land[i - 1]];
      prevCell.splice(j, 1);
      land[i][j] += Math.max(...prevCell);
    }
  }

  return Math.max(...land[row - 1]);
}
