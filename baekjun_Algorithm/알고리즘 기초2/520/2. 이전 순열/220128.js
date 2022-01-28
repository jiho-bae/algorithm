function sol([N, nums]) {
  N = +N;
  const numsArr = nums.split(' ').map(Number);
  const arr = [];
  let lastElem = Number.MAX_SAFE_INTEGER;

  while (lastElem > numsArr[numsArr.length - 1]) {
    lastElem = numsArr.pop();
    arr.push(lastElem);
  }

  const arrLen = arr.length;
  const numsArrLen = numsArr.length;
  if (arrLen === N) return -1;

  let targetMaxValue = Number.MIN_SAFE_INTEGER;
  let targetIdx = 0;

  for (let i = 0; i < arrLen; i++) {
    if (arr[i] < numsArr[numsArrLen - 1] && arr[i] > targetMaxValue) {
      targetMaxValue = arr[i];
      targetIdx = i;
    }
  }

  [arr[targetIdx], numsArr[numsArrLen - 1]] = [
    numsArr[numsArrLen - 1],
    arr[targetIdx],
  ];

  return [...numsArr, ...arr].join(' ');
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
