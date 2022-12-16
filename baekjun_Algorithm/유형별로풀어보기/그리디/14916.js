function sol(input) {
  let change = +input;
  let fives = Math.floor(change / 5);
  change -= 5 * fives;

  if (change === 0) return fives;

  let twos = Math.floor(change / 2);
  change -= 2 * twos;

  if (change === 0) return fives + twos;

  while (fives > 0) {
    fives -= 1;
    change += 5;
    twos += Math.floor(change / 2);
    change -= 2 * Math.floor(change / 2);

    if (change === 0) return fives + twos;
  }

  return -1;
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
