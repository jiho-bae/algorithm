function sol([str, nums]) {
  const [N, M] = str.split(' ').map(Number);
  const numsArr = nums
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  const answer = new Set();

  function dfs(L, arr) {
    if (L === M) {
      const series = arr.join(' ');
      answer.add(series);
      return;
    }

    for (let i = 0; i < N; i++) {
      dfs(L + 1, [...arr, numsArr[i]]);
    }
  }

  dfs(0, []);

  return Array.from(answer).join('\n');
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
