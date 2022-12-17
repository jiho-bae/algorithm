function sol(input) {
  const [N, Q] = input[0].split(' ').map(Number);
  const answer = [];
  const usado = Array.from({ length: N + 1 }, () => new Array());
  let recommend = new Set();

  function dfs(node, nextNode, weight) {
    const target = usado[nextNode];

    for (let [to, w] of target) {
      if (w < weight || to === node) continue;
      if (recommend.has(to)) continue;
      recommend.add(to);

      dfs(node, to, weight, recommend);
    }
  }

  input.slice(1, N).forEach((str) => {
    const [from, to, weight] = str.split(' ').map(Number);
    usado[from].push([to, weight]);
    usado[to].push([from, weight]);
  });

  input.slice(N).forEach((str) => {
    const [weight, node] = str.split(' ').map(Number);
    recommend = new Set();

    dfs(node, node, weight);
    answer.push(recommend.size);
  });

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
