function sol(arr) {
  const len = arr.length;
  const idxArr = Array.from({ length: len }, (_, idx) => idx);
  let max = 0;

  function findMax(num) {
    max = Math.max(max, num);
  }

  // row
  arr.forEach((row) => {
    const sum = row.reduce((acc, val) => acc + val, 0);
    findMax(sum);
  });

  // col
  for (let i = 0; i < len; i++) {
    const sum = idxArr.reduce((acc, j) => acc + arr[j][i], 0);
    findMax(sum);
  }

  // diagnol
  const leftDiagnol = idxArr.reduce((acc, i) => acc + arr[i][i], 0);
  findMax(leftDiagnol);
  const rightDiagnol = idxArr.reduce((acc, i) => acc + arr[i][len - i - 1], 0);
  findMax(rightDiagnol);

  return max;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(sol(arr));
