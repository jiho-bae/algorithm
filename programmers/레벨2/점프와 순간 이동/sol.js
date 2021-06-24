function solution(n) {
  let cnt = 0;
  while (n > 0) {
    if (n % 2) cnt++;
    n = Math.floor(n / 2);
  }
  return cnt;
}
