function sol(input) {
  const N = +input[0];
  const arr = input[1].split(' ').map(Number);
  arr.sort((a, b) => a - b);

  return arr[Math.floor((N - 1) / 2)];
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
