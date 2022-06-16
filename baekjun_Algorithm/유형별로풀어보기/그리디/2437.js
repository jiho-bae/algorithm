function sol(input) {
  const N = +input[0];
  const weights = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  let sum = 1;

  for (let i = 0; i < N; i++) {
    if (sum < weights[i]) break;
    sum += weights[i];
  }

  return sum;
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
