function sol([n, ...input]) {
  n = +n;
  input = input.map((str) => str.split(' ').map(Number));
  const dp = Array.from({ length: n }, (_, i) => new Array(i + 1).fill(0));
  dp[0][0] = input[0][0];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        dp[i][0] = input[i][0] + dp[i - 1][0];
        continue;
      }
      if (j === i) {
        dp[i][j] = input[i][j] + dp[i - 1][j - 1];
        continue;
      }
      dp[i][j] = input[i][j] + Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
    }
  }

  return Math.max(...dp[n - 1]);
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
