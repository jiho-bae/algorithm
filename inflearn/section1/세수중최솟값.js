function solution(a, b, c) {
  let answer = a < b ? a : b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(2, 5, 1));
