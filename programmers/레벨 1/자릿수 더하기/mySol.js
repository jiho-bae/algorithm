function solution(n) {
  return [...String(n)].reduce((sum, value) => +sum + +value, 0);
}
