function sol(input) {
  const iter = input.length;
  const answer = [];
  for (let i = 0; i < iter - 1; i++) {
    const [L, P, V] = input[i].split(' ').map(Number);

    const share = Math.floor(V / P);
    const rest = V - share * P;
    const days = Math.min(rest, L);

    answer.push(share * L + days);
  }

  return answer.map((elem, i) => `Case ${i + 1}: ${elem}`).join('\n');
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
