function solution(arr1, arr2) {
  const row = arr1.length;
  const col = arr2[0].length;
  const cnt = arr2.length;
  const newArr = Array.from(Array(row), () => Array(col).fill(0));

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let sum = 0;
      for (let k = 0; k < cnt; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      newArr[i][j] = sum;
    }
  }
  return newArr;
}
