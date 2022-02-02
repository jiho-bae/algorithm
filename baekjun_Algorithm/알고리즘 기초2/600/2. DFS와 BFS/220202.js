function sol([str, ...input]) {
  const [N, M, V] = str.split(' ').map(Number);
  const relations = Array.from({ length: N + 1 }, () => new Array());
  const visit = new Array(N + 1).fill(0);
  const dfsAnswer = [];
  const bfsAnswer = [];

  input.forEach((elem) => {
    const [from, to] = elem.split(' ');
    relations[from] = [...relations[from], to];
    relations[to] = [...relations[to], from];
  });
  relations.forEach((arr) => arr.sort((a, b) => a - b));

  function dfs(start) {
    dfsAnswer.push(start);

    relations[start].forEach((to) => {
      if (visit[to]) return;
      visit[to] = 1;
      dfs(to);
    });
  }

  function bfs(start) {
    const queue = [start];
    visit[start] = 1;

    while (queue.length) {
      const from = queue.shift();
      bfsAnswer.push(from);

      relations[from].forEach((to) => {
        if (visit[to]) return;
        visit[to] = 1;
        queue.push(to);
      });
    }
  }

  visit[V] = 1;
  dfs(V);
  visit.fill(0);
  visit[V] = 1;
  bfs(V);

  return [dfsAnswer.join(' '), bfsAnswer.join(' ')].join('\n');
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
