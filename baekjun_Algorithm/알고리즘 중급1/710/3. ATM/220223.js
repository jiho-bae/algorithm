function sol(input) {
  const N = +input[0];
  const withdrawTimes = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  let answer = 0;

  for (let i = 0; i < N; i++) {
    answer += withdrawTimes[i] * (N - i);
  }

  return answer;
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
