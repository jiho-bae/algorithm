function sol([str, nums]) {
  const [N, M] = str.split(' ').map(Number);
  const numsArr = nums
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  const answer = [];

  function dfs(L, arr) {
    if (L === M) {
      answer.push(arr);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (arr.includes(numsArr[i])) continue;
      dfs(L + 1, [...arr, numsArr[i]]);
    }
  }

  dfs(0, []);

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
