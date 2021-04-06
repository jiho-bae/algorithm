function solution(s) {
  let count = 0;

  if (s[0] === ")") return false;

  for (let char of [...s]) {
    if (char === "(") {
      count++;
    } else if (count >= 1 && char === ")") {
      count--;
    }
  }

  return !count;
}
