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

function sol([str, ...input]) {
  const N = +str;
  const boards = Array.from({ length: N + 1 }, () => new Array(0));
  const len = input.length;
  const orders = input[len - 1].split(' ').map(Number);

  for (let i = 0; i < len - 1; i++) {
    const [from, to] = input[i].split(' ').map(Number);
    boards[from].push(to);
    boards[to].push(from);
  }

  let flag = 1;
  let cursor = 1;

  function bfs() {
    const queue = [1];

    while (queue.length) {
      if (!flag) return;
      const now = queue.shift();

      while (boards[now].length) {
        if (!flag) return;
        const next = orders[cursor];
        const idx = boards[now].indexOf(next);

        if (idx !== -1) {
          const pairIdx = boards[next].indexOf(now);
          boards[now].splice(idx, 1);
          boards[next].splice(pairIdx, 1);

          queue.push(orders[cursor++]);
        } else {
          flag = 0;
        }
      }
    }
  }

  bfs();

  return flag;
}
