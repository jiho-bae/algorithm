function sol(line) {
  const len = line.length;
  let numberOfIronSticks = 1;
  let cnt = 0;

  for (let i = 1; i < len; i++) {
    if (line[i] === '(') {
      numberOfIronSticks++;
      continue;
    }
    numberOfIronSticks--;
    if (line[i - 1] === '(') {
      cnt += numberOfIronSticks;
    } else cnt += 1;
  }

  return cnt;
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
