function sol(line) {
  const [N, M] = line.split(' ').map(Number);
  const answer = [];

  function dfs(L, prev, arr) {
    if (L === M) {
      answer.push(arr);
      return;
    }

    for (let i = prev; i <= N; i++) {
      dfs(L + 1, i, [...arr, i]);
    }
  }

  dfs(0, 1, []);

  return answer.map((arr) => arr.join(' ')).join('\n');
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
