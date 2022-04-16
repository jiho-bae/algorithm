function sol(input) {
  const N = +input[0];
  const dirObj = {
    row: 'row',
    col: 'col',
    diagnol: 'diagnol',
  };
  const dirCnt = { row: 0, col: 0, diagnol: 0 };

  const boards = input.slice(1).map((str) => {
    return str.split(' ').map((elem) => {
      if (elem === '1') return 1;
      return { ...dirCnt };
    });
  });

  if (boards[N - 1][N - 1] === 1) return 0;
  boards[0][1].row = 1;

  for (let i = 0; i < N; i++) {
    for (let j = 1; j < N; j++) {
      if (boards[i][j] === 1) continue;
      const targetCell = boards[i][j];
      targetCell.row += getCntOfLeftCell({ px: i, py: j - 1 });
      targetCell.col += getCntOfTopCell({ px: i - 1, py: j });
      targetCell.diagnol += getCntOfDiagnolCell({ cx: i, cy: j });
    }
  }

  const answer = boards[N - 1][N - 1];
  return answer.row + answer.col + answer.diagnol;

  function isOutOfBoard(x, y) {
    if (x < 0 || y < 0 || x >= N || y >= N) return true;
    return false;
  }

  function isWall(x, y) {
    if (boards[x][y] === 1) return true;
    return false;
  }

  function isMovableDiagnol(x, y) {
    if (isWall(x - 1, y)) return false;
    if (isWall(x, y - 1)) return false;
    if (isWall(x - 1, y - 1)) return false;
    return true;
  }

  function getCntOfPrevCell(dir, x, y) {
    return boards[x][y][dir];
  }

  function getCntOfLeftCell({ px, py }) {
    if (isOutOfBoard(px, py)) return 0;
    if (isWall(px, py)) return 0;

    const cntOfPrevRow = getCntOfPrevCell(dirObj.row, px, py);
    const cntOfPrevDiagnol = getCntOfPrevCell(dirObj.diagnol, px, py);
    return cntOfPrevRow + cntOfPrevDiagnol;
  }

  function getCntOfTopCell({ px, py }) {
    if (isOutOfBoard(px, py)) return 0;
    if (isWall(px, py)) return 0;

    const cntOfPrevCol = getCntOfPrevCell(dirObj.col, px, py);
    const cntOfPrevDiagnol = getCntOfPrevCell(dirObj.diagnol, px, py);

    return cntOfPrevCol + cntOfPrevDiagnol;
  }

  function getCntOfDiagnolCell({ cx, cy }) {
    const [px, py] = [cx - 1, cy - 1];
    if (isOutOfBoard(px, py)) return 0;
    if (!isMovableDiagnol(cx, cy)) return 0;

    const cntOfPrevRow = getCntOfPrevCell(dirObj.row, px, py);
    const cntOfPrevCol = getCntOfPrevCell(dirObj.col, px, py);
    const cntOfPrevDiagnol = getCntOfPrevCell(dirObj.diagnol, px, py);

    return cntOfPrevRow + cntOfPrevCol + cntOfPrevDiagnol;
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
