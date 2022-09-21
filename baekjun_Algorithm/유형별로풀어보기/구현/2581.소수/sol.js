function eratosThenes(n, m) {
  const prime = Array.from({ length: n + 1 }, (_, i) => i);
  prime[1] = 0;

  for (let i = 2, len = Math.sqrt(n); i <= len; i++) {
    if (prime[i] === 0) continue;
    for (let j = i * 2; j <= n; j += i) {
      prime[j] = 0;
    }
  }

  return prime.filter((e) => e >= m);
}

function sol(input) {
  const M = +input[0];
  const N = +input[1];

  const prime = eratosThenes(N, M);
  const sum = prime.reduce((acc, val) => acc + val, 0);
  if (sum === 0) return -1;

  return `${sum}\n${prime[0]}`;
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
