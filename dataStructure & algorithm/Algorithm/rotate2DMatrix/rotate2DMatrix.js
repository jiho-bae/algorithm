const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate2DMatrix(arr) {
  const n = arr.length;
  const m = arr[0].length;

  const result = Array.from({ length: m }, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      result[j][n - i - 1] = arr[i][j];
    }
  }

  return result;
}

rotate2DMatrix(arr);
