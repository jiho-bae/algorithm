function sol(input) {
  const n = +input[0];
  const answer = [];
  const inOrder = input[1].split(' ').map(Number);
  const postOrder = input[2].split(' ').map(Number);
  const inOrderIdx = new Array(n + 1).fill(0);

  inOrder.forEach((io, idx) => (inOrderIdx[io] = idx));

  function findPreOrder(inStart, inEnd, postStart, postEnd) {
    if (inStart > inEnd || postStart > postEnd) return;

    const rootNode = postOrder[postEnd];
    answer.push(rootNode);

    const rootIdx = inOrderIdx[rootNode];
    const leftLength = rootIdx - inStart;

    findPreOrder(inStart, rootIdx - 1, postStart, postStart + leftLength - 1);
    findPreOrder(rootIdx + 1, inEnd, postStart + leftLength, postEnd - 1);
  }

  findPreOrder(0, n - 1, 0, n - 1);

  return answer.join(' ');
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
