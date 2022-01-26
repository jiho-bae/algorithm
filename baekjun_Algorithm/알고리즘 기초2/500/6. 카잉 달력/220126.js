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

function sol([n, ...input]) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    const [M, N, x, y] = input[i].split(' ').map(Number);
    const LCM = (M * N) / gcd(M, N);
    let flag = 1;

    for (let k = x; k < LCM; k += M) {
      if ((k - y) % N === 0) {
        answer.push(k);
        flag = 0;
        break;
      }
    }

    if (flag) answer.push(-1);
  }

  return answer.join('\n');
}

function gcd(a, b) {
  let c = 0;
  while (b !== 0) {
    c = a % b;
    a = b;
    b = c;
  }
  return a;
}
