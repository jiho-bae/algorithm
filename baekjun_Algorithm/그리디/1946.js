function sol(input) {
  const T = +input[0];
  let idx = 1;
  const answer = [];

  for (let i = 1; i <= T; i++) {
    const N = +input[idx];
    const candidates = input
      .slice(idx + 1, idx + 1 + N)
      .map((str) => str.split(' ').map(Number));

    const sorted = candidates.sort((a, b) => a[0] - b[0]);
    let cnt = 1;
    let interviewScore = sorted[0][1];
    for (let i = 1; i < N; i++) {
      const nextInterviewScore = sorted[i][1];
      if (interviewScore > nextInterviewScore) {
        cnt += 1;
        interviewScore = nextInterviewScore;
      }
    }

    answer.push(cnt);

    idx += N + 1;
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
