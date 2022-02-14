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
  const EMPTY = -1;
  const tree = {};
  const levels = Array.from({ length: N + 1 }, () => new Array());
  const nodeOccurance = Array.from({ length: N + 1 }, () => 0);
  input.slice(1).forEach((str) => {
    const [node, left, right] = str.split(' ').map((elem) => {
      nodeOccurance[elem]++;
      return Number(elem);
    });
    tree[node] = { left, right };
  });
  let cnt = 1;

  function inOrder(node, level) {
    if (node === EMPTY) return;
    const current = tree[node];
    inOrder(current.left, level + 1);
    levels[level].push(cnt++);
    inOrder(current.right, level + 1);
  }

  inOrder(nodeOccurance.indexOf(1), 1);

  let answerLevel = -1;
  let answerDistance = Number.MIN_SAFE_INTEGER;

  levels.forEach((level, idx) => {
    if (!level.length) return;
    const distance = level[level.length - 1] - level[0] + 1;
    if (answerDistance < distance) {
      answerLevel = idx;
      answerDistance = distance;
    }
  });

  return `${answerLevel} ${answerDistance}`;
}
