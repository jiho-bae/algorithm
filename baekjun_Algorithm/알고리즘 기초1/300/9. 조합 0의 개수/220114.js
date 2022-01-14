function sol(line) {
  const [n, m] = line.split(' ').map(Number);
  if (m === 0) return 0;

  const combi = [n, m, n - m];
  const twoArr = [];
  const fiveArr = [];

  combi.forEach((val) => {
    twoArr.push(cntFunc(val, 2));
    fiveArr.push(cntFunc(val, 5));
  });

  return Math.min(
    twoArr[0] - twoArr[1] - twoArr[2],
    fiveArr[0] - fiveArr[1] - fiveArr[2]
  );
}

function cntFunc(num, division) {
  let cnt = 0;
  while (num !== 0) {
    num = parseInt(num / division);
    cnt += num;
  }
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
