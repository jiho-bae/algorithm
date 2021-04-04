function solution(a, b) {
  return a.reduce((prodSum, value, index) => prodSum + value * b[index], 0);
}
