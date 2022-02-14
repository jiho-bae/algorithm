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

function sol(input) {
  const V = +input[0];
  const tree = Array.from({ length: V + 1 }, () => new Array());
  const visits = Array.from({ length: V + 1 }, () => 0);
  const maxInfo = { node: -1, dist: -1 };

  input.slice(1).forEach((str) => {
    const [node, next, nextDist] = str.split(' ').map(Number);
    tree[node].push([next, nextDist]);
    tree[next].push([node, nextDist]);
  });

  function bfs(start, dist) {
    const queue = [[start, dist]];
    maxInfo.dist = -1;

    while (queue.length) {
      const [now, nowDist] = queue.shift();

      if (visits[now]) continue;
      visits[now] = 1;
      if (maxInfo.dist < nowDist) {
        maxInfo.node = now;
        maxInfo.dist = nowDist;
      }
      for ([next, nextDist] of tree[now]) {
        queue.push([next, nowDist + nextDist]);
      }
    }
  }

  bfs(1, 0);
  visits.fill(0);

  bfs(maxInfo.node, 0);

  return maxInfo.dist;
}
