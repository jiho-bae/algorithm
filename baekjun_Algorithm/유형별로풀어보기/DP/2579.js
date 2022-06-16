function sol(input) {
  const N = +input[0];
  const scores = input.slice(1).map(Number);
  const dp = new Array(N).fill(0);

  dp[0] = scores[0];
  dp[1] = scores[0] + scores[1];
  dp[2] = Math.max(scores[0] + scores[2], scores[1] + scores[2]);

  for (let i = 3; i < N; i++) {
    const max = Math.max(dp[i - 2], dp[i - 3] + scores[i - 1]);
    dp[i] = max + scores[i];
  }

  return dp[N - 1];
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
