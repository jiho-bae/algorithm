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

function sol([n, ...input]) {
  input = input.map(Number);
  const k = Math.max(...input);
  const dp = Array.from({ length: k + 1 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  for (let i = 4; i <= k; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return input.map((elem) => dp[elem]).join('\n');
}
