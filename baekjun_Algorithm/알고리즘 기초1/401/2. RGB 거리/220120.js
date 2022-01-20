function sol([n, ...input]) {
  n = +n;
  input = input.map((str) => str.split(' ').map(Number));
  const dp = Array.from({ length: n }, () => new Array(3).fill(0));

  for (let i = 0; i <= 2; i++) {
    dp[0][i] = input[0][i];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= 2; j++) {
      const prevInput = [...dp[i - 1]];
      prevInput.splice(j, 1);
      dp[i][j] = input[i][j] + Math.min(...prevInput);
    }
  }

  return Math.min(...dp[n - 1]);
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
