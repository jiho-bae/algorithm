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

function sol(input) {
  const A = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  const B = input[2]
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);

  return A.reduce((acc, val, idx) => acc + val * B[idx], 0);
}
