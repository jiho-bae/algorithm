function sol(input) {
  const [R, C] = input[0].split(' ').map(Number);
  const pasture = input.slice(1).map((str) => str.split(''));
  const sheep = 'S';
  const wolf = 'W';
  const empty = '.';
  const sheepPositions = [];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (pasture[i][j] === sheep) sheepPositions.push([i, j]);
    }
  }

  function isExistingWolf(x, y) {
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
      if (pasture[nx][ny] === wolf) return true;
    }
    return false;
  }

  function paintFence(x, y) {
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
      if (pasture[nx][ny] === empty) pasture[nx][ny] = 'D';
    }
  }

  let answer = '';
  for (let [x, y] of sheepPositions) {
    const existWolf = isExistingWolf(x, y);
    if (existWolf) return '0';
  }

  sheepPositions.forEach(([x, y]) => paintFence(x, y));
  answer += '1\n';
  answer += pasture.reduce((acc, arr) => acc + arr.join('') + '\n', '');
  return answer;
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
