function sol(line) {
  const [N, K] = line.split(' ').map(Number);
  if (K === 0) return 'A'.repeat(N);

  let answer;

  for (let aCount = 0; aCount <= N; aCount++) {
    if (answer) break;
    if (aCount * (N - aCount) < K) continue;
    const bCount = N - aCount;
    const str = 'A'.repeat(aCount - 1) + 'B'.repeat(bCount);
    let pairCnt = (aCount - 1) * bCount;
    let idx = N - 1;

    while (idx >= aCount - 1) {
      if (pairCnt === K) {
        answer = str.slice(0, idx) + 'A' + str.slice(idx);
        break;
      } else {
        pairCnt++;
        idx--;
      }
    }
  }

  return answer ?? -1;
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
