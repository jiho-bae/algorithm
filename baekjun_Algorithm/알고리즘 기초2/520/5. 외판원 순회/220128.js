function sol([N, ...str]) {
  N = +N;
  const maps = str.map((elem) => elem.split(' ').map(Number));
  const visit = new Array(N).fill(0);
  let answer = Number.MAX_SAFE_INTEGER;
  let base = -1;

  function dfs(L, cost, from) {
    if (L === N - 1) {
      cost += maps[from][base];
      answer = Math.min(answer, cost);
      return;
    }

    for (let to = 0; to < N; to++) {
      if (!visit[to] && maps[from][to]) {
        visit[to] = 1;
        dfs(L + 1, cost + maps[from][to], to);
        visit[to] = 0;
      }
    }
  }

  for (let start = 0; start < N; start++) {
    base = start;
    visit[start] = 1;
    dfs(0, 0, start);
    visit[start] = 0;
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
