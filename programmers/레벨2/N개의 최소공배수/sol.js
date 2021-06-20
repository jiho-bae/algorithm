function solution(arr) {
  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  let answer = 1;
  for (let x of arr) {
    answer = lcm(answer, x);
  }
  return answer;
}
