function sol(input) {
  const ens = [500, 100, 50, 10, 5, 1];
  let change = 1000 - +input;
  let answer = 0;

  ens.forEach((en) => {
    if (change / en >= 1) {
      const cnt = Math.floor(change / en);
      change -= en * cnt;
      answer += cnt;
    }
  });

  return answer;
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
