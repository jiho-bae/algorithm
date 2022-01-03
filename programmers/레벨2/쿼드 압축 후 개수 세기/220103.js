function solution(arr) {
  if (arr.length === 1) return arr[0][0] === 1 ? [0, 1] : [1, 0];

  const answer = [0, 0];
  const length = arr.length;
  const halfLength = length / 2;
  let isAllSame = 1;

  for (let i = 0; i < length; i++) {
    if (!isAllSame) break;
    for (let j = 0; j < length; j++) {
      if (arr[0][0] !== arr[i][j]) {
        isAllSame = 0;
        break;
      }
    }
  }

  if (isAllSame) return arr[0][0] === 1 ? [0, 1] : [1, 0];

  for (let x = 0; x < 2; x++) {
    for (let y = 0; y < 2; y++) {
      const splittedArr = [];
      for (let n = 0; n < halfLength; n++) {
        splittedArr.push(
          arr[halfLength * x + n].slice(halfLength * y, halfLength * (y + 1))
        );
      }
      const [sumZero, sumOne] = solution(splittedArr);
      answer[0] += sumZero;
      answer[1] += sumOne;
    }
  }
  return answer;
}
