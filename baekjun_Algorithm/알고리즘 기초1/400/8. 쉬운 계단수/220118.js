function sol(n) {
  const MOD = 1e9;
  const arr = Array.from({ length: n + 1 }, () => new Array(10).fill(0));
  for (let i = 1; i <= 9; i++) {
    arr[1][i] = 1;
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= 9; j++) {
      let sum = 0;
      if (j - 1 >= 0) {
        sum += arr[i - 1][j - 1];
      }
      if (j + 1 <= 9) {
        sum += arr[i - 1][j + 1];
      }
      arr[i][j] = sum % MOD;
    }
  }

  return arr[n].reduce((acc, val) => (acc + val) % MOD, 0);
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(+line));
  })
  .on('close', () => {
    process.exit();
  });
