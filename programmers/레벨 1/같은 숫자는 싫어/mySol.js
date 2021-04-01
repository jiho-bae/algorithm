function solution(arr) {
  return arr.filter((number, index) => number !== arr[index + 1]);
}
