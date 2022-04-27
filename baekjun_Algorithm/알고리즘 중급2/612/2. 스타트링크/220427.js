function sol(input) {
  const [F, S, G, U, D] = input.split(' ').map(Number);
  const USE_THE_STAIRS = 'use the stairs';
  if ((S > G && D === 0) || (S < G && U === 0)) return USE_THE_STAIRS;
  let answer = null;

  function bfs() {
    const queue = [];
    const visits = {};
    queue.push(S);
    visits[S] = 1;

    while (queue.length) {
      const cur = queue.shift();
      if (cur === G) {
        answer = visits[cur] - 1;
        return;
      }

      for (let next of [cur + U, cur - D]) {
        if (1 <= next && next <= F && !visits[next]) {
          visits[next] = visits[cur] + 1;
          queue.push(next);
        }
      }
    }
  }

  bfs();

  return answer === null ? USE_THE_STAIRS : answer;
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
