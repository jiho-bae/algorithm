function sol(input) {
  const n = +input[0];
  const sequence = input[1].split(' ').map(Number);
  const dp = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n; i++) {
    const partsSequence = [];
    sequence.slice(0, i).forEach((elem, idx) => {
      if (elem < sequence[i]) partsSequence.push(dp[idx]);
    });

    if (partsSequence.length === 0) {
      dp[i] = 1;
      continue;
    }

    dp[i] = Math.max(...partsSequence) + 1;
  }

  const answer = [];
  let maxLength = Math.max(...dp);
  let maxIdx = dp.lastIndexOf(maxLength);
  answer.unshift(sequence[maxIdx]);

  while (--maxLength > 0) {
    maxIdx = dp.lastIndexOf(maxLength, maxIdx);
    answer.unshift(sequence[maxIdx]);
  }

  return `${answer.length}\n${answer.join(' ')}`;
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
