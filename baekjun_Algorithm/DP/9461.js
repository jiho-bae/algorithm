function sol(input) {
  const T = +input[0];
  const answer = [];
  const dp = new Array(100).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 2;
  dp[4] = 2;
  for (let i = 5; i < 100; i++) {
    dp[i] = dp[i - 1] + dp[i - 5];
  }

  function P(N) {
    return dp[N - 1];
  }

  for (let i = 1; i <= T; i++) {
    const N = +input[i];
    answer.push(P(N));
  }

  return answer.join('\n');
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
