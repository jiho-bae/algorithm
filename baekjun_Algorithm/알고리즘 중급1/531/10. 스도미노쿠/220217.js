function sol(input) {
  let N = null;
  let idx = 0;
  let sudoku;
  let blanks;
  let puzzleNumber = 1;
  let answer = '';
  let flag = 0;
  const CODE = 64;

  function checkCross(target, x, y) {
    for (let i = 1; i <= 9; i++) {
      if (sudoku[x][i] === target) return false;
      if (sudoku[i][y] === target) return false;
    }
    return true;
  }

  function checkRectangle(target, x, y) {
    const rowIdx = Math.floor((x - 1) / 3) * 3 + 1;
    const colIdx = Math.floor((y - 1) / 3) * 3 + 1;

    for (let i = rowIdx; i < rowIdx + 3; i++) {
      for (let j = colIdx; j < colIdx + 3; j++) {
        if (sudoku[i][j] === target) return false;
      }
    }
    return true;
  }

  function getRowColIndex(position) {
    const rowIndex = position[0].charCodeAt() - CODE;
    const colIndex = +position[1];

    return [rowIndex, colIndex];
  }

  function dfs(L) {
    if (flag) return;

    if (L === blanks.length) {
      const sudokuResult = sudoku.slice(1).reduce((acc, arr) => {
        return acc + arr.slice(1).join('') + '\n';
      }, '');

      answer += `Puzzle ${puzzleNumber++}\n`;
      answer += sudokuResult;
      flag = 1;
      return;
    }

    const [nx, ny] = blanks[L];
    for (let num = 1; num <= 9; num++) {
      if (!checkCross(num, nx, ny)) continue;
      if (!checkRectangle(num, nx, ny)) continue;
      sudoku[nx][ny] = num;
      dfs(L + 1);
      sudoku[nx][ny] = 0;
    }
  }

  while (true) {
    N = +input[idx++];
    if (N === 0) break;

    sudoku = Array.from({ length: 10 }, () => new Array(10).fill(0));
    const positions = input.slice(idx, idx + N);
    idx += N;

    for (let str of positions) {
      const [val1, pos1, val2, pos2] = str.split(' ');
      const [row1, col1] = getRowColIndex(pos1);
      const [row2, col2] = getRowColIndex(pos2);

      sudoku[row1][col1] = +val1;
      sudoku[row2][col2] = +val2;
    }

    const nums = input[idx].split(' ');
    for (let i = 0; i < 9; i++) {
      const [row, col] = getRowColIndex(nums[i]);
      sudoku[row][col] = i + 1;
    }
    idx++;

    blanks = [];

    for (let i = 1; i <= 9; i++) {
      for (let j = 1; j <= 9; j++) {
        if (!sudoku[i][j]) blanks.push([i, j]);
      }
    }

    dfs(0);
    flag = 0;
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
