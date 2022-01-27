function sol([str, nums]) {
  const [N, M] = str.split(' ').map(Number);
  const numsArr = nums
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  const check = Array.from({ length: N + 1 }, () => 0);
  const answer = [];

  function dfs(L, arr) {
    if (L === M) {
      const series = arr.join(' ');
      if (answer.includes(series)) return;
      answer.push(series);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (check[i]) continue;
      check[i] = 1;
      dfs(L + 1, [...arr, numsArr[i]]);
      check[i] = 0;
    }
  }

  dfs(0, []);

  return answer.join('\n');
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
