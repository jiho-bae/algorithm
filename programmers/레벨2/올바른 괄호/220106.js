function solution(s) {
  let count = 0;

  if (s[0] === ')') return false;

  [...s].forEach((char) => {
    if (char === '(') {
      count++;
    } else if (count >= 1) {
      count--;
    }
  });

  return !count;
}
