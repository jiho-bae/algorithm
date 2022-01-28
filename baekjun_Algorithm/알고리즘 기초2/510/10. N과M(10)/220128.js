function sol([str, nums]) {
  const [N, M] = str.split(' ').map(Number);
  const numsArr = nums
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  const answer = [];

  function dfs(L, prev, arr) {
    if (L === M) {
      const series = arr.join(' ');
      if (answer.includes(series)) return;
      answer.push(series);
      return;
    }

    for (let i = prev + 1; i < N; i++) {
      dfs(L + 1, i, [...arr, numsArr[i]]);
    }
  }

  dfs(0, -1, []);

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
