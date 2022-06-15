function sol(input) {
  let cnt = 0;
  const N = +input[0];
  const scores = input.slice(1).map(Number);

  for (let i = N - 2; i >= 0; i--) {
    const prev = scores[i + 1];
    const cur = scores[i];
    const diff = prev - cur;

    if (diff > 0) continue;
    scores[i] = prev - 1;
    cnt += 1 - diff;
  }

  return cnt;
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
