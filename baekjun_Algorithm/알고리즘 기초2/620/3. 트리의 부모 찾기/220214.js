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
  const N = +input[0];
  const tree = Array.from({ length: N + 1 }, () => new Array());
  const parentNode = Array.from({ length: N + 1 }, () => 0);
  const visits = Array.from({ length: N + 1 }, () => 0);

  input.slice(1).forEach((str) => {
    const [node, next] = str.split(' ').map(Number);
    tree[node].push(next);
    tree[next].push(node);
  });

  function preOrder(node) {
    const nodeArr = tree[node];
    nodeArr.forEach((next) => {
      if (visits[next]) return;
      visits[next] = 1;
      parentNode[next] = node;
      preOrder(next);
    });
  }

  visits[1] = 1;
  preOrder(1);

  return parentNode.slice(2).join('\n');
}
