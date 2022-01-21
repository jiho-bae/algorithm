function sol([n, input]) {
  n = +n;
  input = input.split(' ').map(Number);
  const dp = Array.from({ length: n }, () => new Array(2));
  dp[0][0] = 1;
  dp[n - 1][1] = 1;

  for (let x = 1; x < n; x++) {
    const y = n - 1 - x;
    let increaseMax = 0;
    let decreaseMax = 0;

    for (let j = 0; j < x; j++) {
      if (input[x] > input[j] && dp[j][0] > increaseMax) {
        increaseMax = dp[j][0];
      }
    }
    for (let j = n - 1; j > y; j--) {
      if (input[y] > input[j] && dp[j][1] > decreaseMax) {
        decreaseMax = dp[j][1];
      }
    }
    dp[x][0] = increaseMax + 1;
    dp[y][1] = decreaseMax + 1;
  }

  const answer = dp.map(([inc, dec]) => inc + dec);
  return Math.max(...answer) - 1;
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
