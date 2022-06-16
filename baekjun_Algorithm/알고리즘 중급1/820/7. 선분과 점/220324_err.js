function sol(line) {
  let answer = Number.MAX_SAFE_INTEGER;
  const digits = 1e10;
  const smallDist = 1 / (digits * 10);
  const [ax, ay, az, bx, by, bz, cx, cy, cz] = line.split(' ').map(Number);
  let [lx, ly, lz] = [ax, ay, az];
  let [rx, ry, rz] = [bx, by, bz];

  function calcDistance(sx, sy, sz) {
    return (
      Math.floor(
        Math.sqrt((sx - cx) ** 2 + (sy - cy) ** 2 + (sz - cz) ** 2) * digits
      ) / digits
    );
  }

  let times = 10000000;
  function binarySearch() {
    while (times--) {
      let mx = (lx + rx) / 2;
      let my = (ly + ry) / 2;
      let mz = (lz + rz) / 2;

      let lLen = calcDistance(lx, ly, lz);
      let rLen = calcDistance(rx, ry, rz);
      let minLen = calcDistance(mx, my, mz);

      if (Math.abs(minLen - answer) < smallDist) {
        answer = minLen;
        break;
      }
      if (minLen < answer) answer = minLen;
      if (rLen - lLen) {
        [lx, ly, lz] = [mx, my, mz];
      } else {
        [rx, ry, rz] = [mx, my, mz];
      }
    }
  }

  binarySearch();

  return Math.ceil(answer * digits) / digits;
}

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    console.log(sol(line));
  })
  .on('close', () => {
    process.exit();
  });
