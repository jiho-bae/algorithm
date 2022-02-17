function sol(line) {
  const N = +line;
  const rowsBoard = new Array(N).fill(0);
  let cnt = 0;

  function checkAvailable(rowNumber, colNumber) {
    for (let idx = 0; idx < rowNumber; idx++) {
      // check row
      if (colNumber === rowsBoard[idx]) return false;
      // check diagnol
      if (Math.abs(rowNumber - idx) === Math.abs(colNumber - rowsBoard[idx]))
        return false;
    }
    return true;
  }

  function dfs(L) {
    if (L === N) {
      cnt++;
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!checkAvailable(L, i)) continue;
      rowsBoard[L] = i;
      dfs(L + 1);
      rowsBoard[L] = 0;
    }
  }

  dfs(0);

  return cnt;
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
