function sol([n, input]) {
  n = +n;
  input = input.split(' ').map(Number);
  const dp = Array.from({ length: n }, () => 0);
  dp[0] = input[0];

  for (let i = 1; i < n; i++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = 0; j < i; j++) {
      if (input[i] > input[j] && max < dp[j]) {
        max = dp[j];
      }
    }
    dp[i] = input[i];
    if (max > 0) {
      dp[i] += max;
    }
  }

  return Math.max(...dp);
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
