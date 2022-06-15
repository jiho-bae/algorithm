function sol(input) {
  const cogWheels = input.slice(0, 4);
  cogWheels.unshift('');
  const K = +input[4];
  const rotates = input
    .slice(5, 5 + K)
    .map((str) => str.split(' ').map(Number));
  const clockwise = 1;
  const N = '0';
  let score = 0;
  const top = 0;
  const left = 6;
  const right = 2;

  function rotateClockwise(cogWheel) {
    return cogWheel[7] + cogWheel.slice(0, 7);
  }

  function rotateCounterClockwise(cogWheel) {
    return cogWheel.slice(1) + cogWheel[0];
  }

  function propagateRight(targetNum, dir) {
    const cogWheel = cogWheels[targetNum];
    const rightCogWheel = cogWheels[targetNum + 1];

    if (cogWheel[right] !== rightCogWheel[left]) {
      rotateCogWheel({
        targetNum: targetNum + 1,
        dir: -dir,
        propagatedNum: targetNum,
      });
    }
  }

  function propagateLeft(targetNum, dir) {
    const cogWheel = cogWheels[targetNum];
    const leftCogWheel = cogWheels[targetNum - 1];

    if (cogWheel[left] !== leftCogWheel[right]) {
      rotateCogWheel({
        targetNum: targetNum - 1,
        dir: -dir,
        propagatedNum: targetNum,
      });
    }
  }

  function rotateCogWheel({ targetNum, dir, propagatedNum }) {
    if (targetNum < 4 && targetNum + 1 !== propagatedNum) {
      propagateRight(targetNum, dir);
    }

    if (targetNum > 1 && targetNum - 1 !== propagatedNum) {
      propagateLeft(targetNum, dir);
    }

    const cogWheel = cogWheels[targetNum];
    cogWheels[targetNum] =
      dir === clockwise
        ? rotateClockwise(cogWheel)
        : rotateCounterClockwise(cogWheel);
  }

  rotates.forEach(([targetNum, dir]) => rotateCogWheel({ targetNum, dir }));

  const cogWheelTops = cogWheels.slice(1).map((cogWheel) => cogWheel[top]);
  cogWheelTops.forEach((cogWheelTop, i) => {
    if (cogWheelTop === N) return;
    score += 2 ** i;
  });

  return score;
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
