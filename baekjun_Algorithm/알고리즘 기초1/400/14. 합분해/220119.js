function sol(line) {
  const [n, k] = line.split(' ').map(Number);
  const MOD = 1e9;
  const dp = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(0));
  // k * n 배열로, k열에서 정수 k개를 더해서 만든 n의 개수를 구할 수 있다.

  for (let i = 0; i <= k; i++) {
    dp[i][0] = 1;
  }
  for (let i = 0; i <= n; i++) {
    dp[1][i] = 1;
  }
  for (let x = 2; x <= k; x++) {
    for (let y = 1; y <= n; y++) {
      dp[x][y] = (dp[x][y - 1] + dp[x - 1][y]) % MOD;
    }
  }

  return dp[k][n];
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
