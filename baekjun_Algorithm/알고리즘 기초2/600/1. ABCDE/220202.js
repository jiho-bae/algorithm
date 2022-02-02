function sol([str, ...input]) {
  const [N, M] = str.split(' ').map(Number);
  input = input.map((elem) => elem.split(' '));
  const relations = Array.from({ length: N }, () => new Array());
  const visit = new Array(N).fill(0);
  let answer = 0;

  input.forEach(([from, to]) => {
    relations[from] = [...relations[from], to];
    relations[to] = [...relations[to], from];
  });

  function dfs(L, from) {
    if (answer) return;
    if (L === 4) {
      answer = 1;
      return;
    }

    relations[from].forEach((elem) => {
      if (visit[elem]) return;
      visit[elem] = 1;
      dfs(L + 1, elem);
      visit[elem] = 0;
    });
  }

  for (let i = 0; i < N; i++) {
    visit[i] = 1;
    dfs(0, i);
    visit[i] = 0;
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
