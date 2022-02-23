function sol(input) {
  let [N, K] = input[0].split(' ').map(Number);
  const coins = input.slice(1).map(Number);
  let answer = 0;

  for (let i = N - 1; i >= 0; i--) {
    const portion = Math.floor(K / coins[i]);
    if (portion > 0) {
      K -= coins[i] * portion;
      answer += portion;
    }
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
