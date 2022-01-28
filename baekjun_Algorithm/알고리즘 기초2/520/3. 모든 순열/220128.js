function sol(N) {
  N = +N;
  const answer = [];

  function dfs(L, dfsArr) {
    if (L === N) {
      const series = dfsArr.join(' ');
      answer.push(series);
      return;
    }

    for (let num = 1; num <= N; num++) {
      if (dfsArr.includes(num)) continue;
      dfs(L + 1, [...dfsArr, num]);
    }
  }

  dfs(0, []);

  return answer.join('\n');
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
