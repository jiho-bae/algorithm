function sol(input) {
  const n = +input[0];
  const sequence = input[1].split(' ').map(Number);
  const dp = Array.from({ length: n }, () => 0);
  dp[0] = sequence[0];

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(sequence[i], dp[i - 1] + sequence[i]);
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
