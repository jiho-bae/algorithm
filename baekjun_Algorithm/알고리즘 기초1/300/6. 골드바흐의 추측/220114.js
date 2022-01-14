const sol = (input) => {
  input = input.map(Number);
  const max = Math.max(...input);
  const sqrtMax = Math.sqrt(max);
  const prime = new Array(max + 1).fill(1);
  const answer = [];

  prime[0] = prime[1] = 0;

  for (let i = 2; i <= sqrtMax; i++) {
    if (prime[i]) {
      let j = 2;
      while (i * j <= max) {
        prime[i * j] = 0;
        j++;
      }
    }
  }

  input.forEach((x, i) => {
    const halfX = Math.floor(x);

    if (x < 6) return;
    for (let y = 3; y <= x; y++) {
      if (y > halfX) break;
      if (prime[y] && prime[x - y]) {
        answer.push(`${x} = ${y} + ${x - y}`);
        break;
      }
    }

    if (answer.length < i + 1) {
      answer.push(`"Goldbach's conjecture is wrong."`);
    }
  });

  return answer.join('\n');
};

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
