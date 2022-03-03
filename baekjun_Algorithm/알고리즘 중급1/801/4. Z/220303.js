function sol(input) {
  const [N, r, c] = input.split(' ').map(Number);
  let cnt = 0;
  let flag = 0;

  function recursiveVisit(sx, sy, ex, ey) {
    if (flag) return;
    const len = ex - sx + 1;
    if (sx > r || ex < r || sy > c || ey < c) {
      cnt += len * len;
      return;
    }

    if (len === 2) {
      if (sx <= r && sy <= c && ex >= r && ey >= c) {
        if (sx === r && sy === c) cnt += 1;
        else if (sx === r && ey === c) cnt += 2;
        else if (ex === r && sy === c) cnt += 3;
        else cnt += 4;
        flag = 1;
      } else {
        cnt += 4;
      }
      return;
    }

    recursiveVisit(sx, sy, sx + len / 2 - 1, sy + len / 2 - 1);
    recursiveVisit(sx, sy + len / 2, sx + len / 2 - 1, ey);
    recursiveVisit(sx + len / 2, sy, ex, sy + len / 2 - 1);
    recursiveVisit(sx + len / 2, sy + len / 2, ex, ey);
  }

  recursiveVisit(0, 0, 2 ** N - 1, 2 ** N - 1);

  return cnt - 1;
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
