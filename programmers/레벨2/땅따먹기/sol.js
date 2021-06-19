function solution(land) {
  const N = land.length;

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < 4; j++) {
      let max = Number.MIN_SAFE_INTEGER;
      for (let k = 0; k < 4; k++) {
        if (j === k) continue;
        max = Math.max(max, land[i - 1][k]);
      }
      land[i][j] += max;
    }
  }
  return Math.max(...land[N - 1]);
}
