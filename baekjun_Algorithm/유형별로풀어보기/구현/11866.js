function sol(input) {
  const [N, K] = input.split(' ').map(Number);
  const arr = new Array(N + 1).fill(1);
  const answer = [];
  let idx = 1;

  while (answer.length < N) {
    let cnt = 0;

    while (1) {
      if (arr[idx]) cnt++;
      if (cnt === K) break;
      idx = idx === N ? 1 : idx + 1;
    }

    answer.push(idx);
    arr[idx] = 0;
    idx = idx === N ? 1 : idx + 1;
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
