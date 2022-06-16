function sol(str) {
  const len = str.length;
  const left = str.slice(0, len / 2);
  const right = str.slice(len / 2);
  const sumOfLeft = [...left].reduce((acc, val) => acc + +val, 0);
  const sumOfRight = [...right].reduce((acc, val) => acc + +val, 0);

  return sumOfLeft === sumOfRight ? 'LUCKY' : 'READY';
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
