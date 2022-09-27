function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const S = {};
  for (let i = 1; i <= N; i++) {
    S[input[i]] = 1;
  }

  let cnt = 0;

  input.slice(N + 1).forEach((str) => {
    if (S[str]) cnt++;
  });

  return cnt;
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
