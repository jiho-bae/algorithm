function solution(arr1, arr2) {
  return arr1.map((arr, i) => {
    return arr.map((value, j) => {
      return value + arr2[i][j];
    });
  });
}
