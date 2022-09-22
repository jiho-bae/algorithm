function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const unSeen = input.slice(1, 1 + N);
  const unListen = input.slice(1 + N).sort();
  const answer = [];
  const dict = {};

  for (let i = 0; i < N; i++) {
    dict[unSeen[i]] = 1;
  }

  for (let i = 0; i < M; i++) {
    if (dict[unListen[i]]) answer.push(unListen[i]);
  }

  return `${answer.length}\n${answer.join('\n')}`;
}

const input = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    console.log(sol(input));
    process.exit();
  });
