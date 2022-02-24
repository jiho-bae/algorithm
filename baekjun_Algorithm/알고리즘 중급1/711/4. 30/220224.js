function sol(line) {
  const N = line;

  if (!N.includes('0')) return -1;
  if ([...line].map(Number).reduce((acc, val) => acc + val, 0) % 3 !== 0)
    return -1;

  return [...line].sort((a, b) => b - a).join('');
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
