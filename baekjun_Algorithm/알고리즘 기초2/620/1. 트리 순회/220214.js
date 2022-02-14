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
  let answer = '';
  const N = +input[0];
  const tree = {};
  input.slice(1).forEach((str) => {
    const [node, left, right] = str.split(' ');
    tree[node] = { left, right };
  });
  const EMPTY = '.';

  function preOrder(node) {
    if (node === EMPTY) return;
    const current = tree[node];
    answer += node;
    preOrder(current.left);
    preOrder(current.right);
  }

  function inOrder(node) {
    if (node === EMPTY) return;
    const current = tree[node];
    inOrder(current.left);
    answer += node;
    inOrder(current.right);
  }

  function postOrder(node) {
    if (node === EMPTY) return;
    const current = tree[node];
    postOrder(current.left);
    postOrder(current.right);
    answer += node;
  }

  [preOrder, inOrder, postOrder].forEach((cb) => {
    cb('A');
    answer += '\n';
  });

  return answer;
}
