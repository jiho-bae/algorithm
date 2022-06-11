function sol(input) {
  let [N, M, x, y, k] = input[0].split(' ').map(Number);
  const maps = input.slice(1, 1 + N).map((row) => row.split(' ').map(Number));
  const cmds = input[1 + N].split(' ').map(Number);
  const dir = {
    1: [0, 1],
    2: [0, -1],
    3: [-1, 0],
    4: [1, 0],
  };
  const dirStr = {
    1: 'east',
    2: 'west',
    3: 'north',
    4: 'south',
  };
  const dice = [0, 0, 0, 0, 0, 0, 0];
  const answer = [];

  function rollDice(cmd) {
    switch (dirStr[cmd]) {
      case 'east':
        [dice[4], dice[1], dice[3], dice[6]] = [
          dice[6],
          dice[4],
          dice[1],
          dice[3],
        ];
        break;
      case 'west':
        [dice[4], dice[1], dice[3], dice[6]] = [
          dice[1],
          dice[3],
          dice[6],
          dice[4],
        ];
        break;
      case 'north':
        [dice[2], dice[1], dice[5], dice[6]] = [
          dice[1],
          dice[5],
          dice[6],
          dice[2],
        ];
        break;
      case 'south':
        [dice[2], dice[1], dice[5], dice[6]] = [
          dice[6],
          dice[2],
          dice[1],
          dice[5],
        ];
        break;
    }
  }

  function isMovable(nx, ny) {
    if (nx < 0 || ny < 0 || nx >= N || ny >= M) return false;
    return true;
  }

  function isNextPosZero(nx, ny) {
    if (maps[nx][ny] === 0) return true;
    return false;
  }

  cmds.forEach((cmd) => {
    const [dx, dy] = dir[cmd];
    const [nx, ny] = [x + dx, y + dy];

    if (!isMovable(nx, ny)) return;

    rollDice(cmd);
    x = nx;
    y = ny;

    if (isNextPosZero(x, y)) {
      maps[x][y] = dice[6];
    } else {
      [maps[x][y], dice[6]] = [0, maps[x][y]];
    }

    answer.push(dice[1]);
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
