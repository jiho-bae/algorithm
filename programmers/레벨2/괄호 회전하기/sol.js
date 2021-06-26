function solution(s) {
  if (s.length % 2 === 1) return 0;
  const sLen = s.length;
  let answer = 0;

  for (let i = 0; i < sLen; i++) {
    let str = s.slice(i) + s.slice(0, i);
    const stack = [];
    let flag = 1;
    for (let n of str) {
      if (n === "(" || n === "{" || n === "[") stack.push(n);
      else {
        const bracket = stack.pop();
        if (n === ")" && bracket === "(") continue;
        if (n === "}" && bracket === "{") continue;
        if (n === "]" && bracket === "[") continue;
        flag = 0;
        break;
      }
    }
    if (flag) answer++;
  }
  return answer;
}
