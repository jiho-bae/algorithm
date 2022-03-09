function turnDirect(dir, type) {
  if (type === 'D') {
    dir = (dir + 1) % 4;
  } else {
    dir = dir === 0 ? 3 : (dir - 1) % 4;
  }
  return dir;
}

function sol(input) {
  const N = +input[0];
  const K = +input[1];
  const boards = Array.from({ length: N }, () => new Array(N).fill(0));

  input.slice(2, 2 + K).forEach((str) => {
    const [row, col] = str.split(' ');
    boards[row - 1][col - 1] = 1;
  });

  const L = +input[2 + K];
  const turnInfos = input.slice(2 + K + 1).map((str) => str.split(' '));

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const snakeHead = { x: 0, y: 0 };
  let time = 0;
  let direct = 1;
  let turnIndex = 0;
  const tails = [[0, 0]];
  boards[0][0] = 2;

  while (1) {
    time++;

    const nx = snakeHead.x + dx[direct];
    const ny = snakeHead.y + dy[direct];

    if (nx < 0 || ny < 0 || nx >= N || ny >= N || boards[nx][ny] === 2) {
      break;
    }

    if (boards[nx][ny] === 0) {
      const [tailX, tailY] = tails.shift();
      boards[tailX][tailY] = 0;
    }
    boards[nx][ny] = 2;
    tails.push([nx, ny]);
    snakeHead.x = nx;
    snakeHead.y = ny;

    if (turnIndex < L && time === +turnInfos[turnIndex][0]) {
      direct = turnDirect(direct, turnInfos[turnIndex][1]);
      turnIndex++;
    }
  }

  return time;
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
