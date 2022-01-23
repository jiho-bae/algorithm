function sol([n, input]) {
  n = +n;
  input = input.split(' ').map(Number);
  const dp = Array.from({ length: n }, () => new Array(2).fill(0));
  dp[0][0] = input[0];
  dp[0][1] = input[0];

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0] + input[i], input[i]);
    if (input[i] < 0) {
      dp[i][1] = dp[i - 1][0];
    } else {
      dp[i][1] = dp[i - 1][1] + input[i];
    }
  }

  return Math.max(...dp.flatMap((elem) => elem));
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
