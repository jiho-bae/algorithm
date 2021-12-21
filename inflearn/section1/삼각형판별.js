function solution(a, b, c) {
  const sum = a + b + c;
  let max = a > b ? a : b;
  if (c > max) max = c;

  return sum - max - max > 0 ? 'YES' : 'NO';
}

console.log(solution(6, 7, 11));
console.log(solution(3, 4, 5));
