function sol(input) {
  let redBallPos = null;
  let blueBallPos = null;
  let holePos = null;
  const maxCnt = 10;
  const boardObj = {
    RED: 'R',
    BLUE: 'B',
    HOLE: 'O',
    EMPTY: '.',
  };
  const dirObj = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3,
  };

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const boards = input.slice(1).map((str, rowIdx) => {
    const row = str.split('');

    if (!redBallPos || !blueBallPos || !holePos) {
      row.forEach((elem, colIdx) => {
        if (elem === boardObj.RED) redBallPos = [rowIdx, colIdx];
        else if (elem === boardObj.BLUE) blueBallPos = [rowIdx, colIdx];
        else if (elem === boardObj.HOLE) holePos = [rowIdx, colIdx];
      });
    }

    return row;
  });

  boards[redBallPos[0]][redBallPos[1]] = boardObj.EMPTY;
  boards[blueBallPos[0]][blueBallPos[1]] = boardObj.EMPTY;

  function moveBall(ball, otherBall, dir) {
    while (1) {
      const nx = ball[0] + dx[dir];
      const ny = ball[1] + dy[dir];

      if (nx === otherBall[0] && ny === otherBall[1]) {
        break;
      } else if (boards[nx][ny] === boardObj.EMPTY) {
        ball[0] = nx;
        ball[1] = ny;
      } else if (boards[nx][ny] === boardObj.HOLE) {
        ball[0] = -1;
        ball[1] = -1;
        break;
      } else break;
    }
  }

  function checkEscape(ball) {
    if (ball[0] === -1 && ball[1] === -1) return true;
    return false;
  }

  function checkMoveRedballFirst(red, blue, dir) {
    if (
      (dir === dirObj.TOP && red[0] < blue[0]) ||
      (dir === dirObj.RIGHT && red[1] > blue[1]) ||
      (dir === dirObj.BOTTOM && red[0] > blue[0]) ||
      (dir === dirObj.LEFT && red[1] < blue[1])
    ) {
      return true;
    }
    return false;
  }

  function checkStop(beforeBall, afterBall) {
    if (beforeBall[0] === afterBall[0] && beforeBall[1] === afterBall[1])
      return true;
    return false;
  }

  let answer = -1;
  let findAnswer = 0;
  const queue = [[...redBallPos, ...blueBallPos, 1]];

  while (queue.length) {
    if (findAnswer) break;
    const [rx, ry, bx, by, cnt] = queue.shift();

    for (let dir = 0; dir < 4; dir++) {
      const reds = [rx, ry];
      const blues = [bx, by];

      if (checkMoveRedballFirst(reds, blues, dir)) {
        moveBall(reds, blues, dir);
        moveBall(blues, reds, dir);
      } else {
        moveBall(blues, reds, dir);
        moveBall(reds, blues, dir);
      }

      if (checkEscape(blues)) continue;
      if (checkEscape(reds)) {
        findAnswer = 1;
        answer = cnt;
        break;
      }
      if (checkStop([rx, ry], reds) && checkStop([bx, by], blues)) continue;
      if (cnt === maxCnt) continue;

      queue.push([...reds, ...blues, cnt + 1]);
    }
  }

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
