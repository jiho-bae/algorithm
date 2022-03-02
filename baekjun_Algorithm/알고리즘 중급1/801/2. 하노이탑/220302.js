function sol(input) {
  const N = +input;
  const answer = [];

  function hanoi(n, from, to, by) {
    if (n === 1) {
      answer.push(`${from} ${to}`);
    } else {
      hanoi(n - 1, from, by, to);
      answer.push(`${from} ${to}`);
      hanoi(n - 1, by, to, from);
    }
  }

  answer.push(2 ** N - 1);
  hanoi(N, 1, 3, 2);

  return answer.join('\n');
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
