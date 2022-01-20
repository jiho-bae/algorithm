function sol([n, ...input]) {
  n = +n;
  input = input.map(Number);
  const dp = Array.from({ length: n + 1 }, () => new Array(3).fill(0));
  dp[1][1] = input[0];

  for (let i = 2; i <= n; i++) {
    dp[i][0] = Math.max(...dp[i - 1]);
    dp[i][1] = dp[i - 1][0] + input[i - 1];
    dp[i][2] = dp[i - 1][1] + input[i - 1];
  }

  return Math.max(...dp[n]);
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
