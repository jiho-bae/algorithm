function sol(input) {
  const N = +input[0];
  const parent = Array.from({ length: N + 1 }, () => new Array());
  const visits = new Array(N + 1).fill(0);
  visits[1] = 1;

  for (let str of input.slice(2)) {
    const [from, to] = str.split(' ').map(Number);
    parent[from].push(to);
    parent[to].push(from);
  }

  let cnt = 0;

  function dfs(arr) {
    const nextArr = [];

    for (let node of arr) {
      if (visits[node]) continue;
      visits[node] = 1;
      cnt += 1;
      nextArr.push(...parent[node]);
    }

    if (nextArr.length) {
      dfs(nextArr);
    }
  }

  dfs(parent[1]);

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
