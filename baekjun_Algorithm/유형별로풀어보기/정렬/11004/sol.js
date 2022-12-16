function sol(input) {
  const [N, K] = input[0].split(' ').map(Number);
  return input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b)[K - 1];
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
