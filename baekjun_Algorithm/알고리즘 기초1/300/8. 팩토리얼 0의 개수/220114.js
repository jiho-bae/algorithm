function sol(line) {
  const num = Number(line);
  const cnt = [0, 0];

  function factorial(n) {
    if (n <= 1) return;

    let base = n;
    while (base % 2 === 0) {
      base /= 2;
      cnt[0]++;
    }
    while (base % 5 === 0) {
      base /= 5;
      cnt[1]++;
    }
    factorial(n - 1);
  }

  factorial(num);

  return Math.min(...cnt);
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
