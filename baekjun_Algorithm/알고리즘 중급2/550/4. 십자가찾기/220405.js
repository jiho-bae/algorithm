function sol(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const grating = input.slice(1).map((str) => str.split(''));
  const coordinate = [];
  const [dx, dy] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];

  function checkCross(center, depth) {
    let isCross = true;

    for (let i = 0; i < 4; i++) {
      if (!isCross) return false;
      for (let j = 1; j <= depth; j++) {
        const [nx, ny] = [center.x + dx[i] * j, center.y + dy[i] * j];
        if (grating[nx][ny] !== '*') {
          isCross = false;
        }
      }
    }

    return isCross;
  }

  function paintCross(center, depth) {
    grating[center.x][center.y] = '.';

    for (let i = 0; i < 4; i++) {
      for (let j = 1; j <= depth; j++) {
        const [nx, ny] = [center.x + dx[i] * j, center.y + dy[i] * j];
        grating[nx][ny] = '.';
      }
    }
  }

  function checkGrating() {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (grating[i][j] === '*') return false;
      }
    }

    return true;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grating[i][j] === '*') {
        let maxLength = Math.min(i, j);
        while (maxLength) {
          const isCross = checkCross({ x: i, y: j }, maxLength--);
          if (isCross) {
            coordinate.push([i, j, maxLength + 1]);
          }
        }
      }
    }
  }

  const answer = [];
  if (coordinate.length) {
    answer.push(coordinate.length);

    coordinate.forEach(([x, y, len]) => {
      paintCross({ x, y }, len);
      answer.push(`${x + 1} ${y + 1} ${len}`);
    });
  }

  const isFinished = checkGrating();
  if (!isFinished) return -1;
  if (!answer.length) return 0;

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
