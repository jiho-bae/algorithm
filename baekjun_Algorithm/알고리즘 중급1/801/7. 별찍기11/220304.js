function sol(input) {
  const N = +input;
  let K;

  for (let i = 0; i <= 10; i++) {
    if (3 * 2 ** i === N) {
      K = i;
      break;
    }
  }

  const width = 5 * 2 ** K + 2 ** K - 1;
  const height = 3 * 2 ** K;

  const arr = new Array(height);

  let starCnt = -1;
  for (let i = 0; i < height; i++) {
    starCnt += 2;
    const blankCnt = Math.floor((width - starCnt) / 2);
    arr[i] = [
      ...' '.repeat(blankCnt),
      ...'*'.repeat(starCnt),
      ...' '.repeat(blankCnt),
    ];
  }

  function changeBlank(sx, cy, w, h) {
    for (let i = 0; i < h; i++) {
      let wCnt = w;
      arr[sx + i][cy] = ' ';
      wCnt -= 1;

      let idx = 1;
      while (wCnt > 0) {
        arr[sx + i][cy - idx] = ' ';
        arr[sx + i][cy + idx] = ' ';
        wCnt -= 2;
        idx++;
      }
      w -= 2;
    }
  }

  const startX = 0;
  const startY = (width - 1) / 2;

  function findTriange(sx, cy, w, h) {
    const smallW = w === 5 ? 1 : (w - 1) / 2;
    const smallH = Math.floor(h / 2);

    changeBlank(sx + smallH, cy, smallW, smallH);
    if (smallW === 1) return;

    findTriange(sx, cy, smallW, smallH);
    findTriange(sx + smallH, cy - (smallW + 1) / 2, smallW, smallH);
    findTriange(sx + smallH, cy + (smallW + 1) / 2, smallW, smallH);
  }

  findTriange(startX, startY, width, height);

  return arr.map((row) => row.join('')).join('\n');
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
