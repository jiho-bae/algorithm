function sol([t, ...input]) {
  t = +t;
  const len = input.length;
  const answer = [];

  for (let i = 0; i < len; i += 3) {
    const arr = input.slice(i, i + 3);
    const n = +arr[0];
    const dp = Array.from({ length: 3 }, () => new Array(n + 1).fill(0));
    arr[1] = [0, ...arr[1].split(' ').map(Number)];
    arr[2] = [0, ...arr[2].split(' ').map(Number)];

    dp[1][1] = arr[1][1];
    dp[2][1] = arr[2][1];

    for (let i = 2; i <= n; i++) {
      dp[1][i] = arr[1][i] + Math.max(dp[2][i - 1], dp[1][i - 2], dp[2][i - 2]);
      dp[2][i] = arr[2][i] + Math.max(dp[1][i - 1], dp[1][i - 2], dp[2][i - 2]);
    }

    answer.push(Math.max(...dp.slice(1).flatMap((v) => v)));
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
