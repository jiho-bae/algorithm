function sol(input) {
  const N = +input;
  const stars = Array.from({ length: N }, () => new Array(N).fill('*'));

  function pattern(sx, sy, size) {
    const blankSize = size / 3;
    if (blankSize === 1) {
      stars[sx + 1][sy + 1] = ' ';
      return;
    }

    for (let x = sx + blankSize; x < sx + 2 * blankSize; x++) {
      for (let y = sy + blankSize; y < sy + 2 * blankSize; y++) {
        stars[x][y] = ' ';
      }
    }

    for (let i = 0; i < size; i += blankSize) {
      for (let j = 0; j < size; j += blankSize) {
        pattern(sx + i, sy + j, blankSize);
      }
    }
  }

  pattern(0, 0, N);

  return stars.map((star) => star.join('')).join('\n');
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
