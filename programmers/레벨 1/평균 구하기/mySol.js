function solution(arr) {
  return arr.reduce((sum, value) => sum + value, 0) / arr.length;
}
