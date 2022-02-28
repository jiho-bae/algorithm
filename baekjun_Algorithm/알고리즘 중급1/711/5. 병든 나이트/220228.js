function sol(line) {
  const [N, M] = line.split(' ').map(Number);

  if (N === 1) return 1;
  else if (N === 2) return Math.min(4, Math.floor((M - 1) / 2) + 1);
  else if (M < 7) return Math.min(4, M);
  else return 2 + (M - 5) + 1;
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
