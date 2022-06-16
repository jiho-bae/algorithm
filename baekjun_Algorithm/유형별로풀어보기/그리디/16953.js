function sol(input) {
  let [A, B] = input.split(' ').map(Number);
  let cnt = 1;
  let prevB;

  while (A !== B) {
    cnt += 1;
    prevB = B;
    if (B % 10 === 1) B = Math.floor(B / 10);
    else if (B % 2 === 0) B /= 2;

    if (prevB === B) {
      cnt = -1;
      break;
    }
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
