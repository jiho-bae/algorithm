function sol(n) {
  if (n === 1) return 1;

  const DIVISION = 10007;
  const answer = new Array(n + 1);
  answer[1] = 1;
  answer[2] = 2;

  for (let i = 3; i <= n; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % DIVISION;
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
