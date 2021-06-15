function solution(absolutes, signs) {
  let answer = 0;
  signs.map((sign, idx) => {
    if (sign) answer += absolutes[idx];
    else answer -= absolutes[idx];
  });
  return answer;
}
