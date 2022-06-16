function sol(input) {
  const [N, L] = input[0].split(' ').map(Number);
  const pos = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  let lt = -1;
  let rt = -1;
  let cnt = 0;

  for (let i = 0; i < N; i++) {
    if (rt < pos[i] + 0.5) {
      cnt += 1;
      lt = pos[i] - 0.5;
      rt = pos[i] + L - 0.5;
    }
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
