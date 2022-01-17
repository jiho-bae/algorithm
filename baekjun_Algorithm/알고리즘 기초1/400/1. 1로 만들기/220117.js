function sol(n) {
  const answer = new Array(n);
  answer[1] = 0;

  for (let i = 2; i <= n; i++) {
    answer[i] = answer[i - 1] + 1;
    if (i % 3 === 0) answer[i] = Math.min(answer[i], answer[i / 3] + 1);
    if (i % 2 === 0) answer[i] = Math.min(answer[i], answer[i / 2] + 1);
  }

  return answer[n];
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(+line));
  })
  .on('close', () => {
    process.exit();
  });
