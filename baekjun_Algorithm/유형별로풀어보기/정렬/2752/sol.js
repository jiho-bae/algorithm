function sol(input) {
  return input
    .split(' ')
    .sort((a, b) => a - b)
    .join(' ');
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
