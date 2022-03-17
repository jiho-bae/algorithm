function sol(input) {
  const N = +input[0];
  const soldier = input[1].split(' ').map(Number);
  const soldierLength = soldier.length;
  const dp = new Array(N).fill(1);

  for (let i = 1; i < soldierLength; i++) {
    const now = soldier[i];
    for (let j = 0; j < i; j++) {
      const prev = soldier[j];
      if (prev > now) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return soldierLength - Math.max(...dp);
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
