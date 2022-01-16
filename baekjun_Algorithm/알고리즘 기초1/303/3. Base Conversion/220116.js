function sol(input) {
  const [A, B] = input[0].split(' ').map(Number);
  const m = +input[1];
  const arr = input[2].split(' ').map(Number);
  let sum = 0;

  for (let i = m - 1; i >= 0; i--) {
    sum += arr[i] * A ** (m - i - 1);
  }

  const answer = [];
  while (sum / B >= 1) {
    answer.unshift(sum % B);
    sum = Math.floor(sum / B);
  }

  if (sum !== 0) {
    answer.unshift(sum);
  }

  return answer.join(' ');
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
