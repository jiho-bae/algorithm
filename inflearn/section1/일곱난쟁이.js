function solution(arr) {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (sum - arr[i] - arr[j] === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        return arr;
      }
    }
  }
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
