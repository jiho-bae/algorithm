function sol(input) {
  const N = +input;
  const dp = new Array(1000000).fill(0);
  const MOD = 15746;

  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < 1000000; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
  }

  return dp[N - 1];
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
