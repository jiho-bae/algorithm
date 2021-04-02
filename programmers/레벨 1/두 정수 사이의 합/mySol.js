function solution(a, b) {
  if (a === b) {
    return a;
  }

  let start = a > b ? b : a;
  let end = a < b ? b : a;

  for (let i = start + 1; i <= end; i++) {
    start += i;
  }
  return start;
}
