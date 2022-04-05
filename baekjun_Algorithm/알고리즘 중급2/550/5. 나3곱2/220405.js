function sol(input) {
  const N = +input[0];
  const series = input[1].split(' ').map((elem) => BigInt(elem));
  const answer = [];

  function dfs(L, num, A) {
    if (L === N - 1) {
      answer.push(...A);
      return;
    }

    if (series.includes(num)) {
      if (num % 3n === 0n) {
        if (series.includes(num / 3n)) dfs(L + 1, num / 3n, [...A, num / 3n]);
      }

      if (series.includes(num * 2n)) dfs(L + 1, num * 2n, [...A, num * 2n]);
    }
  }

  for (let i = 0; i < N; i++) {
    if (answer.length) break;
    dfs(0, series[i], [series[i]]);
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
