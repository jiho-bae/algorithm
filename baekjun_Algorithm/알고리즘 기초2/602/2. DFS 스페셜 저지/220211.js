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
  const orders = input[len - 1].split(' ');
  let cnt = 0;

  for (let i = 0; i < len - 1; i++) {
    const [from, to] = input[i].split(' ');
    boards[from].push(to);
    boards[to].push(from);
  }

  function dfs(now) {
    while (true) {
      const next = orders[0];
      const idx = boards[now].indexOf(next);
      if (idx !== -1) {
        orders.shift();
        cnt++;
        dfs(next);
      } else {
        break;
      }
    }
  }

  const now = orders.shift();
  cnt++;
  dfs(now);

  return cnt === N ? 1 : 0;
}
