function solution(n, k) {
  const arr = Array.from({ length: n + 1 }, (_, i) => i);
  const answer = [];
  let restDigits = n;
  let order = k;

  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }

  while (answer.length !== n) {
    restDigits--;
    const restCnt = factorial(restDigits);
    const idx = Math.ceil(order / restCnt);
    order -= (idx - 1) * restCnt;

    const current = arr.splice(idx, 1)[0];
    answer.push(current);
  }

  return answer;
}
