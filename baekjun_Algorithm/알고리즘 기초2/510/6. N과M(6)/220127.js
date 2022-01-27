function sol([str, nums]) {
  const [N, M] = str.split(' ').map(Number);
  const numsArr = nums
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  const answer = [];

  function dfs(L, idx, arr) {
    if (L === M) {
      answer.push(arr);
      return;
    }

    for (let i = idx + 1; i < N; i++) {
      dfs(L + 1, i, [...arr, numsArr[i]]);
    }
  }

  dfs(0, -1, []);

  return answer.map((arr) => arr.join(' ')).join('\n');
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
