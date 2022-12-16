function sol(input) {
  return [...new Set(input[1].split(' ').map(Number))].sort((a, b) => a - b).join(' ');
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
