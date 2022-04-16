function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const boards = input.slice(1).map((str) => str.split(''));
  const answer = [0, 0];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (boards[i][j] === '#') findMaxCross(i, j);
    }
  }

  return calculateArea(answer[0]) * calculateArea(answer[1]);

  function calculateArea(size) {
    return 4 * size + 1;
  }

  function checkSharp(x, y, size) {
    if (
      boards[x - size][y] === '#' &&
      boards[x + size][y] === '#' &&
      boards[x][y - size] === '#' &&
      boards[x][y + size] === '#'
    ) {
      return true;
    }
    return false;
  }

  function isInOfBoards(x, y, size) {
    if (x - size < 0 || y - size < 0 || x + size >= N || y + size >= M)
      return false;
    return true;
  }

  function isCross(x, y, size) {
    if (!isInOfBoards(x, y, size)) return false;
    if (!checkSharp(x, y, size)) return false;
    return true;
  }

  function findMaxCross(x, y) {
    let size = 1;

    while (isCross(x, y, size)) {
      size += 1;
    }

    if (size >= 2) {
      if (size - 1 > answer[1]) answer[1] = size - 1;
      else if (size - 1 > answer[0]) answer[0] = size - 1;
    }
  }
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
