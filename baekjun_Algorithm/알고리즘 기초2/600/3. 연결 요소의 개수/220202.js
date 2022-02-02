function sol([str, ...input]) {
  const [N, M] = str.split(' ').map(Number);
  if (M === 0) return N;

  const relations = Array.from({ length: N + 1 }, () => new Array());
  const visit = new Array(N + 1).fill(0);
  let cnt = 0;

  input.forEach((elem) => {
    const [from, to] = elem.split(' ');
    relations[from].push(to);
    relations[to].push(from);
  });

  function bfs(start) {
    const queue = [start];
    visit[start] = 1;

    while (queue.length) {
      const from = queue.shift();

      relations[from].forEach((to) => {
        if (visit[to]) return;
        visit[to] = 1;
        queue.push(to);
      });
    }
  }

  for (let i = 1; i <= N; i++) {
    if (visit[i]) continue;
    bfs(i);
    cnt += 1;
  }

  return cnt;
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
