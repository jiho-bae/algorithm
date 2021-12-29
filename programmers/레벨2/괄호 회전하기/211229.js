function solution(s) {
  if (s.length % 2 === 1) return 0;
  const sLen = s.length;
  let answer = 0;
  let i = 0;

  while (sLen > i) {
    const str = s.slice(i) + s.slice(0, i);
    const brackets = [];
    let flag = 1;

    for (let word of str) {
      if (['(', '{', '['].includes(word)) brackets.push(word);
      else {
        const bracket = brackets.pop();
        if (bracket === '(' && word === ')') continue;
        if (bracket === '{' && word === '}') continue;
        if (bracket === '[' && word === ']') continue;
        flag = 0;
        break;
      }
    }
    if (flag) answer++;
    i++;
  }
  return answer;
}
