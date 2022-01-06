function solution(n) {
  const halfN = Math.floor(n / 2);
  let cnt = 1;

  for (let i = 1; i <= halfN; i++) {
    let sum = i;
    for (let j = i + 1; j <= n; j++) {
      if (sum > n) break;
      if (sum === n) {
        cnt++;
        break;
      }
      sum += j;
    }
  }
  return cnt;
}
