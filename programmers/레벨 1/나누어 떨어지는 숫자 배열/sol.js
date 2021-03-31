function solution(arr, divisor) {
  const answer = [];

  arr.forEach((element) => element % divisor === 0 && answer.push(element));

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
