function sol(input) {
  const N = +input[0];
  const A = input.slice(1).map((elem, idx) => ({ num: +elem, idx }));

  A.sort((a, b) => a.num - b.num);

  let cnt = 0;
  for (let i = 0; i < N; i++) {
    if (A[i].idx - i > cnt) cnt = A[i].idx - i;
  }

  return cnt + 1;
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
