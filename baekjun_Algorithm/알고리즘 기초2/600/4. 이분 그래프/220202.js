function sol([K, ...input]) {
  K = +K;
  let idx = 0;
  const answer = [];

  for (let i = 0; i < K; i++) {
    const [V, E] = input[idx].split(' ').map(Number);
    const relations = Array.from({ length: V + 1 }, () => new Array());
    const visit = new Array(V + 1).fill(0);
    let flag = 1;
    idx++;

    input.slice(idx, idx + E).forEach((fromTo) => {
      const [from, to] = fromTo.split(' ');
      relations[from].push(to);
      relations[to].push(from);
    });

    function bfs(start) {
      const queue = [start];
      let color = 1;
      visit[start] = color;

      while (queue.length) {
        const from = queue.shift();
        const len = relations[from].length;
        color = visit[from] === 1 ? 2 : 1;

        for (let i = 0; i < len; i++) {
          const to = relations[from][i];
          if (!visit[to]) {
            visit[to] = color;
            queue.push(to);
          }
          if (visit[to] !== color) {
            flag = 0;
            return;
          }
        }
      }
    }

    for (let i = 1; i <= V; i++) {
      if (visit[i]) continue;
      bfs(i);
    }

    answer.push(flag ? 'YES' : 'NO');
    idx += E;
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
