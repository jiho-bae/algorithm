function sol(input) {
  const [n, cnt] = input.split(' ').map((v) => +v);
  const arr = new Array(n).fill().map((_, i) => i + 1);
  const answer = [];
  let idx = 0;
  while (arr.length) {
    if (++idx === cnt) {
      answer.push(arr.shift());
      idx = 0;
    } else {
      arr.push(arr.shift());
    }
  }
  return '<' + answer.join(', ') + '>';
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
