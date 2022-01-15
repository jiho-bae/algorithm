function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

function sol(input) {
  const [n, s] = input[0].split(' ').map(Number);
  const positions = input[1].split(' ').map(Number);

  const distance = positions
    .map((position) => Math.abs(s - position))
    .sort((a, b) => a - b);
  const len = distance.length;
  let answer = distance[0];

  for (let i = 1; i < len; i++) {
    answer = gcd(answer, distance[i]);
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
