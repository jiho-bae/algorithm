function sol(input) {
  const len = input.length;
  const answer = [];

  for (let i = 0; i < len - 1; i++) {
    const [n, ...nums] = input[i].split(' ').map(Number);
    const visit = new Array(n).fill(0);

    function dfs(L, prev, arr) {
      if (L === 6) {
        const series = arr.join(' ');
        answer.push(series);
        return;
      }

      for (let i = prev; i < n; i++) {
        if (visit[i]) continue;
        visit[i] = 1;
        dfs(L + 1, i, [...arr, nums[i]]);
        visit[i] = 0;
      }
    }

    dfs(0, 0, []);
    answer.push('');
  }

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
