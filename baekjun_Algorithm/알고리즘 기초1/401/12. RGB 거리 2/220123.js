function sol([n, ...input]) {
  n = +n;
  input = input.map((str) => str.split(' ').map(Number));
  let min = Number.MAX_SAFE_INTEGER;

  for (let first = 0; first < 3; first++) {
    const dp = Array.from({ length: n }, () => new Array(3).fill(0));
    dp[0] = [...input[0]];

    for (let i = 0; i < 3; i++) {
      if (i === first) {
        dp[1][i] = Number.MAX_SAFE_INTEGER;
        continue;
      }
      dp[1][i] = input[1][i] + input[0][first];
    }

    for (let i = 2; i < n; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === n - 1 && j === first) continue;
        const prevChoices = [...dp[i - 1]];
        prevChoices.splice(j, 1);
        dp[i][j] = input[i][j] + Math.min(...prevChoices);
      }
    }

    const target = dp[n - 1].filter((val) => val > 0);
    min = Math.min(min, ...target);
  }

  return min;
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
