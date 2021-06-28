function solution(arr) {
  if (arr.length === 1) return arr[0][0] ? [0, 1] : [1, 0];
  const answer = [0, 0];
  const len = arr.length;
  const half = len / 2;

  const number = arr[0][0];
  let flag = true;

  out: for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (number !== arr[i][j]) {
        flag = false;
        break out;
      }
    }
  }
  if (flag) return number ? [0, 1] : [1, 0];

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      const compressArr = [];
      for (let k = 0; k < half; k++) {
        compressArr.push(arr[half * i + k].slice(j * half, (j + 1) * half));
      }
      const [zero, one] = solution(compressArr);
      answer[0] += zero;
      answer[1] += one;
    }
  }
  return answer;
}
