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

function sol([n, ...input]) {
  n = +n;
  const board = input.map((str) => str.split(''));
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (board[i][j] !== board[i][j + 1]) {
        [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
        max = Math.max(max, checkSum(n, board));
        [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
      }

      if (board[j][i] !== board[j + 1][i]) {
        [board[j][i], board[j + 1][i]] = [board[j + 1][i], board[j][i]];
        max = Math.max(max, checkSum(n, board));
        [board[j][i], board[j + 1][i]] = [board[j + 1][i], board[j][i]];
      }
    }
  }

  return max;
}

function checkSum(n, board) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    let sumRow = 1;
    let sumCol = 1;

    for (let j = 1; j < n; j++) {
      if (board[i][j - 1] !== board[i][j]) {
        max = Math.max(max, sumRow);
        sumRow = 1;
      } else {
        sumRow++;
      }

      if (board[j - 1][i] !== board[j][i]) {
        max = Math.max(max, sumCol);
        sumCol = 1;
      } else {
        sumCol++;
      }
    }
    max = Math.max(max, sumRow, sumCol);
  }

  return max;
}
