function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const maps = input.slice(1).map((str) => str.split(' ').map(Number));
  const dp = Array.from({ length: N }, () => new Array(M).fill(0));

  dp[0][0] = maps[0][0];
  for (let i = 1; i < M; i++) {
    dp[0][i] = dp[0][i - 1] + maps[0][i];
  }

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let prevScore;
      if (j === 0) {
        prevScore = dp[i - 1][j];
      } else {
        prevScore = Math.max(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
      }

      dp[i][j] = prevScore + maps[i][j];
    }
  }

  return dp[N - 1][M - 1];
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
