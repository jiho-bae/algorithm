function sol(input) {
  const N = +input[0];
  const firstBulbs = input[1].split('').map(Number);
  const secondBulbs = input[1].split('').map(Number);
  const target = input[2].split('').map(Number);
  let firstCnt = 0;
  let secondCnt = 0;

  function changeOnOff(index, bulbs) {
    for (let i = index - 1; i <= index + 1; i++) {
      if (i === -1 || i === N) continue;
      bulbs[i] = 1 - bulbs[i];
    }
  }

  secondBulbs[0] = 1 - secondBulbs[0];
  secondBulbs[1] = 1 - secondBulbs[1];
  secondCnt++;

  for (let i = 1; i < N; i++) {
    if (firstBulbs[i - 1] !== target[i - 1]) {
      changeOnOff(i, firstBulbs);
      firstCnt++;
    }
    if (secondBulbs[i - 1] !== target[i - 1]) {
      changeOnOff(i, secondBulbs);
      secondCnt++;
    }
  }

  if (firstBulbs.join('') !== input[2]) firstCnt = Infinity;
  if (secondBulbs.join('') !== input[2]) secondCnt = Infinity;

  if (firstCnt === Infinity && secondCnt === Infinity) return -1;
  return Math.min(firstCnt, secondCnt);
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
